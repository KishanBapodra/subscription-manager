import Calendar from "react-calendar";
import "../../styles.css";

function isSameDay(date1: Date, date2: Date) {
  return (
    date1.getFullYear() === date2.getFullYear() &&
    date1.getMonth() === date2.getMonth() &&
    date1.getDate() === date2.getDate()
  );
}

const PaymentCalendar = () => {
  // const [value, onChange] = useState(new Date());
  const value = new Date(2023, 4, 1); // Example selected `date`
  const paymentDueDates = [new Date(2023, 4, 15), new Date(2023, 5, 1)]; // Example payment due dates

  const tileClassName = ({ date }: { date: Date }) => {
    if (paymentDueDates.find((dueDate) => isSameDay(dueDate, date))) {
      return "payment-due";
    }
  };

  return (
    <div className="flex flex-col justify-center w-full items-center gap-3">
      <h2 className="text-2xl font-bold">Payment Calendar</h2>
      <Calendar value={value} tileClassName={tileClassName} />
    </div>
  );
};

export default PaymentCalendar;
