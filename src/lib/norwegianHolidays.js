

export const norwegianHolidays = [
    { month: 0, day: 1, name: "New Year's Day" },
    { month: 4, day: 1, name: "Labour Day" },
    { month: 4, day: 17, name: "Constitution Day" },
    { month: 11, day: 25, name: "Christmas Day" },
    { month: 11, day: 26, name: "Second Day of Christmas" },
    
    { month: 11, day: 24, name: "Christmas Eve" },
    { month: 11, day: 31, name: "New Year's Eve" },
];


export function isNorwegianHoliday(month, day) {
    return norwegianHolidays.find(
        (h) => h.month === month && h.day === day
    );
}
  
