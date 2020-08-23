import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Typography from "@material-ui/core/Typography";

const messages = [
  "Choosing starter...",
  "Catching Pokemon...",
  "Beating Gym Leaders...",
  "Dating Nurse Joy...",
  "Riding Bike...",
  "Downloading Cheats...",
  "Beating the Elite Four...",
];

const Loader = (props) => {
  const { messages } = props;
  // Default to the first message passed
  const [messageIndex, setMessageIndex] = useState(0);

  useEffect(() => {
    // Move on to the next message every `n` milliseconds
    let timeout;
    if (messageIndex < messages.length - 1) {
      timeout = setTimeout(() => setMessageIndex(messageIndex + 1), 500);
    } else {
      setMessageIndex(0);
      timeout = setTimeout(() => setMessageIndex(messageIndex), 500);
    }

    return () => {
      clearTimeout(timeout);
    };
  }, [messages, messageIndex]);

  return messages[messageIndex];
};

const ColorButton = () => {
  let message = useSelector((state) => state.message);
  let submit = useSelector((state) => state.submit);

  return (
    <Typography
      variant="caption"
      align="right"
      style={
        submit === "error"
          ? { color: "red" }
          : submit === "success"
          ? { color: "#216e39" }
          : {}
      }
    >
      {submit === "waiting" ? <Loader messages={messages} /> : message}
    </Typography>
  );
};

export default ColorButton;
