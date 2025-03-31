export const conversionMetrics = [
  'Length',
  'Temperature',
  'Area',
  'Volume',
  'Mass',
  'Speed',
  'Frequency',
  'Time',
  'Pressure',
  'Energy',
];

export const lengthUnits = [
  'Kilometer',
  'Meter',
  'Centimeter',
  'Millimeter',
  'Micrometer',
  'Nanometer',
  'Mile',
  'Yard',
  'Foot',
  'Inch',
  'Nautical mile',
];

export const temperatureUnits = ['Degree Celsius', 'Fahrenheit', 'Kelvin'];

export const areaUnits = [
  'Square kilometer',
  'Square meter',
  'Square mile',
  'Square yard',
  'Square foot',
  'Square inch',
  'Hectare',
  'Acre',
];

export const volumeUnits = [
  'US liquid gallon',
  'US liquid quart',
  'US liquid pint',
  'US legal cup',
  'US fluid ounce',
  'US tablespoon',
  'US teaspoon',
  'Cubic meter',
  'Liter',
  'Milliliter',
  'Imperial gallon',
  'Imperial quart',
  'Imperial pint',
  'Imperial cup',
  'Imperial fluid ounce',
  'Imperial tablespoon',
  'Imperial teaspoon',
  'Cubic foot',
  'Cubic inch',
];

export const massUnits = [
  'Metric ton',
  'Kilogram',
  'Gram',
  'Milligram',
  'Microgram',
  'Imperial ton',
  'US ton',
  'Stone',
  'Pound',
  'Ounce',
];

export const speedUnits = [
  'Mile per hour',
  'Foot per second',
  'Meter per second',
  'Kilometer per hour',
  'Knot',
];

export const frequencyUnits = ['Hertz', 'Kilohertz', 'Megahertz', 'Gigahertz'];

export const timeUnits = [
  'Nanosecond',
  'Microsecond',
  'Millisecond',
  'Second',
  'Minute',
  'Hour',
  'Day',
  'Week',
  'Month',
  'Calendar year',
  'Decade',
  'Century',
];

export const pressureUnits = [
  'Bar',
  'Pascal',
  'Pound-force per square inch',
  'Standard atmosphere',
  'Torr',
];

export const energyUnits = [
  'Joule',
  'Kilojoule',
  'Gram calorie',
  'Kilocalorie',
  'Watt hour',
  'Kilowatt hour',
  'Electronvolt',
  'British thermal unit',
  'US therm',
  'Foot-pound',
];

export const lengthConversionMatrix = [
  // From km, m, cm, mm, µm, nm, mi, yd, ft, in, NM
  [
    1, 1000, 100000, 1000000, 1e6, 1e9, 0.621371, 1093.61, 3280.84, 39370.1,
    0.53996,
  ], // From Kilometer
  [
    0.001, 1, 100, 1000, 1e3, 1e6, 0.000621371, 1.09361, 3.28084, 39.3701,
    0.00053996,
  ], // From Meter
  [
    0.00001, 0.01, 1, 10, 10000, 1e7, 6.2137e-6, 0.0109361, 0.0328084, 0.393701,
    5.3996e-6,
  ], // From Centimeter
  [
    0.000001, 0.001, 0.1, 1, 1000, 1e4, 6.2137e-7, 0.00109361, 0.00328084,
    0.0393701, 5.3996e-7,
  ], // From Millimeter
  [
    1e-6, 0.001, 0.0001, 0.001, 1, 1000, 6.2137e-10, 0.00000109361,
    0.00000328084, 0.0000393701, 5.3996e-10,
  ], // From Micrometer
  [
    1e-9, 1e-6, 0.0000001, 0.000001, 0.001, 1, 6.2137e-13, 1.09361e-9,
    3.28084e-9, 3.93701e-8, 5.3996e-13,
  ], // From Nanometer
  [
    1.60934, 1609.34, 160934, 1609340, 1.60934e6, 1.60934e9, 1, 1760, 5280,
    63360, 0.8684,
  ], // From Mile
  [
    0.0009144, 0.9144, 91.44, 914.4, 914400, 9.144e5, 0.000568182, 1, 3, 36,
    0.000493737,
  ], // From Yard
  [
    0.0003048, 0.3048, 30.48, 304.8, 304800, 3.048e5, 0.000189394, 0.333333, 1,
    12, 0.000164579,
  ], // From Foot
  [
    0.0000254, 0.0254, 2.54, 25.4, 25400, 2.54e4, 0.000015783, 0.0277778,
    0.0833333, 1, 1.371e-5,
  ], // From Inch
  [
    1.852, 1852, 185200, 1852000, 1.852e6, 1.852e9, 1.15078, 2025.37, 6076.12,
    72913.4, 1,
  ], // From Nautical mile
];

