import moment from "moment";

// initialize date ranges
const today = moment().startOf("day").toDate();
const past = moment().subtract(52, "week").startOf("week").toDate();

export default function adjustContributions(contributions) {
  let filteredContributions = contributions.filter((el) => {
    let date = moment(el.date).startOf("day").toDate();
    return date >= past && date <= today;
  });

  // index each element for speed
  const indexed = filteredContributions.map((ele, index) => {
    return { ...ele, index };
  });

  return indexed;
}
