// Norwegian Holidays for calendar.
export const norwegianHolidays = [
  { month: 0, day: 1, name: "New Year's Day" },

  // April & Easter
  { month: 3, day: 2, name: "Maundy Thursday" },
  { month: 3, day: 3, name: "Good Friday" },
  { month: 3, day: 4, name: "Holy Saturday" },
  { month: 3, day: 5, name: "Easter Sunday" },
  { month: 3, day: 6, name: "Easter Monday" },

  // May
  { month: 4, day: 1, name: "Labour Day" },
  { month: 4, day: 14, name: "Ascension Day" },
  { month: 4, day: 17, name: "Constitution Day" },
  { month: 4, day: 24, name: "Whit Sunday" },
  { month: 4, day: 25, name: "Whit Monday" },

  // December & Christmas
  { month: 11, day: 25, name: "Christmas Day" },
  { month: 11, day: 26, name: "Second Day of Christmas" },
  { month: 11, day: 24, name: "Christmas Eve" },
  { month: 11, day: 31, name: "New Year's Eve" },
];

export function isNorwegianHoliday(month, day) {
  return norwegianHolidays.find((h) => h.month === month && h.day === day);
}