// Conversion factors for area: [Square Kilometer, Square Meter, Square Mile, Square Yard, Square Foot, Square Inch, Hectare, Acre]
export const areaConversionMatrix = [
  // km²   m²      mi²       yd²      ft²       in²       ha        ac
  [1, 1e6, 2.589988e6, 1.19599e7, 1.076391e7, 1.550003e9, 10000, 4046.86], // From Square Kilometer
  [
    1e-6, 1, 2.589988e-6, 1.19599e-5, 1.076391e-5, 1.550003e-3, 0.01,
    0.00404686,
  ], // From Square Meter
  [3.861e-7, 3.861e-7, 1, 3.098e-3, 2.788e-3, 4.0469e-5, 3.861e-5, 0.0015625], // From Square Mile
  [8.361e-7, 8.361e-7, 3.861e-4, 1, 9.0001e-1, 1.296e4, 8.361e-4, 0.0002471], // From Square Yard
  [9.2903e-6, 9.2903e-6, 3.861e-3, 1.11111, 1, 144, 9.2903e-6, 2.2957e-6], // From Square Foot
  [
    1.550003e-9, 1.550003e-9, 6.939e-6, 1.296e-5, 6.94444e-5, 1, 1.550003e-9,
    3.717e-10,
  ], // From Square Inch
  [1e-4, 100, 2.589988e-4, 1.19599e-3, 1.076391e-3, 1.550003e-5, 1, 0.00404686], // From Hectare
  [2.4711e-4, 2.4711e-4, 6.4516e-4, 4.463e-3, 4.356e-3, 6.94444e-5, 0.2471, 1], // From Acre
];

// Conversion factors for volume (in liters) - [US liquid gallon, US liquid quart, US liquid pint, US legal cup, US fluid ounce, US tablespoon, US teaspoon, Cubic meter, Liter, Milliliter, Imperial gallon, Imperial quart, Imperial pint, Imperial cup, Imperial fluid ounce, Imperial tablespoon, Imperial teaspoon, Cubic foot, Cubic inch]
export const volumeConversionMatrix = [
  [
    3.78541, 0.946353, 0.473176, 0.24, 0.0295735, 0.0147868, 0.00492892, 1000,
    1, 1000, 4.54609, 1.13652, 0.568261, 0.284131, 0.0284131, 0.0177582,
    0.0059194, 28.3168, 0.0163871,
  ], // From US liquid gallon
  [
    0.946353, 1, 0.473176, 0.24, 0.0295735, 0.0147868, 0.00492892, 1000, 1,
    1000, 1.13652, 1, 0.568261, 0.284131, 0.0284131, 0.0177582, 0.0059194,
    28.3168, 0.0163871,
  ], // From US liquid quart
  [
    0.473176, 0.473176, 1, 0.24, 0.0295735, 0.0147868, 0.00492892, 1000, 1,
    1000, 0.568261, 0.568261, 1, 0.284131, 0.0284131, 0.0177582, 0.0059194,
    28.3168, 0.0163871,
  ], // From US liquid pint
  [
    0.24, 0.24, 0.24, 1, 0.0295735, 0.0147868, 0.00492892, 1000, 1, 1000,
    0.284131, 0.284131, 0.284131, 1, 0.0284131, 0.0177582, 0.0059194, 28.3168,
    0.0163871,
  ], // From US legal cup
  [
    0.0295735, 0.0295735, 0.0295735, 0.0295735, 1, 0.0147868, 0.00492892, 1000,
    1, 1000, 0.0284131, 0.0284131, 0.0284131, 0.0284131, 1, 0.0177582,
    0.0059194, 28.3168, 0.0163871,
  ], // From US fluid ounce
  [
    0.0147868, 0.0147868, 0.0147868, 0.0147868, 0.0147868, 1, 0.00492892, 1000,
    1, 1000, 0.0177582, 0.0177582, 0.0177582, 0.0177582, 0.0177582, 1,
    0.0059194, 28.3168, 0.0163871,
  ], // From US tablespoon
  [
    0.00492892, 0.00492892, 0.00492892, 0.00492892, 0.00492892, 0.00492892, 1,
    1000, 1, 1000, 0.0059194, 0.0059194, 0.0059194, 0.0059194, 0.0059194,
    0.0059194, 1, 28.3168, 0.0163871,
  ], // From US teaspoon
  [
    1000, 1000, 1000, 1000, 1000, 1000, 1000, 1, 1, 1000, 4.54609, 1.13652,
    0.568261, 0.284131, 0.0284131, 0.0177582, 0.0059194, 28.3168, 0.0163871,
  ], // From Cubic meter
  [
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4.54609, 1.13652, 0.568261, 0.284131,
    0.0284131, 0.0177582, 0.0059194, 28.3168, 0.0163871,
  ], // From Liter
  [
    1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1, 4546.09, 1136.52,
    568.261, 284.131, 28.4131, 17.7582, 5.9194, 28.3168, 16.3871,
  ], // From Milliliter
  [
    4.54609, 1.13652, 0.568261, 0.284131, 0.0284131, 0.0177582, 0.0059194,
    28.3168, 16.3871, 0.00454609, 4.54609, 1.13652, 0.568261, 0.284131,
  ], // From Imperial gallon
  // And so on for all the other units...
];

