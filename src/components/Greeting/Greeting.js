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

    const milTime = today.toLocaleTimeString(locale, {
      hour: "numeric",
      hour12: false,
      minute: "numeric",
    });

    return {
      date,
      milTime,
      time,
      wish,
    };
  };

  useDate();

  return (
    <div className="greeting__container">
      <span>{useDate().time ? "12 Hour" : "24 Hour"}</span>
      <span className="time--display">{useDate().time}</span>
      <span>{useDate().wish}</span>
    </div>
  );
};

export default Greeting;
