import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Typography from "@material-ui/core/Typography";

const messages = [
  "Choosing Starter...",
  "Catching Pokemon...",
  "Riding Bike...",
  "Throwing Pokeball...",
  "Reviving Pikachu...",
  "Feeding Berries...",
  "Leveling Up...",
  "Exploring Cave...",
  "Flying Around...",
  "Healing Pokemon...",
  "Cooking Stew...",
  "Battling Trainers...",
  "Beating Gym Leader...",
  "Evolving Eevee...",
  "Solving Puzzles...",
  "Downloading Cheats...",
  "Dodging Attacks...",
  "Swaping Pokemon...",
  "Using Potion...",
  "Joining Team...",
  "Gaining Experience...",
  "Collecting Items...",
  "Eating Candy...",
  "Mega Evolving...",
  "Finding Items...",
  "Using Pokedex...",
  "Buying Pokeballs...",
  "Impressing Misty...",
  "Using Surf...",
  "Sailing S.S. Anne...",
  "Destroying Gary...",
  "Calling Mom...",
  "Dating Nurse Joy...",
  "Getting Poisoned...",
  "Using Water Gun...",
  "Hatching Egg...",
  "Running Away...",
  "Losing HP...",
  "Feeding Vitamins...",
  "Falling Asleep...",
  "Beating the Elite Four...",
  "Completing Pokedex...",
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