// Conversion matrix for mass (in kilograms) - [Metric ton, Kilogram, Gram, Milligram, Microgram, Imperial ton, US ton, Stone, Pound, Ounce]
export const massConversionMatrix = [
  [
    1, 1000, 1e6, 1e9, 1e12, 1016.04691, 907.18474, 6350.29318, 453.59237,
    28.3495231,
  ], // From Metric ton
  [
    0.001, 1, 1000, 1e6, 1e9, 1.01604691, 0.90718474, 6.35029318, 0.45359237,
    0.0283495231,
  ], // From Kilogram
  [
    1e-6, 1e-3, 1, 1000, 1e6, 1.01604691e-3, 9.0718474e-4, 6.35029318e-3,
    4.5359237e-2, 2.83495231e-3,
  ], // From Gram
  [
    1e-9, 1e-6, 1e-3, 1, 1000, 1.01604691e-6, 9.0718474e-7, 6.35029318e-6,
    4.5359237e-5, 2.83495231e-6,
  ], // From Milligram
  [
    1e-12, 1e-9, 1e-6, 1e-3, 1, 1.01604691e-9, 9.0718474e-10, 6.35029318e-9,
    4.5359237e-8, 2.83495231e-9,
  ], // From Microgram
  [
    0.0009842, 0.9842065, 1016.04691, 1.01604691e6, 1.01604691e9, 1, 0.892857,
    6.259824, 453.59237, 28.3495231,
  ], // From Imperial ton
  [
    0.00110231, 1.10231131, 1.10231131e3, 1.10231131e6, 1.10231131e9, 1.118, 1,
    6.9140009, 453.59237, 28.3495231,
  ], // From US ton
  [
    0.00015747, 0.157473, 157.473, 1.57473e5, 1.57473e8, 0.164, 0.1456, 1, 14,
    0.875,
  ], // From Stone
  [
    2.20462262, 2.20462262, 2204.62262, 2.20462262e6, 2.20462262e9, 2.240918e3,
    2.240918e3, 14, 1, 16,
  ], // From Pound
  [
    35.2739619, 35.2739619, 35273.9619, 3.52739619e7, 3.52739619e10, 35.2, 35.2,
    0.875, 16, 1,
  ], // From Ounce
];

// Conversion matrix for speed (in meters per second) - [Mile per hour, Foot per second, Meter per second, Kilometer per hour, Knot]
export const speedConversionMatrix = [
  [1, 1.46667, 0.44704, 1.609344, 0.868976], // From Mile per hour (mph)
  [0.681818, 1, 0.3048, 1.09728, 0.591484], // From Foot per second (ft/s)
  [2.23694, 3.28084, 1, 3.6, 1.943844], // From Meter per second (m/s)
  [0.621371, 0.911344, 0.277778, 1, 0.539957], // From Kilometer per hour (km/h)
  [1.15078, 1.68781, 0.514444, 1.852, 1], // From Knot (kn)
];

