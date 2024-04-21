import { IoSunny, IoMoon } from "react-icons/io5";
import { FaPlus } from "react-icons/fa";
import SubscriptionModal from "./SubscriptionModal";
import { isMobile } from "react-device-detect";

const Navbar = () => {
  return (
    <nav className="navbar p-4 items-center justify-between">
      <a className="btn btn-ghost font-bold text-3xl" href="/">
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
          {isMobile ? <FaPlus /> : "Add Subscription"}
        </button>
        <SubscriptionModal />
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
