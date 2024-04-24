import PaymentCalendar from "./SubscriptionCard/PaymentCalendar";
import Subscriptions from "./Subscriptions";

const Homepage = () => {
  return (
    <div className="flex flex-col justify-center m-5 gap-6">
      <Subscriptions />
      <PaymentCalendar />
    </div>
  );
};

export default Homepage;
