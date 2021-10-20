import * as React from "react";
import "./greeting.style.css";

const Greeting = () => {
  const locale = "en";
  const [today, setDate] = React.useState(new Date()); // Save the current date to be able to trigger an update

  const useDate = () => {
    React.useEffect(() => {
      const timer = setInterval(() => {
        // Creates an interval which will update the current data every minute
        // This will trigger a rerender every component that uses the useDate hook.
        setDate(new Date());
      }, 60 * 1000);
      return () => {
        clearInterval(timer); // Return a funtion to clear the timer so that it will stop being called on unmount
      };
    }, []);

    const day = today.toLocaleDateString(locale, { weekday: "long" });
    const date = `${day}, ${today.getDate()} ${today.toLocaleDateString(
      locale,
      { month: "long" }
    )}\n\n`;

    const hour = today.getHours();
    const wish = `Good ${
      (hour < 12 && "Morning") || (hour < 17 && "Afternoon") || "Evening"
    } `;

    const time = today.toLocaleTimeString(locale, {
      hour: "numeric",
      hour12: true,
      minute: "numeric",
    });

    return {
      day,
      date,
      time,
      wish,
    };
  };

  useDate();

  const dayOfWeek = useDate().day;
  const isWeekend = dayOfWeek === 6 || dayOfWeek === 0;

  return (
    <div className="greeting__container">
      <span className="day--display">
        {isWeekend ? `Today is ${dayOfWeek}!` : `Happy ${dayOfWeek}!`}
      </span>
      <span
        style={{
          fontSize: "18px",
          fontFamily: "cursive",
          paddingBottom: "10px",
        }}
      >
        {isWeekend
          ? "Enjoy the weekend!"
          : `Don't limit your challenges, challenge your limits.`}
      </span>
      <span className="time--display">{useDate().time}</span>
      <span>{useDate().wish}</span>
    </div>
  );
};

export default Greeting;
