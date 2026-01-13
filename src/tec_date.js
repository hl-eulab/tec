// The Earth Calendar script date, by Danilo D'Antonio, Laboratorio Eudemonia
// Free to use: keep the original standard and credit the Author
// Full license at https://earthcal.hyperlinker.org

const today = new Date();

const off = today.getFullYear() - 1969;                 // offset years
const yos = off % 7;                                    // year-of-septennium index

const noy = ["of the Moon", "of the Atom", "of the Water", "of the Wind",
             "of the Fire", "of the Earth", "of the Sun"];
const moy = ["First month", "Second month", "Third month", "Fourth month",
             "Fifth month", "Sixth month", "Seventh month", "Eighth month",
             "Ninth month", "Tenth month", "Eleventh month", "Twelfth month"];
const dow = ["Sunday", "Moonday", "Atomday", "Waterday",
             "Winday", "Fireday", "Earthday"];

// classic browser output (backward compatible)
document.write(
  "Today is " + dow[today.getDay()] + " " + today.getDate() +
  ", " + moy[today.getMonth()] + ", year " + off + ", " + noy[yos]
);

// export for Node / bundler
if (typeof module !== "undefined") module.exports = { off, yos, noy, moy, dow };

// end
