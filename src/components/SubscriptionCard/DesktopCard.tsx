import { Subscription } from "../../types";

interface DesktopCard {
  subscription: Subscription;
  handleStatus: (id: number) => void;
  handleSubscription: (id: number) => void;
}

const DesktopCard: React.FC<DesktopCard> = ({
  subscription,
  handleStatus,
  handleSubscription,
}) => {
  return (
    <div key={subscription.id} className=" min-h-44 max-w-xl p-4">
      <div className="card h-full bordered shadow-lg bg-base-200 p-4">
        <div className="flex flex-col h-full justify-between ">
          <div>
            <div className="flex w-full justify-between">
              <h2 className="card-title">{subscription.name}</h2>
              <p>${subscription.price}</p>
            </div>
            <p className="text-xs italic">
              billed{" "}
              {(subscription.frequency.interval ?? 0) > 1
                ? `every ${subscription.frequency.interval}`
                : ""}{" "}
              {subscription.frequency.period}
            </p>
          </div>
          <div className="card-actions justify-end gap-4 mt-3">
            <button
              onClick={() => handleStatus(subscription.id)}
              className={`btn btn-sm min-w-28 ${
                subscription.status ? "btn-primary" : "btn-secondary"
              }`}
            >
              {subscription.status ? "Cancel" : "Subscribe"}
            </button>
            <button
              onClick={() => handleSubscription(subscription.id)}
              className="btn sm:btn-sm min-w-28 btn-primary"
            >
              Remove
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesktopCard;
