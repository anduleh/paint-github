// IMPORTS
import nosub from "./media/gif/nosub.gif";
import novice from "./media/gif/novice.gif";
import beginner from "./media/gif/beginner.gif";
import intermediate from "./media/gif/intermediate.gif";
import advanced from "./media/gif/advanced.gif";
import expert from "./media/gif/expert.gif";
import normal from "./media/gif/normal.gif";
import happy from "./media/gif/happy.gif";
import matter from "./media/gif/matter.gif";
import dontmatter from "./media/gif/dontmatter.gif";
import signal from "./media/gif/signal.gif";
import profile from "./media/img/profile.png";

// COLORS
export const COLORS = ["#ebedf0", "#9be9a8", "#40c463", "#30a14e", "#216e39"];

// PAINT
export const BULBASAURS = [normal, happy];

export const MILLISECONDS_IN_ONE_DAY = 24 * 60 * 60 * 1000;
export const DAYS_IN_WEEK = 7;
export const MONTH_LABELS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
export const DAY_LABELS = ["", "Mon", "", "Wed", "", "Fri", ""];

// SUBSCRIPTION
export const SUBSCRIPTION_LEVELS = [
  { level: "novice", text: "sparse", image: novice },
  { level: "beginner", text: "light", image: beginner },
  { level: "intermediate", text: "moderate", image: intermediate },
  { level: "advanced", text: "heavy", image: advanced },
  { level: "expert", text: "very dense", image: expert },
];
export const NOSUB = nosub;

// INSPIRATION
export const CARDS = [
  {
    title: "Why your GitHub commits matter",
    image: matter,
    url: "https://www.youtube.com/watch?v=yaRwYYdiHxo",
  },
  {
    title: "Why your GitHub commits don't matter",
    image: dontmatter,
    url: "https://www.youtube.com/watch?v=hhFJizcY5Wg",
  },
  {
    title: "Signalling theory",
    image: signal,
    url: "https://www.youtube.com/watch?v=F8ZHZRMSxKg",
  },
];

// FOOTER
export const PROFILE = profile;
