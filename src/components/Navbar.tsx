import { useForm } from "react-hook-form";
import { IoSunny } from "react-icons/io5";
import { IoMoon } from "react-icons/io5";
import { useSubscription } from "../states/useSubscription";
import { v4 as uuidv4 } from "uuid";

const Navbar = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitted },
  } = useForm();
  const { subscriptions, addSubscription } = useSubscription();

  const onSubmit = (e) => {
    const subscription = {
      id: uuidv4(),
      name: e.name,
      price: e.price,
      status: true,
      frequency: {
        period: e.period,
        interval: e.interval,
      },
      startDate: Date.now(),
    };
    addSubscription(subscription);

    (document.getElementById("add_sub_modal") as HTMLDialogElement).close();
  };

  const handleClose = (e) => {
    reset();
  };
  return (
    <nav className="navbar p-4 items-center justify-between">
      <a className="btn btn-ghost text-3xl" href="/">
        SubHub
      </a>
      <div className="navbar-end gap-6">
        <button
          onClick={() => {
            (
              document.getElementById("add_sub_modal") as HTMLDialogElement
            ).showModal();
          }}
          className="btn btn-secondary text-lg"
        >
          Add Subscription
        </button>
        <dialog id="add_sub_modal" className="modal">
          <div className="modal-box md:w-2/5 3xl:w-1/4">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button
                onClick={handleClose}
                className="btn btn-sm btn-circle btn-ghost absolute right-5 top-5"
              >
                ✕
              </button>
            </form>
            <h3 className="font-bold text-xl">Subscription Service</h3>
            <form
              className="flex flex-col gap-4 mt-5"
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className="flex gap-4 justify-between">
                <div className="flex flex-col gap-[2px] w-4/6 max-w-xs">
                  <input
                    id="name"
                    className="input input-bordered w-full max-w-xs"
                    type="text"
                    placeholder="Subscription Service"
                    {...register("name", { required: true })}
                  />
                  {isSubmitted && errors.name && (
                    <span className="text-xs text-error">
                      Subscription service required
                    </span>
                  )}
                </div>
                <div className="flex flex-col gap-[2px] w-2/6">
                  <input
                    id="price"
                    className="input input-bordered"
                    type="text"
                    inputMode="numeric"
                    placeholder="Price"
                    {...register("price", {
                      required: true,
                      pattern: {
                        value: /^[+-]?([0-9]*[.])?[0-9]+$/,
                        message: "Invalid price",
                      },
                    })}
                  />
                  {isSubmitted && errors.price && (
                    <span className="text-xs text-error">Required number</span>
                  )}
                </div>
              </div>
              <div className="flex gap-4">
                <select
                  id="period"
                  defaultValue="Monthly"
                  {...register("period", { required: true })}
                  className="select select-bordered w-full max-w-xs"
                >
                  <option>Monthly</option>
                  <option>Yearly</option>
                  <option>Weekly</option>
                </select>
                <div className="flex flex-col gap-[2px] w-2/6">
                  <input
                    id="interval"
                    type="text"
                    inputMode="numeric"
                    placeholder="Interval"
                    {...register("interval", {
                      required: true,
                      pattern: {
                        value: /^\d+$/,
                        message: "Invalid interval",
                      },
                    })}
                    className="input input-bordered"
                  />
                  {isSubmitted && errors.interval && (
                    <span className="text-xs text-error">Required number</span>
                  )}
                </div>
              </div>
              <div className="modal-action mt-3">
                <button type="submit" className="btn">
                  Add Subscription
                </button>
              </div>
            </form>
          </div>
        </dialog>
        <label className="swap swap-rotate text-3xl mr-2">
          {/* this hidden checkbox controls the state */}
          <input type="checkbox" className="theme-controller" value="dracula" />
          <IoSunny className="swap-off" />
          <IoMoon className="swap-on" />
        </label>
      </div>
    </nav>
  );
};

export default Navbar;
