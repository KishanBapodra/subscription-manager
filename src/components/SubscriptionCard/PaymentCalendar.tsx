import Calendar from "react-calendar";
import "../../styles.css";
import { useSubscription } from "../../states/useSubscription";
import {
  addMonths,
  addWeeks,
  addYears,
  isSameDay,
  isWithinInterval,
} from "date-fns";

const PaymentCalendar = () => {
  const subscriptions = useSubscription((state) => state.subscriptions);

  const getNextPaymentDates = (
    startDate: string,
    frequency: string,
    status: boolean,
    interval: number = 1
  ) => {
    const start = new Date(startDate);
    const paymentDates: Date[] = [];
    if (!status) return paymentDates;

    for (let i = 0; i < 24; i++) {
      let nextPaymentDate: Date | null = null;
      switch (frequency) {
        case "Monthly":
          nextPaymentDate = addMonths(start, i * interval);
          break;
        case "Yearly":
          nextPaymentDate = addYears(start, i * interval);
          break;
        case "Weekly":
          nextPaymentDate = addWeeks(start, i * interval);
          break;
      }
      const showPaymentStart = new Date();
      const showPaymentEnd = addYears(showPaymentStart, 2);

      if (nextPaymentDate) {
        if (
          isWithinInterval(nextPaymentDate, {
            start: showPaymentStart,
            end: showPaymentEnd,
          })
        )
          paymentDates.push(nextPaymentDate);
      }
    }

    return paymentDates;
  };

  const paymentDues = subscriptions.map((sub) =>
    getNextPaymentDates(
      sub.startDate,
      sub.frequency.period,
      sub.status,
      sub.frequency.interval
    )
  );

  const tileClassName = ({ date }: { date: Date }) => {
    if (paymentDues.flat().find((dueDate) => isSameDay(dueDate, date))) {
      return "payment-due";
    }
  };

  return (
    <div className="sm:m-3 flex flex-col justify-center w-full items-center gap-3">
      {/* <h2 className="text-2xl font-bold">Payment Calendar</h2> */}
      <Calendar
        view="month"
        showNeighboringMonth={false}
        tileClassName={tileClassName}
      />
    </div>
  );
};

export default PaymentCalendar;