// Conversion matrix for frequency (in Hertz) - [Hertz, Kilohertz, Megahertz, Gigahertz]
export const frequencyConversionMatrix = [
  [1, 1e-3, 1e-6, 1e-9], // From Hertz (Hz)
  [1e3, 1, 1e-3, 1e-6], // From Kilohertz (kHz)
  [1e6, 1e3, 1, 1e-3], // From Megahertz (MHz)
  [1e9, 1e6, 1e3, 1], // From Gigahertz (GHz)
];

// Conversion matrix for time (in seconds) - [Nanosecond, Microsecond, Millisecond, Second, Minute, Hour, Day, Week, Month, Calendar year, Decade, Century]
export const timeConversionMatrix = [
  [
    1e-9, 1e-6, 1e-3, 1, 60, 3600, 86400, 604800, 2629746, 31556952, 315569520,
    3155695200,
  ], // From Nanosecond
  [
    1e-6,
    1e-3,
    1,
    1000,
    60 * 1000,
    3600 * 1000,
    86400 * 1000,
    604800 * 1000,
    2629746 * 1000,
    31556952 * 1000,
    315569520 * 1000,
    3155695200 * 1000,
  ], // From Microsecond
  [
    1e-3,
    1,
    1000,
    1000000,
    60 * 1000000,
    3600 * 1000000,
    86400 * 1000000,
    604800 * 1000000,
    2629746 * 1000000,
    31556952 * 1000000,
    315569520 * 1000000,
    3155695200 * 1000000,
  ], // From Millisecond
  [
    1,
    1000,
    1e3,
    1e6,
    60 * 1e6,
    3600 * 1e6,
    86400 * 1e6,
    604800 * 1e6,
    2629746 * 1e6,
    31556952 * 1e6,
    315569520 * 1e6,
    3155695200 * 1e6,
  ], // From Second
  [
    60,
    60 * 1000,
    60 * 1000000,
    60 * 1e6,
    1,
    60,
    1440,
    10080,
    43830,
    525960,
    5259600,
    52596000,
  ], // From Minute
  [
    3600,
    3600 * 1000,
    3600 * 1000000,
    3600 * 1e6,
    60,
    1,
    24,
    168,
    73000,
    876000,
    8760000,
    87600000,
  ], // From Hour
  [
    86400,
    86400 * 1000,
    86400 * 1000000,
    86400 * 1e6,
    1440,
    24,
    1,
    7,
    365.2425,
    3652.425,
    36524.25,
    365242.5,
  ], // From Day
  [
    604800,
    604800 * 1000,
    604800 * 1000000,
    604800 * 1e6,
    10080,
    168,
    7,
    1,
    365.2425 / 7,
    3652.425 / 7,
    36524.25 / 7,
    365242.5 / 7,
  ], // From Week
  [
    2629746,
    2629746 * 1000,
    2629746 * 1000000,
    2629746 * 1e6,
    43830,
    73000,
    365.2425,
    365.2425 / 7,
    1,
    10,
    100,
    1000,
  ], // From Month
  [
    31556952,
    31556952 * 1000,
    31556952 * 1000000,
    31556952 * 1e6,
    525960,
    876000,
    365.2425,
    365242.5,
    365242.5 / 12,
    1,
    10,
    100,
  ], // From Calendar year
  [
    315569520,
    315569520 * 1000,
    315569520 * 1000000,
    315569520 * 1e6,
    5259600,
    8760000,
    3652425,
    365242.5 / 10,
    365242.5 / 12,
    10,
    100,
    1000,
  ], // From Decade
  [
    3155695200,
    3155695200 * 1000,
    3155695200 * 1000000,
    3155695200 * 1e6,
    52596000,
    87600000,
    36524250,
    3652425 / 10,
    3652425 / 12,
    100,
    1000,
    10000,
  ], // From Century
];

// Conversion matrix for pressure (in Pascal) - [Bar, Pascal, Pound-force per square inch, Standard atmosphere, Torr]
export const pressureConversionMatrix = [
  [1, 100000, 6894.76, 101325, 133.322], // From Bar
  [1e-5, 1, 0.0689476, 0.000986923, 0.00133322], // From Pascal
  [1.450377, 145.0377, 1, 14.696, 0.18893], // From Pound-force per square inch (psi)
  [9.8692e-6, 101325, 0.068046, 1, 1.3158], // From Standard atmosphere (atm)
  [0.00750062, 750.062, 5.0075, 0.75989, 1], // From Torr
];

