import { Subscription } from "../../types";

interface MobileCard {
  subscription: Subscription;
  handleStatus: (id: string) => void;
  handleSubscription: (id: string) => void;
}

const MobileCard: React.FC<MobileCard> = ({
  subscription,
  handleStatus,
  handleSubscription,
}) => {
  return (
    <div key={subscription.id} className="card shadow-sm bg-base-100 mb-5">
      <div className="p-5">
        <div className="flex justify-between items-center gap-2">
          <div className="flex-grow">
            <h2 className="card-title">{subscription.name}</h2>
            <p className="text-sm min-w-fit whitespace-nowrap">
              ${subscription.price} / {subscription.frequency.period}
            </p>
          </div>
          <div className="card-actions justify-end max-w-[128px] flex-shrink">
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
              className="btn btn-sm min-w-28 bg-base-200"
            >
              Remove
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileCard;
