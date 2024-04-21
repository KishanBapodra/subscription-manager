import { useState, useEffect } from "react";
import MobileCard from "./SubscriptionCard/MobileCard";
import { Subscription } from "../types";
import { isMobile } from "react-device-detect";
import DesktopCard from "./SubscriptionCard/DesktopCard";
import { useSubscription } from "../states/useSubscription";

const Subscriptions = () => {
  // const [subscriptions, setSubscriptions] = useState<Subscription[]>([]);
  const { subscriptions, setSubscriptions, removeSubscription } =
    useSubscription();
  const [isBelowMd, setIsBelowMd] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const storedSubscriptions = localStorage.getItem("subscriptions");

    if (storedSubscriptions) {
      setSubscriptions(JSON.parse(storedSubscriptions));
    }
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsBelowMd(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleStatus = (id: string) => {
    const updatedSubscriptions = subscriptions.map(
      (subscription: Subscription) => {
        if (subscription.id === id) {
          return { ...subscription, status: !subscription.status };
        }
        return subscription;
      }
    );
    localStorage.setItem("subscriptions", JSON.stringify(updatedSubscriptions));
    setSubscriptions(updatedSubscriptions);
  };

  const handleSubscription = (id: string) => {
    removeSubscription(id);
  };

  return (
    <>
      {isBelowMd || isMobile ? (
        <div className="collapse collapse-arrow bg-base-200 h-auto">
          <input type="checkbox" defaultChecked={true} />
          <div className="collapse-title text-2xl font-medium">
            Current Subscriptions
          </div>
          <div className="pb-0 collapse-content">
            {subscriptions?.map((subscription: Subscription) => {
              return (
                <MobileCard
                  key={subscription.id}
                  subscription={subscription}
                  handleStatus={handleStatus}
                  handleSubscription={handleSubscription}
                />
              );
            })}
          </div>
        </div>
      ) : (
        <div className="flex flex-wrap w-full">
          {subscriptions?.map((subscription: Subscription) => {
            return (
              <DesktopCard
                key={subscription.id}
                subscription={subscription}
                handleStatus={handleStatus}
                handleSubscription={handleSubscription}
              />
            );
          })}
        </div>
      )}
    </>
  );
};

export default Subscriptions;