// Conversion matrix for energy (in Joules) - [Joule, Kilojoule, Gram calorie, Kilocalorie, Watt hour, Kilowatt hour, Electronvolt, British thermal unit, US therm, Foot-pound]
export const energyConversionMatrix = [
  [
    1, 1000, 0.2390057, 0.2390057, 0.2777778, 2777.7778, 6.242e18, 0.947817,
    9.47817e-7, 0.737562,
  ], // From Joule
  [
    0.001, 1, 0.0002390057, 0.0002390057, 0.0002777778, 2.7777778, 6.242e15,
    0.000947817, 9.47817e-10, 0.000737562,
  ], // From Kilojoule
  [4.184, 4184, 1, 1, 1.162, 1162, 2.948e19, 0.404869, 4.04869e-6, 0.314493], // From Gram calorie
  [4.184, 4184, 1, 1, 1.162, 1162, 2.948e19, 0.404869, 4.04869e-6, 0.314493], // From Kilocalorie
  [
    3.6, 3600, 0.8598452, 0.8598452, 1, 1000, 2.767e22, 0.261804, 2.61804e-5,
    1.332224,
  ], // From Watt hour
  [
    3.6e3, 3.6e6, 0.8598452e3, 0.8598452e3, 1, 1000, 2.767e25, 0.261804e3,
    2.61804e-2, 1.332224e3,
  ], // From Kilowatt hour
  [
    1.60218e-19, 1.60218e-16, 3.8094e-20, 3.8094e-20, 4.44444e-20, 4.44444e-17,
    1, 6.242e-23, 6.242e-29, 5.53344e-23,
  ], // From Electronvolt
  [
    1.05506, 1055.06, 0.2521644, 0.2521644, 0.293071, 2930.71, 6.242e18, 1,
    9.47817e-6, 0.737562,
  ], // From British thermal unit (BTU)
  [
    1e-6, 1e-3, 2.38456e-7, 2.38456e-7, 2.77778e-7, 2.77778e-4, 6.242e12,
    1.05506e-6, 1, 7.37562e-7,
  ], // From US therm
  [
    1.35582, 1355.82, 0.3240487, 0.3240487, 0.398528, 3985.28, 9.267e18,
    1.37285, 1.37285e-5, 1,
  ], // From Foot-pound
];

export const energyDescription = {
  header: 'Energy Conversion List',
  list: [
    '1 Joule (J) = 1 Joule',
    '1 Kilojoule (kJ) = 1000 Joules',
    '1 Gram calorie (cal) = 4.184 Joules',
    '1 Kilocalorie (kcal) = 4184 Joules',
    '1 Watt hour (Wh) = 3600 Joules',
    '1 Kilowatt hour (kWh) = 3,600,000 Joules',
    '1 Electronvolt (eV) = 1.60218e-19 Joules',
    '1 British thermal unit (BTU) = 1055.06 Joules',
    '1 US therm = 1,055,055.85 Joules',
    '1 Foot-pound (ft-lb) = 1.35582 Joules',
  ],
};

export const pressureDescription = {
  header: 'Pressure Conversion List',
  list: [
    '1 Bar = 100,000 Pascal (Pa)',
    '1 Pascal (Pa) = 1 Pascal (Pa)',
    '1 Pound-force per square inch (psi) = 6894.76 Pascal (Pa)',
    '1 Standard atmosphere (atm) = 101,325 Pascal (Pa)',
    '1 Torr = 133.322 Pascal (Pa)',
  ],
};

export const timeDescription = {
  header: 'Time Conversion List',
  list: [
    '1 Nanosecond (ns) = 1e-9 seconds',
    '1 Microsecond (µs) = 1e-6 seconds',
    '1 Millisecond (ms) = 1e-3 seconds',
    '1 Second (s) = 1 second',
    '1 Minute (min) = 60 seconds',
    '1 Hour (hr) = 3600 seconds',
    '1 Day (d) = 86400 seconds',
    '1 Week (w) = 604800 seconds',
    '1 Month (mo) = 2,629,746 seconds (average month length)',
    '1 Calendar year (y) = 31,556,952 seconds (365.2425 days)',
    '1 Decade = 10 years = 315,569,520 seconds',
    '1 Century = 100 years = 3,155,695,200 seconds',
  ],
};

