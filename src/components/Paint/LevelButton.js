// react
import React from "react";

// material ui
import Button from "@material-ui/core/Button";

// redux
import { useSelector, useDispatch } from "react-redux";

// actions
import { updateContributions, updateBulbasaur } from "../../actions";

// helpers
import shuffle from "../../helpers/shuffle.js";
import longPress from "../../helpers/longPress.js";

// base styles
let base = {
  width: "100%",
  minWidth: "0px",
  height: "40px",
  overflow: "hidden",
  border: "1px solid black",
};

const LevelButton = (props) => {
  // dispatch
  const dispatch = useDispatch();

  // selectors
  const contributions = useSelector((state) => state.contributions);
  const bulbasaur = useSelector((state) => state.bulbasaur);

  const generateRandomContributionsForLevel = (level) => {
    if (bulbasaur) {
      dispatch(updateBulbasaur(0));
    }
    const randomContributions = generateRandomContributions(level);
    dispatch(updateContributions(randomContributions));
  };

  const onLongPress = () => {
    dispatch(updateBulbasaur(1));
    let greenBeans = contributions.map((element) => {
      return { ...element, newIntensity: 4 };
    });
    dispatch(updateContributions(greenBeans));
  };

  const onClickExpert = () => {
    if (bulbasaur) {
      dispatch(updateBulbasaur(0));
    }
    const expertRandomContributions = generateRandomContributions("expert");
    dispatch(updateContributions(expertRandomContributions));
  };

  const defaultOptions = {
    shouldPreventDefault: true,
    delay: 3000,
  };

  const longPressEvent = longPress(onLongPress, onClickExpert, defaultOptions);

  const generateRandomContributions = (level) => {
    let a;
    let b;
    let c;
    let d;
    let e;

    switch (level) {
      case "novice":
        a = 80;
        b = 10;
        c = 5;
        d = 3;
        e = 2;
        break;
      case "beginner":
        a = 60;
        b = 20;
        c = 10;
        d = 5;
        e = 5;
        break;
      case "intermediate":
        a = 30;
        b = 20;
        c = 20;
        d = 20;
        e = 10;
        break;
      case "advanced":
        a = 10;
        b = 20;
        c = 20;
        d = 30;
        e = 20;
        break;
      case "expert":
        a = 0;
        b = 5;
        c = 15;
        d = 40;
        e = 40;
        break;
      default:
        a = 10;
        b = 20;
        c = 30;
        d = 20;
        e = 30;
    }

    var total = [];

    var ichi = new Array(Math.ceil(contributions.length * (a / 100))).fill(0);
    var ni = new Array(Math.ceil(contributions.length * (b / 100))).fill(1);
    var san = new Array(Math.ceil(contributions.length * (c / 100))).fill(2);
    var shi = new Array(Math.ceil(contributions.length * (d / 100))).fill(3);
    var go = new Array(Math.ceil(contributions.length * (e / 100))).fill(4);

    total = total.concat(ichi).concat(ni).concat(san).concat(shi).concat(go);

    shuffle(total);

    let shuffled = contributions.map((element, index) => {
      if (total[index] >= element.intensity) {
        return { ...element, newIntensity: total[index] };
      } else {
        return { ...element };
      }
    });

    return shuffled;
  };

  return (
    <Button
      variant="contained"
      style={base}
      onClick={
        props.level !== "expert"
          ? () => {
              generateRandomContributionsForLevel(props.level);
            }
          : null
      }
      {...(props.level === "expert" ? { ...longPressEvent } : null)}
    >
      {props.level}
    </Button>
  );
};

export default LevelButton;
