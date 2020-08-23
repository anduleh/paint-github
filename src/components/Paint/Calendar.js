import React from "react";
import { useSelector, useDispatch } from "react-redux";

import CalendarHeatmap from "./CalendarHeatmap";

// actions
import { updateContributions } from "../..//actions";

const Calendar = (props) => {
  // selectors
  var contributions = useSelector((state) => state.contributions);
  const shade = useSelector((state) => state.shade);

  // dispatch
  const dispatch = useDispatch();

  const handleContributionUpdate = (event, value) => {
    if (value.intensity <= shade) {
      let updatedContributions = [...contributions];
      updatedContributions[value.index] = { ...value, newIntensity: shade };
      dispatch(updateContributions(updatedContributions));
    }
  };

  const handleContributionUpdateOnMouseOver = (event, value) => {
    // check if mouse button is down
    if (event.buttons === 1 && value.intensity <= shade) {
      let updatedContributions = [...contributions];
      updatedContributions[value.index] = { ...value, newIntensity: shade };
      dispatch(updateContributions(updatedContributions));
    }
  };

  return (
    <CalendarHeatmap
      gutterSize={2}
      startDate={contributions[0].date}
      endDate={contributions[contributions.length - 1].date}
      values={contributions}
      showMonthLabels={true}
      onMouseOver={handleContributionUpdateOnMouseOver}
      onMouseDown={handleContributionUpdate}
      onTouch={handleContributionUpdate}
      display={props.display}
      classForValue={(value) => {
        let intensity = props.before ? "intensity" : "newIntensity";
        let pointer = props.display ? "" : "pointer";
        switch (value) {
          case !value:
            return `color-empty ${pointer}`;
          case value[intensity] > 4:
            return `color-github-4 ${pointer}`;
          default:
            return `color-github-${value[intensity]} ${pointer}`;
        }
      }}
      tooltipDataAttrs={(value) => {
        return {
          "data-tip": `<span style="color: #dfe2e5"><b>${
            value.count || "No"
          } contribution${
            value.count !== 1 ? "s" : ""
          }</b></span><span style="color: #959da5"> on ${
            value.formattedDate
          }</span>`,
        };
      }}
    />
  );
};

export default React.memo(Calendar);