export const frequencyDescription = {
  header: 'Frequency Conversion List',
  list: [
    '1 Hertz (Hz) = 1 Hz',
    '1 Kilohertz (kHz) = 1,000 Hz',
    '1 Megahertz (MHz) = 1,000,000 Hz',
    '1 Gigahertz (GHz) = 1,000,000,000 Hz',
  ],
};

export const speedDescription = {
  header: 'Speed Conversion List',
  list: [
    'Mile per hour (mph) = 1609.344 meters per hour',
    'Foot per second (ft/s) = 0.3048 meters per second',
    'Meter per second (m/s) = 1 meter per second',
    'Kilometer per hour (km/h) = 1000 meters per hour',
    'Knot (kn) = 1852 meters per hour',
  ],
};

export const massDescription = {
  header: 'Mass Conversion List',
  list: [
    'Metric ton (t) = 1,000 kilograms',
    'Kilogram (kg) = 1 kilogram',
    'Gram (g) = 0.001 kilograms',
    'Milligram (mg) = 0.000001 kilograms',
    'Microgram (µg) = 0.000000001 kilograms',
    'Imperial ton (long ton) = 1016.04691 kilograms',
    'US ton (short ton) = 907.18474 kilograms',
    'Stone (st) = 6.35029318 kilograms',
    'Pound (lb) = 0.45359237 kilograms',
    'Ounce (oz) = 0.0283495231 kilograms',
  ],
};

export const volumeDescription = {
  header: 'Volume Conversion List',
  list: [
    'US liquid gallon (US gal) = 3.78541 liters',
    'US liquid quart (US qt) = 0.946353 liters',
    'US liquid pint (US pt) = 0.473176 liters',
    'US legal cup (US cup) = 0.24 liters',
    'US fluid ounce (US fl oz) = 0.0295735 liters',
    'US tablespoon (US tbsp) = 0.0147868 liters',
    'US teaspoon (US tsp) = 0.00492892 liters',
    'Cubic meter (m³) = 1000 liters',
    'Liter (L) = 1 liter',
    'Milliliter (mL) = 0.001 liters',
    'Imperial gallon (UK gal) = 4.54609 liters',
    'Imperial quart (UK qt) = 1.13652 liters',
    'Imperial pint (UK pt) = 0.568261 liters',
    'Imperial cup (UK cup) = 0.284131 liters',
    'Imperial fluid ounce (UK fl oz) = 0.0284131 liters',
    'Imperial tablespoon (UK tbsp) = 0.0177582 liters',
    'Imperial teaspoon (UK tsp) = 0.0059194 liters',
    'Cubic foot (ft³) = 28.3168 liters',
    'Cubic inch (in³) = 0.0163871 liters',
  ],
};

export const areaDescription = {
  header: 'Area Conversion List',
  list: [
    '1 Square Kilometer (km²) = 1,000,000 Square Meters (m²)',
    '1 Square Mile (mi²) = 2,589,988.11 Square Meters (m²)',
    '1 Square Yard (yd²) = 0.836127 Square Meters (m²)',
    '1 Square Foot (ft²) = 0.092903 Square Meters (m²)',
    '1 Square Inch (in²) = 0.00064516 Square Meters (m²)',
    '1 Hectare (ha) = 10,000 Square Meters (m²)',
    '1 Acre (ac) = 4046.86 Square Meters (m²)',
  ],
};

export const temperatureDescription = {
  header: 'Temperature Conversion Formulas',
  list: [
    'Celsius to Fahrenheit:</strong> F = 9/5 × C + 32',
    'Fahrenheit to Celsius:</strong> C = 5/9 × (F - 32)',
    'Celsius to Kelvin:</strong> K = C + 273.15',
    'Kelvin to Celsius:</strong> C = K - 273.15',
    'Fahrenheit to Kelvin:</strong> K = 5/9 × (F - 32) + 273.15',
    'Kelvin to Fahrenheit:</strong> F = 9/5 × (K - 273.15) + 32',
  ],
};

export const lengthDescription = {
  header: 'Length/Distance Units',
  list: [
    'Kilometer (km)',
    'Meter (m)',
    'Centimeter (cm)',
    'Millimeter (mm)',
    'Micrometer (µm)',
    'Nanometer (nm)',
    'Mile (mi)',
    'Yard (yd)',
    'Foot (ft)',
    'Inch (in)',
    'Nautical mile (NM)',
  ],
};
