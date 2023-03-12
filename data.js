const monthData = [
	{month: "July", 	startDateID: 0, 	endDateID: 30},
	{month: "August", startDateID: 31, 	endDateID: 61},
	{month: "September", 	startDateID: 62, 	endDateID: 91},
	{month: "October", 	startDateID: 92, 	endDateID: 122},
	{month: "November", 		startDateID: 123, 	endDateID: 152},
	{month: "December", 	startDateID: 153, 	endDateID: 183},
	{month: "January", 	startDateID: 184, 	endDateID: 214},
	{month: "February", 	startDateID: 215, 	endDateID: 242},
	{month: "March",startDateID: 243, 	endDateID: 273},
	{month: "April", 	startDateID: 274, 	endDateID: 303},
	{month: "May", startDateID: 304, 	endDateID: 334},
	{month: "June",	startDateID: 335, 	endDateID: 364}
];

const data = [
  {
    "": 0,
    "date": "2014-7-1",
    "actual_mean_temp": 81,
    "actual_min_temp": 70,
    "actual_max_temp": 91,
    "actual_precipitation": 0,
    "location": "CLT"
  },
  {
    "": 1,
    "date": "2014-7-2",
    "actual_mean_temp": 85,
    "actual_min_temp": 74,
    "actual_max_temp": 95,
    "actual_precipitation": 0,
    "location": "CLT"
  },
  {
    "": 2,
    "date": "2014-7-3",
    "actual_mean_temp": 82,
    "actual_min_temp": 71,
    "actual_max_temp": 93,
    "actual_precipitation": 0.14,
    "location": "CLT"
  },
  {
    "": 3,
    "date": "2014-7-4",
    "actual_mean_temp": 75,
    "actual_min_temp": 64,
    "actual_max_temp": 86,
    "actual_precipitation": 0,
    "location": "CLT"
  },
  {
    "": 4,
    "date": "2014-7-5",
    "actual_mean_temp": 72,
    "actual_min_temp": 60,
    "actual_max_temp": 84,
    "actual_precipitation": 0,
    "location": "CLT"
  },
  {
    "": 5,
    "date": "2014-7-6",
    "actual_mean_temp": 74,
    "actual_min_temp": 61,
    "actual_max_temp": 87,
    "actual_precipitation": 0,
    "location": "CLT"
  },
  {
    "": 6,
    "date": "2014-7-7",
    "actual_mean_temp": 79,
    "actual_min_temp": 67,
    "actual_max_temp": 91,
    "actual_precipitation": 0,
    "location": "CLT"
  },
  {
    "": 7,
    "date": "2014-7-8",
    "actual_mean_temp": 83,
    "actual_min_temp": 72,
    "actual_max_temp": 94,
    "actual_precipitation": 0,
    "location": "CLT"
  },
  {
    "": 8,
    "date": "2014-7-9",
    "actual_mean_temp": 80,
    "actual_min_temp": 71,
    "actual_max_temp": 89,
    "actual_precipitation": 0.15,
    "location": "CLT"
  },
  {
    "": 9,
    "date": "2014-7-10",
    "actual_mean_temp": 78,
    "actual_min_temp": 71,
    "actual_max_temp": 85,
    "actual_precipitation": 0,
    "location": "CLT"
  },
  {
    "": 10,
    "date": "2014-7-11",
    "actual_mean_temp": 78,
    "actual_min_temp": 68,
    "actual_max_temp": 87,
    "actual_precipitation": 0,
    "location": "CLT"
  },
  {
    "": 11,
    "date": "2014-7-12",
    "actual_mean_temp": 79,
    "actual_min_temp": 67,
    "actual_max_temp": 91,
    "actual_precipitation": 0,
    "location": "CLT"
  },
  {
    "": 12,
    "date": "2014-7-13",
    "actual_mean_temp": 81,
    "actual_min_temp": 69,
    "actual_max_temp": 92,
    "actual_precipitation": 0,
    "location": "CLT"
  },
  {
    "": 13,
    "date": "2014-7-14",
    "actual_mean_temp": 85,
    "actual_min_temp": 74,
    "actual_max_temp": 96,
    "actual_precipitation": 0,
    "location": "CLT"
  },
  {
    "": 14,
    "date": "2014-7-15",
    "actual_mean_temp": 81,
    "actual_min_temp": 67,
    "actual_max_temp": 94,
    "actual_precipitation": 0.87,
    "location": "CLT"
  },
  {
    "": 15,
    "date": "2014-7-16",
    "actual_mean_temp": 76,
    "actual_min_temp": 66,
    "actual_max_temp": 85,
    "actual_precipitation": 0,
    "location": "CLT"
  },
  {
    "": 16,
    "date": "2014-7-17",
    "actual_mean_temp": 74,
    "actual_min_temp": 63,
    "actual_max_temp": 84,
    "actual_precipitation": 0,
    "location": "CLT"
  },
  {
    "": 17,
    "date": "2014-7-18",
    "actual_mean_temp": 77,
    "actual_min_temp": 70,
    "actual_max_temp": 83,
    "actual_precipitation": 0,
    "location": "CLT"
  },
  {
    "": 18,
    "date": "2014-7-19",
    "actual_mean_temp": 70,
    "actual_min_temp": 66,
    "actual_max_temp": 74,
    "actual_precipitation": 0.17,
    "location": "CLT"
  },
  {
    "": 19,
    "date": "2014-7-20",
    "actual_mean_temp": 74,
    "actual_min_temp": 65,
    "actual_max_temp": 83,
    "actual_precipitation": 0,
    "location": "CLT"
  },
  {
    "": 20,
    "date": "2014-7-21",
    "actual_mean_temp": 74,
    "actual_min_temp": 70,
    "actual_max_temp": 77,
    "actual_precipitation": 1.3,
    "location": "CLT"
  },
  {
    "": 21,
    "date": "2014-7-22",
    "actual_mean_temp": 79,
    "actual_min_temp": 72,
    "actual_max_temp": 85,
    "actual_precipitation": 0,
    "location": "CLT"
  },
  {
    "": 22,
    "date": "2014-7-23",
    "actual_mean_temp": 80,
    "actual_min_temp": 69,
    "actual_max_temp": 90,
    "actual_precipitation": 0,
    "location": "CLT"
  },
  {
    "": 23,
    "date": "2014-7-24",
    "actual_mean_temp": 80,
    "actual_min_temp": 71,
    "actual_max_temp": 89,
    "actual_precipitation": 0.06,
    "location": "CLT"
  },
  {
    "": 24,
    "date": "2014-7-25",
    "actual_mean_temp": 77,
    "actual_min_temp": 68,
    "actual_max_temp": 86,
    "actual_precipitation": 0,
    "location": "CLT"
  },
  {
    "": 25,
    "date": "2014-7-26",
    "actual_mean_temp": 78,
    "actual_min_temp": 66,
    "actual_max_temp": 89,
    "actual_precipitation": 0,
    "location": "CLT"
  },
  {
    "": 26,
    "date": "2014-7-27",
    "actual_mean_temp": 80,
    "actual_min_temp": 70,
    "actual_max_temp": 90,
    "actual_precipitation": 0.18,
    "location": "CLT"
  },
  {
    "": 27,
    "date": "2014-7-28",
    "actual_mean_temp": 79,
    "actual_min_temp": 68,
    "actual_max_temp": 90,
    "actual_precipitation": 0.06,
    "location": "CLT"
  },
  {
    "": 28,
    "date": "2014-7-29",
    "actual_mean_temp": 73,
    "actual_min_temp": 62,
    "actual_max_temp": 83,
    "actual_precipitation": 0,
    "location": "CLT"
  },
  {
    "": 29,
    "date": "2014-7-30",
    "actual_mean_temp": 74,
    "actual_min_temp": 63,
    "actual_max_temp": 85,
    "actual_precipitation": 0,
    "location": "CLT"
  },
  {
    "": 30,
    "date": "2014-7-31",
    "actual_mean_temp": 72,
    "actual_min_temp": 65,
    "actual_max_temp": 78,
    "actual_precipitation": 1.45,
    "location": "CLT"
  },
  {
    "": 31,
    "date": "2014-8-1",
    "actual_mean_temp": 68,
    "actual_min_temp": 65,
    "actual_max_temp": 70,
    "actual_precipitation": 2.39,
    "location": "CLT"
  },
  {
    "": 32,
    "date": "2014-8-2",
    "actual_mean_temp": 69,
    "actual_min_temp": 65,
    "actual_max_temp": 72,
    "actual_precipitation": 0,
    "location": "CLT"
  },
  {
    "": 33,
    "date": "2014-8-3",
    "actual_mean_temp": 77,
    "actual_min_temp": 67,
    "actual_max_temp": 86,
    "actual_precipitation": 0,
    "location": "CLT"
  },
  {
    "": 34,
    "date": "2014-8-4",
    "actual_mean_temp": 78,
    "actual_min_temp": 69,
    "actual_max_temp": 87,
    "actual_precipitation": 0,
    "location": "CLT"
  },
  {
    "": 35,
    "date": "2014-8-5",
    "actual_mean_temp": 77,
    "actual_min_temp": 65,
    "actual_max_temp": 88,
    "actual_precipitation": 0,
    "location": "CLT"
  },
  {
    "": 36,
    "date": "2014-8-6",
    "actual_mean_temp": 78,
    "actual_min_temp": 68,
    "actual_max_temp": 88,
    "actual_precipitation": 0.17,
    "location": "CLT"
  },
  {
    "": 37,
    "date": "2014-8-7",
    "actual_mean_temp": 78,
    "actual_min_temp": 67,
    "actual_max_temp": 88,
    "actual_precipitation": 0,
    "location": "CLT"
  },
  {
    "": 38,
    "date": "2014-8-8",
    "actual_mean_temp": 77,
    "actual_min_temp": 73,
    "actual_max_temp": 81,
    "actual_precipitation": 0,
    "location": "CLT"
  },
  {
    "": 39,
    "date": "2014-8-9",
    "actual_mean_temp": 76,
    "actual_min_temp": 68,
    "actual_max_temp": 84,
    "actual_precipitation": 0,
    "location": "CLT"
  },
  {
    "": 40,
    "date": "2014-8-10",
    "actual_mean_temp": 70,
    "actual_min_temp": 67,
    "actual_max_temp": 73,
    "actual_precipitation": 0.01,
    "location": "CLT"
  },
  {
    "": 41,
    "date": "2014-8-11",
    "actual_mean_temp": 78,
    "actual_min_temp": 71,
    "actual_max_temp": 85,
    "actual_precipitation": 0.58,
    "location": "CLT"
  },
  {
    "": 42,
    "date": "2014-8-12",
    "actual_mean_temp": 81,
    "actual_min_temp": 72,
    "actual_max_temp": 89,
    "actual_precipitation": 0.31,
    "location": "CLT"
  },
  {
    "": 43,
    "date": "2014-8-13",
    "actual_mean_temp": 75,
    "actual_min_temp": 65,
    "actual_max_temp": 84,
    "actual_precipitation": 0,
    "location": "CLT"
  },
  {
    "": 44,
    "date": "2014-8-14",
    "actual_mean_temp": 71,
    "actual_min_temp": 59,
    "actual_max_temp": 83,
    "actual_precipitation": 0,
    "location": "CLT"
  },
  {
    "": 45,
    "date": "2014-8-15",
    "actual_mean_temp": 73,
    "actual_min_temp": 60,
    "actual_max_temp": 86,
    "actual_precipitation": 0,
    "location": "CLT"
  },
  {
    "": 46,
    "date": "2014-8-16",
    "actual_mean_temp": 77,
    "actual_min_temp": 68,
    "actual_max_temp": 86,
    "actual_precipitation": 0,
    "location": "CLT"
  },
  {
    "": 47,
    "date": "2014-8-17",
    "actual_mean_temp": 78,
    "actual_min_temp": 67,
    "actual_max_temp": 89,
    "actual_precipitation": 0,
    "location": "CLT"
  },
  {
    "": 48,
    "date": "2014-8-18",
    "actual_mean_temp": 81,
    "actual_min_temp": 71,
    "actual_max_temp": 90,
    "actual_precipitation": 0,
    "location": "CLT"
  },
  {
    "": 49,
    "date": "2014-8-19",
    "actual_mean_temp": 80,
    "actual_min_temp": 70,
    "actual_max_temp": 90,
    "actual_precipitation": 0,
    "location": "CLT"
  },
  {
    "": 50,
    "date": "2014-8-20",
    "actual_mean_temp": 79,
    "actual_min_temp": 67,
    "actual_max_temp": 91,
    "actual_precipitation": 0,
    "location": "CLT"
  },
  {
    "": 51,
    "date": "2014-8-21",
    "actual_mean_temp": 80,
    "actual_min_temp": 67,
    "actual_max_temp": 93,
    "actual_precipitation": 0,
    "location": "CLT"
  },
  {
    "": 52,
    "date": "2014-8-22",
    "actual_mean_temp": 83,
    "actual_min_temp": 70,
    "actual_max_temp": 95,
    "actual_precipitation": 0,
    "location": "CLT"
  },
  {
    "": 53,
    "date": "2014-8-23",
    "actual_mean_temp": 82,
    "actual_min_temp": 73,
    "actual_max_temp": 91,
    "actual_precipitation": 0.08,
    "location": "CLT"
  },
  {
    "": 54,
    "date": "2014-8-24",
    "actual_mean_temp": 74,
    "actual_min_temp": 66,
    "actual_max_temp": 81,
    "actual_precipitation": 0.14,
    "location": "CLT"
  },
  {
    "": 55,
    "date": "2014-8-25",
    "actual_mean_temp": 72,
    "actual_min_temp": 60,
    "actual_max_temp": 83,
    "actual_precipitation": 0,
    "location": "CLT"
  },
  {
    "": 56,
    "date": "2014-8-26",
    "actual_mean_temp": 72,
    "actual_min_temp": 60,
    "actual_max_temp": 84,
    "actual_precipitation": 0,
    "location": "CLT"
  },
  {
    "": 57,
    "date": "2014-8-27",
    "actual_mean_temp": 72,
    "actual_min_temp": 57,
    "actual_max_temp": 87,
    "actual_precipitation": 0,
    "location": "CLT"
  },
  {
    "": 58,
    "date": "2014-8-28",
    "actual_mean_temp": 77,
    "actual_min_temp": 61,
    "actual_max_temp": 92,
    "actual_precipitation": 0,
    "location": "CLT"
  },
  {
    "": 59,
    "date": "2014-8-29",
    "actual_mean_temp": 79,
    "actual_min_temp": 69,
    "actual_max_temp": 88,
    "actual_precipitation": 0,
    "location": "CLT"
  },
  {
    "": 60,
    "date": "2014-8-30",
    "actual_mean_temp": 79,
    "actual_min_temp": 68,
    "actual_max_temp": 90,
    "actual_precipitation": 0,
    "location": "CLT"
  },
  {
    "": 61,
    "date": "2014-8-31",
    "actual_mean_temp": 83,
    "actual_min_temp": 74,
    "actual_max_temp": 91,
    "actual_precipitation": 0.06,
    "location": "CLT"
  },
  {
    "": 62,
    "date": "2014-9-1",
    "actual_mean_temp": 82,
    "actual_min_temp": 71,
    "actual_max_temp": 93,
    "actual_precipitation": 0,
    "location": "CLT"
  },
  {
    "": 63,
    "date": "2014-9-2",
    "actual_mean_temp": 82,
    "actual_min_temp": 69,
    "actual_max_temp": 94,
    "actual_precipitation": 0,
    "location": "CLT"
  },
  {
    "": 64,
    "date": "2014-9-3",
    "actual_mean_temp": 81,
    "actual_min_temp": 68,
    "actual_max_temp": 93,
    "actual_precipitation": 0.63,
    "location": "CLT"
  },
  {
    "": 65,
    "date": "2014-9-4",
    "actual_mean_temp": 77,
    "actual_min_temp": 69,
    "actual_max_temp": 85,
    "actual_precipitation": 0.82,
    "location": "CLT"
  },
  {
    "": 66,
    "date": "2014-9-5",
    "actual_mean_temp": 79,
    "actual_min_temp": 69,
    "actual_max_temp": 89,
    "actual_precipitation": 0.01,
    "location": "CLT"
  },
  {
    "": 67,
    "date": "2014-9-6",
    "actual_mean_temp": 80,
    "actual_min_temp": 70,
    "actual_max_temp": 90,
    "actual_precipitation": 0,
    "location": "CLT"
  },
  {
    "": 68,
    "date": "2014-9-7",
    "actual_mean_temp": 79,
    "actual_min_temp": 70,
    "actual_max_temp": 88,
    "actual_precipitation": 0.09,
    "location": "CLT"
  },
  {
    "": 69,
    "date": "2014-9-8",
    "actual_mean_temp": 70,
    "actual_min_temp": 67,
    "actual_max_temp": 73,
    "actual_precipitation": 0,
    "location": "CLT"
  },
  {
    "": 70,
    "date": "2014-9-9",
    "actual_mean_temp": 72,
    "actual_min_temp": 66,
    "actual_max_temp": 77,
    "actual_precipitation": 0,
    "location": "CLT"
  },
  {
    "": 71,
    "date": "2014-9-10",
    "actual_mean_temp": 72,
    "actual_min_temp": 65,
    "actual_max_temp": 79,
    "actual_precipitation": 0,
    "location": "CLT"
  },
  {
    "": 72,
    "date": "2014-9-11",
    "actual_mean_temp": 77,
    "actual_min_temp": 64,
    "actual_max_temp": 89,
    "actual_precipitation": 0.09,
    "location": "CLT"
  },
  {
    "": 73,
    "date": "2014-9-12",
    "actual_mean_temp": 81,
    "actual_min_temp": 72,
    "actual_max_temp": 90,
    "actual_precipitation": 0.08,
    "location": "CLT"
  },
  {
    "": 74,
    "date": "2014-9-13",
    "actual_mean_temp": 76,
    "actual_min_temp": 66,
    "actual_max_temp": 86,
    "actual_precipitation": 1.56,
    "location": "CLT"
  },
  {
    "": 75,
    "date": "2014-9-14",
    "actual_mean_temp": 66,
    "actual_min_temp": 62,
    "actual_max_temp": 69,
    "actual_precipitation": 0,
    "location": "CLT"
  },
  {
    "": 76,
    "date": "2014-9-15",
    "actual_mean_temp": 76,
    "actual_min_temp": 65,
    "actual_max_temp": 86,
    "actual_precipitation": 0.37,
    "location": "CLT"
  },
  {
    "": 77,
    "date": "2014-9-16",
    "actual_mean_temp": 76,
    "actual_min_temp": 65,
    "actual_max_temp": 86,
    "actual_precipitation": 0.37,
    "location": "CLT"
  },
  {
    "": 78,
    "date": "2014-9-17",
    "actual_mean_temp": 69,
    "actual_min_temp": 63,
    "actual_max_temp": 74,
    "actual_precipitation": 0,
    "location": "CLT"
  },
  {
    "": 79,
    "date": "2014-9-18",
    "actual_mean_temp": 71,
    "actual_min_temp": 62,
    "actual_max_temp": 80,
    "actual_precipitation": 0,
    "location": "CLT"
  },
  {
    "": 80,
    "date": "2014-9-19",
    "actual_mean_temp": 73,
    "actual_min_temp": 67,
    "actual_max_temp": 79,
    "actual_precipitation": 0.02,
    "location": "CLT"
  },
  {
    "": 81,
    "date": "2014-9-20",
    "actual_mean_temp": 71,
    "actual_min_temp": 59,
    "actual_max_temp": 82,
    "actual_precipitation": 0,
    "location": "CLT"
  },
  {
    "": 82,
    "date": "2014-9-21",
    "actual_mean_temp": 71,
    "actual_min_temp": 57,
    "actual_max_temp": 85,
    "actual_precipitation": 0,
    "location": "CLT"
  },
  {
    "": 83,
    "date": "2014-9-22",
    "actual_mean_temp": 69,
    "actual_min_temp": 61,
    "actual_max_temp": 76,
    "actual_precipitation": 0,
    "location": "CLT"
  },
  {
    "": 84,
    "date": "2014-9-23",
    "actual_mean_temp": 59,
    "actual_min_temp": 53,
    "actual_max_temp": 65,
    "actual_precipitation": 0.02,
    "location": "CLT"
  },
  {
    "": 85,
    "date": "2014-9-24",
    "actual_mean_temp": 59,
    "actual_min_temp": 53,
    "actual_max_temp": 64,
    "actual_precipitation": 0.19,
    "location": "CLT"
  },
  {
    "": 86,
    "date": "2014-9-25",
    "actual_mean_temp": 66,
    "actual_min_temp": 61,
    "actual_max_temp": 70,
    "actual_precipitation": 0.01,
    "location": "CLT"
  },
  {
    "": 87,
    "date": "2014-9-26",
    "actual_mean_temp": 67,
    "actual_min_temp": 62,
    "actual_max_temp": 71,
    "actual_precipitation": 0,
    "location": "CLT"
  },
  {
    "": 88,
    "date": "2014-9-27",
    "actual_mean_temp": 69,
    "actual_min_temp": 59,
    "actual_max_temp": 78,
    "actual_precipitation": 0,
    "location": "CLT"
  },
  {
    "": 89,
    "date": "2014-9-28",
    "actual_mean_temp": 68,
    "actual_min_temp": 60,
    "actual_max_temp": 76,
    "actual_precipitation": 0,
    "location": "CLT"
  },
  {
    "": 90,
    "date": "2014-9-29",
    "actual_mean_temp": 67,
    "actual_min_temp": 64,
    "actual_max_temp": 70,
    "actual_precipitation": 0.09,
    "location": "CLT"
  },
  {
    "": 91,
    "date": "2014-9-30",
    "actual_mean_temp": 71,
    "actual_min_temp": 59,
    "actual_max_temp": 83,
    "actual_precipitation": 0,
    "location": "CLT"
  },
  {
    "": 92,
    "date": "2014-10-1",
    "actual_mean_temp": 70,
    "actual_min_temp": 56,
    "actual_max_temp": 84,
    "actual_precipitation": 0,
    "location": "CLT"
  },
  {
    "": 93,
    "date": "2014-10-2",
    "actual_mean_temp": 72,
    "actual_min_temp": 59,
    "actual_max_temp": 85,
    "actual_precipitation": 0,
    "location": "CLT"
  },
  {
    "": 94,
    "date": "2014-10-3",
    "actual_mean_temp": 70,
    "actual_min_temp": 61,
    "actual_max_temp": 79,
    "actual_precipitation": 0.03,
    "location": "CLT"
  },
  {
    "": 95,
    "date": "2014-10-4",
    "actual_mean_temp": 55,
    "actual_min_temp": 43,
    "actual_max_temp": 67,
    "actual_precipitation": 0,
    "location": "CLT"
  },
  {
    "": 96,
    "date": "2014-10-5",
    "actual_mean_temp": 52,
    "actual_min_temp": 38,
    "actual_max_temp": 65,
    "actual_precipitation": 0,
    "location": "CLT"
  },
  {
    "": 97,
    "date": "2014-10-6",
    "actual_mean_temp": 62,
    "actual_min_temp": 47,
    "actual_max_temp": 76,
    "actual_precipitation": 0,
    "location": "CLT"
  },
  {
    "": 98,
    "date": "2014-10-7",
    "actual_mean_temp": 67,
    "actual_min_temp": 53,
    "actual_max_temp": 80,
    "actual_precipitation": 0,
    "location": "CLT"
  },
  {
    "": 99,
    "date": "2014-10-8",
    "actual_mean_temp": 72,
    "actual_min_temp": 58,
    "actual_max_temp": 86,
    "actual_precipitation": 0,
    "location": "CLT"
  },
  {
    "": 100,
    "date": "2014-10-9",
    "actual_mean_temp": 66,
    "actual_min_temp": 52,
    "actual_max_temp": 80,
    "actual_precipitation": 0,
    "location": "CLT"
  },
  {
    "": 101,
    "date": "2014-10-10",
    "actual_mean_temp": 72,
    "actual_min_temp": 60,
    "actual_max_temp": 84,
    "actual_precipitation": 0,
    "location": "CLT"
  },
  {
    "": 102,
    "date": "2014-10-11",
    "actual_mean_temp": 78,
    "actual_min_temp": 68,
    "actual_max_temp": 87,
    "actual_precipitation": 0.08,
    "location": "CLT"
  },
  {
    "": 103,
    "date": "2014-10-12",
    "actual_mean_temp": 63,
    "actual_min_temp": 58,
    "actual_max_temp": 68,
    "actual_precipitation": 0.02,
    "location": "CLT"
  },
  {
    "": 104,
    "date": "2014-10-13",
    "actual_mean_temp": 66,
    "actual_min_temp": 59,
    "actual_max_temp": 72,
    "actual_precipitation": 0.04,
    "location": "CLT"
  },
  {
    "": 105,
    "date": "2014-10-14",
    "actual_mean_temp": 73,
    "actual_min_temp": 64,
    "actual_max_temp": 82,
    "actual_precipitation": 0.45,
    "location": "CLT"
  },
  {
    "": 106,
    "date": "2014-10-15",
    "actual_mean_temp": 66,
    "actual_min_temp": 58,
    "actual_max_temp": 73,
    "actual_precipitation": 0.24,
    "location": "CLT"
  },
  {
    "": 107,
    "date": "2014-10-16",
    "actual_mean_temp": 61,
    "actual_min_temp": 50,
    "actual_max_temp": 71,
    "actual_precipitation": 0,
    "location": "CLT"
  },
  {
    "": 108,
    "date": "2014-10-17",
    "actual_mean_temp": 59,
    "actual_min_temp": 44,
    "actual_max_temp": 74,
    "actual_precipitation": 0,
    "location": "CLT"
  },
  {
    "": 109,
    "date": "2014-10-18",
    "actual_mean_temp": 65,
    "actual_min_temp": 53,
    "actual_max_temp": 76,
    "actual_precipitation": 0,
    "location": "CLT"
  },
  {
    "": 110,
    "date": "2014-10-19",
    "actual_mean_temp": 57,
    "actual_min_temp": 45,
    "actual_max_temp": 69,
    "actual_precipitation": 0,
    "location": "CLT"
  },
  {
    "": 111,
    "date": "2014-10-20",
    "actual_mean_temp": 59,
    "actual_min_temp": 46,
    "actual_max_temp": 71,
    "actual_precipitation": 0,
    "location": "CLT"
  },
  {
    "": 112,
    "date": "2014-10-21",
    "actual_mean_temp": 61,
    "actual_min_temp": 47,
    "actual_max_temp": 75,
    "actual_precipitation": 0,
    "location": "CLT"
  },
  {
    "": 113,
    "date": "2014-10-22",
    "actual_mean_temp": 56,
    "actual_min_temp": 44,
    "actual_max_temp": 68,
    "actual_precipitation": 0,
    "location": "CLT"
  },
  {
    "": 114,
    "date": "2014-10-23",
    "actual_mean_temp": 55,
    "actual_min_temp": 40,
    "actual_max_temp": 70,
    "actual_precipitation": 0,
    "location": "CLT"
  },
  {
    "": 115,
    "date": "2014-10-24",
    "actual_mean_temp": 54,
    "actual_min_temp": 39,
    "actual_max_temp": 69,
    "actual_precipitation": 0,
    "location": "CLT"
  },
  {
    "": 116,
    "date": "2014-10-25",
    "actual_mean_temp": 57,
    "actual_min_temp": 39,
    "actual_max_temp": 74,
    "actual_precipitation": 0,
    "location": "CLT"
  },
  {
    "": 117,
    "date": "2014-10-26",
    "actual_mean_temp": 66,
    "actual_min_temp": 48,
    "actual_max_temp": 83,
    "actual_precipitation": 0,
    "location": "CLT"
  },
  {
    "": 118,
    "date": "2014-10-27",
    "actual_mean_temp": 62,
    "actual_min_temp": 43,
    "actual_max_temp": 80,
    "actual_precipitation": 0,
    "location": "CLT"
  },
  {
    "": 119,
    "date": "2014-10-28",
    "actual_mean_temp": 68,
    "actual_min_temp": 52,
    "actual_max_temp": 84,
    "actual_precipitation": 0,
    "location": "CLT"
  },
  {
    "": 120,
    "date": "2014-10-29",
    "actual_mean_temp": 69,
    "actual_min_temp": 58,
    "actual_max_temp": 79,
    "actual_precipitation": 0,
    "location": "CLT"
  },
  {
    "": 121,
    "date": "2014-10-30",
    "actual_mean_temp": 57,
    "actual_min_temp": 45,
    "actual_max_temp": 68,
    "actual_precipitation": 0,
    "location": "CLT"
  },
  {
    "": 122,
    "date": "2014-10-31",
    "actual_mean_temp": 50,
    "actual_min_temp": 39,
    "actual_max_temp": 61,
    "actual_precipitation": 0.49,
    "location": "CLT"
  },
  {
    "": 123,
    "date": "2014-11-1",
    "actual_mean_temp": 47,
    "actual_min_temp": 40,
    "actual_max_temp": 53,
    "actual_precipitation": 0.28,
    "location": "CLT"
  },
  {
    "": 124,
    "date": "2014-11-2",
    "actual_mean_temp": 44,
    "actual_min_temp": 30,
    "actual_max_temp": 57,
    "actual_precipitation": 0,
    "location": "CLT"
  },
  {
    "": 125,
    "date": "2014-11-3",
    "actual_mean_temp": 45,
    "actual_min_temp": 24,
    "actual_max_temp": 65,
    "actual_precipitation": 0,
    "location": "CLT"
  },
  {
    "": 126,
    "date": "2014-11-4",
    "actual_mean_temp": 53,
    "actual_min_temp": 39,
    "actual_max_temp": 67,
    "actual_precipitation": 0,
    "location": "CLT"
  },
  {
    "": 127,
    "date": "2014-11-5",
    "actual_mean_temp": 60,
    "actual_min_temp": 49,
    "actual_max_temp": 70,
    "actual_precipitation": 0,
    "location": "CLT"
  },
  {
    "": 128,
    "date": "2014-11-6",
    "actual_mean_temp": 60,
    "actual_min_temp": 48,
    "actual_max_temp": 71,
    "actual_precipitation": 0.04,
    "location": "CLT"
  },
  {
    "": 129,
    "date": "2014-11-7",
    "actual_mean_temp": 50,
    "actual_min_temp": 39,
    "actual_max_temp": 61,
    "actual_precipitation": 0,
    "location": "CLT"
  },
  {
    "": 130,
    "date": "2014-11-8",
    "actual_mean_temp": 45,
    "actual_min_temp": 31,
    "actual_max_temp": 58,
    "actual_precipitation": 0,
    "location": "CLT"
  },
  {
    "": 131,
    "date": "2014-11-9",
    "actual_mean_temp": 51,
    "actual_min_temp": 38,
    "actual_max_temp": 63,
    "actual_precipitation": 0,
    "location": "CLT"
  },
  {
    "": 132,
    "date": "2014-11-10",
    "actual_mean_temp": 51,
    "actual_min_temp": 32,
    "actual_max_temp": 69,
    "actual_precipitation": 0,
    "location": "CLT"
  },
  {
    "": 133,
    "date": "2014-11-11",
    "actual_mean_temp": 57,
    "actual_min_temp": 39,
    "actual_max_temp": 74,
    "actual_precipitation": 0,
    "location": "CLT"
  },
  {
    "": 134,
    "date": "2014-11-12",
    "actual_mean_temp": 59,
    "actual_min_temp": 41,
    "actual_max_temp": 77,
    "actual_precipitation": 0,
    "location": "CLT"
  },
  {
    "": 135,
    "date": "2014-11-13",
    "actual_mean_temp": 53,
    "actual_min_temp": 46,
    "actual_max_temp": 60,
    "actual_precipitation": 0,
    "location": "CLT"
  },
  {
    "": 136,
    "date": "2014-11-14",
    "actual_mean_temp": 37,
    "actual_min_temp": 28,
    "actual_max_temp": 46,
    "actual_precipitation": 0.01,
    "location": "CLT"
  },
  {
    "": 137,
    "date": "2014-11-15",
    "actual_mean_temp": 35,
    "actual_min_temp": 25,
    "actual_max_temp": 45,
    "actual_precipitation": 0,
    "location": "CLT"
  },
  {
    "": 138,
    "date": "2014-11-16",
    "actual_mean_temp": 41,
    "actual_min_temp": 29,
    "actual_max_temp": 53,
    "actual_precipitation": 0,
    "location": "CLT"
  },
  {
    "": 139,
    "date": "2014-11-17",
    "actual_mean_temp": 47,
    "actual_min_temp": 36,
    "actual_max_temp": 57,
    "actual_precipitation": 0.63,
    "location": "CLT"
  },
  {
    "": 140,
    "date": "2014-11-18",
    "actual_mean_temp": 30,
    "actual_min_temp": 20,
    "actual_max_temp": 39,
    "actual_precipitation": 0,
    "location": "CLT"
  },
  {
    "": 141,
    "date": "2014-11-19",
    "actual_mean_temp": 29,
    "actual_min_temp": 14,
    "actual_max_temp": 44,
    "actual_precipitation": 0,
    "location": "CLT"
  },
  {
    "": 142,
    "date": "2014-11-20",
    "actual_mean_temp": 47,
    "actual_min_temp": 34,
    "actual_max_temp": 59,
    "actual_precipitation": 0,
    "location": "CLT"
  },
  {
    "": 143,
    "date": "2014-11-21",
    "actual_mean_temp": 44,
    "actual_min_temp": 30,
    "actual_max_temp": 58,
    "actual_precipitation": 0,
    "location": "CLT"
  },
  {
    "": 144,
    "date": "2014-11-22",
    "actual_mean_temp": 39,
    "actual_min_temp": 22,
    "actual_max_temp": 55,
    "actual_precipitation": 0,
    "location": "CLT"
  },
  {
    "": 145,
    "date": "2014-11-23",
    "actual_mean_temp": 54,
    "actual_min_temp": 42,
    "actual_max_temp": 65,
    "actual_precipitation": 1.72,
    "location": "CLT"
  },
  {
    "": 146,
    "date": "2014-11-24",
    "actual_mean_temp": 67,
    "actual_min_temp": 59,
    "actual_max_temp": 74,
    "actual_precipitation": 0,
    "location": "CLT"
  },
  {
    "": 147,
    "date": "2014-11-25",
    "actual_mean_temp": 58,
    "actual_min_temp": 49,
    "actual_max_temp": 66,
    "actual_precipitation": 0.22,
    "location": "CLT"
  },
  {
    "": 148,
    "date": "2014-11-26",
    "actual_mean_temp": 46,
    "actual_min_temp": 40,
    "actual_max_temp": 52,
    "actual_precipitation": 0.89,
    "location": "CLT"
  },
  {
    "": 149,
    "date": "2014-11-27",
    "actual_mean_temp": 43,
    "actual_min_temp": 34,
    "actual_max_temp": 52,
    "actual_precipitation": 0,
    "location": "CLT"
  },
  {
    "": 150,
    "date": "2014-11-28",
    "actual_mean_temp": 36,
    "actual_min_temp": 25,
    "actual_max_temp": 47,
    "actual_precipitation": 0,
    "location": "CLT"
  },
  {
    "": 151,
    "date": "2014-11-29",
    "actual_mean_temp": 44,
    "actual_min_temp": 31,
    "actual_max_temp": 56,
    "actual_precipitation": 0,
    "location": "CLT"
  },
  {
    "": 152,
    "date": "2014-11-30",
    "actual_mean_temp": 54,
    "actual_min_temp": 39,
    "actual_max_temp": 68,
    "actual_precipitation": 0,
    "location": "CLT"
  },
  {
    "": 153,
    "date": "2014-12-1",
    "actual_mean_temp": 57,
    "actual_min_temp": 41,
    "actual_max_temp": 73,
    "actual_precipitation": 0,
    "location": "CLT"
  },
  {
    "": 154,
    "date": "2014-12-2",
    "actual_mean_temp": 49,
    "actual_min_temp": 42,
    "actual_max_temp": 55,
    "actual_precipitation": 0,
    "location": "CLT"
  },
  {
    "": 155,
    "date": "2014-12-3",
    "actual_mean_temp": 53,
    "actual_min_temp": 42,
    "actual_max_temp": 64,
    "actual_precipitation": 0,
    "location": "CLT"
  },
  {
    "": 156,
    "date": "2014-12-4",
    "actual_mean_temp": 56,
    "actual_min_temp": 49,
    "actual_max_temp": 63,
    "actual_precipitation": 0,
    "location": "CLT"
  },
  {
    "": 157,
    "date": "2014-12-5",
    "actual_mean_temp": 47,
    "actual_min_temp": 42,
    "actual_max_temp": 51,
    "actual_precipitation": 0.04,
    "location": "CLT"
  },
  {
    "": 158,
    "date": "2014-12-6",
    "actual_mean_temp": 47,
    "actual_min_temp": 42,
    "actual_max_temp": 52,
    "actual_precipitation": 0.12,
    "location": "CLT"
  },
  {
    "": 159,
    "date": "2014-12-7",
    "actual_mean_temp": 48,
    "actual_min_temp": 39,
    "actual_max_temp": 56,
    "actual_precipitation": 0,
    "location": "CLT"
  },
  {
    "": 160,
    "date": "2014-12-8",
    "actual_mean_temp": 40,
    "actual_min_temp": 36,
    "actual_max_temp": 43,
    "actual_precipitation": 0.14,
    "location": "CLT"
  },
  {
    "": 161,
    "date": "2014-12-9",
    "actual_mean_temp": 46,
    "actual_min_temp": 37,
    "actual_max_temp": 55,
    "actual_precipitation": 0,
    "location": "CLT"
  },
  {
    "": 162,
    "date": "2014-12-10",
    "actual_mean_temp": 43,
    "actual_min_temp": 32,
    "actual_max_temp": 53,
    "actual_precipitation": 0,
    "location": "CLT"
  },
  {
    "": 163,
    "date": "2014-12-11",
    "actual_mean_temp": 37,
    "actual_min_temp": 23,
    "actual_max_temp": 51,
    "actual_precipitation": 0,
    "location": "CLT"
  },
  {
    "": 164,
    "date": "2014-12-12",
    "actual_mean_temp": 41,
    "actual_min_temp": 22,
    "actual_max_temp": 60,
    "actual_precipitation": 0,
    "location": "CLT"
  },
  {
    "": 165,
    "date": "2014-12-13",
    "actual_mean_temp": 46,
    "actual_min_temp": 25,
    "actual_max_temp": 66,
    "actual_precipitation": 0,
    "location": "CLT"
  },
  {
    "": 166,
    "date": "2014-12-14",
    "actual_mean_temp": 46,
    "actual_min_temp": 29,
    "actual_max_temp": 63,
    "actual_precipitation": 0,
    "location": "CLT"
  },
  {
    "": 167,
    "date": "2014-12-15",
    "actual_mean_temp": 43,
    "actual_min_temp": 26,
    "actual_max_temp": 60,
    "actual_precipitation": 0,
    "location": "CLT"
  },
  {
    "": 168,
    "date": "2014-12-16",
    "actual_mean_temp": 48,
    "actual_min_temp": 37,
    "actual_max_temp": 58,
    "actual_precipitation": 0.09,
    "location": "CLT"
  },
  {
    "": 169,
    "date": "2014-12-17",
    "actual_mean_temp": 46,
    "actual_min_temp": 31,
    "actual_max_temp": 60,
    "actual_precipitation": 0,
    "location": "CLT"
  },
  {
    "": 170,
    "date": "2014-12-18",
    "actual_mean_temp": 43,
    "actual_min_temp": 30,
    "actual_max_temp": 56,
    "actual_precipitation": 0,
    "location": "CLT"
  },
  {
    "": 171,
    "date": "2014-12-19",
    "actual_mean_temp": 43,
    "actual_min_temp": 30,
    "actual_max_temp": 56,
    "actual_precipitation": 0,
    "location": "CLT"
  },
  {
    "": 172,
    "date": "2014-12-20",
    "actual_mean_temp": 44,
    "actual_min_temp": 40,
    "actual_max_temp": 48,
    "actual_precipitation": 0.03,
    "location": "CLT"
  },
  {
    "": 173,
    "date": "2014-12-21",
    "actual_mean_temp": 47,
    "actual_min_temp": 42,
    "actual_max_temp": 51,
    "actual_precipitation": 0,
    "location": "CLT"
  },
  {
    "": 174,
    "date": "2014-12-22",
    "actual_mean_temp": 42,
    "actual_min_temp": 38,
    "actual_max_temp": 46,
    "actual_precipitation": 0.26,
    "location": "CLT"
  },
  {
    "": 175,
    "date": "2014-12-23",
    "actual_mean_temp": 42,
    "actual_min_temp": 37,
    "actual_max_temp": 47,
    "actual_precipitation": 0.29,
    "location": "CLT"
  },
  {
    "": 176,
    "date": "2014-12-24",
    "actual_mean_temp": 53,
    "actual_min_temp": 45,
    "actual_max_temp": 60,
    "actual_precipitation": 0.91,
    "location": "CLT"
  },
  {
    "": 177,
    "date": "2014-12-25",
    "actual_mean_temp": 45,
    "actual_min_temp": 32,
    "actual_max_temp": 57,
    "actual_precipitation": 0,
    "location": "CLT"
  },
  {
    "": 178,
    "date": "2014-12-26",
    "actual_mean_temp": 43,
    "actual_min_temp": 27,
    "actual_max_temp": 59,
    "actual_precipitation": 0,
    "location": "CLT"
  },
  {
    "": 179,
    "date": "2014-12-27",
    "actual_mean_temp": 48,
    "actual_min_temp": 32,
    "actual_max_temp": 64,
    "actual_precipitation": 0,
    "location": "CLT"
  },
  {
    "": 180,
    "date": "2014-12-28",
    "actual_mean_temp": 55,
    "actual_min_temp": 49,
    "actual_max_temp": 60,
    "actual_precipitation": 0.04,
    "location": "CLT"
  },
  {
    "": 181,
    "date": "2014-12-29",
    "actual_mean_temp": 51,
    "actual_min_temp": 44,
    "actual_max_temp": 58,
    "actual_precipitation": 0.59,
    "location": "CLT"
  },
  {
    "": 182,
    "date": "2014-12-30",
    "actual_mean_temp": 39,
    "actual_min_temp": 32,
    "actual_max_temp": 45,
    "actual_precipitation": 0.06,
    "location": "CLT"
  },
  {
    "": 183,
    "date": "2014-12-31",
    "actual_mean_temp": 37,
    "actual_min_temp": 27,
    "actual_max_temp": 46,
    "actual_precipitation": 0,
    "location": "CLT"
  },
  {
    "": 184,
    "date": "2015-1-1",
    "actual_mean_temp": 40,
    "actual_min_temp": 26,
    "actual_max_temp": 53,
    "actual_precipitation": 0,
    "location": "CLT"
  },
  {
    "": 185,
    "date": "2015-1-2",
    "actual_mean_temp": 47,
    "actual_min_temp": 42,
    "actual_max_temp": 52,
    "actual_precipitation": 0.12,
    "location": "CLT"
  },
  {
    "": 186,
    "date": "2015-1-3",
    "actual_mean_temp": 50,
    "actual_min_temp": 47,
    "actual_max_temp": 52,
    "actual_precipitation": 0.25,
    "location": "CLT"
  },
  {
    "": 187,
    "date": "2015-1-4",
    "actual_mean_temp": 56,
    "actual_min_temp": 47,
    "actual_max_temp": 65,
    "actual_precipitation": 0.26,
    "location": "CLT"
  },
  {
    "": 188,
    "date": "2015-1-5",
    "actual_mean_temp": 45,
    "actual_min_temp": 36,
    "actual_max_temp": 54,
    "actual_precipitation": 0,
    "location": "CLT"
  },
  {
    "": 189,
    "date": "2015-1-6",
    "actual_mean_temp": 41,
    "actual_min_temp": 24,
    "actual_max_temp": 57,
    "actual_precipitation": 0,
    "location": "CLT"
  },
  {
    "": 190,
    "date": "2015-1-7",
    "actual_mean_temp": 29,
    "actual_min_temp": 16,
    "actual_max_temp": 41,
    "actual_precipitation": 0,
    "location": "CLT"
  },
  {
    "": 191,
    "date": "2015-1-8",
    "actual_mean_temp": 18,
    "actual_min_temp": 8,
    "actual_max_temp": 28,
    "actual_precipitation": 0,
    "location": "CLT"
  },
  {
    "": 192,
    "date": "2015-1-9",
    "actual_mean_temp": 34,
    "actual_min_temp": 22,
    "actual_max_temp": 45,
    "actual_precipitation": 0,
    "location": "CLT"
  },
  {
    "": 193,
    "date": "2015-1-10",
    "actual_mean_temp": 30,
    "actual_min_temp": 19,
    "actual_max_temp": 41,
    "actual_precipitation": 0,
    "location": "CLT"
  },
  {
    "": 194,
    "date": "2015-1-11",
    "actual_mean_temp": 31,
    "actual_min_temp": 15,
    "actual_max_temp": 46,
    "actual_precipitation": 0.08,
    "location": "CLT"
  },
  {
    "": 195,
    "date": "2015-1-12",
    "actual_mean_temp": 41,
    "actual_min_temp": 37,
    "actual_max_temp": 45,
    "actual_precipitation": 0.98,
    "location": "CLT"
  },
  {
    "": 196,
    "date": "2015-1-13",
    "actual_mean_temp": 41,
    "actual_min_temp": 35,
    "actual_max_temp": 47,
    "actual_precipitation": 0.04,
    "location": "CLT"
  },
  {
    "": 197,
    "date": "2015-1-14",
    "actual_mean_temp": 35,
    "actual_min_temp": 30,
    "actual_max_temp": 40,
    "actual_precipitation": 0,
    "location": "CLT"
  },
  {
    "": 198,
    "date": "2015-1-15",
    "actual_mean_temp": 34,
    "actual_min_temp": 26,
    "actual_max_temp": 42,
    "actual_precipitation": 0,
    "location": "CLT"
  },
  {
    "": 199,
    "date": "2015-1-16",
    "actual_mean_temp": 43,
    "actual_min_temp": 30,
    "actual_max_temp": 56,
    "actual_precipitation": 0,
    "location": "CLT"
  },
  {
    "": 200,
    "date": "2015-1-17",
    "actual_mean_temp": 41,
    "actual_min_temp": 24,
    "actual_max_temp": 57,
    "actual_precipitation": 0,
    "location": "CLT"
  },
  {
    "": 201,
    "date": "2015-1-18",
    "actual_mean_temp": 49,
    "actual_min_temp": 37,
    "actual_max_temp": 61,
    "actual_precipitation": 0.02,
    "location": "CLT"
  },
  {
    "": 202,
    "date": "2015-1-19",
    "actual_mean_temp": 49,
    "actual_min_temp": 33,
    "actual_max_temp": 64,
    "actual_precipitation": 0,
    "location": "CLT"
  },
  {
    "": 203,
    "date": "2015-1-20",
    "actual_mean_temp": 53,
    "actual_min_temp": 39,
    "actual_max_temp": 67,
    "actual_precipitation": 0,
    "location": "CLT"
  },
  {
    "": 204,
    "date": "2015-1-21",
    "actual_mean_temp": 50,
    "actual_min_temp": 36,
    "actual_max_temp": 64,
    "actual_precipitation": 0,
    "location": "CLT"
  },
  {
    "": 205,
    "date": "2015-1-22",
    "actual_mean_temp": 41,
    "actual_min_temp": 25,
    "actual_max_temp": 57,
    "actual_precipitation": 0,
    "location": "CLT"
  },
  {
    "": 206,
    "date": "2015-1-23",
    "actual_mean_temp": 41,
    "actual_min_temp": 36,
    "actual_max_temp": 45,
    "actual_precipitation": 0.88,
    "location": "CLT"
  },
  {
    "": 207,
    "date": "2015-1-24",
    "actual_mean_temp": 43,
    "actual_min_temp": 33,
    "actual_max_temp": 53,
    "actual_precipitation": 0.16,
    "location": "CLT"
  },
  {
    "": 208,
    "date": "2015-1-25",
    "actual_mean_temp": 43,
    "actual_min_temp": 28,
    "actual_max_temp": 57,
    "actual_precipitation": 0,
    "location": "CLT"
  },
  {
    "": 209,
    "date": "2015-1-26",
    "actual_mean_temp": 45,
    "actual_min_temp": 37,
    "actual_max_temp": 53,
    "actual_precipitation": 0.01,
    "location": "CLT"
  },
  {
    "": 210,
    "date": "2015-1-27",
    "actual_mean_temp": 39,
    "actual_min_temp": 29,
    "actual_max_temp": 48,
    "actual_precipitation": 0,
    "location": "CLT"
  },
  {
    "": 211,
    "date": "2015-1-28",
    "actual_mean_temp": 36,
    "actual_min_temp": 23,
    "actual_max_temp": 49,
    "actual_precipitation": 0,
    "location": "CLT"
  },
  {
    "": 212,
    "date": "2015-1-29",
    "actual_mean_temp": 38,
    "actual_min_temp": 25,
    "actual_max_temp": 50,
    "actual_precipitation": 0,
    "location": "CLT"
  },
  {
    "": 213,
    "date": "2015-1-30",
    "actual_mean_temp": 38,
    "actual_min_temp": 26,
    "actual_max_temp": 49,
    "actual_precipitation": 0,
    "location": "CLT"
  },
  {
    "": 214,
    "date": "2015-1-31",
    "actual_mean_temp": 35,
    "actual_min_temp": 19,
    "actual_max_temp": 51,
    "actual_precipitation": 0,
    "location": "CLT"
  },
  {
    "": 215,
    "date": "2015-2-1",
    "actual_mean_temp": 47,
    "actual_min_temp": 36,
    "actual_max_temp": 57,
    "actual_precipitation": 0.01,
    "location": "CLT"
  },
  {
    "": 216,
    "date": "2015-2-2",
    "actual_mean_temp": 42,
    "actual_min_temp": 26,
    "actual_max_temp": 57,
    "actual_precipitation": 0.39,
    "location": "CLT"
  },
  {
    "": 217,
    "date": "2015-2-3",
    "actual_mean_temp": 34,
    "actual_min_temp": 22,
    "actual_max_temp": 46,
    "actual_precipitation": 0,
    "location": "CLT"
  },
  {
    "": 218,
    "date": "2015-2-4",
    "actual_mean_temp": 41,
    "actual_min_temp": 28,
    "actual_max_temp": 53,
    "actual_precipitation": 0,
    "location": "CLT"
  },
  {
    "": 219,
    "date": "2015-2-5",
    "actual_mean_temp": 40,
    "actual_min_temp": 27,
    "actual_max_temp": 52,
    "actual_precipitation": 0,
    "location": "CLT"
  },
  {
    "": 220,
    "date": "2015-2-6",
    "actual_mean_temp": 32,
    "actual_min_temp": 18,
    "actual_max_temp": 45,
    "actual_precipitation": 0,
    "location": "CLT"
  },
  {
    "": 221,
    "date": "2015-2-7",
    "actual_mean_temp": 47,
    "actual_min_temp": 28,
    "actual_max_temp": 65,
    "actual_precipitation": 0,
    "location": "CLT"
  },
  {
    "": 222,
    "date": "2015-2-8",
    "actual_mean_temp": 59,
    "actual_min_temp": 47,
    "actual_max_temp": 70,
    "actual_precipitation": 0,
    "location": "CLT"
  },
  {
    "": 223,
    "date": "2015-2-9",
    "actual_mean_temp": 56,
    "actual_min_temp": 51,
    "actual_max_temp": 61,
    "actual_precipitation": 0.87,
    "location": "CLT"
  },
  {
    "": 224,
    "date": "2015-2-10",
    "actual_mean_temp": 45,
    "actual_min_temp": 37,
    "actual_max_temp": 53,
    "actual_precipitation": 0.13,
    "location": "CLT"
  },
  {
    "": 225,
    "date": "2015-2-11",
    "actual_mean_temp": 42,
    "actual_min_temp": 28,
    "actual_max_temp": 55,
    "actual_precipitation": 0,
    "location": "CLT"
  },
  {
    "": 226,
    "date": "2015-2-12",
    "actual_mean_temp": 42,
    "actual_min_temp": 26,
    "actual_max_temp": 57,
    "actual_precipitation": 0,
    "location": "CLT"
  },
  {
    "": 227,
    "date": "2015-2-13",
    "actual_mean_temp": 31,
    "actual_min_temp": 21,
    "actual_max_temp": 40,
    "actual_precipitation": 0,
    "location": "CLT"
  },
  {
    "": 228,
    "date": "2015-2-14",
    "actual_mean_temp": 40,
    "actual_min_temp": 23,
    "actual_max_temp": 56,
    "actual_precipitation": 0,
    "location": "CLT"
  },
  {
    "": 229,
    "date": "2015-2-15",
    "actual_mean_temp": 25,
    "actual_min_temp": 14,
    "actual_max_temp": 36,
    "actual_precipitation": 0,
    "location": "CLT"
  },
  {
    "": 230,
    "date": "2015-2-16",
    "actual_mean_temp": 29,
    "actual_min_temp": 24,
    "actual_max_temp": 33,
    "actual_precipitation": 0.51,
    "location": "CLT"
  },
  {
    "": 231,
    "date": "2015-2-17",
    "actual_mean_temp": 29,
    "actual_min_temp": 23,
    "actual_max_temp": 34,
    "actual_precipitation": 0.15,
    "location": "CLT"
  },
  {
    "": 232,
    "date": "2015-2-18",
    "actual_mean_temp": 32,
    "actual_min_temp": 21,
    "actual_max_temp": 42,
    "actual_precipitation": 0,
    "location": "CLT"
  },
  {
    "": 233,
    "date": "2015-2-19",
    "actual_mean_temp": 19,
    "actual_min_temp": 12,
    "actual_max_temp": 26,
    "actual_precipitation": 0,
    "location": "CLT"
  },
  {
    "": 234,
    "date": "2015-2-20",
    "actual_mean_temp": 19,
    "actual_min_temp": 7,
    "actual_max_temp": 31,
    "actual_precipitation": 0,
    "location": "CLT"
  },
  {
    "": 235,
    "date": "2015-2-21",
    "actual_mean_temp": 34,
    "actual_min_temp": 25,
    "actual_max_temp": 42,
    "actual_precipitation": 0,
    "location": "CLT"
  },
  {
    "": 236,
    "date": "2015-2-22",
    "actual_mean_temp": 47,
    "actual_min_temp": 36,
    "actual_max_temp": 57,
    "actual_precipitation": 0.18,
    "location": "CLT"
  },
  {
    "": 237,
    "date": "2015-2-23",
    "actual_mean_temp": 44,
    "actual_min_temp": 35,
    "actual_max_temp": 52,
    "actual_precipitation": 0.02,
    "location": "CLT"
  },
  {
    "": 238,
    "date": "2015-2-24",
    "actual_mean_temp": 32,
    "actual_min_temp": 28,
    "actual_max_temp": 35,
    "actual_precipitation": 0.07,
    "location": "CLT"
  },
  {
    "": 239,
    "date": "2015-2-25",
    "actual_mean_temp": 36,
    "actual_min_temp": 29,
    "actual_max_temp": 42,
    "actual_precipitation": 0.48,
    "location": "CLT"
  },
  {
    "": 240,
    "date": "2015-2-26",
    "actual_mean_temp": 37,
    "actual_min_temp": 31,
    "actual_max_temp": 42,
    "actual_precipitation": 0.21,
    "location": "CLT"
  },
  {
    "": 241,
    "date": "2015-2-27",
    "actual_mean_temp": 38,
    "actual_min_temp": 26,
    "actual_max_temp": 50,
    "actual_precipitation": 0,
    "location": "CLT"
  },
  {
    "": 242,
    "date": "2015-2-28",
    "actual_mean_temp": 37,
    "actual_min_temp": 29,
    "actual_max_temp": 44,
    "actual_precipitation": 0,
    "location": "CLT"
  },
  {
    "": 243,
    "date": "2015-3-1",
    "actual_mean_temp": 36,
    "actual_min_temp": 31,
    "actual_max_temp": 40,
    "actual_precipitation": 0.16,
    "location": "CLT"
  },
  {
    "": 244,
    "date": "2015-3-2",
    "actual_mean_temp": 55,
    "actual_min_temp": 39,
    "actual_max_temp": 70,
    "actual_precipitation": 0,
    "location": "CLT"
  },
  {
    "": 245,
    "date": "2015-3-3",
    "actual_mean_temp": 46,
    "actual_min_temp": 40,
    "actual_max_temp": 51,
    "actual_precipitation": 0.06,
    "location": "CLT"
  },
  {
    "": 246,
    "date": "2015-3-4",
    "actual_mean_temp": 56,
    "actual_min_temp": 42,
    "actual_max_temp": 69,
    "actual_precipitation": 0,
    "location": "CLT"
  },
  {
    "": 247,
    "date": "2015-3-5",
    "actual_mean_temp": 52,
    "actual_min_temp": 36,
    "actual_max_temp": 68,
    "actual_precipitation": 0.54,
    "location": "CLT"
  },
  {
    "": 248,
    "date": "2015-3-6",
    "actual_mean_temp": 35,
    "actual_min_temp": 25,
    "actual_max_temp": 44,
    "actual_precipitation": 0,
    "location": "CLT"
  },
  {
    "": 249,
    "date": "2015-3-7",
    "actual_mean_temp": 42,
    "actual_min_temp": 23,
    "actual_max_temp": 61,
    "actual_precipitation": 0,
    "location": "CLT"
  },
  {
    "": 250,
    "date": "2015-3-8",
    "actual_mean_temp": 52,
    "actual_min_temp": 32,
    "actual_max_temp": 71,
    "actual_precipitation": 0,
    "location": "CLT"
  },
  {
    "": 251,
    "date": "2015-3-9",
    "actual_mean_temp": 58,
    "actual_min_temp": 51,
    "actual_max_temp": 65,
    "actual_precipitation": 0.01,
    "location": "CLT"
  },
  {
    "": 252,
    "date": "2015-3-10",
    "actual_mean_temp": 66,
    "actual_min_temp": 53,
    "actual_max_temp": 78,
    "actual_precipitation": 0,
    "location": "CLT"
  },
  {
    "": 253,
    "date": "2015-3-11",
    "actual_mean_temp": 71,
    "actual_min_temp": 58,
    "actual_max_temp": 83,
    "actual_precipitation": 0.15,
    "location": "CLT"
  },
  {
    "": 254,
    "date": "2015-3-12",
    "actual_mean_temp": 61,
    "actual_min_temp": 51,
    "actual_max_temp": 70,
    "actual_precipitation": 0,
    "location": "CLT"
  },
  {
    "": 255,
    "date": "2015-3-13",
    "actual_mean_temp": 50,
    "actual_min_temp": 42,
    "actual_max_temp": 58,
    "actual_precipitation": 0.19,
    "location": "CLT"
  },
  {
    "": 256,
    "date": "2015-3-14",
    "actual_mean_temp": 53,
    "actual_min_temp": 41,
    "actual_max_temp": 64,
    "actual_precipitation": 0.35,
    "location": "CLT"
  },
  {
    "": 257,
    "date": "2015-3-15",
    "actual_mean_temp": 63,
    "actual_min_temp": 49,
    "actual_max_temp": 76,
    "actual_precipitation": 0,
    "location": "CLT"
  },
  {
    "": 258,
    "date": "2015-3-16",
    "actual_mean_temp": 62,
    "actual_min_temp": 43,
    "actual_max_temp": 81,
    "actual_precipitation": 0,
    "location": "CLT"
  },
  {
    "": 259,
    "date": "2015-3-17",
    "actual_mean_temp": 63,
    "actual_min_temp": 41,
    "actual_max_temp": 84,
    "actual_precipitation": 0,
    "location": "CLT"
  },
  {
    "": 260,
    "date": "2015-3-18",
    "actual_mean_temp": 54,
    "actual_min_temp": 47,
    "actual_max_temp": 61,
    "actual_precipitation": 0,
    "location": "CLT"
  },
  {
    "": 261,
    "date": "2015-3-19",
    "actual_mean_temp": 49,
    "actual_min_temp": 42,
    "actual_max_temp": 55,
    "actual_precipitation": 0.21,
    "location": "CLT"
  },
  {
    "": 262,
    "date": "2015-3-20",
    "actual_mean_temp": 50,
    "actual_min_temp": 42,
    "actual_max_temp": 58,
    "actual_precipitation": 0,
    "location": "CLT"
  },
  {
    "": 263,
    "date": "2015-3-21",
    "actual_mean_temp": 56,
    "actual_min_temp": 40,
    "actual_max_temp": 71,
    "actual_precipitation": 0,
    "location": "CLT"
  },
  {
    "": 264,
    "date": "2015-3-22",
    "actual_mean_temp": 62,
    "actual_min_temp": 54,
    "actual_max_temp": 70,
    "actual_precipitation": 0.01,
    "location": "CLT"
  },
  {
    "": 265,
    "date": "2015-3-23",
    "actual_mean_temp": 58,
    "actual_min_temp": 51,
    "actual_max_temp": 65,
    "actual_precipitation": 0,
    "location": "CLT"
  },
  {
    "": 266,
    "date": "2015-3-24",
    "actual_mean_temp": 59,
    "actual_min_temp": 45,
    "actual_max_temp": 72,
    "actual_precipitation": 0,
    "location": "CLT"
  },
  {
    "": 267,
    "date": "2015-3-25",
    "actual_mean_temp": 62,
    "actual_min_temp": 54,
    "actual_max_temp": 69,
    "actual_precipitation": 0.01,
    "location": "CLT"
  },
  {
    "": 268,
    "date": "2015-3-26",
    "actual_mean_temp": 65,
    "actual_min_temp": 56,
    "actual_max_temp": 74,
    "actual_precipitation": 0,
    "location": "CLT"
  },
  {
    "": 269,
    "date": "2015-3-27",
    "actual_mean_temp": 54,
    "actual_min_temp": 43,
    "actual_max_temp": 65,
    "actual_precipitation": 0.24,
    "location": "CLT"
  },
  {
    "": 270,
    "date": "2015-3-28",
    "actual_mean_temp": 43,
    "actual_min_temp": 34,
    "actual_max_temp": 51,
    "actual_precipitation": 0,
    "location": "CLT"
  },
  {
    "": 271,
    "date": "2015-3-29",
    "actual_mean_temp": 42,
    "actual_min_temp": 29,
    "actual_max_temp": 55,
    "actual_precipitation": 0,
    "location": "CLT"
  },
  {
    "": 272,
    "date": "2015-3-30",
    "actual_mean_temp": 55,
    "actual_min_temp": 39,
    "actual_max_temp": 70,
    "actual_precipitation": 0.26,
    "location": "CLT"
  },
  {
    "": 273,
    "date": "2015-3-31",
    "actual_mean_temp": 56,
    "actual_min_temp": 35,
    "actual_max_temp": 77,
    "actual_precipitation": 0,
    "location": "CLT"
  },
  {
    "": 274,
    "date": "2015-4-1",
    "actual_mean_temp": 61,
    "actual_min_temp": 49,
    "actual_max_temp": 73,
    "actual_precipitation": 0,
    "location": "CLT"
  },
  {
    "": 275,
    "date": "2015-4-2",
    "actual_mean_temp": 66,
    "actual_min_temp": 58,
    "actual_max_temp": 73,
    "actual_precipitation": 0.04,
    "location": "CLT"
  },
  {
    "": 276,
    "date": "2015-4-3",
    "actual_mean_temp": 70,
    "actual_min_temp": 58,
    "actual_max_temp": 82,
    "actual_precipitation": 0,
    "location": "CLT"
  },
  {
    "": 277,
    "date": "2015-4-4",
    "actual_mean_temp": 58,
    "actual_min_temp": 45,
    "actual_max_temp": 71,
    "actual_precipitation": 0,
    "location": "CLT"
  },
  {
    "": 278,
    "date": "2015-4-5",
    "actual_mean_temp": 52,
    "actual_min_temp": 36,
    "actual_max_temp": 67,
    "actual_precipitation": 0,
    "location": "CLT"
  },
  {
    "": 279,
    "date": "2015-4-6",
    "actual_mean_temp": 64,
    "actual_min_temp": 51,
    "actual_max_temp": 77,
    "actual_precipitation": 0,
    "location": "CLT"
  },
  {
    "": 280,
    "date": "2015-4-7",
    "actual_mean_temp": 65,
    "actual_min_temp": 57,
    "actual_max_temp": 72,
    "actual_precipitation": 0.51,
    "location": "CLT"
  },
  {
    "": 281,
    "date": "2015-4-8",
    "actual_mean_temp": 73,
    "actual_min_temp": 63,
    "actual_max_temp": 82,
    "actual_precipitation": 0.26,
    "location": "CLT"
  },
  {
    "": 282,
    "date": "2015-4-9",
    "actual_mean_temp": 77,
    "actual_min_temp": 65,
    "actual_max_temp": 88,
    "actual_precipitation": 0.02,
    "location": "CLT"
  },
  {
    "": 283,
    "date": "2015-4-10",
    "actual_mean_temp": 75,
    "actual_min_temp": 67,
    "actual_max_temp": 82,
    "actual_precipitation": 0,
    "location": "CLT"
  },
  {
    "": 284,
    "date": "2015-4-11",
    "actual_mean_temp": 67,
    "actual_min_temp": 56,
    "actual_max_temp": 78,
    "actual_precipitation": 0,
    "location": "CLT"
  },
  {
    "": 285,
    "date": "2015-4-12",
    "actual_mean_temp": 62,
    "actual_min_temp": 50,
    "actual_max_temp": 74,
    "actual_precipitation": 0,
    "location": "CLT"
  },
  {
    "": 286,
    "date": "2015-4-13",
    "actual_mean_temp": 66,
    "actual_min_temp": 59,
    "actual_max_temp": 73,
    "actual_precipitation": 0.11,
    "location": "CLT"
  },
  {
    "": 287,
    "date": "2015-4-14",
    "actual_mean_temp": 73,
    "actual_min_temp": 65,
    "actual_max_temp": 80,
    "actual_precipitation": 0.16,
    "location": "CLT"
  },
  {
    "": 288,
    "date": "2015-4-15",
    "actual_mean_temp": 58,
    "actual_min_temp": 50,
    "actual_max_temp": 65,
    "actual_precipitation": 1.26,
    "location": "CLT"
  },
  {
    "": 289,
    "date": "2015-4-16",
    "actual_mean_temp": 51,
    "actual_min_temp": 47,
    "actual_max_temp": 54,
    "actual_precipitation": 0.4,
    "location": "CLT"
  },
  {
    "": 290,
    "date": "2015-4-17",
    "actual_mean_temp": 62,
    "actual_min_temp": 54,
    "actual_max_temp": 69,
    "actual_precipitation": 0.03,
    "location": "CLT"
  },
  {
    "": 291,
    "date": "2015-4-18",
    "actual_mean_temp": 70,
    "actual_min_temp": 60,
    "actual_max_temp": 79,
    "actual_precipitation": 0.04,
    "location": "CLT"
  },
  {
    "": 292,
    "date": "2015-4-19",
    "actual_mean_temp": 67,
    "actual_min_temp": 64,
    "actual_max_temp": 69,
    "actual_precipitation": 2.65,
    "location": "CLT"
  },
  {
    "": 293,
    "date": "2015-4-20",
    "actual_mean_temp": 67,
    "actual_min_temp": 60,
    "actual_max_temp": 74,
    "actual_precipitation": 0.47,
    "location": "CLT"
  },
  {
    "": 294,
    "date": "2015-4-21",
    "actual_mean_temp": 58,
    "actual_min_temp": 45,
    "actual_max_temp": 71,
    "actual_precipitation": 0,
    "location": "CLT"
  },
  {
    "": 295,
    "date": "2015-4-22",
    "actual_mean_temp": 60,
    "actual_min_temp": 43,
    "actual_max_temp": 77,
    "actual_precipitation": 0,
    "location": "CLT"
  },
  {
    "": 296,
    "date": "2015-4-23",
    "actual_mean_temp": 62,
    "actual_min_temp": 49,
    "actual_max_temp": 74,
    "actual_precipitation": 0,
    "location": "CLT"
  },
  {
    "": 297,
    "date": "2015-4-24",
    "actual_mean_temp": 54,
    "actual_min_temp": 38,
    "actual_max_temp": 70,
    "actual_precipitation": 0,
    "location": "CLT"
  },
  {
    "": 298,
    "date": "2015-4-25",
    "actual_mean_temp": 56,
    "actual_min_temp": 51,
    "actual_max_temp": 61,
    "actual_precipitation": 0.19,
    "location": "CLT"
  },
  {
    "": 299,
    "date": "2015-4-26",
    "actual_mean_temp": 53,
    "actual_min_temp": 48,
    "actual_max_temp": 58,
    "actual_precipitation": 0,
    "location": "CLT"
  },
  {
    "": 300,
    "date": "2015-4-27",
    "actual_mean_temp": 55,
    "actual_min_temp": 39,
    "actual_max_temp": 71,
    "actual_precipitation": 0,
    "location": "CLT"
  },
  {
    "": 301,
    "date": "2015-4-28",
    "actual_mean_temp": 54,
    "actual_min_temp": 38,
    "actual_max_temp": 69,
    "actual_precipitation": 0,
    "location": "CLT"
  },
  {
    "": 302,
    "date": "2015-4-29",
    "actual_mean_temp": 55,
    "actual_min_temp": 45,
    "actual_max_temp": 64,
    "actual_precipitation": 0,
    "location": "CLT"
  },
  {
    "": 303,
    "date": "2015-4-30",
    "actual_mean_temp": 63,
    "actual_min_temp": 49,
    "actual_max_temp": 76,
    "actual_precipitation": 0,
    "location": "CLT"
  },
  {
    "": 304,
    "date": "2015-5-1",
    "actual_mean_temp": 57,
    "actual_min_temp": 47,
    "actual_max_temp": 67,
    "actual_precipitation": 0,
    "location": "CLT"
  },
  {
    "": 305,
    "date": "2015-5-2",
    "actual_mean_temp": 61,
    "actual_min_temp": 45,
    "actual_max_temp": 76,
    "actual_precipitation": 0,
    "location": "CLT"
  },
  {
    "": 306,
    "date": "2015-5-3",
    "actual_mean_temp": 63,
    "actual_min_temp": 46,
    "actual_max_temp": 80,
    "actual_precipitation": 0,
    "location": "CLT"
  },
  {
    "": 307,
    "date": "2015-5-4",
    "actual_mean_temp": 69,
    "actual_min_temp": 55,
    "actual_max_temp": 83,
    "actual_precipitation": 0,
    "location": "CLT"
  },
  {
    "": 308,
    "date": "2015-5-5",
    "actual_mean_temp": 69,
    "actual_min_temp": 56,
    "actual_max_temp": 82,
    "actual_precipitation": 0,
    "location": "CLT"
  },
  {
    "": 309,
    "date": "2015-5-6",
    "actual_mean_temp": 69,
    "actual_min_temp": 53,
    "actual_max_temp": 84,
    "actual_precipitation": 0,
    "location": "CLT"
  },
  {
    "": 310,
    "date": "2015-5-7",
    "actual_mean_temp": 70,
    "actual_min_temp": 58,
    "actual_max_temp": 81,
    "actual_precipitation": 0,
    "location": "CLT"
  },
  {
    "": 311,
    "date": "2015-5-8",
    "actual_mean_temp": 71,
    "actual_min_temp": 57,
    "actual_max_temp": 85,
    "actual_precipitation": 0,
    "location": "CLT"
  },
  {
    "": 312,
    "date": "2015-5-9",
    "actual_mean_temp": 72,
    "actual_min_temp": 60,
    "actual_max_temp": 84,
    "actual_precipitation": 0,
    "location": "CLT"
  },
  {
    "": 313,
    "date": "2015-5-10",
    "actual_mean_temp": 74,
    "actual_min_temp": 65,
    "actual_max_temp": 82,
    "actual_precipitation": 0,
    "location": "CLT"
  },
  {
    "": 314,
    "date": "2015-5-11",
    "actual_mean_temp": 76,
    "actual_min_temp": 61,
    "actual_max_temp": 90,
    "actual_precipitation": 0,
    "location": "CLT"
  },
  {
    "": 315,
    "date": "2015-5-12",
    "actual_mean_temp": 77,
    "actual_min_temp": 66,
    "actual_max_temp": 88,
    "actual_precipitation": 0,
    "location": "CLT"
  },
  {
    "": 316,
    "date": "2015-5-13",
    "actual_mean_temp": 73,
    "actual_min_temp": 60,
    "actual_max_temp": 85,
    "actual_precipitation": 0,
    "location": "CLT"
  },
  {
    "": 317,
    "date": "2015-5-14",
    "actual_mean_temp": 67,
    "actual_min_temp": 58,
    "actual_max_temp": 75,
    "actual_precipitation": 0,
    "location": "CLT"
  },
  {
    "": 318,
    "date": "2015-5-15",
    "actual_mean_temp": 73,
    "actual_min_temp": 63,
    "actual_max_temp": 82,
    "actual_precipitation": 0,
    "location": "CLT"
  },
  {
    "": 319,
    "date": "2015-5-16",
    "actual_mean_temp": 75,
    "actual_min_temp": 62,
    "actual_max_temp": 87,
    "actual_precipitation": 0,
    "location": "CLT"
  },
  {
    "": 320,
    "date": "2015-5-17",
    "actual_mean_temp": 75,
    "actual_min_temp": 63,
    "actual_max_temp": 86,
    "actual_precipitation": 0,
    "location": "CLT"
  },
  {
    "": 321,
    "date": "2015-5-18",
    "actual_mean_temp": 78,
    "actual_min_temp": 67,
    "actual_max_temp": 89,
    "actual_precipitation": 0,
    "location": "CLT"
  },
  {
    "": 322,
    "date": "2015-5-19",
    "actual_mean_temp": 77,
    "actual_min_temp": 65,
    "actual_max_temp": 89,
    "actual_precipitation": 0,
    "location": "CLT"
  },
  {
    "": 323,
    "date": "2015-5-20",
    "actual_mean_temp": 76,
    "actual_min_temp": 61,
    "actual_max_temp": 91,
    "actual_precipitation": 0,
    "location": "CLT"
  },
  {
    "": 324,
    "date": "2015-5-21",
    "actual_mean_temp": 75,
    "actual_min_temp": 64,
    "actual_max_temp": 86,
    "actual_precipitation": 0,
    "location": "CLT"
  },
  {
    "": 325,
    "date": "2015-5-22",
    "actual_mean_temp": 64,
    "actual_min_temp": 52,
    "actual_max_temp": 76,
    "actual_precipitation": 0,
    "location": "CLT"
  },
  {
    "": 326,
    "date": "2015-5-23",
    "actual_mean_temp": 65,
    "actual_min_temp": 47,
    "actual_max_temp": 82,
    "actual_precipitation": 0,
    "location": "CLT"
  },
  {
    "": 327,
    "date": "2015-5-24",
    "actual_mean_temp": 68,
    "actual_min_temp": 54,
    "actual_max_temp": 82,
    "actual_precipitation": 0,
    "location": "CLT"
  },
  {
    "": 328,
    "date": "2015-5-25",
    "actual_mean_temp": 73,
    "actual_min_temp": 59,
    "actual_max_temp": 86,
    "actual_precipitation": 0,
    "location": "CLT"
  },
  {
    "": 329,
    "date": "2015-5-26",
    "actual_mean_temp": 78,
    "actual_min_temp": 67,
    "actual_max_temp": 88,
    "actual_precipitation": 0.32,
    "location": "CLT"
  },
  {
    "": 330,
    "date": "2015-5-27",
    "actual_mean_temp": 75,
    "actual_min_temp": 65,
    "actual_max_temp": 84,
    "actual_precipitation": 0,
    "location": "CLT"
  },
  {
    "": 331,
    "date": "2015-5-28",
    "actual_mean_temp": 78,
    "actual_min_temp": 67,
    "actual_max_temp": 88,
    "actual_precipitation": 0,
    "location": "CLT"
  },
  {
    "": 332,
    "date": "2015-5-29",
    "actual_mean_temp": 78,
    "actual_min_temp": 67,
    "actual_max_temp": 88,
    "actual_precipitation": 0,
    "location": "CLT"
  },
  {
    "": 333,
    "date": "2015-5-30",
    "actual_mean_temp": 76,
    "actual_min_temp": 65,
    "actual_max_temp": 87,
    "actual_precipitation": 0,
    "location": "CLT"
  },
  {
    "": 334,
    "date": "2015-5-31",
    "actual_mean_temp": 78,
    "actual_min_temp": 67,
    "actual_max_temp": 89,
    "actual_precipitation": 0,
    "location": "CLT"
  },
  {
    "": 335,
    "date": "2015-6-1",
    "actual_mean_temp": 77,
    "actual_min_temp": 66,
    "actual_max_temp": 88,
    "actual_precipitation": 0,
    "location": "CLT"
  },
  {
    "": 336,
    "date": "2015-6-2",
    "actual_mean_temp": 73,
    "actual_min_temp": 64,
    "actual_max_temp": 81,
    "actual_precipitation": 0.76,
    "location": "CLT"
  },
  {
    "": 337,
    "date": "2015-6-3",
    "actual_mean_temp": 67,
    "actual_min_temp": 64,
    "actual_max_temp": 69,
    "actual_precipitation": 0.02,
    "location": "CLT"
  },
  {
    "": 338,
    "date": "2015-6-4",
    "actual_mean_temp": 69,
    "actual_min_temp": 61,
    "actual_max_temp": 77,
    "actual_precipitation": 0,
    "location": "CLT"
  },
  {
    "": 339,
    "date": "2015-6-5",
    "actual_mean_temp": 72,
    "actual_min_temp": 59,
    "actual_max_temp": 84,
    "actual_precipitation": 0,
    "location": "CLT"
  },
  {
    "": 340,
    "date": "2015-6-6",
    "actual_mean_temp": 76,
    "actual_min_temp": 62,
    "actual_max_temp": 90,
    "actual_precipitation": 0,
    "location": "CLT"
  },
  {
    "": 341,
    "date": "2015-6-7",
    "actual_mean_temp": 78,
    "actual_min_temp": 70,
    "actual_max_temp": 86,
    "actual_precipitation": 0.17,
    "location": "CLT"
  },
  {
    "": 342,
    "date": "2015-6-8",
    "actual_mean_temp": 79,
    "actual_min_temp": 69,
    "actual_max_temp": 88,
    "actual_precipitation": 0.01,
    "location": "CLT"
  },
  {
    "": 343,
    "date": "2015-6-9",
    "actual_mean_temp": 79,
    "actual_min_temp": 67,
    "actual_max_temp": 90,
    "actual_precipitation": 0,
    "location": "CLT"
  },
  {
    "": 344,
    "date": "2015-6-10",
    "actual_mean_temp": 79,
    "actual_min_temp": 69,
    "actual_max_temp": 89,
    "actual_precipitation": 0,
    "location": "CLT"
  },
  {
    "": 345,
    "date": "2015-6-11",
    "actual_mean_temp": 79,
    "actual_min_temp": 68,
    "actual_max_temp": 90,
    "actual_precipitation": 0,
    "location": "CLT"
  },
  {
    "": 346,
    "date": "2015-6-12",
    "actual_mean_temp": 81,
    "actual_min_temp": 71,
    "actual_max_temp": 90,
    "actual_precipitation": 0,
    "location": "CLT"
  },
  {
    "": 347,
    "date": "2015-6-13",
    "actual_mean_temp": 83,
    "actual_min_temp": 72,
    "actual_max_temp": 94,
    "actual_precipitation": 0,
    "location": "CLT"
  },
  {
    "": 348,
    "date": "2015-6-14",
    "actual_mean_temp": 83,
    "actual_min_temp": 68,
    "actual_max_temp": 97,
    "actual_precipitation": 0,
    "location": "CLT"
  },
  {
    "": 349,
    "date": "2015-6-15",
    "actual_mean_temp": 84,
    "actual_min_temp": 68,
    "actual_max_temp": 99,
    "actual_precipitation": 0,
    "location": "CLT"
  },
  {
    "": 350,
    "date": "2015-6-16",
    "actual_mean_temp": 84,
    "actual_min_temp": 69,
    "actual_max_temp": 99,
    "actual_precipitation": 0,
    "location": "CLT"
  },
  {
    "": 351,
    "date": "2015-6-17",
    "actual_mean_temp": 86,
    "actual_min_temp": 73,
    "actual_max_temp": 99,
    "actual_precipitation": 0,
    "location": "CLT"
  },
  {
    "": 352,
    "date": "2015-6-18",
    "actual_mean_temp": 87,
    "actual_min_temp": 74,
    "actual_max_temp": 100,
    "actual_precipitation": 0,
    "location": "CLT"
  },
  {
    "": 353,
    "date": "2015-6-19",
    "actual_mean_temp": 84,
    "actual_min_temp": 72,
    "actual_max_temp": 96,
    "actual_precipitation": 0,
    "location": "CLT"
  },
  {
    "": 354,
    "date": "2015-6-20",
    "actual_mean_temp": 83,
    "actual_min_temp": 71,
    "actual_max_temp": 95,
    "actual_precipitation": 0.01,
    "location": "CLT"
  },
  {
    "": 355,
    "date": "2015-6-21",
    "actual_mean_temp": 84,
    "actual_min_temp": 71,
    "actual_max_temp": 97,
    "actual_precipitation": 0,
    "location": "CLT"
  },
  {
    "": 356,
    "date": "2015-6-22",
    "actual_mean_temp": 83,
    "actual_min_temp": 65,
    "actual_max_temp": 100,
    "actual_precipitation": 0,
    "location": "CLT"
  },
  {
    "": 357,
    "date": "2015-6-23",
    "actual_mean_temp": 87,
    "actual_min_temp": 73,
    "actual_max_temp": 100,
    "actual_precipitation": 0,
    "location": "CLT"
  },
  {
    "": 358,
    "date": "2015-6-24",
    "actual_mean_temp": 88,
    "actual_min_temp": 75,
    "actual_max_temp": 100,
    "actual_precipitation": 0,
    "location": "CLT"
  },
  {
    "": 359,
    "date": "2015-6-25",
    "actual_mean_temp": 86,
    "actual_min_temp": 74,
    "actual_max_temp": 98,
    "actual_precipitation": 0,
    "location": "CLT"
  },
  {
    "": 360,
    "date": "2015-6-26",
    "actual_mean_temp": 85,
    "actual_min_temp": 70,
    "actual_max_temp": 100,
    "actual_precipitation": 1.21,
    "location": "CLT"
  },
  {
    "": 361,
    "date": "2015-6-27",
    "actual_mean_temp": 82,
    "actual_min_temp": 71,
    "actual_max_temp": 92,
    "actual_precipitation": 0.55,
    "location": "CLT"
  },
  {
    "": 362,
    "date": "2015-6-28",
    "actual_mean_temp": 76,
    "actual_min_temp": 66,
    "actual_max_temp": 85,
    "actual_precipitation": 0,
    "location": "CLT"
  },
  {
    "": 363,
    "date": "2015-6-29",
    "actual_mean_temp": 73,
    "actual_min_temp": 59,
    "actual_max_temp": 87,
    "actual_precipitation": 0,
    "location": "CLT"
  },
  {
    "": 364,
    "date": "2015-6-30",
    "actual_mean_temp": 83,
    "actual_min_temp": 71,
    "actual_max_temp": 94,
    "actual_precipitation": 0,
    "location": "CLT"
  },
  {
    "": 365,
    "date": "2014-7-1",
    "actual_mean_temp": 70,
    "actual_min_temp": 63,
    "actual_max_temp": 77,
    "actual_precipitation": 0,
    "location": "CQT"
  },
  {
    "": 366,
    "date": "2014-7-2",
    "actual_mean_temp": 70,
    "actual_min_temp": 62,
    "actual_max_temp": 77,
    "actual_precipitation": 0,
    "location": "CQT"
  },
  {
    "": 367,
    "date": "2014-7-3",
    "actual_mean_temp": 72,
    "actual_min_temp": 63,
    "actual_max_temp": 81,
    "actual_precipitation": 0,
    "location": "CQT"
  },
  {
    "": 368,
    "date": "2014-7-4",
    "actual_mean_temp": 72,
    "actual_min_temp": 62,
    "actual_max_temp": 82,
    "actual_precipitation": 0,
    "location": "CQT"
  },
  {
    "": 369,
    "date": "2014-7-5",
    "actual_mean_temp": 75,
    "actual_min_temp": 64,
    "actual_max_temp": 86,
    "actual_precipitation": 0,
    "location": "CQT"
  },
  {
    "": 370,
    "date": "2014-7-6",
    "actual_mean_temp": 73,
    "actual_min_temp": 64,
    "actual_max_temp": 81,
    "actual_precipitation": 0,
    "location": "CQT"
  },
  {
    "": 371,
    "date": "2014-7-7",
    "actual_mean_temp": 77,
    "actual_min_temp": 64,
    "actual_max_temp": 89,
    "actual_precipitation": 0,
    "location": "CQT"
  },
  {
    "": 372,
    "date": "2014-7-8",
    "actual_mean_temp": 77,
    "actual_min_temp": 68,
    "actual_max_temp": 86,
    "actual_precipitation": 0,
    "location": "CQT"
  },
  {
    "": 373,
    "date": "2014-7-9",
    "actual_mean_temp": 75,
    "actual_min_temp": 67,
    "actual_max_temp": 82,
    "actual_precipitation": 0,
    "location": "CQT"
  },
  {
    "": 374,
    "date": "2014-7-10",
    "actual_mean_temp": 76,
    "actual_min_temp": 66,
    "actual_max_temp": 85,
    "actual_precipitation": 0,
    "location": "CQT"
  },
  {
    "": 375,
    "date": "2014-7-11",
    "actual_mean_temp": 73,
    "actual_min_temp": 65,
    "actual_max_temp": 80,
    "actual_precipitation": 0,
    "location": "CQT"
  },
  {
    "": 376,
    "date": "2014-7-12",
    "actual_mean_temp": 74,
    "actual_min_temp": 65,
    "actual_max_temp": 82,
    "actual_precipitation": 0,
    "location": "CQT"
  },
  {
    "": 377,
    "date": "2014-7-13",
    "actual_mean_temp": 75,
    "actual_min_temp": 67,
    "actual_max_temp": 82,
    "actual_precipitation": 0,
    "location": "CQT"
  },
  {
    "": 378,
    "date": "2014-7-14",
    "actual_mean_temp": 74,
    "actual_min_temp": 68,
    "actual_max_temp": 80,
    "actual_precipitation": 0,
    "location": "CQT"
  },
  {
    "": 379,
    "date": "2014-7-15",
    "actual_mean_temp": 76,
    "actual_min_temp": 69,
    "actual_max_temp": 82,
    "actual_precipitation": 0,
    "location": "CQT"
  },
  {
    "": 380,
    "date": "2014-7-16",
    "actual_mean_temp": 74,
    "actual_min_temp": 66,
    "actual_max_temp": 81,
    "actual_precipitation": 0,
    "location": "CQT"
  },
  {
    "": 381,
    "date": "2014-7-17",
    "actual_mean_temp": 73,
    "actual_min_temp": 65,
    "actual_max_temp": 80,
    "actual_precipitation": 0,
    "location": "CQT"
  },
  {
    "": 382,
    "date": "2014-7-18",
    "actual_mean_temp": 72,
    "actual_min_temp": 64,
    "actual_max_temp": 79,
    "actual_precipitation": 0,
    "location": "CQT"
  },
  {
    "": 383,
    "date": "2014-7-19",
    "actual_mean_temp": 71,
    "actual_min_temp": 66,
    "actual_max_temp": 75,
    "actual_precipitation": 0,
    "location": "CQT"
  },
  {
    "": 384,
    "date": "2014-7-20",
    "actual_mean_temp": 73,
    "actual_min_temp": 66,
    "actual_max_temp": 80,
    "actual_precipitation": 0,
    "location": "CQT"
  },
  {
    "": 385,
    "date": "2014-7-21",
    "actual_mean_temp": 74,
    "actual_min_temp": 66,
    "actual_max_temp": 81,
    "actual_precipitation": 0,
    "location": "CQT"
  },
  {
    "": 386,
    "date": "2014-7-22",
    "actual_mean_temp": 75,
    "actual_min_temp": 65,
    "actual_max_temp": 85,
    "actual_precipitation": 0,
    "location": "CQT"
  },
  {
    "": 387,
    "date": "2014-7-23",
    "actual_mean_temp": 77,
    "actual_min_temp": 65,
    "actual_max_temp": 88,
    "actual_precipitation": 0,
    "location": "CQT"
  },
  {
    "": 388,
    "date": "2014-7-24",
    "actual_mean_temp": 79,
    "actual_min_temp": 65,
    "actual_max_temp": 92,
    "actual_precipitation": 0,
    "location": "CQT"
  },
  {
    "": 389,
    "date": "2014-7-25",
    "actual_mean_temp": 79,
    "actual_min_temp": 69,
    "actual_max_temp": 88,
    "actual_precipitation": 0,
    "location": "CQT"
  },
  {
    "": 390,
    "date": "2014-7-26",
    "actual_mean_temp": 77,
    "actual_min_temp": 68,
    "actual_max_temp": 86,
    "actual_precipitation": 0,
    "location": "CQT"
  },
  {
    "": 391,
    "date": "2014-7-27",
    "actual_mean_temp": 76,
    "actual_min_temp": 67,
    "actual_max_temp": 84,
    "actual_precipitation": 0,
    "location": "CQT"
  },
  {
    "": 392,
    "date": "2014-7-28",
    "actual_mean_temp": 78,
    "actual_min_temp": 68,
    "actual_max_temp": 88,
    "actual_precipitation": 0,
    "location": "CQT"
  },
  {
    "": 393,
    "date": "2014-7-29",
    "actual_mean_temp": 78,
    "actual_min_temp": 68,
    "actual_max_temp": 88,
    "actual_precipitation": 0,
    "location": "CQT"
  },
  {
    "": 394,
    "date": "2014-7-30",
    "actual_mean_temp": 79,
    "actual_min_temp": 68,
    "actual_max_temp": 90,
    "actual_precipitation": 0,
    "location": "CQT"
  },
  {
    "": 395,
    "date": "2014-7-31",
    "actual_mean_temp": 77,
    "actual_min_temp": 67,
    "actual_max_temp": 87,
    "actual_precipitation": 0,
    "location": "CQT"
  },
  {
    "": 396,
    "date": "2014-8-1",
    "actual_mean_temp": 76,
    "actual_min_temp": 66,
    "actual_max_temp": 85,
    "actual_precipitation": 0,
    "location": "CQT"
  },
  {
    "": 397,
    "date": "2014-8-2",
    "actual_mean_temp": 78,
    "actual_min_temp": 65,
    "actual_max_temp": 90,
    "actual_precipitation": 0.02,
    "location": "CQT"
  },
  {
    "": 398,
    "date": "2014-8-3",
    "actual_mean_temp": 79,
    "actual_min_temp": 72,
    "actual_max_temp": 85,
    "actual_precipitation": 0.02,
    "location": "CQT"
  },
  {
    "": 399,
    "date": "2014-8-4",
    "actual_mean_temp": 76,
    "actual_min_temp": 65,
    "actual_max_temp": 87,
    "actual_precipitation": 0,
    "location": "CQT"
  },
  {
    "": 400,
    "date": "2014-8-5",
    "actual_mean_temp": 73,
    "actual_min_temp": 63,
    "actual_max_temp": 82,
    "actual_precipitation": 0,
    "location": "CQT"
  },
  {
    "": 401,
    "date": "2014-8-6",
    "actual_mean_temp": 70,
    "actual_min_temp": 63,
    "actual_max_temp": 77,
    "actual_precipitation": 0,
    "location": "CQT"
  },
  {
    "": 402,
    "date": "2014-8-7",
    "actual_mean_temp": 73,
    "actual_min_temp": 64,
    "actual_max_temp": 81,
    "actual_precipitation": 0,
    "location": "CQT"
  },
  {
    "": 403,
    "date": "2014-8-8",
    "actual_mean_temp": 74,
    "actual_min_temp": 65,
    "actual_max_temp": 82,
    "actual_precipitation": 0,
    "location": "CQT"
  },
  {
    "": 404,
    "date": "2014-8-9",
    "actual_mean_temp": 75,
    "actual_min_temp": 67,
    "actual_max_temp": 82,
    "actual_precipitation": 0,
    "location": "CQT"
  },
  {
    "": 405,
    "date": "2014-8-10",
    "actual_mean_temp": 76,
    "actual_min_temp": 66,
    "actual_max_temp": 85,
    "actual_precipitation": 0,
    "location": "CQT"
  },
  {
    "": 406,
    "date": "2014-8-11",
    "actual_mean_temp": 75,
    "actual_min_temp": 65,
    "actual_max_temp": 85,
    "actual_precipitation": 0,
    "location": "CQT"
  },
  {
    "": 407,
    "date": "2014-8-12",
    "actual_mean_temp": 75,
    "actual_min_temp": 66,
    "actual_max_temp": 84,
    "actual_precipitation": 0,
    "location": "CQT"
  },
  {
    "": 408,
    "date": "2014-8-13",
    "actual_mean_temp": 73,
    "actual_min_temp": 65,
    "actual_max_temp": 81,
    "actual_precipitation": 0,
    "location": "CQT"
  },
  {
    "": 409,
    "date": "2014-8-14",
    "actual_mean_temp": 74,
    "actual_min_temp": 65,
    "actual_max_temp": 83,
    "actual_precipitation": 0,
    "location": "CQT"
  },
  {
    "": 410,
    "date": "2014-8-15",
    "actual_mean_temp": 76,
    "actual_min_temp": 63,
    "actual_max_temp": 89,
    "actual_precipitation": 0,
    "location": "CQT"
  },
  {
    "": 411,
    "date": "2014-8-16",
    "actual_mean_temp": 78,
    "actual_min_temp": 66,
    "actual_max_temp": 90,
    "actual_precipitation": 0,
    "location": "CQT"
  },
  {
    "": 412,
    "date": "2014-8-17",
    "actual_mean_temp": 78,
    "actual_min_temp": 66,
    "actual_max_temp": 89,
    "actual_precipitation": 0,
    "location": "CQT"
  },
  {
    "": 413,
    "date": "2014-8-18",
    "actual_mean_temp": 76,
    "actual_min_temp": 65,
    "actual_max_temp": 86,
    "actual_precipitation": 0,
    "location": "CQT"
  },
  {
    "": 414,
    "date": "2014-8-19",
    "actual_mean_temp": 76,
    "actual_min_temp": 69,
    "actual_max_temp": 82,
    "actual_precipitation": 0,
    "location": "CQT"
  },
  {
    "": 415,
    "date": "2014-8-20",
    "actual_mean_temp": 76,
    "actual_min_temp": 67,
    "actual_max_temp": 84,
    "actual_precipitation": 0,
    "location": "CQT"
  },
  {
    "": 416,
    "date": "2014-8-21",
    "actual_mean_temp": 73,
    "actual_min_temp": 65,
    "actual_max_temp": 80,
    "actual_precipitation": 0,
    "location": "CQT"
  },
  {
    "": 417,
    "date": "2014-8-22",
    "actual_mean_temp": 74,
    "actual_min_temp": 66,
    "actual_max_temp": 81,
    "actual_precipitation": 0,
    "location": "CQT"
  },
  {
    "": 418,
    "date": "2014-8-23",
    "actual_mean_temp": 76,
    "actual_min_temp": 66,
    "actual_max_temp": 85,
    "actual_precipitation": 0,
    "location": "CQT"
  },
  {
    "": 419,
    "date": "2014-8-24",
    "actual_mean_temp": 75,
    "actual_min_temp": 67,
    "actual_max_temp": 83,
    "actual_precipitation": 0,
    "location": "CQT"
  },
  {
    "": 420,
    "date": "2014-8-25",
    "actual_mean_temp": 72,
    "actual_min_temp": 64,
    "actual_max_temp": 80,
    "actual_precipitation": 0,
    "location": "CQT"
  },
  {
    "": 421,
    "date": "2014-8-26",
    "actual_mean_temp": 75,
    "actual_min_temp": 65,
    "actual_max_temp": 84,
    "actual_precipitation": 0,
    "location": "CQT"
  },
  {
    "": 422,
    "date": "2014-8-27",
    "actual_mean_temp": 79,
    "actual_min_temp": 66,
    "actual_max_temp": 91,
    "actual_precipitation": 0,
    "location": "CQT"
  },
  {
    "": 423,
    "date": "2014-8-28",
    "actual_mean_temp": 80,
    "actual_min_temp": 68,
    "actual_max_temp": 91,
    "actual_precipitation": 0,
    "location": "CQT"
  },
  {
    "": 424,
    "date": "2014-8-29",
    "actual_mean_temp": 78,
    "actual_min_temp": 65,
    "actual_max_temp": 90,
    "actual_precipitation": 0,
    "location": "CQT"
  },
  {
    "": 425,
    "date": "2014-8-30",
    "actual_mean_temp": 77,
    "actual_min_temp": 65,
    "actual_max_temp": 89,
    "actual_precipitation": 0,
    "location": "CQT"
  },
  {
    "": 426,
    "date": "2014-8-31",
    "actual_mean_temp": 78,
    "actual_min_temp": 69,
    "actual_max_temp": 87,
    "actual_precipitation": 0,
    "location": "CQT"
  },
  {
    "": 427,
    "date": "2014-9-1",
    "actual_mean_temp": 78,
    "actual_min_temp": 70,
    "actual_max_temp": 85,
    "actual_precipitation": 0,
    "location": "CQT"
  },
  {
    "": 428,
    "date": "2014-9-2",
    "actual_mean_temp": 76,
    "actual_min_temp": 68,
    "actual_max_temp": 84,
    "actual_precipitation": 0,
    "location": "CQT"
  },
  {
    "": 429,
    "date": "2014-9-3",
    "actual_mean_temp": 75,
    "actual_min_temp": 67,
    "actual_max_temp": 83,
    "actual_precipitation": 0,
    "location": "CQT"
  },
  {
    "": 430,
    "date": "2014-9-4",
    "actual_mean_temp": 73,
    "actual_min_temp": 66,
    "actual_max_temp": 80,
    "actual_precipitation": 0,
    "location": "CQT"
  },
  {
    "": 431,
    "date": "2014-9-5",
    "actual_mean_temp": 75,
    "actual_min_temp": 66,
    "actual_max_temp": 83,
    "actual_precipitation": 0,
    "location": "CQT"
  },
  {
    "": 432,
    "date": "2014-9-6",
    "actual_mean_temp": 76,
    "actual_min_temp": 65,
    "actual_max_temp": 86,
    "actual_precipitation": 0,
    "location": "CQT"
  },
  {
    "": 433,
    "date": "2014-9-7",
    "actual_mean_temp": 80,
    "actual_min_temp": 68,
    "actual_max_temp": 92,
    "actual_precipitation": 0,
    "location": "CQT"
  },
  {
    "": 434,
    "date": "2014-9-8",
    "actual_mean_temp": 80,
    "actual_min_temp": 71,
    "actual_max_temp": 88,
    "actual_precipitation": 0.01,
    "location": "CQT"
  },
  {
    "": 435,
    "date": "2014-9-9",
    "actual_mean_temp": 80,
    "actual_min_temp": 68,
    "actual_max_temp": 91,
    "actual_precipitation": 0,
    "location": "CQT"
  },
  {
    "": 436,
    "date": "2014-9-10",
    "actual_mean_temp": 76,
    "actual_min_temp": 64,
    "actual_max_temp": 87,
    "actual_precipitation": 0,
    "location": "CQT"
  },
  {
    "": 437,
    "date": "2014-9-11",
    "actual_mean_temp": 78,
    "actual_min_temp": 67,
    "actual_max_temp": 89,
    "actual_precipitation": 0,
    "location": "CQT"
  },
  {
    "": 438,
    "date": "2014-9-12",
    "actual_mean_temp": 80,
    "actual_min_temp": 68,
    "actual_max_temp": 91,
    "actual_precipitation": 0,
    "location": "CQT"
  },
  {
    "": 439,
    "date": "2014-9-13",
    "actual_mean_temp": 82,
    "actual_min_temp": 69,
    "actual_max_temp": 94,
    "actual_precipitation": 0,
    "location": "CQT"
  },
  {
    "": 440,
    "date": "2014-9-14",
    "actual_mean_temp": 85,
    "actual_min_temp": 71,
    "actual_max_temp": 98,
    "actual_precipitation": 0,
    "location": "CQT"
  },
  {
    "": 441,
    "date": "2014-9-15",
    "actual_mean_temp": 84,
    "actual_min_temp": 73,
    "actual_max_temp": 94,
    "actual_precipitation": 0,
    "location": "CQT"
  },
  {
    "": 442,
    "date": "2014-9-16",
    "actual_mean_temp": 90,
    "actual_min_temp": 76,
    "actual_max_temp": 103,
    "actual_precipitation": 0,
    "location": "CQT"
  },
  {
    "": 443,
    "date": "2014-9-17",
    "actual_mean_temp": 84,
    "actual_min_temp": 72,
    "actual_max_temp": 96,
    "actual_precipitation": 0,
    "location": "CQT"
  },
  {
    "": 444,
    "date": "2014-9-18",
    "actual_mean_temp": 74,
    "actual_min_temp": 67,
    "actual_max_temp": 81,
    "actual_precipitation": 0,
    "location": "CQT"
  },
  {
    "": 445,
    "date": "2014-9-19",
    "actual_mean_temp": 75,
    "actual_min_temp": 67,
    "actual_max_temp": 82,
    "actual_precipitation": 0,
    "location": "CQT"
  },
  {
    "": 446,
    "date": "2014-9-20",
    "actual_mean_temp": 72,
    "actual_min_temp": 66,
    "actual_max_temp": 78,
    "actual_precipitation": 0,
    "location": "CQT"
  },
  {
    "": 447,
    "date": "2014-9-21",
    "actual_mean_temp": 72,
    "actual_min_temp": 65,
    "actual_max_temp": 79,
    "actual_precipitation": 0,
    "location": "CQT"
  },
  {
    "": 448,
    "date": "2014-9-22",
    "actual_mean_temp": 72,
    "actual_min_temp": 63,
    "actual_max_temp": 80,
    "actual_precipitation": 0,
    "location": "CQT"
  },
  {
    "": 449,
    "date": "2014-9-23",
    "actual_mean_temp": 74,
    "actual_min_temp": 63,
    "actual_max_temp": 84,
    "actual_precipitation": 0,
    "location": "CQT"
  },
  {
    "": 450,
    "date": "2014-9-24",
    "actual_mean_temp": 75,
    "actual_min_temp": 62,
    "actual_max_temp": 88,
    "actual_precipitation": 0,
    "location": "CQT"
  },
  {
    "": 451,
    "date": "2014-9-25",
    "actual_mean_temp": 76,
    "actual_min_temp": 67,
    "actual_max_temp": 85,
    "actual_precipitation": 0,
    "location": "CQT"
  },
  {
    "": 452,
    "date": "2014-9-26",
    "actual_mean_temp": 74,
    "actual_min_temp": 65,
    "actual_max_temp": 83,
    "actual_precipitation": 0,
    "location": "CQT"
  },
  {
    "": 453,
    "date": "2014-9-27",
    "actual_mean_temp": 70,
    "actual_min_temp": 63,
    "actual_max_temp": 77,
    "actual_precipitation": 0,
    "location": "CQT"
  },
  {
    "": 454,
    "date": "2014-9-28",
    "actual_mean_temp": 72,
    "actual_min_temp": 64,
    "actual_max_temp": 79,
    "actual_precipitation": 0,
    "location": "CQT"
  },
  {
    "": 455,
    "date": "2014-9-29",
    "actual_mean_temp": 70,
    "actual_min_temp": 61,
    "actual_max_temp": 78,
    "actual_precipitation": 0,
    "location": "CQT"
  },
  {
    "": 456,
    "date": "2014-9-30",
    "actual_mean_temp": 75,
    "actual_min_temp": 64,
    "actual_max_temp": 85,
    "actual_precipitation": 0,
    "location": "CQT"
  },
  {
    "": 457,
    "date": "2014-10-1",
    "actual_mean_temp": 73,
    "actual_min_temp": 64,
    "actual_max_temp": 82,
    "actual_precipitation": 0,
    "location": "CQT"
  },
  {
    "": 458,
    "date": "2014-10-2",
    "actual_mean_temp": 81,
    "actual_min_temp": 64,
    "actual_max_temp": 98,
    "actual_precipitation": 0,
    "location": "CQT"
  },
  {
    "": 459,
    "date": "2014-10-3",
    "actual_mean_temp": 83,
    "actual_min_temp": 67,
    "actual_max_temp": 98,
    "actual_precipitation": 0,
    "location": "CQT"
  },
  {
    "": 460,
    "date": "2014-10-4",
    "actual_mean_temp": 81,
    "actual_min_temp": 65,
    "actual_max_temp": 97,
    "actual_precipitation": 0,
    "location": "CQT"
  },
  {
    "": 461,
    "date": "2014-10-5",
    "actual_mean_temp": 80,
    "actual_min_temp": 65,
    "actual_max_temp": 95,
    "actual_precipitation": 0,
    "location": "CQT"
  },
  {
    "": 462,
    "date": "2014-10-6",
    "actual_mean_temp": 78,
    "actual_min_temp": 64,
    "actual_max_temp": 92,
    "actual_precipitation": 0,
    "location": "CQT"
  },
  {
    "": 463,
    "date": "2014-10-7",
    "actual_mean_temp": 79,
    "actual_min_temp": 64,
    "actual_max_temp": 93,
    "actual_precipitation": 0,
    "location": "CQT"
  },
  {
    "": 464,
    "date": "2014-10-8",
    "actual_mean_temp": 75,
    "actual_min_temp": 63,
    "actual_max_temp": 87,
    "actual_precipitation": 0,
    "location": "CQT"
  },
  {
    "": 465,
    "date": "2014-10-9",
    "actual_mean_temp": 74,
    "actual_min_temp": 67,
    "actual_max_temp": 80,
    "actual_precipitation": 0,
    "location": "CQT"
  },
  {
    "": 466,
    "date": "2014-10-10",
    "actual_mean_temp": 72,
    "actual_min_temp": 64,
    "actual_max_temp": 79,
    "actual_precipitation": 0,
    "location": "CQT"
  },
  {
    "": 467,
    "date": "2014-10-11",
    "actual_mean_temp": 73,
    "actual_min_temp": 64,
    "actual_max_temp": 81,
    "actual_precipitation": 0,
    "location": "CQT"
  },
  {
    "": 468,
    "date": "2014-10-12",
    "actual_mean_temp": 74,
    "actual_min_temp": 67,
    "actual_max_temp": 81,
    "actual_precipitation": 0,
    "location": "CQT"
  },
  {
    "": 469,
    "date": "2014-10-13",
    "actual_mean_temp": 74,
    "actual_min_temp": 65,
    "actual_max_temp": 82,
    "actual_precipitation": 0,
    "location": "CQT"
  },
  {
    "": 470,
    "date": "2014-10-14",
    "actual_mean_temp": 71,
    "actual_min_temp": 66,
    "actual_max_temp": 76,
    "actual_precipitation": 0,
    "location": "CQT"
  },
  {
    "": 471,
    "date": "2014-10-15",
    "actual_mean_temp": 71,
    "actual_min_temp": 63,
    "actual_max_temp": 78,
    "actual_precipitation": 0,
    "location": "CQT"
  },
  {
    "": 472,
    "date": "2014-10-16",
    "actual_mean_temp": 69,
    "actual_min_temp": 61,
    "actual_max_temp": 77,
    "actual_precipitation": 0,
    "location": "CQT"
  },
  {
    "": 473,
    "date": "2014-10-17",
    "actual_mean_temp": 69,
    "actual_min_temp": 62,
    "actual_max_temp": 76,
    "actual_precipitation": 0,
    "location": "CQT"
  },
  {
    "": 474,
    "date": "2014-10-18",
    "actual_mean_temp": 70,
    "actual_min_temp": 61,
    "actual_max_temp": 78,
    "actual_precipitation": 0,
    "location": "CQT"
  },
  {
    "": 475,
    "date": "2014-10-19",
    "actual_mean_temp": 70,
    "actual_min_temp": 62,
    "actual_max_temp": 77,
    "actual_precipitation": 0,
    "location": "CQT"
  },
  {
    "": 476,
    "date": "2014-10-20",
    "actual_mean_temp": 71,
    "actual_min_temp": 63,
    "actual_max_temp": 79,
    "actual_precipitation": 0,
    "location": "CQT"
  },
  {
    "": 477,
    "date": "2014-10-21",
    "actual_mean_temp": 71,
    "actual_min_temp": 64,
    "actual_max_temp": 78,
    "actual_precipitation": 0,
    "location": "CQT"
  },
  {
    "": 478,
    "date": "2014-10-22",
    "actual_mean_temp": 72,
    "actual_min_temp": 60,
    "actual_max_temp": 84,
    "actual_precipitation": 0,
    "location": "CQT"
  },
  {
    "": 479,
    "date": "2014-10-23",
    "actual_mean_temp": 73,
    "actual_min_temp": 60,
    "actual_max_temp": 85,
    "actual_precipitation": 0,
    "location": "CQT"
  },
  {
    "": 480,
    "date": "2014-10-24",
    "actual_mean_temp": 74,
    "actual_min_temp": 59,
    "actual_max_temp": 88,
    "actual_precipitation": 0,
    "location": "CQT"
  },
  {
    "": 481,
    "date": "2014-10-25",
    "actual_mean_temp": 71,
    "actual_min_temp": 61,
    "actual_max_temp": 80,
    "actual_precipitation": 0,
    "location": "CQT"
  },
  {
    "": 482,
    "date": "2014-10-26",
    "actual_mean_temp": 70,
    "actual_min_temp": 61,
    "actual_max_temp": 78,
    "actual_precipitation": 0,
    "location": "CQT"
  },
  {
    "": 483,
    "date": "2014-10-27",
    "actual_mean_temp": 70,
    "actual_min_temp": 62,
    "actual_max_temp": 77,
    "actual_precipitation": 0,
    "location": "CQT"
  },
  {
    "": 484,
    "date": "2014-10-28",
    "actual_mean_temp": 69,
    "actual_min_temp": 59,
    "actual_max_temp": 78,
    "actual_precipitation": 0,
    "location": "CQT"
  },
  {
    "": 485,
    "date": "2014-10-29",
    "actual_mean_temp": 72,
    "actual_min_temp": 59,
    "actual_max_temp": 85,
    "actual_precipitation": 0,
    "location": "CQT"
  },
  {
    "": 486,
    "date": "2014-10-30",
    "actual_mean_temp": 71,
    "actual_min_temp": 60,
    "actual_max_temp": 81,
    "actual_precipitation": 0,
    "location": "CQT"
  },
  {
    "": 487,
    "date": "2014-10-31",
    "actual_mean_temp": 66,
    "actual_min_temp": 60,
    "actual_max_temp": 71,
    "actual_precipitation": 0.25,
    "location": "CQT"
  },
  {
    "": 488,
    "date": "2014-11-1",
    "actual_mean_temp": 61,
    "actual_min_temp": 55,
    "actual_max_temp": 67,
    "actual_precipitation": 0.18,
    "location": "CQT"
  },
  {
    "": 489,
    "date": "2014-11-2",
    "actual_mean_temp": 61,
    "actual_min_temp": 51,
    "actual_max_temp": 70,
    "actual_precipitation": 0,
    "location": "CQT"
  },
  {
    "": 490,
    "date": "2014-11-3",
    "actual_mean_temp": 65,
    "actual_min_temp": 52,
    "actual_max_temp": 77,
    "actual_precipitation": 0,
    "location": "CQT"
  },
  {
    "": 491,
    "date": "2014-11-4",
    "actual_mean_temp": 64,
    "actual_min_temp": 51,
    "actual_max_temp": 77,
    "actual_precipitation": 0,
    "location": "CQT"
  },
  {
    "": 492,
    "date": "2014-11-5",
    "actual_mean_temp": 69,
    "actual_min_temp": 53,
    "actual_max_temp": 85,
    "actual_precipitation": 0,
    "location": "CQT"
  },
  {
    "": 493,
    "date": "2014-11-6",
    "actual_mean_temp": 76,
    "actual_min_temp": 61,
    "actual_max_temp": 90,
    "actual_precipitation": 0,
    "location": "CQT"
  },
  {
    "": 494,
    "date": "2014-11-7",
    "actual_mean_temp": 75,
    "actual_min_temp": 60,
    "actual_max_temp": 89,
    "actual_precipitation": 0,
    "location": "CQT"
  },
  {
    "": 495,
    "date": "2014-11-8",
    "actual_mean_temp": 74,
    "actual_min_temp": 59,
    "actual_max_temp": 89,
    "actual_precipitation": 0,
    "location": "CQT"
  },
  {
    "": 496,
    "date": "2014-11-9",
    "actual_mean_temp": 68,
    "actual_min_temp": 58,
    "actual_max_temp": 77,
    "actual_precipitation": 0,
    "location": "CQT"
  },
  {
    "": 497,
    "date": "2014-11-10",
    "actual_mean_temp": 66,
    "actual_min_temp": 62,
    "actual_max_temp": 70,
    "actual_precipitation": 0,
    "location": "CQT"
  },
  {
    "": 498,
    "date": "2014-11-11",
    "actual_mean_temp": 66,
    "actual_min_temp": 62,
    "actual_max_temp": 69,
    "actual_precipitation": 0,
    "location": "CQT"
  },
  {
    "": 499,
    "date": "2014-11-12",
    "actual_mean_temp": 64,
    "actual_min_temp": 58,
    "actual_max_temp": 70,
    "actual_precipitation": 0,
    "location": "CQT"
  },
  {
    "": 500,
    "date": "2014-11-13",
    "actual_mean_temp": 63,
    "actual_min_temp": 55,
    "actual_max_temp": 70,
    "actual_precipitation": 0,
    "location": "CQT"
  },
  {
    "": 501,
    "date": "2014-11-14",
    "actual_mean_temp": 67,
    "actual_min_temp": 60,
    "actual_max_temp": 73,
    "actual_precipitation": 0,
    "location": "CQT"
  },
  {
    "": 502,
    "date": "2014-11-15",
    "actual_mean_temp": 65,
    "actual_min_temp": 58,
    "actual_max_temp": 72,
    "actual_precipitation": 0,
    "location": "CQT"
  },
  {
    "": 503,
    "date": "2014-11-16",
    "actual_mean_temp": 65,
    "actual_min_temp": 55,
    "actual_max_temp": 74,
    "actual_precipitation": 0,
    "location": "CQT"
  },
  {
    "": 504,
    "date": "2014-11-17",
    "actual_mean_temp": 65,
    "actual_min_temp": 53,
    "actual_max_temp": 76,
    "actual_precipitation": 0,
    "location": "CQT"
  },
  {
    "": 505,
    "date": "2014-11-18",
    "actual_mean_temp": 65,
    "actual_min_temp": 52,
    "actual_max_temp": 77,
    "actual_precipitation": 0,
    "location": "CQT"
  },
  {
    "": 506,
    "date": "2014-11-19",
    "actual_mean_temp": 64,
    "actual_min_temp": 53,
    "actual_max_temp": 74,
    "actual_precipitation": 0,
    "location": "CQT"
  },
  {
    "": 507,
    "date": "2014-11-20",
    "actual_mean_temp": 62,
    "actual_min_temp": 53,
    "actual_max_temp": 70,
    "actual_precipitation": 0,
    "location": "CQT"
  },
  {
    "": 508,
    "date": "2014-11-21",
    "actual_mean_temp": 64,
    "actual_min_temp": 55,
    "actual_max_temp": 73,
    "actual_precipitation": 0,
    "location": "CQT"
  },
  {
    "": 509,
    "date": "2014-11-22",
    "actual_mean_temp": 63,
    "actual_min_temp": 52,
    "actual_max_temp": 73,
    "actual_precipitation": 0,
    "location": "CQT"
  },
  {
    "": 510,
    "date": "2014-11-23",
    "actual_mean_temp": 69,
    "actual_min_temp": 57,
    "actual_max_temp": 80,
    "actual_precipitation": 0,
    "location": "CQT"
  },
  {
    "": 511,
    "date": "2014-11-24",
    "actual_mean_temp": 67,
    "actual_min_temp": 53,
    "actual_max_temp": 80,
    "actual_precipitation": 0,
    "location": "CQT"
  },
  {
    "": 512,
    "date": "2014-11-25",
    "actual_mean_temp": 66,
    "actual_min_temp": 52,
    "actual_max_temp": 80,
    "actual_precipitation": 0,
    "location": "CQT"
  },
  {
    "": 513,
    "date": "2014-11-26",
    "actual_mean_temp": 69,
    "actual_min_temp": 53,
    "actual_max_temp": 85,
    "actual_precipitation": 0,
    "location": "CQT"
  },
  {
    "": 514,
    "date": "2014-11-27",
    "actual_mean_temp": 74,
    "actual_min_temp": 58,
    "actual_max_temp": 89,
    "actual_precipitation": 0,
    "location": "CQT"
  },
  {
    "": 515,
    "date": "2014-11-28",
    "actual_mean_temp": 67,
    "actual_min_temp": 53,
    "actual_max_temp": 81,
    "actual_precipitation": 0,
    "location": "CQT"
  },
  {
    "": 516,
    "date": "2014-11-29",
    "actual_mean_temp": 63,
    "actual_min_temp": 51,
    "actual_max_temp": 74,
    "actual_precipitation": 0,
    "location": "CQT"
  },
  {
    "": 517,
    "date": "2014-11-30",
    "actual_mean_temp": 63,
    "actual_min_temp": 60,
    "actual_max_temp": 66,
    "actual_precipitation": 0.3,
    "location": "CQT"
  },
  {
    "": 518,
    "date": "2014-12-1",
    "actual_mean_temp": 63,
    "actual_min_temp": 57,
    "actual_max_temp": 69,
    "actual_precipitation": 0,
    "location": "CQT"
  },
  {
    "": 519,
    "date": "2014-12-2",
    "actual_mean_temp": 62,
    "actual_min_temp": 58,
    "actual_max_temp": 66,
    "actual_precipitation": 1.21,
    "location": "CQT"
  },
  {
    "": 520,
    "date": "2014-12-3",
    "actual_mean_temp": 63,
    "actual_min_temp": 59,
    "actual_max_temp": 67,
    "actual_precipitation": 0.31,
    "location": "CQT"
  },
  {
    "": 521,
    "date": "2014-12-4",
    "actual_mean_temp": 64,
    "actual_min_temp": 57,
    "actual_max_temp": 71,
    "actual_precipitation": 0,
    "location": "CQT"
  },
  {
    "": 522,
    "date": "2014-12-5",
    "actual_mean_temp": 63,
    "actual_min_temp": 57,
    "actual_max_temp": 69,
    "actual_precipitation": 0,
    "location": "CQT"
  },
  {
    "": 523,
    "date": "2014-12-6",
    "actual_mean_temp": 63,
    "actual_min_temp": 55,
    "actual_max_temp": 71,
    "actual_precipitation": 0,
    "location": "CQT"
  },
  {
    "": 524,
    "date": "2014-12-7",
    "actual_mean_temp": 65,
    "actual_min_temp": 54,
    "actual_max_temp": 76,
    "actual_precipitation": 0,
    "location": "CQT"
  },
  {
    "": 525,
    "date": "2014-12-8",
    "actual_mean_temp": 67,
    "actual_min_temp": 55,
    "actual_max_temp": 78,
    "actual_precipitation": 0,
    "location": "CQT"
  },
  {
    "": 526,
    "date": "2014-12-9",
    "actual_mean_temp": 65,
    "actual_min_temp": 54,
    "actual_max_temp": 76,
    "actual_precipitation": 0,
    "location": "CQT"
  },
  {
    "": 527,
    "date": "2014-12-10",
    "actual_mean_temp": 63,
    "actual_min_temp": 53,
    "actual_max_temp": 73,
    "actual_precipitation": 0,
    "location": "CQT"
  },
  {
    "": 528,
    "date": "2014-12-11",
    "actual_mean_temp": 64,
    "actual_min_temp": 60,
    "actual_max_temp": 67,
    "actual_precipitation": 0.01,
    "location": "CQT"
  },
  {
    "": 529,
    "date": "2014-12-12",
    "actual_mean_temp": 59,
    "actual_min_temp": 52,
    "actual_max_temp": 65,
    "actual_precipitation": 1.6,
    "location": "CQT"
  },
  {
    "": 530,
    "date": "2014-12-13",
    "actual_mean_temp": 57,
    "actual_min_temp": 48,
    "actual_max_temp": 66,
    "actual_precipitation": 0,
    "location": "CQT"
  },
  {
    "": 531,
    "date": "2014-12-14",
    "actual_mean_temp": 57,
    "actual_min_temp": 47,
    "actual_max_temp": 66,
    "actual_precipitation": 0,
    "location": "CQT"
  },
  {
    "": 532,
    "date": "2014-12-15",
    "actual_mean_temp": 56,
    "actual_min_temp": 47,
    "actual_max_temp": 65,
    "actual_precipitation": 0,
    "location": "CQT"
  },
  {
    "": 533,
    "date": "2014-12-16",
    "actual_mean_temp": 57,
    "actual_min_temp": 54,
    "actual_max_temp": 60,
    "actual_precipitation": 0.41,
    "location": "CQT"
  },
  {
    "": 534,
    "date": "2014-12-17",
    "actual_mean_temp": 58,
    "actual_min_temp": 51,
    "actual_max_temp": 65,
    "actual_precipitation": 0.15,
    "location": "CQT"
  },
  {
    "": 535,
    "date": "2014-12-18",
    "actual_mean_temp": 55,
    "actual_min_temp": 48,
    "actual_max_temp": 62,
    "actual_precipitation": 0,
    "location": "CQT"
  },
  {
    "": 536,
    "date": "2014-12-19",
    "actual_mean_temp": 58,
    "actual_min_temp": 49,
    "actual_max_temp": 66,
    "actual_precipitation": 0,
    "location": "CQT"
  },
  {
    "": 537,
    "date": "2014-12-20",
    "actual_mean_temp": 57,
    "actual_min_temp": 50,
    "actual_max_temp": 64,
    "actual_precipitation": 0,
    "location": "CQT"
  },
  {
    "": 538,
    "date": "2014-12-21",
    "actual_mean_temp": 59,
    "actual_min_temp": 50,
    "actual_max_temp": 68,
    "actual_precipitation": 0,
    "location": "CQT"
  },
  {
    "": 539,
    "date": "2014-12-22",
    "actual_mean_temp": 63,
    "actual_min_temp": 50,
    "actual_max_temp": 75,
    "actual_precipitation": 0,
    "location": "CQT"
  },
  {
    "": 540,
    "date": "2014-12-23",
    "actual_mean_temp": 67,
    "actual_min_temp": 51,
    "actual_max_temp": 83,
    "actual_precipitation": 0,
    "location": "CQT"
  },
  {
    "": 541,
    "date": "2014-12-24",
    "actual_mean_temp": 64,
    "actual_min_temp": 53,
    "actual_max_temp": 75,
    "actual_precipitation": 0,
    "location": "CQT"
  },
  {
    "": 542,
    "date": "2014-12-25",
    "actual_mean_temp": 58,
    "actual_min_temp": 50,
    "actual_max_temp": 65,
    "actual_precipitation": 0,
    "location": "CQT"
  },
  {
    "": 543,
    "date": "2014-12-26",
    "actual_mean_temp": 53,
    "actual_min_temp": 42,
    "actual_max_temp": 63,
    "actual_precipitation": 0,
    "location": "CQT"
  },
  {
    "": 544,
    "date": "2014-12-27",
    "actual_mean_temp": 51,
    "actual_min_temp": 39,
    "actual_max_temp": 63,
    "actual_precipitation": 0,
    "location": "CQT"
  },
  {
    "": 545,
    "date": "2014-12-28",
    "actual_mean_temp": 53,
    "actual_min_temp": 43,
    "actual_max_temp": 63,
    "actual_precipitation": 0,
    "location": "CQT"
  },
  {
    "": 546,
    "date": "2014-12-29",
    "actual_mean_temp": 52,
    "actual_min_temp": 41,
    "actual_max_temp": 63,
    "actual_precipitation": 0,
    "location": "CQT"
  },
  {
    "": 547,
    "date": "2014-12-30",
    "actual_mean_temp": 52,
    "actual_min_temp": 47,
    "actual_max_temp": 56,
    "actual_precipitation": 0.19,
    "location": "CQT"
  },
  {
    "": 548,
    "date": "2014-12-31",
    "actual_mean_temp": 49,
    "actual_min_temp": 41,
    "actual_max_temp": 57,
    "actual_precipitation": 0,
    "location": "CQT"
  },
  {
    "": 549,
    "date": "2015-1-1",
    "actual_mean_temp": 48,
    "actual_min_temp": 37,
    "actual_max_temp": 59,
    "actual_precipitation": 0,
    "location": "CQT"
  },
  {
    "": 550,
    "date": "2015-1-2",
    "actual_mean_temp": 50,
    "actual_min_temp": 39,
    "actual_max_temp": 61,
    "actual_precipitation": 0,
    "location": "CQT"
  },
  {
    "": 551,
    "date": "2015-1-3",
    "actual_mean_temp": 52,
    "actual_min_temp": 40,
    "actual_max_temp": 63,
    "actual_precipitation": 0,
    "location": "CQT"
  },
  {
    "": 552,
    "date": "2015-1-4",
    "actual_mean_temp": 56,
    "actual_min_temp": 42,
    "actual_max_temp": 69,
    "actual_precipitation": 0,
    "location": "CQT"
  },
  {
    "": 553,
    "date": "2015-1-5",
    "actual_mean_temp": 66,
    "actual_min_temp": 50,
    "actual_max_temp": 81,
    "actual_precipitation": 0,
    "location": "CQT"
  },
  {
    "": 554,
    "date": "2015-1-6",
    "actual_mean_temp": 71,
    "actual_min_temp": 57,
    "actual_max_temp": 84,
    "actual_precipitation": 0,
    "location": "CQT"
  },
  {
    "": 555,
    "date": "2015-1-7",
    "actual_mean_temp": 69,
    "actual_min_temp": 53,
    "actual_max_temp": 85,
    "actual_precipitation": 0,
    "location": "CQT"
  },
  {
    "": 556,
    "date": "2015-1-8",
    "actual_mean_temp": 63,
    "actual_min_temp": 51,
    "actual_max_temp": 75,
    "actual_precipitation": 0,
    "location": "CQT"
  },
  {
    "": 557,
    "date": "2015-1-9",
    "actual_mean_temp": 64,
    "actual_min_temp": 56,
    "actual_max_temp": 72,
    "actual_precipitation": 0,
    "location": "CQT"
  },
  {
    "": 558,
    "date": "2015-1-10",
    "actual_mean_temp": 58,
    "actual_min_temp": 52,
    "actual_max_temp": 63,
    "actual_precipitation": 0.48,
    "location": "CQT"
  },
  {
    "": 559,
    "date": "2015-1-11",
    "actual_mean_temp": 60,
    "actual_min_temp": 56,
    "actual_max_temp": 63,
    "actual_precipitation": 0.5,
    "location": "CQT"
  },
  {
    "": 560,
    "date": "2015-1-12",
    "actual_mean_temp": 60,
    "actual_min_temp": 53,
    "actual_max_temp": 66,
    "actual_precipitation": 0,
    "location": "CQT"
  },
  {
    "": 561,
    "date": "2015-1-13",
    "actual_mean_temp": 61,
    "actual_min_temp": 54,
    "actual_max_temp": 68,
    "actual_precipitation": 0,
    "location": "CQT"
  },
  {
    "": 562,
    "date": "2015-1-14",
    "actual_mean_temp": 60,
    "actual_min_temp": 47,
    "actual_max_temp": 73,
    "actual_precipitation": 0,
    "location": "CQT"
  },
  {
    "": 563,
    "date": "2015-1-15",
    "actual_mean_temp": 64,
    "actual_min_temp": 51,
    "actual_max_temp": 76,
    "actual_precipitation": 0,
    "location": "CQT"
  },
  {
    "": 564,
    "date": "2015-1-16",
    "actual_mean_temp": 64,
    "actual_min_temp": 50,
    "actual_max_temp": 77,
    "actual_precipitation": 0,
    "location": "CQT"
  },
  {
    "": 565,
    "date": "2015-1-17",
    "actual_mean_temp": 64,
    "actual_min_temp": 50,
    "actual_max_temp": 78,
    "actual_precipitation": 0,
    "location": "CQT"
  },
  {
    "": 566,
    "date": "2015-1-18",
    "actual_mean_temp": 64,
    "actual_min_temp": 53,
    "actual_max_temp": 75,
    "actual_precipitation": 0,
    "location": "CQT"
  },
  {
    "": 567,
    "date": "2015-1-19",
    "actual_mean_temp": 61,
    "actual_min_temp": 50,
    "actual_max_temp": 72,
    "actual_precipitation": 0,
    "location": "CQT"
  },
  {
    "": 568,
    "date": "2015-1-20",
    "actual_mean_temp": 58,
    "actual_min_temp": 53,
    "actual_max_temp": 63,
    "actual_precipitation": 0,
    "location": "CQT"
  },
  {
    "": 569,
    "date": "2015-1-21",
    "actual_mean_temp": 63,
    "actual_min_temp": 54,
    "actual_max_temp": 71,
    "actual_precipitation": 0,
    "location": "CQT"
  },
  {
    "": 570,
    "date": "2015-1-22",
    "actual_mean_temp": 61,
    "actual_min_temp": 47,
    "actual_max_temp": 75,
    "actual_precipitation": 0,
    "location": "CQT"
  },
  {
    "": 571,
    "date": "2015-1-23",
    "actual_mean_temp": 63,
    "actual_min_temp": 50,
    "actual_max_temp": 75,
    "actual_precipitation": 0,
    "location": "CQT"
  },
  {
    "": 572,
    "date": "2015-1-24",
    "actual_mean_temp": 66,
    "actual_min_temp": 49,
    "actual_max_temp": 82,
    "actual_precipitation": 0,
    "location": "CQT"
  },
  {
    "": 573,
    "date": "2015-1-25",
    "actual_mean_temp": 66,
    "actual_min_temp": 48,
    "actual_max_temp": 83,
    "actual_precipitation": 0,
    "location": "CQT"
  },
  {
    "": 574,
    "date": "2015-1-26",
    "actual_mean_temp": 69,
    "actual_min_temp": 57,
    "actual_max_temp": 80,
    "actual_precipitation": 0.08,
    "location": "CQT"
  },
  {
    "": 575,
    "date": "2015-1-27",
    "actual_mean_temp": 66,
    "actual_min_temp": 57,
    "actual_max_temp": 74,
    "actual_precipitation": 0,
    "location": "CQT"
  },
  {
    "": 576,
    "date": "2015-1-28",
    "actual_mean_temp": 66,
    "actual_min_temp": 56,
    "actual_max_temp": 75,
    "actual_precipitation": 0,
    "location": "CQT"
  },
  {
    "": 577,
    "date": "2015-1-29",
    "actual_mean_temp": 68,
    "actual_min_temp": 60,
    "actual_max_temp": 75,
    "actual_precipitation": 0,
    "location": "CQT"
  },
  {
    "": 578,
    "date": "2015-1-30",
    "actual_mean_temp": 65,
    "actual_min_temp": 59,
    "actual_max_temp": 70,
    "actual_precipitation": 0.03,
    "location": "CQT"
  },
  {
    "": 579,
    "date": "2015-1-31",
    "actual_mean_temp": 64,
    "actual_min_temp": 56,
    "actual_max_temp": 71,
    "actual_precipitation": 0,
    "location": "CQT"
  },
  {
    "": 580,
    "date": "2015-2-1",
    "actual_mean_temp": 63,
    "actual_min_temp": 49,
    "actual_max_temp": 76,
    "actual_precipitation": 0,
    "location": "CQT"
  },
  {
    "": 581,
    "date": "2015-2-2",
    "actual_mean_temp": 65,
    "actual_min_temp": 51,
    "actual_max_temp": 78,
    "actual_precipitation": 0,
    "location": "CQT"
  },
  {
    "": 582,
    "date": "2015-2-3",
    "actual_mean_temp": 62,
    "actual_min_temp": 51,
    "actual_max_temp": 72,
    "actual_precipitation": 0,
    "location": "CQT"
  },
  {
    "": 583,
    "date": "2015-2-4",
    "actual_mean_temp": 64,
    "actual_min_temp": 56,
    "actual_max_temp": 72,
    "actual_precipitation": 0,
    "location": "CQT"
  },
  {
    "": 584,
    "date": "2015-2-5",
    "actual_mean_temp": 68,
    "actual_min_temp": 53,
    "actual_max_temp": 82,
    "actual_precipitation": 0,
    "location": "CQT"
  },
  {
    "": 585,
    "date": "2015-2-6",
    "actual_mean_temp": 65,
    "actual_min_temp": 54,
    "actual_max_temp": 75,
    "actual_precipitation": 0,
    "location": "CQT"
  },
  {
    "": 586,
    "date": "2015-2-7",
    "actual_mean_temp": 62,
    "actual_min_temp": 54,
    "actual_max_temp": 69,
    "actual_precipitation": 0.02,
    "location": "CQT"
  },
  {
    "": 587,
    "date": "2015-2-8",
    "actual_mean_temp": 68,
    "actual_min_temp": 59,
    "actual_max_temp": 77,
    "actual_precipitation": 0,
    "location": "CQT"
  },
  {
    "": 588,
    "date": "2015-2-9",
    "actual_mean_temp": 66,
    "actual_min_temp": 58,
    "actual_max_temp": 73,
    "actual_precipitation": 0,
    "location": "CQT"
  },
  {
    "": 589,
    "date": "2015-2-10",
    "actual_mean_temp": 66,
    "actual_min_temp": 53,
    "actual_max_temp": 78,
    "actual_precipitation": 0,
    "location": "CQT"
  },
  {
    "": 590,
    "date": "2015-2-11",
    "actual_mean_temp": 70,
    "actual_min_temp": 55,
    "actual_max_temp": 85,
    "actual_precipitation": 0,
    "location": "CQT"
  },
  {
    "": 591,
    "date": "2015-2-12",
    "actual_mean_temp": 71,
    "actual_min_temp": 56,
    "actual_max_temp": 85,
    "actual_precipitation": 0,
    "location": "CQT"
  },
  {
    "": 592,
    "date": "2015-2-13",
    "actual_mean_temp": 73,
    "actual_min_temp": 57,
    "actual_max_temp": 88,
    "actual_precipitation": 0,
    "location": "CQT"
  },
  {
    "": 593,
    "date": "2015-2-14",
    "actual_mean_temp": 71,
    "actual_min_temp": 56,
    "actual_max_temp": 86,
    "actual_precipitation": 0,
    "location": "CQT"
  },
  {
    "": 594,
    "date": "2015-2-15",
    "actual_mean_temp": 67,
    "actual_min_temp": 54,
    "actual_max_temp": 80,
    "actual_precipitation": 0,
    "location": "CQT"
  },
  {
    "": 595,
    "date": "2015-2-16",
    "actual_mean_temp": 63,
    "actual_min_temp": 56,
    "actual_max_temp": 70,
    "actual_precipitation": 0,
    "location": "CQT"
  },
  {
    "": 596,
    "date": "2015-2-17",
    "actual_mean_temp": 64,
    "actual_min_temp": 57,
    "actual_max_temp": 71,
    "actual_precipitation": 0,
    "location": "CQT"
  },
  {
    "": 597,
    "date": "2015-2-18",
    "actual_mean_temp": 65,
    "actual_min_temp": 55,
    "actual_max_temp": 75,
    "actual_precipitation": 0,
    "location": "CQT"
  },
  {
    "": 598,
    "date": "2015-2-19",
    "actual_mean_temp": 65,
    "actual_min_temp": 57,
    "actual_max_temp": 72,
    "actual_precipitation": 0,
    "location": "CQT"
  },
  {
    "": 599,
    "date": "2015-2-20",
    "actual_mean_temp": 63,
    "actual_min_temp": 56,
    "actual_max_temp": 70,
    "actual_precipitation": 0,
    "location": "CQT"
  },
  {
    "": 600,
    "date": "2015-2-21",
    "actual_mean_temp": 63,
    "actual_min_temp": 57,
    "actual_max_temp": 69,
    "actual_precipitation": 0,
    "location": "CQT"
  },
  {
    "": 601,
    "date": "2015-2-22",
    "actual_mean_temp": 59,
    "actual_min_temp": 53,
    "actual_max_temp": 64,
    "actual_precipitation": 0.7,
    "location": "CQT"
  },
  {
    "": 602,
    "date": "2015-2-23",
    "actual_mean_temp": 58,
    "actual_min_temp": 50,
    "actual_max_temp": 65,
    "actual_precipitation": 0,
    "location": "CQT"
  },
  {
    "": 603,
    "date": "2015-2-24",
    "actual_mean_temp": 60,
    "actual_min_temp": 46,
    "actual_max_temp": 74,
    "actual_precipitation": 0,
    "location": "CQT"
  },
  {
    "": 604,
    "date": "2015-2-25",
    "actual_mean_temp": 62,
    "actual_min_temp": 51,
    "actual_max_temp": 72,
    "actual_precipitation": 0,
    "location": "CQT"
  },
  {
    "": 605,
    "date": "2015-2-26",
    "actual_mean_temp": 61,
    "actual_min_temp": 51,
    "actual_max_temp": 70,
    "actual_precipitation": 0,
    "location": "CQT"
  },
  {
    "": 606,
    "date": "2015-2-27",
    "actual_mean_temp": 61,
    "actual_min_temp": 55,
    "actual_max_temp": 66,
    "actual_precipitation": 0,
    "location": "CQT"
  },
  {
    "": 607,
    "date": "2015-2-28",
    "actual_mean_temp": 59,
    "actual_min_temp": 52,
    "actual_max_temp": 65,
    "actual_precipitation": 0.11,
    "location": "CQT"
  },
  {
    "": 608,
    "date": "2015-3-1",
    "actual_mean_temp": 58,
    "actual_min_temp": 50,
    "actual_max_temp": 65,
    "actual_precipitation": 0.66,
    "location": "CQT"
  },
  {
    "": 609,
    "date": "2015-3-2",
    "actual_mean_temp": 56,
    "actual_min_temp": 49,
    "actual_max_temp": 63,
    "actual_precipitation": 0.21,
    "location": "CQT"
  },
  {
    "": 610,
    "date": "2015-3-3",
    "actual_mean_temp": 58,
    "actual_min_temp": 48,
    "actual_max_temp": 67,
    "actual_precipitation": 0,
    "location": "CQT"
  },
  {
    "": 611,
    "date": "2015-3-4",
    "actual_mean_temp": 60,
    "actual_min_temp": 48,
    "actual_max_temp": 72,
    "actual_precipitation": 0,
    "location": "CQT"
  },
  {
    "": 612,
    "date": "2015-3-5",
    "actual_mean_temp": 64,
    "actual_min_temp": 51,
    "actual_max_temp": 77,
    "actual_precipitation": 0,
    "location": "CQT"
  },
  {
    "": 613,
    "date": "2015-3-6",
    "actual_mean_temp": 66,
    "actual_min_temp": 49,
    "actual_max_temp": 83,
    "actual_precipitation": 0,
    "location": "CQT"
  },
  {
    "": 614,
    "date": "2015-3-7",
    "actual_mean_temp": 70,
    "actual_min_temp": 54,
    "actual_max_temp": 86,
    "actual_precipitation": 0,
    "location": "CQT"
  },
  {
    "": 615,
    "date": "2015-3-8",
    "actual_mean_temp": 66,
    "actual_min_temp": 53,
    "actual_max_temp": 78,
    "actual_precipitation": 0,
    "location": "CQT"
  },
  {
    "": 616,
    "date": "2015-3-9",
    "actual_mean_temp": 65,
    "actual_min_temp": 57,
    "actual_max_temp": 73,
    "actual_precipitation": 0,
    "location": "CQT"
  },
  {
    "": 617,
    "date": "2015-3-10",
    "actual_mean_temp": 68,
    "actual_min_temp": 55,
    "actual_max_temp": 80,
    "actual_precipitation": 0,
    "location": "CQT"
  },
  {
    "": 618,
    "date": "2015-3-11",
    "actual_mean_temp": 67,
    "actual_min_temp": 60,
    "actual_max_temp": 73,
    "actual_precipitation": 0,
    "location": "CQT"
  },
  {
    "": 619,
    "date": "2015-3-12",
    "actual_mean_temp": 71,
    "actual_min_temp": 56,
    "actual_max_temp": 86,
    "actual_precipitation": 0,
    "location": "CQT"
  },
  {
    "": 620,
    "date": "2015-3-13",
    "actual_mean_temp": 76,
    "actual_min_temp": 61,
    "actual_max_temp": 90,
    "actual_precipitation": 0,
    "location": "CQT"
  },
  {
    "": 621,
    "date": "2015-3-14",
    "actual_mean_temp": 78,
    "actual_min_temp": 62,
    "actual_max_temp": 93,
    "actual_precipitation": 0,
    "location": "CQT"
  },
  {
    "": 622,
    "date": "2015-3-15",
    "actual_mean_temp": 79,
    "actual_min_temp": 66,
    "actual_max_temp": 92,
    "actual_precipitation": 0,
    "location": "CQT"
  },
  {
    "": 623,
    "date": "2015-3-16",
    "actual_mean_temp": 78,
    "actual_min_temp": 66,
    "actual_max_temp": 90,
    "actual_precipitation": 0,
    "location": "CQT"
  },
  {
    "": 624,
    "date": "2015-3-17",
    "actual_mean_temp": 73,
    "actual_min_temp": 63,
    "actual_max_temp": 82,
    "actual_precipitation": 0,
    "location": "CQT"
  },
  {
    "": 625,
    "date": "2015-3-18",
    "actual_mean_temp": 69,
    "actual_min_temp": 62,
    "actual_max_temp": 75,
    "actual_precipitation": 0,
    "location": "CQT"
  },
  {
    "": 626,
    "date": "2015-3-19",
    "actual_mean_temp": 68,
    "actual_min_temp": 60,
    "actual_max_temp": 76,
    "actual_precipitation": 0,
    "location": "CQT"
  },
  {
    "": 627,
    "date": "2015-3-20",
    "actual_mean_temp": 69,
    "actual_min_temp": 59,
    "actual_max_temp": 78,
    "actual_precipitation": 0,
    "location": "CQT"
  },
  {
    "": 628,
    "date": "2015-3-21",
    "actual_mean_temp": 69,
    "actual_min_temp": 62,
    "actual_max_temp": 75,
    "actual_precipitation": 0,
    "location": "CQT"
  },
  {
    "": 629,
    "date": "2015-3-22",
    "actual_mean_temp": 66,
    "actual_min_temp": 59,
    "actual_max_temp": 72,
    "actual_precipitation": 0,
    "location": "CQT"
  },
  {
    "": 630,
    "date": "2015-3-23",
    "actual_mean_temp": 65,
    "actual_min_temp": 57,
    "actual_max_temp": 73,
    "actual_precipitation": 0,
    "location": "CQT"
  },
  {
    "": 631,
    "date": "2015-3-24",
    "actual_mean_temp": 67,
    "actual_min_temp": 58,
    "actual_max_temp": 75,
    "actual_precipitation": 0,
    "location": "CQT"
  },
  {
    "": 632,
    "date": "2015-3-25",
    "actual_mean_temp": 72,
    "actual_min_temp": 60,
    "actual_max_temp": 84,
    "actual_precipitation": 0,
    "location": "CQT"
  },
  {
    "": 633,
    "date": "2015-3-26",
    "actual_mean_temp": 77,
    "actual_min_temp": 61,
    "actual_max_temp": 92,
    "actual_precipitation": 0,
    "location": "CQT"
  },
  {
    "": 634,
    "date": "2015-3-27",
    "actual_mean_temp": 77,
    "actual_min_temp": 62,
    "actual_max_temp": 91,
    "actual_precipitation": 0,
    "location": "CQT"
  },
  {
    "": 635,
    "date": "2015-3-28",
    "actual_mean_temp": 71,
    "actual_min_temp": 61,
    "actual_max_temp": 81,
    "actual_precipitation": 0,
    "location": "CQT"
  },
  {
    "": 636,
    "date": "2015-3-29",
    "actual_mean_temp": 67,
    "actual_min_temp": 56,
    "actual_max_temp": 78,
    "actual_precipitation": 0,
    "location": "CQT"
  },
  {
    "": 637,
    "date": "2015-3-30",
    "actual_mean_temp": 68,
    "actual_min_temp": 57,
    "actual_max_temp": 78,
    "actual_precipitation": 0,
    "location": "CQT"
  },
  {
    "": 638,
    "date": "2015-3-31",
    "actual_mean_temp": 65,
    "actual_min_temp": 57,
    "actual_max_temp": 73,
    "actual_precipitation": 0,
    "location": "CQT"
  },
  {
    "": 639,
    "date": "2015-4-1",
    "actual_mean_temp": 66,
    "actual_min_temp": 58,
    "actual_max_temp": 74,
    "actual_precipitation": 0,
    "location": "CQT"
  },
  {
    "": 640,
    "date": "2015-4-2",
    "actual_mean_temp": 65,
    "actual_min_temp": 54,
    "actual_max_temp": 75,
    "actual_precipitation": 0,
    "location": "CQT"
  },
  {
    "": 641,
    "date": "2015-4-3",
    "actual_mean_temp": 72,
    "actual_min_temp": 57,
    "actual_max_temp": 86,
    "actual_precipitation": 0,
    "location": "CQT"
  },
  {
    "": 642,
    "date": "2015-4-4",
    "actual_mean_temp": 72,
    "actual_min_temp": 59,
    "actual_max_temp": 84,
    "actual_precipitation": 0,
    "location": "CQT"
  },
  {
    "": 643,
    "date": "2015-4-5",
    "actual_mean_temp": 64,
    "actual_min_temp": 57,
    "actual_max_temp": 71,
    "actual_precipitation": 0,
    "location": "CQT"
  },
  {
    "": 644,
    "date": "2015-4-6",
    "actual_mean_temp": 60,
    "actual_min_temp": 53,
    "actual_max_temp": 67,
    "actual_precipitation": 0,
    "location": "CQT"
  },
  {
    "": 645,
    "date": "2015-4-7",
    "actual_mean_temp": 59,
    "actual_min_temp": 51,
    "actual_max_temp": 67,
    "actual_precipitation": 0.13,
    "location": "CQT"
  },
  {
    "": 646,
    "date": "2015-4-8",
    "actual_mean_temp": 60,
    "actual_min_temp": 49,
    "actual_max_temp": 70,
    "actual_precipitation": 0,
    "location": "CQT"
  },
  {
    "": 647,
    "date": "2015-4-9",
    "actual_mean_temp": 65,
    "actual_min_temp": 53,
    "actual_max_temp": 76,
    "actual_precipitation": 0,
    "location": "CQT"
  },
  {
    "": 648,
    "date": "2015-4-10",
    "actual_mean_temp": 63,
    "actual_min_temp": 54,
    "actual_max_temp": 71,
    "actual_precipitation": 0,
    "location": "CQT"
  },
  {
    "": 649,
    "date": "2015-4-11",
    "actual_mean_temp": 63,
    "actual_min_temp": 53,
    "actual_max_temp": 72,
    "actual_precipitation": 0,
    "location": "CQT"
  },
  {
    "": 650,
    "date": "2015-4-12",
    "actual_mean_temp": 67,
    "actual_min_temp": 57,
    "actual_max_temp": 77,
    "actual_precipitation": 0,
    "location": "CQT"
  },
  {
    "": 651,
    "date": "2015-4-13",
    "actual_mean_temp": 67,
    "actual_min_temp": 58,
    "actual_max_temp": 75,
    "actual_precipitation": 0,
    "location": "CQT"
  },
  {
    "": 652,
    "date": "2015-4-14",
    "actual_mean_temp": 66,
    "actual_min_temp": 58,
    "actual_max_temp": 73,
    "actual_precipitation": 0,
    "location": "CQT"
  },
  {
    "": 653,
    "date": "2015-4-15",
    "actual_mean_temp": 69,
    "actual_min_temp": 57,
    "actual_max_temp": 80,
    "actual_precipitation": 0,
    "location": "CQT"
  },
  {
    "": 654,
    "date": "2015-4-16",
    "actual_mean_temp": 68,
    "actual_min_temp": 54,
    "actual_max_temp": 81,
    "actual_precipitation": 0,
    "location": "CQT"
  },
  {
    "": 655,
    "date": "2015-4-17",
    "actual_mean_temp": 69,
    "actual_min_temp": 56,
    "actual_max_temp": 81,
    "actual_precipitation": 0,
    "location": "CQT"
  },
  {
    "": 656,
    "date": "2015-4-18",
    "actual_mean_temp": 69,
    "actual_min_temp": 56,
    "actual_max_temp": 81,
    "actual_precipitation": 0,
    "location": "CQT"
  },
  {
    "": 657,
    "date": "2015-4-19",
    "actual_mean_temp": 65,
    "actual_min_temp": 55,
    "actual_max_temp": 75,
    "actual_precipitation": 0,
    "location": "CQT"
  },
  {
    "": 658,
    "date": "2015-4-20",
    "actual_mean_temp": 63,
    "actual_min_temp": 55,
    "actual_max_temp": 70,
    "actual_precipitation": 0,
    "location": "CQT"
  },
  {
    "": 659,
    "date": "2015-4-21",
    "actual_mean_temp": 63,
    "actual_min_temp": 58,
    "actual_max_temp": 67,
    "actual_precipitation": 0,
    "location": "CQT"
  },
  {
    "": 660,
    "date": "2015-4-22",
    "actual_mean_temp": 63,
    "actual_min_temp": 57,
    "actual_max_temp": 69,
    "actual_precipitation": 0,
    "location": "CQT"
  },
  {
    "": 661,
    "date": "2015-4-23",
    "actual_mean_temp": 62,
    "actual_min_temp": 55,
    "actual_max_temp": 69,
    "actual_precipitation": 0,
    "location": "CQT"
  },
  {
    "": 662,
    "date": "2015-4-24",
    "actual_mean_temp": 62,
    "actual_min_temp": 57,
    "actual_max_temp": 67,
    "actual_precipitation": 0,
    "location": "CQT"
  },
  {
    "": 663,
    "date": "2015-4-25",
    "actual_mean_temp": 61,
    "actual_min_temp": 56,
    "actual_max_temp": 66,
    "actual_precipitation": 0,
    "location": "CQT"
  },
  {
    "": 664,
    "date": "2015-4-26",
    "actual_mean_temp": 66,
    "actual_min_temp": 54,
    "actual_max_temp": 77,
    "actual_precipitation": 0,
    "location": "CQT"
  },
  {
    "": 665,
    "date": "2015-4-27",
    "actual_mean_temp": 70,
    "actual_min_temp": 57,
    "actual_max_temp": 82,
    "actual_precipitation": 0,
    "location": "CQT"
  },
  {
    "": 666,
    "date": "2015-4-28",
    "actual_mean_temp": 77,
    "actual_min_temp": 61,
    "actual_max_temp": 92,
    "actual_precipitation": 0,
    "location": "CQT"
  },
  {
    "": 667,
    "date": "2015-4-29",
    "actual_mean_temp": 75,
    "actual_min_temp": 60,
    "actual_max_temp": 89,
    "actual_precipitation": 0,
    "location": "CQT"
  },
  {
    "": 668,
    "date": "2015-4-30",
    "actual_mean_temp": 73,
    "actual_min_temp": 60,
    "actual_max_temp": 86,
    "actual_precipitation": 0,
    "location": "CQT"
  },
  {
    "": 669,
    "date": "2015-5-1",
    "actual_mean_temp": 71,
    "actual_min_temp": 57,
    "actual_max_temp": 84,
    "actual_precipitation": 0,
    "location": "CQT"
  },
  {
    "": 670,
    "date": "2015-5-2",
    "actual_mean_temp": 70,
    "actual_min_temp": 59,
    "actual_max_temp": 80,
    "actual_precipitation": 0,
    "location": "CQT"
  },
  {
    "": 671,
    "date": "2015-5-3",
    "actual_mean_temp": 66,
    "actual_min_temp": 58,
    "actual_max_temp": 74,
    "actual_precipitation": 0,
    "location": "CQT"
  },
  {
    "": 672,
    "date": "2015-5-4",
    "actual_mean_temp": 63,
    "actual_min_temp": 56,
    "actual_max_temp": 69,
    "actual_precipitation": 0,
    "location": "CQT"
  },
  {
    "": 673,
    "date": "2015-5-5",
    "actual_mean_temp": 63,
    "actual_min_temp": 58,
    "actual_max_temp": 67,
    "actual_precipitation": 0,
    "location": "CQT"
  },
  {
    "": 674,
    "date": "2015-5-6",
    "actual_mean_temp": 63,
    "actual_min_temp": 58,
    "actual_max_temp": 67,
    "actual_precipitation": 0,
    "location": "CQT"
  },
  {
    "": 675,
    "date": "2015-5-7",
    "actual_mean_temp": 60,
    "actual_min_temp": 54,
    "actual_max_temp": 65,
    "actual_precipitation": 0.03,
    "location": "CQT"
  },
  {
    "": 676,
    "date": "2015-5-8",
    "actual_mean_temp": 57,
    "actual_min_temp": 50,
    "actual_max_temp": 63,
    "actual_precipitation": 0.18,
    "location": "CQT"
  },
  {
    "": 677,
    "date": "2015-5-9",
    "actual_mean_temp": 62,
    "actual_min_temp": 55,
    "actual_max_temp": 69,
    "actual_precipitation": 0,
    "location": "CQT"
  },
  {
    "": 678,
    "date": "2015-5-10",
    "actual_mean_temp": 63,
    "actual_min_temp": 54,
    "actual_max_temp": 72,
    "actual_precipitation": 0,
    "location": "CQT"
  },
  {
    "": 679,
    "date": "2015-5-11",
    "actual_mean_temp": 67,
    "actual_min_temp": 57,
    "actual_max_temp": 76,
    "actual_precipitation": 0,
    "location": "CQT"
  },
  {
    "": 680,
    "date": "2015-5-12",
    "actual_mean_temp": 65,
    "actual_min_temp": 57,
    "actual_max_temp": 72,
    "actual_precipitation": 0,
    "location": "CQT"
  },
  {
    "": 681,
    "date": "2015-5-13",
    "actual_mean_temp": 64,
    "actual_min_temp": 58,
    "actual_max_temp": 69,
    "actual_precipitation": 0,
    "location": "CQT"
  },
  {
    "": 682,
    "date": "2015-5-14",
    "actual_mean_temp": 61,
    "actual_min_temp": 53,
    "actual_max_temp": 68,
    "actual_precipitation": 0.69,
    "location": "CQT"
  },
  {
    "": 683,
    "date": "2015-5-15",
    "actual_mean_temp": 61,
    "actual_min_temp": 55,
    "actual_max_temp": 66,
    "actual_precipitation": 0.03,
    "location": "CQT"
  },
  {
    "": 684,
    "date": "2015-5-16",
    "actual_mean_temp": 64,
    "actual_min_temp": 56,
    "actual_max_temp": 71,
    "actual_precipitation": 0,
    "location": "CQT"
  },
  {
    "": 685,
    "date": "2015-5-17",
    "actual_mean_temp": 65,
    "actual_min_temp": 58,
    "actual_max_temp": 72,
    "actual_precipitation": 0,
    "location": "CQT"
  },
  {
    "": 686,
    "date": "2015-5-18",
    "actual_mean_temp": 66,
    "actual_min_temp": 60,
    "actual_max_temp": 71,
    "actual_precipitation": 0,
    "location": "CQT"
  },
  {
    "": 687,
    "date": "2015-5-19",
    "actual_mean_temp": 65,
    "actual_min_temp": 56,
    "actual_max_temp": 73,
    "actual_precipitation": 0,
    "location": "CQT"
  },
  {
    "": 688,
    "date": "2015-5-20",
    "actual_mean_temp": 65,
    "actual_min_temp": 57,
    "actual_max_temp": 72,
    "actual_precipitation": 0,
    "location": "CQT"
  },
  {
    "": 689,
    "date": "2015-5-21",
    "actual_mean_temp": 64,
    "actual_min_temp": 57,
    "actual_max_temp": 71,
    "actual_precipitation": 0,
    "location": "CQT"
  },
  {
    "": 690,
    "date": "2015-5-22",
    "actual_mean_temp": 63,
    "actual_min_temp": 57,
    "actual_max_temp": 69,
    "actual_precipitation": 0,
    "location": "CQT"
  },
  {
    "": 691,
    "date": "2015-5-23",
    "actual_mean_temp": 64,
    "actual_min_temp": 57,
    "actual_max_temp": 71,
    "actual_precipitation": 0,
    "location": "CQT"
  },
  {
    "": 692,
    "date": "2015-5-24",
    "actual_mean_temp": 64,
    "actual_min_temp": 58,
    "actual_max_temp": 70,
    "actual_precipitation": 0,
    "location": "CQT"
  },
  {
    "": 693,
    "date": "2015-5-25",
    "actual_mean_temp": 64,
    "actual_min_temp": 57,
    "actual_max_temp": 71,
    "actual_precipitation": 0,
    "location": "CQT"
  },
  {
    "": 694,
    "date": "2015-5-26",
    "actual_mean_temp": 64,
    "actual_min_temp": 59,
    "actual_max_temp": 69,
    "actual_precipitation": 0,
    "location": "CQT"
  },
  {
    "": 695,
    "date": "2015-5-27",
    "actual_mean_temp": 65,
    "actual_min_temp": 58,
    "actual_max_temp": 72,
    "actual_precipitation": 0,
    "location": "CQT"
  },
  {
    "": 696,
    "date": "2015-5-28",
    "actual_mean_temp": 66,
    "actual_min_temp": 57,
    "actual_max_temp": 75,
    "actual_precipitation": 0,
    "location": "CQT"
  },
  {
    "": 697,
    "date": "2015-5-29",
    "actual_mean_temp": 68,
    "actual_min_temp": 58,
    "actual_max_temp": 77,
    "actual_precipitation": 0,
    "location": "CQT"
  },
  {
    "": 698,
    "date": "2015-5-30",
    "actual_mean_temp": 68,
    "actual_min_temp": 59,
    "actual_max_temp": 77,
    "actual_precipitation": 0,
    "location": "CQT"
  },
  {
    "": 699,
    "date": "2015-5-31",
    "actual_mean_temp": 66,
    "actual_min_temp": 59,
    "actual_max_temp": 73,
    "actual_precipitation": 0,
    "location": "CQT"
  },
  {
    "": 700,
    "date": "2015-6-1",
    "actual_mean_temp": 67,
    "actual_min_temp": 59,
    "actual_max_temp": 75,
    "actual_precipitation": 0,
    "location": "CQT"
  },
  {
    "": 701,
    "date": "2015-6-2",
    "actual_mean_temp": 68,
    "actual_min_temp": 60,
    "actual_max_temp": 76,
    "actual_precipitation": 0,
    "location": "CQT"
  },
  {
    "": 702,
    "date": "2015-6-3",
    "actual_mean_temp": 68,
    "actual_min_temp": 61,
    "actual_max_temp": 74,
    "actual_precipitation": 0,
    "location": "CQT"
  },
  {
    "": 703,
    "date": "2015-6-4",
    "actual_mean_temp": 66,
    "actual_min_temp": 61,
    "actual_max_temp": 70,
    "actual_precipitation": 0,
    "location": "CQT"
  },
  {
    "": 704,
    "date": "2015-6-5",
    "actual_mean_temp": 67,
    "actual_min_temp": 60,
    "actual_max_temp": 73,
    "actual_precipitation": 0,
    "location": "CQT"
  },
  {
    "": 705,
    "date": "2015-6-6",
    "actual_mean_temp": 65,
    "actual_min_temp": 58,
    "actual_max_temp": 72,
    "actual_precipitation": 0,
    "location": "CQT"
  },
  {
    "": 706,
    "date": "2015-6-7",
    "actual_mean_temp": 69,
    "actual_min_temp": 60,
    "actual_max_temp": 77,
    "actual_precipitation": 0,
    "location": "CQT"
  },
  {
    "": 707,
    "date": "2015-6-8",
    "actual_mean_temp": 73,
    "actual_min_temp": 60,
    "actual_max_temp": 85,
    "actual_precipitation": 0,
    "location": "CQT"
  },
  {
    "": 708,
    "date": "2015-6-9",
    "actual_mean_temp": 74,
    "actual_min_temp": 62,
    "actual_max_temp": 86,
    "actual_precipitation": 0.01,
    "location": "CQT"
  },
  {
    "": 709,
    "date": "2015-6-10",
    "actual_mean_temp": 68,
    "actual_min_temp": 62,
    "actual_max_temp": 73,
    "actual_precipitation": 0,
    "location": "CQT"
  },
  {
    "": 710,
    "date": "2015-6-11",
    "actual_mean_temp": 69,
    "actual_min_temp": 62,
    "actual_max_temp": 75,
    "actual_precipitation": 0,
    "location": "CQT"
  },
  {
    "": 711,
    "date": "2015-6-12",
    "actual_mean_temp": 68,
    "actual_min_temp": 63,
    "actual_max_temp": 72,
    "actual_precipitation": 0,
    "location": "CQT"
  },
  {
    "": 712,
    "date": "2015-6-13",
    "actual_mean_temp": 68,
    "actual_min_temp": 63,
    "actual_max_temp": 72,
    "actual_precipitation": 0,
    "location": "CQT"
  },
  {
    "": 713,
    "date": "2015-6-14",
    "actual_mean_temp": 70,
    "actual_min_temp": 63,
    "actual_max_temp": 77,
    "actual_precipitation": 0,
    "location": "CQT"
  },
  {
    "": 714,
    "date": "2015-6-15",
    "actual_mean_temp": 70,
    "actual_min_temp": 62,
    "actual_max_temp": 78,
    "actual_precipitation": 0,
    "location": "CQT"
  },
  {
    "": 715,
    "date": "2015-6-16",
    "actual_mean_temp": 70,
    "actual_min_temp": 61,
    "actual_max_temp": 79,
    "actual_precipitation": 0,
    "location": "CQT"
  },
  {
    "": 716,
    "date": "2015-6-17",
    "actual_mean_temp": 70,
    "actual_min_temp": 62,
    "actual_max_temp": 78,
    "actual_precipitation": 0,
    "location": "CQT"
  },
  {
    "": 717,
    "date": "2015-6-18",
    "actual_mean_temp": 72,
    "actual_min_temp": 62,
    "actual_max_temp": 81,
    "actual_precipitation": 0,
    "location": "CQT"
  },
  {
    "": 718,
    "date": "2015-6-19",
    "actual_mean_temp": 70,
    "actual_min_temp": 58,
    "actual_max_temp": 82,
    "actual_precipitation": 0,
    "location": "CQT"
  },
  {
    "": 719,
    "date": "2015-6-20",
    "actual_mean_temp": 74,
    "actual_min_temp": 63,
    "actual_max_temp": 85,
    "actual_precipitation": 0,
    "location": "CQT"
  },
  {
    "": 720,
    "date": "2015-6-21",
    "actual_mean_temp": 73,
    "actual_min_temp": 64,
    "actual_max_temp": 82,
    "actual_precipitation": 0,
    "location": "CQT"
  },
  {
    "": 721,
    "date": "2015-6-22",
    "actual_mean_temp": 73,
    "actual_min_temp": 62,
    "actual_max_temp": 83,
    "actual_precipitation": 0,
    "location": "CQT"
  },
  {
    "": 722,
    "date": "2015-6-23",
    "actual_mean_temp": 74,
    "actual_min_temp": 63,
    "actual_max_temp": 84,
    "actual_precipitation": 0,
    "location": "CQT"
  },
  {
    "": 723,
    "date": "2015-6-24",
    "actual_mean_temp": 73,
    "actual_min_temp": 63,
    "actual_max_temp": 83,
    "actual_precipitation": 0,
    "location": "CQT"
  },
  {
    "": 724,
    "date": "2015-6-25",
    "actual_mean_temp": 72,
    "actual_min_temp": 62,
    "actual_max_temp": 81,
    "actual_precipitation": 0,
    "location": "CQT"
  },
  {
    "": 725,
    "date": "2015-6-26",
    "actual_mean_temp": 69,
    "actual_min_temp": 60,
    "actual_max_temp": 78,
    "actual_precipitation": 0,
    "location": "CQT"
  },
  {
    "": 726,
    "date": "2015-6-27",
    "actual_mean_temp": 70,
    "actual_min_temp": 62,
    "actual_max_temp": 77,
    "actual_precipitation": 0,
    "location": "CQT"
  },
  {
    "": 727,
    "date": "2015-6-28",
    "actual_mean_temp": 77,
    "actual_min_temp": 67,
    "actual_max_temp": 86,
    "actual_precipitation": 0,
    "location": "CQT"
  },
  {
    "": 728,
    "date": "2015-6-29",
    "actual_mean_temp": 80,
    "actual_min_temp": 68,
    "actual_max_temp": 91,
    "actual_precipitation": 0,
    "location": "CQT"
  },
  {
    "": 729,
    "date": "2015-6-30",
    "actual_mean_temp": 78,
    "actual_min_temp": 67,
    "actual_max_temp": 89,
    "actual_precipitation": 0,
    "location": "CQT"
  },
  {
    "": 730,
    "date": "2014-7-1",
    "actual_mean_temp": 76,
    "actual_min_temp": 66,
    "actual_max_temp": 86,
    "actual_precipitation": 0.13,
    "location": "IND"
  },
  {
    "": 731,
    "date": "2014-7-2",
    "actual_mean_temp": 71,
    "actual_min_temp": 63,
    "actual_max_temp": 79,
    "actual_precipitation": 0,
    "location": "IND"
  },
  {
    "": 732,
    "date": "2014-7-3",
    "actual_mean_temp": 67,
    "actual_min_temp": 60,
    "actual_max_temp": 73,
    "actual_precipitation": 0,
    "location": "IND"
  },
  {
    "": 733,
    "date": "2014-7-4",
    "actual_mean_temp": 67,
    "actual_min_temp": 54,
    "actual_max_temp": 79,
    "actual_precipitation": 0,
    "location": "IND"
  },
  {
    "": 734,
    "date": "2014-7-5",
    "actual_mean_temp": 69,
    "actual_min_temp": 59,
    "actual_max_temp": 79,
    "actual_precipitation": 0,
    "location": "IND"
  },
  {
    "": 735,
    "date": "2014-7-6",
    "actual_mean_temp": 74,
    "actual_min_temp": 64,
    "actual_max_temp": 83,
    "actual_precipitation": 0.03,
    "location": "IND"
  },
  {
    "": 736,
    "date": "2014-7-7",
    "actual_mean_temp": 74,
    "actual_min_temp": 68,
    "actual_max_temp": 79,
    "actual_precipitation": 0,
    "location": "IND"
  },
  {
    "": 737,
    "date": "2014-7-8",
    "actual_mean_temp": 74,
    "actual_min_temp": 67,
    "actual_max_temp": 81,
    "actual_precipitation": 0.32,
    "location": "IND"
  },
  {
    "": 738,
    "date": "2014-7-9",
    "actual_mean_temp": 72,
    "actual_min_temp": 62,
    "actual_max_temp": 81,
    "actual_precipitation": 0,
    "location": "IND"
  },
  {
    "": 739,
    "date": "2014-7-10",
    "actual_mean_temp": 71,
    "actual_min_temp": 61,
    "actual_max_temp": 80,
    "actual_precipitation": 0,
    "location": "IND"
  },
  {
    "": 740,
    "date": "2014-7-11",
    "actual_mean_temp": 71,
    "actual_min_temp": 60,
    "actual_max_temp": 81,
    "actual_precipitation": 0,
    "location": "IND"
  },
  {
    "": 741,
    "date": "2014-7-12",
    "actual_mean_temp": 74,
    "actual_min_temp": 67,
    "actual_max_temp": 80,
    "actual_precipitation": 0.07,
    "location": "IND"
  },
  {
    "": 742,
    "date": "2014-7-13",
    "actual_mean_temp": 78,
    "actual_min_temp": 72,
    "actual_max_temp": 84,
    "actual_precipitation": 0,
    "location": "IND"
  },
  {
    "": 743,
    "date": "2014-7-14",
    "actual_mean_temp": 75,
    "actual_min_temp": 65,
    "actual_max_temp": 85,
    "actual_precipitation": 0.39,
    "location": "IND"
  },
  {
    "": 744,
    "date": "2014-7-15",
    "actual_mean_temp": 64,
    "actual_min_temp": 56,
    "actual_max_temp": 71,
    "actual_precipitation": 0,
    "location": "IND"
  },
  {
    "": 745,
    "date": "2014-7-16",
    "actual_mean_temp": 63,
    "actual_min_temp": 53,
    "actual_max_temp": 72,
    "actual_precipitation": 0,
    "location": "IND"
  },
  {
    "": 746,
    "date": "2014-7-17",
    "actual_mean_temp": 65,
    "actual_min_temp": 53,
    "actual_max_temp": 77,
    "actual_precipitation": 0,
    "location": "IND"
  },
  {
    "": 747,
    "date": "2014-7-18",
    "actual_mean_temp": 68,
    "actual_min_temp": 57,
    "actual_max_temp": 78,
    "actual_precipitation": 0,
    "location": "IND"
  },
  {
    "": 748,
    "date": "2014-7-19",
    "actual_mean_temp": 68,
    "actual_min_temp": 58,
    "actual_max_temp": 77,
    "actual_precipitation": 0,
    "location": "IND"
  },
  {
    "": 749,
    "date": "2014-7-20",
    "actual_mean_temp": 71,
    "actual_min_temp": 60,
    "actual_max_temp": 81,
    "actual_precipitation": 0,
    "location": "IND"
  },
  {
    "": 750,
    "date": "2014-7-21",
    "actual_mean_temp": 74,
    "actual_min_temp": 62,
    "actual_max_temp": 85,
    "actual_precipitation": 0,
    "location": "IND"
  },
  {
    "": 751,
    "date": "2014-7-22",
    "actual_mean_temp": 78,
    "actual_min_temp": 67,
    "actual_max_temp": 88,
    "actual_precipitation": 0,
    "location": "IND"
  },
  {
    "": 752,
    "date": "2014-7-23",
    "actual_mean_temp": 69,
    "actual_min_temp": 62,
    "actual_max_temp": 76,
    "actual_precipitation": 1.61,
    "location": "IND"
  },
  {
    "": 753,
    "date": "2014-7-24",
    "actual_mean_temp": 67,
    "actual_min_temp": 58,
    "actual_max_temp": 76,
    "actual_precipitation": 0,
    "location": "IND"
  },
  {
    "": 754,
    "date": "2014-7-25",
    "actual_mean_temp": 65,
    "actual_min_temp": 56,
    "actual_max_temp": 74,
    "actual_precipitation": 0,
    "location": "IND"
  },
  {
    "": 755,
    "date": "2014-7-26",
    "actual_mean_temp": 75,
    "actual_min_temp": 67,
    "actual_max_temp": 82,
    "actual_precipitation": 0.1,
    "location": "IND"
  },
  {
    "": 756,
    "date": "2014-7-27",
    "actual_mean_temp": 76,
    "actual_min_temp": 66,
    "actual_max_temp": 85,
    "actual_precipitation": 0.22,
    "location": "IND"
  },
  {
    "": 757,
    "date": "2014-7-28",
    "actual_mean_temp": 65,
    "actual_min_temp": 57,
    "actual_max_temp": 73,
    "actual_precipitation": 0,
    "location": "IND"
  },
  {
    "": 758,
    "date": "2014-7-29",
    "actual_mean_temp": 64,
    "actual_min_temp": 52,
    "actual_max_temp": 75,
    "actual_precipitation": 0.21,
    "location": "IND"
  },
  {
    "": 759,
    "date": "2014-7-30",
    "actual_mean_temp": 68,
    "actual_min_temp": 57,
    "actual_max_temp": 78,
    "actual_precipitation": 0.02,
    "location": "IND"
  },
  {
    "": 760,
    "date": "2014-7-31",
    "actual_mean_temp": 70,
    "actual_min_temp": 59,
    "actual_max_temp": 80,
    "actual_precipitation": 0,
    "location": "IND"
  },
  {
    "": 761,
    "date": "2014-8-1",
    "actual_mean_temp": 72,
    "actual_min_temp": 61,
    "actual_max_temp": 82,
    "actual_precipitation": 0.01,
    "location": "IND"
  },
  {
    "": 762,
    "date": "2014-8-2",
    "actual_mean_temp": 73,
    "actual_min_temp": 63,
    "actual_max_temp": 82,
    "actual_precipitation": 0,
    "location": "IND"
  },
  {
    "": 763,
    "date": "2014-8-3",
    "actual_mean_temp": 73,
    "actual_min_temp": 61,
    "actual_max_temp": 84,
    "actual_precipitation": 0,
    "location": "IND"
  },
  {
    "": 764,
    "date": "2014-8-4",
    "actual_mean_temp": 74,
    "actual_min_temp": 62,
    "actual_max_temp": 85,
    "actual_precipitation": 0,
    "location": "IND"
  },
  {
    "": 765,
    "date": "2014-8-5",
    "actual_mean_temp": 73,
    "actual_min_temp": 65,
    "actual_max_temp": 81,
    "actual_precipitation": 0,
    "location": "IND"
  },
  {
    "": 766,
    "date": "2014-8-6",
    "actual_mean_temp": 71,
    "actual_min_temp": 63,
    "actual_max_temp": 79,
    "actual_precipitation": 0,
    "location": "IND"
  },
  {
    "": 767,
    "date": "2014-8-7",
    "actual_mean_temp": 71,
    "actual_min_temp": 64,
    "actual_max_temp": 78,
    "actual_precipitation": 0,
    "location": "IND"
  },
  {
    "": 768,
    "date": "2014-8-8",
    "actual_mean_temp": 70,
    "actual_min_temp": 65,
    "actual_max_temp": 74,
    "actual_precipitation": 0.03,
    "location": "IND"
  },
  {
    "": 769,
    "date": "2014-8-9",
    "actual_mean_temp": 76,
    "actual_min_temp": 68,
    "actual_max_temp": 83,
    "actual_precipitation": 0,
    "location": "IND"
  },
  {
    "": 770,
    "date": "2014-8-10",
    "actual_mean_temp": 77,
    "actual_min_temp": 70,
    "actual_max_temp": 84,
    "actual_precipitation": 0.13,
    "location": "IND"
  },
  {
    "": 771,
    "date": "2014-8-11",
    "actual_mean_temp": 75,
    "actual_min_temp": 68,
    "actual_max_temp": 82,
    "actual_precipitation": 0.1,
    "location": "IND"
  },
  {
    "": 772,
    "date": "2014-8-12",
    "actual_mean_temp": 65,
    "actual_min_temp": 58,
    "actual_max_temp": 71,
    "actual_precipitation": 0,
    "location": "IND"
  },
  {
    "": 773,
    "date": "2014-8-13",
    "actual_mean_temp": 67,
    "actual_min_temp": 55,
    "actual_max_temp": 79,
    "actual_precipitation": 0,
    "location": "IND"
  },
  {
    "": 774,
    "date": "2014-8-14",
    "actual_mean_temp": 70,
    "actual_min_temp": 59,
    "actual_max_temp": 81,
    "actual_precipitation": 0,
    "location": "IND"
  },
  {
    "": 775,
    "date": "2014-8-15",
    "actual_mean_temp": 63,
    "actual_min_temp": 49,
    "actual_max_temp": 77,
    "actual_precipitation": 0,
    "location": "IND"
  },
  {
    "": 776,
    "date": "2014-8-16",
    "actual_mean_temp": 67,
    "actual_min_temp": 59,
    "actual_max_temp": 75,
    "actual_precipitation": 0.09,
    "location": "IND"
  },
  {
    "": 777,
    "date": "2014-8-17",
    "actual_mean_temp": 73,
    "actual_min_temp": 65,
    "actual_max_temp": 81,
    "actual_precipitation": 0.03,
    "location": "IND"
  },
  {
    "": 778,
    "date": "2014-8-18",
    "actual_mean_temp": 76,
    "actual_min_temp": 65,
    "actual_max_temp": 86,
    "actual_precipitation": 0,
    "location": "IND"
  },
  {
    "": 779,
    "date": "2014-8-19",
    "actual_mean_temp": 76,
    "actual_min_temp": 65,
    "actual_max_temp": 86,
    "actual_precipitation": 0.5,
    "location": "IND"
  },
  {
    "": 780,
    "date": "2014-8-20",
    "actual_mean_temp": 74,
    "actual_min_temp": 64,
    "actual_max_temp": 83,
    "actual_precipitation": 0,
    "location": "IND"
  },
  {
    "": 781,
    "date": "2014-8-21",
    "actual_mean_temp": 78,
    "actual_min_temp": 70,
    "actual_max_temp": 86,
    "actual_precipitation": 0.16,
    "location": "IND"
  },
  {
    "": 782,
    "date": "2014-8-22",
    "actual_mean_temp": 80,
    "actual_min_temp": 73,
    "actual_max_temp": 86,
    "actual_precipitation": 0.02,
    "location": "IND"
  },
  {
    "": 783,
    "date": "2014-8-23",
    "actual_mean_temp": 79,
    "actual_min_temp": 70,
    "actual_max_temp": 88,
    "actual_precipitation": 0.81,
    "location": "IND"
  },
  {
    "": 784,
    "date": "2014-8-24",
    "actual_mean_temp": 78,
    "actual_min_temp": 70,
    "actual_max_temp": 86,
    "actual_precipitation": 0,
    "location": "IND"
  },
  {
    "": 785,
    "date": "2014-8-25",
    "actual_mean_temp": 81,
    "actual_min_temp": 71,
    "actual_max_temp": 90,
    "actual_precipitation": 0.78,
    "location": "IND"
  },
  {
    "": 786,
    "date": "2014-8-26",
    "actual_mean_temp": 81,
    "actual_min_temp": 69,
    "actual_max_temp": 93,
    "actual_precipitation": 0.26,
    "location": "IND"
  },
  {
    "": 787,
    "date": "2014-8-27",
    "actual_mean_temp": 79,
    "actual_min_temp": 70,
    "actual_max_temp": 88,
    "actual_precipitation": 0,
    "location": "IND"
  },
  {
    "": 788,
    "date": "2014-8-28",
    "actual_mean_temp": 75,
    "actual_min_temp": 66,
    "actual_max_temp": 84,
    "actual_precipitation": 0,
    "location": "IND"
  },
  {
    "": 789,
    "date": "2014-8-29",
    "actual_mean_temp": 78,
    "actual_min_temp": 68,
    "actual_max_temp": 87,
    "actual_precipitation": 0,
    "location": "IND"
  },
  {
    "": 790,
    "date": "2014-8-30",
    "actual_mean_temp": 75,
    "actual_min_temp": 71,
    "actual_max_temp": 78,
    "actual_precipitation": 0.02,
    "location": "IND"
  },
  {
    "": 791,
    "date": "2014-8-31",
    "actual_mean_temp": 76,
    "actual_min_temp": 69,
    "actual_max_temp": 83,
    "actual_precipitation": 0.01,
    "location": "IND"
  },
  {
    "": 792,
    "date": "2014-9-1",
    "actual_mean_temp": 77,
    "actual_min_temp": 71,
    "actual_max_temp": 82,
    "actual_precipitation": 0,
    "location": "IND"
  },
  {
    "": 793,
    "date": "2014-9-2",
    "actual_mean_temp": 72,
    "actual_min_temp": 65,
    "actual_max_temp": 79,
    "actual_precipitation": 1,
    "location": "IND"
  },
  {
    "": 794,
    "date": "2014-9-3",
    "actual_mean_temp": 74,
    "actual_min_temp": 64,
    "actual_max_temp": 83,
    "actual_precipitation": 0,
    "location": "IND"
  },
  {
    "": 795,
    "date": "2014-9-4",
    "actual_mean_temp": 77,
    "actual_min_temp": 66,
    "actual_max_temp": 87,
    "actual_precipitation": 0,
    "location": "IND"
  },
  {
    "": 796,
    "date": "2014-9-5",
    "actual_mean_temp": 80,
    "actual_min_temp": 70,
    "actual_max_temp": 90,
    "actual_precipitation": 0.02,
    "location": "IND"
  },
  {
    "": 797,
    "date": "2014-9-6",
    "actual_mean_temp": 67,
    "actual_min_temp": 60,
    "actual_max_temp": 73,
    "actual_precipitation": 0,
    "location": "IND"
  },
  {
    "": 798,
    "date": "2014-9-7",
    "actual_mean_temp": 65,
    "actual_min_temp": 54,
    "actual_max_temp": 76,
    "actual_precipitation": 0,
    "location": "IND"
  },
  {
    "": 799,
    "date": "2014-9-8",
    "actual_mean_temp": 68,
    "actual_min_temp": 56,
    "actual_max_temp": 79,
    "actual_precipitation": 0,
    "location": "IND"
  },
  {
    "": 800,
    "date": "2014-9-9",
    "actual_mean_temp": 69,
    "actual_min_temp": 57,
    "actual_max_temp": 81,
    "actual_precipitation": 0,
    "location": "IND"
  },
  {
    "": 801,
    "date": "2014-9-10",
    "actual_mean_temp": 75,
    "actual_min_temp": 67,
    "actual_max_temp": 82,
    "actual_precipitation": 0.9,
    "location": "IND"
  },
  {
    "": 802,
    "date": "2014-9-11",
    "actual_mean_temp": 64,
    "actual_min_temp": 56,
    "actual_max_temp": 71,
    "actual_precipitation": 0,
    "location": "IND"
  },
  {
    "": 803,
    "date": "2014-9-12",
    "actual_mean_temp": 59,
    "actual_min_temp": 53,
    "actual_max_temp": 64,
    "actual_precipitation": 0,
    "location": "IND"
  },
  {
    "": 804,
    "date": "2014-9-13",
    "actual_mean_temp": 55,
    "actual_min_temp": 47,
    "actual_max_temp": 63,
    "actual_precipitation": 0,
    "location": "IND"
  },
  {
    "": 805,
    "date": "2014-9-14",
    "actual_mean_temp": 57,
    "actual_min_temp": 46,
    "actual_max_temp": 68,
    "actual_precipitation": 0,
    "location": "IND"
  },
  {
    "": 806,
    "date": "2014-9-15",
    "actual_mean_temp": 57,
    "actual_min_temp": 49,
    "actual_max_temp": 65,
    "actual_precipitation": 0.54,
    "location": "IND"
  },
  {
    "": 807,
    "date": "2014-9-16",
    "actual_mean_temp": 59,
    "actual_min_temp": 50,
    "actual_max_temp": 67,
    "actual_precipitation": 0.01,
    "location": "IND"
  },
  {
    "": 808,
    "date": "2014-9-17",
    "actual_mean_temp": 56,
    "actual_min_temp": 45,
    "actual_max_temp": 67,
    "actual_precipitation": 0,
    "location": "IND"
  },
  {
    "": 809,
    "date": "2014-9-18",
    "actual_mean_temp": 61,
    "actual_min_temp": 49,
    "actual_max_temp": 72,
    "actual_precipitation": 0,
    "location": "IND"
  },
  {
    "": 810,
    "date": "2014-9-19",
    "actual_mean_temp": 63,
    "actual_min_temp": 53,
    "actual_max_temp": 73,
    "actual_precipitation": 0,
    "location": "IND"
  },
  {
    "": 811,
    "date": "2014-9-20",
    "actual_mean_temp": 67,
    "actual_min_temp": 54,
    "actual_max_temp": 80,
    "actual_precipitation": 0.02,
    "location": "IND"
  },
  {
    "": 812,
    "date": "2014-9-21",
    "actual_mean_temp": 65,
    "actual_min_temp": 56,
    "actual_max_temp": 74,
    "actual_precipitation": 0.04,
    "location": "IND"
  },
  {
    "": 813,
    "date": "2014-9-22",
    "actual_mean_temp": 57,
    "actual_min_temp": 47,
    "actual_max_temp": 66,
    "actual_precipitation": 0,
    "location": "IND"
  },
  {
    "": 814,
    "date": "2014-9-23",
    "actual_mean_temp": 60,
    "actual_min_temp": 47,
    "actual_max_temp": 72,
    "actual_precipitation": 0,
    "location": "IND"
  },
  {
    "": 815,
    "date": "2014-9-24",
    "actual_mean_temp": 62,
    "actual_min_temp": 47,
    "actual_max_temp": 76,
    "actual_precipitation": 0,
    "location": "IND"
  },
  {
    "": 816,
    "date": "2014-9-25",
    "actual_mean_temp": 66,
    "actual_min_temp": 54,
    "actual_max_temp": 78,
    "actual_precipitation": 0,
    "location": "IND"
  },
  {
    "": 817,
    "date": "2014-9-26",
    "actual_mean_temp": 69,
    "actual_min_temp": 55,
    "actual_max_temp": 82,
    "actual_precipitation": 0,
    "location": "IND"
  },
  {
    "": 818,
    "date": "2014-9-27",
    "actual_mean_temp": 69,
    "actual_min_temp": 56,
    "actual_max_temp": 81,
    "actual_precipitation": 0,
    "location": "IND"
  },
  {
    "": 819,
    "date": "2014-9-28",
    "actual_mean_temp": 71,
    "actual_min_temp": 58,
    "actual_max_temp": 83,
    "actual_precipitation": 0,
    "location": "IND"
  },
  {
    "": 820,
    "date": "2014-9-29",
    "actual_mean_temp": 68,
    "actual_min_temp": 54,
    "actual_max_temp": 82,
    "actual_precipitation": 0,
    "location": "IND"
  },
  {
    "": 821,
    "date": "2014-9-30",
    "actual_mean_temp": 62,
    "actual_min_temp": 52,
    "actual_max_temp": 71,
    "actual_precipitation": 0,
    "location": "IND"
  },
  {
    "": 822,
    "date": "2014-10-1",
    "actual_mean_temp": 63,
    "actual_min_temp": 49,
    "actual_max_temp": 76,
    "actual_precipitation": 0,
    "location": "IND"
  },
  {
    "": 823,
    "date": "2014-10-2",
    "actual_mean_temp": 71,
    "actual_min_temp": 60,
    "actual_max_temp": 81,
    "actual_precipitation": 0.14,
    "location": "IND"
  },
  {
    "": 824,
    "date": "2014-10-3",
    "actual_mean_temp": 59,
    "actual_min_temp": 44,
    "actual_max_temp": 73,
    "actual_precipitation": 0.28,
    "location": "IND"
  },
  {
    "": 825,
    "date": "2014-10-4",
    "actual_mean_temp": 45,
    "actual_min_temp": 40,
    "actual_max_temp": 49,
    "actual_precipitation": 0,
    "location": "IND"
  },
  {
    "": 826,
    "date": "2014-10-5",
    "actual_mean_temp": 50,
    "actual_min_temp": 40,
    "actual_max_temp": 59,
    "actual_precipitation": 0.13,
    "location": "IND"
  },
  {
    "": 827,
    "date": "2014-10-6",
    "actual_mean_temp": 55,
    "actual_min_temp": 42,
    "actual_max_temp": 67,
    "actual_precipitation": 0.02,
    "location": "IND"
  },
  {
    "": 828,
    "date": "2014-10-7",
    "actual_mean_temp": 54,
    "actual_min_temp": 46,
    "actual_max_temp": 62,
    "actual_precipitation": 0.33,
    "location": "IND"
  },
  {
    "": 829,
    "date": "2014-10-8",
    "actual_mean_temp": 56,
    "actual_min_temp": 43,
    "actual_max_temp": 68,
    "actual_precipitation": 0,
    "location": "IND"
  },
  {
    "": 830,
    "date": "2014-10-9",
    "actual_mean_temp": 51,
    "actual_min_temp": 45,
    "actual_max_temp": 56,
    "actual_precipitation": 0.02,
    "location": "IND"
  },
  {
    "": 831,
    "date": "2014-10-10",
    "actual_mean_temp": 52,
    "actual_min_temp": 49,
    "actual_max_temp": 54,
    "actual_precipitation": 0.01,
    "location": "IND"
  },
  {
    "": 832,
    "date": "2014-10-11",
    "actual_mean_temp": 50,
    "actual_min_temp": 42,
    "actual_max_temp": 57,
    "actual_precipitation": 0,
    "location": "IND"
  },
  {
    "": 833,
    "date": "2014-10-12",
    "actual_mean_temp": 54,
    "actual_min_temp": 45,
    "actual_max_temp": 62,
    "actual_precipitation": 0.3,
    "location": "IND"
  },
  {
    "": 834,
    "date": "2014-10-13",
    "actual_mean_temp": 67,
    "actual_min_temp": 58,
    "actual_max_temp": 76,
    "actual_precipitation": 0.57,
    "location": "IND"
  },
  {
    "": 835,
    "date": "2014-10-14",
    "actual_mean_temp": 61,
    "actual_min_temp": 55,
    "actual_max_temp": 67,
    "actual_precipitation": 0.56,
    "location": "IND"
  },
  {
    "": 836,
    "date": "2014-10-15",
    "actual_mean_temp": 55,
    "actual_min_temp": 53,
    "actual_max_temp": 56,
    "actual_precipitation": 0.18,
    "location": "IND"
  },
  {
    "": 837,
    "date": "2014-10-16",
    "actual_mean_temp": 56,
    "actual_min_temp": 51,
    "actual_max_temp": 61,
    "actual_precipitation": 0,
    "location": "IND"
  },
  {
    "": 838,
    "date": "2014-10-17",
    "actual_mean_temp": 59,
    "actual_min_temp": 50,
    "actual_max_temp": 68,
    "actual_precipitation": 0,
    "location": "IND"
  },
  {
    "": 839,
    "date": "2014-10-18",
    "actual_mean_temp": 50,
    "actual_min_temp": 46,
    "actual_max_temp": 54,
    "actual_precipitation": 0.09,
    "location": "IND"
  },
  {
    "": 840,
    "date": "2014-10-19",
    "actual_mean_temp": 50,
    "actual_min_temp": 43,
    "actual_max_temp": 56,
    "actual_precipitation": 0,
    "location": "IND"
  },
  {
    "": 841,
    "date": "2014-10-20",
    "actual_mean_temp": 57,
    "actual_min_temp": 46,
    "actual_max_temp": 68,
    "actual_precipitation": 0.01,
    "location": "IND"
  },
  {
    "": 842,
    "date": "2014-10-21",
    "actual_mean_temp": 51,
    "actual_min_temp": 44,
    "actual_max_temp": 57,
    "actual_precipitation": 0.02,
    "location": "IND"
  },
  {
    "": 843,
    "date": "2014-10-22",
    "actual_mean_temp": 48,
    "actual_min_temp": 38,
    "actual_max_temp": 57,
    "actual_precipitation": 0,
    "location": "IND"
  },
  {
    "": 844,
    "date": "2014-10-23",
    "actual_mean_temp": 49,
    "actual_min_temp": 37,
    "actual_max_temp": 60,
    "actual_precipitation": 0,
    "location": "IND"
  },
  {
    "": 845,
    "date": "2014-10-24",
    "actual_mean_temp": 53,
    "actual_min_temp": 40,
    "actual_max_temp": 66,
    "actual_precipitation": 0,
    "location": "IND"
  },
  {
    "": 846,
    "date": "2014-10-25",
    "actual_mean_temp": 63,
    "actual_min_temp": 50,
    "actual_max_temp": 76,
    "actual_precipitation": 0,
    "location": "IND"
  },
  {
    "": 847,
    "date": "2014-10-26",
    "actual_mean_temp": 55,
    "actual_min_temp": 42,
    "actual_max_temp": 68,
    "actual_precipitation": 0,
    "location": "IND"
  },
  {
    "": 848,
    "date": "2014-10-27",
    "actual_mean_temp": 66,
    "actual_min_temp": 51,
    "actual_max_temp": 80,
    "actual_precipitation": 0,
    "location": "IND"
  },
  {
    "": 849,
    "date": "2014-10-28",
    "actual_mean_temp": 58,
    "actual_min_temp": 46,
    "actual_max_temp": 70,
    "actual_precipitation": 0.31,
    "location": "IND"
  },
  {
    "": 850,
    "date": "2014-10-29",
    "actual_mean_temp": 47,
    "actual_min_temp": 39,
    "actual_max_temp": 54,
    "actual_precipitation": 0,
    "location": "IND"
  },
  {
    "": 851,
    "date": "2014-10-30",
    "actual_mean_temp": 44,
    "actual_min_temp": 34,
    "actual_max_temp": 53,
    "actual_precipitation": 0,
    "location": "IND"
  },
  {
    "": 852,
    "date": "2014-10-31",
    "actual_mean_temp": 40,
    "actual_min_temp": 33,
    "actual_max_temp": 47,
    "actual_precipitation": 0.2,
    "location": "IND"
  },
  {
    "": 853,
    "date": "2014-11-1",
    "actual_mean_temp": 36,
    "actual_min_temp": 29,
    "actual_max_temp": 43,
    "actual_precipitation": 0,
    "location": "IND"
  },
  {
    "": 854,
    "date": "2014-11-2",
    "actual_mean_temp": 37,
    "actual_min_temp": 24,
    "actual_max_temp": 50,
    "actual_precipitation": 0,
    "location": "IND"
  },
  {
    "": 855,
    "date": "2014-11-3",
    "actual_mean_temp": 54,
    "actual_min_temp": 42,
    "actual_max_temp": 66,
    "actual_precipitation": 0,
    "location": "IND"
  },
  {
    "": 856,
    "date": "2014-11-4",
    "actual_mean_temp": 51,
    "actual_min_temp": 44,
    "actual_max_temp": 57,
    "actual_precipitation": 0.3,
    "location": "IND"
  },
  {
    "": 857,
    "date": "2014-11-5",
    "actual_mean_temp": 47,
    "actual_min_temp": 40,
    "actual_max_temp": 54,
    "actual_precipitation": 0,
    "location": "IND"
  },
  {
    "": 858,
    "date": "2014-11-6",
    "actual_mean_temp": 43,
    "actual_min_temp": 39,
    "actual_max_temp": 47,
    "actual_precipitation": 0.09,
    "location": "IND"
  },
  {
    "": 859,
    "date": "2014-11-7",
    "actual_mean_temp": 40,
    "actual_min_temp": 33,
    "actual_max_temp": 46,
    "actual_precipitation": 0,
    "location": "IND"
  },
  {
    "": 860,
    "date": "2014-11-8",
    "actual_mean_temp": 42,
    "actual_min_temp": 36,
    "actual_max_temp": 48,
    "actual_precipitation": 0,
    "location": "IND"
  },
  {
    "": 861,
    "date": "2014-11-9",
    "actual_mean_temp": 40,
    "actual_min_temp": 29,
    "actual_max_temp": 51,
    "actual_precipitation": 0,
    "location": "IND"
  },
  {
    "": 862,
    "date": "2014-11-10",
    "actual_mean_temp": 50,
    "actual_min_temp": 38,
    "actual_max_temp": 62,
    "actual_precipitation": 0,
    "location": "IND"
  },
  {
    "": 863,
    "date": "2014-11-11",
    "actual_mean_temp": 48,
    "actual_min_temp": 34,
    "actual_max_temp": 61,
    "actual_precipitation": 0.06,
    "location": "IND"
  },
  {
    "": 864,
    "date": "2014-11-12",
    "actual_mean_temp": 31,
    "actual_min_temp": 27,
    "actual_max_temp": 34,
    "actual_precipitation": 0,
    "location": "IND"
  },
  {
    "": 865,
    "date": "2014-11-13",
    "actual_mean_temp": 24,
    "actual_min_temp": 20,
    "actual_max_temp": 27,
    "actual_precipitation": 0,
    "location": "IND"
  },
  {
    "": 866,
    "date": "2014-11-14",
    "actual_mean_temp": 25,
    "actual_min_temp": 17,
    "actual_max_temp": 32,
    "actual_precipitation": 0,
    "location": "IND"
  },
  {
    "": 867,
    "date": "2014-11-15",
    "actual_mean_temp": 26,
    "actual_min_temp": 17,
    "actual_max_temp": 34,
    "actual_precipitation": 0,
    "location": "IND"
  },
  {
    "": 868,
    "date": "2014-11-16",
    "actual_mean_temp": 32,
    "actual_min_temp": 28,
    "actual_max_temp": 35,
    "actual_precipitation": 0.22,
    "location": "IND"
  },
  {
    "": 869,
    "date": "2014-11-17",
    "actual_mean_temp": 21,
    "actual_min_temp": 13,
    "actual_max_temp": 29,
    "actual_precipitation": 0,
    "location": "IND"
  },
  {
    "": 870,
    "date": "2014-11-18",
    "actual_mean_temp": 14,
    "actual_min_temp": 9,
    "actual_max_temp": 19,
    "actual_precipitation": 0,
    "location": "IND"
  },
  {
    "": 871,
    "date": "2014-11-19",
    "actual_mean_temp": 26,
    "actual_min_temp": 14,
    "actual_max_temp": 37,
    "actual_precipitation": 0,
    "location": "IND"
  },
  {
    "": 872,
    "date": "2014-11-20",
    "actual_mean_temp": 24,
    "actual_min_temp": 17,
    "actual_max_temp": 30,
    "actual_precipitation": 0,
    "location": "IND"
  },
  {
    "": 873,
    "date": "2014-11-21",
    "actual_mean_temp": 23,
    "actual_min_temp": 12,
    "actual_max_temp": 33,
    "actual_precipitation": 0,
    "location": "IND"
  },
  {
    "": 874,
    "date": "2014-11-22",
    "actual_mean_temp": 43,
    "actual_min_temp": 30,
    "actual_max_temp": 56,
    "actual_precipitation": 0.02,
    "location": "IND"
  },
  {
    "": 875,
    "date": "2014-11-23",
    "actual_mean_temp": 50,
    "actual_min_temp": 44,
    "actual_max_temp": 55,
    "actual_precipitation": 1.91,
    "location": "IND"
  },
  {
    "": 876,
    "date": "2014-11-24",
    "actual_mean_temp": 46,
    "actual_min_temp": 36,
    "actual_max_temp": 55,
    "actual_precipitation": 0.18,
    "location": "IND"
  },
  {
    "": 877,
    "date": "2014-11-25",
    "actual_mean_temp": 31,
    "actual_min_temp": 26,
    "actual_max_temp": 36,
    "actual_precipitation": 0,
    "location": "IND"
  },
  {
    "": 878,
    "date": "2014-11-26",
    "actual_mean_temp": 30,
    "actual_min_temp": 26,
    "actual_max_temp": 34,
    "actual_precipitation": 0,
    "location": "IND"
  },
  {
    "": 879,
    "date": "2014-11-27",
    "actual_mean_temp": 28,
    "actual_min_temp": 24,
    "actual_max_temp": 31,
    "actual_precipitation": 0,
    "location": "IND"
  },
  {
    "": 880,
    "date": "2014-11-28",
    "actual_mean_temp": 27,
    "actual_min_temp": 19,
    "actual_max_temp": 34,
    "actual_precipitation": 0,
    "location": "IND"
  },
  {
    "": 881,
    "date": "2014-11-29",
    "actual_mean_temp": 44,
    "actual_min_temp": 30,
    "actual_max_temp": 57,
    "actual_precipitation": 0,
    "location": "IND"
  },
  {
    "": 882,
    "date": "2014-11-30",
    "actual_mean_temp": 52,
    "actual_min_temp": 39,
    "actual_max_temp": 64,
    "actual_precipitation": 0.02,
    "location": "IND"
  },
  {
    "": 883,
    "date": "2014-12-1",
    "actual_mean_temp": 33,
    "actual_min_temp": 26,
    "actual_max_temp": 39,
    "actual_precipitation": 0.02,
    "location": "IND"
  },
  {
    "": 884,
    "date": "2014-12-2",
    "actual_mean_temp": 30,
    "actual_min_temp": 26,
    "actual_max_temp": 33,
    "actual_precipitation": 0.01,
    "location": "IND"
  },
  {
    "": 885,
    "date": "2014-12-3",
    "actual_mean_temp": 36,
    "actual_min_temp": 28,
    "actual_max_temp": 43,
    "actual_precipitation": 0.01,
    "location": "IND"
  },
  {
    "": 886,
    "date": "2014-12-4",
    "actual_mean_temp": 32,
    "actual_min_temp": 29,
    "actual_max_temp": 35,
    "actual_precipitation": 0.06,
    "location": "IND"
  },
  {
    "": 887,
    "date": "2014-12-5",
    "actual_mean_temp": 37,
    "actual_min_temp": 34,
    "actual_max_temp": 40,
    "actual_precipitation": 0.98,
    "location": "IND"
  },
  {
    "": 888,
    "date": "2014-12-6",
    "actual_mean_temp": 35,
    "actual_min_temp": 30,
    "actual_max_temp": 40,
    "actual_precipitation": 0.26,
    "location": "IND"
  },
  {
    "": 889,
    "date": "2014-12-7",
    "actual_mean_temp": 33,
    "actual_min_temp": 26,
    "actual_max_temp": 39,
    "actual_precipitation": 0,
    "location": "IND"
  },
  {
    "": 890,
    "date": "2014-12-8",
    "actual_mean_temp": 36,
    "actual_min_temp": 31,
    "actual_max_temp": 41,
    "actual_precipitation": 0.06,
    "location": "IND"
  },
  {
    "": 891,
    "date": "2014-12-9",
    "actual_mean_temp": 36,
    "actual_min_temp": 32,
    "actual_max_temp": 39,
    "actual_precipitation": 0.01,
    "location": "IND"
  },
  {
    "": 892,
    "date": "2014-12-10",
    "actual_mean_temp": 33,
    "actual_min_temp": 30,
    "actual_max_temp": 35,
    "actual_precipitation": 0,
    "location": "IND"
  },
  {
    "": 893,
    "date": "2014-12-11",
    "actual_mean_temp": 31,
    "actual_min_temp": 25,
    "actual_max_temp": 37,
    "actual_precipitation": 0,
    "location": "IND"
  },
  {
    "": 894,
    "date": "2014-12-12",
    "actual_mean_temp": 29,
    "actual_min_temp": 22,
    "actual_max_temp": 35,
    "actual_precipitation": 0,
    "location": "IND"
  },
  {
    "": 895,
    "date": "2014-12-13",
    "actual_mean_temp": 40,
    "actual_min_temp": 34,
    "actual_max_temp": 46,
    "actual_precipitation": 0,
    "location": "IND"
  },
  {
    "": 896,
    "date": "2014-12-14",
    "actual_mean_temp": 45,
    "actual_min_temp": 41,
    "actual_max_temp": 48,
    "actual_precipitation": 0,
    "location": "IND"
  },
  {
    "": 897,
    "date": "2014-12-15",
    "actual_mean_temp": 43,
    "actual_min_temp": 41,
    "actual_max_temp": 44,
    "actual_precipitation": 0.01,
    "location": "IND"
  },
  {
    "": 898,
    "date": "2014-12-16",
    "actual_mean_temp": 39,
    "actual_min_temp": 31,
    "actual_max_temp": 46,
    "actual_precipitation": 0.19,
    "location": "IND"
  },
  {
    "": 899,
    "date": "2014-12-17",
    "actual_mean_temp": 27,
    "actual_min_temp": 23,
    "actual_max_temp": 31,
    "actual_precipitation": 0,
    "location": "IND"
  },
  {
    "": 900,
    "date": "2014-12-18",
    "actual_mean_temp": 25,
    "actual_min_temp": 22,
    "actual_max_temp": 27,
    "actual_precipitation": 0,
    "location": "IND"
  },
  {
    "": 901,
    "date": "2014-12-19",
    "actual_mean_temp": 24,
    "actual_min_temp": 19,
    "actual_max_temp": 29,
    "actual_precipitation": 0,
    "location": "IND"
  },
  {
    "": 902,
    "date": "2014-12-20",
    "actual_mean_temp": 29,
    "actual_min_temp": 25,
    "actual_max_temp": 32,
    "actual_precipitation": 0,
    "location": "IND"
  },
  {
    "": 903,
    "date": "2014-12-21",
    "actual_mean_temp": 28,
    "actual_min_temp": 20,
    "actual_max_temp": 36,
    "actual_precipitation": 0,
    "location": "IND"
  },
  {
    "": 904,
    "date": "2014-12-22",
    "actual_mean_temp": 37,
    "actual_min_temp": 27,
    "actual_max_temp": 46,
    "actual_precipitation": 0.04,
    "location": "IND"
  },
  {
    "": 905,
    "date": "2014-12-23",
    "actual_mean_temp": 50,
    "actual_min_temp": 45,
    "actual_max_temp": 55,
    "actual_precipitation": 0.17,
    "location": "IND"
  },
  {
    "": 906,
    "date": "2014-12-24",
    "actual_mean_temp": 40,
    "actual_min_temp": 34,
    "actual_max_temp": 45,
    "actual_precipitation": 0.52,
    "location": "IND"
  },
  {
    "": 907,
    "date": "2014-12-25",
    "actual_mean_temp": 36,
    "actual_min_temp": 31,
    "actual_max_temp": 41,
    "actual_precipitation": 0.01,
    "location": "IND"
  },
  {
    "": 908,
    "date": "2014-12-26",
    "actual_mean_temp": 41,
    "actual_min_temp": 30,
    "actual_max_temp": 52,
    "actual_precipitation": 0,
    "location": "IND"
  },
  {
    "": 909,
    "date": "2014-12-27",
    "actual_mean_temp": 40,
    "actual_min_temp": 33,
    "actual_max_temp": 46,
    "actual_precipitation": 0.2,
    "location": "IND"
  },
  {
    "": 910,
    "date": "2014-12-28",
    "actual_mean_temp": 28,
    "actual_min_temp": 22,
    "actual_max_temp": 33,
    "actual_precipitation": 0,
    "location": "IND"
  },
  {
    "": 911,
    "date": "2014-12-29",
    "actual_mean_temp": 29,
    "actual_min_temp": 20,
    "actual_max_temp": 37,
    "actual_precipitation": 0,
    "location": "IND"
  },
  {
    "": 912,
    "date": "2014-12-30",
    "actual_mean_temp": 23,
    "actual_min_temp": 15,
    "actual_max_temp": 31,
    "actual_precipitation": 0,
    "location": "IND"
  },
  {
    "": 913,
    "date": "2014-12-31",
    "actual_mean_temp": 16,
    "actual_min_temp": 9,
    "actual_max_temp": 23,
    "actual_precipitation": 0,
    "location": "IND"
  },
  {
    "": 914,
    "date": "2015-1-1",
    "actual_mean_temp": 26,
    "actual_min_temp": 18,
    "actual_max_temp": 34,
    "actual_precipitation": 0,
    "location": "IND"
  },
  {
    "": 915,
    "date": "2015-1-2",
    "actual_mean_temp": 32,
    "actual_min_temp": 25,
    "actual_max_temp": 39,
    "actual_precipitation": 0,
    "location": "IND"
  },
  {
    "": 916,
    "date": "2015-1-3",
    "actual_mean_temp": 43,
    "actual_min_temp": 33,
    "actual_max_temp": 52,
    "actual_precipitation": 0.79,
    "location": "IND"
  },
  {
    "": 917,
    "date": "2015-1-4",
    "actual_mean_temp": 28,
    "actual_min_temp": 12,
    "actual_max_temp": 44,
    "actual_precipitation": 0.01,
    "location": "IND"
  },
  {
    "": 918,
    "date": "2015-1-5",
    "actual_mean_temp": 9,
    "actual_min_temp": 4,
    "actual_max_temp": 14,
    "actual_precipitation": 0.11,
    "location": "IND"
  },
  {
    "": 919,
    "date": "2015-1-6",
    "actual_mean_temp": 14,
    "actual_min_temp": 9,
    "actual_max_temp": 19,
    "actual_precipitation": 0.08,
    "location": "IND"
  },
  {
    "": 920,
    "date": "2015-1-7",
    "actual_mean_temp": 3,
    "actual_min_temp": -6,
    "actual_max_temp": 12,
    "actual_precipitation": 0,
    "location": "IND"
  },
  {
    "": 921,
    "date": "2015-1-8",
    "actual_mean_temp": 7,
    "actual_min_temp": -7,
    "actual_max_temp": 20,
    "actual_precipitation": 0,
    "location": "IND"
  },
  {
    "": 922,
    "date": "2015-1-9",
    "actual_mean_temp": 11,
    "actual_min_temp": 1,
    "actual_max_temp": 21,
    "actual_precipitation": 0,
    "location": "IND"
  },
  {
    "": 923,
    "date": "2015-1-10",
    "actual_mean_temp": 11,
    "actual_min_temp": -3,
    "actual_max_temp": 24,
    "actual_precipitation": 0,
    "location": "IND"
  },
  {
    "": 924,
    "date": "2015-1-11",
    "actual_mean_temp": 28,
    "actual_min_temp": 21,
    "actual_max_temp": 34,
    "actual_precipitation": 0.43,
    "location": "IND"
  },
  {
    "": 925,
    "date": "2015-1-12",
    "actual_mean_temp": 25,
    "actual_min_temp": 19,
    "actual_max_temp": 31,
    "actual_precipitation": 0.19,
    "location": "IND"
  },
  {
    "": 926,
    "date": "2015-1-13",
    "actual_mean_temp": 16,
    "actual_min_temp": 8,
    "actual_max_temp": 23,
    "actual_precipitation": 0,
    "location": "IND"
  },
  {
    "": 927,
    "date": "2015-1-14",
    "actual_mean_temp": 13,
    "actual_min_temp": 5,
    "actual_max_temp": 21,
    "actual_precipitation": 0,
    "location": "IND"
  },
  {
    "": 928,
    "date": "2015-1-15",
    "actual_mean_temp": 25,
    "actual_min_temp": 13,
    "actual_max_temp": 36,
    "actual_precipitation": 0,
    "location": "IND"
  },
  {
    "": 929,
    "date": "2015-1-16",
    "actual_mean_temp": 32,
    "actual_min_temp": 21,
    "actual_max_temp": 42,
    "actual_precipitation": 0,
    "location": "IND"
  },
  {
    "": 930,
    "date": "2015-1-17",
    "actual_mean_temp": 39,
    "actual_min_temp": 27,
    "actual_max_temp": 51,
    "actual_precipitation": 0,
    "location": "IND"
  },
  {
    "": 931,
    "date": "2015-1-18",
    "actual_mean_temp": 36,
    "actual_min_temp": 28,
    "actual_max_temp": 44,
    "actual_precipitation": 0.01,
    "location": "IND"
  },
  {
    "": 932,
    "date": "2015-1-19",
    "actual_mean_temp": 35,
    "actual_min_temp": 23,
    "actual_max_temp": 47,
    "actual_precipitation": 0,
    "location": "IND"
  },
  {
    "": 933,
    "date": "2015-1-20",
    "actual_mean_temp": 40,
    "actual_min_temp": 30,
    "actual_max_temp": 50,
    "actual_precipitation": 0,
    "location": "IND"
  },
  {
    "": 934,
    "date": "2015-1-21",
    "actual_mean_temp": 37,
    "actual_min_temp": 30,
    "actual_max_temp": 43,
    "actual_precipitation": 0,
    "location": "IND"
  },
  {
    "": 935,
    "date": "2015-1-22",
    "actual_mean_temp": 31,
    "actual_min_temp": 28,
    "actual_max_temp": 33,
    "actual_precipitation": 0,
    "location": "IND"
  },
  {
    "": 936,
    "date": "2015-1-23",
    "actual_mean_temp": 29,
    "actual_min_temp": 24,
    "actual_max_temp": 34,
    "actual_precipitation": 0,
    "location": "IND"
  },
  {
    "": 937,
    "date": "2015-1-24",
    "actual_mean_temp": 30,
    "actual_min_temp": 20,
    "actual_max_temp": 39,
    "actual_precipitation": 0,
    "location": "IND"
  },
  {
    "": 938,
    "date": "2015-1-25",
    "actual_mean_temp": 29,
    "actual_min_temp": 20,
    "actual_max_temp": 37,
    "actual_precipitation": 0.04,
    "location": "IND"
  },
  {
    "": 939,
    "date": "2015-1-26",
    "actual_mean_temp": 22,
    "actual_min_temp": 17,
    "actual_max_temp": 26,
    "actual_precipitation": 0,
    "location": "IND"
  },
  {
    "": 940,
    "date": "2015-1-27",
    "actual_mean_temp": 25,
    "actual_min_temp": 20,
    "actual_max_temp": 29,
    "actual_precipitation": 0.01,
    "location": "IND"
  },
  {
    "": 941,
    "date": "2015-1-28",
    "actual_mean_temp": 25,
    "actual_min_temp": 15,
    "actual_max_temp": 34,
    "actual_precipitation": 0,
    "location": "IND"
  },
  {
    "": 942,
    "date": "2015-1-29",
    "actual_mean_temp": 38,
    "actual_min_temp": 30,
    "actual_max_temp": 45,
    "actual_precipitation": 0,
    "location": "IND"
  },
  {
    "": 943,
    "date": "2015-1-30",
    "actual_mean_temp": 26,
    "actual_min_temp": 20,
    "actual_max_temp": 31,
    "actual_precipitation": 0.01,
    "location": "IND"
  },
  {
    "": 944,
    "date": "2015-1-31",
    "actual_mean_temp": 26,
    "actual_min_temp": 16,
    "actual_max_temp": 36,
    "actual_precipitation": 0.13,
    "location": "IND"
  },
  {
    "": 945,
    "date": "2015-2-1",
    "actual_mean_temp": 30,
    "actual_min_temp": 27,
    "actual_max_temp": 33,
    "actual_precipitation": 0.29,
    "location": "IND"
  },
  {
    "": 946,
    "date": "2015-2-2",
    "actual_mean_temp": 20,
    "actual_min_temp": 13,
    "actual_max_temp": 27,
    "actual_precipitation": 0.01,
    "location": "IND"
  },
  {
    "": 947,
    "date": "2015-2-3",
    "actual_mean_temp": 26,
    "actual_min_temp": 16,
    "actual_max_temp": 36,
    "actual_precipitation": 0,
    "location": "IND"
  },
  {
    "": 948,
    "date": "2015-2-4",
    "actual_mean_temp": 29,
    "actual_min_temp": 15,
    "actual_max_temp": 42,
    "actual_precipitation": 0.07,
    "location": "IND"
  },
  {
    "": 949,
    "date": "2015-2-5",
    "actual_mean_temp": 15,
    "actual_min_temp": 5,
    "actual_max_temp": 24,
    "actual_precipitation": 0,
    "location": "IND"
  },
  {
    "": 950,
    "date": "2015-2-6",
    "actual_mean_temp": 25,
    "actual_min_temp": 12,
    "actual_max_temp": 37,
    "actual_precipitation": 0,
    "location": "IND"
  },
  {
    "": 951,
    "date": "2015-2-7",
    "actual_mean_temp": 42,
    "actual_min_temp": 28,
    "actual_max_temp": 55,
    "actual_precipitation": 0,
    "location": "IND"
  },
  {
    "": 952,
    "date": "2015-2-8",
    "actual_mean_temp": 47,
    "actual_min_temp": 36,
    "actual_max_temp": 57,
    "actual_precipitation": 0,
    "location": "IND"
  },
  {
    "": 953,
    "date": "2015-2-9",
    "actual_mean_temp": 31,
    "actual_min_temp": 26,
    "actual_max_temp": 36,
    "actual_precipitation": 0,
    "location": "IND"
  },
  {
    "": 954,
    "date": "2015-2-10",
    "actual_mean_temp": 27,
    "actual_min_temp": 18,
    "actual_max_temp": 36,
    "actual_precipitation": 0,
    "location": "IND"
  },
  {
    "": 955,
    "date": "2015-2-11",
    "actual_mean_temp": 32,
    "actual_min_temp": 25,
    "actual_max_temp": 39,
    "actual_precipitation": 0,
    "location": "IND"
  },
  {
    "": 956,
    "date": "2015-2-12",
    "actual_mean_temp": 20,
    "actual_min_temp": 13,
    "actual_max_temp": 27,
    "actual_precipitation": 0,
    "location": "IND"
  },
  {
    "": 957,
    "date": "2015-2-13",
    "actual_mean_temp": 20,
    "actual_min_temp": 9,
    "actual_max_temp": 31,
    "actual_precipitation": 0,
    "location": "IND"
  },
  {
    "": 958,
    "date": "2015-2-14",
    "actual_mean_temp": 18,
    "actual_min_temp": 6,
    "actual_max_temp": 30,
    "actual_precipitation": 0,
    "location": "IND"
  },
  {
    "": 959,
    "date": "2015-2-15",
    "actual_mean_temp": 12,
    "actual_min_temp": 4,
    "actual_max_temp": 20,
    "actual_precipitation": 0,
    "location": "IND"
  },
  {
    "": 960,
    "date": "2015-2-16",
    "actual_mean_temp": 11,
    "actual_min_temp": 6,
    "actual_max_temp": 16,
    "actual_precipitation": 0.14,
    "location": "IND"
  },
  {
    "": 961,
    "date": "2015-2-17",
    "actual_mean_temp": 14,
    "actual_min_temp": 1,
    "actual_max_temp": 26,
    "actual_precipitation": 0.01,
    "location": "IND"
  },
  {
    "": 962,
    "date": "2015-2-18",
    "actual_mean_temp": 9,
    "actual_min_temp": 0,
    "actual_max_temp": 17,
    "actual_precipitation": 0.07,
    "location": "IND"
  },
  {
    "": 963,
    "date": "2015-2-19",
    "actual_mean_temp": 2,
    "actual_min_temp": -5,
    "actual_max_temp": 9,
    "actual_precipitation": 0,
    "location": "IND"
  },
  {
    "": 964,
    "date": "2015-2-20",
    "actual_mean_temp": 6,
    "actual_min_temp": -6,
    "actual_max_temp": 18,
    "actual_precipitation": 0,
    "location": "IND"
  },
  {
    "": 965,
    "date": "2015-2-21",
    "actual_mean_temp": 26,
    "actual_min_temp": 16,
    "actual_max_temp": 35,
    "actual_precipitation": 0.47,
    "location": "IND"
  },
  {
    "": 966,
    "date": "2015-2-22",
    "actual_mean_temp": 22,
    "actual_min_temp": 15,
    "actual_max_temp": 29,
    "actual_precipitation": 0,
    "location": "IND"
  },
  {
    "": 967,
    "date": "2015-2-23",
    "actual_mean_temp": 11,
    "actual_min_temp": 3,
    "actual_max_temp": 19,
    "actual_precipitation": 0.01,
    "location": "IND"
  },
  {
    "": 968,
    "date": "2015-2-24",
    "actual_mean_temp": 10,
    "actual_min_temp": -6,
    "actual_max_temp": 25,
    "actual_precipitation": 0,
    "location": "IND"
  },
  {
    "": 969,
    "date": "2015-2-25",
    "actual_mean_temp": 24,
    "actual_min_temp": 14,
    "actual_max_temp": 33,
    "actual_precipitation": 0,
    "location": "IND"
  },
  {
    "": 970,
    "date": "2015-2-26",
    "actual_mean_temp": 16,
    "actual_min_temp": 7,
    "actual_max_temp": 25,
    "actual_precipitation": 0.04,
    "location": "IND"
  },
  {
    "": 971,
    "date": "2015-2-27",
    "actual_mean_temp": 10,
    "actual_min_temp": 2,
    "actual_max_temp": 18,
    "actual_precipitation": 0,
    "location": "IND"
  },
  {
    "": 972,
    "date": "2015-2-28",
    "actual_mean_temp": 16,
    "actual_min_temp": 7,
    "actual_max_temp": 25,
    "actual_precipitation": 0.23,
    "location": "IND"
  },
  {
    "": 973,
    "date": "2015-3-1",
    "actual_mean_temp": 27,
    "actual_min_temp": 22,
    "actual_max_temp": 31,
    "actual_precipitation": 0.53,
    "location": "IND"
  },
  {
    "": 974,
    "date": "2015-3-2",
    "actual_mean_temp": 24,
    "actual_min_temp": 14,
    "actual_max_temp": 34,
    "actual_precipitation": 0,
    "location": "IND"
  },
  {
    "": 975,
    "date": "2015-3-3",
    "actual_mean_temp": 33,
    "actual_min_temp": 26,
    "actual_max_temp": 40,
    "actual_precipitation": 0.28,
    "location": "IND"
  },
  {
    "": 976,
    "date": "2015-3-4",
    "actual_mean_temp": 27,
    "actual_min_temp": 19,
    "actual_max_temp": 35,
    "actual_precipitation": 0.07,
    "location": "IND"
  },
  {
    "": 977,
    "date": "2015-3-5",
    "actual_mean_temp": 16,
    "actual_min_temp": 8,
    "actual_max_temp": 23,
    "actual_precipitation": 0,
    "location": "IND"
  },
  {
    "": 978,
    "date": "2015-3-6",
    "actual_mean_temp": 16,
    "actual_min_temp": 2,
    "actual_max_temp": 30,
    "actual_precipitation": 0,
    "location": "IND"
  },
  {
    "": 979,
    "date": "2015-3-7",
    "actual_mean_temp": 32,
    "actual_min_temp": 21,
    "actual_max_temp": 42,
    "actual_precipitation": 0,
    "location": "IND"
  },
  {
    "": 980,
    "date": "2015-3-8",
    "actual_mean_temp": 38,
    "actual_min_temp": 27,
    "actual_max_temp": 49,
    "actual_precipitation": 0,
    "location": "IND"
  },
  {
    "": 981,
    "date": "2015-3-9",
    "actual_mean_temp": 40,
    "actual_min_temp": 31,
    "actual_max_temp": 48,
    "actual_precipitation": 0,
    "location": "IND"
  },
  {
    "": 982,
    "date": "2015-3-10",
    "actual_mean_temp": 45,
    "actual_min_temp": 40,
    "actual_max_temp": 49,
    "actual_precipitation": 0.4,
    "location": "IND"
  },
  {
    "": 983,
    "date": "2015-3-11",
    "actual_mean_temp": 49,
    "actual_min_temp": 34,
    "actual_max_temp": 64,
    "actual_precipitation": 0,
    "location": "IND"
  },
  {
    "": 984,
    "date": "2015-3-12",
    "actual_mean_temp": 46,
    "actual_min_temp": 31,
    "actual_max_temp": 60,
    "actual_precipitation": 0,
    "location": "IND"
  },
  {
    "": 985,
    "date": "2015-3-13",
    "actual_mean_temp": 48,
    "actual_min_temp": 42,
    "actual_max_temp": 53,
    "actual_precipitation": 0.51,
    "location": "IND"
  },
  {
    "": 986,
    "date": "2015-3-14",
    "actual_mean_temp": 51,
    "actual_min_temp": 43,
    "actual_max_temp": 59,
    "actual_precipitation": 0.43,
    "location": "IND"
  },
  {
    "": 987,
    "date": "2015-3-15",
    "actual_mean_temp": 49,
    "actual_min_temp": 33,
    "actual_max_temp": 65,
    "actual_precipitation": 0,
    "location": "IND"
  },
  {
    "": 988,
    "date": "2015-3-16",
    "actual_mean_temp": 61,
    "actual_min_temp": 47,
    "actual_max_temp": 74,
    "actual_precipitation": 0,
    "location": "IND"
  },
  {
    "": 989,
    "date": "2015-3-17",
    "actual_mean_temp": 47,
    "actual_min_temp": 33,
    "actual_max_temp": 60,
    "actual_precipitation": 0,
    "location": "IND"
  },
  {
    "": 990,
    "date": "2015-3-18",
    "actual_mean_temp": 37,
    "actual_min_temp": 27,
    "actual_max_temp": 46,
    "actual_precipitation": 0,
    "location": "IND"
  },
  {
    "": 991,
    "date": "2015-3-19",
    "actual_mean_temp": 45,
    "actual_min_temp": 40,
    "actual_max_temp": 50,
    "actual_precipitation": 0.02,
    "location": "IND"
  },
  {
    "": 992,
    "date": "2015-3-20",
    "actual_mean_temp": 44,
    "actual_min_temp": 39,
    "actual_max_temp": 48,
    "actual_precipitation": 0.03,
    "location": "IND"
  },
  {
    "": 993,
    "date": "2015-3-21",
    "actual_mean_temp": 49,
    "actual_min_temp": 34,
    "actual_max_temp": 63,
    "actual_precipitation": 0,
    "location": "IND"
  },
  {
    "": 994,
    "date": "2015-3-22",
    "actual_mean_temp": 44,
    "actual_min_temp": 36,
    "actual_max_temp": 52,
    "actual_precipitation": 0,
    "location": "IND"
  },
  {
    "": 995,
    "date": "2015-3-23",
    "actual_mean_temp": 36,
    "actual_min_temp": 30,
    "actual_max_temp": 41,
    "actual_precipitation": 0.03,
    "location": "IND"
  },
  {
    "": 996,
    "date": "2015-3-24",
    "actual_mean_temp": 35,
    "actual_min_temp": 26,
    "actual_max_temp": 44,
    "actual_precipitation": 0.04,
    "location": "IND"
  },
  {
    "": 997,
    "date": "2015-3-25",
    "actual_mean_temp": 48,
    "actual_min_temp": 42,
    "actual_max_temp": 54,
    "actual_precipitation": 0.63,
    "location": "IND"
  },
  {
    "": 998,
    "date": "2015-3-26",
    "actual_mean_temp": 40,
    "actual_min_temp": 34,
    "actual_max_temp": 45,
    "actual_precipitation": 0.5,
    "location": "IND"
  },
  {
    "": 999,
    "date": "2015-3-27",
    "actual_mean_temp": 28,
    "actual_min_temp": 21,
    "actual_max_temp": 35,
    "actual_precipitation": 0,
    "location": "IND"
  },
  {
    "": 1000,
    "date": "2015-3-28",
    "actual_mean_temp": 29,
    "actual_min_temp": 17,
    "actual_max_temp": 40,
    "actual_precipitation": 0,
    "location": "IND"
  },
  {
    "": 1001,
    "date": "2015-3-29",
    "actual_mean_temp": 38,
    "actual_min_temp": 24,
    "actual_max_temp": 51,
    "actual_precipitation": 0.06,
    "location": "IND"
  },
  {
    "": 1002,
    "date": "2015-3-30",
    "actual_mean_temp": 49,
    "actual_min_temp": 36,
    "actual_max_temp": 61,
    "actual_precipitation": 0,
    "location": "IND"
  },
  {
    "": 1003,
    "date": "2015-3-31",
    "actual_mean_temp": 54,
    "actual_min_temp": 44,
    "actual_max_temp": 63,
    "actual_precipitation": 0,
    "location": "IND"
  },
  {
    "": 1004,
    "date": "2015-4-1",
    "actual_mean_temp": 53,
    "actual_min_temp": 37,
    "actual_max_temp": 69,
    "actual_precipitation": 0,
    "location": "IND"
  },
  {
    "": 1005,
    "date": "2015-4-2",
    "actual_mean_temp": 62,
    "actual_min_temp": 52,
    "actual_max_temp": 72,
    "actual_precipitation": 0.29,
    "location": "IND"
  },
  {
    "": 1006,
    "date": "2015-4-3",
    "actual_mean_temp": 50,
    "actual_min_temp": 39,
    "actual_max_temp": 61,
    "actual_precipitation": 0.11,
    "location": "IND"
  },
  {
    "": 1007,
    "date": "2015-4-4",
    "actual_mean_temp": 43,
    "actual_min_temp": 30,
    "actual_max_temp": 55,
    "actual_precipitation": 0,
    "location": "IND"
  },
  {
    "": 1008,
    "date": "2015-4-5",
    "actual_mean_temp": 49,
    "actual_min_temp": 34,
    "actual_max_temp": 64,
    "actual_precipitation": 0,
    "location": "IND"
  },
  {
    "": 1009,
    "date": "2015-4-6",
    "actual_mean_temp": 55,
    "actual_min_temp": 47,
    "actual_max_temp": 62,
    "actual_precipitation": 0,
    "location": "IND"
  },
  {
    "": 1010,
    "date": "2015-4-7",
    "actual_mean_temp": 61,
    "actual_min_temp": 56,
    "actual_max_temp": 66,
    "actual_precipitation": 0.32,
    "location": "IND"
  },
  {
    "": 1011,
    "date": "2015-4-8",
    "actual_mean_temp": 64,
    "actual_min_temp": 55,
    "actual_max_temp": 72,
    "actual_precipitation": 0.74,
    "location": "IND"
  },
  {
    "": 1012,
    "date": "2015-4-9",
    "actual_mean_temp": 71,
    "actual_min_temp": 61,
    "actual_max_temp": 80,
    "actual_precipitation": 0.24,
    "location": "IND"
  },
  {
    "": 1013,
    "date": "2015-4-10",
    "actual_mean_temp": 56,
    "actual_min_temp": 42,
    "actual_max_temp": 69,
    "actual_precipitation": 0.04,
    "location": "IND"
  },
  {
    "": 1014,
    "date": "2015-4-11",
    "actual_mean_temp": 50,
    "actual_min_temp": 38,
    "actual_max_temp": 62,
    "actual_precipitation": 0,
    "location": "IND"
  },
  {
    "": 1015,
    "date": "2015-4-12",
    "actual_mean_temp": 57,
    "actual_min_temp": 43,
    "actual_max_temp": 70,
    "actual_precipitation": 0,
    "location": "IND"
  },
  {
    "": 1016,
    "date": "2015-4-13",
    "actual_mean_temp": 64,
    "actual_min_temp": 56,
    "actual_max_temp": 71,
    "actual_precipitation": 0.04,
    "location": "IND"
  },
  {
    "": 1017,
    "date": "2015-4-14",
    "actual_mean_temp": 58,
    "actual_min_temp": 51,
    "actual_max_temp": 64,
    "actual_precipitation": 0,
    "location": "IND"
  },
  {
    "": 1018,
    "date": "2015-4-15",
    "actual_mean_temp": 58,
    "actual_min_temp": 46,
    "actual_max_temp": 69,
    "actual_precipitation": 0.07,
    "location": "IND"
  },
  {
    "": 1019,
    "date": "2015-4-16",
    "actual_mean_temp": 61,
    "actual_min_temp": 53,
    "actual_max_temp": 68,
    "actual_precipitation": 0.2,
    "location": "IND"
  },
  {
    "": 1020,
    "date": "2015-4-17",
    "actual_mean_temp": 61,
    "actual_min_temp": 46,
    "actual_max_temp": 76,
    "actual_precipitation": 0,
    "location": "IND"
  },
  {
    "": 1021,
    "date": "2015-4-18",
    "actual_mean_temp": 64,
    "actual_min_temp": 51,
    "actual_max_temp": 76,
    "actual_precipitation": 0,
    "location": "IND"
  },
  {
    "": 1022,
    "date": "2015-4-19",
    "actual_mean_temp": 62,
    "actual_min_temp": 56,
    "actual_max_temp": 67,
    "actual_precipitation": 0.93,
    "location": "IND"
  },
  {
    "": 1023,
    "date": "2015-4-20",
    "actual_mean_temp": 52,
    "actual_min_temp": 45,
    "actual_max_temp": 58,
    "actual_precipitation": 0.3,
    "location": "IND"
  },
  {
    "": 1024,
    "date": "2015-4-21",
    "actual_mean_temp": 52,
    "actual_min_temp": 41,
    "actual_max_temp": 62,
    "actual_precipitation": 0,
    "location": "IND"
  },
  {
    "": 1025,
    "date": "2015-4-22",
    "actual_mean_temp": 44,
    "actual_min_temp": 37,
    "actual_max_temp": 50,
    "actual_precipitation": 0.1,
    "location": "IND"
  },
  {
    "": 1026,
    "date": "2015-4-23",
    "actual_mean_temp": 45,
    "actual_min_temp": 32,
    "actual_max_temp": 57,
    "actual_precipitation": 0,
    "location": "IND"
  },
  {
    "": 1027,
    "date": "2015-4-24",
    "actual_mean_temp": 47,
    "actual_min_temp": 32,
    "actual_max_temp": 62,
    "actual_precipitation": 0,
    "location": "IND"
  },
  {
    "": 1028,
    "date": "2015-4-25",
    "actual_mean_temp": 50,
    "actual_min_temp": 44,
    "actual_max_temp": 56,
    "actual_precipitation": 0.62,
    "location": "IND"
  },
  {
    "": 1029,
    "date": "2015-4-26",
    "actual_mean_temp": 49,
    "actual_min_temp": 39,
    "actual_max_temp": 58,
    "actual_precipitation": 0,
    "location": "IND"
  },
  {
    "": 1030,
    "date": "2015-4-27",
    "actual_mean_temp": 47,
    "actual_min_temp": 35,
    "actual_max_temp": 58,
    "actual_precipitation": 0,
    "location": "IND"
  },
  {
    "": 1031,
    "date": "2015-4-28",
    "actual_mean_temp": 51,
    "actual_min_temp": 39,
    "actual_max_temp": 63,
    "actual_precipitation": 0,
    "location": "IND"
  },
  {
    "": 1032,
    "date": "2015-4-29",
    "actual_mean_temp": 54,
    "actual_min_temp": 41,
    "actual_max_temp": 67,
    "actual_precipitation": 0,
    "location": "IND"
  },
  {
    "": 1033,
    "date": "2015-4-30",
    "actual_mean_temp": 53,
    "actual_min_temp": 44,
    "actual_max_temp": 61,
    "actual_precipitation": 0,
    "location": "IND"
  },
  {
    "": 1034,
    "date": "2015-5-1",
    "actual_mean_temp": 55,
    "actual_min_temp": 39,
    "actual_max_temp": 71,
    "actual_precipitation": 0,
    "location": "IND"
  },
  {
    "": 1035,
    "date": "2015-5-2",
    "actual_mean_temp": 62,
    "actual_min_temp": 49,
    "actual_max_temp": 75,
    "actual_precipitation": 0,
    "location": "IND"
  },
  {
    "": 1036,
    "date": "2015-5-3",
    "actual_mean_temp": 66,
    "actual_min_temp": 53,
    "actual_max_temp": 78,
    "actual_precipitation": 0,
    "location": "IND"
  },
  {
    "": 1037,
    "date": "2015-5-4",
    "actual_mean_temp": 67,
    "actual_min_temp": 58,
    "actual_max_temp": 76,
    "actual_precipitation": 0.13,
    "location": "IND"
  },
  {
    "": 1038,
    "date": "2015-5-5",
    "actual_mean_temp": 73,
    "actual_min_temp": 62,
    "actual_max_temp": 83,
    "actual_precipitation": 0,
    "location": "IND"
  },
  {
    "": 1039,
    "date": "2015-5-6",
    "actual_mean_temp": 74,
    "actual_min_temp": 61,
    "actual_max_temp": 86,
    "actual_precipitation": 0,
    "location": "IND"
  },
  {
    "": 1040,
    "date": "2015-5-7",
    "actual_mean_temp": 75,
    "actual_min_temp": 64,
    "actual_max_temp": 86,
    "actual_precipitation": 0,
    "location": "IND"
  },
  {
    "": 1041,
    "date": "2015-5-8",
    "actual_mean_temp": 74,
    "actual_min_temp": 63,
    "actual_max_temp": 85,
    "actual_precipitation": 0,
    "location": "IND"
  },
  {
    "": 1042,
    "date": "2015-5-9",
    "actual_mean_temp": 73,
    "actual_min_temp": 66,
    "actual_max_temp": 80,
    "actual_precipitation": 0.05,
    "location": "IND"
  },
  {
    "": 1043,
    "date": "2015-5-10",
    "actual_mean_temp": 74,
    "actual_min_temp": 64,
    "actual_max_temp": 83,
    "actual_precipitation": 0.05,
    "location": "IND"
  },
  {
    "": 1044,
    "date": "2015-5-11",
    "actual_mean_temp": 70,
    "actual_min_temp": 61,
    "actual_max_temp": 78,
    "actual_precipitation": 0.06,
    "location": "IND"
  },
  {
    "": 1045,
    "date": "2015-5-12",
    "actual_mean_temp": 57,
    "actual_min_temp": 50,
    "actual_max_temp": 64,
    "actual_precipitation": 0,
    "location": "IND"
  },
  {
    "": 1046,
    "date": "2015-5-13",
    "actual_mean_temp": 55,
    "actual_min_temp": 43,
    "actual_max_temp": 67,
    "actual_precipitation": 0,
    "location": "IND"
  },
  {
    "": 1047,
    "date": "2015-5-14",
    "actual_mean_temp": 60,
    "actual_min_temp": 49,
    "actual_max_temp": 70,
    "actual_precipitation": 0,
    "location": "IND"
  },
  {
    "": 1048,
    "date": "2015-5-15",
    "actual_mean_temp": 71,
    "actual_min_temp": 60,
    "actual_max_temp": 82,
    "actual_precipitation": 0.12,
    "location": "IND"
  },
  {
    "": 1049,
    "date": "2015-5-16",
    "actual_mean_temp": 68,
    "actual_min_temp": 64,
    "actual_max_temp": 71,
    "actual_precipitation": 0.53,
    "location": "IND"
  },
  {
    "": 1050,
    "date": "2015-5-17",
    "actual_mean_temp": 72,
    "actual_min_temp": 64,
    "actual_max_temp": 79,
    "actual_precipitation": 0,
    "location": "IND"
  },
  {
    "": 1051,
    "date": "2015-5-18",
    "actual_mean_temp": 71,
    "actual_min_temp": 62,
    "actual_max_temp": 79,
    "actual_precipitation": 0,
    "location": "IND"
  },
  {
    "": 1052,
    "date": "2015-5-19",
    "actual_mean_temp": 57,
    "actual_min_temp": 48,
    "actual_max_temp": 65,
    "actual_precipitation": 0,
    "location": "IND"
  },
  {
    "": 1053,
    "date": "2015-5-20",
    "actual_mean_temp": 48,
    "actual_min_temp": 43,
    "actual_max_temp": 52,
    "actual_precipitation": 0,
    "location": "IND"
  },
  {
    "": 1054,
    "date": "2015-5-21",
    "actual_mean_temp": 56,
    "actual_min_temp": 47,
    "actual_max_temp": 64,
    "actual_precipitation": 0,
    "location": "IND"
  },
  {
    "": 1055,
    "date": "2015-5-22",
    "actual_mean_temp": 60,
    "actual_min_temp": 44,
    "actual_max_temp": 76,
    "actual_precipitation": 0,
    "location": "IND"
  },
  {
    "": 1056,
    "date": "2015-5-23",
    "actual_mean_temp": 67,
    "actual_min_temp": 55,
    "actual_max_temp": 79,
    "actual_precipitation": 0,
    "location": "IND"
  },
  {
    "": 1057,
    "date": "2015-5-24",
    "actual_mean_temp": 72,
    "actual_min_temp": 59,
    "actual_max_temp": 85,
    "actual_precipitation": 0,
    "location": "IND"
  },
  {
    "": 1058,
    "date": "2015-5-25",
    "actual_mean_temp": 73,
    "actual_min_temp": 67,
    "actual_max_temp": 79,
    "actual_precipitation": 0.01,
    "location": "IND"
  },
  {
    "": 1059,
    "date": "2015-5-26",
    "actual_mean_temp": 72,
    "actual_min_temp": 64,
    "actual_max_temp": 80,
    "actual_precipitation": 0.07,
    "location": "IND"
  },
  {
    "": 1060,
    "date": "2015-5-27",
    "actual_mean_temp": 73,
    "actual_min_temp": 63,
    "actual_max_temp": 82,
    "actual_precipitation": 0.07,
    "location": "IND"
  },
  {
    "": 1061,
    "date": "2015-5-28",
    "actual_mean_temp": 72,
    "actual_min_temp": 60,
    "actual_max_temp": 84,
    "actual_precipitation": 0,
    "location": "IND"
  },
  {
    "": 1062,
    "date": "2015-5-29",
    "actual_mean_temp": 75,
    "actual_min_temp": 65,
    "actual_max_temp": 84,
    "actual_precipitation": 0,
    "location": "IND"
  },
  {
    "": 1063,
    "date": "2015-5-30",
    "actual_mean_temp": 75,
    "actual_min_temp": 66,
    "actual_max_temp": 84,
    "actual_precipitation": 1.28,
    "location": "IND"
  },
  {
    "": 1064,
    "date": "2015-5-31",
    "actual_mean_temp": 61,
    "actual_min_temp": 55,
    "actual_max_temp": 67,
    "actual_precipitation": 0.08,
    "location": "IND"
  },
  {
    "": 1065,
    "date": "2015-6-1",
    "actual_mean_temp": 58,
    "actual_min_temp": 52,
    "actual_max_temp": 64,
    "actual_precipitation": 0,
    "location": "IND"
  },
  {
    "": 1066,
    "date": "2015-6-2",
    "actual_mean_temp": 60,
    "actual_min_temp": 49,
    "actual_max_temp": 70,
    "actual_precipitation": 0,
    "location": "IND"
  },
  {
    "": 1067,
    "date": "2015-6-3",
    "actual_mean_temp": 61,
    "actual_min_temp": 51,
    "actual_max_temp": 71,
    "actual_precipitation": 0,
    "location": "IND"
  },
  {
    "": 1068,
    "date": "2015-6-4",
    "actual_mean_temp": 70,
    "actual_min_temp": 57,
    "actual_max_temp": 82,
    "actual_precipitation": 0,
    "location": "IND"
  },
  {
    "": 1069,
    "date": "2015-6-5",
    "actual_mean_temp": 75,
    "actual_min_temp": 63,
    "actual_max_temp": 87,
    "actual_precipitation": 0,
    "location": "IND"
  },
  {
    "": 1070,
    "date": "2015-6-6",
    "actual_mean_temp": 69,
    "actual_min_temp": 61,
    "actual_max_temp": 76,
    "actual_precipitation": 0,
    "location": "IND"
  },
  {
    "": 1071,
    "date": "2015-6-7",
    "actual_mean_temp": 75,
    "actual_min_temp": 62,
    "actual_max_temp": 88,
    "actual_precipitation": 0,
    "location": "IND"
  },
  {
    "": 1072,
    "date": "2015-6-8",
    "actual_mean_temp": 70,
    "actual_min_temp": 60,
    "actual_max_temp": 79,
    "actual_precipitation": 1.9,
    "location": "IND"
  },
  {
    "": 1073,
    "date": "2015-6-9",
    "actual_mean_temp": 70,
    "actual_min_temp": 58,
    "actual_max_temp": 82,
    "actual_precipitation": 0,
    "location": "IND"
  },
  {
    "": 1074,
    "date": "2015-6-10",
    "actual_mean_temp": 78,
    "actual_min_temp": 65,
    "actual_max_temp": 90,
    "actual_precipitation": 0,
    "location": "IND"
  },
  {
    "": 1075,
    "date": "2015-6-11",
    "actual_mean_temp": 80,
    "actual_min_temp": 69,
    "actual_max_temp": 90,
    "actual_precipitation": 0,
    "location": "IND"
  },
  {
    "": 1076,
    "date": "2015-6-12",
    "actual_mean_temp": 81,
    "actual_min_temp": 72,
    "actual_max_temp": 89,
    "actual_precipitation": 0.21,
    "location": "IND"
  },
  {
    "": 1077,
    "date": "2015-6-13",
    "actual_mean_temp": 80,
    "actual_min_temp": 71,
    "actual_max_temp": 88,
    "actual_precipitation": 0,
    "location": "IND"
  },
  {
    "": 1078,
    "date": "2015-6-14",
    "actual_mean_temp": 78,
    "actual_min_temp": 70,
    "actual_max_temp": 86,
    "actual_precipitation": 0.13,
    "location": "IND"
  },
  {
    "": 1079,
    "date": "2015-6-15",
    "actual_mean_temp": 79,
    "actual_min_temp": 70,
    "actual_max_temp": 88,
    "actual_precipitation": 0.54,
    "location": "IND"
  },
  {
    "": 1080,
    "date": "2015-6-16",
    "actual_mean_temp": 78,
    "actual_min_temp": 71,
    "actual_max_temp": 84,
    "actual_precipitation": 0.5,
    "location": "IND"
  },
  {
    "": 1081,
    "date": "2015-6-17",
    "actual_mean_temp": 76,
    "actual_min_temp": 72,
    "actual_max_temp": 79,
    "actual_precipitation": 0.75,
    "location": "IND"
  },
  {
    "": 1082,
    "date": "2015-6-18",
    "actual_mean_temp": 77,
    "actual_min_temp": 68,
    "actual_max_temp": 86,
    "actual_precipitation": 0.67,
    "location": "IND"
  },
  {
    "": 1083,
    "date": "2015-6-19",
    "actual_mean_temp": 73,
    "actual_min_temp": 68,
    "actual_max_temp": 78,
    "actual_precipitation": 0.67,
    "location": "IND"
  },
  {
    "": 1084,
    "date": "2015-6-20",
    "actual_mean_temp": 75,
    "actual_min_temp": 70,
    "actual_max_temp": 79,
    "actual_precipitation": 0,
    "location": "IND"
  },
  {
    "": 1085,
    "date": "2015-6-21",
    "actual_mean_temp": 75,
    "actual_min_temp": 65,
    "actual_max_temp": 84,
    "actual_precipitation": 0.27,
    "location": "IND"
  },
  {
    "": 1086,
    "date": "2015-6-22",
    "actual_mean_temp": 78,
    "actual_min_temp": 69,
    "actual_max_temp": 86,
    "actual_precipitation": 0,
    "location": "IND"
  },
  {
    "": 1087,
    "date": "2015-6-23",
    "actual_mean_temp": 76,
    "actual_min_temp": 68,
    "actual_max_temp": 83,
    "actual_precipitation": 0,
    "location": "IND"
  },
  {
    "": 1088,
    "date": "2015-6-24",
    "actual_mean_temp": 71,
    "actual_min_temp": 62,
    "actual_max_temp": 80,
    "actual_precipitation": 0,
    "location": "IND"
  },
  {
    "": 1089,
    "date": "2015-6-25",
    "actual_mean_temp": 75,
    "actual_min_temp": 66,
    "actual_max_temp": 83,
    "actual_precipitation": 0.85,
    "location": "IND"
  },
  {
    "": 1090,
    "date": "2015-6-26",
    "actual_mean_temp": 71,
    "actual_min_temp": 66,
    "actual_max_temp": 76,
    "actual_precipitation": 1.57,
    "location": "IND"
  },
  {
    "": 1091,
    "date": "2015-6-27",
    "actual_mean_temp": 66,
    "actual_min_temp": 60,
    "actual_max_temp": 72,
    "actual_precipitation": 0,
    "location": "IND"
  },
  {
    "": 1092,
    "date": "2015-6-28",
    "actual_mean_temp": 67,
    "actual_min_temp": 55,
    "actual_max_temp": 78,
    "actual_precipitation": 0.09,
    "location": "IND"
  },
  {
    "": 1093,
    "date": "2015-6-29",
    "actual_mean_temp": 70,
    "actual_min_temp": 63,
    "actual_max_temp": 77,
    "actual_precipitation": 0.21,
    "location": "IND"
  },
  {
    "": 1094,
    "date": "2015-6-30",
    "actual_mean_temp": 73,
    "actual_min_temp": 64,
    "actual_max_temp": 82,
    "actual_precipitation": 0,
    "location": "IND"
  },
  {
    "": 1095,
    "date": "2014-7-1",
    "actual_mean_temp": 82,
    "actual_min_temp": 72,
    "actual_max_temp": 91,
    "actual_precipitation": 0,
    "location": "JAX"
  },
  {
    "": 1096,
    "date": "2014-7-2",
    "actual_mean_temp": 81,
    "actual_min_temp": 73,
    "actual_max_temp": 89,
    "actual_precipitation": 0,
    "location": "JAX"
  },
  {
    "": 1097,
    "date": "2014-7-3",
    "actual_mean_temp": 84,
    "actual_min_temp": 71,
    "actual_max_temp": 96,
    "actual_precipitation": 0.41,
    "location": "JAX"
  },
  {
    "": 1098,
    "date": "2014-7-4",
    "actual_mean_temp": 81,
    "actual_min_temp": 70,
    "actual_max_temp": 91,
    "actual_precipitation": 0,
    "location": "JAX"
  },
  {
    "": 1099,
    "date": "2014-7-5",
    "actual_mean_temp": 82,
    "actual_min_temp": 73,
    "actual_max_temp": 90,
    "actual_precipitation": 0.01,
    "location": "JAX"
  },
  {
    "": 1100,
    "date": "2014-7-6",
    "actual_mean_temp": 79,
    "actual_min_temp": 70,
    "actual_max_temp": 88,
    "actual_precipitation": 0,
    "location": "JAX"
  },
  {
    "": 1101,
    "date": "2014-7-7",
    "actual_mean_temp": 81,
    "actual_min_temp": 70,
    "actual_max_temp": 92,
    "actual_precipitation": 0,
    "location": "JAX"
  },
  {
    "": 1102,
    "date": "2014-7-8",
    "actual_mean_temp": 82,
    "actual_min_temp": 72,
    "actual_max_temp": 91,
    "actual_precipitation": 0,
    "location": "JAX"
  },
  {
    "": 1103,
    "date": "2014-7-9",
    "actual_mean_temp": 83,
    "actual_min_temp": 71,
    "actual_max_temp": 94,
    "actual_precipitation": 0,
    "location": "JAX"
  },
  {
    "": 1104,
    "date": "2014-7-10",
    "actual_mean_temp": 82,
    "actual_min_temp": 73,
    "actual_max_temp": 91,
    "actual_precipitation": 0.31,
    "location": "JAX"
  },
  {
    "": 1105,
    "date": "2014-7-11",
    "actual_mean_temp": 81,
    "actual_min_temp": 72,
    "actual_max_temp": 89,
    "actual_precipitation": 0.27,
    "location": "JAX"
  },
  {
    "": 1106,
    "date": "2014-7-12",
    "actual_mean_temp": 76,
    "actual_min_temp": 72,
    "actual_max_temp": 79,
    "actual_precipitation": 0.38,
    "location": "JAX"
  },
  {
    "": 1107,
    "date": "2014-7-13",
    "actual_mean_temp": 80,
    "actual_min_temp": 71,
    "actual_max_temp": 88,
    "actual_precipitation": 0.02,
    "location": "JAX"
  },
  {
    "": 1108,
    "date": "2014-7-14",
    "actual_mean_temp": 83,
    "actual_min_temp": 73,
    "actual_max_temp": 92,
    "actual_precipitation": 0,
    "location": "JAX"
  },
  {
    "": 1109,
    "date": "2014-7-15",
    "actual_mean_temp": 82,
    "actual_min_temp": 72,
    "actual_max_temp": 91,
    "actual_precipitation": 0,
    "location": "JAX"
  },
  {
    "": 1110,
    "date": "2014-7-16",
    "actual_mean_temp": 81,
    "actual_min_temp": 72,
    "actual_max_temp": 89,
    "actual_precipitation": 0.62,
    "location": "JAX"
  },
  {
    "": 1111,
    "date": "2014-7-17",
    "actual_mean_temp": 79,
    "actual_min_temp": 69,
    "actual_max_temp": 89,
    "actual_precipitation": 0,
    "location": "JAX"
  },
  {
    "": 1112,
    "date": "2014-7-18",
    "actual_mean_temp": 79,
    "actual_min_temp": 71,
    "actual_max_temp": 87,
    "actual_precipitation": 0.71,
    "location": "JAX"
  },
  {
    "": 1113,
    "date": "2014-7-19",
    "actual_mean_temp": 82,
    "actual_min_temp": 74,
    "actual_max_temp": 89,
    "actual_precipitation": 0,
    "location": "JAX"
  },
  {
    "": 1114,
    "date": "2014-7-20",
    "actual_mean_temp": 83,
    "actual_min_temp": 73,
    "actual_max_temp": 92,
    "actual_precipitation": 0,
    "location": "JAX"
  },
  {
    "": 1115,
    "date": "2014-7-21",
    "actual_mean_temp": 81,
    "actual_min_temp": 73,
    "actual_max_temp": 88,
    "actual_precipitation": 0,
    "location": "JAX"
  },
  {
    "": 1116,
    "date": "2014-7-22",
    "actual_mean_temp": 81,
    "actual_min_temp": 72,
    "actual_max_temp": 89,
    "actual_precipitation": 0,
    "location": "JAX"
  },
  {
    "": 1117,
    "date": "2014-7-23",
    "actual_mean_temp": 83,
    "actual_min_temp": 72,
    "actual_max_temp": 93,
    "actual_precipitation": 0,
    "location": "JAX"
  },
  {
    "": 1118,
    "date": "2014-7-24",
    "actual_mean_temp": 83,
    "actual_min_temp": 72,
    "actual_max_temp": 93,
    "actual_precipitation": 0,
    "location": "JAX"
  },
  {
    "": 1119,
    "date": "2014-7-25",
    "actual_mean_temp": 84,
    "actual_min_temp": 74,
    "actual_max_temp": 94,
    "actual_precipitation": 0.02,
    "location": "JAX"
  },
  {
    "": 1120,
    "date": "2014-7-26",
    "actual_mean_temp": 83,
    "actual_min_temp": 73,
    "actual_max_temp": 92,
    "actual_precipitation": 0,
    "location": "JAX"
  },
  {
    "": 1121,
    "date": "2014-7-27",
    "actual_mean_temp": 86,
    "actual_min_temp": 76,
    "actual_max_temp": 95,
    "actual_precipitation": 0,
    "location": "JAX"
  },
  {
    "": 1122,
    "date": "2014-7-28",
    "actual_mean_temp": 87,
    "actual_min_temp": 78,
    "actual_max_temp": 96,
    "actual_precipitation": 0,
    "location": "JAX"
  },
  {
    "": 1123,
    "date": "2014-7-29",
    "actual_mean_temp": 85,
    "actual_min_temp": 75,
    "actual_max_temp": 94,
    "actual_precipitation": 0,
    "location": "JAX"
  },
  {
    "": 1124,
    "date": "2014-7-30",
    "actual_mean_temp": 81,
    "actual_min_temp": 70,
    "actual_max_temp": 92,
    "actual_precipitation": 0,
    "location": "JAX"
  },
  {
    "": 1125,
    "date": "2014-7-31",
    "actual_mean_temp": 81,
    "actual_min_temp": 69,
    "actual_max_temp": 93,
    "actual_precipitation": 0,
    "location": "JAX"
  },
  {
    "": 1126,
    "date": "2014-8-1",
    "actual_mean_temp": 84,
    "actual_min_temp": 74,
    "actual_max_temp": 93,
    "actual_precipitation": 0,
    "location": "JAX"
  },
  {
    "": 1127,
    "date": "2014-8-2",
    "actual_mean_temp": 82,
    "actual_min_temp": 73,
    "actual_max_temp": 91,
    "actual_precipitation": 0.59,
    "location": "JAX"
  },
  {
    "": 1128,
    "date": "2014-8-3",
    "actual_mean_temp": 81,
    "actual_min_temp": 73,
    "actual_max_temp": 89,
    "actual_precipitation": 0.7,
    "location": "JAX"
  },
  {
    "": 1129,
    "date": "2014-8-4",
    "actual_mean_temp": 80,
    "actual_min_temp": 75,
    "actual_max_temp": 85,
    "actual_precipitation": 0.01,
    "location": "JAX"
  },
  {
    "": 1130,
    "date": "2014-8-5",
    "actual_mean_temp": 83,
    "actual_min_temp": 74,
    "actual_max_temp": 92,
    "actual_precipitation": 0,
    "location": "JAX"
  },
  {
    "": 1131,
    "date": "2014-8-6",
    "actual_mean_temp": 84,
    "actual_min_temp": 74,
    "actual_max_temp": 94,
    "actual_precipitation": 0,
    "location": "JAX"
  },
  {
    "": 1132,
    "date": "2014-8-7",
    "actual_mean_temp": 85,
    "actual_min_temp": 74,
    "actual_max_temp": 95,
    "actual_precipitation": 0,
    "location": "JAX"
  },
  {
    "": 1133,
    "date": "2014-8-8",
    "actual_mean_temp": 84,
    "actual_min_temp": 74,
    "actual_max_temp": 94,
    "actual_precipitation": 0,
    "location": "JAX"
  },
  {
    "": 1134,
    "date": "2014-8-9",
    "actual_mean_temp": 84,
    "actual_min_temp": 73,
    "actual_max_temp": 95,
    "actual_precipitation": 0,
    "location": "JAX"
  },
  {
    "": 1135,
    "date": "2014-8-10",
    "actual_mean_temp": 83,
    "actual_min_temp": 74,
    "actual_max_temp": 92,
    "actual_precipitation": 0,
    "location": "JAX"
  },
  {
    "": 1136,
    "date": "2014-8-11",
    "actual_mean_temp": 82,
    "actual_min_temp": 72,
    "actual_max_temp": 92,
    "actual_precipitation": 0.7,
    "location": "JAX"
  },
  {
    "": 1137,
    "date": "2014-8-12",
    "actual_mean_temp": 82,
    "actual_min_temp": 75,
    "actual_max_temp": 89,
    "actual_precipitation": 0.01,
    "location": "JAX"
  },
  {
    "": 1138,
    "date": "2014-8-13",
    "actual_mean_temp": 80,
    "actual_min_temp": 74,
    "actual_max_temp": 86,
    "actual_precipitation": 0.08,
    "location": "JAX"
  },
  {
    "": 1139,
    "date": "2014-8-14",
    "actual_mean_temp": 82,
    "actual_min_temp": 73,
    "actual_max_temp": 91,
    "actual_precipitation": 0.04,
    "location": "JAX"
  },
  {
    "": 1140,
    "date": "2014-8-15",
    "actual_mean_temp": 81,
    "actual_min_temp": 73,
    "actual_max_temp": 89,
    "actual_precipitation": 0,
    "location": "JAX"
  },
  {
    "": 1141,
    "date": "2014-8-16",
    "actual_mean_temp": 83,
    "actual_min_temp": 73,
    "actual_max_temp": 93,
    "actual_precipitation": 0,
    "location": "JAX"
  },
  {
    "": 1142,
    "date": "2014-8-17",
    "actual_mean_temp": 83,
    "actual_min_temp": 73,
    "actual_max_temp": 93,
    "actual_precipitation": 0.25,
    "location": "JAX"
  },
  {
    "": 1143,
    "date": "2014-8-18",
    "actual_mean_temp": 84,
    "actual_min_temp": 74,
    "actual_max_temp": 93,
    "actual_precipitation": 0.02,
    "location": "JAX"
  },
  {
    "": 1144,
    "date": "2014-8-19",
    "actual_mean_temp": 84,
    "actual_min_temp": 73,
    "actual_max_temp": 94,
    "actual_precipitation": 0,
    "location": "JAX"
  },
  {
    "": 1145,
    "date": "2014-8-20",
    "actual_mean_temp": 84,
    "actual_min_temp": 73,
    "actual_max_temp": 95,
    "actual_precipitation": 0,
    "location": "JAX"
  },
  {
    "": 1146,
    "date": "2014-8-21",
    "actual_mean_temp": 85,
    "actual_min_temp": 73,
    "actual_max_temp": 97,
    "actual_precipitation": 0,
    "location": "JAX"
  },
  {
    "": 1147,
    "date": "2014-8-22",
    "actual_mean_temp": 86,
    "actual_min_temp": 73,
    "actual_max_temp": 99,
    "actual_precipitation": 0,
    "location": "JAX"
  },
  {
    "": 1148,
    "date": "2014-8-23",
    "actual_mean_temp": 87,
    "actual_min_temp": 75,
    "actual_max_temp": 98,
    "actual_precipitation": 0,
    "location": "JAX"
  },
  {
    "": 1149,
    "date": "2014-8-24",
    "actual_mean_temp": 82,
    "actual_min_temp": 73,
    "actual_max_temp": 91,
    "actual_precipitation": 0,
    "location": "JAX"
  },
  {
    "": 1150,
    "date": "2014-8-25",
    "actual_mean_temp": 80,
    "actual_min_temp": 74,
    "actual_max_temp": 86,
    "actual_precipitation": 0.49,
    "location": "JAX"
  },
  {
    "": 1151,
    "date": "2014-8-26",
    "actual_mean_temp": 78,
    "actual_min_temp": 70,
    "actual_max_temp": 85,
    "actual_precipitation": 0.14,
    "location": "JAX"
  },
  {
    "": 1152,
    "date": "2014-8-27",
    "actual_mean_temp": 77,
    "actual_min_temp": 66,
    "actual_max_temp": 88,
    "actual_precipitation": 0,
    "location": "JAX"
  },
  {
    "": 1153,
    "date": "2014-8-28",
    "actual_mean_temp": 77,
    "actual_min_temp": 64,
    "actual_max_temp": 90,
    "actual_precipitation": 0,
    "location": "JAX"
  },
  {
    "": 1154,
    "date": "2014-8-29",
    "actual_mean_temp": 80,
    "actual_min_temp": 67,
    "actual_max_temp": 92,
    "actual_precipitation": 0,
    "location": "JAX"
  },
  {
    "": 1155,
    "date": "2014-8-30",
    "actual_mean_temp": 82,
    "actual_min_temp": 72,
    "actual_max_temp": 91,
    "actual_precipitation": 0,
    "location": "JAX"
  },
  {
    "": 1156,
    "date": "2014-8-31",
    "actual_mean_temp": 82,
    "actual_min_temp": 71,
    "actual_max_temp": 93,
    "actual_precipitation": 0,
    "location": "JAX"
  },
  {
    "": 1157,
    "date": "2014-9-1",
    "actual_mean_temp": 84,
    "actual_min_temp": 73,
    "actual_max_temp": 94,
    "actual_precipitation": 0,
    "location": "JAX"
  },
  {
    "": 1158,
    "date": "2014-9-2",
    "actual_mean_temp": 83,
    "actual_min_temp": 73,
    "actual_max_temp": 92,
    "actual_precipitation": 0.1,
    "location": "JAX"
  },
  {
    "": 1159,
    "date": "2014-9-3",
    "actual_mean_temp": 81,
    "actual_min_temp": 70,
    "actual_max_temp": 91,
    "actual_precipitation": 0,
    "location": "JAX"
  },
  {
    "": 1160,
    "date": "2014-9-4",
    "actual_mean_temp": 79,
    "actual_min_temp": 70,
    "actual_max_temp": 88,
    "actual_precipitation": 0,
    "location": "JAX"
  },
  {
    "": 1161,
    "date": "2014-9-5",
    "actual_mean_temp": 79,
    "actual_min_temp": 70,
    "actual_max_temp": 88,
    "actual_precipitation": 1.27,
    "location": "JAX"
  },
  {
    "": 1162,
    "date": "2014-9-6",
    "actual_mean_temp": 80,
    "actual_min_temp": 73,
    "actual_max_temp": 86,
    "actual_precipitation": 0.58,
    "location": "JAX"
  },
  {
    "": 1163,
    "date": "2014-9-7",
    "actual_mean_temp": 76,
    "actual_min_temp": 73,
    "actual_max_temp": 78,
    "actual_precipitation": 1.31,
    "location": "JAX"
  },
  {
    "": 1164,
    "date": "2014-9-8",
    "actual_mean_temp": 80,
    "actual_min_temp": 71,
    "actual_max_temp": 88,
    "actual_precipitation": 1.42,
    "location": "JAX"
  },
  {
    "": 1165,
    "date": "2014-9-9",
    "actual_mean_temp": 79,
    "actual_min_temp": 71,
    "actual_max_temp": 86,
    "actual_precipitation": 0.55,
    "location": "JAX"
  },
  {
    "": 1166,
    "date": "2014-9-10",
    "actual_mean_temp": 80,
    "actual_min_temp": 71,
    "actual_max_temp": 88,
    "actual_precipitation": 0,
    "location": "JAX"
  },
  {
    "": 1167,
    "date": "2014-9-11",
    "actual_mean_temp": 80,
    "actual_min_temp": 70,
    "actual_max_temp": 90,
    "actual_precipitation": 0,
    "location": "JAX"
  },
  {
    "": 1168,
    "date": "2014-9-12",
    "actual_mean_temp": 81,
    "actual_min_temp": 71,
    "actual_max_temp": 90,
    "actual_precipitation": 0,
    "location": "JAX"
  },
  {
    "": 1169,
    "date": "2014-9-13",
    "actual_mean_temp": 82,
    "actual_min_temp": 72,
    "actual_max_temp": 91,
    "actual_precipitation": 0,
    "location": "JAX"
  },
  {
    "": 1170,
    "date": "2014-9-14",
    "actual_mean_temp": 82,
    "actual_min_temp": 72,
    "actual_max_temp": 91,
    "actual_precipitation": 0,
    "location": "JAX"
  },
  {
    "": 1171,
    "date": "2014-9-15",
    "actual_mean_temp": 82,
    "actual_min_temp": 72,
    "actual_max_temp": 92,
    "actual_precipitation": 0.12,
    "location": "JAX"
  },
  {
    "": 1172,
    "date": "2014-9-16",
    "actual_mean_temp": 77,
    "actual_min_temp": 72,
    "actual_max_temp": 82,
    "actual_precipitation": 0.74,
    "location": "JAX"
  },
  {
    "": 1173,
    "date": "2014-9-17",
    "actual_mean_temp": 80,
    "actual_min_temp": 71,
    "actual_max_temp": 88,
    "actual_precipitation": 0,
    "location": "JAX"
  },
  {
    "": 1174,
    "date": "2014-9-18",
    "actual_mean_temp": 81,
    "actual_min_temp": 69,
    "actual_max_temp": 92,
    "actual_precipitation": 0,
    "location": "JAX"
  },
  {
    "": 1175,
    "date": "2014-9-19",
    "actual_mean_temp": 77,
    "actual_min_temp": 70,
    "actual_max_temp": 84,
    "actual_precipitation": 0.37,
    "location": "JAX"
  },
  {
    "": 1176,
    "date": "2014-9-20",
    "actual_mean_temp": 73,
    "actual_min_temp": 68,
    "actual_max_temp": 78,
    "actual_precipitation": 0.23,
    "location": "JAX"
  },
  {
    "": 1177,
    "date": "2014-9-21",
    "actual_mean_temp": 76,
    "actual_min_temp": 64,
    "actual_max_temp": 87,
    "actual_precipitation": 0,
    "location": "JAX"
  },
  {
    "": 1178,
    "date": "2014-9-22",
    "actual_mean_temp": 76,
    "actual_min_temp": 62,
    "actual_max_temp": 89,
    "actual_precipitation": 0.01,
    "location": "JAX"
  },
  {
    "": 1179,
    "date": "2014-9-23",
    "actual_mean_temp": 75,
    "actual_min_temp": 69,
    "actual_max_temp": 81,
    "actual_precipitation": 0.05,
    "location": "JAX"
  },
  {
    "": 1180,
    "date": "2014-9-24",
    "actual_mean_temp": 68,
    "actual_min_temp": 63,
    "actual_max_temp": 72,
    "actual_precipitation": 0,
    "location": "JAX"
  },
  {
    "": 1181,
    "date": "2014-9-25",
    "actual_mean_temp": 71,
    "actual_min_temp": 63,
    "actual_max_temp": 78,
    "actual_precipitation": 0,
    "location": "JAX"
  },
  {
    "": 1182,
    "date": "2014-9-26",
    "actual_mean_temp": 74,
    "actual_min_temp": 66,
    "actual_max_temp": 82,
    "actual_precipitation": 0,
    "location": "JAX"
  },
  {
    "": 1183,
    "date": "2014-9-27",
    "actual_mean_temp": 75,
    "actual_min_temp": 71,
    "actual_max_temp": 79,
    "actual_precipitation": 0,
    "location": "JAX"
  },
  {
    "": 1184,
    "date": "2014-9-28",
    "actual_mean_temp": 80,
    "actual_min_temp": 73,
    "actual_max_temp": 86,
    "actual_precipitation": 0,
    "location": "JAX"
  },
  {
    "": 1185,
    "date": "2014-9-29",
    "actual_mean_temp": 76,
    "actual_min_temp": 72,
    "actual_max_temp": 80,
    "actual_precipitation": 3.05,
    "location": "JAX"
  },
  {
    "": 1186,
    "date": "2014-9-30",
    "actual_mean_temp": 74,
    "actual_min_temp": 70,
    "actual_max_temp": 77,
    "actual_precipitation": 0,
    "location": "JAX"
  },
  {
    "": 1187,
    "date": "2014-10-1",
    "actual_mean_temp": 76,
    "actual_min_temp": 70,
    "actual_max_temp": 82,
    "actual_precipitation": 0,
    "location": "JAX"
  },
  {
    "": 1188,
    "date": "2014-10-2",
    "actual_mean_temp": 78,
    "actual_min_temp": 70,
    "actual_max_temp": 85,
    "actual_precipitation": 0,
    "location": "JAX"
  },
  {
    "": 1189,
    "date": "2014-10-3",
    "actual_mean_temp": 78,
    "actual_min_temp": 68,
    "actual_max_temp": 88,
    "actual_precipitation": 0.61,
    "location": "JAX"
  },
  {
    "": 1190,
    "date": "2014-10-4",
    "actual_mean_temp": 68,
    "actual_min_temp": 56,
    "actual_max_temp": 80,
    "actual_precipitation": 0.15,
    "location": "JAX"
  },
  {
    "": 1191,
    "date": "2014-10-5",
    "actual_mean_temp": 60,
    "actual_min_temp": 47,
    "actual_max_temp": 73,
    "actual_precipitation": 0,
    "location": "JAX"
  },
  {
    "": 1192,
    "date": "2014-10-6",
    "actual_mean_temp": 64,
    "actual_min_temp": 50,
    "actual_max_temp": 78,
    "actual_precipitation": 0,
    "location": "JAX"
  },
  {
    "": 1193,
    "date": "2014-10-7",
    "actual_mean_temp": 72,
    "actual_min_temp": 60,
    "actual_max_temp": 84,
    "actual_precipitation": 0,
    "location": "JAX"
  },
  {
    "": 1194,
    "date": "2014-10-8",
    "actual_mean_temp": 76,
    "actual_min_temp": 63,
    "actual_max_temp": 89,
    "actual_precipitation": 0,
    "location": "JAX"
  },
  {
    "": 1195,
    "date": "2014-10-9",
    "actual_mean_temp": 76,
    "actual_min_temp": 64,
    "actual_max_temp": 88,
    "actual_precipitation": 0,
    "location": "JAX"
  },
  {
    "": 1196,
    "date": "2014-10-10",
    "actual_mean_temp": 76,
    "actual_min_temp": 65,
    "actual_max_temp": 87,
    "actual_precipitation": 0,
    "location": "JAX"
  },
  {
    "": 1197,
    "date": "2014-10-11",
    "actual_mean_temp": 75,
    "actual_min_temp": 62,
    "actual_max_temp": 88,
    "actual_precipitation": 0,
    "location": "JAX"
  },
  {
    "": 1198,
    "date": "2014-10-12",
    "actual_mean_temp": 74,
    "actual_min_temp": 62,
    "actual_max_temp": 86,
    "actual_precipitation": 0,
    "location": "JAX"
  },
  {
    "": 1199,
    "date": "2014-10-13",
    "actual_mean_temp": 76,
    "actual_min_temp": 66,
    "actual_max_temp": 86,
    "actual_precipitation": 0.03,
    "location": "JAX"
  },
  {
    "": 1200,
    "date": "2014-10-14",
    "actual_mean_temp": 79,
    "actual_min_temp": 70,
    "actual_max_temp": 88,
    "actual_precipitation": 1.04,
    "location": "JAX"
  },
  {
    "": 1201,
    "date": "2014-10-15",
    "actual_mean_temp": 69,
    "actual_min_temp": 59,
    "actual_max_temp": 78,
    "actual_precipitation": 0.04,
    "location": "JAX"
  },
  {
    "": 1202,
    "date": "2014-10-16",
    "actual_mean_temp": 66,
    "actual_min_temp": 53,
    "actual_max_temp": 78,
    "actual_precipitation": 0,
    "location": "JAX"
  },
  {
    "": 1203,
    "date": "2014-10-17",
    "actual_mean_temp": 66,
    "actual_min_temp": 52,
    "actual_max_temp": 80,
    "actual_precipitation": 0,
    "location": "JAX"
  },
  {
    "": 1204,
    "date": "2014-10-18",
    "actual_mean_temp": 69,
    "actual_min_temp": 54,
    "actual_max_temp": 84,
    "actual_precipitation": 0,
    "location": "JAX"
  },
  {
    "": 1205,
    "date": "2014-10-19",
    "actual_mean_temp": 67,
    "actual_min_temp": 57,
    "actual_max_temp": 76,
    "actual_precipitation": 0,
    "location": "JAX"
  },
  {
    "": 1206,
    "date": "2014-10-20",
    "actual_mean_temp": 69,
    "actual_min_temp": 56,
    "actual_max_temp": 82,
    "actual_precipitation": 0,
    "location": "JAX"
  },
  {
    "": 1207,
    "date": "2014-10-21",
    "actual_mean_temp": 71,
    "actual_min_temp": 59,
    "actual_max_temp": 83,
    "actual_precipitation": 0,
    "location": "JAX"
  },
  {
    "": 1208,
    "date": "2014-10-22",
    "actual_mean_temp": 63,
    "actual_min_temp": 52,
    "actual_max_temp": 74,
    "actual_precipitation": 0,
    "location": "JAX"
  },
  {
    "": 1209,
    "date": "2014-10-23",
    "actual_mean_temp": 61,
    "actual_min_temp": 49,
    "actual_max_temp": 73,
    "actual_precipitation": 0,
    "location": "JAX"
  },
  {
    "": 1210,
    "date": "2014-10-24",
    "actual_mean_temp": 61,
    "actual_min_temp": 46,
    "actual_max_temp": 75,
    "actual_precipitation": 0,
    "location": "JAX"
  },
  {
    "": 1211,
    "date": "2014-10-25",
    "actual_mean_temp": 62,
    "actual_min_temp": 47,
    "actual_max_temp": 77,
    "actual_precipitation": 0,
    "location": "JAX"
  },
  {
    "": 1212,
    "date": "2014-10-26",
    "actual_mean_temp": 65,
    "actual_min_temp": 47,
    "actual_max_temp": 83,
    "actual_precipitation": 0,
    "location": "JAX"
  },
  {
    "": 1213,
    "date": "2014-10-27",
    "actual_mean_temp": 71,
    "actual_min_temp": 54,
    "actual_max_temp": 87,
    "actual_precipitation": 0,
    "location": "JAX"
  },
  {
    "": 1214,
    "date": "2014-10-28",
    "actual_mean_temp": 70,
    "actual_min_temp": 55,
    "actual_max_temp": 84,
    "actual_precipitation": 0,
    "location": "JAX"
  },
  {
    "": 1215,
    "date": "2014-10-29",
    "actual_mean_temp": 72,
    "actual_min_temp": 58,
    "actual_max_temp": 85,
    "actual_precipitation": 0,
    "location": "JAX"
  },
  {
    "": 1216,
    "date": "2014-10-30",
    "actual_mean_temp": 70,
    "actual_min_temp": 59,
    "actual_max_temp": 81,
    "actual_precipitation": 0,
    "location": "JAX"
  },
  {
    "": 1217,
    "date": "2014-10-31",
    "actual_mean_temp": 63,
    "actual_min_temp": 50,
    "actual_max_temp": 75,
    "actual_precipitation": 0,
    "location": "JAX"
  },
  {
    "": 1218,
    "date": "2014-11-1",
    "actual_mean_temp": 50,
    "actual_min_temp": 42,
    "actual_max_temp": 57,
    "actual_precipitation": 0,
    "location": "JAX"
  },
  {
    "": 1219,
    "date": "2014-11-2",
    "actual_mean_temp": 50,
    "actual_min_temp": 37,
    "actual_max_temp": 62,
    "actual_precipitation": 0,
    "location": "JAX"
  },
  {
    "": 1220,
    "date": "2014-11-3",
    "actual_mean_temp": 52,
    "actual_min_temp": 36,
    "actual_max_temp": 68,
    "actual_precipitation": 0,
    "location": "JAX"
  },
  {
    "": 1221,
    "date": "2014-11-4",
    "actual_mean_temp": 61,
    "actual_min_temp": 47,
    "actual_max_temp": 74,
    "actual_precipitation": 0,
    "location": "JAX"
  },
  {
    "": 1222,
    "date": "2014-11-5",
    "actual_mean_temp": 67,
    "actual_min_temp": 56,
    "actual_max_temp": 78,
    "actual_precipitation": 0,
    "location": "JAX"
  },
  {
    "": 1223,
    "date": "2014-11-6",
    "actual_mean_temp": 69,
    "actual_min_temp": 56,
    "actual_max_temp": 82,
    "actual_precipitation": 0,
    "location": "JAX"
  },
  {
    "": 1224,
    "date": "2014-11-7",
    "actual_mean_temp": 55,
    "actual_min_temp": 43,
    "actual_max_temp": 67,
    "actual_precipitation": 0,
    "location": "JAX"
  },
  {
    "": 1225,
    "date": "2014-11-8",
    "actual_mean_temp": 56,
    "actual_min_temp": 41,
    "actual_max_temp": 70,
    "actual_precipitation": 0,
    "location": "JAX"
  },
  {
    "": 1226,
    "date": "2014-11-9",
    "actual_mean_temp": 62,
    "actual_min_temp": 54,
    "actual_max_temp": 70,
    "actual_precipitation": 0,
    "location": "JAX"
  },
  {
    "": 1227,
    "date": "2014-11-10",
    "actual_mean_temp": 59,
    "actual_min_temp": 52,
    "actual_max_temp": 65,
    "actual_precipitation": 0,
    "location": "JAX"
  },
  {
    "": 1228,
    "date": "2014-11-11",
    "actual_mean_temp": 66,
    "actual_min_temp": 52,
    "actual_max_temp": 80,
    "actual_precipitation": 0,
    "location": "JAX"
  },
  {
    "": 1229,
    "date": "2014-11-12",
    "actual_mean_temp": 61,
    "actual_min_temp": 45,
    "actual_max_temp": 77,
    "actual_precipitation": 0,
    "location": "JAX"
  },
  {
    "": 1230,
    "date": "2014-11-13",
    "actual_mean_temp": 64,
    "actual_min_temp": 55,
    "actual_max_temp": 73,
    "actual_precipitation": 0,
    "location": "JAX"
  },
  {
    "": 1231,
    "date": "2014-11-14",
    "actual_mean_temp": 53,
    "actual_min_temp": 44,
    "actual_max_temp": 61,
    "actual_precipitation": 0,
    "location": "JAX"
  },
  {
    "": 1232,
    "date": "2014-11-15",
    "actual_mean_temp": 50,
    "actual_min_temp": 40,
    "actual_max_temp": 60,
    "actual_precipitation": 0,
    "location": "JAX"
  },
  {
    "": 1233,
    "date": "2014-11-16",
    "actual_mean_temp": 62,
    "actual_min_temp": 47,
    "actual_max_temp": 77,
    "actual_precipitation": 0,
    "location": "JAX"
  },
  {
    "": 1234,
    "date": "2014-11-17",
    "actual_mean_temp": 67,
    "actual_min_temp": 52,
    "actual_max_temp": 81,
    "actual_precipitation": 0.95,
    "location": "JAX"
  },
  {
    "": 1235,
    "date": "2014-11-18",
    "actual_mean_temp": 43,
    "actual_min_temp": 33,
    "actual_max_temp": 52,
    "actual_precipitation": 0,
    "location": "JAX"
  },
  {
    "": 1236,
    "date": "2014-11-19",
    "actual_mean_temp": 40,
    "actual_min_temp": 27,
    "actual_max_temp": 53,
    "actual_precipitation": 0,
    "location": "JAX"
  },
  {
    "": 1237,
    "date": "2014-11-20",
    "actual_mean_temp": 45,
    "actual_min_temp": 24,
    "actual_max_temp": 65,
    "actual_precipitation": 0,
    "location": "JAX"
  },
  {
    "": 1238,
    "date": "2014-11-21",
    "actual_mean_temp": 51,
    "actual_min_temp": 33,
    "actual_max_temp": 68,
    "actual_precipitation": 0,
    "location": "JAX"
  },
  {
    "": 1239,
    "date": "2014-11-22",
    "actual_mean_temp": 62,
    "actual_min_temp": 51,
    "actual_max_temp": 72,
    "actual_precipitation": 0,
    "location": "JAX"
  },
  {
    "": 1240,
    "date": "2014-11-23",
    "actual_mean_temp": 73,
    "actual_min_temp": 68,
    "actual_max_temp": 78,
    "actual_precipitation": 1.11,
    "location": "JAX"
  },
  {
    "": 1241,
    "date": "2014-11-24",
    "actual_mean_temp": 78,
    "actual_min_temp": 70,
    "actual_max_temp": 86,
    "actual_precipitation": 0,
    "location": "JAX"
  },
  {
    "": 1242,
    "date": "2014-11-25",
    "actual_mean_temp": 66,
    "actual_min_temp": 61,
    "actual_max_temp": 71,
    "actual_precipitation": 1.69,
    "location": "JAX"
  },
  {
    "": 1243,
    "date": "2014-11-26",
    "actual_mean_temp": 52,
    "actual_min_temp": 41,
    "actual_max_temp": 63,
    "actual_precipitation": 0.21,
    "location": "JAX"
  },
  {
    "": 1244,
    "date": "2014-11-27",
    "actual_mean_temp": 51,
    "actual_min_temp": 40,
    "actual_max_temp": 61,
    "actual_precipitation": 0,
    "location": "JAX"
  },
  {
    "": 1245,
    "date": "2014-11-28",
    "actual_mean_temp": 44,
    "actual_min_temp": 35,
    "actual_max_temp": 53,
    "actual_precipitation": 0,
    "location": "JAX"
  },
  {
    "": 1246,
    "date": "2014-11-29",
    "actual_mean_temp": 51,
    "actual_min_temp": 34,
    "actual_max_temp": 68,
    "actual_precipitation": 0,
    "location": "JAX"
  },
  {
    "": 1247,
    "date": "2014-11-30",
    "actual_mean_temp": 58,
    "actual_min_temp": 41,
    "actual_max_temp": 74,
    "actual_precipitation": 0,
    "location": "JAX"
  },
  {
    "": 1248,
    "date": "2014-12-1",
    "actual_mean_temp": 63,
    "actual_min_temp": 49,
    "actual_max_temp": 77,
    "actual_precipitation": 0,
    "location": "JAX"
  },
  {
    "": 1249,
    "date": "2014-12-2",
    "actual_mean_temp": 66,
    "actual_min_temp": 52,
    "actual_max_temp": 79,
    "actual_precipitation": 0,
    "location": "JAX"
  },
  {
    "": 1250,
    "date": "2014-12-3",
    "actual_mean_temp": 66,
    "actual_min_temp": 56,
    "actual_max_temp": 76,
    "actual_precipitation": 0,
    "location": "JAX"
  },
  {
    "": 1251,
    "date": "2014-12-4",
    "actual_mean_temp": 65,
    "actual_min_temp": 54,
    "actual_max_temp": 76,
    "actual_precipitation": 0,
    "location": "JAX"
  },
  {
    "": 1252,
    "date": "2014-12-5",
    "actual_mean_temp": 63,
    "actual_min_temp": 60,
    "actual_max_temp": 65,
    "actual_precipitation": 0,
    "location": "JAX"
  },
  {
    "": 1253,
    "date": "2014-12-6",
    "actual_mean_temp": 70,
    "actual_min_temp": 60,
    "actual_max_temp": 79,
    "actual_precipitation": 0,
    "location": "JAX"
  },
  {
    "": 1254,
    "date": "2014-12-7",
    "actual_mean_temp": 59,
    "actual_min_temp": 54,
    "actual_max_temp": 63,
    "actual_precipitation": 0.01,
    "location": "JAX"
  },
  {
    "": 1255,
    "date": "2014-12-8",
    "actual_mean_temp": 53,
    "actual_min_temp": 49,
    "actual_max_temp": 56,
    "actual_precipitation": 0,
    "location": "JAX"
  },
  {
    "": 1256,
    "date": "2014-12-9",
    "actual_mean_temp": 50,
    "actual_min_temp": 40,
    "actual_max_temp": 60,
    "actual_precipitation": 0,
    "location": "JAX"
  },
  {
    "": 1257,
    "date": "2014-12-10",
    "actual_mean_temp": 48,
    "actual_min_temp": 36,
    "actual_max_temp": 59,
    "actual_precipitation": 0,
    "location": "JAX"
  },
  {
    "": 1258,
    "date": "2014-12-11",
    "actual_mean_temp": 47,
    "actual_min_temp": 34,
    "actual_max_temp": 59,
    "actual_precipitation": 0,
    "location": "JAX"
  },
  {
    "": 1259,
    "date": "2014-12-12",
    "actual_mean_temp": 50,
    "actual_min_temp": 35,
    "actual_max_temp": 64,
    "actual_precipitation": 0,
    "location": "JAX"
  },
  {
    "": 1260,
    "date": "2014-12-13",
    "actual_mean_temp": 50,
    "actual_min_temp": 31,
    "actual_max_temp": 68,
    "actual_precipitation": 0,
    "location": "JAX"
  },
  {
    "": 1261,
    "date": "2014-12-14",
    "actual_mean_temp": 51,
    "actual_min_temp": 31,
    "actual_max_temp": 71,
    "actual_precipitation": 0,
    "location": "JAX"
  },
  {
    "": 1262,
    "date": "2014-12-15",
    "actual_mean_temp": 52,
    "actual_min_temp": 34,
    "actual_max_temp": 70,
    "actual_precipitation": 0,
    "location": "JAX"
  },
  {
    "": 1263,
    "date": "2014-12-16",
    "actual_mean_temp": 55,
    "actual_min_temp": 34,
    "actual_max_temp": 76,
    "actual_precipitation": 0,
    "location": "JAX"
  },
  {
    "": 1264,
    "date": "2014-12-17",
    "actual_mean_temp": 53,
    "actual_min_temp": 40,
    "actual_max_temp": 66,
    "actual_precipitation": 0,
    "location": "JAX"
  },
  {
    "": 1265,
    "date": "2014-12-18",
    "actual_mean_temp": 52,
    "actual_min_temp": 39,
    "actual_max_temp": 64,
    "actual_precipitation": 0,
    "location": "JAX"
  },
  {
    "": 1266,
    "date": "2014-12-19",
    "actual_mean_temp": 56,
    "actual_min_temp": 41,
    "actual_max_temp": 70,
    "actual_precipitation": 0,
    "location": "JAX"
  },
  {
    "": 1267,
    "date": "2014-12-20",
    "actual_mean_temp": 60,
    "actual_min_temp": 51,
    "actual_max_temp": 69,
    "actual_precipitation": 0,
    "location": "JAX"
  },
  {
    "": 1268,
    "date": "2014-12-21",
    "actual_mean_temp": 57,
    "actual_min_temp": 56,
    "actual_max_temp": 58,
    "actual_precipitation": 0.16,
    "location": "JAX"
  },
  {
    "": 1269,
    "date": "2014-12-22",
    "actual_mean_temp": 63,
    "actual_min_temp": 56,
    "actual_max_temp": 70,
    "actual_precipitation": 2.59,
    "location": "JAX"
  },
  {
    "": 1270,
    "date": "2014-12-23",
    "actual_mean_temp": 68,
    "actual_min_temp": 62,
    "actual_max_temp": 74,
    "actual_precipitation": 0.74,
    "location": "JAX"
  },
  {
    "": 1271,
    "date": "2014-12-24",
    "actual_mean_temp": 72,
    "actual_min_temp": 64,
    "actual_max_temp": 79,
    "actual_precipitation": 0.22,
    "location": "JAX"
  },
  {
    "": 1272,
    "date": "2014-12-25",
    "actual_mean_temp": 53,
    "actual_min_temp": 42,
    "actual_max_temp": 64,
    "actual_precipitation": 0,
    "location": "JAX"
  },
  {
    "": 1273,
    "date": "2014-12-26",
    "actual_mean_temp": 53,
    "actual_min_temp": 38,
    "actual_max_temp": 67,
    "actual_precipitation": 0,
    "location": "JAX"
  },
  {
    "": 1274,
    "date": "2014-12-27",
    "actual_mean_temp": 62,
    "actual_min_temp": 49,
    "actual_max_temp": 74,
    "actual_precipitation": 0,
    "location": "JAX"
  },
  {
    "": 1275,
    "date": "2014-12-28",
    "actual_mean_temp": 68,
    "actual_min_temp": 54,
    "actual_max_temp": 82,
    "actual_precipitation": 0,
    "location": "JAX"
  },
  {
    "": 1276,
    "date": "2014-12-29",
    "actual_mean_temp": 69,
    "actual_min_temp": 58,
    "actual_max_temp": 79,
    "actual_precipitation": 0.02,
    "location": "JAX"
  },
  {
    "": 1277,
    "date": "2014-12-30",
    "actual_mean_temp": 64,
    "actual_min_temp": 56,
    "actual_max_temp": 71,
    "actual_precipitation": 0,
    "location": "JAX"
  },
  {
    "": 1278,
    "date": "2014-12-31",
    "actual_mean_temp": 53,
    "actual_min_temp": 49,
    "actual_max_temp": 57,
    "actual_precipitation": 0,
    "location": "JAX"
  },
  {
    "": 1279,
    "date": "2015-1-1",
    "actual_mean_temp": 55,
    "actual_min_temp": 48,
    "actual_max_temp": 61,
    "actual_precipitation": 0,
    "location": "JAX"
  },
  {
    "": 1280,
    "date": "2015-1-2",
    "actual_mean_temp": 53,
    "actual_min_temp": 48,
    "actual_max_temp": 57,
    "actual_precipitation": 0,
    "location": "JAX"
  },
  {
    "": 1281,
    "date": "2015-1-3",
    "actual_mean_temp": 71,
    "actual_min_temp": 60,
    "actual_max_temp": 81,
    "actual_precipitation": 0,
    "location": "JAX"
  },
  {
    "": 1282,
    "date": "2015-1-4",
    "actual_mean_temp": 72,
    "actual_min_temp": 65,
    "actual_max_temp": 79,
    "actual_precipitation": 0.27,
    "location": "JAX"
  },
  {
    "": 1283,
    "date": "2015-1-5",
    "actual_mean_temp": 56,
    "actual_min_temp": 45,
    "actual_max_temp": 66,
    "actual_precipitation": 0,
    "location": "JAX"
  },
  {
    "": 1284,
    "date": "2015-1-6",
    "actual_mean_temp": 56,
    "actual_min_temp": 40,
    "actual_max_temp": 71,
    "actual_precipitation": 0,
    "location": "JAX"
  },
  {
    "": 1285,
    "date": "2015-1-7",
    "actual_mean_temp": 52,
    "actual_min_temp": 39,
    "actual_max_temp": 65,
    "actual_precipitation": 0,
    "location": "JAX"
  },
  {
    "": 1286,
    "date": "2015-1-8",
    "actual_mean_temp": 34,
    "actual_min_temp": 27,
    "actual_max_temp": 40,
    "actual_precipitation": 0,
    "location": "JAX"
  },
  {
    "": 1287,
    "date": "2015-1-9",
    "actual_mean_temp": 45,
    "actual_min_temp": 35,
    "actual_max_temp": 55,
    "actual_precipitation": 0,
    "location": "JAX"
  },
  {
    "": 1288,
    "date": "2015-1-10",
    "actual_mean_temp": 47,
    "actual_min_temp": 38,
    "actual_max_temp": 56,
    "actual_precipitation": 0,
    "location": "JAX"
  },
  {
    "": 1289,
    "date": "2015-1-11",
    "actual_mean_temp": 56,
    "actual_min_temp": 48,
    "actual_max_temp": 63,
    "actual_precipitation": 0.07,
    "location": "JAX"
  },
  {
    "": 1290,
    "date": "2015-1-12",
    "actual_mean_temp": 62,
    "actual_min_temp": 57,
    "actual_max_temp": 66,
    "actual_precipitation": 1.07,
    "location": "JAX"
  },
  {
    "": 1291,
    "date": "2015-1-13",
    "actual_mean_temp": 58,
    "actual_min_temp": 52,
    "actual_max_temp": 64,
    "actual_precipitation": 0,
    "location": "JAX"
  },
  {
    "": 1292,
    "date": "2015-1-14",
    "actual_mean_temp": 50,
    "actual_min_temp": 47,
    "actual_max_temp": 53,
    "actual_precipitation": 0,
    "location": "JAX"
  },
  {
    "": 1293,
    "date": "2015-1-15",
    "actual_mean_temp": 45,
    "actual_min_temp": 42,
    "actual_max_temp": 48,
    "actual_precipitation": 0.19,
    "location": "JAX"
  },
  {
    "": 1294,
    "date": "2015-1-16",
    "actual_mean_temp": 49,
    "actual_min_temp": 38,
    "actual_max_temp": 60,
    "actual_precipitation": 0,
    "location": "JAX"
  },
  {
    "": 1295,
    "date": "2015-1-17",
    "actual_mean_temp": 51,
    "actual_min_temp": 35,
    "actual_max_temp": 66,
    "actual_precipitation": 0,
    "location": "JAX"
  },
  {
    "": 1296,
    "date": "2015-1-18",
    "actual_mean_temp": 56,
    "actual_min_temp": 42,
    "actual_max_temp": 69,
    "actual_precipitation": 0,
    "location": "JAX"
  },
  {
    "": 1297,
    "date": "2015-1-19",
    "actual_mean_temp": 51,
    "actual_min_temp": 33,
    "actual_max_temp": 68,
    "actual_precipitation": 0,
    "location": "JAX"
  },
  {
    "": 1298,
    "date": "2015-1-20",
    "actual_mean_temp": 54,
    "actual_min_temp": 36,
    "actual_max_temp": 71,
    "actual_precipitation": 0,
    "location": "JAX"
  },
  {
    "": 1299,
    "date": "2015-1-21",
    "actual_mean_temp": 62,
    "actual_min_temp": 48,
    "actual_max_temp": 75,
    "actual_precipitation": 0,
    "location": "JAX"
  },
  {
    "": 1300,
    "date": "2015-1-22",
    "actual_mean_temp": 59,
    "actual_min_temp": 45,
    "actual_max_temp": 72,
    "actual_precipitation": 0,
    "location": "JAX"
  },
  {
    "": 1301,
    "date": "2015-1-23",
    "actual_mean_temp": 60,
    "actual_min_temp": 52,
    "actual_max_temp": 67,
    "actual_precipitation": 1.34,
    "location": "JAX"
  },
  {
    "": 1302,
    "date": "2015-1-24",
    "actual_mean_temp": 55,
    "actual_min_temp": 40,
    "actual_max_temp": 69,
    "actual_precipitation": 0.12,
    "location": "JAX"
  },
  {
    "": 1303,
    "date": "2015-1-25",
    "actual_mean_temp": 49,
    "actual_min_temp": 35,
    "actual_max_temp": 63,
    "actual_precipitation": 0,
    "location": "JAX"
  },
  {
    "": 1304,
    "date": "2015-1-26",
    "actual_mean_temp": 52,
    "actual_min_temp": 44,
    "actual_max_temp": 60,
    "actual_precipitation": 0.02,
    "location": "JAX"
  },
  {
    "": 1305,
    "date": "2015-1-27",
    "actual_mean_temp": 50,
    "actual_min_temp": 36,
    "actual_max_temp": 63,
    "actual_precipitation": 0,
    "location": "JAX"
  },
  {
    "": 1306,
    "date": "2015-1-28",
    "actual_mean_temp": 45,
    "actual_min_temp": 34,
    "actual_max_temp": 55,
    "actual_precipitation": 0,
    "location": "JAX"
  },
  {
    "": 1307,
    "date": "2015-1-29",
    "actual_mean_temp": 49,
    "actual_min_temp": 31,
    "actual_max_temp": 67,
    "actual_precipitation": 0,
    "location": "JAX"
  },
  {
    "": 1308,
    "date": "2015-1-30",
    "actual_mean_temp": 55,
    "actual_min_temp": 42,
    "actual_max_temp": 67,
    "actual_precipitation": 0,
    "location": "JAX"
  },
  {
    "": 1309,
    "date": "2015-1-31",
    "actual_mean_temp": 48,
    "actual_min_temp": 36,
    "actual_max_temp": 60,
    "actual_precipitation": 0,
    "location": "JAX"
  },
  {
    "": 1310,
    "date": "2015-2-1",
    "actual_mean_temp": 56,
    "actual_min_temp": 38,
    "actual_max_temp": 74,
    "actual_precipitation": 0,
    "location": "JAX"
  },
  {
    "": 1311,
    "date": "2015-2-2",
    "actual_mean_temp": 55,
    "actual_min_temp": 41,
    "actual_max_temp": 68,
    "actual_precipitation": 0.32,
    "location": "JAX"
  },
  {
    "": 1312,
    "date": "2015-2-3",
    "actual_mean_temp": 44,
    "actual_min_temp": 31,
    "actual_max_temp": 56,
    "actual_precipitation": 0,
    "location": "JAX"
  },
  {
    "": 1313,
    "date": "2015-2-4",
    "actual_mean_temp": 51,
    "actual_min_temp": 45,
    "actual_max_temp": 56,
    "actual_precipitation": 0.42,
    "location": "JAX"
  },
  {
    "": 1314,
    "date": "2015-2-5",
    "actual_mean_temp": 53,
    "actual_min_temp": 42,
    "actual_max_temp": 64,
    "actual_precipitation": 0.87,
    "location": "JAX"
  },
  {
    "": 1315,
    "date": "2015-2-6",
    "actual_mean_temp": 47,
    "actual_min_temp": 37,
    "actual_max_temp": 57,
    "actual_precipitation": 0,
    "location": "JAX"
  },
  {
    "": 1316,
    "date": "2015-2-7",
    "actual_mean_temp": 50,
    "actual_min_temp": 34,
    "actual_max_temp": 66,
    "actual_precipitation": 0,
    "location": "JAX"
  },
  {
    "": 1317,
    "date": "2015-2-8",
    "actual_mean_temp": 57,
    "actual_min_temp": 40,
    "actual_max_temp": 73,
    "actual_precipitation": 0,
    "location": "JAX"
  },
  {
    "": 1318,
    "date": "2015-2-9",
    "actual_mean_temp": 55,
    "actual_min_temp": 42,
    "actual_max_temp": 68,
    "actual_precipitation": 0.13,
    "location": "JAX"
  },
  {
    "": 1319,
    "date": "2015-2-10",
    "actual_mean_temp": 53,
    "actual_min_temp": 45,
    "actual_max_temp": 60,
    "actual_precipitation": 0,
    "location": "JAX"
  },
  {
    "": 1320,
    "date": "2015-2-11",
    "actual_mean_temp": 52,
    "actual_min_temp": 40,
    "actual_max_temp": 64,
    "actual_precipitation": 0,
    "location": "JAX"
  },
  {
    "": 1321,
    "date": "2015-2-12",
    "actual_mean_temp": 56,
    "actual_min_temp": 41,
    "actual_max_temp": 70,
    "actual_precipitation": 0,
    "location": "JAX"
  },
  {
    "": 1322,
    "date": "2015-2-13",
    "actual_mean_temp": 42,
    "actual_min_temp": 32,
    "actual_max_temp": 51,
    "actual_precipitation": 0,
    "location": "JAX"
  },
  {
    "": 1323,
    "date": "2015-2-14",
    "actual_mean_temp": 46,
    "actual_min_temp": 29,
    "actual_max_temp": 62,
    "actual_precipitation": 0,
    "location": "JAX"
  },
  {
    "": 1324,
    "date": "2015-2-15",
    "actual_mean_temp": 53,
    "actual_min_temp": 42,
    "actual_max_temp": 63,
    "actual_precipitation": 0,
    "location": "JAX"
  },
  {
    "": 1325,
    "date": "2015-2-16",
    "actual_mean_temp": 59,
    "actual_min_temp": 43,
    "actual_max_temp": 74,
    "actual_precipitation": 0,
    "location": "JAX"
  },
  {
    "": 1326,
    "date": "2015-2-17",
    "actual_mean_temp": 56,
    "actual_min_temp": 45,
    "actual_max_temp": 66,
    "actual_precipitation": 0.62,
    "location": "JAX"
  },
  {
    "": 1327,
    "date": "2015-2-18",
    "actual_mean_temp": 46,
    "actual_min_temp": 35,
    "actual_max_temp": 57,
    "actual_precipitation": 0,
    "location": "JAX"
  },
  {
    "": 1328,
    "date": "2015-2-19",
    "actual_mean_temp": 35,
    "actual_min_temp": 27,
    "actual_max_temp": 42,
    "actual_precipitation": 0,
    "location": "JAX"
  },
  {
    "": 1329,
    "date": "2015-2-20",
    "actual_mean_temp": 36,
    "actual_min_temp": 24,
    "actual_max_temp": 47,
    "actual_precipitation": 0,
    "location": "JAX"
  },
  {
    "": 1330,
    "date": "2015-2-21",
    "actual_mean_temp": 50,
    "actual_min_temp": 30,
    "actual_max_temp": 70,
    "actual_precipitation": 0,
    "location": "JAX"
  },
  {
    "": 1331,
    "date": "2015-2-22",
    "actual_mean_temp": 65,
    "actual_min_temp": 50,
    "actual_max_temp": 79,
    "actual_precipitation": 0,
    "location": "JAX"
  },
  {
    "": 1332,
    "date": "2015-2-23",
    "actual_mean_temp": 65,
    "actual_min_temp": 53,
    "actual_max_temp": 76,
    "actual_precipitation": 0,
    "location": "JAX"
  },
  {
    "": 1333,
    "date": "2015-2-24",
    "actual_mean_temp": 51,
    "actual_min_temp": 49,
    "actual_max_temp": 53,
    "actual_precipitation": 0.32,
    "location": "JAX"
  },
  {
    "": 1334,
    "date": "2015-2-25",
    "actual_mean_temp": 56,
    "actual_min_temp": 47,
    "actual_max_temp": 65,
    "actual_precipitation": 0,
    "location": "JAX"
  },
  {
    "": 1335,
    "date": "2015-2-26",
    "actual_mean_temp": 57,
    "actual_min_temp": 47,
    "actual_max_temp": 67,
    "actual_precipitation": 0.62,
    "location": "JAX"
  },
  {
    "": 1336,
    "date": "2015-2-27",
    "actual_mean_temp": 49,
    "actual_min_temp": 44,
    "actual_max_temp": 53,
    "actual_precipitation": 0,
    "location": "JAX"
  },
  {
    "": 1337,
    "date": "2015-2-28",
    "actual_mean_temp": 51,
    "actual_min_temp": 48,
    "actual_max_temp": 54,
    "actual_precipitation": 0.02,
    "location": "JAX"
  },
  {
    "": 1338,
    "date": "2015-3-1",
    "actual_mean_temp": 56,
    "actual_min_temp": 49,
    "actual_max_temp": 63,
    "actual_precipitation": 0.2,
    "location": "JAX"
  },
  {
    "": 1339,
    "date": "2015-3-2",
    "actual_mean_temp": 67,
    "actual_min_temp": 53,
    "actual_max_temp": 81,
    "actual_precipitation": 0,
    "location": "JAX"
  },
  {
    "": 1340,
    "date": "2015-3-3",
    "actual_mean_temp": 69,
    "actual_min_temp": 57,
    "actual_max_temp": 81,
    "actual_precipitation": 0,
    "location": "JAX"
  },
  {
    "": 1341,
    "date": "2015-3-4",
    "actual_mean_temp": 74,
    "actual_min_temp": 62,
    "actual_max_temp": 85,
    "actual_precipitation": 0,
    "location": "JAX"
  },
  {
    "": 1342,
    "date": "2015-3-5",
    "actual_mean_temp": 72,
    "actual_min_temp": 58,
    "actual_max_temp": 85,
    "actual_precipitation": 0.15,
    "location": "JAX"
  },
  {
    "": 1343,
    "date": "2015-3-6",
    "actual_mean_temp": 55,
    "actual_min_temp": 45,
    "actual_max_temp": 64,
    "actual_precipitation": 0,
    "location": "JAX"
  },
  {
    "": 1344,
    "date": "2015-3-7",
    "actual_mean_temp": 50,
    "actual_min_temp": 39,
    "actual_max_temp": 61,
    "actual_precipitation": 0,
    "location": "JAX"
  },
  {
    "": 1345,
    "date": "2015-3-8",
    "actual_mean_temp": 54,
    "actual_min_temp": 38,
    "actual_max_temp": 70,
    "actual_precipitation": 0,
    "location": "JAX"
  },
  {
    "": 1346,
    "date": "2015-3-9",
    "actual_mean_temp": 61,
    "actual_min_temp": 45,
    "actual_max_temp": 77,
    "actual_precipitation": 0,
    "location": "JAX"
  },
  {
    "": 1347,
    "date": "2015-3-10",
    "actual_mean_temp": 69,
    "actual_min_temp": 52,
    "actual_max_temp": 86,
    "actual_precipitation": 0,
    "location": "JAX"
  },
  {
    "": 1348,
    "date": "2015-3-11",
    "actual_mean_temp": 75,
    "actual_min_temp": 64,
    "actual_max_temp": 86,
    "actual_precipitation": 0,
    "location": "JAX"
  },
  {
    "": 1349,
    "date": "2015-3-12",
    "actual_mean_temp": 65,
    "actual_min_temp": 54,
    "actual_max_temp": 76,
    "actual_precipitation": 0,
    "location": "JAX"
  },
  {
    "": 1350,
    "date": "2015-3-13",
    "actual_mean_temp": 72,
    "actual_min_temp": 64,
    "actual_max_temp": 80,
    "actual_precipitation": 0.01,
    "location": "JAX"
  },
  {
    "": 1351,
    "date": "2015-3-14",
    "actual_mean_temp": 77,
    "actual_min_temp": 66,
    "actual_max_temp": 87,
    "actual_precipitation": 0,
    "location": "JAX"
  },
  {
    "": 1352,
    "date": "2015-3-15",
    "actual_mean_temp": 72,
    "actual_min_temp": 61,
    "actual_max_temp": 83,
    "actual_precipitation": 0,
    "location": "JAX"
  },
  {
    "": 1353,
    "date": "2015-3-16",
    "actual_mean_temp": 68,
    "actual_min_temp": 51,
    "actual_max_temp": 84,
    "actual_precipitation": 0,
    "location": "JAX"
  },
  {
    "": 1354,
    "date": "2015-3-17",
    "actual_mean_temp": 71,
    "actual_min_temp": 54,
    "actual_max_temp": 88,
    "actual_precipitation": 0,
    "location": "JAX"
  },
  {
    "": 1355,
    "date": "2015-3-18",
    "actual_mean_temp": 67,
    "actual_min_temp": 59,
    "actual_max_temp": 74,
    "actual_precipitation": 0,
    "location": "JAX"
  },
  {
    "": 1356,
    "date": "2015-3-19",
    "actual_mean_temp": 69,
    "actual_min_temp": 59,
    "actual_max_temp": 78,
    "actual_precipitation": 0.01,
    "location": "JAX"
  },
  {
    "": 1357,
    "date": "2015-3-20",
    "actual_mean_temp": 70,
    "actual_min_temp": 61,
    "actual_max_temp": 79,
    "actual_precipitation": 0,
    "location": "JAX"
  },
  {
    "": 1358,
    "date": "2015-3-21",
    "actual_mean_temp": 73,
    "actual_min_temp": 64,
    "actual_max_temp": 82,
    "actual_precipitation": 0.53,
    "location": "JAX"
  },
  {
    "": 1359,
    "date": "2015-3-22",
    "actual_mean_temp": 70,
    "actual_min_temp": 62,
    "actual_max_temp": 77,
    "actual_precipitation": 0.08,
    "location": "JAX"
  },
  {
    "": 1360,
    "date": "2015-3-23",
    "actual_mean_temp": 63,
    "actual_min_temp": 59,
    "actual_max_temp": 67,
    "actual_precipitation": 0.47,
    "location": "JAX"
  },
  {
    "": 1361,
    "date": "2015-3-24",
    "actual_mean_temp": 62,
    "actual_min_temp": 57,
    "actual_max_temp": 66,
    "actual_precipitation": 0.03,
    "location": "JAX"
  },
  {
    "": 1362,
    "date": "2015-3-25",
    "actual_mean_temp": 67,
    "actual_min_temp": 59,
    "actual_max_temp": 75,
    "actual_precipitation": 0,
    "location": "JAX"
  },
  {
    "": 1363,
    "date": "2015-3-26",
    "actual_mean_temp": 68,
    "actual_min_temp": 58,
    "actual_max_temp": 77,
    "actual_precipitation": 0.53,
    "location": "JAX"
  },
  {
    "": 1364,
    "date": "2015-3-27",
    "actual_mean_temp": 64,
    "actual_min_temp": 51,
    "actual_max_temp": 76,
    "actual_precipitation": 0.28,
    "location": "JAX"
  },
  {
    "": 1365,
    "date": "2015-3-28",
    "actual_mean_temp": 53,
    "actual_min_temp": 42,
    "actual_max_temp": 63,
    "actual_precipitation": 0,
    "location": "JAX"
  },
  {
    "": 1366,
    "date": "2015-3-29",
    "actual_mean_temp": 51,
    "actual_min_temp": 39,
    "actual_max_temp": 62,
    "actual_precipitation": 0,
    "location": "JAX"
  },
  {
    "": 1367,
    "date": "2015-3-30",
    "actual_mean_temp": 59,
    "actual_min_temp": 40,
    "actual_max_temp": 78,
    "actual_precipitation": 0,
    "location": "JAX"
  },
  {
    "": 1368,
    "date": "2015-3-31",
    "actual_mean_temp": 68,
    "actual_min_temp": 55,
    "actual_max_temp": 81,
    "actual_precipitation": 0,
    "location": "JAX"
  },
  {
    "": 1369,
    "date": "2015-4-1",
    "actual_mean_temp": 71,
    "actual_min_temp": 58,
    "actual_max_temp": 84,
    "actual_precipitation": 0.05,
    "location": "JAX"
  },
  {
    "": 1370,
    "date": "2015-4-2",
    "actual_mean_temp": 68,
    "actual_min_temp": 54,
    "actual_max_temp": 81,
    "actual_precipitation": 0,
    "location": "JAX"
  },
  {
    "": 1371,
    "date": "2015-4-3",
    "actual_mean_temp": 73,
    "actual_min_temp": 59,
    "actual_max_temp": 87,
    "actual_precipitation": 0,
    "location": "JAX"
  },
  {
    "": 1372,
    "date": "2015-4-4",
    "actual_mean_temp": 71,
    "actual_min_temp": 59,
    "actual_max_temp": 83,
    "actual_precipitation": 0.12,
    "location": "JAX"
  },
  {
    "": 1373,
    "date": "2015-4-5",
    "actual_mean_temp": 68,
    "actual_min_temp": 60,
    "actual_max_temp": 75,
    "actual_precipitation": 0,
    "location": "JAX"
  },
  {
    "": 1374,
    "date": "2015-4-6",
    "actual_mean_temp": 70,
    "actual_min_temp": 60,
    "actual_max_temp": 80,
    "actual_precipitation": 0,
    "location": "JAX"
  },
  {
    "": 1375,
    "date": "2015-4-7",
    "actual_mean_temp": 73,
    "actual_min_temp": 60,
    "actual_max_temp": 86,
    "actual_precipitation": 0.46,
    "location": "JAX"
  },
  {
    "": 1376,
    "date": "2015-4-8",
    "actual_mean_temp": 75,
    "actual_min_temp": 63,
    "actual_max_temp": 86,
    "actual_precipitation": 0,
    "location": "JAX"
  },
  {
    "": 1377,
    "date": "2015-4-9",
    "actual_mean_temp": 74,
    "actual_min_temp": 62,
    "actual_max_temp": 85,
    "actual_precipitation": 0,
    "location": "JAX"
  },
  {
    "": 1378,
    "date": "2015-4-10",
    "actual_mean_temp": 77,
    "actual_min_temp": 65,
    "actual_max_temp": 89,
    "actual_precipitation": 0,
    "location": "JAX"
  },
  {
    "": 1379,
    "date": "2015-4-11",
    "actual_mean_temp": 74,
    "actual_min_temp": 65,
    "actual_max_temp": 82,
    "actual_precipitation": 0,
    "location": "JAX"
  },
  {
    "": 1380,
    "date": "2015-4-12",
    "actual_mean_temp": 75,
    "actual_min_temp": 69,
    "actual_max_temp": 81,
    "actual_precipitation": 0.48,
    "location": "JAX"
  },
  {
    "": 1381,
    "date": "2015-4-13",
    "actual_mean_temp": 76,
    "actual_min_temp": 69,
    "actual_max_temp": 83,
    "actual_precipitation": 0.22,
    "location": "JAX"
  },
  {
    "": 1382,
    "date": "2015-4-14",
    "actual_mean_temp": 78,
    "actual_min_temp": 67,
    "actual_max_temp": 88,
    "actual_precipitation": 0,
    "location": "JAX"
  },
  {
    "": 1383,
    "date": "2015-4-15",
    "actual_mean_temp": 76,
    "actual_min_temp": 67,
    "actual_max_temp": 85,
    "actual_precipitation": 0.11,
    "location": "JAX"
  },
  {
    "": 1384,
    "date": "2015-4-16",
    "actual_mean_temp": 67,
    "actual_min_temp": 64,
    "actual_max_temp": 70,
    "actual_precipitation": 0,
    "location": "JAX"
  },
  {
    "": 1385,
    "date": "2015-4-17",
    "actual_mean_temp": 70,
    "actual_min_temp": 62,
    "actual_max_temp": 78,
    "actual_precipitation": 0,
    "location": "JAX"
  },
  {
    "": 1386,
    "date": "2015-4-18",
    "actual_mean_temp": 75,
    "actual_min_temp": 63,
    "actual_max_temp": 87,
    "actual_precipitation": 0.27,
    "location": "JAX"
  },
  {
    "": 1387,
    "date": "2015-4-19",
    "actual_mean_temp": 77,
    "actual_min_temp": 68,
    "actual_max_temp": 86,
    "actual_precipitation": 0,
    "location": "JAX"
  },
  {
    "": 1388,
    "date": "2015-4-20",
    "actual_mean_temp": 70,
    "actual_min_temp": 63,
    "actual_max_temp": 77,
    "actual_precipitation": 0.04,
    "location": "JAX"
  },
  {
    "": 1389,
    "date": "2015-4-21",
    "actual_mean_temp": 72,
    "actual_min_temp": 62,
    "actual_max_temp": 81,
    "actual_precipitation": 0,
    "location": "JAX"
  },
  {
    "": 1390,
    "date": "2015-4-22",
    "actual_mean_temp": 70,
    "actual_min_temp": 54,
    "actual_max_temp": 85,
    "actual_precipitation": 0,
    "location": "JAX"
  },
  {
    "": 1391,
    "date": "2015-4-23",
    "actual_mean_temp": 74,
    "actual_min_temp": 60,
    "actual_max_temp": 88,
    "actual_precipitation": 0,
    "location": "JAX"
  },
  {
    "": 1392,
    "date": "2015-4-24",
    "actual_mean_temp": 68,
    "actual_min_temp": 61,
    "actual_max_temp": 75,
    "actual_precipitation": 0,
    "location": "JAX"
  },
  {
    "": 1393,
    "date": "2015-4-25",
    "actual_mean_temp": 70,
    "actual_min_temp": 60,
    "actual_max_temp": 79,
    "actual_precipitation": 0.91,
    "location": "JAX"
  },
  {
    "": 1394,
    "date": "2015-4-26",
    "actual_mean_temp": 80,
    "actual_min_temp": 70,
    "actual_max_temp": 90,
    "actual_precipitation": 0,
    "location": "JAX"
  },
  {
    "": 1395,
    "date": "2015-4-27",
    "actual_mean_temp": 71,
    "actual_min_temp": 65,
    "actual_max_temp": 76,
    "actual_precipitation": 0,
    "location": "JAX"
  },
  {
    "": 1396,
    "date": "2015-4-28",
    "actual_mean_temp": 68,
    "actual_min_temp": 65,
    "actual_max_temp": 71,
    "actual_precipitation": 0.01,
    "location": "JAX"
  },
  {
    "": 1397,
    "date": "2015-4-29",
    "actual_mean_temp": 71,
    "actual_min_temp": 62,
    "actual_max_temp": 79,
    "actual_precipitation": 0,
    "location": "JAX"
  },
  {
    "": 1398,
    "date": "2015-4-30",
    "actual_mean_temp": 68,
    "actual_min_temp": 57,
    "actual_max_temp": 79,
    "actual_precipitation": 0,
    "location": "JAX"
  },
  {
    "": 1399,
    "date": "2015-5-1",
    "actual_mean_temp": 66,
    "actual_min_temp": 53,
    "actual_max_temp": 78,
    "actual_precipitation": 0,
    "location": "JAX"
  },
  {
    "": 1400,
    "date": "2015-5-2",
    "actual_mean_temp": 63,
    "actual_min_temp": 49,
    "actual_max_temp": 77,
    "actual_precipitation": 0,
    "location": "JAX"
  },
  {
    "": 1401,
    "date": "2015-5-3",
    "actual_mean_temp": 66,
    "actual_min_temp": 51,
    "actual_max_temp": 81,
    "actual_precipitation": 0,
    "location": "JAX"
  },
  {
    "": 1402,
    "date": "2015-5-4",
    "actual_mean_temp": 67,
    "actual_min_temp": 54,
    "actual_max_temp": 80,
    "actual_precipitation": 0,
    "location": "JAX"
  },
  {
    "": 1403,
    "date": "2015-5-5",
    "actual_mean_temp": 70,
    "actual_min_temp": 59,
    "actual_max_temp": 80,
    "actual_precipitation": 0,
    "location": "JAX"
  },
  {
    "": 1404,
    "date": "2015-5-6",
    "actual_mean_temp": 71,
    "actual_min_temp": 61,
    "actual_max_temp": 80,
    "actual_precipitation": 0,
    "location": "JAX"
  },
  {
    "": 1405,
    "date": "2015-5-7",
    "actual_mean_temp": 73,
    "actual_min_temp": 59,
    "actual_max_temp": 86,
    "actual_precipitation": 0,
    "location": "JAX"
  },
  {
    "": 1406,
    "date": "2015-5-8",
    "actual_mean_temp": 76,
    "actual_min_temp": 64,
    "actual_max_temp": 87,
    "actual_precipitation": 0,
    "location": "JAX"
  },
  {
    "": 1407,
    "date": "2015-5-9",
    "actual_mean_temp": 76,
    "actual_min_temp": 62,
    "actual_max_temp": 89,
    "actual_precipitation": 0,
    "location": "JAX"
  },
  {
    "": 1408,
    "date": "2015-5-10",
    "actual_mean_temp": 78,
    "actual_min_temp": 63,
    "actual_max_temp": 92,
    "actual_precipitation": 0,
    "location": "JAX"
  },
  {
    "": 1409,
    "date": "2015-5-11",
    "actual_mean_temp": 80,
    "actual_min_temp": 67,
    "actual_max_temp": 92,
    "actual_precipitation": 0,
    "location": "JAX"
  },
  {
    "": 1410,
    "date": "2015-5-12",
    "actual_mean_temp": 80,
    "actual_min_temp": 67,
    "actual_max_temp": 92,
    "actual_precipitation": 0,
    "location": "JAX"
  },
  {
    "": 1411,
    "date": "2015-5-13",
    "actual_mean_temp": 80,
    "actual_min_temp": 67,
    "actual_max_temp": 92,
    "actual_precipitation": 0,
    "location": "JAX"
  },
  {
    "": 1412,
    "date": "2015-5-14",
    "actual_mean_temp": 76,
    "actual_min_temp": 67,
    "actual_max_temp": 85,
    "actual_precipitation": 0,
    "location": "JAX"
  },
  {
    "": 1413,
    "date": "2015-5-15",
    "actual_mean_temp": 76,
    "actual_min_temp": 70,
    "actual_max_temp": 81,
    "actual_precipitation": 0,
    "location": "JAX"
  },
  {
    "": 1414,
    "date": "2015-5-16",
    "actual_mean_temp": 71,
    "actual_min_temp": 60,
    "actual_max_temp": 82,
    "actual_precipitation": 0,
    "location": "JAX"
  },
  {
    "": 1415,
    "date": "2015-5-17",
    "actual_mean_temp": 75,
    "actual_min_temp": 63,
    "actual_max_temp": 86,
    "actual_precipitation": 0,
    "location": "JAX"
  },
  {
    "": 1416,
    "date": "2015-5-18",
    "actual_mean_temp": 76,
    "actual_min_temp": 65,
    "actual_max_temp": 87,
    "actual_precipitation": 0,
    "location": "JAX"
  },
  {
    "": 1417,
    "date": "2015-5-19",
    "actual_mean_temp": 81,
    "actual_min_temp": 69,
    "actual_max_temp": 93,
    "actual_precipitation": 0.14,
    "location": "JAX"
  },
  {
    "": 1418,
    "date": "2015-5-20",
    "actual_mean_temp": 80,
    "actual_min_temp": 67,
    "actual_max_temp": 92,
    "actual_precipitation": 0,
    "location": "JAX"
  },
  {
    "": 1419,
    "date": "2015-5-21",
    "actual_mean_temp": 82,
    "actual_min_temp": 69,
    "actual_max_temp": 94,
    "actual_precipitation": 0,
    "location": "JAX"
  },
  {
    "": 1420,
    "date": "2015-5-22",
    "actual_mean_temp": 75,
    "actual_min_temp": 64,
    "actual_max_temp": 86,
    "actual_precipitation": 0,
    "location": "JAX"
  },
  {
    "": 1421,
    "date": "2015-5-23",
    "actual_mean_temp": 73,
    "actual_min_temp": 63,
    "actual_max_temp": 83,
    "actual_precipitation": 0,
    "location": "JAX"
  },
  {
    "": 1422,
    "date": "2015-5-24",
    "actual_mean_temp": 77,
    "actual_min_temp": 70,
    "actual_max_temp": 84,
    "actual_precipitation": 0,
    "location": "JAX"
  },
  {
    "": 1423,
    "date": "2015-5-25",
    "actual_mean_temp": 79,
    "actual_min_temp": 70,
    "actual_max_temp": 87,
    "actual_precipitation": 0,
    "location": "JAX"
  },
  {
    "": 1424,
    "date": "2015-5-26",
    "actual_mean_temp": 80,
    "actual_min_temp": 71,
    "actual_max_temp": 88,
    "actual_precipitation": 0,
    "location": "JAX"
  },
  {
    "": 1425,
    "date": "2015-5-27",
    "actual_mean_temp": 78,
    "actual_min_temp": 69,
    "actual_max_temp": 86,
    "actual_precipitation": 0,
    "location": "JAX"
  },
  {
    "": 1426,
    "date": "2015-5-28",
    "actual_mean_temp": 73,
    "actual_min_temp": 62,
    "actual_max_temp": 84,
    "actual_precipitation": 0,
    "location": "JAX"
  },
  {
    "": 1427,
    "date": "2015-5-29",
    "actual_mean_temp": 74,
    "actual_min_temp": 62,
    "actual_max_temp": 85,
    "actual_precipitation": 0,
    "location": "JAX"
  },
  {
    "": 1428,
    "date": "2015-5-30",
    "actual_mean_temp": 73,
    "actual_min_temp": 65,
    "actual_max_temp": 81,
    "actual_precipitation": 0.94,
    "location": "JAX"
  },
  {
    "": 1429,
    "date": "2015-5-31",
    "actual_mean_temp": 77,
    "actual_min_temp": 67,
    "actual_max_temp": 86,
    "actual_precipitation": 0,
    "location": "JAX"
  },
  {
    "": 1430,
    "date": "2015-6-1",
    "actual_mean_temp": 78,
    "actual_min_temp": 66,
    "actual_max_temp": 89,
    "actual_precipitation": 0.72,
    "location": "JAX"
  },
  {
    "": 1431,
    "date": "2015-6-2",
    "actual_mean_temp": 75,
    "actual_min_temp": 64,
    "actual_max_temp": 85,
    "actual_precipitation": 0.03,
    "location": "JAX"
  },
  {
    "": 1432,
    "date": "2015-6-3",
    "actual_mean_temp": 78,
    "actual_min_temp": 68,
    "actual_max_temp": 88,
    "actual_precipitation": 0.24,
    "location": "JAX"
  },
  {
    "": 1433,
    "date": "2015-6-4",
    "actual_mean_temp": 77,
    "actual_min_temp": 67,
    "actual_max_temp": 86,
    "actual_precipitation": 0,
    "location": "JAX"
  },
  {
    "": 1434,
    "date": "2015-6-5",
    "actual_mean_temp": 77,
    "actual_min_temp": 67,
    "actual_max_temp": 86,
    "actual_precipitation": 0.02,
    "location": "JAX"
  },
  {
    "": 1435,
    "date": "2015-6-6",
    "actual_mean_temp": 78,
    "actual_min_temp": 66,
    "actual_max_temp": 89,
    "actual_precipitation": 0,
    "location": "JAX"
  },
  {
    "": 1436,
    "date": "2015-6-7",
    "actual_mean_temp": 77,
    "actual_min_temp": 66,
    "actual_max_temp": 87,
    "actual_precipitation": 0,
    "location": "JAX"
  },
  {
    "": 1437,
    "date": "2015-6-8",
    "actual_mean_temp": 79,
    "actual_min_temp": 68,
    "actual_max_temp": 89,
    "actual_precipitation": 0,
    "location": "JAX"
  },
  {
    "": 1438,
    "date": "2015-6-9",
    "actual_mean_temp": 82,
    "actual_min_temp": 73,
    "actual_max_temp": 91,
    "actual_precipitation": 0,
    "location": "JAX"
  },
  {
    "": 1439,
    "date": "2015-6-10",
    "actual_mean_temp": 78,
    "actual_min_temp": 70,
    "actual_max_temp": 86,
    "actual_precipitation": 0.92,
    "location": "JAX"
  },
  {
    "": 1440,
    "date": "2015-6-11",
    "actual_mean_temp": 78,
    "actual_min_temp": 67,
    "actual_max_temp": 89,
    "actual_precipitation": 0,
    "location": "JAX"
  },
  {
    "": 1441,
    "date": "2015-6-12",
    "actual_mean_temp": 80,
    "actual_min_temp": 68,
    "actual_max_temp": 92,
    "actual_precipitation": 0,
    "location": "JAX"
  },
  {
    "": 1442,
    "date": "2015-6-13",
    "actual_mean_temp": 82,
    "actual_min_temp": 71,
    "actual_max_temp": 93,
    "actual_precipitation": 0,
    "location": "JAX"
  },
  {
    "": 1443,
    "date": "2015-6-14",
    "actual_mean_temp": 81,
    "actual_min_temp": 68,
    "actual_max_temp": 94,
    "actual_precipitation": 0,
    "location": "JAX"
  },
  {
    "": 1444,
    "date": "2015-6-15",
    "actual_mean_temp": 81,
    "actual_min_temp": 68,
    "actual_max_temp": 94,
    "actual_precipitation": 0,
    "location": "JAX"
  },
  {
    "": 1445,
    "date": "2015-6-16",
    "actual_mean_temp": 83,
    "actual_min_temp": 69,
    "actual_max_temp": 96,
    "actual_precipitation": 0,
    "location": "JAX"
  },
  {
    "": 1446,
    "date": "2015-6-17",
    "actual_mean_temp": 85,
    "actual_min_temp": 72,
    "actual_max_temp": 97,
    "actual_precipitation": 0,
    "location": "JAX"
  },
  {
    "": 1447,
    "date": "2015-6-18",
    "actual_mean_temp": 85,
    "actual_min_temp": 72,
    "actual_max_temp": 97,
    "actual_precipitation": 0,
    "location": "JAX"
  },
  {
    "": 1448,
    "date": "2015-6-19",
    "actual_mean_temp": 86,
    "actual_min_temp": 73,
    "actual_max_temp": 98,
    "actual_precipitation": 0.71,
    "location": "JAX"
  },
  {
    "": 1449,
    "date": "2015-6-20",
    "actual_mean_temp": 86,
    "actual_min_temp": 74,
    "actual_max_temp": 97,
    "actual_precipitation": 0,
    "location": "JAX"
  },
  {
    "": 1450,
    "date": "2015-6-21",
    "actual_mean_temp": 86,
    "actual_min_temp": 76,
    "actual_max_temp": 96,
    "actual_precipitation": 0.06,
    "location": "JAX"
  },
  {
    "": 1451,
    "date": "2015-6-22",
    "actual_mean_temp": 84,
    "actual_min_temp": 70,
    "actual_max_temp": 97,
    "actual_precipitation": 1.7,
    "location": "JAX"
  },
  {
    "": 1452,
    "date": "2015-6-23",
    "actual_mean_temp": 81,
    "actual_min_temp": 71,
    "actual_max_temp": 91,
    "actual_precipitation": 0.25,
    "location": "JAX"
  },
  {
    "": 1453,
    "date": "2015-6-24",
    "actual_mean_temp": 85,
    "actual_min_temp": 74,
    "actual_max_temp": 95,
    "actual_precipitation": 0,
    "location": "JAX"
  },
  {
    "": 1454,
    "date": "2015-6-25",
    "actual_mean_temp": 81,
    "actual_min_temp": 73,
    "actual_max_temp": 89,
    "actual_precipitation": 1.16,
    "location": "JAX"
  },
  {
    "": 1455,
    "date": "2015-6-26",
    "actual_mean_temp": 82,
    "actual_min_temp": 73,
    "actual_max_temp": 90,
    "actual_precipitation": 0.02,
    "location": "JAX"
  },
  {
    "": 1456,
    "date": "2015-6-27",
    "actual_mean_temp": 84,
    "actual_min_temp": 75,
    "actual_max_temp": 92,
    "actual_precipitation": 0,
    "location": "JAX"
  },
  {
    "": 1457,
    "date": "2015-6-28",
    "actual_mean_temp": 82,
    "actual_min_temp": 73,
    "actual_max_temp": 91,
    "actual_precipitation": 0.23,
    "location": "JAX"
  },
  {
    "": 1458,
    "date": "2015-6-29",
    "actual_mean_temp": 79,
    "actual_min_temp": 71,
    "actual_max_temp": 86,
    "actual_precipitation": 0.23,
    "location": "JAX"
  },
  {
    "": 1459,
    "date": "2015-6-30",
    "actual_mean_temp": 79,
    "actual_min_temp": 69,
    "actual_max_temp": 89,
    "actual_precipitation": 0.03,
    "location": "JAX"
  },
  {
    "": 1460,
    "date": "2014-7-1",
    "actual_mean_temp": 84,
    "actual_min_temp": 74,
    "actual_max_temp": 94,
    "actual_precipitation": 0,
    "location": "KHOU"
  },
  {
    "": 1461,
    "date": "2014-7-2",
    "actual_mean_temp": 84,
    "actual_min_temp": 74,
    "actual_max_temp": 94,
    "actual_precipitation": 0,
    "location": "KHOU"
  },
  {
    "": 1462,
    "date": "2014-7-3",
    "actual_mean_temp": 84,
    "actual_min_temp": 73,
    "actual_max_temp": 94,
    "actual_precipitation": 0,
    "location": "KHOU"
  },
  {
    "": 1463,
    "date": "2014-7-4",
    "actual_mean_temp": 82,
    "actual_min_temp": 72,
    "actual_max_temp": 91,
    "actual_precipitation": 0.48,
    "location": "KHOU"
  },
  {
    "": 1464,
    "date": "2014-7-5",
    "actual_mean_temp": 82,
    "actual_min_temp": 73,
    "actual_max_temp": 90,
    "actual_precipitation": 0.31,
    "location": "KHOU"
  },
  {
    "": 1465,
    "date": "2014-7-6",
    "actual_mean_temp": 81,
    "actual_min_temp": 72,
    "actual_max_temp": 89,
    "actual_precipitation": 0.01,
    "location": "KHOU"
  },
  {
    "": 1466,
    "date": "2014-7-7",
    "actual_mean_temp": 84,
    "actual_min_temp": 74,
    "actual_max_temp": 93,
    "actual_precipitation": 0.08,
    "location": "KHOU"
  },
  {
    "": 1467,
    "date": "2014-7-8",
    "actual_mean_temp": 83,
    "actual_min_temp": 74,
    "actual_max_temp": 92,
    "actual_precipitation": 0,
    "location": "KHOU"
  },
  {
    "": 1468,
    "date": "2014-7-9",
    "actual_mean_temp": 85,
    "actual_min_temp": 74,
    "actual_max_temp": 95,
    "actual_precipitation": 0,
    "location": "KHOU"
  },
  {
    "": 1469,
    "date": "2014-7-10",
    "actual_mean_temp": 83,
    "actual_min_temp": 73,
    "actual_max_temp": 93,
    "actual_precipitation": 0,
    "location": "KHOU"
  },
  {
    "": 1470,
    "date": "2014-7-11",
    "actual_mean_temp": 83,
    "actual_min_temp": 72,
    "actual_max_temp": 94,
    "actual_precipitation": 0,
    "location": "KHOU"
  },
  {
    "": 1471,
    "date": "2014-7-12",
    "actual_mean_temp": 84,
    "actual_min_temp": 74,
    "actual_max_temp": 94,
    "actual_precipitation": 0,
    "location": "KHOU"
  },
  {
    "": 1472,
    "date": "2014-7-13",
    "actual_mean_temp": 87,
    "actual_min_temp": 77,
    "actual_max_temp": 96,
    "actual_precipitation": 0,
    "location": "KHOU"
  },
  {
    "": 1473,
    "date": "2014-7-14",
    "actual_mean_temp": 86,
    "actual_min_temp": 76,
    "actual_max_temp": 96,
    "actual_precipitation": 0,
    "location": "KHOU"
  },
  {
    "": 1474,
    "date": "2014-7-15",
    "actual_mean_temp": 82,
    "actual_min_temp": 75,
    "actual_max_temp": 89,
    "actual_precipitation": 0.06,
    "location": "KHOU"
  },
  {
    "": 1475,
    "date": "2014-7-16",
    "actual_mean_temp": 82,
    "actual_min_temp": 73,
    "actual_max_temp": 90,
    "actual_precipitation": 0,
    "location": "KHOU"
  },
  {
    "": 1476,
    "date": "2014-7-17",
    "actual_mean_temp": 83,
    "actual_min_temp": 76,
    "actual_max_temp": 89,
    "actual_precipitation": 0.39,
    "location": "KHOU"
  },
  {
    "": 1477,
    "date": "2014-7-18",
    "actual_mean_temp": 81,
    "actual_min_temp": 75,
    "actual_max_temp": 87,
    "actual_precipitation": 0.04,
    "location": "KHOU"
  },
  {
    "": 1478,
    "date": "2014-7-19",
    "actual_mean_temp": 79,
    "actual_min_temp": 72,
    "actual_max_temp": 85,
    "actual_precipitation": 0,
    "location": "KHOU"
  },
  {
    "": 1479,
    "date": "2014-7-20",
    "actual_mean_temp": 83,
    "actual_min_temp": 73,
    "actual_max_temp": 93,
    "actual_precipitation": 0.01,
    "location": "KHOU"
  },
  {
    "": 1480,
    "date": "2014-7-21",
    "actual_mean_temp": 87,
    "actual_min_temp": 77,
    "actual_max_temp": 96,
    "actual_precipitation": 0,
    "location": "KHOU"
  },
  {
    "": 1481,
    "date": "2014-7-22",
    "actual_mean_temp": 87,
    "actual_min_temp": 77,
    "actual_max_temp": 96,
    "actual_precipitation": 0,
    "location": "KHOU"
  },
  {
    "": 1482,
    "date": "2014-7-23",
    "actual_mean_temp": 86,
    "actual_min_temp": 76,
    "actual_max_temp": 95,
    "actual_precipitation": 0.07,
    "location": "KHOU"
  },
  {
    "": 1483,
    "date": "2014-7-24",
    "actual_mean_temp": 84,
    "actual_min_temp": 73,
    "actual_max_temp": 94,
    "actual_precipitation": 0.01,
    "location": "KHOU"
  },
  {
    "": 1484,
    "date": "2014-7-25",
    "actual_mean_temp": 85,
    "actual_min_temp": 74,
    "actual_max_temp": 95,
    "actual_precipitation": 0,
    "location": "KHOU"
  },
  {
    "": 1485,
    "date": "2014-7-26",
    "actual_mean_temp": 87,
    "actual_min_temp": 78,
    "actual_max_temp": 95,
    "actual_precipitation": 0,
    "location": "KHOU"
  },
  {
    "": 1486,
    "date": "2014-7-27",
    "actual_mean_temp": 87,
    "actual_min_temp": 77,
    "actual_max_temp": 97,
    "actual_precipitation": 0,
    "location": "KHOU"
  },
  {
    "": 1487,
    "date": "2014-7-28",
    "actual_mean_temp": 88,
    "actual_min_temp": 77,
    "actual_max_temp": 99,
    "actual_precipitation": 0,
    "location": "KHOU"
  },
  {
    "": 1488,
    "date": "2014-7-29",
    "actual_mean_temp": 83,
    "actual_min_temp": 74,
    "actual_max_temp": 92,
    "actual_precipitation": 0.03,
    "location": "KHOU"
  },
  {
    "": 1489,
    "date": "2014-7-30",
    "actual_mean_temp": 83,
    "actual_min_temp": 72,
    "actual_max_temp": 94,
    "actual_precipitation": 0,
    "location": "KHOU"
  },
  {
    "": 1490,
    "date": "2014-7-31",
    "actual_mean_temp": 84,
    "actual_min_temp": 73,
    "actual_max_temp": 94,
    "actual_precipitation": 3.91,
    "location": "KHOU"
  },
  {
    "": 1491,
    "date": "2014-8-1",
    "actual_mean_temp": 80,
    "actual_min_temp": 73,
    "actual_max_temp": 87,
    "actual_precipitation": 0.01,
    "location": "KHOU"
  },
  {
    "": 1492,
    "date": "2014-8-2",
    "actual_mean_temp": 77,
    "actual_min_temp": 71,
    "actual_max_temp": 82,
    "actual_precipitation": 0,
    "location": "KHOU"
  },
  {
    "": 1493,
    "date": "2014-8-3",
    "actual_mean_temp": 81,
    "actual_min_temp": 72,
    "actual_max_temp": 89,
    "actual_precipitation": 0,
    "location": "KHOU"
  },
  {
    "": 1494,
    "date": "2014-8-4",
    "actual_mean_temp": 83,
    "actual_min_temp": 73,
    "actual_max_temp": 92,
    "actual_precipitation": 0,
    "location": "KHOU"
  },
  {
    "": 1495,
    "date": "2014-8-5",
    "actual_mean_temp": 83,
    "actual_min_temp": 74,
    "actual_max_temp": 92,
    "actual_precipitation": 0,
    "location": "KHOU"
  },
  {
    "": 1496,
    "date": "2014-8-6",
    "actual_mean_temp": 85,
    "actual_min_temp": 75,
    "actual_max_temp": 94,
    "actual_precipitation": 0,
    "location": "KHOU"
  },
  {
    "": 1497,
    "date": "2014-8-7",
    "actual_mean_temp": 87,
    "actual_min_temp": 79,
    "actual_max_temp": 95,
    "actual_precipitation": 0,
    "location": "KHOU"
  },
  {
    "": 1498,
    "date": "2014-8-8",
    "actual_mean_temp": 87,
    "actual_min_temp": 77,
    "actual_max_temp": 97,
    "actual_precipitation": 0.1,
    "location": "KHOU"
  },
  {
    "": 1499,
    "date": "2014-8-9",
    "actual_mean_temp": 86,
    "actual_min_temp": 77,
    "actual_max_temp": 94,
    "actual_precipitation": 0,
    "location": "KHOU"
  },
  {
    "": 1500,
    "date": "2014-8-10",
    "actual_mean_temp": 86,
    "actual_min_temp": 78,
    "actual_max_temp": 94,
    "actual_precipitation": 0,
    "location": "KHOU"
  },
  {
    "": 1501,
    "date": "2014-8-11",
    "actual_mean_temp": 86,
    "actual_min_temp": 75,
    "actual_max_temp": 97,
    "actual_precipitation": 0.25,
    "location": "KHOU"
  },
  {
    "": 1502,
    "date": "2014-8-12",
    "actual_mean_temp": 87,
    "actual_min_temp": 76,
    "actual_max_temp": 97,
    "actual_precipitation": 0,
    "location": "KHOU"
  },
  {
    "": 1503,
    "date": "2014-8-13",
    "actual_mean_temp": 84,
    "actual_min_temp": 73,
    "actual_max_temp": 94,
    "actual_precipitation": 0,
    "location": "KHOU"
  },
  {
    "": 1504,
    "date": "2014-8-14",
    "actual_mean_temp": 83,
    "actual_min_temp": 73,
    "actual_max_temp": 93,
    "actual_precipitation": 0.02,
    "location": "KHOU"
  },
  {
    "": 1505,
    "date": "2014-8-15",
    "actual_mean_temp": 86,
    "actual_min_temp": 75,
    "actual_max_temp": 96,
    "actual_precipitation": 0,
    "location": "KHOU"
  },
  {
    "": 1506,
    "date": "2014-8-16",
    "actual_mean_temp": 89,
    "actual_min_temp": 80,
    "actual_max_temp": 98,
    "actual_precipitation": 0,
    "location": "KHOU"
  },
  {
    "": 1507,
    "date": "2014-8-17",
    "actual_mean_temp": 88,
    "actual_min_temp": 78,
    "actual_max_temp": 97,
    "actual_precipitation": 0,
    "location": "KHOU"
  },
  {
    "": 1508,
    "date": "2014-8-18",
    "actual_mean_temp": 86,
    "actual_min_temp": 76,
    "actual_max_temp": 96,
    "actual_precipitation": 0,
    "location": "KHOU"
  },
  {
    "": 1509,
    "date": "2014-8-19",
    "actual_mean_temp": 85,
    "actual_min_temp": 76,
    "actual_max_temp": 94,
    "actual_precipitation": 0,
    "location": "KHOU"
  },
  {
    "": 1510,
    "date": "2014-8-20",
    "actual_mean_temp": 85,
    "actual_min_temp": 74,
    "actual_max_temp": 96,
    "actual_precipitation": 0.01,
    "location": "KHOU"
  },
  {
    "": 1511,
    "date": "2014-8-21",
    "actual_mean_temp": 87,
    "actual_min_temp": 76,
    "actual_max_temp": 98,
    "actual_precipitation": 0,
    "location": "KHOU"
  },
  {
    "": 1512,
    "date": "2014-8-22",
    "actual_mean_temp": 87,
    "actual_min_temp": 75,
    "actual_max_temp": 98,
    "actual_precipitation": 0,
    "location": "KHOU"
  },
  {
    "": 1513,
    "date": "2014-8-23",
    "actual_mean_temp": 87,
    "actual_min_temp": 75,
    "actual_max_temp": 98,
    "actual_precipitation": 0,
    "location": "KHOU"
  },
  {
    "": 1514,
    "date": "2014-8-24",
    "actual_mean_temp": 86,
    "actual_min_temp": 74,
    "actual_max_temp": 98,
    "actual_precipitation": 0,
    "location": "KHOU"
  },
  {
    "": 1515,
    "date": "2014-8-25",
    "actual_mean_temp": 87,
    "actual_min_temp": 76,
    "actual_max_temp": 97,
    "actual_precipitation": 0,
    "location": "KHOU"
  },
  {
    "": 1516,
    "date": "2014-8-26",
    "actual_mean_temp": 86,
    "actual_min_temp": 74,
    "actual_max_temp": 97,
    "actual_precipitation": 0,
    "location": "KHOU"
  },
  {
    "": 1517,
    "date": "2014-8-27",
    "actual_mean_temp": 85,
    "actual_min_temp": 75,
    "actual_max_temp": 94,
    "actual_precipitation": 0,
    "location": "KHOU"
  },
  {
    "": 1518,
    "date": "2014-8-28",
    "actual_mean_temp": 83,
    "actual_min_temp": 76,
    "actual_max_temp": 90,
    "actual_precipitation": 0,
    "location": "KHOU"
  },
  {
    "": 1519,
    "date": "2014-8-29",
    "actual_mean_temp": 83,
    "actual_min_temp": 75,
    "actual_max_temp": 91,
    "actual_precipitation": 0.02,
    "location": "KHOU"
  },
  {
    "": 1520,
    "date": "2014-8-30",
    "actual_mean_temp": 84,
    "actual_min_temp": 75,
    "actual_max_temp": 92,
    "actual_precipitation": 0,
    "location": "KHOU"
  },
  {
    "": 1521,
    "date": "2014-8-31",
    "actual_mean_temp": 79,
    "actual_min_temp": 74,
    "actual_max_temp": 84,
    "actual_precipitation": 0.83,
    "location": "KHOU"
  },
  {
    "": 1522,
    "date": "2014-9-1",
    "actual_mean_temp": 84,
    "actual_min_temp": 74,
    "actual_max_temp": 93,
    "actual_precipitation": 0.36,
    "location": "KHOU"
  },
  {
    "": 1523,
    "date": "2014-9-2",
    "actual_mean_temp": 85,
    "actual_min_temp": 76,
    "actual_max_temp": 94,
    "actual_precipitation": 0,
    "location": "KHOU"
  },
  {
    "": 1524,
    "date": "2014-9-3",
    "actual_mean_temp": 84,
    "actual_min_temp": 75,
    "actual_max_temp": 93,
    "actual_precipitation": 0,
    "location": "KHOU"
  },
  {
    "": 1525,
    "date": "2014-9-4",
    "actual_mean_temp": 85,
    "actual_min_temp": 76,
    "actual_max_temp": 93,
    "actual_precipitation": 0,
    "location": "KHOU"
  },
  {
    "": 1526,
    "date": "2014-9-5",
    "actual_mean_temp": 84,
    "actual_min_temp": 75,
    "actual_max_temp": 93,
    "actual_precipitation": 0.03,
    "location": "KHOU"
  },
  {
    "": 1527,
    "date": "2014-9-6",
    "actual_mean_temp": 85,
    "actual_min_temp": 75,
    "actual_max_temp": 95,
    "actual_precipitation": 0.16,
    "location": "KHOU"
  },
  {
    "": 1528,
    "date": "2014-9-7",
    "actual_mean_temp": 84,
    "actual_min_temp": 73,
    "actual_max_temp": 95,
    "actual_precipitation": 0.42,
    "location": "KHOU"
  },
  {
    "": 1529,
    "date": "2014-9-8",
    "actual_mean_temp": 82,
    "actual_min_temp": 72,
    "actual_max_temp": 92,
    "actual_precipitation": 0,
    "location": "KHOU"
  },
  {
    "": 1530,
    "date": "2014-9-9",
    "actual_mean_temp": 85,
    "actual_min_temp": 74,
    "actual_max_temp": 95,
    "actual_precipitation": 0,
    "location": "KHOU"
  },
  {
    "": 1531,
    "date": "2014-9-10",
    "actual_mean_temp": 87,
    "actual_min_temp": 78,
    "actual_max_temp": 95,
    "actual_precipitation": 0,
    "location": "KHOU"
  },
  {
    "": 1532,
    "date": "2014-9-11",
    "actual_mean_temp": 87,
    "actual_min_temp": 76,
    "actual_max_temp": 97,
    "actual_precipitation": 0,
    "location": "KHOU"
  },
  {
    "": 1533,
    "date": "2014-9-12",
    "actual_mean_temp": 82,
    "actual_min_temp": 75,
    "actual_max_temp": 89,
    "actual_precipitation": 0.02,
    "location": "KHOU"
  },
  {
    "": 1534,
    "date": "2014-9-13",
    "actual_mean_temp": 72,
    "actual_min_temp": 67,
    "actual_max_temp": 77,
    "actual_precipitation": 0.01,
    "location": "KHOU"
  },
  {
    "": 1535,
    "date": "2014-9-14",
    "actual_mean_temp": 71,
    "actual_min_temp": 65,
    "actual_max_temp": 77,
    "actual_precipitation": 0,
    "location": "KHOU"
  },
  {
    "": 1536,
    "date": "2014-9-15",
    "actual_mean_temp": 80,
    "actual_min_temp": 68,
    "actual_max_temp": 92,
    "actual_precipitation": 0,
    "location": "KHOU"
  },
  {
    "": 1537,
    "date": "2014-9-16",
    "actual_mean_temp": 83,
    "actual_min_temp": 75,
    "actual_max_temp": 91,
    "actual_precipitation": 0.12,
    "location": "KHOU"
  },
  {
    "": 1538,
    "date": "2014-9-17",
    "actual_mean_temp": 82,
    "actual_min_temp": 75,
    "actual_max_temp": 89,
    "actual_precipitation": 0.25,
    "location": "KHOU"
  },
  {
    "": 1539,
    "date": "2014-9-18",
    "actual_mean_temp": 77,
    "actual_min_temp": 73,
    "actual_max_temp": 81,
    "actual_precipitation": 2.31,
    "location": "KHOU"
  },
  {
    "": 1540,
    "date": "2014-9-19",
    "actual_mean_temp": 79,
    "actual_min_temp": 73,
    "actual_max_temp": 84,
    "actual_precipitation": 0.2,
    "location": "KHOU"
  },
  {
    "": 1541,
    "date": "2014-9-20",
    "actual_mean_temp": 81,
    "actual_min_temp": 73,
    "actual_max_temp": 89,
    "actual_precipitation": 0,
    "location": "KHOU"
  },
  {
    "": 1542,
    "date": "2014-9-21",
    "actual_mean_temp": 82,
    "actual_min_temp": 73,
    "actual_max_temp": 91,
    "actual_precipitation": 0,
    "location": "KHOU"
  },
  {
    "": 1543,
    "date": "2014-9-22",
    "actual_mean_temp": 83,
    "actual_min_temp": 72,
    "actual_max_temp": 93,
    "actual_precipitation": 0,
    "location": "KHOU"
  },
  {
    "": 1544,
    "date": "2014-9-23",
    "actual_mean_temp": 74,
    "actual_min_temp": 64,
    "actual_max_temp": 84,
    "actual_precipitation": 0,
    "location": "KHOU"
  },
  {
    "": 1545,
    "date": "2014-9-24",
    "actual_mean_temp": 75,
    "actual_min_temp": 64,
    "actual_max_temp": 85,
    "actual_precipitation": 0,
    "location": "KHOU"
  },
  {
    "": 1546,
    "date": "2014-9-25",
    "actual_mean_temp": 74,
    "actual_min_temp": 68,
    "actual_max_temp": 80,
    "actual_precipitation": 0,
    "location": "KHOU"
  },
  {
    "": 1547,
    "date": "2014-9-26",
    "actual_mean_temp": 77,
    "actual_min_temp": 68,
    "actual_max_temp": 86,
    "actual_precipitation": 0,
    "location": "KHOU"
  },
  {
    "": 1548,
    "date": "2014-9-27",
    "actual_mean_temp": 79,
    "actual_min_temp": 71,
    "actual_max_temp": 86,
    "actual_precipitation": 0,
    "location": "KHOU"
  },
  {
    "": 1549,
    "date": "2014-9-28",
    "actual_mean_temp": 81,
    "actual_min_temp": 72,
    "actual_max_temp": 89,
    "actual_precipitation": 0,
    "location": "KHOU"
  },
  {
    "": 1550,
    "date": "2014-9-29",
    "actual_mean_temp": 80,
    "actual_min_temp": 70,
    "actual_max_temp": 89,
    "actual_precipitation": 0,
    "location": "KHOU"
  },
  {
    "": 1551,
    "date": "2014-9-30",
    "actual_mean_temp": 80,
    "actual_min_temp": 71,
    "actual_max_temp": 89,
    "actual_precipitation": 0,
    "location": "KHOU"
  },
  {
    "": 1552,
    "date": "2014-10-1",
    "actual_mean_temp": 83,
    "actual_min_temp": 72,
    "actual_max_temp": 93,
    "actual_precipitation": 0.09,
    "location": "KHOU"
  },
  {
    "": 1553,
    "date": "2014-10-2",
    "actual_mean_temp": 82,
    "actual_min_temp": 71,
    "actual_max_temp": 93,
    "actual_precipitation": 0.78,
    "location": "KHOU"
  },
  {
    "": 1554,
    "date": "2014-10-3",
    "actual_mean_temp": 74,
    "actual_min_temp": 63,
    "actual_max_temp": 84,
    "actual_precipitation": 0.32,
    "location": "KHOU"
  },
  {
    "": 1555,
    "date": "2014-10-4",
    "actual_mean_temp": 68,
    "actual_min_temp": 59,
    "actual_max_temp": 77,
    "actual_precipitation": 0,
    "location": "KHOU"
  },
  {
    "": 1556,
    "date": "2014-10-5",
    "actual_mean_temp": 69,
    "actual_min_temp": 53,
    "actual_max_temp": 85,
    "actual_precipitation": 0,
    "location": "KHOU"
  },
  {
    "": 1557,
    "date": "2014-10-6",
    "actual_mean_temp": 75,
    "actual_min_temp": 65,
    "actual_max_temp": 84,
    "actual_precipitation": 0.69,
    "location": "KHOU"
  },
  {
    "": 1558,
    "date": "2014-10-7",
    "actual_mean_temp": 78,
    "actual_min_temp": 65,
    "actual_max_temp": 90,
    "actual_precipitation": 0,
    "location": "KHOU"
  },
  {
    "": 1559,
    "date": "2014-10-8",
    "actual_mean_temp": 80,
    "actual_min_temp": 69,
    "actual_max_temp": 90,
    "actual_precipitation": 0.06,
    "location": "KHOU"
  },
  {
    "": 1560,
    "date": "2014-10-9",
    "actual_mean_temp": 79,
    "actual_min_temp": 68,
    "actual_max_temp": 90,
    "actual_precipitation": 0,
    "location": "KHOU"
  },
  {
    "": 1561,
    "date": "2014-10-10",
    "actual_mean_temp": 83,
    "actual_min_temp": 75,
    "actual_max_temp": 91,
    "actual_precipitation": 0.03,
    "location": "KHOU"
  },
  {
    "": 1562,
    "date": "2014-10-11",
    "actual_mean_temp": 76,
    "actual_min_temp": 66,
    "actual_max_temp": 85,
    "actual_precipitation": 0.02,
    "location": "KHOU"
  },
  {
    "": 1563,
    "date": "2014-10-12",
    "actual_mean_temp": 76,
    "actual_min_temp": 65,
    "actual_max_temp": 87,
    "actual_precipitation": 0.35,
    "location": "KHOU"
  },
  {
    "": 1564,
    "date": "2014-10-13",
    "actual_mean_temp": 72,
    "actual_min_temp": 59,
    "actual_max_temp": 85,
    "actual_precipitation": 0.61,
    "location": "KHOU"
  },
  {
    "": 1565,
    "date": "2014-10-14",
    "actual_mean_temp": 67,
    "actual_min_temp": 54,
    "actual_max_temp": 79,
    "actual_precipitation": 0,
    "location": "KHOU"
  },
  {
    "": 1566,
    "date": "2014-10-15",
    "actual_mean_temp": 68,
    "actual_min_temp": 51,
    "actual_max_temp": 84,
    "actual_precipitation": 0,
    "location": "KHOU"
  },
  {
    "": 1567,
    "date": "2014-10-16",
    "actual_mean_temp": 72,
    "actual_min_temp": 57,
    "actual_max_temp": 87,
    "actual_precipitation": 0,
    "location": "KHOU"
  },
  {
    "": 1568,
    "date": "2014-10-17",
    "actual_mean_temp": 73,
    "actual_min_temp": 60,
    "actual_max_temp": 86,
    "actual_precipitation": 0,
    "location": "KHOU"
  },
  {
    "": 1569,
    "date": "2014-10-18",
    "actual_mean_temp": 75,
    "actual_min_temp": 63,
    "actual_max_temp": 86,
    "actual_precipitation": 0.5,
    "location": "KHOU"
  },
  {
    "": 1570,
    "date": "2014-10-19",
    "actual_mean_temp": 72,
    "actual_min_temp": 62,
    "actual_max_temp": 81,
    "actual_precipitation": 0,
    "location": "KHOU"
  },
  {
    "": 1571,
    "date": "2014-10-20",
    "actual_mean_temp": 71,
    "actual_min_temp": 59,
    "actual_max_temp": 83,
    "actual_precipitation": 0,
    "location": "KHOU"
  },
  {
    "": 1572,
    "date": "2014-10-21",
    "actual_mean_temp": 69,
    "actual_min_temp": 55,
    "actual_max_temp": 82,
    "actual_precipitation": 0,
    "location": "KHOU"
  },
  {
    "": 1573,
    "date": "2014-10-22",
    "actual_mean_temp": 72,
    "actual_min_temp": 61,
    "actual_max_temp": 82,
    "actual_precipitation": 0,
    "location": "KHOU"
  },
  {
    "": 1574,
    "date": "2014-10-23",
    "actual_mean_temp": 69,
    "actual_min_temp": 58,
    "actual_max_temp": 80,
    "actual_precipitation": 0,
    "location": "KHOU"
  },
  {
    "": 1575,
    "date": "2014-10-24",
    "actual_mean_temp": 68,
    "actual_min_temp": 54,
    "actual_max_temp": 82,
    "actual_precipitation": 0,
    "location": "KHOU"
  },
  {
    "": 1576,
    "date": "2014-10-25",
    "actual_mean_temp": 70,
    "actual_min_temp": 55,
    "actual_max_temp": 85,
    "actual_precipitation": 0,
    "location": "KHOU"
  },
  {
    "": 1577,
    "date": "2014-10-26",
    "actual_mean_temp": 71,
    "actual_min_temp": 56,
    "actual_max_temp": 85,
    "actual_precipitation": 0,
    "location": "KHOU"
  },
  {
    "": 1578,
    "date": "2014-10-27",
    "actual_mean_temp": 72,
    "actual_min_temp": 58,
    "actual_max_temp": 86,
    "actual_precipitation": 0,
    "location": "KHOU"
  },
  {
    "": 1579,
    "date": "2014-10-28",
    "actual_mean_temp": 73,
    "actual_min_temp": 60,
    "actual_max_temp": 86,
    "actual_precipitation": 0,
    "location": "KHOU"
  },
  {
    "": 1580,
    "date": "2014-10-29",
    "actual_mean_temp": 73,
    "actual_min_temp": 61,
    "actual_max_temp": 84,
    "actual_precipitation": 0,
    "location": "KHOU"
  },
  {
    "": 1581,
    "date": "2014-10-30",
    "actual_mean_temp": 67,
    "actual_min_temp": 55,
    "actual_max_temp": 79,
    "actual_precipitation": 0,
    "location": "KHOU"
  },
  {
    "": 1582,
    "date": "2014-10-31",
    "actual_mean_temp": 67,
    "actual_min_temp": 55,
    "actual_max_temp": 79,
    "actual_precipitation": 0,
    "location": "KHOU"
  },
  {
    "": 1583,
    "date": "2014-11-1",
    "actual_mean_temp": 55,
    "actual_min_temp": 45,
    "actual_max_temp": 65,
    "actual_precipitation": 0,
    "location": "KHOU"
  },
  {
    "": 1584,
    "date": "2014-11-2",
    "actual_mean_temp": 57,
    "actual_min_temp": 41,
    "actual_max_temp": 72,
    "actual_precipitation": 0,
    "location": "KHOU"
  },
  {
    "": 1585,
    "date": "2014-11-3",
    "actual_mean_temp": 67,
    "actual_min_temp": 53,
    "actual_max_temp": 80,
    "actual_precipitation": 0,
    "location": "KHOU"
  },
  {
    "": 1586,
    "date": "2014-11-4",
    "actual_mean_temp": 72,
    "actual_min_temp": 62,
    "actual_max_temp": 82,
    "actual_precipitation": 0,
    "location": "KHOU"
  },
  {
    "": 1587,
    "date": "2014-11-5",
    "actual_mean_temp": 69,
    "actual_min_temp": 64,
    "actual_max_temp": 74,
    "actual_precipitation": 1.12,
    "location": "KHOU"
  },
  {
    "": 1588,
    "date": "2014-11-6",
    "actual_mean_temp": 62,
    "actual_min_temp": 58,
    "actual_max_temp": 66,
    "actual_precipitation": 0.17,
    "location": "KHOU"
  },
  {
    "": 1589,
    "date": "2014-11-7",
    "actual_mean_temp": 57,
    "actual_min_temp": 49,
    "actual_max_temp": 65,
    "actual_precipitation": 0,
    "location": "KHOU"
  },
  {
    "": 1590,
    "date": "2014-11-8",
    "actual_mean_temp": 63,
    "actual_min_temp": 50,
    "actual_max_temp": 75,
    "actual_precipitation": 0,
    "location": "KHOU"
  },
  {
    "": 1591,
    "date": "2014-11-9",
    "actual_mean_temp": 60,
    "actual_min_temp": 47,
    "actual_max_temp": 72,
    "actual_precipitation": 0,
    "location": "KHOU"
  },
  {
    "": 1592,
    "date": "2014-11-10",
    "actual_mean_temp": 63,
    "actual_min_temp": 45,
    "actual_max_temp": 80,
    "actual_precipitation": 0,
    "location": "KHOU"
  },
  {
    "": 1593,
    "date": "2014-11-11",
    "actual_mean_temp": 60,
    "actual_min_temp": 49,
    "actual_max_temp": 71,
    "actual_precipitation": 0.01,
    "location": "KHOU"
  },
  {
    "": 1594,
    "date": "2014-11-12",
    "actual_mean_temp": 51,
    "actual_min_temp": 43,
    "actual_max_temp": 58,
    "actual_precipitation": 0,
    "location": "KHOU"
  },
  {
    "": 1595,
    "date": "2014-11-13",
    "actual_mean_temp": 41,
    "actual_min_temp": 36,
    "actual_max_temp": 45,
    "actual_precipitation": 0.2,
    "location": "KHOU"
  },
  {
    "": 1596,
    "date": "2014-11-14",
    "actual_mean_temp": 41,
    "actual_min_temp": 34,
    "actual_max_temp": 47,
    "actual_precipitation": 0,
    "location": "KHOU"
  },
  {
    "": 1597,
    "date": "2014-11-15",
    "actual_mean_temp": 48,
    "actual_min_temp": 43,
    "actual_max_temp": 53,
    "actual_precipitation": 0.3,
    "location": "KHOU"
  },
  {
    "": 1598,
    "date": "2014-11-16",
    "actual_mean_temp": 50,
    "actual_min_temp": 42,
    "actual_max_temp": 57,
    "actual_precipitation": 0.65,
    "location": "KHOU"
  },
  {
    "": 1599,
    "date": "2014-11-17",
    "actual_mean_temp": 44,
    "actual_min_temp": 36,
    "actual_max_temp": 52,
    "actual_precipitation": 0,
    "location": "KHOU"
  },
  {
    "": 1600,
    "date": "2014-11-18",
    "actual_mean_temp": 44,
    "actual_min_temp": 32,
    "actual_max_temp": 55,
    "actual_precipitation": 0,
    "location": "KHOU"
  },
  {
    "": 1601,
    "date": "2014-11-19",
    "actual_mean_temp": 50,
    "actual_min_temp": 30,
    "actual_max_temp": 69,
    "actual_precipitation": 0,
    "location": "KHOU"
  },
  {
    "": 1602,
    "date": "2014-11-20",
    "actual_mean_temp": 61,
    "actual_min_temp": 46,
    "actual_max_temp": 76,
    "actual_precipitation": 0.04,
    "location": "KHOU"
  },
  {
    "": 1603,
    "date": "2014-11-21",
    "actual_mean_temp": 64,
    "actual_min_temp": 61,
    "actual_max_temp": 66,
    "actual_precipitation": 0.57,
    "location": "KHOU"
  },
  {
    "": 1604,
    "date": "2014-11-22",
    "actual_mean_temp": 63,
    "actual_min_temp": 58,
    "actual_max_temp": 68,
    "actual_precipitation": 0.11,
    "location": "KHOU"
  },
  {
    "": 1605,
    "date": "2014-11-23",
    "actual_mean_temp": 71,
    "actual_min_temp": 61,
    "actual_max_temp": 80,
    "actual_precipitation": 0.23,
    "location": "KHOU"
  },
  {
    "": 1606,
    "date": "2014-11-24",
    "actual_mean_temp": 56,
    "actual_min_temp": 45,
    "actual_max_temp": 66,
    "actual_precipitation": 0,
    "location": "KHOU"
  },
  {
    "": 1607,
    "date": "2014-11-25",
    "actual_mean_temp": 54,
    "actual_min_temp": 41,
    "actual_max_temp": 66,
    "actual_precipitation": 0,
    "location": "KHOU"
  },
  {
    "": 1608,
    "date": "2014-11-26",
    "actual_mean_temp": 58,
    "actual_min_temp": 43,
    "actual_max_temp": 73,
    "actual_precipitation": 0,
    "location": "KHOU"
  },
  {
    "": 1609,
    "date": "2014-11-27",
    "actual_mean_temp": 55,
    "actual_min_temp": 43,
    "actual_max_temp": 67,
    "actual_precipitation": 0,
    "location": "KHOU"
  },
  {
    "": 1610,
    "date": "2014-11-28",
    "actual_mean_temp": 55,
    "actual_min_temp": 39,
    "actual_max_temp": 71,
    "actual_precipitation": 0,
    "location": "KHOU"
  },
  {
    "": 1611,
    "date": "2014-11-29",
    "actual_mean_temp": 69,
    "actual_min_temp": 60,
    "actual_max_temp": 78,
    "actual_precipitation": 0,
    "location": "KHOU"
  },
  {
    "": 1612,
    "date": "2014-11-30",
    "actual_mean_temp": 71,
    "actual_min_temp": 61,
    "actual_max_temp": 80,
    "actual_precipitation": 0,
    "location": "KHOU"
  },
  {
    "": 1613,
    "date": "2014-12-1",
    "actual_mean_temp": 57,
    "actual_min_temp": 45,
    "actual_max_temp": 69,
    "actual_precipitation": 0.03,
    "location": "KHOU"
  },
  {
    "": 1614,
    "date": "2014-12-2",
    "actual_mean_temp": 50,
    "actual_min_temp": 44,
    "actual_max_temp": 56,
    "actual_precipitation": 0,
    "location": "KHOU"
  },
  {
    "": 1615,
    "date": "2014-12-3",
    "actual_mean_temp": 59,
    "actual_min_temp": 52,
    "actual_max_temp": 66,
    "actual_precipitation": 0,
    "location": "KHOU"
  },
  {
    "": 1616,
    "date": "2014-12-4",
    "actual_mean_temp": 63,
    "actual_min_temp": 53,
    "actual_max_temp": 72,
    "actual_precipitation": 0,
    "location": "KHOU"
  },
  {
    "": 1617,
    "date": "2014-12-5",
    "actual_mean_temp": 72,
    "actual_min_temp": 65,
    "actual_max_temp": 79,
    "actual_precipitation": 0.07,
    "location": "KHOU"
  },
  {
    "": 1618,
    "date": "2014-12-6",
    "actual_mean_temp": 65,
    "actual_min_temp": 58,
    "actual_max_temp": 71,
    "actual_precipitation": 0,
    "location": "KHOU"
  },
  {
    "": 1619,
    "date": "2014-12-7",
    "actual_mean_temp": 57,
    "actual_min_temp": 54,
    "actual_max_temp": 59,
    "actual_precipitation": 0,
    "location": "KHOU"
  },
  {
    "": 1620,
    "date": "2014-12-8",
    "actual_mean_temp": 57,
    "actual_min_temp": 46,
    "actual_max_temp": 67,
    "actual_precipitation": 0,
    "location": "KHOU"
  },
  {
    "": 1621,
    "date": "2014-12-9",
    "actual_mean_temp": 57,
    "actual_min_temp": 43,
    "actual_max_temp": 70,
    "actual_precipitation": 0,
    "location": "KHOU"
  },
  {
    "": 1622,
    "date": "2014-12-10",
    "actual_mean_temp": 56,
    "actual_min_temp": 42,
    "actual_max_temp": 69,
    "actual_precipitation": 0,
    "location": "KHOU"
  },
  {
    "": 1623,
    "date": "2014-12-11",
    "actual_mean_temp": 64,
    "actual_min_temp": 56,
    "actual_max_temp": 72,
    "actual_precipitation": 0.02,
    "location": "KHOU"
  },
  {
    "": 1624,
    "date": "2014-12-12",
    "actual_mean_temp": 66,
    "actual_min_temp": 57,
    "actual_max_temp": 75,
    "actual_precipitation": 0,
    "location": "KHOU"
  },
  {
    "": 1625,
    "date": "2014-12-13",
    "actual_mean_temp": 64,
    "actual_min_temp": 54,
    "actual_max_temp": 74,
    "actual_precipitation": 0,
    "location": "KHOU"
  },
  {
    "": 1626,
    "date": "2014-12-14",
    "actual_mean_temp": 67,
    "actual_min_temp": 58,
    "actual_max_temp": 76,
    "actual_precipitation": 0,
    "location": "KHOU"
  },
  {
    "": 1627,
    "date": "2014-12-15",
    "actual_mean_temp": 70,
    "actual_min_temp": 59,
    "actual_max_temp": 80,
    "actual_precipitation": 0,
    "location": "KHOU"
  },
  {
    "": 1628,
    "date": "2014-12-16",
    "actual_mean_temp": 57,
    "actual_min_temp": 48,
    "actual_max_temp": 66,
    "actual_precipitation": 0,
    "location": "KHOU"
  },
  {
    "": 1629,
    "date": "2014-12-17",
    "actual_mean_temp": 54,
    "actual_min_temp": 44,
    "actual_max_temp": 64,
    "actual_precipitation": 0,
    "location": "KHOU"
  },
  {
    "": 1630,
    "date": "2014-12-18",
    "actual_mean_temp": 64,
    "actual_min_temp": 57,
    "actual_max_temp": 70,
    "actual_precipitation": 0.8,
    "location": "KHOU"
  },
  {
    "": 1631,
    "date": "2014-12-19",
    "actual_mean_temp": 56,
    "actual_min_temp": 52,
    "actual_max_temp": 59,
    "actual_precipitation": 3.06,
    "location": "KHOU"
  },
  {
    "": 1632,
    "date": "2014-12-20",
    "actual_mean_temp": 52,
    "actual_min_temp": 50,
    "actual_max_temp": 54,
    "actual_precipitation": 0,
    "location": "KHOU"
  },
  {
    "": 1633,
    "date": "2014-12-21",
    "actual_mean_temp": 55,
    "actual_min_temp": 48,
    "actual_max_temp": 61,
    "actual_precipitation": 0,
    "location": "KHOU"
  },
  {
    "": 1634,
    "date": "2014-12-22",
    "actual_mean_temp": 64,
    "actual_min_temp": 55,
    "actual_max_temp": 72,
    "actual_precipitation": 0,
    "location": "KHOU"
  },
  {
    "": 1635,
    "date": "2014-12-23",
    "actual_mean_temp": 54,
    "actual_min_temp": 48,
    "actual_max_temp": 60,
    "actual_precipitation": 0.69,
    "location": "KHOU"
  },
  {
    "": 1636,
    "date": "2014-12-24",
    "actual_mean_temp": 46,
    "actual_min_temp": 37,
    "actual_max_temp": 55,
    "actual_precipitation": 0,
    "location": "KHOU"
  },
  {
    "": 1637,
    "date": "2014-12-25",
    "actual_mean_temp": 50,
    "actual_min_temp": 34,
    "actual_max_temp": 66,
    "actual_precipitation": 0,
    "location": "KHOU"
  },
  {
    "": 1638,
    "date": "2014-12-26",
    "actual_mean_temp": 61,
    "actual_min_temp": 51,
    "actual_max_temp": 71,
    "actual_precipitation": 0.04,
    "location": "KHOU"
  },
  {
    "": 1639,
    "date": "2014-12-27",
    "actual_mean_temp": 60,
    "actual_min_temp": 46,
    "actual_max_temp": 74,
    "actual_precipitation": 0.22,
    "location": "KHOU"
  },
  {
    "": 1640,
    "date": "2014-12-28",
    "actual_mean_temp": 44,
    "actual_min_temp": 41,
    "actual_max_temp": 46,
    "actual_precipitation": 0.67,
    "location": "KHOU"
  },
  {
    "": 1641,
    "date": "2014-12-29",
    "actual_mean_temp": 44,
    "actual_min_temp": 39,
    "actual_max_temp": 48,
    "actual_precipitation": 0,
    "location": "KHOU"
  },
  {
    "": 1642,
    "date": "2014-12-30",
    "actual_mean_temp": 46,
    "actual_min_temp": 38,
    "actual_max_temp": 53,
    "actual_precipitation": 0,
    "location": "KHOU"
  },
  {
    "": 1643,
    "date": "2014-12-31",
    "actual_mean_temp": 42,
    "actual_min_temp": 37,
    "actual_max_temp": 46,
    "actual_precipitation": 0,
    "location": "KHOU"
  },
  {
    "": 1644,
    "date": "2015-1-1",
    "actual_mean_temp": 44,
    "actual_min_temp": 41,
    "actual_max_temp": 47,
    "actual_precipitation": 0.15,
    "location": "KHOU"
  },
  {
    "": 1645,
    "date": "2015-1-2",
    "actual_mean_temp": 51,
    "actual_min_temp": 47,
    "actual_max_temp": 54,
    "actual_precipitation": 0.63,
    "location": "KHOU"
  },
  {
    "": 1646,
    "date": "2015-1-3",
    "actual_mean_temp": 47,
    "actual_min_temp": 41,
    "actual_max_temp": 53,
    "actual_precipitation": 0.63,
    "location": "KHOU"
  },
  {
    "": 1647,
    "date": "2015-1-4",
    "actual_mean_temp": 46,
    "actual_min_temp": 36,
    "actual_max_temp": 56,
    "actual_precipitation": 0,
    "location": "KHOU"
  },
  {
    "": 1648,
    "date": "2015-1-5",
    "actual_mean_temp": 43,
    "actual_min_temp": 31,
    "actual_max_temp": 54,
    "actual_precipitation": 0,
    "location": "KHOU"
  },
  {
    "": 1649,
    "date": "2015-1-6",
    "actual_mean_temp": 50,
    "actual_min_temp": 34,
    "actual_max_temp": 65,
    "actual_precipitation": 0,
    "location": "KHOU"
  },
  {
    "": 1650,
    "date": "2015-1-7",
    "actual_mean_temp": 51,
    "actual_min_temp": 39,
    "actual_max_temp": 62,
    "actual_precipitation": 0,
    "location": "KHOU"
  },
  {
    "": 1651,
    "date": "2015-1-8",
    "actual_mean_temp": 35,
    "actual_min_temp": 28,
    "actual_max_temp": 42,
    "actual_precipitation": 0.01,
    "location": "KHOU"
  },
  {
    "": 1652,
    "date": "2015-1-9",
    "actual_mean_temp": 39,
    "actual_min_temp": 37,
    "actual_max_temp": 40,
    "actual_precipitation": 0.06,
    "location": "KHOU"
  },
  {
    "": 1653,
    "date": "2015-1-10",
    "actual_mean_temp": 39,
    "actual_min_temp": 37,
    "actual_max_temp": 41,
    "actual_precipitation": 0.08,
    "location": "KHOU"
  },
  {
    "": 1654,
    "date": "2015-1-11",
    "actual_mean_temp": 44,
    "actual_min_temp": 39,
    "actual_max_temp": 49,
    "actual_precipitation": 0.66,
    "location": "KHOU"
  },
  {
    "": 1655,
    "date": "2015-1-12",
    "actual_mean_temp": 46,
    "actual_min_temp": 43,
    "actual_max_temp": 49,
    "actual_precipitation": 0,
    "location": "KHOU"
  },
  {
    "": 1656,
    "date": "2015-1-13",
    "actual_mean_temp": 45,
    "actual_min_temp": 43,
    "actual_max_temp": 46,
    "actual_precipitation": 0.05,
    "location": "KHOU"
  },
  {
    "": 1657,
    "date": "2015-1-14",
    "actual_mean_temp": 42,
    "actual_min_temp": 39,
    "actual_max_temp": 45,
    "actual_precipitation": 0,
    "location": "KHOU"
  },
  {
    "": 1658,
    "date": "2015-1-15",
    "actual_mean_temp": 47,
    "actual_min_temp": 39,
    "actual_max_temp": 54,
    "actual_precipitation": 0,
    "location": "KHOU"
  },
  {
    "": 1659,
    "date": "2015-1-16",
    "actual_mean_temp": 47,
    "actual_min_temp": 33,
    "actual_max_temp": 61,
    "actual_precipitation": 0,
    "location": "KHOU"
  },
  {
    "": 1660,
    "date": "2015-1-17",
    "actual_mean_temp": 53,
    "actual_min_temp": 37,
    "actual_max_temp": 69,
    "actual_precipitation": 0,
    "location": "KHOU"
  },
  {
    "": 1661,
    "date": "2015-1-18",
    "actual_mean_temp": 57,
    "actual_min_temp": 43,
    "actual_max_temp": 71,
    "actual_precipitation": 0,
    "location": "KHOU"
  },
  {
    "": 1662,
    "date": "2015-1-19",
    "actual_mean_temp": 53,
    "actual_min_temp": 34,
    "actual_max_temp": 72,
    "actual_precipitation": 0,
    "location": "KHOU"
  },
  {
    "": 1663,
    "date": "2015-1-20",
    "actual_mean_temp": 61,
    "actual_min_temp": 45,
    "actual_max_temp": 76,
    "actual_precipitation": 0,
    "location": "KHOU"
  },
  {
    "": 1664,
    "date": "2015-1-21",
    "actual_mean_temp": 62,
    "actual_min_temp": 57,
    "actual_max_temp": 67,
    "actual_precipitation": 0,
    "location": "KHOU"
  },
  {
    "": 1665,
    "date": "2015-1-22",
    "actual_mean_temp": 52,
    "actual_min_temp": 44,
    "actual_max_temp": 60,
    "actual_precipitation": 0.87,
    "location": "KHOU"
  },
  {
    "": 1666,
    "date": "2015-1-23",
    "actual_mean_temp": 42,
    "actual_min_temp": 39,
    "actual_max_temp": 44,
    "actual_precipitation": 0.03,
    "location": "KHOU"
  },
  {
    "": 1667,
    "date": "2015-1-24",
    "actual_mean_temp": 49,
    "actual_min_temp": 35,
    "actual_max_temp": 62,
    "actual_precipitation": 0,
    "location": "KHOU"
  },
  {
    "": 1668,
    "date": "2015-1-25",
    "actual_mean_temp": 55,
    "actual_min_temp": 40,
    "actual_max_temp": 70,
    "actual_precipitation": 0,
    "location": "KHOU"
  },
  {
    "": 1669,
    "date": "2015-1-26",
    "actual_mean_temp": 56,
    "actual_min_temp": 44,
    "actual_max_temp": 67,
    "actual_precipitation": 0,
    "location": "KHOU"
  },
  {
    "": 1670,
    "date": "2015-1-27",
    "actual_mean_temp": 64,
    "actual_min_temp": 47,
    "actual_max_temp": 81,
    "actual_precipitation": 0,
    "location": "KHOU"
  },
  {
    "": 1671,
    "date": "2015-1-28",
    "actual_mean_temp": 61,
    "actual_min_temp": 43,
    "actual_max_temp": 79,
    "actual_precipitation": 0,
    "location": "KHOU"
  },
  {
    "": 1672,
    "date": "2015-1-29",
    "actual_mean_temp": 62,
    "actual_min_temp": 49,
    "actual_max_temp": 75,
    "actual_precipitation": 0,
    "location": "KHOU"
  },
  {
    "": 1673,
    "date": "2015-1-30",
    "actual_mean_temp": 55,
    "actual_min_temp": 45,
    "actual_max_temp": 65,
    "actual_precipitation": 0,
    "location": "KHOU"
  },
  {
    "": 1674,
    "date": "2015-1-31",
    "actual_mean_temp": 53,
    "actual_min_temp": 42,
    "actual_max_temp": 63,
    "actual_precipitation": 0,
    "location": "KHOU"
  },
  {
    "": 1675,
    "date": "2015-2-1",
    "actual_mean_temp": 63,
    "actual_min_temp": 48,
    "actual_max_temp": 77,
    "actual_precipitation": 0.01,
    "location": "KHOU"
  },
  {
    "": 1676,
    "date": "2015-2-2",
    "actual_mean_temp": 43,
    "actual_min_temp": 36,
    "actual_max_temp": 50,
    "actual_precipitation": 0,
    "location": "KHOU"
  },
  {
    "": 1677,
    "date": "2015-2-3",
    "actual_mean_temp": 44,
    "actual_min_temp": 41,
    "actual_max_temp": 46,
    "actual_precipitation": 0.17,
    "location": "KHOU"
  },
  {
    "": 1678,
    "date": "2015-2-4",
    "actual_mean_temp": 52,
    "actual_min_temp": 42,
    "actual_max_temp": 61,
    "actual_precipitation": 0.16,
    "location": "KHOU"
  },
  {
    "": 1679,
    "date": "2015-2-5",
    "actual_mean_temp": 48,
    "actual_min_temp": 41,
    "actual_max_temp": 55,
    "actual_precipitation": 0,
    "location": "KHOU"
  },
  {
    "": 1680,
    "date": "2015-2-6",
    "actual_mean_temp": 49,
    "actual_min_temp": 41,
    "actual_max_temp": 56,
    "actual_precipitation": 0,
    "location": "KHOU"
  },
  {
    "": 1681,
    "date": "2015-2-7",
    "actual_mean_temp": 53,
    "actual_min_temp": 37,
    "actual_max_temp": 69,
    "actual_precipitation": 0,
    "location": "KHOU"
  },
  {
    "": 1682,
    "date": "2015-2-8",
    "actual_mean_temp": 66,
    "actual_min_temp": 54,
    "actual_max_temp": 77,
    "actual_precipitation": 0,
    "location": "KHOU"
  },
  {
    "": 1683,
    "date": "2015-2-9",
    "actual_mean_temp": 69,
    "actual_min_temp": 54,
    "actual_max_temp": 83,
    "actual_precipitation": 0,
    "location": "KHOU"
  },
  {
    "": 1684,
    "date": "2015-2-10",
    "actual_mean_temp": 59,
    "actual_min_temp": 43,
    "actual_max_temp": 74,
    "actual_precipitation": 0,
    "location": "KHOU"
  },
  {
    "": 1685,
    "date": "2015-2-11",
    "actual_mean_temp": 60,
    "actual_min_temp": 44,
    "actual_max_temp": 75,
    "actual_precipitation": 0,
    "location": "KHOU"
  },
  {
    "": 1686,
    "date": "2015-2-12",
    "actual_mean_temp": 56,
    "actual_min_temp": 46,
    "actual_max_temp": 66,
    "actual_precipitation": 0,
    "location": "KHOU"
  },
  {
    "": 1687,
    "date": "2015-2-13",
    "actual_mean_temp": 53,
    "actual_min_temp": 39,
    "actual_max_temp": 66,
    "actual_precipitation": 0,
    "location": "KHOU"
  },
  {
    "": 1688,
    "date": "2015-2-14",
    "actual_mean_temp": 61,
    "actual_min_temp": 43,
    "actual_max_temp": 78,
    "actual_precipitation": 0,
    "location": "KHOU"
  },
  {
    "": 1689,
    "date": "2015-2-15",
    "actual_mean_temp": 61,
    "actual_min_temp": 51,
    "actual_max_temp": 71,
    "actual_precipitation": 0.02,
    "location": "KHOU"
  },
  {
    "": 1690,
    "date": "2015-2-16",
    "actual_mean_temp": 53,
    "actual_min_temp": 37,
    "actual_max_temp": 68,
    "actual_precipitation": 0.15,
    "location": "KHOU"
  },
  {
    "": 1691,
    "date": "2015-2-17",
    "actual_mean_temp": 44,
    "actual_min_temp": 34,
    "actual_max_temp": 54,
    "actual_precipitation": 0,
    "location": "KHOU"
  },
  {
    "": 1692,
    "date": "2015-2-18",
    "actual_mean_temp": 49,
    "actual_min_temp": 33,
    "actual_max_temp": 64,
    "actual_precipitation": 0,
    "location": "KHOU"
  },
  {
    "": 1693,
    "date": "2015-2-19",
    "actual_mean_temp": 51,
    "actual_min_temp": 37,
    "actual_max_temp": 64,
    "actual_precipitation": 0,
    "location": "KHOU"
  },
  {
    "": 1694,
    "date": "2015-2-20",
    "actual_mean_temp": 61,
    "actual_min_temp": 52,
    "actual_max_temp": 69,
    "actual_precipitation": 0.01,
    "location": "KHOU"
  },
  {
    "": 1695,
    "date": "2015-2-21",
    "actual_mean_temp": 70,
    "actual_min_temp": 65,
    "actual_max_temp": 75,
    "actual_precipitation": 0,
    "location": "KHOU"
  },
  {
    "": 1696,
    "date": "2015-2-22",
    "actual_mean_temp": 63,
    "actual_min_temp": 45,
    "actual_max_temp": 80,
    "actual_precipitation": 0,
    "location": "KHOU"
  },
  {
    "": 1697,
    "date": "2015-2-23",
    "actual_mean_temp": 40,
    "actual_min_temp": 34,
    "actual_max_temp": 46,
    "actual_precipitation": 0.02,
    "location": "KHOU"
  },
  {
    "": 1698,
    "date": "2015-2-24",
    "actual_mean_temp": 38,
    "actual_min_temp": 33,
    "actual_max_temp": 43,
    "actual_precipitation": 0,
    "location": "KHOU"
  },
  {
    "": 1699,
    "date": "2015-2-25",
    "actual_mean_temp": 42,
    "actual_min_temp": 33,
    "actual_max_temp": 50,
    "actual_precipitation": 0.1,
    "location": "KHOU"
  },
  {
    "": 1700,
    "date": "2015-2-26",
    "actual_mean_temp": 43,
    "actual_min_temp": 31,
    "actual_max_temp": 55,
    "actual_precipitation": 0,
    "location": "KHOU"
  },
  {
    "": 1701,
    "date": "2015-2-27",
    "actual_mean_temp": 42,
    "actual_min_temp": 37,
    "actual_max_temp": 46,
    "actual_precipitation": 0,
    "location": "KHOU"
  },
  {
    "": 1702,
    "date": "2015-2-28",
    "actual_mean_temp": 47,
    "actual_min_temp": 37,
    "actual_max_temp": 57,
    "actual_precipitation": 0.02,
    "location": "KHOU"
  },
  {
    "": 1703,
    "date": "2015-3-1",
    "actual_mean_temp": 54,
    "actual_min_temp": 49,
    "actual_max_temp": 59,
    "actual_precipitation": 0.22,
    "location": "KHOU"
  },
  {
    "": 1704,
    "date": "2015-3-2",
    "actual_mean_temp": 54,
    "actual_min_temp": 48,
    "actual_max_temp": 60,
    "actual_precipitation": 0.01,
    "location": "KHOU"
  },
  {
    "": 1705,
    "date": "2015-3-3",
    "actual_mean_temp": 68,
    "actual_min_temp": 56,
    "actual_max_temp": 80,
    "actual_precipitation": 0,
    "location": "KHOU"
  },
  {
    "": 1706,
    "date": "2015-3-4",
    "actual_mean_temp": 63,
    "actual_min_temp": 43,
    "actual_max_temp": 83,
    "actual_precipitation": 0,
    "location": "KHOU"
  },
  {
    "": 1707,
    "date": "2015-3-5",
    "actual_mean_temp": 44,
    "actual_min_temp": 36,
    "actual_max_temp": 51,
    "actual_precipitation": 0.15,
    "location": "KHOU"
  },
  {
    "": 1708,
    "date": "2015-3-6",
    "actual_mean_temp": 44,
    "actual_min_temp": 30,
    "actual_max_temp": 57,
    "actual_precipitation": 0,
    "location": "KHOU"
  },
  {
    "": 1709,
    "date": "2015-3-7",
    "actual_mean_temp": 48,
    "actual_min_temp": 35,
    "actual_max_temp": 60,
    "actual_precipitation": 0,
    "location": "KHOU"
  },
  {
    "": 1710,
    "date": "2015-3-8",
    "actual_mean_temp": 49,
    "actual_min_temp": 45,
    "actual_max_temp": 53,
    "actual_precipitation": 1.49,
    "location": "KHOU"
  },
  {
    "": 1711,
    "date": "2015-3-9",
    "actual_mean_temp": 58,
    "actual_min_temp": 50,
    "actual_max_temp": 66,
    "actual_precipitation": 1.96,
    "location": "KHOU"
  },
  {
    "": 1712,
    "date": "2015-3-10",
    "actual_mean_temp": 57,
    "actual_min_temp": 53,
    "actual_max_temp": 60,
    "actual_precipitation": 0,
    "location": "KHOU"
  },
  {
    "": 1713,
    "date": "2015-3-11",
    "actual_mean_temp": 58,
    "actual_min_temp": 53,
    "actual_max_temp": 62,
    "actual_precipitation": 0.12,
    "location": "KHOU"
  },
  {
    "": 1714,
    "date": "2015-3-12",
    "actual_mean_temp": 59,
    "actual_min_temp": 55,
    "actual_max_temp": 62,
    "actual_precipitation": 0.33,
    "location": "KHOU"
  },
  {
    "": 1715,
    "date": "2015-3-13",
    "actual_mean_temp": 61,
    "actual_min_temp": 55,
    "actual_max_temp": 66,
    "actual_precipitation": 0.34,
    "location": "KHOU"
  },
  {
    "": 1716,
    "date": "2015-3-14",
    "actual_mean_temp": 64,
    "actual_min_temp": 51,
    "actual_max_temp": 77,
    "actual_precipitation": 0,
    "location": "KHOU"
  },
  {
    "": 1717,
    "date": "2015-3-15",
    "actual_mean_temp": 64,
    "actual_min_temp": 55,
    "actual_max_temp": 73,
    "actual_precipitation": 0,
    "location": "KHOU"
  },
  {
    "": 1718,
    "date": "2015-3-16",
    "actual_mean_temp": 67,
    "actual_min_temp": 57,
    "actual_max_temp": 77,
    "actual_precipitation": 0,
    "location": "KHOU"
  },
  {
    "": 1719,
    "date": "2015-3-17",
    "actual_mean_temp": 70,
    "actual_min_temp": 58,
    "actual_max_temp": 82,
    "actual_precipitation": 0,
    "location": "KHOU"
  },
  {
    "": 1720,
    "date": "2015-3-18",
    "actual_mean_temp": 74,
    "actual_min_temp": 65,
    "actual_max_temp": 82,
    "actual_precipitation": 0.11,
    "location": "KHOU"
  },
  {
    "": 1721,
    "date": "2015-3-19",
    "actual_mean_temp": 73,
    "actual_min_temp": 66,
    "actual_max_temp": 79,
    "actual_precipitation": 0.49,
    "location": "KHOU"
  },
  {
    "": 1722,
    "date": "2015-3-20",
    "actual_mean_temp": 74,
    "actual_min_temp": 66,
    "actual_max_temp": 82,
    "actual_precipitation": 0.02,
    "location": "KHOU"
  },
  {
    "": 1723,
    "date": "2015-3-21",
    "actual_mean_temp": 65,
    "actual_min_temp": 64,
    "actual_max_temp": 66,
    "actual_precipitation": 1.01,
    "location": "KHOU"
  },
  {
    "": 1724,
    "date": "2015-3-22",
    "actual_mean_temp": 68,
    "actual_min_temp": 60,
    "actual_max_temp": 76,
    "actual_precipitation": 0,
    "location": "KHOU"
  },
  {
    "": 1725,
    "date": "2015-3-23",
    "actual_mean_temp": 68,
    "actual_min_temp": 55,
    "actual_max_temp": 80,
    "actual_precipitation": 0,
    "location": "KHOU"
  },
  {
    "": 1726,
    "date": "2015-3-24",
    "actual_mean_temp": 67,
    "actual_min_temp": 53,
    "actual_max_temp": 80,
    "actual_precipitation": 0,
    "location": "KHOU"
  },
  {
    "": 1727,
    "date": "2015-3-25",
    "actual_mean_temp": 68,
    "actual_min_temp": 56,
    "actual_max_temp": 80,
    "actual_precipitation": 0,
    "location": "KHOU"
  },
  {
    "": 1728,
    "date": "2015-3-26",
    "actual_mean_temp": 62,
    "actual_min_temp": 54,
    "actual_max_temp": 69,
    "actual_precipitation": 0.09,
    "location": "KHOU"
  },
  {
    "": 1729,
    "date": "2015-3-27",
    "actual_mean_temp": 62,
    "actual_min_temp": 44,
    "actual_max_temp": 80,
    "actual_precipitation": 0,
    "location": "KHOU"
  },
  {
    "": 1730,
    "date": "2015-3-28",
    "actual_mean_temp": 65,
    "actual_min_temp": 47,
    "actual_max_temp": 82,
    "actual_precipitation": 0,
    "location": "KHOU"
  },
  {
    "": 1731,
    "date": "2015-3-29",
    "actual_mean_temp": 70,
    "actual_min_temp": 57,
    "actual_max_temp": 82,
    "actual_precipitation": 0,
    "location": "KHOU"
  },
  {
    "": 1732,
    "date": "2015-3-30",
    "actual_mean_temp": 72,
    "actual_min_temp": 61,
    "actual_max_temp": 83,
    "actual_precipitation": 0,
    "location": "KHOU"
  },
  {
    "": 1733,
    "date": "2015-3-31",
    "actual_mean_temp": 74,
    "actual_min_temp": 64,
    "actual_max_temp": 83,
    "actual_precipitation": 0,
    "location": "KHOU"
  },
  {
    "": 1734,
    "date": "2015-4-1",
    "actual_mean_temp": 74,
    "actual_min_temp": 69,
    "actual_max_temp": 79,
    "actual_precipitation": 0.01,
    "location": "KHOU"
  },
  {
    "": 1735,
    "date": "2015-4-2",
    "actual_mean_temp": 77,
    "actual_min_temp": 69,
    "actual_max_temp": 84,
    "actual_precipitation": 0,
    "location": "KHOU"
  },
  {
    "": 1736,
    "date": "2015-4-3",
    "actual_mean_temp": 77,
    "actual_min_temp": 71,
    "actual_max_temp": 82,
    "actual_precipitation": 0,
    "location": "KHOU"
  },
  {
    "": 1737,
    "date": "2015-4-4",
    "actual_mean_temp": 67,
    "actual_min_temp": 61,
    "actual_max_temp": 73,
    "actual_precipitation": 0,
    "location": "KHOU"
  },
  {
    "": 1738,
    "date": "2015-4-5",
    "actual_mean_temp": 62,
    "actual_min_temp": 57,
    "actual_max_temp": 67,
    "actual_precipitation": 0.02,
    "location": "KHOU"
  },
  {
    "": 1739,
    "date": "2015-4-6",
    "actual_mean_temp": 75,
    "actual_min_temp": 67,
    "actual_max_temp": 82,
    "actual_precipitation": 0,
    "location": "KHOU"
  },
  {
    "": 1740,
    "date": "2015-4-7",
    "actual_mean_temp": 79,
    "actual_min_temp": 70,
    "actual_max_temp": 87,
    "actual_precipitation": 0,
    "location": "KHOU"
  },
  {
    "": 1741,
    "date": "2015-4-8",
    "actual_mean_temp": 78,
    "actual_min_temp": 71,
    "actual_max_temp": 84,
    "actual_precipitation": 0,
    "location": "KHOU"
  },
  {
    "": 1742,
    "date": "2015-4-9",
    "actual_mean_temp": 78,
    "actual_min_temp": 70,
    "actual_max_temp": 86,
    "actual_precipitation": 0,
    "location": "KHOU"
  },
  {
    "": 1743,
    "date": "2015-4-10",
    "actual_mean_temp": 68,
    "actual_min_temp": 61,
    "actual_max_temp": 74,
    "actual_precipitation": 1.74,
    "location": "KHOU"
  },
  {
    "": 1744,
    "date": "2015-4-11",
    "actual_mean_temp": 70,
    "actual_min_temp": 63,
    "actual_max_temp": 77,
    "actual_precipitation": 0.13,
    "location": "KHOU"
  },
  {
    "": 1745,
    "date": "2015-4-12",
    "actual_mean_temp": 74,
    "actual_min_temp": 68,
    "actual_max_temp": 80,
    "actual_precipitation": 0.14,
    "location": "KHOU"
  },
  {
    "": 1746,
    "date": "2015-4-13",
    "actual_mean_temp": 79,
    "actual_min_temp": 71,
    "actual_max_temp": 86,
    "actual_precipitation": 0.32,
    "location": "KHOU"
  },
  {
    "": 1747,
    "date": "2015-4-14",
    "actual_mean_temp": 70,
    "actual_min_temp": 64,
    "actual_max_temp": 76,
    "actual_precipitation": 0.12,
    "location": "KHOU"
  },
  {
    "": 1748,
    "date": "2015-4-15",
    "actual_mean_temp": 71,
    "actual_min_temp": 60,
    "actual_max_temp": 81,
    "actual_precipitation": 0,
    "location": "KHOU"
  },
  {
    "": 1749,
    "date": "2015-4-16",
    "actual_mean_temp": 74,
    "actual_min_temp": 65,
    "actual_max_temp": 82,
    "actual_precipitation": 1.66,
    "location": "KHOU"
  },
  {
    "": 1750,
    "date": "2015-4-17",
    "actual_mean_temp": 74,
    "actual_min_temp": 64,
    "actual_max_temp": 83,
    "actual_precipitation": 1.1,
    "location": "KHOU"
  },
  {
    "": 1751,
    "date": "2015-4-18",
    "actual_mean_temp": 72,
    "actual_min_temp": 66,
    "actual_max_temp": 78,
    "actual_precipitation": 0.09,
    "location": "KHOU"
  },
  {
    "": 1752,
    "date": "2015-4-19",
    "actual_mean_temp": 72,
    "actual_min_temp": 58,
    "actual_max_temp": 86,
    "actual_precipitation": 0.54,
    "location": "KHOU"
  },
  {
    "": 1753,
    "date": "2015-4-20",
    "actual_mean_temp": 67,
    "actual_min_temp": 59,
    "actual_max_temp": 74,
    "actual_precipitation": 0,
    "location": "KHOU"
  },
  {
    "": 1754,
    "date": "2015-4-21",
    "actual_mean_temp": 68,
    "actual_min_temp": 56,
    "actual_max_temp": 79,
    "actual_precipitation": 0,
    "location": "KHOU"
  },
  {
    "": 1755,
    "date": "2015-4-22",
    "actual_mean_temp": 76,
    "actual_min_temp": 67,
    "actual_max_temp": 84,
    "actual_precipitation": 0,
    "location": "KHOU"
  },
  {
    "": 1756,
    "date": "2015-4-23",
    "actual_mean_temp": 79,
    "actual_min_temp": 69,
    "actual_max_temp": 88,
    "actual_precipitation": 0,
    "location": "KHOU"
  },
  {
    "": 1757,
    "date": "2015-4-24",
    "actual_mean_temp": 78,
    "actual_min_temp": 71,
    "actual_max_temp": 85,
    "actual_precipitation": 0,
    "location": "KHOU"
  },
  {
    "": 1758,
    "date": "2015-4-25",
    "actual_mean_temp": 78,
    "actual_min_temp": 67,
    "actual_max_temp": 88,
    "actual_precipitation": 0.21,
    "location": "KHOU"
  },
  {
    "": 1759,
    "date": "2015-4-26",
    "actual_mean_temp": 76,
    "actual_min_temp": 67,
    "actual_max_temp": 85,
    "actual_precipitation": 0,
    "location": "KHOU"
  },
  {
    "": 1760,
    "date": "2015-4-27",
    "actual_mean_temp": 72,
    "actual_min_temp": 66,
    "actual_max_temp": 78,
    "actual_precipitation": 0.02,
    "location": "KHOU"
  },
  {
    "": 1761,
    "date": "2015-4-28",
    "actual_mean_temp": 64,
    "actual_min_temp": 56,
    "actual_max_temp": 71,
    "actual_precipitation": 0,
    "location": "KHOU"
  },
  {
    "": 1762,
    "date": "2015-4-29",
    "actual_mean_temp": 65,
    "actual_min_temp": 52,
    "actual_max_temp": 78,
    "actual_precipitation": 0,
    "location": "KHOU"
  },
  {
    "": 1763,
    "date": "2015-4-30",
    "actual_mean_temp": 68,
    "actual_min_temp": 53,
    "actual_max_temp": 82,
    "actual_precipitation": 0,
    "location": "KHOU"
  },
  {
    "": 1764,
    "date": "2015-5-1",
    "actual_mean_temp": 71,
    "actual_min_temp": 57,
    "actual_max_temp": 84,
    "actual_precipitation": 0,
    "location": "KHOU"
  },
  {
    "": 1765,
    "date": "2015-5-2",
    "actual_mean_temp": 70,
    "actual_min_temp": 57,
    "actual_max_temp": 83,
    "actual_precipitation": 0,
    "location": "KHOU"
  },
  {
    "": 1766,
    "date": "2015-5-3",
    "actual_mean_temp": 70,
    "actual_min_temp": 57,
    "actual_max_temp": 83,
    "actual_precipitation": 0,
    "location": "KHOU"
  },
  {
    "": 1767,
    "date": "2015-5-4",
    "actual_mean_temp": 73,
    "actual_min_temp": 61,
    "actual_max_temp": 84,
    "actual_precipitation": 0,
    "location": "KHOU"
  },
  {
    "": 1768,
    "date": "2015-5-5",
    "actual_mean_temp": 73,
    "actual_min_temp": 63,
    "actual_max_temp": 82,
    "actual_precipitation": 0.13,
    "location": "KHOU"
  },
  {
    "": 1769,
    "date": "2015-5-6",
    "actual_mean_temp": 78,
    "actual_min_temp": 73,
    "actual_max_temp": 83,
    "actual_precipitation": 0.41,
    "location": "KHOU"
  },
  {
    "": 1770,
    "date": "2015-5-7",
    "actual_mean_temp": 80,
    "actual_min_temp": 74,
    "actual_max_temp": 85,
    "actual_precipitation": 0,
    "location": "KHOU"
  },
  {
    "": 1771,
    "date": "2015-5-8",
    "actual_mean_temp": 81,
    "actual_min_temp": 77,
    "actual_max_temp": 85,
    "actual_precipitation": 0,
    "location": "KHOU"
  },
  {
    "": 1772,
    "date": "2015-5-9",
    "actual_mean_temp": 82,
    "actual_min_temp": 76,
    "actual_max_temp": 87,
    "actual_precipitation": 0,
    "location": "KHOU"
  },
  {
    "": 1773,
    "date": "2015-5-10",
    "actual_mean_temp": 82,
    "actual_min_temp": 77,
    "actual_max_temp": 87,
    "actual_precipitation": 0.03,
    "location": "KHOU"
  },
  {
    "": 1774,
    "date": "2015-5-11",
    "actual_mean_temp": 75,
    "actual_min_temp": 69,
    "actual_max_temp": 80,
    "actual_precipitation": 0.28,
    "location": "KHOU"
  },
  {
    "": 1775,
    "date": "2015-5-12",
    "actual_mean_temp": 74,
    "actual_min_temp": 69,
    "actual_max_temp": 79,
    "actual_precipitation": 0.56,
    "location": "KHOU"
  },
  {
    "": 1776,
    "date": "2015-5-13",
    "actual_mean_temp": 75,
    "actual_min_temp": 68,
    "actual_max_temp": 81,
    "actual_precipitation": 1.55,
    "location": "KHOU"
  },
  {
    "": 1777,
    "date": "2015-5-14",
    "actual_mean_temp": 80,
    "actual_min_temp": 72,
    "actual_max_temp": 87,
    "actual_precipitation": 0.05,
    "location": "KHOU"
  },
  {
    "": 1778,
    "date": "2015-5-15",
    "actual_mean_temp": 79,
    "actual_min_temp": 73,
    "actual_max_temp": 84,
    "actual_precipitation": 0.15,
    "location": "KHOU"
  },
  {
    "": 1779,
    "date": "2015-5-16",
    "actual_mean_temp": 81,
    "actual_min_temp": 73,
    "actual_max_temp": 89,
    "actual_precipitation": 0,
    "location": "KHOU"
  },
  {
    "": 1780,
    "date": "2015-5-17",
    "actual_mean_temp": 78,
    "actual_min_temp": 71,
    "actual_max_temp": 85,
    "actual_precipitation": 0.98,
    "location": "KHOU"
  },
  {
    "": 1781,
    "date": "2015-5-18",
    "actual_mean_temp": 80,
    "actual_min_temp": 73,
    "actual_max_temp": 86,
    "actual_precipitation": 0.24,
    "location": "KHOU"
  },
  {
    "": 1782,
    "date": "2015-5-19",
    "actual_mean_temp": 80,
    "actual_min_temp": 73,
    "actual_max_temp": 86,
    "actual_precipitation": 0.02,
    "location": "KHOU"
  },
  {
    "": 1783,
    "date": "2015-5-20",
    "actual_mean_temp": 81,
    "actual_min_temp": 73,
    "actual_max_temp": 89,
    "actual_precipitation": 0.31,
    "location": "KHOU"
  },
  {
    "": 1784,
    "date": "2015-5-21",
    "actual_mean_temp": 77,
    "actual_min_temp": 71,
    "actual_max_temp": 82,
    "actual_precipitation": 1.08,
    "location": "KHOU"
  },
  {
    "": 1785,
    "date": "2015-5-22",
    "actual_mean_temp": 72,
    "actual_min_temp": 65,
    "actual_max_temp": 79,
    "actual_precipitation": 0,
    "location": "KHOU"
  },
  {
    "": 1786,
    "date": "2015-5-23",
    "actual_mean_temp": 79,
    "actual_min_temp": 73,
    "actual_max_temp": 85,
    "actual_precipitation": 0.72,
    "location": "KHOU"
  },
  {
    "": 1787,
    "date": "2015-5-24",
    "actual_mean_temp": 75,
    "actual_min_temp": 69,
    "actual_max_temp": 81,
    "actual_precipitation": 0.56,
    "location": "KHOU"
  },
  {
    "": 1788,
    "date": "2015-5-25",
    "actual_mean_temp": 77,
    "actual_min_temp": 66,
    "actual_max_temp": 88,
    "actual_precipitation": 4.34,
    "location": "KHOU"
  },
  {
    "": 1789,
    "date": "2015-5-26",
    "actual_mean_temp": 76,
    "actual_min_temp": 66,
    "actual_max_temp": 85,
    "actual_precipitation": 0.77,
    "location": "KHOU"
  },
  {
    "": 1790,
    "date": "2015-5-27",
    "actual_mean_temp": 76,
    "actual_min_temp": 65,
    "actual_max_temp": 86,
    "actual_precipitation": 1.41,
    "location": "KHOU"
  },
  {
    "": 1791,
    "date": "2015-5-28",
    "actual_mean_temp": 80,
    "actual_min_temp": 70,
    "actual_max_temp": 90,
    "actual_precipitation": 0,
    "location": "KHOU"
  },
  {
    "": 1792,
    "date": "2015-5-29",
    "actual_mean_temp": 80,
    "actual_min_temp": 70,
    "actual_max_temp": 89,
    "actual_precipitation": 0.01,
    "location": "KHOU"
  },
  {
    "": 1793,
    "date": "2015-5-30",
    "actual_mean_temp": 80,
    "actual_min_temp": 69,
    "actual_max_temp": 91,
    "actual_precipitation": 0.57,
    "location": "KHOU"
  },
  {
    "": 1794,
    "date": "2015-5-31",
    "actual_mean_temp": 78,
    "actual_min_temp": 69,
    "actual_max_temp": 87,
    "actual_precipitation": 0,
    "location": "KHOU"
  },
  {
    "": 1795,
    "date": "2015-6-1",
    "actual_mean_temp": 78,
    "actual_min_temp": 66,
    "actual_max_temp": 89,
    "actual_precipitation": 0,
    "location": "KHOU"
  },
  {
    "": 1796,
    "date": "2015-6-2",
    "actual_mean_temp": 79,
    "actual_min_temp": 68,
    "actual_max_temp": 90,
    "actual_precipitation": 0,
    "location": "KHOU"
  },
  {
    "": 1797,
    "date": "2015-6-3",
    "actual_mean_temp": 80,
    "actual_min_temp": 69,
    "actual_max_temp": 91,
    "actual_precipitation": 0,
    "location": "KHOU"
  },
  {
    "": 1798,
    "date": "2015-6-4",
    "actual_mean_temp": 80,
    "actual_min_temp": 69,
    "actual_max_temp": 90,
    "actual_precipitation": 0,
    "location": "KHOU"
  },
  {
    "": 1799,
    "date": "2015-6-5",
    "actual_mean_temp": 82,
    "actual_min_temp": 72,
    "actual_max_temp": 92,
    "actual_precipitation": 0,
    "location": "KHOU"
  },
  {
    "": 1800,
    "date": "2015-6-6",
    "actual_mean_temp": 83,
    "actual_min_temp": 72,
    "actual_max_temp": 93,
    "actual_precipitation": 0,
    "location": "KHOU"
  },
  {
    "": 1801,
    "date": "2015-6-7",
    "actual_mean_temp": 83,
    "actual_min_temp": 72,
    "actual_max_temp": 93,
    "actual_precipitation": 0,
    "location": "KHOU"
  },
  {
    "": 1802,
    "date": "2015-6-8",
    "actual_mean_temp": 83,
    "actual_min_temp": 72,
    "actual_max_temp": 93,
    "actual_precipitation": 0,
    "location": "KHOU"
  },
  {
    "": 1803,
    "date": "2015-6-9",
    "actual_mean_temp": 84,
    "actual_min_temp": 74,
    "actual_max_temp": 93,
    "actual_precipitation": 0,
    "location": "KHOU"
  },
  {
    "": 1804,
    "date": "2015-6-10",
    "actual_mean_temp": 84,
    "actual_min_temp": 74,
    "actual_max_temp": 94,
    "actual_precipitation": 0,
    "location": "KHOU"
  },
  {
    "": 1805,
    "date": "2015-6-11",
    "actual_mean_temp": 84,
    "actual_min_temp": 73,
    "actual_max_temp": 94,
    "actual_precipitation": 0.01,
    "location": "KHOU"
  },
  {
    "": 1806,
    "date": "2015-6-12",
    "actual_mean_temp": 83,
    "actual_min_temp": 74,
    "actual_max_temp": 92,
    "actual_precipitation": 0,
    "location": "KHOU"
  },
  {
    "": 1807,
    "date": "2015-6-13",
    "actual_mean_temp": 80,
    "actual_min_temp": 74,
    "actual_max_temp": 86,
    "actual_precipitation": 0.35,
    "location": "KHOU"
  },
  {
    "": 1808,
    "date": "2015-6-14",
    "actual_mean_temp": 81,
    "actual_min_temp": 74,
    "actual_max_temp": 88,
    "actual_precipitation": 0.52,
    "location": "KHOU"
  },
  {
    "": 1809,
    "date": "2015-6-15",
    "actual_mean_temp": 83,
    "actual_min_temp": 75,
    "actual_max_temp": 90,
    "actual_precipitation": 0.14,
    "location": "KHOU"
  },
  {
    "": 1810,
    "date": "2015-6-16",
    "actual_mean_temp": 78,
    "actual_min_temp": 75,
    "actual_max_temp": 80,
    "actual_precipitation": 2.26,
    "location": "KHOU"
  },
  {
    "": 1811,
    "date": "2015-6-17",
    "actual_mean_temp": 80,
    "actual_min_temp": 76,
    "actual_max_temp": 84,
    "actual_precipitation": 0.7,
    "location": "KHOU"
  },
  {
    "": 1812,
    "date": "2015-6-18",
    "actual_mean_temp": 81,
    "actual_min_temp": 76,
    "actual_max_temp": 86,
    "actual_precipitation": 0,
    "location": "KHOU"
  },
  {
    "": 1813,
    "date": "2015-6-19",
    "actual_mean_temp": 83,
    "actual_min_temp": 76,
    "actual_max_temp": 90,
    "actual_precipitation": 0,
    "location": "KHOU"
  },
  {
    "": 1814,
    "date": "2015-6-20",
    "actual_mean_temp": 84,
    "actual_min_temp": 77,
    "actual_max_temp": 90,
    "actual_precipitation": 0.2,
    "location": "KHOU"
  },
  {
    "": 1815,
    "date": "2015-6-21",
    "actual_mean_temp": 86,
    "actual_min_temp": 78,
    "actual_max_temp": 93,
    "actual_precipitation": 0,
    "location": "KHOU"
  },
  {
    "": 1816,
    "date": "2015-6-22",
    "actual_mean_temp": 84,
    "actual_min_temp": 76,
    "actual_max_temp": 92,
    "actual_precipitation": 0,
    "location": "KHOU"
  },
  {
    "": 1817,
    "date": "2015-6-23",
    "actual_mean_temp": 84,
    "actual_min_temp": 76,
    "actual_max_temp": 92,
    "actual_precipitation": 0,
    "location": "KHOU"
  },
  {
    "": 1818,
    "date": "2015-6-24",
    "actual_mean_temp": 84,
    "actual_min_temp": 74,
    "actual_max_temp": 93,
    "actual_precipitation": 0,
    "location": "KHOU"
  },
  {
    "": 1819,
    "date": "2015-6-25",
    "actual_mean_temp": 85,
    "actual_min_temp": 75,
    "actual_max_temp": 94,
    "actual_precipitation": 0,
    "location": "KHOU"
  },
  {
    "": 1820,
    "date": "2015-6-26",
    "actual_mean_temp": 86,
    "actual_min_temp": 77,
    "actual_max_temp": 94,
    "actual_precipitation": 0.13,
    "location": "KHOU"
  },
  {
    "": 1821,
    "date": "2015-6-27",
    "actual_mean_temp": 83,
    "actual_min_temp": 73,
    "actual_max_temp": 93,
    "actual_precipitation": 2.38,
    "location": "KHOU"
  },
  {
    "": 1822,
    "date": "2015-6-28",
    "actual_mean_temp": 82,
    "actual_min_temp": 73,
    "actual_max_temp": 90,
    "actual_precipitation": 2.24,
    "location": "KHOU"
  },
  {
    "": 1823,
    "date": "2015-6-29",
    "actual_mean_temp": 84,
    "actual_min_temp": 76,
    "actual_max_temp": 92,
    "actual_precipitation": 0,
    "location": "KHOU"
  },
  {
    "": 1824,
    "date": "2015-6-30",
    "actual_mean_temp": 82,
    "actual_min_temp": 72,
    "actual_max_temp": 92,
    "actual_precipitation": 2.26,
    "location": "KHOU"
  },
  {
    "": 1825,
    "date": "2014-7-1",
    "actual_mean_temp": 81,
    "actual_min_temp": 72,
    "actual_max_temp": 89,
    "actual_precipitation": 0,
    "location": "KNYC"
  },
  {
    "": 1826,
    "date": "2014-7-2",
    "actual_mean_temp": 82,
    "actual_min_temp": 72,
    "actual_max_temp": 91,
    "actual_precipitation": 0.96,
    "location": "KNYC"
  },
  {
    "": 1827,
    "date": "2014-7-3",
    "actual_mean_temp": 78,
    "actual_min_temp": 69,
    "actual_max_temp": 87,
    "actual_precipitation": 1.78,
    "location": "KNYC"
  },
  {
    "": 1828,
    "date": "2014-7-4",
    "actual_mean_temp": 70,
    "actual_min_temp": 65,
    "actual_max_temp": 74,
    "actual_precipitation": 0.14,
    "location": "KNYC"
  },
  {
    "": 1829,
    "date": "2014-7-5",
    "actual_mean_temp": 72,
    "actual_min_temp": 63,
    "actual_max_temp": 81,
    "actual_precipitation": 0,
    "location": "KNYC"
  },
  {
    "": 1830,
    "date": "2014-7-6",
    "actual_mean_temp": 75,
    "actual_min_temp": 66,
    "actual_max_temp": 84,
    "actual_precipitation": 0,
    "location": "KNYC"
  },
  {
    "": 1831,
    "date": "2014-7-7",
    "actual_mean_temp": 81,
    "actual_min_temp": 72,
    "actual_max_temp": 90,
    "actual_precipitation": 0.04,
    "location": "KNYC"
  },
  {
    "": 1832,
    "date": "2014-7-8",
    "actual_mean_temp": 81,
    "actual_min_temp": 71,
    "actual_max_temp": 91,
    "actual_precipitation": 0.39,
    "location": "KNYC"
  },
  {
    "": 1833,
    "date": "2014-7-9",
    "actual_mean_temp": 80,
    "actual_min_temp": 71,
    "actual_max_temp": 88,
    "actual_precipitation": 0.09,
    "location": "KNYC"
  },
  {
    "": 1834,
    "date": "2014-7-10",
    "actual_mean_temp": 78,
    "actual_min_temp": 72,
    "actual_max_temp": 83,
    "actual_precipitation": 0,
    "location": "KNYC"
  },
  {
    "": 1835,
    "date": "2014-7-11",
    "actual_mean_temp": 79,
    "actual_min_temp": 71,
    "actual_max_temp": 86,
    "actual_precipitation": 0,
    "location": "KNYC"
  },
  {
    "": 1836,
    "date": "2014-7-12",
    "actual_mean_temp": 78,
    "actual_min_temp": 71,
    "actual_max_temp": 85,
    "actual_precipitation": 0,
    "location": "KNYC"
  },
  {
    "": 1837,
    "date": "2014-7-13",
    "actual_mean_temp": 78,
    "actual_min_temp": 72,
    "actual_max_temp": 83,
    "actual_precipitation": 0.03,
    "location": "KNYC"
  },
  {
    "": 1838,
    "date": "2014-7-14",
    "actual_mean_temp": 78,
    "actual_min_temp": 72,
    "actual_max_temp": 84,
    "actual_precipitation": 0.46,
    "location": "KNYC"
  },
  {
    "": 1839,
    "date": "2014-7-15",
    "actual_mean_temp": 79,
    "actual_min_temp": 72,
    "actual_max_temp": 86,
    "actual_precipitation": 1.3,
    "location": "KNYC"
  },
  {
    "": 1840,
    "date": "2014-7-16",
    "actual_mean_temp": 75,
    "actual_min_temp": 68,
    "actual_max_temp": 81,
    "actual_precipitation": 0,
    "location": "KNYC"
  },
  {
    "": 1841,
    "date": "2014-7-17",
    "actual_mean_temp": 74,
    "actual_min_temp": 67,
    "actual_max_temp": 81,
    "actual_precipitation": 0,
    "location": "KNYC"
  },
  {
    "": 1842,
    "date": "2014-7-18",
    "actual_mean_temp": 73,
    "actual_min_temp": 64,
    "actual_max_temp": 81,
    "actual_precipitation": 0,
    "location": "KNYC"
  },
  {
    "": 1843,
    "date": "2014-7-19",
    "actual_mean_temp": 72,
    "actual_min_temp": 68,
    "actual_max_temp": 76,
    "actual_precipitation": 0,
    "location": "KNYC"
  },
  {
    "": 1844,
    "date": "2014-7-20",
    "actual_mean_temp": 72,
    "actual_min_temp": 66,
    "actual_max_temp": 78,
    "actual_precipitation": 0,
    "location": "KNYC"
  },
  {
    "": 1845,
    "date": "2014-7-21",
    "actual_mean_temp": 76,
    "actual_min_temp": 67,
    "actual_max_temp": 85,
    "actual_precipitation": 0,
    "location": "KNYC"
  },
  {
    "": 1846,
    "date": "2014-7-22",
    "actual_mean_temp": 79,
    "actual_min_temp": 71,
    "actual_max_temp": 86,
    "actual_precipitation": 0,
    "location": "KNYC"
  },
  {
    "": 1847,
    "date": "2014-7-23",
    "actual_mean_temp": 80,
    "actual_min_temp": 72,
    "actual_max_temp": 88,
    "actual_precipitation": 0.19,
    "location": "KNYC"
  },
  {
    "": 1848,
    "date": "2014-7-24",
    "actual_mean_temp": 75,
    "actual_min_temp": 70,
    "actual_max_temp": 80,
    "actual_precipitation": 0,
    "location": "KNYC"
  },
  {
    "": 1849,
    "date": "2014-7-25",
    "actual_mean_temp": 74,
    "actual_min_temp": 66,
    "actual_max_temp": 82,
    "actual_precipitation": 0,
    "location": "KNYC"
  },
  {
    "": 1850,
    "date": "2014-7-26",
    "actual_mean_temp": 75,
    "actual_min_temp": 69,
    "actual_max_temp": 81,
    "actual_precipitation": 0,
    "location": "KNYC"
  },
  {
    "": 1851,
    "date": "2014-7-27",
    "actual_mean_temp": 78,
    "actual_min_temp": 71,
    "actual_max_temp": 85,
    "actual_precipitation": 0.02,
    "location": "KNYC"
  },
  {
    "": 1852,
    "date": "2014-7-28",
    "actual_mean_temp": 75,
    "actual_min_temp": 68,
    "actual_max_temp": 82,
    "actual_precipitation": 0.19,
    "location": "KNYC"
  },
  {
    "": 1853,
    "date": "2014-7-29",
    "actual_mean_temp": 70,
    "actual_min_temp": 64,
    "actual_max_temp": 76,
    "actual_precipitation": 0,
    "location": "KNYC"
  },
  {
    "": 1854,
    "date": "2014-7-30",
    "actual_mean_temp": 72,
    "actual_min_temp": 63,
    "actual_max_temp": 80,
    "actual_precipitation": 0,
    "location": "KNYC"
  },
  {
    "": 1855,
    "date": "2014-7-31",
    "actual_mean_temp": 75,
    "actual_min_temp": 68,
    "actual_max_temp": 82,
    "actual_precipitation": 0,
    "location": "KNYC"
  },
  {
    "": 1856,
    "date": "2014-8-1",
    "actual_mean_temp": 78,
    "actual_min_temp": 71,
    "actual_max_temp": 84,
    "actual_precipitation": 0,
    "location": "KNYC"
  },
  {
    "": 1857,
    "date": "2014-8-2",
    "actual_mean_temp": 69,
    "actual_min_temp": 63,
    "actual_max_temp": 74,
    "actual_precipitation": 0.41,
    "location": "KNYC"
  },
  {
    "": 1858,
    "date": "2014-8-3",
    "actual_mean_temp": 71,
    "actual_min_temp": 66,
    "actual_max_temp": 76,
    "actual_precipitation": 0.07,
    "location": "KNYC"
  },
  {
    "": 1859,
    "date": "2014-8-4",
    "actual_mean_temp": 77,
    "actual_min_temp": 70,
    "actual_max_temp": 84,
    "actual_precipitation": 0,
    "location": "KNYC"
  },
  {
    "": 1860,
    "date": "2014-8-5",
    "actual_mean_temp": 81,
    "actual_min_temp": 71,
    "actual_max_temp": 90,
    "actual_precipitation": 0,
    "location": "KNYC"
  },
  {
    "": 1861,
    "date": "2014-8-6",
    "actual_mean_temp": 77,
    "actual_min_temp": 70,
    "actual_max_temp": 83,
    "actual_precipitation": 0,
    "location": "KNYC"
  },
  {
    "": 1862,
    "date": "2014-8-7",
    "actual_mean_temp": 75,
    "actual_min_temp": 66,
    "actual_max_temp": 83,
    "actual_precipitation": 0,
    "location": "KNYC"
  },
  {
    "": 1863,
    "date": "2014-8-8",
    "actual_mean_temp": 74,
    "actual_min_temp": 65,
    "actual_max_temp": 83,
    "actual_precipitation": 0,
    "location": "KNYC"
  },
  {
    "": 1864,
    "date": "2014-8-9",
    "actual_mean_temp": 77,
    "actual_min_temp": 66,
    "actual_max_temp": 87,
    "actual_precipitation": 0,
    "location": "KNYC"
  },
  {
    "": 1865,
    "date": "2014-8-10",
    "actual_mean_temp": 78,
    "actual_min_temp": 68,
    "actual_max_temp": 88,
    "actual_precipitation": 0,
    "location": "KNYC"
  },
  {
    "": 1866,
    "date": "2014-8-11",
    "actual_mean_temp": 79,
    "actual_min_temp": 71,
    "actual_max_temp": 87,
    "actual_precipitation": 0,
    "location": "KNYC"
  },
  {
    "": 1867,
    "date": "2014-8-12",
    "actual_mean_temp": 75,
    "actual_min_temp": 70,
    "actual_max_temp": 79,
    "actual_precipitation": 0.19,
    "location": "KNYC"
  },
  {
    "": 1868,
    "date": "2014-8-13",
    "actual_mean_temp": 75,
    "actual_min_temp": 68,
    "actual_max_temp": 82,
    "actual_precipitation": 0.53,
    "location": "KNYC"
  },
  {
    "": 1869,
    "date": "2014-8-14",
    "actual_mean_temp": 70,
    "actual_min_temp": 63,
    "actual_max_temp": 77,
    "actual_precipitation": 0,
    "location": "KNYC"
  },
  {
    "": 1870,
    "date": "2014-8-15",
    "actual_mean_temp": 67,
    "actual_min_temp": 61,
    "actual_max_temp": 73,
    "actual_precipitation": 0,
    "location": "KNYC"
  },
  {
    "": 1871,
    "date": "2014-8-16",
    "actual_mean_temp": 71,
    "actual_min_temp": 63,
    "actual_max_temp": 78,
    "actual_precipitation": 0,
    "location": "KNYC"
  },
  {
    "": 1872,
    "date": "2014-8-17",
    "actual_mean_temp": 74,
    "actual_min_temp": 66,
    "actual_max_temp": 82,
    "actual_precipitation": 0.01,
    "location": "KNYC"
  },
  {
    "": 1873,
    "date": "2014-8-18",
    "actual_mean_temp": 72,
    "actual_min_temp": 63,
    "actual_max_temp": 81,
    "actual_precipitation": 0,
    "location": "KNYC"
  },
  {
    "": 1874,
    "date": "2014-8-19",
    "actual_mean_temp": 73,
    "actual_min_temp": 63,
    "actual_max_temp": 83,
    "actual_precipitation": 0,
    "location": "KNYC"
  },
  {
    "": 1875,
    "date": "2014-8-20",
    "actual_mean_temp": 77,
    "actual_min_temp": 70,
    "actual_max_temp": 84,
    "actual_precipitation": 0,
    "location": "KNYC"
  },
  {
    "": 1876,
    "date": "2014-8-21",
    "actual_mean_temp": 74,
    "actual_min_temp": 65,
    "actual_max_temp": 83,
    "actual_precipitation": 0.35,
    "location": "KNYC"
  },
  {
    "": 1877,
    "date": "2014-8-22",
    "actual_mean_temp": 72,
    "actual_min_temp": 65,
    "actual_max_temp": 79,
    "actual_precipitation": 0.06,
    "location": "KNYC"
  },
  {
    "": 1878,
    "date": "2014-8-23",
    "actual_mean_temp": 72,
    "actual_min_temp": 67,
    "actual_max_temp": 77,
    "actual_precipitation": 0.01,
    "location": "KNYC"
  },
  {
    "": 1879,
    "date": "2014-8-24",
    "actual_mean_temp": 72,
    "actual_min_temp": 64,
    "actual_max_temp": 80,
    "actual_precipitation": 0,
    "location": "KNYC"
  },
  {
    "": 1880,
    "date": "2014-8-25",
    "actual_mean_temp": 76,
    "actual_min_temp": 64,
    "actual_max_temp": 88,
    "actual_precipitation": 0,
    "location": "KNYC"
  },
  {
    "": 1881,
    "date": "2014-8-26",
    "actual_mean_temp": 80,
    "actual_min_temp": 70,
    "actual_max_temp": 89,
    "actual_precipitation": 0,
    "location": "KNYC"
  },
  {
    "": 1882,
    "date": "2014-8-27",
    "actual_mean_temp": 80,
    "actual_min_temp": 70,
    "actual_max_temp": 90,
    "actual_precipitation": 0,
    "location": "KNYC"
  },
  {
    "": 1883,
    "date": "2014-8-28",
    "actual_mean_temp": 74,
    "actual_min_temp": 66,
    "actual_max_temp": 82,
    "actual_precipitation": 0,
    "location": "KNYC"
  },
  {
    "": 1884,
    "date": "2014-8-29",
    "actual_mean_temp": 71,
    "actual_min_temp": 61,
    "actual_max_temp": 80,
    "actual_precipitation": 0,
    "location": "KNYC"
  },
  {
    "": 1885,
    "date": "2014-8-30",
    "actual_mean_temp": 73,
    "actual_min_temp": 65,
    "actual_max_temp": 80,
    "actual_precipitation": 0,
    "location": "KNYC"
  },
  {
    "": 1886,
    "date": "2014-8-31",
    "actual_mean_temp": 82,
    "actual_min_temp": 73,
    "actual_max_temp": 90,
    "actual_precipitation": 0.62,
    "location": "KNYC"
  },
  {
    "": 1887,
    "date": "2014-9-1",
    "actual_mean_temp": 82,
    "actual_min_temp": 75,
    "actual_max_temp": 88,
    "actual_precipitation": 0,
    "location": "KNYC"
  },
  {
    "": 1888,
    "date": "2014-9-2",
    "actual_mean_temp": 85,
    "actual_min_temp": 77,
    "actual_max_temp": 92,
    "actual_precipitation": 0,
    "location": "KNYC"
  },
  {
    "": 1889,
    "date": "2014-9-3",
    "actual_mean_temp": 79,
    "actual_min_temp": 72,
    "actual_max_temp": 86,
    "actual_precipitation": 0,
    "location": "KNYC"
  },
  {
    "": 1890,
    "date": "2014-9-4",
    "actual_mean_temp": 78,
    "actual_min_temp": 69,
    "actual_max_temp": 87,
    "actual_precipitation": 0,
    "location": "KNYC"
  },
  {
    "": 1891,
    "date": "2014-9-5",
    "actual_mean_temp": 80,
    "actual_min_temp": 72,
    "actual_max_temp": 87,
    "actual_precipitation": 0,
    "location": "KNYC"
  },
  {
    "": 1892,
    "date": "2014-9-6",
    "actual_mean_temp": 79,
    "actual_min_temp": 67,
    "actual_max_temp": 91,
    "actual_precipitation": 0.11,
    "location": "KNYC"
  },
  {
    "": 1893,
    "date": "2014-9-7",
    "actual_mean_temp": 73,
    "actual_min_temp": 65,
    "actual_max_temp": 81,
    "actual_precipitation": 0,
    "location": "KNYC"
  },
  {
    "": 1894,
    "date": "2014-9-8",
    "actual_mean_temp": 70,
    "actual_min_temp": 65,
    "actual_max_temp": 75,
    "actual_precipitation": 0,
    "location": "KNYC"
  },
  {
    "": 1895,
    "date": "2014-9-9",
    "actual_mean_temp": 68,
    "actual_min_temp": 63,
    "actual_max_temp": 73,
    "actual_precipitation": 0,
    "location": "KNYC"
  },
  {
    "": 1896,
    "date": "2014-9-10",
    "actual_mean_temp": 72,
    "actual_min_temp": 63,
    "actual_max_temp": 80,
    "actual_precipitation": 0,
    "location": "KNYC"
  },
  {
    "": 1897,
    "date": "2014-9-11",
    "actual_mean_temp": 76,
    "actual_min_temp": 69,
    "actual_max_temp": 83,
    "actual_precipitation": 0,
    "location": "KNYC"
  },
  {
    "": 1898,
    "date": "2014-9-12",
    "actual_mean_temp": 70,
    "actual_min_temp": 62,
    "actual_max_temp": 78,
    "actual_precipitation": 0,
    "location": "KNYC"
  },
  {
    "": 1899,
    "date": "2014-9-13",
    "actual_mean_temp": 64,
    "actual_min_temp": 58,
    "actual_max_temp": 69,
    "actual_precipitation": 0.26,
    "location": "KNYC"
  },
  {
    "": 1900,
    "date": "2014-9-14",
    "actual_mean_temp": 62,
    "actual_min_temp": 53,
    "actual_max_temp": 71,
    "actual_precipitation": 0,
    "location": "KNYC"
  },
  {
    "": 1901,
    "date": "2014-9-15",
    "actual_mean_temp": 63,
    "actual_min_temp": 55,
    "actual_max_temp": 71,
    "actual_precipitation": 0,
    "location": "KNYC"
  },
  {
    "": 1902,
    "date": "2014-9-16",
    "actual_mean_temp": 64,
    "actual_min_temp": 58,
    "actual_max_temp": 70,
    "actual_precipitation": 0.37,
    "location": "KNYC"
  },
  {
    "": 1903,
    "date": "2014-9-17",
    "actual_mean_temp": 64,
    "actual_min_temp": 55,
    "actual_max_temp": 73,
    "actual_precipitation": 0,
    "location": "KNYC"
  },
  {
    "": 1904,
    "date": "2014-9-18",
    "actual_mean_temp": 67,
    "actual_min_temp": 57,
    "actual_max_temp": 76,
    "actual_precipitation": 0,
    "location": "KNYC"
  },
  {
    "": 1905,
    "date": "2014-9-19",
    "actual_mean_temp": 60,
    "actual_min_temp": 54,
    "actual_max_temp": 66,
    "actual_precipitation": 0,
    "location": "KNYC"
  },
  {
    "": 1906,
    "date": "2014-9-20",
    "actual_mean_temp": 66,
    "actual_min_temp": 57,
    "actual_max_temp": 75,
    "actual_precipitation": 0,
    "location": "KNYC"
  },
  {
    "": 1907,
    "date": "2014-9-21",
    "actual_mean_temp": 71,
    "actual_min_temp": 67,
    "actual_max_temp": 75,
    "actual_precipitation": 0.15,
    "location": "KNYC"
  },
  {
    "": 1908,
    "date": "2014-9-22",
    "actual_mean_temp": 63,
    "actual_min_temp": 55,
    "actual_max_temp": 71,
    "actual_precipitation": 0,
    "location": "KNYC"
  },
  {
    "": 1909,
    "date": "2014-9-23",
    "actual_mean_temp": 62,
    "actual_min_temp": 52,
    "actual_max_temp": 71,
    "actual_precipitation": 0,
    "location": "KNYC"
  },
  {
    "": 1910,
    "date": "2014-9-24",
    "actual_mean_temp": 65,
    "actual_min_temp": 58,
    "actual_max_temp": 71,
    "actual_precipitation": 0,
    "location": "KNYC"
  },
  {
    "": 1911,
    "date": "2014-9-25",
    "actual_mean_temp": 61,
    "actual_min_temp": 57,
    "actual_max_temp": 64,
    "actual_precipitation": 0.32,
    "location": "KNYC"
  },
  {
    "": 1912,
    "date": "2014-9-26",
    "actual_mean_temp": 68,
    "actual_min_temp": 58,
    "actual_max_temp": 77,
    "actual_precipitation": 0,
    "location": "KNYC"
  },
  {
    "": 1913,
    "date": "2014-9-27",
    "actual_mean_temp": 72,
    "actual_min_temp": 60,
    "actual_max_temp": 83,
    "actual_precipitation": 0,
    "location": "KNYC"
  },
  {
    "": 1914,
    "date": "2014-9-28",
    "actual_mean_temp": 74,
    "actual_min_temp": 64,
    "actual_max_temp": 84,
    "actual_precipitation": 0,
    "location": "KNYC"
  },
  {
    "": 1915,
    "date": "2014-9-29",
    "actual_mean_temp": 73,
    "actual_min_temp": 67,
    "actual_max_temp": 79,
    "actual_precipitation": 0,
    "location": "KNYC"
  },
  {
    "": 1916,
    "date": "2014-9-30",
    "actual_mean_temp": 67,
    "actual_min_temp": 62,
    "actual_max_temp": 71,
    "actual_precipitation": 0,
    "location": "KNYC"
  },
  {
    "": 1917,
    "date": "2014-10-1",
    "actual_mean_temp": 63,
    "actual_min_temp": 61,
    "actual_max_temp": 65,
    "actual_precipitation": 0.02,
    "location": "KNYC"
  },
  {
    "": 1918,
    "date": "2014-10-2",
    "actual_mean_temp": 66,
    "actual_min_temp": 61,
    "actual_max_temp": 70,
    "actual_precipitation": 0,
    "location": "KNYC"
  },
  {
    "": 1919,
    "date": "2014-10-3",
    "actual_mean_temp": 64,
    "actual_min_temp": 56,
    "actual_max_temp": 71,
    "actual_precipitation": 0,
    "location": "KNYC"
  },
  {
    "": 1920,
    "date": "2014-10-4",
    "actual_mean_temp": 61,
    "actual_min_temp": 52,
    "actual_max_temp": 69,
    "actual_precipitation": 1.18,
    "location": "KNYC"
  },
  {
    "": 1921,
    "date": "2014-10-5",
    "actual_mean_temp": 54,
    "actual_min_temp": 46,
    "actual_max_temp": 61,
    "actual_precipitation": 0,
    "location": "KNYC"
  },
  {
    "": 1922,
    "date": "2014-10-6",
    "actual_mean_temp": 60,
    "actual_min_temp": 50,
    "actual_max_temp": 69,
    "actual_precipitation": 0,
    "location": "KNYC"
  },
  {
    "": 1923,
    "date": "2014-10-7",
    "actual_mean_temp": 67,
    "actual_min_temp": 63,
    "actual_max_temp": 71,
    "actual_precipitation": 0.06,
    "location": "KNYC"
  },
  {
    "": 1924,
    "date": "2014-10-8",
    "actual_mean_temp": 68,
    "actual_min_temp": 62,
    "actual_max_temp": 73,
    "actual_precipitation": 0.04,
    "location": "KNYC"
  },
  {
    "": 1925,
    "date": "2014-10-9",
    "actual_mean_temp": 62,
    "actual_min_temp": 55,
    "actual_max_temp": 68,
    "actual_precipitation": 0,
    "location": "KNYC"
  },
  {
    "": 1926,
    "date": "2014-10-10",
    "actual_mean_temp": 58,
    "actual_min_temp": 52,
    "actual_max_temp": 64,
    "actual_precipitation": 0,
    "location": "KNYC"
  },
  {
    "": 1927,
    "date": "2014-10-11",
    "actual_mean_temp": 55,
    "actual_min_temp": 50,
    "actual_max_temp": 60,
    "actual_precipitation": 0.33,
    "location": "KNYC"
  },
  {
    "": 1928,
    "date": "2014-10-12",
    "actual_mean_temp": 56,
    "actual_min_temp": 48,
    "actual_max_temp": 63,
    "actual_precipitation": 0,
    "location": "KNYC"
  },
  {
    "": 1929,
    "date": "2014-10-13",
    "actual_mean_temp": 59,
    "actual_min_temp": 52,
    "actual_max_temp": 65,
    "actual_precipitation": 0.05,
    "location": "KNYC"
  },
  {
    "": 1930,
    "date": "2014-10-14",
    "actual_mean_temp": 70,
    "actual_min_temp": 63,
    "actual_max_temp": 76,
    "actual_precipitation": 0,
    "location": "KNYC"
  },
  {
    "": 1931,
    "date": "2014-10-15",
    "actual_mean_temp": 73,
    "actual_min_temp": 69,
    "actual_max_temp": 77,
    "actual_precipitation": 0.69,
    "location": "KNYC"
  },
  {
    "": 1932,
    "date": "2014-10-16",
    "actual_mean_temp": 66,
    "actual_min_temp": 61,
    "actual_max_temp": 71,
    "actual_precipitation": 1.11,
    "location": "KNYC"
  },
  {
    "": 1933,
    "date": "2014-10-17",
    "actual_mean_temp": 65,
    "actual_min_temp": 59,
    "actual_max_temp": 71,
    "actual_precipitation": 0,
    "location": "KNYC"
  },
  {
    "": 1934,
    "date": "2014-10-18",
    "actual_mean_temp": 63,
    "actual_min_temp": 56,
    "actual_max_temp": 70,
    "actual_precipitation": 0,
    "location": "KNYC"
  },
  {
    "": 1935,
    "date": "2014-10-19",
    "actual_mean_temp": 50,
    "actual_min_temp": 44,
    "actual_max_temp": 56,
    "actual_precipitation": 0,
    "location": "KNYC"
  },
  {
    "": 1936,
    "date": "2014-10-20",
    "actual_mean_temp": 51,
    "actual_min_temp": 42,
    "actual_max_temp": 60,
    "actual_precipitation": 0,
    "location": "KNYC"
  },
  {
    "": 1937,
    "date": "2014-10-21",
    "actual_mean_temp": 61,
    "actual_min_temp": 55,
    "actual_max_temp": 67,
    "actual_precipitation": 0.11,
    "location": "KNYC"
  },
  {
    "": 1938,
    "date": "2014-10-22",
    "actual_mean_temp": 54,
    "actual_min_temp": 50,
    "actual_max_temp": 58,
    "actual_precipitation": 1.51,
    "location": "KNYC"
  },
  {
    "": 1939,
    "date": "2014-10-23",
    "actual_mean_temp": 52,
    "actual_min_temp": 50,
    "actual_max_temp": 53,
    "actual_precipitation": 0.61,
    "location": "KNYC"
  },
  {
    "": 1940,
    "date": "2014-10-24",
    "actual_mean_temp": 57,
    "actual_min_temp": 51,
    "actual_max_temp": 63,
    "actual_precipitation": 0,
    "location": "KNYC"
  },
  {
    "": 1941,
    "date": "2014-10-25",
    "actual_mean_temp": 59,
    "actual_min_temp": 50,
    "actual_max_temp": 67,
    "actual_precipitation": 0.01,
    "location": "KNYC"
  },
  {
    "": 1942,
    "date": "2014-10-26",
    "actual_mean_temp": 58,
    "actual_min_temp": 53,
    "actual_max_temp": 63,
    "actual_precipitation": 0,
    "location": "KNYC"
  },
  {
    "": 1943,
    "date": "2014-10-27",
    "actual_mean_temp": 56,
    "actual_min_temp": 48,
    "actual_max_temp": 63,
    "actual_precipitation": 0,
    "location": "KNYC"
  },
  {
    "": 1944,
    "date": "2014-10-28",
    "actual_mean_temp": 63,
    "actual_min_temp": 53,
    "actual_max_temp": 72,
    "actual_precipitation": 0,
    "location": "KNYC"
  },
  {
    "": 1945,
    "date": "2014-10-29",
    "actual_mean_temp": 62,
    "actual_min_temp": 51,
    "actual_max_temp": 72,
    "actual_precipitation": 0,
    "location": "KNYC"
  },
  {
    "": 1946,
    "date": "2014-10-30",
    "actual_mean_temp": 53,
    "actual_min_temp": 47,
    "actual_max_temp": 59,
    "actual_precipitation": 0,
    "location": "KNYC"
  },
  {
    "": 1947,
    "date": "2014-10-31",
    "actual_mean_temp": 50,
    "actual_min_temp": 45,
    "actual_max_temp": 55,
    "actual_precipitation": 0.05,
    "location": "KNYC"
  },
  {
    "": 1948,
    "date": "2014-11-1",
    "actual_mean_temp": 45,
    "actual_min_temp": 42,
    "actual_max_temp": 47,
    "actual_precipitation": 0.35,
    "location": "KNYC"
  },
  {
    "": 1949,
    "date": "2014-11-2",
    "actual_mean_temp": 45,
    "actual_min_temp": 41,
    "actual_max_temp": 48,
    "actual_precipitation": 0,
    "location": "KNYC"
  },
  {
    "": 1950,
    "date": "2014-11-3",
    "actual_mean_temp": 50,
    "actual_min_temp": 39,
    "actual_max_temp": 61,
    "actual_precipitation": 0,
    "location": "KNYC"
  },
  {
    "": 1951,
    "date": "2014-11-4",
    "actual_mean_temp": 61,
    "actual_min_temp": 53,
    "actual_max_temp": 68,
    "actual_precipitation": 0,
    "location": "KNYC"
  },
  {
    "": 1952,
    "date": "2014-11-5",
    "actual_mean_temp": 60,
    "actual_min_temp": 56,
    "actual_max_temp": 64,
    "actual_precipitation": 0,
    "location": "KNYC"
  },
  {
    "": 1953,
    "date": "2014-11-6",
    "actual_mean_temp": 53,
    "actual_min_temp": 48,
    "actual_max_temp": 57,
    "actual_precipitation": 0.37,
    "location": "KNYC"
  },
  {
    "": 1954,
    "date": "2014-11-7",
    "actual_mean_temp": 47,
    "actual_min_temp": 40,
    "actual_max_temp": 53,
    "actual_precipitation": 0,
    "location": "KNYC"
  },
  {
    "": 1955,
    "date": "2014-11-8",
    "actual_mean_temp": 42,
    "actual_min_temp": 36,
    "actual_max_temp": 48,
    "actual_precipitation": 0,
    "location": "KNYC"
  },
  {
    "": 1956,
    "date": "2014-11-9",
    "actual_mean_temp": 52,
    "actual_min_temp": 46,
    "actual_max_temp": 57,
    "actual_precipitation": 0,
    "location": "KNYC"
  },
  {
    "": 1957,
    "date": "2014-11-10",
    "actual_mean_temp": 53,
    "actual_min_temp": 44,
    "actual_max_temp": 61,
    "actual_precipitation": 0,
    "location": "KNYC"
  },
  {
    "": 1958,
    "date": "2014-11-11",
    "actual_mean_temp": 57,
    "actual_min_temp": 49,
    "actual_max_temp": 64,
    "actual_precipitation": 0,
    "location": "KNYC"
  },
  {
    "": 1959,
    "date": "2014-11-12",
    "actual_mean_temp": 56,
    "actual_min_temp": 47,
    "actual_max_temp": 65,
    "actual_precipitation": 0,
    "location": "KNYC"
  },
  {
    "": 1960,
    "date": "2014-11-13",
    "actual_mean_temp": 42,
    "actual_min_temp": 36,
    "actual_max_temp": 48,
    "actual_precipitation": 0.2,
    "location": "KNYC"
  },
  {
    "": 1961,
    "date": "2014-11-14",
    "actual_mean_temp": 39,
    "actual_min_temp": 35,
    "actual_max_temp": 42,
    "actual_precipitation": 0.06,
    "location": "KNYC"
  },
  {
    "": 1962,
    "date": "2014-11-15",
    "actual_mean_temp": 38,
    "actual_min_temp": 33,
    "actual_max_temp": 42,
    "actual_precipitation": 0,
    "location": "KNYC"
  },
  {
    "": 1963,
    "date": "2014-11-16",
    "actual_mean_temp": 40,
    "actual_min_temp": 35,
    "actual_max_temp": 45,
    "actual_precipitation": 0.03,
    "location": "KNYC"
  },
  {
    "": 1964,
    "date": "2014-11-17",
    "actual_mean_temp": 46,
    "actual_min_temp": 40,
    "actual_max_temp": 52,
    "actual_precipitation": 1.54,
    "location": "KNYC"
  },
  {
    "": 1965,
    "date": "2014-11-18",
    "actual_mean_temp": 35,
    "actual_min_temp": 24,
    "actual_max_temp": 45,
    "actual_precipitation": 0,
    "location": "KNYC"
  },
  {
    "": 1966,
    "date": "2014-11-19",
    "actual_mean_temp": 29,
    "actual_min_temp": 22,
    "actual_max_temp": 36,
    "actual_precipitation": 0,
    "location": "KNYC"
  },
  {
    "": 1967,
    "date": "2014-11-20",
    "actual_mean_temp": 38,
    "actual_min_temp": 31,
    "actual_max_temp": 45,
    "actual_precipitation": 0,
    "location": "KNYC"
  },
  {
    "": 1968,
    "date": "2014-11-21",
    "actual_mean_temp": 33,
    "actual_min_temp": 28,
    "actual_max_temp": 37,
    "actual_precipitation": 0,
    "location": "KNYC"
  },
  {
    "": 1969,
    "date": "2014-11-22",
    "actual_mean_temp": 36,
    "actual_min_temp": 28,
    "actual_max_temp": 44,
    "actual_precipitation": 0,
    "location": "KNYC"
  },
  {
    "": 1970,
    "date": "2014-11-23",
    "actual_mean_temp": 50,
    "actual_min_temp": 43,
    "actual_max_temp": 57,
    "actual_precipitation": 0,
    "location": "KNYC"
  },
  {
    "": 1971,
    "date": "2014-11-24",
    "actual_mean_temp": 61,
    "actual_min_temp": 53,
    "actual_max_temp": 69,
    "actual_precipitation": 0.7,
    "location": "KNYC"
  },
  {
    "": 1972,
    "date": "2014-11-25",
    "actual_mean_temp": 60,
    "actual_min_temp": 51,
    "actual_max_temp": 68,
    "actual_precipitation": 0,
    "location": "KNYC"
  },
  {
    "": 1973,
    "date": "2014-11-26",
    "actual_mean_temp": 43,
    "actual_min_temp": 34,
    "actual_max_temp": 51,
    "actual_precipitation": 1.24,
    "location": "KNYC"
  },
  {
    "": 1974,
    "date": "2014-11-27",
    "actual_mean_temp": 36,
    "actual_min_temp": 34,
    "actual_max_temp": 38,
    "actual_precipitation": 0.02,
    "location": "KNYC"
  },
  {
    "": 1975,
    "date": "2014-11-28",
    "actual_mean_temp": 33,
    "actual_min_temp": 29,
    "actual_max_temp": 37,
    "actual_precipitation": 0,
    "location": "KNYC"
  },
  {
    "": 1976,
    "date": "2014-11-29",
    "actual_mean_temp": 36,
    "actual_min_temp": 27,
    "actual_max_temp": 45,
    "actual_precipitation": 0,
    "location": "KNYC"
  },
  {
    "": 1977,
    "date": "2014-11-30",
    "actual_mean_temp": 50,
    "actual_min_temp": 45,
    "actual_max_temp": 55,
    "actual_precipitation": 0,
    "location": "KNYC"
  },
  {
    "": 1978,
    "date": "2014-12-1",
    "actual_mean_temp": 54,
    "actual_min_temp": 42,
    "actual_max_temp": 65,
    "actual_precipitation": 0.09,
    "location": "KNYC"
  },
  {
    "": 1979,
    "date": "2014-12-2",
    "actual_mean_temp": 39,
    "actual_min_temp": 35,
    "actual_max_temp": 43,
    "actual_precipitation": 0.08,
    "location": "KNYC"
  },
  {
    "": 1980,
    "date": "2014-12-3",
    "actual_mean_temp": 44,
    "actual_min_temp": 41,
    "actual_max_temp": 46,
    "actual_precipitation": 0.06,
    "location": "KNYC"
  },
  {
    "": 1981,
    "date": "2014-12-4",
    "actual_mean_temp": 41,
    "actual_min_temp": 37,
    "actual_max_temp": 45,
    "actual_precipitation": 0,
    "location": "KNYC"
  },
  {
    "": 1982,
    "date": "2014-12-5",
    "actual_mean_temp": 39,
    "actual_min_temp": 34,
    "actual_max_temp": 44,
    "actual_precipitation": 0.51,
    "location": "KNYC"
  },
  {
    "": 1983,
    "date": "2014-12-6",
    "actual_mean_temp": 45,
    "actual_min_temp": 39,
    "actual_max_temp": 50,
    "actual_precipitation": 1.22,
    "location": "KNYC"
  },
  {
    "": 1984,
    "date": "2014-12-7",
    "actual_mean_temp": 36,
    "actual_min_temp": 30,
    "actual_max_temp": 42,
    "actual_precipitation": 0.04,
    "location": "KNYC"
  },
  {
    "": 1985,
    "date": "2014-12-8",
    "actual_mean_temp": 31,
    "actual_min_temp": 24,
    "actual_max_temp": 37,
    "actual_precipitation": 0,
    "location": "KNYC"
  },
  {
    "": 1986,
    "date": "2014-12-9",
    "actual_mean_temp": 39,
    "actual_min_temp": 36,
    "actual_max_temp": 42,
    "actual_precipitation": 2.54,
    "location": "KNYC"
  },
  {
    "": 1987,
    "date": "2014-12-10",
    "actual_mean_temp": 36,
    "actual_min_temp": 32,
    "actual_max_temp": 40,
    "actual_precipitation": 0.08,
    "location": "KNYC"
  },
  {
    "": 1988,
    "date": "2014-12-11",
    "actual_mean_temp": 35,
    "actual_min_temp": 31,
    "actual_max_temp": 38,
    "actual_precipitation": 0.01,
    "location": "KNYC"
  },
  {
    "": 1989,
    "date": "2014-12-12",
    "actual_mean_temp": 35,
    "actual_min_temp": 32,
    "actual_max_temp": 38,
    "actual_precipitation": 0,
    "location": "KNYC"
  },
  {
    "": 1990,
    "date": "2014-12-13",
    "actual_mean_temp": 39,
    "actual_min_temp": 34,
    "actual_max_temp": 44,
    "actual_precipitation": 0,
    "location": "KNYC"
  },
  {
    "": 1991,
    "date": "2014-12-14",
    "actual_mean_temp": 42,
    "actual_min_temp": 38,
    "actual_max_temp": 46,
    "actual_precipitation": 0,
    "location": "KNYC"
  },
  {
    "": 1992,
    "date": "2014-12-15",
    "actual_mean_temp": 43,
    "actual_min_temp": 37,
    "actual_max_temp": 48,
    "actual_precipitation": 0,
    "location": "KNYC"
  },
  {
    "": 1993,
    "date": "2014-12-16",
    "actual_mean_temp": 44,
    "actual_min_temp": 38,
    "actual_max_temp": 49,
    "actual_precipitation": 0.2,
    "location": "KNYC"
  },
  {
    "": 1994,
    "date": "2014-12-17",
    "actual_mean_temp": 48,
    "actual_min_temp": 42,
    "actual_max_temp": 54,
    "actual_precipitation": 0.02,
    "location": "KNYC"
  },
  {
    "": 1995,
    "date": "2014-12-18",
    "actual_mean_temp": 40,
    "actual_min_temp": 37,
    "actual_max_temp": 42,
    "actual_precipitation": 0,
    "location": "KNYC"
  },
  {
    "": 1996,
    "date": "2014-12-19",
    "actual_mean_temp": 35,
    "actual_min_temp": 31,
    "actual_max_temp": 38,
    "actual_precipitation": 0,
    "location": "KNYC"
  },
  {
    "": 1997,
    "date": "2014-12-20",
    "actual_mean_temp": 32,
    "actual_min_temp": 30,
    "actual_max_temp": 33,
    "actual_precipitation": 0,
    "location": "KNYC"
  },
  {
    "": 1998,
    "date": "2014-12-21",
    "actual_mean_temp": 34,
    "actual_min_temp": 31,
    "actual_max_temp": 36,
    "actual_precipitation": 0,
    "location": "KNYC"
  },
  {
    "": 1999,
    "date": "2014-12-22",
    "actual_mean_temp": 40,
    "actual_min_temp": 35,
    "actual_max_temp": 44,
    "actual_precipitation": 0.04,
    "location": "KNYC"
  },
  {
    "": 2000,
    "date": "2014-12-23",
    "actual_mean_temp": 45,
    "actual_min_temp": 43,
    "actual_max_temp": 46,
    "actual_precipitation": 0.16,
    "location": "KNYC"
  },
  {
    "": 2001,
    "date": "2014-12-24",
    "actual_mean_temp": 51,
    "actual_min_temp": 44,
    "actual_max_temp": 58,
    "actual_precipitation": 0.8,
    "location": "KNYC"
  },
  {
    "": 2002,
    "date": "2014-12-25",
    "actual_mean_temp": 53,
    "actual_min_temp": 44,
    "actual_max_temp": 62,
    "actual_precipitation": 0.09,
    "location": "KNYC"
  },
  {
    "": 2003,
    "date": "2014-12-26",
    "actual_mean_temp": 45,
    "actual_min_temp": 40,
    "actual_max_temp": 50,
    "actual_precipitation": 0,
    "location": "KNYC"
  },
  {
    "": 2004,
    "date": "2014-12-27",
    "actual_mean_temp": 50,
    "actual_min_temp": 44,
    "actual_max_temp": 55,
    "actual_precipitation": 0,
    "location": "KNYC"
  },
  {
    "": 2005,
    "date": "2014-12-28",
    "actual_mean_temp": 49,
    "actual_min_temp": 43,
    "actual_max_temp": 54,
    "actual_precipitation": 0.1,
    "location": "KNYC"
  },
  {
    "": 2006,
    "date": "2014-12-29",
    "actual_mean_temp": 39,
    "actual_min_temp": 34,
    "actual_max_temp": 44,
    "actual_precipitation": 0,
    "location": "KNYC"
  },
  {
    "": 2007,
    "date": "2014-12-30",
    "actual_mean_temp": 31,
    "actual_min_temp": 28,
    "actual_max_temp": 34,
    "actual_precipitation": 0,
    "location": "KNYC"
  },
  {
    "": 2008,
    "date": "2014-12-31",
    "actual_mean_temp": 30,
    "actual_min_temp": 27,
    "actual_max_temp": 32,
    "actual_precipitation": 0,
    "location": "KNYC"
  },
  {
    "": 2009,
    "date": "2015-1-1",
    "actual_mean_temp": 33,
    "actual_min_temp": 27,
    "actual_max_temp": 39,
    "actual_precipitation": 0,
    "location": "KNYC"
  },
  {
    "": 2010,
    "date": "2015-1-2",
    "actual_mean_temp": 39,
    "actual_min_temp": 35,
    "actual_max_temp": 42,
    "actual_precipitation": 0,
    "location": "KNYC"
  },
  {
    "": 2011,
    "date": "2015-1-3",
    "actual_mean_temp": 38,
    "actual_min_temp": 33,
    "actual_max_temp": 42,
    "actual_precipitation": 0.71,
    "location": "KNYC"
  },
  {
    "": 2012,
    "date": "2015-1-4",
    "actual_mean_temp": 49,
    "actual_min_temp": 41,
    "actual_max_temp": 56,
    "actual_precipitation": 0.3,
    "location": "KNYC"
  },
  {
    "": 2013,
    "date": "2015-1-5",
    "actual_mean_temp": 35,
    "actual_min_temp": 21,
    "actual_max_temp": 49,
    "actual_precipitation": 0,
    "location": "KNYC"
  },
  {
    "": 2014,
    "date": "2015-1-6",
    "actual_mean_temp": 21,
    "actual_min_temp": 19,
    "actual_max_temp": 22,
    "actual_precipitation": 0.05,
    "location": "KNYC"
  },
  {
    "": 2015,
    "date": "2015-1-7",
    "actual_mean_temp": 16,
    "actual_min_temp": 9,
    "actual_max_temp": 23,
    "actual_precipitation": 0,
    "location": "KNYC"
  },
  {
    "": 2016,
    "date": "2015-1-8",
    "actual_mean_temp": 15,
    "actual_min_temp": 8,
    "actual_max_temp": 21,
    "actual_precipitation": 0,
    "location": "KNYC"
  },
  {
    "": 2017,
    "date": "2015-1-9",
    "actual_mean_temp": 26,
    "actual_min_temp": 19,
    "actual_max_temp": 33,
    "actual_precipitation": 0.07,
    "location": "KNYC"
  },
  {
    "": 2018,
    "date": "2015-1-10",
    "actual_mean_temp": 20,
    "actual_min_temp": 16,
    "actual_max_temp": 23,
    "actual_precipitation": 0,
    "location": "KNYC"
  },
  {
    "": 2019,
    "date": "2015-1-11",
    "actual_mean_temp": 28,
    "actual_min_temp": 18,
    "actual_max_temp": 37,
    "actual_precipitation": 0,
    "location": "KNYC"
  },
  {
    "": 2020,
    "date": "2015-1-12",
    "actual_mean_temp": 37,
    "actual_min_temp": 35,
    "actual_max_temp": 39,
    "actual_precipitation": 0.36,
    "location": "KNYC"
  },
  {
    "": 2021,
    "date": "2015-1-13",
    "actual_mean_temp": 27,
    "actual_min_temp": 17,
    "actual_max_temp": 36,
    "actual_precipitation": 0,
    "location": "KNYC"
  },
  {
    "": 2022,
    "date": "2015-1-14",
    "actual_mean_temp": 24,
    "actual_min_temp": 16,
    "actual_max_temp": 32,
    "actual_precipitation": 0,
    "location": "KNYC"
  },
  {
    "": 2023,
    "date": "2015-1-15",
    "actual_mean_temp": 30,
    "actual_min_temp": 25,
    "actual_max_temp": 35,
    "actual_precipitation": 0,
    "location": "KNYC"
  },
  {
    "": 2024,
    "date": "2015-1-16",
    "actual_mean_temp": 32,
    "actual_min_temp": 20,
    "actual_max_temp": 43,
    "actual_precipitation": 0,
    "location": "KNYC"
  },
  {
    "": 2025,
    "date": "2015-1-17",
    "actual_mean_temp": 25,
    "actual_min_temp": 17,
    "actual_max_temp": 32,
    "actual_precipitation": 0,
    "location": "KNYC"
  },
  {
    "": 2026,
    "date": "2015-1-18",
    "actual_mean_temp": 37,
    "actual_min_temp": 31,
    "actual_max_temp": 42,
    "actual_precipitation": 2.1,
    "location": "KNYC"
  },
  {
    "": 2027,
    "date": "2015-1-19",
    "actual_mean_temp": 39,
    "actual_min_temp": 36,
    "actual_max_temp": 42,
    "actual_precipitation": 0,
    "location": "KNYC"
  },
  {
    "": 2028,
    "date": "2015-1-20",
    "actual_mean_temp": 36,
    "actual_min_temp": 32,
    "actual_max_temp": 40,
    "actual_precipitation": 0,
    "location": "KNYC"
  },
  {
    "": 2029,
    "date": "2015-1-21",
    "actual_mean_temp": 31,
    "actual_min_temp": 25,
    "actual_max_temp": 36,
    "actual_precipitation": 0,
    "location": "KNYC"
  },
  {
    "": 2030,
    "date": "2015-1-22",
    "actual_mean_temp": 36,
    "actual_min_temp": 31,
    "actual_max_temp": 40,
    "actual_precipitation": 0,
    "location": "KNYC"
  },
  {
    "": 2031,
    "date": "2015-1-23",
    "actual_mean_temp": 34,
    "actual_min_temp": 28,
    "actual_max_temp": 39,
    "actual_precipitation": 0,
    "location": "KNYC"
  },
  {
    "": 2032,
    "date": "2015-1-24",
    "actual_mean_temp": 36,
    "actual_min_temp": 33,
    "actual_max_temp": 39,
    "actual_precipitation": 0.72,
    "location": "KNYC"
  },
  {
    "": 2033,
    "date": "2015-1-25",
    "actual_mean_temp": 37,
    "actual_min_temp": 31,
    "actual_max_temp": 42,
    "actual_precipitation": 0,
    "location": "KNYC"
  },
  {
    "": 2034,
    "date": "2015-1-26",
    "actual_mean_temp": 27,
    "actual_min_temp": 22,
    "actual_max_temp": 31,
    "actual_precipitation": 0.48,
    "location": "KNYC"
  },
  {
    "": 2035,
    "date": "2015-1-27",
    "actual_mean_temp": 25,
    "actual_min_temp": 20,
    "actual_max_temp": 30,
    "actual_precipitation": 0.36,
    "location": "KNYC"
  },
  {
    "": 2036,
    "date": "2015-1-28",
    "actual_mean_temp": 25,
    "actual_min_temp": 16,
    "actual_max_temp": 34,
    "actual_precipitation": 0,
    "location": "KNYC"
  },
  {
    "": 2037,
    "date": "2015-1-29",
    "actual_mean_temp": 28,
    "actual_min_temp": 19,
    "actual_max_temp": 36,
    "actual_precipitation": 0.02,
    "location": "KNYC"
  },
  {
    "": 2038,
    "date": "2015-1-30",
    "actual_mean_temp": 29,
    "actual_min_temp": 19,
    "actual_max_temp": 38,
    "actual_precipitation": 0.06,
    "location": "KNYC"
  },
  {
    "": 2039,
    "date": "2015-1-31",
    "actual_mean_temp": 20,
    "actual_min_temp": 13,
    "actual_max_temp": 26,
    "actual_precipitation": 0,
    "location": "KNYC"
  },
  {
    "": 2040,
    "date": "2015-2-1",
    "actual_mean_temp": 28,
    "actual_min_temp": 20,
    "actual_max_temp": 36,
    "actual_precipitation": 0.03,
    "location": "KNYC"
  },
  {
    "": 2041,
    "date": "2015-2-2",
    "actual_mean_temp": 24,
    "actual_min_temp": 14,
    "actual_max_temp": 34,
    "actual_precipitation": 1.02,
    "location": "KNYC"
  },
  {
    "": 2042,
    "date": "2015-2-3",
    "actual_mean_temp": 20,
    "actual_min_temp": 13,
    "actual_max_temp": 26,
    "actual_precipitation": 0,
    "location": "KNYC"
  },
  {
    "": 2043,
    "date": "2015-2-4",
    "actual_mean_temp": 34,
    "actual_min_temp": 24,
    "actual_max_temp": 43,
    "actual_precipitation": 0,
    "location": "KNYC"
  },
  {
    "": 2044,
    "date": "2015-2-5",
    "actual_mean_temp": 28,
    "actual_min_temp": 14,
    "actual_max_temp": 42,
    "actual_precipitation": 0,
    "location": "KNYC"
  },
  {
    "": 2045,
    "date": "2015-2-6",
    "actual_mean_temp": 20,
    "actual_min_temp": 12,
    "actual_max_temp": 27,
    "actual_precipitation": 0,
    "location": "KNYC"
  },
  {
    "": 2046,
    "date": "2015-2-7",
    "actual_mean_temp": 33,
    "actual_min_temp": 25,
    "actual_max_temp": 40,
    "actual_precipitation": 0.02,
    "location": "KNYC"
  },
  {
    "": 2047,
    "date": "2015-2-8",
    "actual_mean_temp": 33,
    "actual_min_temp": 29,
    "actual_max_temp": 37,
    "actual_precipitation": 0,
    "location": "KNYC"
  },
  {
    "": 2048,
    "date": "2015-2-9",
    "actual_mean_temp": 27,
    "actual_min_temp": 25,
    "actual_max_temp": 29,
    "actual_precipitation": 0.09,
    "location": "KNYC"
  },
  {
    "": 2049,
    "date": "2015-2-10",
    "actual_mean_temp": 33,
    "actual_min_temp": 26,
    "actual_max_temp": 40,
    "actual_precipitation": 0.01,
    "location": "KNYC"
  },
  {
    "": 2050,
    "date": "2015-2-11",
    "actual_mean_temp": 28,
    "actual_min_temp": 22,
    "actual_max_temp": 34,
    "actual_precipitation": 0,
    "location": "KNYC"
  },
  {
    "": 2051,
    "date": "2015-2-12",
    "actual_mean_temp": 28,
    "actual_min_temp": 16,
    "actual_max_temp": 40,
    "actual_precipitation": 0,
    "location": "KNYC"
  },
  {
    "": 2052,
    "date": "2015-2-13",
    "actual_mean_temp": 15,
    "actual_min_temp": 8,
    "actual_max_temp": 21,
    "actual_precipitation": 0,
    "location": "KNYC"
  },
  {
    "": 2053,
    "date": "2015-2-14",
    "actual_mean_temp": 24,
    "actual_min_temp": 16,
    "actual_max_temp": 32,
    "actual_precipitation": 0.02,
    "location": "KNYC"
  },
  {
    "": 2054,
    "date": "2015-2-15",
    "actual_mean_temp": 15,
    "actual_min_temp": 4,
    "actual_max_temp": 25,
    "actual_precipitation": 0,
    "location": "KNYC"
  },
  {
    "": 2055,
    "date": "2015-2-16",
    "actual_mean_temp": 12,
    "actual_min_temp": 3,
    "actual_max_temp": 21,
    "actual_precipitation": 0,
    "location": "KNYC"
  },
  {
    "": 2056,
    "date": "2015-2-17",
    "actual_mean_temp": 21,
    "actual_min_temp": 14,
    "actual_max_temp": 27,
    "actual_precipitation": 0.14,
    "location": "KNYC"
  },
  {
    "": 2057,
    "date": "2015-2-18",
    "actual_mean_temp": 26,
    "actual_min_temp": 19,
    "actual_max_temp": 33,
    "actual_precipitation": 0,
    "location": "KNYC"
  },
  {
    "": 2058,
    "date": "2015-2-19",
    "actual_mean_temp": 18,
    "actual_min_temp": 8,
    "actual_max_temp": 27,
    "actual_precipitation": 0,
    "location": "KNYC"
  },
  {
    "": 2059,
    "date": "2015-2-20",
    "actual_mean_temp": 11,
    "actual_min_temp": 2,
    "actual_max_temp": 19,
    "actual_precipitation": 0,
    "location": "KNYC"
  },
  {
    "": 2060,
    "date": "2015-2-21",
    "actual_mean_temp": 23,
    "actual_min_temp": 13,
    "actual_max_temp": 32,
    "actual_precipitation": 0.61,
    "location": "KNYC"
  },
  {
    "": 2061,
    "date": "2015-2-22",
    "actual_mean_temp": 38,
    "actual_min_temp": 32,
    "actual_max_temp": 43,
    "actual_precipitation": 0.1,
    "location": "KNYC"
  },
  {
    "": 2062,
    "date": "2015-2-23",
    "actual_mean_temp": 23,
    "actual_min_temp": 8,
    "actual_max_temp": 38,
    "actual_precipitation": 0,
    "location": "KNYC"
  },
  {
    "": 2063,
    "date": "2015-2-24",
    "actual_mean_temp": 14,
    "actual_min_temp": 4,
    "actual_max_temp": 24,
    "actual_precipitation": 0,
    "location": "KNYC"
  },
  {
    "": 2064,
    "date": "2015-2-25",
    "actual_mean_temp": 29,
    "actual_min_temp": 20,
    "actual_max_temp": 37,
    "actual_precipitation": 0,
    "location": "KNYC"
  },
  {
    "": 2065,
    "date": "2015-2-26",
    "actual_mean_temp": 27,
    "actual_min_temp": 21,
    "actual_max_temp": 32,
    "actual_precipitation": 0,
    "location": "KNYC"
  },
  {
    "": 2066,
    "date": "2015-2-27",
    "actual_mean_temp": 24,
    "actual_min_temp": 18,
    "actual_max_temp": 30,
    "actual_precipitation": 0,
    "location": "KNYC"
  },
  {
    "": 2067,
    "date": "2015-2-28",
    "actual_mean_temp": 21,
    "actual_min_temp": 13,
    "actual_max_temp": 29,
    "actual_precipitation": 0,
    "location": "KNYC"
  },
  {
    "": 2068,
    "date": "2015-3-1",
    "actual_mean_temp": 28,
    "actual_min_temp": 24,
    "actual_max_temp": 31,
    "actual_precipitation": 0.52,
    "location": "KNYC"
  },
  {
    "": 2069,
    "date": "2015-3-2",
    "actual_mean_temp": 33,
    "actual_min_temp": 27,
    "actual_max_temp": 39,
    "actual_precipitation": 0,
    "location": "KNYC"
  },
  {
    "": 2070,
    "date": "2015-3-3",
    "actual_mean_temp": 30,
    "actual_min_temp": 22,
    "actual_max_temp": 37,
    "actual_precipitation": 0.67,
    "location": "KNYC"
  },
  {
    "": 2071,
    "date": "2015-3-4",
    "actual_mean_temp": 40,
    "actual_min_temp": 35,
    "actual_max_temp": 45,
    "actual_precipitation": 0.25,
    "location": "KNYC"
  },
  {
    "": 2072,
    "date": "2015-3-5",
    "actual_mean_temp": 30,
    "actual_min_temp": 19,
    "actual_max_temp": 40,
    "actual_precipitation": 0.76,
    "location": "KNYC"
  },
  {
    "": 2073,
    "date": "2015-3-6",
    "actual_mean_temp": 20,
    "actual_min_temp": 12,
    "actual_max_temp": 27,
    "actual_precipitation": 0,
    "location": "KNYC"
  },
  {
    "": 2074,
    "date": "2015-3-7",
    "actual_mean_temp": 28,
    "actual_min_temp": 18,
    "actual_max_temp": 38,
    "actual_precipitation": 0,
    "location": "KNYC"
  },
  {
    "": 2075,
    "date": "2015-3-8",
    "actual_mean_temp": 43,
    "actual_min_temp": 37,
    "actual_max_temp": 49,
    "actual_precipitation": 0,
    "location": "KNYC"
  },
  {
    "": 2076,
    "date": "2015-3-9",
    "actual_mean_temp": 47,
    "actual_min_temp": 40,
    "actual_max_temp": 54,
    "actual_precipitation": 0.01,
    "location": "KNYC"
  },
  {
    "": 2077,
    "date": "2015-3-10",
    "actual_mean_temp": 46,
    "actual_min_temp": 39,
    "actual_max_temp": 53,
    "actual_precipitation": 0.46,
    "location": "KNYC"
  },
  {
    "": 2078,
    "date": "2015-3-11",
    "actual_mean_temp": 52,
    "actual_min_temp": 44,
    "actual_max_temp": 59,
    "actual_precipitation": 0.01,
    "location": "KNYC"
  },
  {
    "": 2079,
    "date": "2015-3-12",
    "actual_mean_temp": 42,
    "actual_min_temp": 36,
    "actual_max_temp": 47,
    "actual_precipitation": 0,
    "location": "KNYC"
  },
  {
    "": 2080,
    "date": "2015-3-13",
    "actual_mean_temp": 37,
    "actual_min_temp": 31,
    "actual_max_temp": 43,
    "actual_precipitation": 0,
    "location": "KNYC"
  },
  {
    "": 2081,
    "date": "2015-3-14",
    "actual_mean_temp": 46,
    "actual_min_temp": 40,
    "actual_max_temp": 51,
    "actual_precipitation": 0.81,
    "location": "KNYC"
  },
  {
    "": 2082,
    "date": "2015-3-15",
    "actual_mean_temp": 40,
    "actual_min_temp": 36,
    "actual_max_temp": 44,
    "actual_precipitation": 0,
    "location": "KNYC"
  },
  {
    "": 2083,
    "date": "2015-3-16",
    "actual_mean_temp": 44,
    "actual_min_temp": 35,
    "actual_max_temp": 52,
    "actual_precipitation": 0,
    "location": "KNYC"
  },
  {
    "": 2084,
    "date": "2015-3-17",
    "actual_mean_temp": 46,
    "actual_min_temp": 34,
    "actual_max_temp": 57,
    "actual_precipitation": 0.02,
    "location": "KNYC"
  },
  {
    "": 2085,
    "date": "2015-3-18",
    "actual_mean_temp": 34,
    "actual_min_temp": 29,
    "actual_max_temp": 39,
    "actual_precipitation": 0,
    "location": "KNYC"
  },
  {
    "": 2086,
    "date": "2015-3-19",
    "actual_mean_temp": 36,
    "actual_min_temp": 29,
    "actual_max_temp": 43,
    "actual_precipitation": 0,
    "location": "KNYC"
  },
  {
    "": 2087,
    "date": "2015-3-20",
    "actual_mean_temp": 34,
    "actual_min_temp": 29,
    "actual_max_temp": 38,
    "actual_precipitation": 0.4,
    "location": "KNYC"
  },
  {
    "": 2088,
    "date": "2015-3-21",
    "actual_mean_temp": 38,
    "actual_min_temp": 29,
    "actual_max_temp": 47,
    "actual_precipitation": 0,
    "location": "KNYC"
  },
  {
    "": 2089,
    "date": "2015-3-22",
    "actual_mean_temp": 36,
    "actual_min_temp": 28,
    "actual_max_temp": 43,
    "actual_precipitation": 0,
    "location": "KNYC"
  },
  {
    "": 2090,
    "date": "2015-3-23",
    "actual_mean_temp": 31,
    "actual_min_temp": 23,
    "actual_max_temp": 38,
    "actual_precipitation": 0,
    "location": "KNYC"
  },
  {
    "": 2091,
    "date": "2015-3-24",
    "actual_mean_temp": 36,
    "actual_min_temp": 26,
    "actual_max_temp": 45,
    "actual_precipitation": 0,
    "location": "KNYC"
  },
  {
    "": 2092,
    "date": "2015-3-25",
    "actual_mean_temp": 42,
    "actual_min_temp": 34,
    "actual_max_temp": 49,
    "actual_precipitation": 0.05,
    "location": "KNYC"
  },
  {
    "": 2093,
    "date": "2015-3-26",
    "actual_mean_temp": 52,
    "actual_min_temp": 42,
    "actual_max_temp": 62,
    "actual_precipitation": 0.32,
    "location": "KNYC"
  },
  {
    "": 2094,
    "date": "2015-3-27",
    "actual_mean_temp": 43,
    "actual_min_temp": 39,
    "actual_max_temp": 46,
    "actual_precipitation": 0.27,
    "location": "KNYC"
  },
  {
    "": 2095,
    "date": "2015-3-28",
    "actual_mean_temp": 33,
    "actual_min_temp": 26,
    "actual_max_temp": 40,
    "actual_precipitation": 0,
    "location": "KNYC"
  },
  {
    "": 2096,
    "date": "2015-3-29",
    "actual_mean_temp": 36,
    "actual_min_temp": 25,
    "actual_max_temp": 46,
    "actual_precipitation": 0,
    "location": "KNYC"
  },
  {
    "": 2097,
    "date": "2015-3-30",
    "actual_mean_temp": 45,
    "actual_min_temp": 36,
    "actual_max_temp": 54,
    "actual_precipitation": 0,
    "location": "KNYC"
  },
  {
    "": 2098,
    "date": "2015-3-31",
    "actual_mean_temp": 41,
    "actual_min_temp": 35,
    "actual_max_temp": 47,
    "actual_precipitation": 0.17,
    "location": "KNYC"
  },
  {
    "": 2099,
    "date": "2015-4-1",
    "actual_mean_temp": 42,
    "actual_min_temp": 32,
    "actual_max_temp": 51,
    "actual_precipitation": 0,
    "location": "KNYC"
  },
  {
    "": 2100,
    "date": "2015-4-2",
    "actual_mean_temp": 54,
    "actual_min_temp": 41,
    "actual_max_temp": 67,
    "actual_precipitation": 0,
    "location": "KNYC"
  },
  {
    "": 2101,
    "date": "2015-4-3",
    "actual_mean_temp": 62,
    "actual_min_temp": 59,
    "actual_max_temp": 64,
    "actual_precipitation": 0.04,
    "location": "KNYC"
  },
  {
    "": 2102,
    "date": "2015-4-4",
    "actual_mean_temp": 51,
    "actual_min_temp": 42,
    "actual_max_temp": 60,
    "actual_precipitation": 0.01,
    "location": "KNYC"
  },
  {
    "": 2103,
    "date": "2015-4-5",
    "actual_mean_temp": 52,
    "actual_min_temp": 42,
    "actual_max_temp": 61,
    "actual_precipitation": 0,
    "location": "KNYC"
  },
  {
    "": 2104,
    "date": "2015-4-6",
    "actual_mean_temp": 53,
    "actual_min_temp": 42,
    "actual_max_temp": 63,
    "actual_precipitation": 0,
    "location": "KNYC"
  },
  {
    "": 2105,
    "date": "2015-4-7",
    "actual_mean_temp": 52,
    "actual_min_temp": 42,
    "actual_max_temp": 62,
    "actual_precipitation": 0.15,
    "location": "KNYC"
  },
  {
    "": 2106,
    "date": "2015-4-8",
    "actual_mean_temp": 41,
    "actual_min_temp": 37,
    "actual_max_temp": 45,
    "actual_precipitation": 0,
    "location": "KNYC"
  },
  {
    "": 2107,
    "date": "2015-4-9",
    "actual_mean_temp": 40,
    "actual_min_temp": 37,
    "actual_max_temp": 43,
    "actual_precipitation": 0,
    "location": "KNYC"
  },
  {
    "": 2108,
    "date": "2015-4-10",
    "actual_mean_temp": 48,
    "actual_min_temp": 39,
    "actual_max_temp": 56,
    "actual_precipitation": 0.17,
    "location": "KNYC"
  },
  {
    "": 2109,
    "date": "2015-4-11",
    "actual_mean_temp": 51,
    "actual_min_temp": 44,
    "actual_max_temp": 57,
    "actual_precipitation": 0,
    "location": "KNYC"
  },
  {
    "": 2110,
    "date": "2015-4-12",
    "actual_mean_temp": 55,
    "actual_min_temp": 43,
    "actual_max_temp": 66,
    "actual_precipitation": 0,
    "location": "KNYC"
  },
  {
    "": 2111,
    "date": "2015-4-13",
    "actual_mean_temp": 59,
    "actual_min_temp": 50,
    "actual_max_temp": 68,
    "actual_precipitation": 0,
    "location": "KNYC"
  },
  {
    "": 2112,
    "date": "2015-4-14",
    "actual_mean_temp": 60,
    "actual_min_temp": 55,
    "actual_max_temp": 65,
    "actual_precipitation": 0.01,
    "location": "KNYC"
  },
  {
    "": 2113,
    "date": "2015-4-15",
    "actual_mean_temp": 62,
    "actual_min_temp": 51,
    "actual_max_temp": 72,
    "actual_precipitation": 0,
    "location": "KNYC"
  },
  {
    "": 2114,
    "date": "2015-4-16",
    "actual_mean_temp": 58,
    "actual_min_temp": 52,
    "actual_max_temp": 64,
    "actual_precipitation": 0,
    "location": "KNYC"
  },
  {
    "": 2115,
    "date": "2015-4-17",
    "actual_mean_temp": 63,
    "actual_min_temp": 55,
    "actual_max_temp": 71,
    "actual_precipitation": 0.08,
    "location": "KNYC"
  },
  {
    "": 2116,
    "date": "2015-4-18",
    "actual_mean_temp": 70,
    "actual_min_temp": 59,
    "actual_max_temp": 80,
    "actual_precipitation": 0,
    "location": "KNYC"
  },
  {
    "": 2117,
    "date": "2015-4-19",
    "actual_mean_temp": 56,
    "actual_min_temp": 48,
    "actual_max_temp": 64,
    "actual_precipitation": 0,
    "location": "KNYC"
  },
  {
    "": 2118,
    "date": "2015-4-20",
    "actual_mean_temp": 52,
    "actual_min_temp": 46,
    "actual_max_temp": 57,
    "actual_precipitation": 1.37,
    "location": "KNYC"
  },
  {
    "": 2119,
    "date": "2015-4-21",
    "actual_mean_temp": 59,
    "actual_min_temp": 52,
    "actual_max_temp": 65,
    "actual_precipitation": 0.2,
    "location": "KNYC"
  },
  {
    "": 2120,
    "date": "2015-4-22",
    "actual_mean_temp": 59,
    "actual_min_temp": 48,
    "actual_max_temp": 69,
    "actual_precipitation": 0.05,
    "location": "KNYC"
  },
  {
    "": 2121,
    "date": "2015-4-23",
    "actual_mean_temp": 47,
    "actual_min_temp": 41,
    "actual_max_temp": 52,
    "actual_precipitation": 0,
    "location": "KNYC"
  },
  {
    "": 2122,
    "date": "2015-4-24",
    "actual_mean_temp": 46,
    "actual_min_temp": 39,
    "actual_max_temp": 52,
    "actual_precipitation": 0,
    "location": "KNYC"
  },
  {
    "": 2123,
    "date": "2015-4-25",
    "actual_mean_temp": 50,
    "actual_min_temp": 38,
    "actual_max_temp": 62,
    "actual_precipitation": 0,
    "location": "KNYC"
  },
  {
    "": 2124,
    "date": "2015-4-26",
    "actual_mean_temp": 55,
    "actual_min_temp": 46,
    "actual_max_temp": 64,
    "actual_precipitation": 0,
    "location": "KNYC"
  },
  {
    "": 2125,
    "date": "2015-4-27",
    "actual_mean_temp": 56,
    "actual_min_temp": 49,
    "actual_max_temp": 62,
    "actual_precipitation": 0,
    "location": "KNYC"
  },
  {
    "": 2126,
    "date": "2015-4-28",
    "actual_mean_temp": 61,
    "actual_min_temp": 50,
    "actual_max_temp": 71,
    "actual_precipitation": 0,
    "location": "KNYC"
  },
  {
    "": 2127,
    "date": "2015-4-29",
    "actual_mean_temp": 64,
    "actual_min_temp": 50,
    "actual_max_temp": 78,
    "actual_precipitation": 0,
    "location": "KNYC"
  },
  {
    "": 2128,
    "date": "2015-4-30",
    "actual_mean_temp": 58,
    "actual_min_temp": 48,
    "actual_max_temp": 67,
    "actual_precipitation": 0,
    "location": "KNYC"
  },
  {
    "": 2129,
    "date": "2015-5-1",
    "actual_mean_temp": 56,
    "actual_min_temp": 49,
    "actual_max_temp": 63,
    "actual_precipitation": 0,
    "location": "KNYC"
  },
  {
    "": 2130,
    "date": "2015-5-2",
    "actual_mean_temp": 61,
    "actual_min_temp": 48,
    "actual_max_temp": 74,
    "actual_precipitation": 0,
    "location": "KNYC"
  },
  {
    "": 2131,
    "date": "2015-5-3",
    "actual_mean_temp": 66,
    "actual_min_temp": 51,
    "actual_max_temp": 80,
    "actual_precipitation": 0,
    "location": "KNYC"
  },
  {
    "": 2132,
    "date": "2015-5-4",
    "actual_mean_temp": 71,
    "actual_min_temp": 57,
    "actual_max_temp": 85,
    "actual_precipitation": 0,
    "location": "KNYC"
  },
  {
    "": 2133,
    "date": "2015-5-5",
    "actual_mean_temp": 76,
    "actual_min_temp": 66,
    "actual_max_temp": 85,
    "actual_precipitation": 0,
    "location": "KNYC"
  },
  {
    "": 2134,
    "date": "2015-5-6",
    "actual_mean_temp": 66,
    "actual_min_temp": 59,
    "actual_max_temp": 73,
    "actual_precipitation": 0,
    "location": "KNYC"
  },
  {
    "": 2135,
    "date": "2015-5-7",
    "actual_mean_temp": 68,
    "actual_min_temp": 56,
    "actual_max_temp": 80,
    "actual_precipitation": 0,
    "location": "KNYC"
  },
  {
    "": 2136,
    "date": "2015-5-8",
    "actual_mean_temp": 69,
    "actual_min_temp": 56,
    "actual_max_temp": 82,
    "actual_precipitation": 0,
    "location": "KNYC"
  },
  {
    "": 2137,
    "date": "2015-5-9",
    "actual_mean_temp": 64,
    "actual_min_temp": 57,
    "actual_max_temp": 70,
    "actual_precipitation": 0,
    "location": "KNYC"
  },
  {
    "": 2138,
    "date": "2015-5-10",
    "actual_mean_temp": 72,
    "actual_min_temp": 61,
    "actual_max_temp": 83,
    "actual_precipitation": 0,
    "location": "KNYC"
  },
  {
    "": 2139,
    "date": "2015-5-11",
    "actual_mean_temp": 77,
    "actual_min_temp": 70,
    "actual_max_temp": 84,
    "actual_precipitation": 0,
    "location": "KNYC"
  },
  {
    "": 2140,
    "date": "2015-5-12",
    "actual_mean_temp": 75,
    "actual_min_temp": 64,
    "actual_max_temp": 86,
    "actual_precipitation": 0,
    "location": "KNYC"
  },
  {
    "": 2141,
    "date": "2015-5-13",
    "actual_mean_temp": 62,
    "actual_min_temp": 53,
    "actual_max_temp": 70,
    "actual_precipitation": 0,
    "location": "KNYC"
  },
  {
    "": 2142,
    "date": "2015-5-14",
    "actual_mean_temp": 62,
    "actual_min_temp": 50,
    "actual_max_temp": 73,
    "actual_precipitation": 0,
    "location": "KNYC"
  },
  {
    "": 2143,
    "date": "2015-5-15",
    "actual_mean_temp": 65,
    "actual_min_temp": 55,
    "actual_max_temp": 75,
    "actual_precipitation": 0,
    "location": "KNYC"
  },
  {
    "": 2144,
    "date": "2015-5-16",
    "actual_mean_temp": 66,
    "actual_min_temp": 57,
    "actual_max_temp": 75,
    "actual_precipitation": 0.3,
    "location": "KNYC"
  },
  {
    "": 2145,
    "date": "2015-5-17",
    "actual_mean_temp": 74,
    "actual_min_temp": 64,
    "actual_max_temp": 83,
    "actual_precipitation": 0.02,
    "location": "KNYC"
  },
  {
    "": 2146,
    "date": "2015-5-18",
    "actual_mean_temp": 68,
    "actual_min_temp": 60,
    "actual_max_temp": 75,
    "actual_precipitation": 0,
    "location": "KNYC"
  },
  {
    "": 2147,
    "date": "2015-5-19",
    "actual_mean_temp": 70,
    "actual_min_temp": 59,
    "actual_max_temp": 80,
    "actual_precipitation": 0,
    "location": "KNYC"
  },
  {
    "": 2148,
    "date": "2015-5-20",
    "actual_mean_temp": 61,
    "actual_min_temp": 54,
    "actual_max_temp": 67,
    "actual_precipitation": 0,
    "location": "KNYC"
  },
  {
    "": 2149,
    "date": "2015-5-21",
    "actual_mean_temp": 57,
    "actual_min_temp": 52,
    "actual_max_temp": 62,
    "actual_precipitation": 0,
    "location": "KNYC"
  },
  {
    "": 2150,
    "date": "2015-5-22",
    "actual_mean_temp": 65,
    "actual_min_temp": 55,
    "actual_max_temp": 74,
    "actual_precipitation": 0,
    "location": "KNYC"
  },
  {
    "": 2151,
    "date": "2015-5-23",
    "actual_mean_temp": 60,
    "actual_min_temp": 49,
    "actual_max_temp": 70,
    "actual_precipitation": 0,
    "location": "KNYC"
  },
  {
    "": 2152,
    "date": "2015-5-24",
    "actual_mean_temp": 69,
    "actual_min_temp": 56,
    "actual_max_temp": 81,
    "actual_precipitation": 0,
    "location": "KNYC"
  },
  {
    "": 2153,
    "date": "2015-5-25",
    "actual_mean_temp": 75,
    "actual_min_temp": 64,
    "actual_max_temp": 85,
    "actual_precipitation": 0,
    "location": "KNYC"
  },
  {
    "": 2154,
    "date": "2015-5-26",
    "actual_mean_temp": 78,
    "actual_min_temp": 67,
    "actual_max_temp": 88,
    "actual_precipitation": 0,
    "location": "KNYC"
  },
  {
    "": 2155,
    "date": "2015-5-27",
    "actual_mean_temp": 78,
    "actual_min_temp": 70,
    "actual_max_temp": 85,
    "actual_precipitation": 0.08,
    "location": "KNYC"
  },
  {
    "": 2156,
    "date": "2015-5-28",
    "actual_mean_temp": 78,
    "actual_min_temp": 70,
    "actual_max_temp": 85,
    "actual_precipitation": 0,
    "location": "KNYC"
  },
  {
    "": 2157,
    "date": "2015-5-29",
    "actual_mean_temp": 75,
    "actual_min_temp": 65,
    "actual_max_temp": 85,
    "actual_precipitation": 0,
    "location": "KNYC"
  },
  {
    "": 2158,
    "date": "2015-5-30",
    "actual_mean_temp": 76,
    "actual_min_temp": 67,
    "actual_max_temp": 85,
    "actual_precipitation": 0,
    "location": "KNYC"
  },
  {
    "": 2159,
    "date": "2015-5-31",
    "actual_mean_temp": 72,
    "actual_min_temp": 57,
    "actual_max_temp": 87,
    "actual_precipitation": 1.46,
    "location": "KNYC"
  },
  {
    "": 2160,
    "date": "2015-6-1",
    "actual_mean_temp": 55,
    "actual_min_temp": 51,
    "actual_max_temp": 58,
    "actual_precipitation": 0.72,
    "location": "KNYC"
  },
  {
    "": 2161,
    "date": "2015-6-2",
    "actual_mean_temp": 53,
    "actual_min_temp": 50,
    "actual_max_temp": 55,
    "actual_precipitation": 0.37,
    "location": "KNYC"
  },
  {
    "": 2162,
    "date": "2015-6-3",
    "actual_mean_temp": 61,
    "actual_min_temp": 52,
    "actual_max_temp": 70,
    "actual_precipitation": 0,
    "location": "KNYC"
  },
  {
    "": 2163,
    "date": "2015-6-4",
    "actual_mean_temp": 60,
    "actual_min_temp": 54,
    "actual_max_temp": 65,
    "actual_precipitation": 0,
    "location": "KNYC"
  },
  {
    "": 2164,
    "date": "2015-6-5",
    "actual_mean_temp": 63,
    "actual_min_temp": 55,
    "actual_max_temp": 70,
    "actual_precipitation": 0.13,
    "location": "KNYC"
  },
  {
    "": 2165,
    "date": "2015-6-6",
    "actual_mean_temp": 68,
    "actual_min_temp": 60,
    "actual_max_temp": 76,
    "actual_precipitation": 0.19,
    "location": "KNYC"
  },
  {
    "": 2166,
    "date": "2015-6-7",
    "actual_mean_temp": 65,
    "actual_min_temp": 55,
    "actual_max_temp": 74,
    "actual_precipitation": 0,
    "location": "KNYC"
  },
  {
    "": 2167,
    "date": "2015-6-8",
    "actual_mean_temp": 71,
    "actual_min_temp": 63,
    "actual_max_temp": 79,
    "actual_precipitation": 0.06,
    "location": "KNYC"
  },
  {
    "": 2168,
    "date": "2015-6-9",
    "actual_mean_temp": 76,
    "actual_min_temp": 68,
    "actual_max_temp": 83,
    "actual_precipitation": 0.01,
    "location": "KNYC"
  },
  {
    "": 2169,
    "date": "2015-6-10",
    "actual_mean_temp": 74,
    "actual_min_temp": 65,
    "actual_max_temp": 82,
    "actual_precipitation": 0,
    "location": "KNYC"
  },
  {
    "": 2170,
    "date": "2015-6-11",
    "actual_mean_temp": 81,
    "actual_min_temp": 72,
    "actual_max_temp": 89,
    "actual_precipitation": 0,
    "location": "KNYC"
  },
  {
    "": 2171,
    "date": "2015-6-12",
    "actual_mean_temp": 81,
    "actual_min_temp": 73,
    "actual_max_temp": 88,
    "actual_precipitation": 0,
    "location": "KNYC"
  },
  {
    "": 2172,
    "date": "2015-6-13",
    "actual_mean_temp": 79,
    "actual_min_temp": 72,
    "actual_max_temp": 86,
    "actual_precipitation": 0,
    "location": "KNYC"
  },
  {
    "": 2173,
    "date": "2015-6-14",
    "actual_mean_temp": 77,
    "actual_min_temp": 66,
    "actual_max_temp": 88,
    "actual_precipitation": 0.36,
    "location": "KNYC"
  },
  {
    "": 2174,
    "date": "2015-6-15",
    "actual_mean_temp": 74,
    "actual_min_temp": 64,
    "actual_max_temp": 83,
    "actual_precipitation": 0.57,
    "location": "KNYC"
  },
  {
    "": 2175,
    "date": "2015-6-16",
    "actual_mean_temp": 72,
    "actual_min_temp": 65,
    "actual_max_temp": 79,
    "actual_precipitation": 0.27,
    "location": "KNYC"
  },
  {
    "": 2176,
    "date": "2015-6-17",
    "actual_mean_temp": 74,
    "actual_min_temp": 66,
    "actual_max_temp": 82,
    "actual_precipitation": 0,
    "location": "KNYC"
  },
  {
    "": 2177,
    "date": "2015-6-18",
    "actual_mean_temp": 68,
    "actual_min_temp": 64,
    "actual_max_temp": 71,
    "actual_precipitation": 0,
    "location": "KNYC"
  },
  {
    "": 2178,
    "date": "2015-6-19",
    "actual_mean_temp": 78,
    "actual_min_temp": 68,
    "actual_max_temp": 87,
    "actual_precipitation": 0,
    "location": "KNYC"
  },
  {
    "": 2179,
    "date": "2015-6-20",
    "actual_mean_temp": 70,
    "actual_min_temp": 64,
    "actual_max_temp": 75,
    "actual_precipitation": 0,
    "location": "KNYC"
  },
  {
    "": 2180,
    "date": "2015-6-21",
    "actual_mean_temp": 80,
    "actual_min_temp": 71,
    "actual_max_temp": 88,
    "actual_precipitation": 0.64,
    "location": "KNYC"
  },
  {
    "": 2181,
    "date": "2015-6-22",
    "actual_mean_temp": 79,
    "actual_min_temp": 70,
    "actual_max_temp": 87,
    "actual_precipitation": 0,
    "location": "KNYC"
  },
  {
    "": 2182,
    "date": "2015-6-23",
    "actual_mean_temp": 83,
    "actual_min_temp": 75,
    "actual_max_temp": 90,
    "actual_precipitation": 0.02,
    "location": "KNYC"
  },
  {
    "": 2183,
    "date": "2015-6-24",
    "actual_mean_temp": 76,
    "actual_min_temp": 68,
    "actual_max_temp": 84,
    "actual_precipitation": 0,
    "location": "KNYC"
  },
  {
    "": 2184,
    "date": "2015-6-25",
    "actual_mean_temp": 74,
    "actual_min_temp": 65,
    "actual_max_temp": 83,
    "actual_precipitation": 0,
    "location": "KNYC"
  },
  {
    "": 2185,
    "date": "2015-6-26",
    "actual_mean_temp": 75,
    "actual_min_temp": 69,
    "actual_max_temp": 81,
    "actual_precipitation": 0,
    "location": "KNYC"
  },
  {
    "": 2186,
    "date": "2015-6-27",
    "actual_mean_temp": 65,
    "actual_min_temp": 58,
    "actual_max_temp": 71,
    "actual_precipitation": 1.12,
    "location": "KNYC"
  },
  {
    "": 2187,
    "date": "2015-6-28",
    "actual_mean_temp": 68,
    "actual_min_temp": 62,
    "actual_max_temp": 73,
    "actual_precipitation": 0.29,
    "location": "KNYC"
  },
  {
    "": 2188,
    "date": "2015-6-29",
    "actual_mean_temp": 70,
    "actual_min_temp": 63,
    "actual_max_temp": 76,
    "actual_precipitation": 0,
    "location": "KNYC"
  },
  {
    "": 2189,
    "date": "2015-6-30",
    "actual_mean_temp": 75,
    "actual_min_temp": 68,
    "actual_max_temp": 82,
    "actual_precipitation": 0,
    "location": "KNYC"
  },
  {
    "": 2190,
    "date": "2014-7-1",
    "actual_mean_temp": 77,
    "actual_min_temp": 60,
    "actual_max_temp": 94,
    "actual_precipitation": 0,
    "location": "KSEA"
  },
  {
    "": 2191,
    "date": "2014-7-2",
    "actual_mean_temp": 70,
    "actual_min_temp": 58,
    "actual_max_temp": 81,
    "actual_precipitation": 0,
    "location": "KSEA"
  },
  {
    "": 2192,
    "date": "2014-7-3",
    "actual_mean_temp": 64,
    "actual_min_temp": 57,
    "actual_max_temp": 71,
    "actual_precipitation": 0,
    "location": "KSEA"
  },
  {
    "": 2193,
    "date": "2014-7-4",
    "actual_mean_temp": 66,
    "actual_min_temp": 57,
    "actual_max_temp": 75,
    "actual_precipitation": 0,
    "location": "KSEA"
  },
  {
    "": 2194,
    "date": "2014-7-5",
    "actual_mean_temp": 66,
    "actual_min_temp": 56,
    "actual_max_temp": 76,
    "actual_precipitation": 0,
    "location": "KSEA"
  },
  {
    "": 2195,
    "date": "2014-7-6",
    "actual_mean_temp": 72,
    "actual_min_temp": 59,
    "actual_max_temp": 84,
    "actual_precipitation": 0,
    "location": "KSEA"
  },
  {
    "": 2196,
    "date": "2014-7-7",
    "actual_mean_temp": 73,
    "actual_min_temp": 64,
    "actual_max_temp": 81,
    "actual_precipitation": 0,
    "location": "KSEA"
  },
  {
    "": 2197,
    "date": "2014-7-8",
    "actual_mean_temp": 73,
    "actual_min_temp": 60,
    "actual_max_temp": 86,
    "actual_precipitation": 0,
    "location": "KSEA"
  },
  {
    "": 2198,
    "date": "2014-7-9",
    "actual_mean_temp": 69,
    "actual_min_temp": 57,
    "actual_max_temp": 80,
    "actual_precipitation": 0,
    "location": "KSEA"
  },
  {
    "": 2199,
    "date": "2014-7-10",
    "actual_mean_temp": 70,
    "actual_min_temp": 55,
    "actual_max_temp": 84,
    "actual_precipitation": 0,
    "location": "KSEA"
  },
  {
    "": 2200,
    "date": "2014-7-11",
    "actual_mean_temp": 74,
    "actual_min_temp": 59,
    "actual_max_temp": 88,
    "actual_precipitation": 0,
    "location": "KSEA"
  },
  {
    "": 2201,
    "date": "2014-7-12",
    "actual_mean_temp": 76,
    "actual_min_temp": 62,
    "actual_max_temp": 90,
    "actual_precipitation": 0,
    "location": "KSEA"
  },
  {
    "": 2202,
    "date": "2014-7-13",
    "actual_mean_temp": 72,
    "actual_min_temp": 59,
    "actual_max_temp": 85,
    "actual_precipitation": 0,
    "location": "KSEA"
  },
  {
    "": 2203,
    "date": "2014-7-14",
    "actual_mean_temp": 71,
    "actual_min_temp": 59,
    "actual_max_temp": 82,
    "actual_precipitation": 0,
    "location": "KSEA"
  },
  {
    "": 2204,
    "date": "2014-7-15",
    "actual_mean_temp": 73,
    "actual_min_temp": 57,
    "actual_max_temp": 88,
    "actual_precipitation": 0,
    "location": "KSEA"
  },
  {
    "": 2205,
    "date": "2014-7-16",
    "actual_mean_temp": 73,
    "actual_min_temp": 58,
    "actual_max_temp": 88,
    "actual_precipitation": 0,
    "location": "KSEA"
  },
  {
    "": 2206,
    "date": "2014-7-17",
    "actual_mean_temp": 69,
    "actual_min_temp": 57,
    "actual_max_temp": 80,
    "actual_precipitation": 0,
    "location": "KSEA"
  },
  {
    "": 2207,
    "date": "2014-7-18",
    "actual_mean_temp": 64,
    "actual_min_temp": 53,
    "actual_max_temp": 75,
    "actual_precipitation": 0,
    "location": "KSEA"
  },
  {
    "": 2208,
    "date": "2014-7-19",
    "actual_mean_temp": 69,
    "actual_min_temp": 59,
    "actual_max_temp": 78,
    "actual_precipitation": 0,
    "location": "KSEA"
  },
  {
    "": 2209,
    "date": "2014-7-20",
    "actual_mean_temp": 63,
    "actual_min_temp": 58,
    "actual_max_temp": 67,
    "actual_precipitation": 0,
    "location": "KSEA"
  },
  {
    "": 2210,
    "date": "2014-7-21",
    "actual_mean_temp": 66,
    "actual_min_temp": 56,
    "actual_max_temp": 75,
    "actual_precipitation": 0,
    "location": "KSEA"
  },
  {
    "": 2211,
    "date": "2014-7-22",
    "actual_mean_temp": 63,
    "actual_min_temp": 56,
    "actual_max_temp": 70,
    "actual_precipitation": 0.01,
    "location": "KSEA"
  },
  {
    "": 2212,
    "date": "2014-7-23",
    "actual_mean_temp": 61,
    "actual_min_temp": 56,
    "actual_max_temp": 66,
    "actual_precipitation": 0.76,
    "location": "KSEA"
  },
  {
    "": 2213,
    "date": "2014-7-24",
    "actual_mean_temp": 62,
    "actual_min_temp": 55,
    "actual_max_temp": 69,
    "actual_precipitation": 0,
    "location": "KSEA"
  },
  {
    "": 2214,
    "date": "2014-7-25",
    "actual_mean_temp": 64,
    "actual_min_temp": 54,
    "actual_max_temp": 73,
    "actual_precipitation": 0,
    "location": "KSEA"
  },
  {
    "": 2215,
    "date": "2014-7-26",
    "actual_mean_temp": 68,
    "actual_min_temp": 56,
    "actual_max_temp": 79,
    "actual_precipitation": 0,
    "location": "KSEA"
  },
  {
    "": 2216,
    "date": "2014-7-27",
    "actual_mean_temp": 71,
    "actual_min_temp": 59,
    "actual_max_temp": 83,
    "actual_precipitation": 0,
    "location": "KSEA"
  },
  {
    "": 2217,
    "date": "2014-7-28",
    "actual_mean_temp": 73,
    "actual_min_temp": 59,
    "actual_max_temp": 87,
    "actual_precipitation": 0,
    "location": "KSEA"
  },
  {
    "": 2218,
    "date": "2014-7-29",
    "actual_mean_temp": 73,
    "actual_min_temp": 60,
    "actual_max_temp": 86,
    "actual_precipitation": 0,
    "location": "KSEA"
  },
  {
    "": 2219,
    "date": "2014-7-30",
    "actual_mean_temp": 72,
    "actual_min_temp": 58,
    "actual_max_temp": 85,
    "actual_precipitation": 0,
    "location": "KSEA"
  },
  {
    "": 2220,
    "date": "2014-7-31",
    "actual_mean_temp": 76,
    "actual_min_temp": 64,
    "actual_max_temp": 87,
    "actual_precipitation": 0,
    "location": "KSEA"
  },
  {
    "": 2221,
    "date": "2014-8-1",
    "actual_mean_temp": 72,
    "actual_min_temp": 59,
    "actual_max_temp": 84,
    "actual_precipitation": 0,
    "location": "KSEA"
  },
  {
    "": 2222,
    "date": "2014-8-2",
    "actual_mean_temp": 73,
    "actual_min_temp": 60,
    "actual_max_temp": 85,
    "actual_precipitation": 0.02,
    "location": "KSEA"
  },
  {
    "": 2223,
    "date": "2014-8-3",
    "actual_mean_temp": 74,
    "actual_min_temp": 58,
    "actual_max_temp": 89,
    "actual_precipitation": 0,
    "location": "KSEA"
  },
  {
    "": 2224,
    "date": "2014-8-4",
    "actual_mean_temp": 76,
    "actual_min_temp": 61,
    "actual_max_temp": 91,
    "actual_precipitation": 0,
    "location": "KSEA"
  },
  {
    "": 2225,
    "date": "2014-8-5",
    "actual_mean_temp": 67,
    "actual_min_temp": 57,
    "actual_max_temp": 77,
    "actual_precipitation": 0,
    "location": "KSEA"
  },
  {
    "": 2226,
    "date": "2014-8-6",
    "actual_mean_temp": 69,
    "actual_min_temp": 59,
    "actual_max_temp": 79,
    "actual_precipitation": 0,
    "location": "KSEA"
  },
  {
    "": 2227,
    "date": "2014-8-7",
    "actual_mean_temp": 67,
    "actual_min_temp": 56,
    "actual_max_temp": 78,
    "actual_precipitation": 0,
    "location": "KSEA"
  },
  {
    "": 2228,
    "date": "2014-8-8",
    "actual_mean_temp": 67,
    "actual_min_temp": 56,
    "actual_max_temp": 78,
    "actual_precipitation": 0,
    "location": "KSEA"
  },
  {
    "": 2229,
    "date": "2014-8-9",
    "actual_mean_temp": 71,
    "actual_min_temp": 60,
    "actual_max_temp": 81,
    "actual_precipitation": 0,
    "location": "KSEA"
  },
  {
    "": 2230,
    "date": "2014-8-10",
    "actual_mean_temp": 72,
    "actual_min_temp": 57,
    "actual_max_temp": 87,
    "actual_precipitation": 0,
    "location": "KSEA"
  },
  {
    "": 2231,
    "date": "2014-8-11",
    "actual_mean_temp": 80,
    "actual_min_temp": 64,
    "actual_max_temp": 96,
    "actual_precipitation": 0.02,
    "location": "KSEA"
  },
  {
    "": 2232,
    "date": "2014-8-12",
    "actual_mean_temp": 72,
    "actual_min_temp": 63,
    "actual_max_temp": 81,
    "actual_precipitation": 0.5,
    "location": "KSEA"
  },
  {
    "": 2233,
    "date": "2014-8-13",
    "actual_mean_temp": 67,
    "actual_min_temp": 59,
    "actual_max_temp": 74,
    "actual_precipitation": 0.85,
    "location": "KSEA"
  },
  {
    "": 2234,
    "date": "2014-8-14",
    "actual_mean_temp": 67,
    "actual_min_temp": 63,
    "actual_max_temp": 70,
    "actual_precipitation": 0,
    "location": "KSEA"
  },
  {
    "": 2235,
    "date": "2014-8-15",
    "actual_mean_temp": 69,
    "actual_min_temp": 62,
    "actual_max_temp": 76,
    "actual_precipitation": 0.04,
    "location": "KSEA"
  },
  {
    "": 2236,
    "date": "2014-8-16",
    "actual_mean_temp": 69,
    "actual_min_temp": 60,
    "actual_max_temp": 78,
    "actual_precipitation": 0,
    "location": "KSEA"
  },
  {
    "": 2237,
    "date": "2014-8-17",
    "actual_mean_temp": 71,
    "actual_min_temp": 59,
    "actual_max_temp": 82,
    "actual_precipitation": 0,
    "location": "KSEA"
  },
  {
    "": 2238,
    "date": "2014-8-18",
    "actual_mean_temp": 73,
    "actual_min_temp": 60,
    "actual_max_temp": 85,
    "actual_precipitation": 0,
    "location": "KSEA"
  },
  {
    "": 2239,
    "date": "2014-8-19",
    "actual_mean_temp": 71,
    "actual_min_temp": 60,
    "actual_max_temp": 81,
    "actual_precipitation": 0,
    "location": "KSEA"
  },
  {
    "": 2240,
    "date": "2014-8-20",
    "actual_mean_temp": 64,
    "actual_min_temp": 57,
    "actual_max_temp": 71,
    "actual_precipitation": 0,
    "location": "KSEA"
  },
  {
    "": 2241,
    "date": "2014-8-21",
    "actual_mean_temp": 61,
    "actual_min_temp": 52,
    "actual_max_temp": 70,
    "actual_precipitation": 0,
    "location": "KSEA"
  },
  {
    "": 2242,
    "date": "2014-8-22",
    "actual_mean_temp": 66,
    "actual_min_temp": 56,
    "actual_max_temp": 75,
    "actual_precipitation": 0,
    "location": "KSEA"
  },
  {
    "": 2243,
    "date": "2014-8-23",
    "actual_mean_temp": 70,
    "actual_min_temp": 57,
    "actual_max_temp": 82,
    "actual_precipitation": 0,
    "location": "KSEA"
  },
  {
    "": 2244,
    "date": "2014-8-24",
    "actual_mean_temp": 67,
    "actual_min_temp": 56,
    "actual_max_temp": 77,
    "actual_precipitation": 0,
    "location": "KSEA"
  },
  {
    "": 2245,
    "date": "2014-8-25",
    "actual_mean_temp": 71,
    "actual_min_temp": 58,
    "actual_max_temp": 84,
    "actual_precipitation": 0,
    "location": "KSEA"
  },
  {
    "": 2246,
    "date": "2014-8-26",
    "actual_mean_temp": 74,
    "actual_min_temp": 60,
    "actual_max_temp": 88,
    "actual_precipitation": 0,
    "location": "KSEA"
  },
  {
    "": 2247,
    "date": "2014-8-27",
    "actual_mean_temp": 73,
    "actual_min_temp": 61,
    "actual_max_temp": 84,
    "actual_precipitation": 0,
    "location": "KSEA"
  },
  {
    "": 2248,
    "date": "2014-8-28",
    "actual_mean_temp": 66,
    "actual_min_temp": 58,
    "actual_max_temp": 74,
    "actual_precipitation": 0,
    "location": "KSEA"
  },
  {
    "": 2249,
    "date": "2014-8-29",
    "actual_mean_temp": 66,
    "actual_min_temp": 59,
    "actual_max_temp": 73,
    "actual_precipitation": 0,
    "location": "KSEA"
  },
  {
    "": 2250,
    "date": "2014-8-30",
    "actual_mean_temp": 62,
    "actual_min_temp": 59,
    "actual_max_temp": 64,
    "actual_precipitation": 0.33,
    "location": "KSEA"
  },
  {
    "": 2251,
    "date": "2014-8-31",
    "actual_mean_temp": 64,
    "actual_min_temp": 57,
    "actual_max_temp": 70,
    "actual_precipitation": 0.05,
    "location": "KSEA"
  },
  {
    "": 2252,
    "date": "2014-9-1",
    "actual_mean_temp": 65,
    "actual_min_temp": 55,
    "actual_max_temp": 74,
    "actual_precipitation": 0,
    "location": "KSEA"
  },
  {
    "": 2253,
    "date": "2014-9-2",
    "actual_mean_temp": 63,
    "actual_min_temp": 57,
    "actual_max_temp": 68,
    "actual_precipitation": 0.12,
    "location": "KSEA"
  },
  {
    "": 2254,
    "date": "2014-9-3",
    "actual_mean_temp": 62,
    "actual_min_temp": 55,
    "actual_max_temp": 69,
    "actual_precipitation": 0,
    "location": "KSEA"
  },
  {
    "": 2255,
    "date": "2014-9-4",
    "actual_mean_temp": 64,
    "actual_min_temp": 52,
    "actual_max_temp": 75,
    "actual_precipitation": 0,
    "location": "KSEA"
  },
  {
    "": 2256,
    "date": "2014-9-5",
    "actual_mean_temp": 70,
    "actual_min_temp": 57,
    "actual_max_temp": 82,
    "actual_precipitation": 0,
    "location": "KSEA"
  },
  {
    "": 2257,
    "date": "2014-9-6",
    "actual_mean_temp": 75,
    "actual_min_temp": 59,
    "actual_max_temp": 90,
    "actual_precipitation": 0,
    "location": "KSEA"
  },
  {
    "": 2258,
    "date": "2014-9-7",
    "actual_mean_temp": 70,
    "actual_min_temp": 56,
    "actual_max_temp": 83,
    "actual_precipitation": 0,
    "location": "KSEA"
  },
  {
    "": 2259,
    "date": "2014-9-8",
    "actual_mean_temp": 63,
    "actual_min_temp": 56,
    "actual_max_temp": 70,
    "actual_precipitation": 0,
    "location": "KSEA"
  },
  {
    "": 2260,
    "date": "2014-9-9",
    "actual_mean_temp": 64,
    "actual_min_temp": 56,
    "actual_max_temp": 71,
    "actual_precipitation": 0,
    "location": "KSEA"
  },
  {
    "": 2261,
    "date": "2014-9-10",
    "actual_mean_temp": 63,
    "actual_min_temp": 54,
    "actual_max_temp": 72,
    "actual_precipitation": 0,
    "location": "KSEA"
  },
  {
    "": 2262,
    "date": "2014-9-11",
    "actual_mean_temp": 66,
    "actual_min_temp": 55,
    "actual_max_temp": 76,
    "actual_precipitation": 0,
    "location": "KSEA"
  },
  {
    "": 2263,
    "date": "2014-9-12",
    "actual_mean_temp": 66,
    "actual_min_temp": 55,
    "actual_max_temp": 76,
    "actual_precipitation": 0,
    "location": "KSEA"
  },
  {
    "": 2264,
    "date": "2014-9-13",
    "actual_mean_temp": 67,
    "actual_min_temp": 50,
    "actual_max_temp": 83,
    "actual_precipitation": 0,
    "location": "KSEA"
  },
  {
    "": 2265,
    "date": "2014-9-14",
    "actual_mean_temp": 70,
    "actual_min_temp": 53,
    "actual_max_temp": 86,
    "actual_precipitation": 0,
    "location": "KSEA"
  },
  {
    "": 2266,
    "date": "2014-9-15",
    "actual_mean_temp": 71,
    "actual_min_temp": 54,
    "actual_max_temp": 87,
    "actual_precipitation": 0,
    "location": "KSEA"
  },
  {
    "": 2267,
    "date": "2014-9-16",
    "actual_mean_temp": 65,
    "actual_min_temp": 57,
    "actual_max_temp": 72,
    "actual_precipitation": 0,
    "location": "KSEA"
  },
  {
    "": 2268,
    "date": "2014-9-17",
    "actual_mean_temp": 66,
    "actual_min_temp": 58,
    "actual_max_temp": 73,
    "actual_precipitation": 0.02,
    "location": "KSEA"
  },
  {
    "": 2269,
    "date": "2014-9-18",
    "actual_mean_temp": 63,
    "actual_min_temp": 59,
    "actual_max_temp": 67,
    "actual_precipitation": 0.01,
    "location": "KSEA"
  },
  {
    "": 2270,
    "date": "2014-9-19",
    "actual_mean_temp": 68,
    "actual_min_temp": 61,
    "actual_max_temp": 75,
    "actual_precipitation": 0,
    "location": "KSEA"
  },
  {
    "": 2271,
    "date": "2014-9-20",
    "actual_mean_temp": 67,
    "actual_min_temp": 58,
    "actual_max_temp": 76,
    "actual_precipitation": 0,
    "location": "KSEA"
  },
  {
    "": 2272,
    "date": "2014-9-21",
    "actual_mean_temp": 67,
    "actual_min_temp": 55,
    "actual_max_temp": 79,
    "actual_precipitation": 0,
    "location": "KSEA"
  },
  {
    "": 2273,
    "date": "2014-9-22",
    "actual_mean_temp": 66,
    "actual_min_temp": 59,
    "actual_max_temp": 72,
    "actual_precipitation": 0.01,
    "location": "KSEA"
  },
  {
    "": 2274,
    "date": "2014-9-23",
    "actual_mean_temp": 62,
    "actual_min_temp": 58,
    "actual_max_temp": 66,
    "actual_precipitation": 0.72,
    "location": "KSEA"
  },
  {
    "": 2275,
    "date": "2014-9-24",
    "actual_mean_temp": 62,
    "actual_min_temp": 58,
    "actual_max_temp": 66,
    "actual_precipitation": 0.8,
    "location": "KSEA"
  },
  {
    "": 2276,
    "date": "2014-9-25",
    "actual_mean_temp": 65,
    "actual_min_temp": 58,
    "actual_max_temp": 71,
    "actual_precipitation": 0.17,
    "location": "KSEA"
  },
  {
    "": 2277,
    "date": "2014-9-26",
    "actual_mean_temp": 63,
    "actual_min_temp": 57,
    "actual_max_temp": 68,
    "actual_precipitation": 0.35,
    "location": "KSEA"
  },
  {
    "": 2278,
    "date": "2014-9-27",
    "actual_mean_temp": 61,
    "actual_min_temp": 53,
    "actual_max_temp": 69,
    "actual_precipitation": 0,
    "location": "KSEA"
  },
  {
    "": 2279,
    "date": "2014-9-28",
    "actual_mean_temp": 60,
    "actual_min_temp": 54,
    "actual_max_temp": 66,
    "actual_precipitation": 0,
    "location": "KSEA"
  },
  {
    "": 2280,
    "date": "2014-9-29",
    "actual_mean_temp": 57,
    "actual_min_temp": 52,
    "actual_max_temp": 62,
    "actual_precipitation": 0.03,
    "location": "KSEA"
  },
  {
    "": 2281,
    "date": "2014-9-30",
    "actual_mean_temp": 61,
    "actual_min_temp": 54,
    "actual_max_temp": 67,
    "actual_precipitation": 0,
    "location": "KSEA"
  },
  {
    "": 2282,
    "date": "2014-10-1",
    "actual_mean_temp": 59,
    "actual_min_temp": 52,
    "actual_max_temp": 65,
    "actual_precipitation": 0,
    "location": "KSEA"
  },
  {
    "": 2283,
    "date": "2014-10-2",
    "actual_mean_temp": 59,
    "actual_min_temp": 50,
    "actual_max_temp": 67,
    "actual_precipitation": 0,
    "location": "KSEA"
  },
  {
    "": 2284,
    "date": "2014-10-3",
    "actual_mean_temp": 60,
    "actual_min_temp": 48,
    "actual_max_temp": 72,
    "actual_precipitation": 0,
    "location": "KSEA"
  },
  {
    "": 2285,
    "date": "2014-10-4",
    "actual_mean_temp": 63,
    "actual_min_temp": 54,
    "actual_max_temp": 71,
    "actual_precipitation": 0,
    "location": "KSEA"
  },
  {
    "": 2286,
    "date": "2014-10-5",
    "actual_mean_temp": 64,
    "actual_min_temp": 53,
    "actual_max_temp": 75,
    "actual_precipitation": 0,
    "location": "KSEA"
  },
  {
    "": 2287,
    "date": "2014-10-6",
    "actual_mean_temp": 67,
    "actual_min_temp": 56,
    "actual_max_temp": 78,
    "actual_precipitation": 0,
    "location": "KSEA"
  },
  {
    "": 2288,
    "date": "2014-10-7",
    "actual_mean_temp": 62,
    "actual_min_temp": 57,
    "actual_max_temp": 66,
    "actual_precipitation": 0,
    "location": "KSEA"
  },
  {
    "": 2289,
    "date": "2014-10-8",
    "actual_mean_temp": 62,
    "actual_min_temp": 55,
    "actual_max_temp": 69,
    "actual_precipitation": 0,
    "location": "KSEA"
  },
  {
    "": 2290,
    "date": "2014-10-9",
    "actual_mean_temp": 58,
    "actual_min_temp": 52,
    "actual_max_temp": 63,
    "actual_precipitation": 0,
    "location": "KSEA"
  },
  {
    "": 2291,
    "date": "2014-10-10",
    "actual_mean_temp": 58,
    "actual_min_temp": 50,
    "actual_max_temp": 65,
    "actual_precipitation": 0.01,
    "location": "KSEA"
  },
  {
    "": 2292,
    "date": "2014-10-11",
    "actual_mean_temp": 59,
    "actual_min_temp": 53,
    "actual_max_temp": 65,
    "actual_precipitation": 0.29,
    "location": "KSEA"
  },
  {
    "": 2293,
    "date": "2014-10-12",
    "actual_mean_temp": 59,
    "actual_min_temp": 53,
    "actual_max_temp": 64,
    "actual_precipitation": 0,
    "location": "KSEA"
  },
  {
    "": 2294,
    "date": "2014-10-13",
    "actual_mean_temp": 60,
    "actual_min_temp": 50,
    "actual_max_temp": 70,
    "actual_precipitation": 0.3,
    "location": "KSEA"
  },
  {
    "": 2295,
    "date": "2014-10-14",
    "actual_mean_temp": 58,
    "actual_min_temp": 53,
    "actual_max_temp": 62,
    "actual_precipitation": 0.28,
    "location": "KSEA"
  },
  {
    "": 2296,
    "date": "2014-10-15",
    "actual_mean_temp": 57,
    "actual_min_temp": 53,
    "actual_max_temp": 61,
    "actual_precipitation": 0.34,
    "location": "KSEA"
  },
  {
    "": 2297,
    "date": "2014-10-16",
    "actual_mean_temp": 61,
    "actual_min_temp": 52,
    "actual_max_temp": 69,
    "actual_precipitation": 0,
    "location": "KSEA"
  },
  {
    "": 2298,
    "date": "2014-10-17",
    "actual_mean_temp": 58,
    "actual_min_temp": 53,
    "actual_max_temp": 62,
    "actual_precipitation": 0.13,
    "location": "KSEA"
  },
  {
    "": 2299,
    "date": "2014-10-18",
    "actual_mean_temp": 62,
    "actual_min_temp": 57,
    "actual_max_temp": 67,
    "actual_precipitation": 0.59,
    "location": "KSEA"
  },
  {
    "": 2300,
    "date": "2014-10-19",
    "actual_mean_temp": 64,
    "actual_min_temp": 55,
    "actual_max_temp": 72,
    "actual_precipitation": 0,
    "location": "KSEA"
  },
  {
    "": 2301,
    "date": "2014-10-20",
    "actual_mean_temp": 58,
    "actual_min_temp": 54,
    "actual_max_temp": 61,
    "actual_precipitation": 0.46,
    "location": "KSEA"
  },
  {
    "": 2302,
    "date": "2014-10-21",
    "actual_mean_temp": 57,
    "actual_min_temp": 53,
    "actual_max_temp": 61,
    "actual_precipitation": 0.04,
    "location": "KSEA"
  },
  {
    "": 2303,
    "date": "2014-10-22",
    "actual_mean_temp": 57,
    "actual_min_temp": 53,
    "actual_max_temp": 60,
    "actual_precipitation": 1.26,
    "location": "KSEA"
  },
  {
    "": 2304,
    "date": "2014-10-23",
    "actual_mean_temp": 53,
    "actual_min_temp": 47,
    "actual_max_temp": 58,
    "actual_precipitation": 0.37,
    "location": "KSEA"
  },
  {
    "": 2305,
    "date": "2014-10-24",
    "actual_mean_temp": 53,
    "actual_min_temp": 48,
    "actual_max_temp": 58,
    "actual_precipitation": 0.16,
    "location": "KSEA"
  },
  {
    "": 2306,
    "date": "2014-10-25",
    "actual_mean_temp": 55,
    "actual_min_temp": 47,
    "actual_max_temp": 62,
    "actual_precipitation": 0.24,
    "location": "KSEA"
  },
  {
    "": 2307,
    "date": "2014-10-26",
    "actual_mean_temp": 51,
    "actual_min_temp": 46,
    "actual_max_temp": 55,
    "actual_precipitation": 0.06,
    "location": "KSEA"
  },
  {
    "": 2308,
    "date": "2014-10-27",
    "actual_mean_temp": 52,
    "actual_min_temp": 44,
    "actual_max_temp": 60,
    "actual_precipitation": 0.03,
    "location": "KSEA"
  },
  {
    "": 2309,
    "date": "2014-10-28",
    "actual_mean_temp": 54,
    "actual_min_temp": 49,
    "actual_max_temp": 59,
    "actual_precipitation": 0.5,
    "location": "KSEA"
  },
  {
    "": 2310,
    "date": "2014-10-29",
    "actual_mean_temp": 58,
    "actual_min_temp": 53,
    "actual_max_temp": 62,
    "actual_precipitation": 0.02,
    "location": "KSEA"
  },
  {
    "": 2311,
    "date": "2014-10-30",
    "actual_mean_temp": 56,
    "actual_min_temp": 52,
    "actual_max_temp": 60,
    "actual_precipitation": 1,
    "location": "KSEA"
  },
  {
    "": 2312,
    "date": "2014-10-31",
    "actual_mean_temp": 51,
    "actual_min_temp": 47,
    "actual_max_temp": 55,
    "actual_precipitation": 0.67,
    "location": "KSEA"
  },
  {
    "": 2313,
    "date": "2014-11-1",
    "actual_mean_temp": 49,
    "actual_min_temp": 45,
    "actual_max_temp": 52,
    "actual_precipitation": 0,
    "location": "KSEA"
  },
  {
    "": 2314,
    "date": "2014-11-2",
    "actual_mean_temp": 51,
    "actual_min_temp": 45,
    "actual_max_temp": 56,
    "actual_precipitation": 0.07,
    "location": "KSEA"
  },
  {
    "": 2315,
    "date": "2014-11-3",
    "actual_mean_temp": 55,
    "actual_min_temp": 52,
    "actual_max_temp": 57,
    "actual_precipitation": 0.43,
    "location": "KSEA"
  },
  {
    "": 2316,
    "date": "2014-11-4",
    "actual_mean_temp": 55,
    "actual_min_temp": 51,
    "actual_max_temp": 58,
    "actual_precipitation": 0.16,
    "location": "KSEA"
  },
  {
    "": 2317,
    "date": "2014-11-5",
    "actual_mean_temp": 55,
    "actual_min_temp": 51,
    "actual_max_temp": 59,
    "actual_precipitation": 0.19,
    "location": "KSEA"
  },
  {
    "": 2318,
    "date": "2014-11-6",
    "actual_mean_temp": 57,
    "actual_min_temp": 51,
    "actual_max_temp": 62,
    "actual_precipitation": 0.16,
    "location": "KSEA"
  },
  {
    "": 2319,
    "date": "2014-11-7",
    "actual_mean_temp": 52,
    "actual_min_temp": 45,
    "actual_max_temp": 58,
    "actual_precipitation": 0,
    "location": "KSEA"
  },
  {
    "": 2320,
    "date": "2014-11-8",
    "actual_mean_temp": 47,
    "actual_min_temp": 39,
    "actual_max_temp": 55,
    "actual_precipitation": 0,
    "location": "KSEA"
  },
  {
    "": 2321,
    "date": "2014-11-9",
    "actual_mean_temp": 51,
    "actual_min_temp": 46,
    "actual_max_temp": 56,
    "actual_precipitation": 0.2,
    "location": "KSEA"
  },
  {
    "": 2322,
    "date": "2014-11-10",
    "actual_mean_temp": 47,
    "actual_min_temp": 42,
    "actual_max_temp": 52,
    "actual_precipitation": 0,
    "location": "KSEA"
  },
  {
    "": 2323,
    "date": "2014-11-11",
    "actual_mean_temp": 40,
    "actual_min_temp": 34,
    "actual_max_temp": 46,
    "actual_precipitation": 0,
    "location": "KSEA"
  },
  {
    "": 2324,
    "date": "2014-11-12",
    "actual_mean_temp": 38,
    "actual_min_temp": 32,
    "actual_max_temp": 44,
    "actual_precipitation": 0,
    "location": "KSEA"
  },
  {
    "": 2325,
    "date": "2014-11-13",
    "actual_mean_temp": 39,
    "actual_min_temp": 33,
    "actual_max_temp": 45,
    "actual_precipitation": 0,
    "location": "KSEA"
  },
  {
    "": 2326,
    "date": "2014-11-14",
    "actual_mean_temp": 37,
    "actual_min_temp": 28,
    "actual_max_temp": 45,
    "actual_precipitation": 0,
    "location": "KSEA"
  },
  {
    "": 2327,
    "date": "2014-11-15",
    "actual_mean_temp": 38,
    "actual_min_temp": 29,
    "actual_max_temp": 47,
    "actual_precipitation": 0,
    "location": "KSEA"
  },
  {
    "": 2328,
    "date": "2014-11-16",
    "actual_mean_temp": 39,
    "actual_min_temp": 28,
    "actual_max_temp": 49,
    "actual_precipitation": 0,
    "location": "KSEA"
  },
  {
    "": 2329,
    "date": "2014-11-17",
    "actual_mean_temp": 40,
    "actual_min_temp": 28,
    "actual_max_temp": 51,
    "actual_precipitation": 0,
    "location": "KSEA"
  },
  {
    "": 2330,
    "date": "2014-11-18",
    "actual_mean_temp": 38,
    "actual_min_temp": 31,
    "actual_max_temp": 45,
    "actual_precipitation": 0,
    "location": "KSEA"
  },
  {
    "": 2331,
    "date": "2014-11-19",
    "actual_mean_temp": 44,
    "actual_min_temp": 36,
    "actual_max_temp": 52,
    "actual_precipitation": 0,
    "location": "KSEA"
  },
  {
    "": 2332,
    "date": "2014-11-20",
    "actual_mean_temp": 47,
    "actual_min_temp": 42,
    "actual_max_temp": 52,
    "actual_precipitation": 0.14,
    "location": "KSEA"
  },
  {
    "": 2333,
    "date": "2014-11-21",
    "actual_mean_temp": 50,
    "actual_min_temp": 47,
    "actual_max_temp": 52,
    "actual_precipitation": 0.6,
    "location": "KSEA"
  },
  {
    "": 2334,
    "date": "2014-11-22",
    "actual_mean_temp": 47,
    "actual_min_temp": 44,
    "actual_max_temp": 49,
    "actual_precipitation": 0.02,
    "location": "KSEA"
  },
  {
    "": 2335,
    "date": "2014-11-23",
    "actual_mean_temp": 49,
    "actual_min_temp": 42,
    "actual_max_temp": 55,
    "actual_precipitation": 0.47,
    "location": "KSEA"
  },
  {
    "": 2336,
    "date": "2014-11-24",
    "actual_mean_temp": 47,
    "actual_min_temp": 40,
    "actual_max_temp": 53,
    "actual_precipitation": 0.05,
    "location": "KSEA"
  },
  {
    "": 2337,
    "date": "2014-11-25",
    "actual_mean_temp": 53,
    "actual_min_temp": 49,
    "actual_max_temp": 57,
    "actual_precipitation": 0.72,
    "location": "KSEA"
  },
  {
    "": 2338,
    "date": "2014-11-26",
    "actual_mean_temp": 57,
    "actual_min_temp": 54,
    "actual_max_temp": 59,
    "actual_precipitation": 0.01,
    "location": "KSEA"
  },
  {
    "": 2339,
    "date": "2014-11-27",
    "actual_mean_temp": 56,
    "actual_min_temp": 53,
    "actual_max_temp": 58,
    "actual_precipitation": 0.13,
    "location": "KSEA"
  },
  {
    "": 2340,
    "date": "2014-11-28",
    "actual_mean_temp": 47,
    "actual_min_temp": 38,
    "actual_max_temp": 55,
    "actual_precipitation": 1.35,
    "location": "KSEA"
  },
  {
    "": 2341,
    "date": "2014-11-29",
    "actual_mean_temp": 32,
    "actual_min_temp": 24,
    "actual_max_temp": 40,
    "actual_precipitation": 0.14,
    "location": "KSEA"
  },
  {
    "": 2342,
    "date": "2014-11-30",
    "actual_mean_temp": 30,
    "actual_min_temp": 23,
    "actual_max_temp": 37,
    "actual_precipitation": 0,
    "location": "KSEA"
  },
  {
    "": 2343,
    "date": "2014-12-1",
    "actual_mean_temp": 33,
    "actual_min_temp": 26,
    "actual_max_temp": 40,
    "actual_precipitation": 0,
    "location": "KSEA"
  },
  {
    "": 2344,
    "date": "2014-12-2",
    "actual_mean_temp": 34,
    "actual_min_temp": 26,
    "actual_max_temp": 42,
    "actual_precipitation": 0,
    "location": "KSEA"
  },
  {
    "": 2345,
    "date": "2014-12-3",
    "actual_mean_temp": 41,
    "actual_min_temp": 32,
    "actual_max_temp": 50,
    "actual_precipitation": 0,
    "location": "KSEA"
  },
  {
    "": 2346,
    "date": "2014-12-4",
    "actual_mean_temp": 43,
    "actual_min_temp": 39,
    "actual_max_temp": 47,
    "actual_precipitation": 0.03,
    "location": "KSEA"
  },
  {
    "": 2347,
    "date": "2014-12-5",
    "actual_mean_temp": 50,
    "actual_min_temp": 44,
    "actual_max_temp": 55,
    "actual_precipitation": 0.12,
    "location": "KSEA"
  },
  {
    "": 2348,
    "date": "2014-12-6",
    "actual_mean_temp": 50,
    "actual_min_temp": 46,
    "actual_max_temp": 53,
    "actual_precipitation": 0.29,
    "location": "KSEA"
  },
  {
    "": 2349,
    "date": "2014-12-7",
    "actual_mean_temp": 51,
    "actual_min_temp": 43,
    "actual_max_temp": 58,
    "actual_precipitation": 0,
    "location": "KSEA"
  },
  {
    "": 2350,
    "date": "2014-12-8",
    "actual_mean_temp": 53,
    "actual_min_temp": 48,
    "actual_max_temp": 58,
    "actual_precipitation": 0.36,
    "location": "KSEA"
  },
  {
    "": 2351,
    "date": "2014-12-9",
    "actual_mean_temp": 56,
    "actual_min_temp": 51,
    "actual_max_temp": 61,
    "actual_precipitation": 0.39,
    "location": "KSEA"
  },
  {
    "": 2352,
    "date": "2014-12-10",
    "actual_mean_temp": 58,
    "actual_min_temp": 50,
    "actual_max_temp": 66,
    "actual_precipitation": 0.51,
    "location": "KSEA"
  },
  {
    "": 2353,
    "date": "2014-12-11",
    "actual_mean_temp": 53,
    "actual_min_temp": 47,
    "actual_max_temp": 58,
    "actual_precipitation": 0.27,
    "location": "KSEA"
  },
  {
    "": 2354,
    "date": "2014-12-12",
    "actual_mean_temp": 49,
    "actual_min_temp": 45,
    "actual_max_temp": 52,
    "actual_precipitation": 0,
    "location": "KSEA"
  },
  {
    "": 2355,
    "date": "2014-12-13",
    "actual_mean_temp": 45,
    "actual_min_temp": 39,
    "actual_max_temp": 50,
    "actual_precipitation": 0,
    "location": "KSEA"
  },
  {
    "": 2356,
    "date": "2014-12-14",
    "actual_mean_temp": 45,
    "actual_min_temp": 35,
    "actual_max_temp": 55,
    "actual_precipitation": 0,
    "location": "KSEA"
  },
  {
    "": 2357,
    "date": "2014-12-15",
    "actual_mean_temp": 49,
    "actual_min_temp": 44,
    "actual_max_temp": 54,
    "actual_precipitation": 0,
    "location": "KSEA"
  },
  {
    "": 2358,
    "date": "2014-12-16",
    "actual_mean_temp": 49,
    "actual_min_temp": 47,
    "actual_max_temp": 50,
    "actual_precipitation": 0,
    "location": "KSEA"
  },
  {
    "": 2359,
    "date": "2014-12-17",
    "actual_mean_temp": 46,
    "actual_min_temp": 43,
    "actual_max_temp": 48,
    "actual_precipitation": 0.11,
    "location": "KSEA"
  },
  {
    "": 2360,
    "date": "2014-12-18",
    "actual_mean_temp": 47,
    "actual_min_temp": 44,
    "actual_max_temp": 49,
    "actual_precipitation": 0.51,
    "location": "KSEA"
  },
  {
    "": 2361,
    "date": "2014-12-19",
    "actual_mean_temp": 49,
    "actual_min_temp": 45,
    "actual_max_temp": 52,
    "actual_precipitation": 0.12,
    "location": "KSEA"
  },
  {
    "": 2362,
    "date": "2014-12-20",
    "actual_mean_temp": 50,
    "actual_min_temp": 44,
    "actual_max_temp": 55,
    "actual_precipitation": 0.77,
    "location": "KSEA"
  },
  {
    "": 2363,
    "date": "2014-12-21",
    "actual_mean_temp": 53,
    "actual_min_temp": 50,
    "actual_max_temp": 55,
    "actual_precipitation": 0,
    "location": "KSEA"
  },
  {
    "": 2364,
    "date": "2014-12-22",
    "actual_mean_temp": 47,
    "actual_min_temp": 43,
    "actual_max_temp": 51,
    "actual_precipitation": 0,
    "location": "KSEA"
  },
  {
    "": 2365,
    "date": "2014-12-23",
    "actual_mean_temp": 48,
    "actual_min_temp": 41,
    "actual_max_temp": 54,
    "actual_precipitation": 0.81,
    "location": "KSEA"
  },
  {
    "": 2366,
    "date": "2014-12-24",
    "actual_mean_temp": 42,
    "actual_min_temp": 39,
    "actual_max_temp": 45,
    "actual_precipitation": 0.21,
    "location": "KSEA"
  },
  {
    "": 2367,
    "date": "2014-12-25",
    "actual_mean_temp": 42,
    "actual_min_temp": 37,
    "actual_max_temp": 46,
    "actual_precipitation": 0,
    "location": "KSEA"
  },
  {
    "": 2368,
    "date": "2014-12-26",
    "actual_mean_temp": 39,
    "actual_min_temp": 35,
    "actual_max_temp": 42,
    "actual_precipitation": 0,
    "location": "KSEA"
  },
  {
    "": 2369,
    "date": "2014-12-27",
    "actual_mean_temp": 45,
    "actual_min_temp": 40,
    "actual_max_temp": 49,
    "actual_precipitation": 0.13,
    "location": "KSEA"
  },
  {
    "": 2370,
    "date": "2014-12-28",
    "actual_mean_temp": 41,
    "actual_min_temp": 37,
    "actual_max_temp": 44,
    "actual_precipitation": 0.16,
    "location": "KSEA"
  },
  {
    "": 2371,
    "date": "2014-12-29",
    "actual_mean_temp": 38,
    "actual_min_temp": 33,
    "actual_max_temp": 43,
    "actual_precipitation": 0,
    "location": "KSEA"
  },
  {
    "": 2372,
    "date": "2014-12-30",
    "actual_mean_temp": 33,
    "actual_min_temp": 28,
    "actual_max_temp": 38,
    "actual_precipitation": 0,
    "location": "KSEA"
  },
  {
    "": 2373,
    "date": "2014-12-31",
    "actual_mean_temp": 33,
    "actual_min_temp": 27,
    "actual_max_temp": 38,
    "actual_precipitation": 0,
    "location": "KSEA"
  },
  {
    "": 2374,
    "date": "2015-1-1",
    "actual_mean_temp": 34,
    "actual_min_temp": 26,
    "actual_max_temp": 42,
    "actual_precipitation": 0,
    "location": "KSEA"
  },
  {
    "": 2375,
    "date": "2015-1-2",
    "actual_mean_temp": 37,
    "actual_min_temp": 32,
    "actual_max_temp": 42,
    "actual_precipitation": 0.06,
    "location": "KSEA"
  },
  {
    "": 2376,
    "date": "2015-1-3",
    "actual_mean_temp": 38,
    "actual_min_temp": 35,
    "actual_max_temp": 41,
    "actual_precipitation": 0,
    "location": "KSEA"
  },
  {
    "": 2377,
    "date": "2015-1-4",
    "actual_mean_temp": 45,
    "actual_min_temp": 38,
    "actual_max_temp": 51,
    "actual_precipitation": 0.4,
    "location": "KSEA"
  },
  {
    "": 2378,
    "date": "2015-1-5",
    "actual_mean_temp": 52,
    "actual_min_temp": 49,
    "actual_max_temp": 54,
    "actual_precipitation": 0.32,
    "location": "KSEA"
  },
  {
    "": 2379,
    "date": "2015-1-6",
    "actual_mean_temp": 49,
    "actual_min_temp": 43,
    "actual_max_temp": 54,
    "actual_precipitation": 0,
    "location": "KSEA"
  },
  {
    "": 2380,
    "date": "2015-1-7",
    "actual_mean_temp": 44,
    "actual_min_temp": 42,
    "actual_max_temp": 46,
    "actual_precipitation": 0,
    "location": "KSEA"
  },
  {
    "": 2381,
    "date": "2015-1-8",
    "actual_mean_temp": 41,
    "actual_min_temp": 35,
    "actual_max_temp": 46,
    "actual_precipitation": 0,
    "location": "KSEA"
  },
  {
    "": 2382,
    "date": "2015-1-9",
    "actual_mean_temp": 44,
    "actual_min_temp": 38,
    "actual_max_temp": 50,
    "actual_precipitation": 0.01,
    "location": "KSEA"
  },
  {
    "": 2383,
    "date": "2015-1-10",
    "actual_mean_temp": 45,
    "actual_min_temp": 43,
    "actual_max_temp": 46,
    "actual_precipitation": 0.23,
    "location": "KSEA"
  },
  {
    "": 2384,
    "date": "2015-1-11",
    "actual_mean_temp": 47,
    "actual_min_temp": 45,
    "actual_max_temp": 49,
    "actual_precipitation": 0.06,
    "location": "KSEA"
  },
  {
    "": 2385,
    "date": "2015-1-12",
    "actual_mean_temp": 46,
    "actual_min_temp": 40,
    "actual_max_temp": 52,
    "actual_precipitation": 0,
    "location": "KSEA"
  },
  {
    "": 2386,
    "date": "2015-1-13",
    "actual_mean_temp": 43,
    "actual_min_temp": 37,
    "actual_max_temp": 49,
    "actual_precipitation": 0,
    "location": "KSEA"
  },
  {
    "": 2387,
    "date": "2015-1-14",
    "actual_mean_temp": 38,
    "actual_min_temp": 33,
    "actual_max_temp": 43,
    "actual_precipitation": 0,
    "location": "KSEA"
  },
  {
    "": 2388,
    "date": "2015-1-15",
    "actual_mean_temp": 40,
    "actual_min_temp": 34,
    "actual_max_temp": 46,
    "actual_precipitation": 0.38,
    "location": "KSEA"
  },
  {
    "": 2389,
    "date": "2015-1-16",
    "actual_mean_temp": 48,
    "actual_min_temp": 42,
    "actual_max_temp": 53,
    "actual_precipitation": 0,
    "location": "KSEA"
  },
  {
    "": 2390,
    "date": "2015-1-17",
    "actual_mean_temp": 47,
    "actual_min_temp": 38,
    "actual_max_temp": 56,
    "actual_precipitation": 1.03,
    "location": "KSEA"
  },
  {
    "": 2391,
    "date": "2015-1-18",
    "actual_mean_temp": 51,
    "actual_min_temp": 45,
    "actual_max_temp": 57,
    "actual_precipitation": 0.84,
    "location": "KSEA"
  },
  {
    "": 2392,
    "date": "2015-1-19",
    "actual_mean_temp": 47,
    "actual_min_temp": 43,
    "actual_max_temp": 50,
    "actual_precipitation": 0.02,
    "location": "KSEA"
  },
  {
    "": 2393,
    "date": "2015-1-20",
    "actual_mean_temp": 44,
    "actual_min_temp": 38,
    "actual_max_temp": 50,
    "actual_precipitation": 0,
    "location": "KSEA"
  },
  {
    "": 2394,
    "date": "2015-1-21",
    "actual_mean_temp": 38,
    "actual_min_temp": 31,
    "actual_max_temp": 45,
    "actual_precipitation": 0,
    "location": "KSEA"
  },
  {
    "": 2395,
    "date": "2015-1-22",
    "actual_mean_temp": 46,
    "actual_min_temp": 43,
    "actual_max_temp": 49,
    "actual_precipitation": 0.03,
    "location": "KSEA"
  },
  {
    "": 2396,
    "date": "2015-1-23",
    "actual_mean_temp": 51,
    "actual_min_temp": 47,
    "actual_max_temp": 54,
    "actual_precipitation": 0.23,
    "location": "KSEA"
  },
  {
    "": 2397,
    "date": "2015-1-24",
    "actual_mean_temp": 55,
    "actual_min_temp": 52,
    "actual_max_temp": 58,
    "actual_precipitation": 0.02,
    "location": "KSEA"
  },
  {
    "": 2398,
    "date": "2015-1-25",
    "actual_mean_temp": 54,
    "actual_min_temp": 45,
    "actual_max_temp": 63,
    "actual_precipitation": 0,
    "location": "KSEA"
  },
  {
    "": 2399,
    "date": "2015-1-26",
    "actual_mean_temp": 52,
    "actual_min_temp": 43,
    "actual_max_temp": 61,
    "actual_precipitation": 0,
    "location": "KSEA"
  },
  {
    "": 2400,
    "date": "2015-1-27",
    "actual_mean_temp": 50,
    "actual_min_temp": 47,
    "actual_max_temp": 52,
    "actual_precipitation": 0.03,
    "location": "KSEA"
  },
  {
    "": 2401,
    "date": "2015-1-28",
    "actual_mean_temp": 48,
    "actual_min_temp": 41,
    "actual_max_temp": 54,
    "actual_precipitation": 0,
    "location": "KSEA"
  },
  {
    "": 2402,
    "date": "2015-1-29",
    "actual_mean_temp": 46,
    "actual_min_temp": 38,
    "actual_max_temp": 54,
    "actual_precipitation": 0,
    "location": "KSEA"
  },
  {
    "": 2403,
    "date": "2015-1-30",
    "actual_mean_temp": 41,
    "actual_min_temp": 34,
    "actual_max_temp": 47,
    "actual_precipitation": 0,
    "location": "KSEA"
  },
  {
    "": 2404,
    "date": "2015-1-31",
    "actual_mean_temp": 42,
    "actual_min_temp": 38,
    "actual_max_temp": 45,
    "actual_precipitation": 0,
    "location": "KSEA"
  },
  {
    "": 2405,
    "date": "2015-2-1",
    "actual_mean_temp": 45,
    "actual_min_temp": 40,
    "actual_max_temp": 49,
    "actual_precipitation": 0.06,
    "location": "KSEA"
  },
  {
    "": 2406,
    "date": "2015-2-2",
    "actual_mean_temp": 47,
    "actual_min_temp": 41,
    "actual_max_temp": 52,
    "actual_precipitation": 0.29,
    "location": "KSEA"
  },
  {
    "": 2407,
    "date": "2015-2-3",
    "actual_mean_temp": 46,
    "actual_min_temp": 42,
    "actual_max_temp": 50,
    "actual_precipitation": 0.05,
    "location": "KSEA"
  },
  {
    "": 2408,
    "date": "2015-2-4",
    "actual_mean_temp": 46,
    "actual_min_temp": 40,
    "actual_max_temp": 51,
    "actual_precipitation": 0.33,
    "location": "KSEA"
  },
  {
    "": 2409,
    "date": "2015-2-5",
    "actual_mean_temp": 52,
    "actual_min_temp": 47,
    "actual_max_temp": 56,
    "actual_precipitation": 1.03,
    "location": "KSEA"
  },
  {
    "": 2410,
    "date": "2015-2-6",
    "actual_mean_temp": 54,
    "actual_min_temp": 50,
    "actual_max_temp": 58,
    "actual_precipitation": 0.68,
    "location": "KSEA"
  },
  {
    "": 2411,
    "date": "2015-2-7",
    "actual_mean_temp": 52,
    "actual_min_temp": 49,
    "actual_max_temp": 54,
    "actual_precipitation": 0.93,
    "location": "KSEA"
  },
  {
    "": 2412,
    "date": "2015-2-8",
    "actual_mean_temp": 53,
    "actual_min_temp": 47,
    "actual_max_temp": 59,
    "actual_precipitation": 0.14,
    "location": "KSEA"
  },
  {
    "": 2413,
    "date": "2015-2-9",
    "actual_mean_temp": 52,
    "actual_min_temp": 47,
    "actual_max_temp": 56,
    "actual_precipitation": 0.24,
    "location": "KSEA"
  },
  {
    "": 2414,
    "date": "2015-2-10",
    "actual_mean_temp": 51,
    "actual_min_temp": 47,
    "actual_max_temp": 55,
    "actual_precipitation": 0.01,
    "location": "KSEA"
  },
  {
    "": 2415,
    "date": "2015-2-11",
    "actual_mean_temp": 49,
    "actual_min_temp": 42,
    "actual_max_temp": 55,
    "actual_precipitation": 0,
    "location": "KSEA"
  },
  {
    "": 2416,
    "date": "2015-2-12",
    "actual_mean_temp": 56,
    "actual_min_temp": 49,
    "actual_max_temp": 62,
    "actual_precipitation": 0.04,
    "location": "KSEA"
  },
  {
    "": 2417,
    "date": "2015-2-13",
    "actual_mean_temp": 52,
    "actual_min_temp": 44,
    "actual_max_temp": 60,
    "actual_precipitation": 0,
    "location": "KSEA"
  },
  {
    "": 2418,
    "date": "2015-2-14",
    "actual_mean_temp": 51,
    "actual_min_temp": 44,
    "actual_max_temp": 58,
    "actual_precipitation": 0.01,
    "location": "KSEA"
  },
  {
    "": 2419,
    "date": "2015-2-15",
    "actual_mean_temp": 47,
    "actual_min_temp": 39,
    "actual_max_temp": 54,
    "actual_precipitation": 0,
    "location": "KSEA"
  },
  {
    "": 2420,
    "date": "2015-2-16",
    "actual_mean_temp": 51,
    "actual_min_temp": 42,
    "actual_max_temp": 59,
    "actual_precipitation": 0,
    "location": "KSEA"
  },
  {
    "": 2421,
    "date": "2015-2-17",
    "actual_mean_temp": 51,
    "actual_min_temp": 40,
    "actual_max_temp": 61,
    "actual_precipitation": 0,
    "location": "KSEA"
  },
  {
    "": 2422,
    "date": "2015-2-18",
    "actual_mean_temp": 47,
    "actual_min_temp": 40,
    "actual_max_temp": 54,
    "actual_precipitation": 0,
    "location": "KSEA"
  },
  {
    "": 2423,
    "date": "2015-2-19",
    "actual_mean_temp": 49,
    "actual_min_temp": 47,
    "actual_max_temp": 51,
    "actual_precipitation": 0.18,
    "location": "KSEA"
  },
  {
    "": 2424,
    "date": "2015-2-20",
    "actual_mean_temp": 49,
    "actual_min_temp": 45,
    "actual_max_temp": 52,
    "actual_precipitation": 0.03,
    "location": "KSEA"
  },
  {
    "": 2425,
    "date": "2015-2-21",
    "actual_mean_temp": 48,
    "actual_min_temp": 42,
    "actual_max_temp": 54,
    "actual_precipitation": 0,
    "location": "KSEA"
  },
  {
    "": 2426,
    "date": "2015-2-22",
    "actual_mean_temp": 46,
    "actual_min_temp": 38,
    "actual_max_temp": 53,
    "actual_precipitation": 0,
    "location": "KSEA"
  },
  {
    "": 2427,
    "date": "2015-2-23",
    "actual_mean_temp": 44,
    "actual_min_temp": 33,
    "actual_max_temp": 55,
    "actual_precipitation": 0,
    "location": "KSEA"
  },
  {
    "": 2428,
    "date": "2015-2-24",
    "actual_mean_temp": 44,
    "actual_min_temp": 36,
    "actual_max_temp": 52,
    "actual_precipitation": 0,
    "location": "KSEA"
  },
  {
    "": 2429,
    "date": "2015-2-25",
    "actual_mean_temp": 47,
    "actual_min_temp": 44,
    "actual_max_temp": 50,
    "actual_precipitation": 0.16,
    "location": "KSEA"
  },
  {
    "": 2430,
    "date": "2015-2-26",
    "actual_mean_temp": 50,
    "actual_min_temp": 46,
    "actual_max_temp": 53,
    "actual_precipitation": 0.37,
    "location": "KSEA"
  },
  {
    "": 2431,
    "date": "2015-2-27",
    "actual_mean_temp": 47,
    "actual_min_temp": 44,
    "actual_max_temp": 50,
    "actual_precipitation": 0.72,
    "location": "KSEA"
  },
  {
    "": 2432,
    "date": "2015-2-28",
    "actual_mean_temp": 46,
    "actual_min_temp": 38,
    "actual_max_temp": 54,
    "actual_precipitation": 0,
    "location": "KSEA"
  },
  {
    "": 2433,
    "date": "2015-3-1",
    "actual_mean_temp": 43,
    "actual_min_temp": 34,
    "actual_max_temp": 52,
    "actual_precipitation": 0,
    "location": "KSEA"
  },
  {
    "": 2434,
    "date": "2015-3-2",
    "actual_mean_temp": 46,
    "actual_min_temp": 40,
    "actual_max_temp": 52,
    "actual_precipitation": 0,
    "location": "KSEA"
  },
  {
    "": 2435,
    "date": "2015-3-3",
    "actual_mean_temp": 42,
    "actual_min_temp": 32,
    "actual_max_temp": 51,
    "actual_precipitation": 0,
    "location": "KSEA"
  },
  {
    "": 2436,
    "date": "2015-3-4",
    "actual_mean_temp": 43,
    "actual_min_temp": 31,
    "actual_max_temp": 55,
    "actual_precipitation": 0,
    "location": "KSEA"
  },
  {
    "": 2437,
    "date": "2015-3-5",
    "actual_mean_temp": 47,
    "actual_min_temp": 37,
    "actual_max_temp": 56,
    "actual_precipitation": 0,
    "location": "KSEA"
  },
  {
    "": 2438,
    "date": "2015-3-6",
    "actual_mean_temp": 49,
    "actual_min_temp": 38,
    "actual_max_temp": 59,
    "actual_precipitation": 0,
    "location": "KSEA"
  },
  {
    "": 2439,
    "date": "2015-3-7",
    "actual_mean_temp": 51,
    "actual_min_temp": 39,
    "actual_max_temp": 62,
    "actual_precipitation": 0,
    "location": "KSEA"
  },
  {
    "": 2440,
    "date": "2015-3-8",
    "actual_mean_temp": 51,
    "actual_min_temp": 39,
    "actual_max_temp": 63,
    "actual_precipitation": 0,
    "location": "KSEA"
  },
  {
    "": 2441,
    "date": "2015-3-9",
    "actual_mean_temp": 49,
    "actual_min_temp": 40,
    "actual_max_temp": 58,
    "actual_precipitation": 0,
    "location": "KSEA"
  },
  {
    "": 2442,
    "date": "2015-3-10",
    "actual_mean_temp": 49,
    "actual_min_temp": 41,
    "actual_max_temp": 56,
    "actual_precipitation": 0.03,
    "location": "KSEA"
  },
  {
    "": 2443,
    "date": "2015-3-11",
    "actual_mean_temp": 53,
    "actual_min_temp": 48,
    "actual_max_temp": 58,
    "actual_precipitation": 0.1,
    "location": "KSEA"
  },
  {
    "": 2444,
    "date": "2015-3-12",
    "actual_mean_temp": 57,
    "actual_min_temp": 49,
    "actual_max_temp": 64,
    "actual_precipitation": 0,
    "location": "KSEA"
  },
  {
    "": 2445,
    "date": "2015-3-13",
    "actual_mean_temp": 55,
    "actual_min_temp": 46,
    "actual_max_temp": 63,
    "actual_precipitation": 0.08,
    "location": "KSEA"
  },
  {
    "": 2446,
    "date": "2015-3-14",
    "actual_mean_temp": 53,
    "actual_min_temp": 49,
    "actual_max_temp": 57,
    "actual_precipitation": 0.67,
    "location": "KSEA"
  },
  {
    "": 2447,
    "date": "2015-3-15",
    "actual_mean_temp": 47,
    "actual_min_temp": 43,
    "actual_max_temp": 51,
    "actual_precipitation": 2.2,
    "location": "KSEA"
  },
  {
    "": 2448,
    "date": "2015-3-16",
    "actual_mean_temp": 50,
    "actual_min_temp": 43,
    "actual_max_temp": 57,
    "actual_precipitation": 0.04,
    "location": "KSEA"
  },
  {
    "": 2449,
    "date": "2015-3-17",
    "actual_mean_temp": 48,
    "actual_min_temp": 40,
    "actual_max_temp": 56,
    "actual_precipitation": 0.03,
    "location": "KSEA"
  },
  {
    "": 2450,
    "date": "2015-3-18",
    "actual_mean_temp": 53,
    "actual_min_temp": 45,
    "actual_max_temp": 60,
    "actual_precipitation": 0,
    "location": "KSEA"
  },
  {
    "": 2451,
    "date": "2015-3-19",
    "actual_mean_temp": 54,
    "actual_min_temp": 47,
    "actual_max_temp": 60,
    "actual_precipitation": 0,
    "location": "KSEA"
  },
  {
    "": 2452,
    "date": "2015-3-20",
    "actual_mean_temp": 53,
    "actual_min_temp": 48,
    "actual_max_temp": 57,
    "actual_precipitation": 0.16,
    "location": "KSEA"
  },
  {
    "": 2453,
    "date": "2015-3-21",
    "actual_mean_temp": 52,
    "actual_min_temp": 47,
    "actual_max_temp": 56,
    "actual_precipitation": 0.15,
    "location": "KSEA"
  },
  {
    "": 2454,
    "date": "2015-3-22",
    "actual_mean_temp": 48,
    "actual_min_temp": 43,
    "actual_max_temp": 53,
    "actual_precipitation": 0.04,
    "location": "KSEA"
  },
  {
    "": 2455,
    "date": "2015-3-23",
    "actual_mean_temp": 47,
    "actual_min_temp": 42,
    "actual_max_temp": 52,
    "actual_precipitation": 0.32,
    "location": "KSEA"
  },
  {
    "": 2456,
    "date": "2015-3-24",
    "actual_mean_temp": 49,
    "actual_min_temp": 43,
    "actual_max_temp": 55,
    "actual_precipitation": 0.3,
    "location": "KSEA"
  },
  {
    "": 2457,
    "date": "2015-3-25",
    "actual_mean_temp": 52,
    "actual_min_temp": 45,
    "actual_max_temp": 58,
    "actual_precipitation": 0.2,
    "location": "KSEA"
  },
  {
    "": 2458,
    "date": "2015-3-26",
    "actual_mean_temp": 60,
    "actual_min_temp": 50,
    "actual_max_temp": 69,
    "actual_precipitation": 0,
    "location": "KSEA"
  },
  {
    "": 2459,
    "date": "2015-3-27",
    "actual_mean_temp": 57,
    "actual_min_temp": 48,
    "actual_max_temp": 65,
    "actual_precipitation": 0.04,
    "location": "KSEA"
  },
  {
    "": 2460,
    "date": "2015-3-28",
    "actual_mean_temp": 55,
    "actual_min_temp": 49,
    "actual_max_temp": 60,
    "actual_precipitation": 0,
    "location": "KSEA"
  },
  {
    "": 2461,
    "date": "2015-3-29",
    "actual_mean_temp": 54,
    "actual_min_temp": 48,
    "actual_max_temp": 60,
    "actual_precipitation": 0,
    "location": "KSEA"
  },
  {
    "": 2462,
    "date": "2015-3-30",
    "actual_mean_temp": 58,
    "actual_min_temp": 51,
    "actual_max_temp": 64,
    "actual_precipitation": 0.07,
    "location": "KSEA"
  },
  {
    "": 2463,
    "date": "2015-3-31",
    "actual_mean_temp": 49,
    "actual_min_temp": 43,
    "actual_max_temp": 55,
    "actual_precipitation": 0.04,
    "location": "KSEA"
  },
  {
    "": 2464,
    "date": "2015-4-1",
    "actual_mean_temp": 49,
    "actual_min_temp": 42,
    "actual_max_temp": 55,
    "actual_precipitation": 0.2,
    "location": "KSEA"
  },
  {
    "": 2465,
    "date": "2015-4-2",
    "actual_mean_temp": 49,
    "actual_min_temp": 42,
    "actual_max_temp": 56,
    "actual_precipitation": 0,
    "location": "KSEA"
  },
  {
    "": 2466,
    "date": "2015-4-3",
    "actual_mean_temp": 47,
    "actual_min_temp": 41,
    "actual_max_temp": 52,
    "actual_precipitation": 0.06,
    "location": "KSEA"
  },
  {
    "": 2467,
    "date": "2015-4-4",
    "actual_mean_temp": 47,
    "actual_min_temp": 39,
    "actual_max_temp": 55,
    "actual_precipitation": 0,
    "location": "KSEA"
  },
  {
    "": 2468,
    "date": "2015-4-5",
    "actual_mean_temp": 50,
    "actual_min_temp": 37,
    "actual_max_temp": 62,
    "actual_precipitation": 0,
    "location": "KSEA"
  },
  {
    "": 2469,
    "date": "2015-4-6",
    "actual_mean_temp": 51,
    "actual_min_temp": 44,
    "actual_max_temp": 57,
    "actual_precipitation": 0.04,
    "location": "KSEA"
  },
  {
    "": 2470,
    "date": "2015-4-7",
    "actual_mean_temp": 51,
    "actual_min_temp": 44,
    "actual_max_temp": 58,
    "actual_precipitation": 0.02,
    "location": "KSEA"
  },
  {
    "": 2471,
    "date": "2015-4-8",
    "actual_mean_temp": 53,
    "actual_min_temp": 43,
    "actual_max_temp": 63,
    "actual_precipitation": 0,
    "location": "KSEA"
  },
  {
    "": 2472,
    "date": "2015-4-9",
    "actual_mean_temp": 53,
    "actual_min_temp": 43,
    "actual_max_temp": 63,
    "actual_precipitation": 0,
    "location": "KSEA"
  },
  {
    "": 2473,
    "date": "2015-4-10",
    "actual_mean_temp": 52,
    "actual_min_temp": 46,
    "actual_max_temp": 57,
    "actual_precipitation": 0.43,
    "location": "KSEA"
  },
  {
    "": 2474,
    "date": "2015-4-11",
    "actual_mean_temp": 48,
    "actual_min_temp": 42,
    "actual_max_temp": 53,
    "actual_precipitation": 0,
    "location": "KSEA"
  },
  {
    "": 2475,
    "date": "2015-4-12",
    "actual_mean_temp": 49,
    "actual_min_temp": 42,
    "actual_max_temp": 56,
    "actual_precipitation": 0,
    "location": "KSEA"
  },
  {
    "": 2476,
    "date": "2015-4-13",
    "actual_mean_temp": 46,
    "actual_min_temp": 39,
    "actual_max_temp": 53,
    "actual_precipitation": 0.55,
    "location": "KSEA"
  },
  {
    "": 2477,
    "date": "2015-4-14",
    "actual_mean_temp": 45,
    "actual_min_temp": 37,
    "actual_max_temp": 53,
    "actual_precipitation": 0.13,
    "location": "KSEA"
  },
  {
    "": 2478,
    "date": "2015-4-15",
    "actual_mean_temp": 48,
    "actual_min_temp": 38,
    "actual_max_temp": 57,
    "actual_precipitation": 0,
    "location": "KSEA"
  },
  {
    "": 2479,
    "date": "2015-4-16",
    "actual_mean_temp": 52,
    "actual_min_temp": 39,
    "actual_max_temp": 64,
    "actual_precipitation": 0,
    "location": "KSEA"
  },
  {
    "": 2480,
    "date": "2015-4-17",
    "actual_mean_temp": 55,
    "actual_min_temp": 43,
    "actual_max_temp": 66,
    "actual_precipitation": 0,
    "location": "KSEA"
  },
  {
    "": 2481,
    "date": "2015-4-18",
    "actual_mean_temp": 57,
    "actual_min_temp": 47,
    "actual_max_temp": 66,
    "actual_precipitation": 0,
    "location": "KSEA"
  },
  {
    "": 2482,
    "date": "2015-4-19",
    "actual_mean_temp": 59,
    "actual_min_temp": 47,
    "actual_max_temp": 70,
    "actual_precipitation": 0,
    "location": "KSEA"
  },
  {
    "": 2483,
    "date": "2015-4-20",
    "actual_mean_temp": 60,
    "actual_min_temp": 46,
    "actual_max_temp": 73,
    "actual_precipitation": 0,
    "location": "KSEA"
  },
  {
    "": 2484,
    "date": "2015-4-21",
    "actual_mean_temp": 54,
    "actual_min_temp": 44,
    "actual_max_temp": 63,
    "actual_precipitation": 0.22,
    "location": "KSEA"
  },
  {
    "": 2485,
    "date": "2015-4-22",
    "actual_mean_temp": 51,
    "actual_min_temp": 41,
    "actual_max_temp": 60,
    "actual_precipitation": 0,
    "location": "KSEA"
  },
  {
    "": 2486,
    "date": "2015-4-23",
    "actual_mean_temp": 49,
    "actual_min_temp": 44,
    "actual_max_temp": 54,
    "actual_precipitation": 0.12,
    "location": "KSEA"
  },
  {
    "": 2487,
    "date": "2015-4-24",
    "actual_mean_temp": 49,
    "actual_min_temp": 43,
    "actual_max_temp": 54,
    "actual_precipitation": 0.13,
    "location": "KSEA"
  },
  {
    "": 2488,
    "date": "2015-4-25",
    "actual_mean_temp": 49,
    "actual_min_temp": 42,
    "actual_max_temp": 56,
    "actual_precipitation": 0.05,
    "location": "KSEA"
  },
  {
    "": 2489,
    "date": "2015-4-26",
    "actual_mean_temp": 50,
    "actual_min_temp": 40,
    "actual_max_temp": 60,
    "actual_precipitation": 0,
    "location": "KSEA"
  },
  {
    "": 2490,
    "date": "2015-4-27",
    "actual_mean_temp": 64,
    "actual_min_temp": 51,
    "actual_max_temp": 77,
    "actual_precipitation": 0.01,
    "location": "KSEA"
  },
  {
    "": 2491,
    "date": "2015-4-28",
    "actual_mean_temp": 54,
    "actual_min_temp": 48,
    "actual_max_temp": 60,
    "actual_precipitation": 0.07,
    "location": "KSEA"
  },
  {
    "": 2492,
    "date": "2015-4-29",
    "actual_mean_temp": 53,
    "actual_min_temp": 45,
    "actual_max_temp": 61,
    "actual_precipitation": 0,
    "location": "KSEA"
  },
  {
    "": 2493,
    "date": "2015-4-30",
    "actual_mean_temp": 55,
    "actual_min_temp": 46,
    "actual_max_temp": 63,
    "actual_precipitation": 0,
    "location": "KSEA"
  },
  {
    "": 2494,
    "date": "2015-5-1",
    "actual_mean_temp": 57,
    "actual_min_temp": 48,
    "actual_max_temp": 65,
    "actual_precipitation": 0,
    "location": "KSEA"
  },
  {
    "": 2495,
    "date": "2015-5-2",
    "actual_mean_temp": 56,
    "actual_min_temp": 46,
    "actual_max_temp": 65,
    "actual_precipitation": 0,
    "location": "KSEA"
  },
  {
    "": 2496,
    "date": "2015-5-3",
    "actual_mean_temp": 58,
    "actual_min_temp": 46,
    "actual_max_temp": 69,
    "actual_precipitation": 0,
    "location": "KSEA"
  },
  {
    "": 2497,
    "date": "2015-5-4",
    "actual_mean_temp": 54,
    "actual_min_temp": 45,
    "actual_max_temp": 63,
    "actual_precipitation": 0,
    "location": "KSEA"
  },
  {
    "": 2498,
    "date": "2015-5-5",
    "actual_mean_temp": 52,
    "actual_min_temp": 45,
    "actual_max_temp": 58,
    "actual_precipitation": 0.24,
    "location": "KSEA"
  },
  {
    "": 2499,
    "date": "2015-5-6",
    "actual_mean_temp": 54,
    "actual_min_temp": 45,
    "actual_max_temp": 62,
    "actual_precipitation": 0,
    "location": "KSEA"
  },
  {
    "": 2500,
    "date": "2015-5-7",
    "actual_mean_temp": 56,
    "actual_min_temp": 43,
    "actual_max_temp": 69,
    "actual_precipitation": 0,
    "location": "KSEA"
  },
  {
    "": 2501,
    "date": "2015-5-8",
    "actual_mean_temp": 61,
    "actual_min_temp": 47,
    "actual_max_temp": 75,
    "actual_precipitation": 0,
    "location": "KSEA"
  },
  {
    "": 2502,
    "date": "2015-5-9",
    "actual_mean_temp": 65,
    "actual_min_temp": 49,
    "actual_max_temp": 80,
    "actual_precipitation": 0,
    "location": "KSEA"
  },
  {
    "": 2503,
    "date": "2015-5-10",
    "actual_mean_temp": 60,
    "actual_min_temp": 52,
    "actual_max_temp": 67,
    "actual_precipitation": 0,
    "location": "KSEA"
  },
  {
    "": 2504,
    "date": "2015-5-11",
    "actual_mean_temp": 54,
    "actual_min_temp": 50,
    "actual_max_temp": 57,
    "actual_precipitation": 0,
    "location": "KSEA"
  },
  {
    "": 2505,
    "date": "2015-5-12",
    "actual_mean_temp": 56,
    "actual_min_temp": 51,
    "actual_max_temp": 60,
    "actual_precipitation": 0.17,
    "location": "KSEA"
  },
  {
    "": 2506,
    "date": "2015-5-13",
    "actual_mean_temp": 52,
    "actual_min_temp": 50,
    "actual_max_temp": 54,
    "actual_precipitation": 0.16,
    "location": "KSEA"
  },
  {
    "": 2507,
    "date": "2015-5-14",
    "actual_mean_temp": 57,
    "actual_min_temp": 49,
    "actual_max_temp": 64,
    "actual_precipitation": 0.01,
    "location": "KSEA"
  },
  {
    "": 2508,
    "date": "2015-5-15",
    "actual_mean_temp": 59,
    "actual_min_temp": 49,
    "actual_max_temp": 68,
    "actual_precipitation": 0,
    "location": "KSEA"
  },
  {
    "": 2509,
    "date": "2015-5-16",
    "actual_mean_temp": 56,
    "actual_min_temp": 52,
    "actual_max_temp": 60,
    "actual_precipitation": 0,
    "location": "KSEA"
  },
  {
    "": 2510,
    "date": "2015-5-17",
    "actual_mean_temp": 59,
    "actual_min_temp": 51,
    "actual_max_temp": 67,
    "actual_precipitation": 0,
    "location": "KSEA"
  },
  {
    "": 2511,
    "date": "2015-5-18",
    "actual_mean_temp": 66,
    "actual_min_temp": 54,
    "actual_max_temp": 78,
    "actual_precipitation": 0,
    "location": "KSEA"
  },
  {
    "": 2512,
    "date": "2015-5-19",
    "actual_mean_temp": 62,
    "actual_min_temp": 53,
    "actual_max_temp": 71,
    "actual_precipitation": 0,
    "location": "KSEA"
  },
  {
    "": 2513,
    "date": "2015-5-20",
    "actual_mean_temp": 63,
    "actual_min_temp": 51,
    "actual_max_temp": 74,
    "actual_precipitation": 0,
    "location": "KSEA"
  },
  {
    "": 2514,
    "date": "2015-5-21",
    "actual_mean_temp": 66,
    "actual_min_temp": 53,
    "actual_max_temp": 78,
    "actual_precipitation": 0,
    "location": "KSEA"
  },
  {
    "": 2515,
    "date": "2015-5-22",
    "actual_mean_temp": 58,
    "actual_min_temp": 53,
    "actual_max_temp": 62,
    "actual_precipitation": 0,
    "location": "KSEA"
  },
  {
    "": 2516,
    "date": "2015-5-23",
    "actual_mean_temp": 57,
    "actual_min_temp": 53,
    "actual_max_temp": 61,
    "actual_precipitation": 0,
    "location": "KSEA"
  },
  {
    "": 2517,
    "date": "2015-5-24",
    "actual_mean_temp": 58,
    "actual_min_temp": 52,
    "actual_max_temp": 64,
    "actual_precipitation": 0,
    "location": "KSEA"
  },
  {
    "": 2518,
    "date": "2015-5-25",
    "actual_mean_temp": 56,
    "actual_min_temp": 52,
    "actual_max_temp": 60,
    "actual_precipitation": 0,
    "location": "KSEA"
  },
  {
    "": 2519,
    "date": "2015-5-26",
    "actual_mean_temp": 62,
    "actual_min_temp": 53,
    "actual_max_temp": 71,
    "actual_precipitation": 0,
    "location": "KSEA"
  },
  {
    "": 2520,
    "date": "2015-5-27",
    "actual_mean_temp": 65,
    "actual_min_temp": 53,
    "actual_max_temp": 76,
    "actual_precipitation": 0,
    "location": "KSEA"
  },
  {
    "": 2521,
    "date": "2015-5-28",
    "actual_mean_temp": 68,
    "actual_min_temp": 54,
    "actual_max_temp": 82,
    "actual_precipitation": 0,
    "location": "KSEA"
  },
  {
    "": 2522,
    "date": "2015-5-29",
    "actual_mean_temp": 67,
    "actual_min_temp": 55,
    "actual_max_temp": 79,
    "actual_precipitation": 0,
    "location": "KSEA"
  },
  {
    "": 2523,
    "date": "2015-5-30",
    "actual_mean_temp": 62,
    "actual_min_temp": 50,
    "actual_max_temp": 73,
    "actual_precipitation": 0,
    "location": "KSEA"
  },
  {
    "": 2524,
    "date": "2015-5-31",
    "actual_mean_temp": 65,
    "actual_min_temp": 53,
    "actual_max_temp": 77,
    "actual_precipitation": 0,
    "location": "KSEA"
  },
  {
    "": 2525,
    "date": "2015-6-1",
    "actual_mean_temp": 57,
    "actual_min_temp": 53,
    "actual_max_temp": 61,
    "actual_precipitation": 0.18,
    "location": "KSEA"
  },
  {
    "": 2526,
    "date": "2015-6-2",
    "actual_mean_temp": 60,
    "actual_min_temp": 55,
    "actual_max_temp": 64,
    "actual_precipitation": 0.02,
    "location": "KSEA"
  },
  {
    "": 2527,
    "date": "2015-6-3",
    "actual_mean_temp": 61,
    "actual_min_temp": 53,
    "actual_max_temp": 68,
    "actual_precipitation": 0,
    "location": "KSEA"
  },
  {
    "": 2528,
    "date": "2015-6-4",
    "actual_mean_temp": 63,
    "actual_min_temp": 53,
    "actual_max_temp": 73,
    "actual_precipitation": 0,
    "location": "KSEA"
  },
  {
    "": 2529,
    "date": "2015-6-5",
    "actual_mean_temp": 68,
    "actual_min_temp": 55,
    "actual_max_temp": 80,
    "actual_precipitation": 0,
    "location": "KSEA"
  },
  {
    "": 2530,
    "date": "2015-6-6",
    "actual_mean_temp": 71,
    "actual_min_temp": 56,
    "actual_max_temp": 85,
    "actual_precipitation": 0,
    "location": "KSEA"
  },
  {
    "": 2531,
    "date": "2015-6-7",
    "actual_mean_temp": 74,
    "actual_min_temp": 60,
    "actual_max_temp": 88,
    "actual_precipitation": 0,
    "location": "KSEA"
  },
  {
    "": 2532,
    "date": "2015-6-8",
    "actual_mean_temp": 73,
    "actual_min_temp": 58,
    "actual_max_temp": 87,
    "actual_precipitation": 0,
    "location": "KSEA"
  },
  {
    "": 2533,
    "date": "2015-6-9",
    "actual_mean_temp": 71,
    "actual_min_temp": 58,
    "actual_max_temp": 84,
    "actual_precipitation": 0,
    "location": "KSEA"
  },
  {
    "": 2534,
    "date": "2015-6-10",
    "actual_mean_temp": 65,
    "actual_min_temp": 52,
    "actual_max_temp": 78,
    "actual_precipitation": 0,
    "location": "KSEA"
  },
  {
    "": 2535,
    "date": "2015-6-11",
    "actual_mean_temp": 64,
    "actual_min_temp": 52,
    "actual_max_temp": 76,
    "actual_precipitation": 0,
    "location": "KSEA"
  },
  {
    "": 2536,
    "date": "2015-6-12",
    "actual_mean_temp": 61,
    "actual_min_temp": 53,
    "actual_max_temp": 68,
    "actual_precipitation": 0,
    "location": "KSEA"
  },
  {
    "": 2537,
    "date": "2015-6-13",
    "actual_mean_temp": 62,
    "actual_min_temp": 49,
    "actual_max_temp": 75,
    "actual_precipitation": 0,
    "location": "KSEA"
  },
  {
    "": 2538,
    "date": "2015-6-14",
    "actual_mean_temp": 68,
    "actual_min_temp": 53,
    "actual_max_temp": 82,
    "actual_precipitation": 0,
    "location": "KSEA"
  },
  {
    "": 2539,
    "date": "2015-6-15",
    "actual_mean_temp": 74,
    "actual_min_temp": 61,
    "actual_max_temp": 86,
    "actual_precipitation": 0,
    "location": "KSEA"
  },
  {
    "": 2540,
    "date": "2015-6-16",
    "actual_mean_temp": 63,
    "actual_min_temp": 52,
    "actual_max_temp": 73,
    "actual_precipitation": 0,
    "location": "KSEA"
  },
  {
    "": 2541,
    "date": "2015-6-17",
    "actual_mean_temp": 65,
    "actual_min_temp": 52,
    "actual_max_temp": 77,
    "actual_precipitation": 0,
    "location": "KSEA"
  },
  {
    "": 2542,
    "date": "2015-6-18",
    "actual_mean_temp": 67,
    "actual_min_temp": 57,
    "actual_max_temp": 76,
    "actual_precipitation": 0,
    "location": "KSEA"
  },
  {
    "": 2543,
    "date": "2015-6-19",
    "actual_mean_temp": 66,
    "actual_min_temp": 56,
    "actual_max_temp": 75,
    "actual_precipitation": 0.02,
    "location": "KSEA"
  },
  {
    "": 2544,
    "date": "2015-6-20",
    "actual_mean_temp": 66,
    "actual_min_temp": 55,
    "actual_max_temp": 77,
    "actual_precipitation": 0,
    "location": "KSEA"
  },
  {
    "": 2545,
    "date": "2015-6-21",
    "actual_mean_temp": 68,
    "actual_min_temp": 57,
    "actual_max_temp": 78,
    "actual_precipitation": 0,
    "location": "KSEA"
  },
  {
    "": 2546,
    "date": "2015-6-22",
    "actual_mean_temp": 66,
    "actual_min_temp": 55,
    "actual_max_temp": 77,
    "actual_precipitation": 0,
    "location": "KSEA"
  },
  {
    "": 2547,
    "date": "2015-6-23",
    "actual_mean_temp": 66,
    "actual_min_temp": 53,
    "actual_max_temp": 79,
    "actual_precipitation": 0,
    "location": "KSEA"
  },
  {
    "": 2548,
    "date": "2015-6-24",
    "actual_mean_temp": 70,
    "actual_min_temp": 61,
    "actual_max_temp": 78,
    "actual_precipitation": 0,
    "location": "KSEA"
  },
  {
    "": 2549,
    "date": "2015-6-25",
    "actual_mean_temp": 74,
    "actual_min_temp": 60,
    "actual_max_temp": 87,
    "actual_precipitation": 0,
    "location": "KSEA"
  },
  {
    "": 2550,
    "date": "2015-6-26",
    "actual_mean_temp": 77,
    "actual_min_temp": 64,
    "actual_max_temp": 89,
    "actual_precipitation": 0,
    "location": "KSEA"
  },
  {
    "": 2551,
    "date": "2015-6-27",
    "actual_mean_temp": 78,
    "actual_min_temp": 63,
    "actual_max_temp": 92,
    "actual_precipitation": 0,
    "location": "KSEA"
  },
  {
    "": 2552,
    "date": "2015-6-28",
    "actual_mean_temp": 74,
    "actual_min_temp": 65,
    "actual_max_temp": 83,
    "actual_precipitation": 0.01,
    "location": "KSEA"
  },
  {
    "": 2553,
    "date": "2015-6-29",
    "actual_mean_temp": 74,
    "actual_min_temp": 63,
    "actual_max_temp": 84,
    "actual_precipitation": 0,
    "location": "KSEA"
  },
  {
    "": 2554,
    "date": "2015-6-30",
    "actual_mean_temp": 73,
    "actual_min_temp": 59,
    "actual_max_temp": 87,
    "actual_precipitation": 0,
    "location": "KSEA"
  },
  {
    "": 2555,
    "date": "2014-7-1",
    "actual_mean_temp": 76,
    "actual_min_temp": 68,
    "actual_max_temp": 84,
    "actual_precipitation": 0.04,
    "location": "MDW"
  },
  {
    "": 2556,
    "date": "2014-7-2",
    "actual_mean_temp": 66,
    "actual_min_temp": 58,
    "actual_max_temp": 74,
    "actual_precipitation": 0.12,
    "location": "MDW"
  },
  {
    "": 2557,
    "date": "2014-7-3",
    "actual_mean_temp": 66,
    "actual_min_temp": 57,
    "actual_max_temp": 75,
    "actual_precipitation": 0.05,
    "location": "MDW"
  },
  {
    "": 2558,
    "date": "2014-7-4",
    "actual_mean_temp": 70,
    "actual_min_temp": 60,
    "actual_max_temp": 79,
    "actual_precipitation": 0,
    "location": "MDW"
  },
  {
    "": 2559,
    "date": "2014-7-5",
    "actual_mean_temp": 71,
    "actual_min_temp": 63,
    "actual_max_temp": 79,
    "actual_precipitation": 0.01,
    "location": "MDW"
  },
  {
    "": 2560,
    "date": "2014-7-6",
    "actual_mean_temp": 78,
    "actual_min_temp": 66,
    "actual_max_temp": 89,
    "actual_precipitation": 0,
    "location": "MDW"
  },
  {
    "": 2561,
    "date": "2014-7-7",
    "actual_mean_temp": 81,
    "actual_min_temp": 72,
    "actual_max_temp": 89,
    "actual_precipitation": 0.48,
    "location": "MDW"
  },
  {
    "": 2562,
    "date": "2014-7-8",
    "actual_mean_temp": 77,
    "actual_min_temp": 70,
    "actual_max_temp": 84,
    "actual_precipitation": 0.48,
    "location": "MDW"
  },
  {
    "": 2563,
    "date": "2014-7-9",
    "actual_mean_temp": 73,
    "actual_min_temp": 64,
    "actual_max_temp": 81,
    "actual_precipitation": 0,
    "location": "MDW"
  },
  {
    "": 2564,
    "date": "2014-7-10",
    "actual_mean_temp": 71,
    "actual_min_temp": 63,
    "actual_max_temp": 78,
    "actual_precipitation": 0,
    "location": "MDW"
  },
  {
    "": 2565,
    "date": "2014-7-11",
    "actual_mean_temp": 73,
    "actual_min_temp": 63,
    "actual_max_temp": 83,
    "actual_precipitation": 0,
    "location": "MDW"
  },
  {
    "": 2566,
    "date": "2014-7-12",
    "actual_mean_temp": 76,
    "actual_min_temp": 70,
    "actual_max_temp": 81,
    "actual_precipitation": 3.31,
    "location": "MDW"
  },
  {
    "": 2567,
    "date": "2014-7-13",
    "actual_mean_temp": 79,
    "actual_min_temp": 71,
    "actual_max_temp": 86,
    "actual_precipitation": 0.04,
    "location": "MDW"
  },
  {
    "": 2568,
    "date": "2014-7-14",
    "actual_mean_temp": 73,
    "actual_min_temp": 64,
    "actual_max_temp": 81,
    "actual_precipitation": 0.37,
    "location": "MDW"
  },
  {
    "": 2569,
    "date": "2014-7-15",
    "actual_mean_temp": 64,
    "actual_min_temp": 57,
    "actual_max_temp": 71,
    "actual_precipitation": 0.05,
    "location": "MDW"
  },
  {
    "": 2570,
    "date": "2014-7-16",
    "actual_mean_temp": 65,
    "actual_min_temp": 56,
    "actual_max_temp": 73,
    "actual_precipitation": 0,
    "location": "MDW"
  },
  {
    "": 2571,
    "date": "2014-7-17",
    "actual_mean_temp": 68,
    "actual_min_temp": 58,
    "actual_max_temp": 78,
    "actual_precipitation": 0,
    "location": "MDW"
  },
  {
    "": 2572,
    "date": "2014-7-18",
    "actual_mean_temp": 73,
    "actual_min_temp": 64,
    "actual_max_temp": 81,
    "actual_precipitation": 0,
    "location": "MDW"
  },
  {
    "": 2573,
    "date": "2014-7-19",
    "actual_mean_temp": 71,
    "actual_min_temp": 62,
    "actual_max_temp": 80,
    "actual_precipitation": 0,
    "location": "MDW"
  },
  {
    "": 2574,
    "date": "2014-7-20",
    "actual_mean_temp": 75,
    "actual_min_temp": 66,
    "actual_max_temp": 84,
    "actual_precipitation": 0,
    "location": "MDW"
  },
  {
    "": 2575,
    "date": "2014-7-21",
    "actual_mean_temp": 78,
    "actual_min_temp": 68,
    "actual_max_temp": 87,
    "actual_precipitation": 0,
    "location": "MDW"
  },
  {
    "": 2576,
    "date": "2014-7-22",
    "actual_mean_temp": 82,
    "actual_min_temp": 72,
    "actual_max_temp": 91,
    "actual_precipitation": 0.19,
    "location": "MDW"
  },
  {
    "": 2577,
    "date": "2014-7-23",
    "actual_mean_temp": 70,
    "actual_min_temp": 64,
    "actual_max_temp": 76,
    "actual_precipitation": 0,
    "location": "MDW"
  },
  {
    "": 2578,
    "date": "2014-7-24",
    "actual_mean_temp": 68,
    "actual_min_temp": 60,
    "actual_max_temp": 75,
    "actual_precipitation": 0,
    "location": "MDW"
  },
  {
    "": 2579,
    "date": "2014-7-25",
    "actual_mean_temp": 69,
    "actual_min_temp": 60,
    "actual_max_temp": 77,
    "actual_precipitation": 0,
    "location": "MDW"
  },
  {
    "": 2580,
    "date": "2014-7-26",
    "actual_mean_temp": 78,
    "actual_min_temp": 70,
    "actual_max_temp": 85,
    "actual_precipitation": 0,
    "location": "MDW"
  },
  {
    "": 2581,
    "date": "2014-7-27",
    "actual_mean_temp": 78,
    "actual_min_temp": 66,
    "actual_max_temp": 89,
    "actual_precipitation": 0.04,
    "location": "MDW"
  },
  {
    "": 2582,
    "date": "2014-7-28",
    "actual_mean_temp": 68,
    "actual_min_temp": 62,
    "actual_max_temp": 73,
    "actual_precipitation": 0,
    "location": "MDW"
  },
  {
    "": 2583,
    "date": "2014-7-29",
    "actual_mean_temp": 71,
    "actual_min_temp": 60,
    "actual_max_temp": 81,
    "actual_precipitation": 0,
    "location": "MDW"
  },
  {
    "": 2584,
    "date": "2014-7-30",
    "actual_mean_temp": 71,
    "actual_min_temp": 61,
    "actual_max_temp": 80,
    "actual_precipitation": 0,
    "location": "MDW"
  },
  {
    "": 2585,
    "date": "2014-7-31",
    "actual_mean_temp": 74,
    "actual_min_temp": 63,
    "actual_max_temp": 85,
    "actual_precipitation": 0,
    "location": "MDW"
  },
  {
    "": 2586,
    "date": "2014-8-1",
    "actual_mean_temp": 75,
    "actual_min_temp": 67,
    "actual_max_temp": 83,
    "actual_precipitation": 0.21,
    "location": "MDW"
  },
  {
    "": 2587,
    "date": "2014-8-2",
    "actual_mean_temp": 74,
    "actual_min_temp": 63,
    "actual_max_temp": 84,
    "actual_precipitation": 0,
    "location": "MDW"
  },
  {
    "": 2588,
    "date": "2014-8-3",
    "actual_mean_temp": 77,
    "actual_min_temp": 66,
    "actual_max_temp": 87,
    "actual_precipitation": 0,
    "location": "MDW"
  },
  {
    "": 2589,
    "date": "2014-8-4",
    "actual_mean_temp": 78,
    "actual_min_temp": 68,
    "actual_max_temp": 88,
    "actual_precipitation": 1.79,
    "location": "MDW"
  },
  {
    "": 2590,
    "date": "2014-8-5",
    "actual_mean_temp": 74,
    "actual_min_temp": 68,
    "actual_max_temp": 80,
    "actual_precipitation": 0.07,
    "location": "MDW"
  },
  {
    "": 2591,
    "date": "2014-8-6",
    "actual_mean_temp": 73,
    "actual_min_temp": 65,
    "actual_max_temp": 81,
    "actual_precipitation": 0,
    "location": "MDW"
  },
  {
    "": 2592,
    "date": "2014-8-7",
    "actual_mean_temp": 75,
    "actual_min_temp": 69,
    "actual_max_temp": 81,
    "actual_precipitation": 0,
    "location": "MDW"
  },
  {
    "": 2593,
    "date": "2014-8-8",
    "actual_mean_temp": 76,
    "actual_min_temp": 70,
    "actual_max_temp": 82,
    "actual_precipitation": 0,
    "location": "MDW"
  },
  {
    "": 2594,
    "date": "2014-8-9",
    "actual_mean_temp": 74,
    "actual_min_temp": 68,
    "actual_max_temp": 80,
    "actual_precipitation": 0,
    "location": "MDW"
  },
  {
    "": 2595,
    "date": "2014-8-10",
    "actual_mean_temp": 77,
    "actual_min_temp": 71,
    "actual_max_temp": 82,
    "actual_precipitation": 0,
    "location": "MDW"
  },
  {
    "": 2596,
    "date": "2014-8-11",
    "actual_mean_temp": 76,
    "actual_min_temp": 68,
    "actual_max_temp": 84,
    "actual_precipitation": 1.16,
    "location": "MDW"
  },
  {
    "": 2597,
    "date": "2014-8-12",
    "actual_mean_temp": 67,
    "actual_min_temp": 63,
    "actual_max_temp": 70,
    "actual_precipitation": 0.16,
    "location": "MDW"
  },
  {
    "": 2598,
    "date": "2014-8-13",
    "actual_mean_temp": 71,
    "actual_min_temp": 59,
    "actual_max_temp": 83,
    "actual_precipitation": 0,
    "location": "MDW"
  },
  {
    "": 2599,
    "date": "2014-8-14",
    "actual_mean_temp": 67,
    "actual_min_temp": 61,
    "actual_max_temp": 73,
    "actual_precipitation": 0,
    "location": "MDW"
  },
  {
    "": 2600,
    "date": "2014-8-15",
    "actual_mean_temp": 67,
    "actual_min_temp": 55,
    "actual_max_temp": 79,
    "actual_precipitation": 0,
    "location": "MDW"
  },
  {
    "": 2601,
    "date": "2014-8-16",
    "actual_mean_temp": 73,
    "actual_min_temp": 64,
    "actual_max_temp": 81,
    "actual_precipitation": 0,
    "location": "MDW"
  },
  {
    "": 2602,
    "date": "2014-8-17",
    "actual_mean_temp": 69,
    "actual_min_temp": 66,
    "actual_max_temp": 72,
    "actual_precipitation": 0,
    "location": "MDW"
  },
  {
    "": 2603,
    "date": "2014-8-18",
    "actual_mean_temp": 76,
    "actual_min_temp": 67,
    "actual_max_temp": 85,
    "actual_precipitation": 0,
    "location": "MDW"
  },
  {
    "": 2604,
    "date": "2014-8-19",
    "actual_mean_temp": 80,
    "actual_min_temp": 73,
    "actual_max_temp": 86,
    "actual_precipitation": 0.13,
    "location": "MDW"
  },
  {
    "": 2605,
    "date": "2014-8-20",
    "actual_mean_temp": 78,
    "actual_min_temp": 68,
    "actual_max_temp": 87,
    "actual_precipitation": 0,
    "location": "MDW"
  },
  {
    "": 2606,
    "date": "2014-8-21",
    "actual_mean_temp": 77,
    "actual_min_temp": 71,
    "actual_max_temp": 83,
    "actual_precipitation": 1.29,
    "location": "MDW"
  },
  {
    "": 2607,
    "date": "2014-8-22",
    "actual_mean_temp": 81,
    "actual_min_temp": 74,
    "actual_max_temp": 87,
    "actual_precipitation": 3.17,
    "location": "MDW"
  },
  {
    "": 2608,
    "date": "2014-8-23",
    "actual_mean_temp": 79,
    "actual_min_temp": 71,
    "actual_max_temp": 87,
    "actual_precipitation": 0.5,
    "location": "MDW"
  },
  {
    "": 2609,
    "date": "2014-8-24",
    "actual_mean_temp": 81,
    "actual_min_temp": 73,
    "actual_max_temp": 89,
    "actual_precipitation": 0,
    "location": "MDW"
  },
  {
    "": 2610,
    "date": "2014-8-25",
    "actual_mean_temp": 83,
    "actual_min_temp": 73,
    "actual_max_temp": 92,
    "actual_precipitation": 0.78,
    "location": "MDW"
  },
  {
    "": 2611,
    "date": "2014-8-26",
    "actual_mean_temp": 79,
    "actual_min_temp": 72,
    "actual_max_temp": 86,
    "actual_precipitation": 0,
    "location": "MDW"
  },
  {
    "": 2612,
    "date": "2014-8-27",
    "actual_mean_temp": 76,
    "actual_min_temp": 70,
    "actual_max_temp": 81,
    "actual_precipitation": 0,
    "location": "MDW"
  },
  {
    "": 2613,
    "date": "2014-8-28",
    "actual_mean_temp": 73,
    "actual_min_temp": 69,
    "actual_max_temp": 77,
    "actual_precipitation": 0.02,
    "location": "MDW"
  },
  {
    "": 2614,
    "date": "2014-8-29",
    "actual_mean_temp": 81,
    "actual_min_temp": 73,
    "actual_max_temp": 88,
    "actual_precipitation": 0,
    "location": "MDW"
  },
  {
    "": 2615,
    "date": "2014-8-30",
    "actual_mean_temp": 80,
    "actual_min_temp": 74,
    "actual_max_temp": 86,
    "actual_precipitation": 0,
    "location": "MDW"
  },
  {
    "": 2616,
    "date": "2014-8-31",
    "actual_mean_temp": 79,
    "actual_min_temp": 71,
    "actual_max_temp": 87,
    "actual_precipitation": 0,
    "location": "MDW"
  },
  {
    "": 2617,
    "date": "2014-9-1",
    "actual_mean_temp": 80,
    "actual_min_temp": 74,
    "actual_max_temp": 85,
    "actual_precipitation": 0,
    "location": "MDW"
  },
  {
    "": 2618,
    "date": "2014-9-2",
    "actual_mean_temp": 77,
    "actual_min_temp": 69,
    "actual_max_temp": 85,
    "actual_precipitation": 0,
    "location": "MDW"
  },
  {
    "": 2619,
    "date": "2014-9-3",
    "actual_mean_temp": 76,
    "actual_min_temp": 67,
    "actual_max_temp": 85,
    "actual_precipitation": 0,
    "location": "MDW"
  },
  {
    "": 2620,
    "date": "2014-9-4",
    "actual_mean_temp": 80,
    "actual_min_temp": 73,
    "actual_max_temp": 87,
    "actual_precipitation": 0.22,
    "location": "MDW"
  },
  {
    "": 2621,
    "date": "2014-9-5",
    "actual_mean_temp": 78,
    "actual_min_temp": 67,
    "actual_max_temp": 89,
    "actual_precipitation": 0.43,
    "location": "MDW"
  },
  {
    "": 2622,
    "date": "2014-9-6",
    "actual_mean_temp": 69,
    "actual_min_temp": 62,
    "actual_max_temp": 76,
    "actual_precipitation": 0,
    "location": "MDW"
  },
  {
    "": 2623,
    "date": "2014-9-7",
    "actual_mean_temp": 69,
    "actual_min_temp": 58,
    "actual_max_temp": 79,
    "actual_precipitation": 0,
    "location": "MDW"
  },
  {
    "": 2624,
    "date": "2014-9-8",
    "actual_mean_temp": 70,
    "actual_min_temp": 60,
    "actual_max_temp": 79,
    "actual_precipitation": 0,
    "location": "MDW"
  },
  {
    "": 2625,
    "date": "2014-9-9",
    "actual_mean_temp": 74,
    "actual_min_temp": 66,
    "actual_max_temp": 81,
    "actual_precipitation": 0.01,
    "location": "MDW"
  },
  {
    "": 2626,
    "date": "2014-9-10",
    "actual_mean_temp": 70,
    "actual_min_temp": 58,
    "actual_max_temp": 82,
    "actual_precipitation": 1.61,
    "location": "MDW"
  },
  {
    "": 2627,
    "date": "2014-9-11",
    "actual_mean_temp": 55,
    "actual_min_temp": 52,
    "actual_max_temp": 58,
    "actual_precipitation": 0,
    "location": "MDW"
  },
  {
    "": 2628,
    "date": "2014-9-12",
    "actual_mean_temp": 52,
    "actual_min_temp": 46,
    "actual_max_temp": 57,
    "actual_precipitation": 0.1,
    "location": "MDW"
  },
  {
    "": 2629,
    "date": "2014-9-13",
    "actual_mean_temp": 51,
    "actual_min_temp": 42,
    "actual_max_temp": 60,
    "actual_precipitation": 0.01,
    "location": "MDW"
  },
  {
    "": 2630,
    "date": "2014-9-14",
    "actual_mean_temp": 57,
    "actual_min_temp": 46,
    "actual_max_temp": 67,
    "actual_precipitation": 0,
    "location": "MDW"
  },
  {
    "": 2631,
    "date": "2014-9-15",
    "actual_mean_temp": 58,
    "actual_min_temp": 54,
    "actual_max_temp": 62,
    "actual_precipitation": 0,
    "location": "MDW"
  },
  {
    "": 2632,
    "date": "2014-9-16",
    "actual_mean_temp": 58,
    "actual_min_temp": 47,
    "actual_max_temp": 69,
    "actual_precipitation": 0,
    "location": "MDW"
  },
  {
    "": 2633,
    "date": "2014-9-17",
    "actual_mean_temp": 61,
    "actual_min_temp": 49,
    "actual_max_temp": 72,
    "actual_precipitation": 0,
    "location": "MDW"
  },
  {
    "": 2634,
    "date": "2014-9-18",
    "actual_mean_temp": 63,
    "actual_min_temp": 53,
    "actual_max_temp": 72,
    "actual_precipitation": 0,
    "location": "MDW"
  },
  {
    "": 2635,
    "date": "2014-9-19",
    "actual_mean_temp": 67,
    "actual_min_temp": 57,
    "actual_max_temp": 76,
    "actual_precipitation": 0,
    "location": "MDW"
  },
  {
    "": 2636,
    "date": "2014-9-20",
    "actual_mean_temp": 72,
    "actual_min_temp": 63,
    "actual_max_temp": 80,
    "actual_precipitation": 0.12,
    "location": "MDW"
  },
  {
    "": 2637,
    "date": "2014-9-21",
    "actual_mean_temp": 61,
    "actual_min_temp": 52,
    "actual_max_temp": 70,
    "actual_precipitation": 0,
    "location": "MDW"
  },
  {
    "": 2638,
    "date": "2014-9-22",
    "actual_mean_temp": 59,
    "actual_min_temp": 48,
    "actual_max_temp": 69,
    "actual_precipitation": 0,
    "location": "MDW"
  },
  {
    "": 2639,
    "date": "2014-9-23",
    "actual_mean_temp": 63,
    "actual_min_temp": 50,
    "actual_max_temp": 76,
    "actual_precipitation": 0,
    "location": "MDW"
  },
  {
    "": 2640,
    "date": "2014-9-24",
    "actual_mean_temp": 66,
    "actual_min_temp": 54,
    "actual_max_temp": 77,
    "actual_precipitation": 0,
    "location": "MDW"
  },
  {
    "": 2641,
    "date": "2014-9-25",
    "actual_mean_temp": 68,
    "actual_min_temp": 58,
    "actual_max_temp": 78,
    "actual_precipitation": 0,
    "location": "MDW"
  },
  {
    "": 2642,
    "date": "2014-9-26",
    "actual_mean_temp": 70,
    "actual_min_temp": 59,
    "actual_max_temp": 81,
    "actual_precipitation": 0,
    "location": "MDW"
  },
  {
    "": 2643,
    "date": "2014-9-27",
    "actual_mean_temp": 70,
    "actual_min_temp": 61,
    "actual_max_temp": 79,
    "actual_precipitation": 0,
    "location": "MDW"
  },
  {
    "": 2644,
    "date": "2014-9-28",
    "actual_mean_temp": 69,
    "actual_min_temp": 58,
    "actual_max_temp": 79,
    "actual_precipitation": 0,
    "location": "MDW"
  },
  {
    "": 2645,
    "date": "2014-9-29",
    "actual_mean_temp": 71,
    "actual_min_temp": 57,
    "actual_max_temp": 84,
    "actual_precipitation": 0,
    "location": "MDW"
  },
  {
    "": 2646,
    "date": "2014-9-30",
    "actual_mean_temp": 56,
    "actual_min_temp": 51,
    "actual_max_temp": 61,
    "actual_precipitation": 0,
    "location": "MDW"
  },
  {
    "": 2647,
    "date": "2014-10-1",
    "actual_mean_temp": 63,
    "actual_min_temp": 52,
    "actual_max_temp": 73,
    "actual_precipitation": 0,
    "location": "MDW"
  },
  {
    "": 2648,
    "date": "2014-10-2",
    "actual_mean_temp": 71,
    "actual_min_temp": 66,
    "actual_max_temp": 75,
    "actual_precipitation": 0.71,
    "location": "MDW"
  },
  {
    "": 2649,
    "date": "2014-10-3",
    "actual_mean_temp": 57,
    "actual_min_temp": 46,
    "actual_max_temp": 68,
    "actual_precipitation": 1.05,
    "location": "MDW"
  },
  {
    "": 2650,
    "date": "2014-10-4",
    "actual_mean_temp": 43,
    "actual_min_temp": 37,
    "actual_max_temp": 49,
    "actual_precipitation": 0.05,
    "location": "MDW"
  },
  {
    "": 2651,
    "date": "2014-10-5",
    "actual_mean_temp": 49,
    "actual_min_temp": 42,
    "actual_max_temp": 56,
    "actual_precipitation": 0,
    "location": "MDW"
  },
  {
    "": 2652,
    "date": "2014-10-6",
    "actual_mean_temp": 56,
    "actual_min_temp": 48,
    "actual_max_temp": 63,
    "actual_precipitation": 0.01,
    "location": "MDW"
  },
  {
    "": 2653,
    "date": "2014-10-7",
    "actual_mean_temp": 59,
    "actual_min_temp": 49,
    "actual_max_temp": 69,
    "actual_precipitation": 0,
    "location": "MDW"
  },
  {
    "": 2654,
    "date": "2014-10-8",
    "actual_mean_temp": 58,
    "actual_min_temp": 48,
    "actual_max_temp": 67,
    "actual_precipitation": 0,
    "location": "MDW"
  },
  {
    "": 2655,
    "date": "2014-10-9",
    "actual_mean_temp": 57,
    "actual_min_temp": 50,
    "actual_max_temp": 64,
    "actual_precipitation": 0,
    "location": "MDW"
  },
  {
    "": 2656,
    "date": "2014-10-10",
    "actual_mean_temp": 52,
    "actual_min_temp": 44,
    "actual_max_temp": 59,
    "actual_precipitation": 0,
    "location": "MDW"
  },
  {
    "": 2657,
    "date": "2014-10-11",
    "actual_mean_temp": 50,
    "actual_min_temp": 40,
    "actual_max_temp": 60,
    "actual_precipitation": 0,
    "location": "MDW"
  },
  {
    "": 2658,
    "date": "2014-10-12",
    "actual_mean_temp": 55,
    "actual_min_temp": 45,
    "actual_max_temp": 64,
    "actual_precipitation": 0.01,
    "location": "MDW"
  },
  {
    "": 2659,
    "date": "2014-10-13",
    "actual_mean_temp": 65,
    "actual_min_temp": 59,
    "actual_max_temp": 71,
    "actual_precipitation": 0.44,
    "location": "MDW"
  },
  {
    "": 2660,
    "date": "2014-10-14",
    "actual_mean_temp": 61,
    "actual_min_temp": 54,
    "actual_max_temp": 67,
    "actual_precipitation": 1.18,
    "location": "MDW"
  },
  {
    "": 2661,
    "date": "2014-10-15",
    "actual_mean_temp": 56,
    "actual_min_temp": 53,
    "actual_max_temp": 58,
    "actual_precipitation": 0.07,
    "location": "MDW"
  },
  {
    "": 2662,
    "date": "2014-10-16",
    "actual_mean_temp": 56,
    "actual_min_temp": 53,
    "actual_max_temp": 58,
    "actual_precipitation": 0,
    "location": "MDW"
  },
  {
    "": 2663,
    "date": "2014-10-17",
    "actual_mean_temp": 56,
    "actual_min_temp": 49,
    "actual_max_temp": 63,
    "actual_precipitation": 0.01,
    "location": "MDW"
  },
  {
    "": 2664,
    "date": "2014-10-18",
    "actual_mean_temp": 46,
    "actual_min_temp": 39,
    "actual_max_temp": 52,
    "actual_precipitation": 0.02,
    "location": "MDW"
  },
  {
    "": 2665,
    "date": "2014-10-19",
    "actual_mean_temp": 47,
    "actual_min_temp": 36,
    "actual_max_temp": 57,
    "actual_precipitation": 0,
    "location": "MDW"
  },
  {
    "": 2666,
    "date": "2014-10-20",
    "actual_mean_temp": 58,
    "actual_min_temp": 50,
    "actual_max_temp": 66,
    "actual_precipitation": 0,
    "location": "MDW"
  },
  {
    "": 2667,
    "date": "2014-10-21",
    "actual_mean_temp": 52,
    "actual_min_temp": 49,
    "actual_max_temp": 54,
    "actual_precipitation": 0,
    "location": "MDW"
  },
  {
    "": 2668,
    "date": "2014-10-22",
    "actual_mean_temp": 50,
    "actual_min_temp": 43,
    "actual_max_temp": 56,
    "actual_precipitation": 0,
    "location": "MDW"
  },
  {
    "": 2669,
    "date": "2014-10-23",
    "actual_mean_temp": 52,
    "actual_min_temp": 41,
    "actual_max_temp": 62,
    "actual_precipitation": 0,
    "location": "MDW"
  },
  {
    "": 2670,
    "date": "2014-10-24",
    "actual_mean_temp": 61,
    "actual_min_temp": 54,
    "actual_max_temp": 68,
    "actual_precipitation": 0,
    "location": "MDW"
  },
  {
    "": 2671,
    "date": "2014-10-25",
    "actual_mean_temp": 64,
    "actual_min_temp": 52,
    "actual_max_temp": 75,
    "actual_precipitation": 0,
    "location": "MDW"
  },
  {
    "": 2672,
    "date": "2014-10-26",
    "actual_mean_temp": 55,
    "actual_min_temp": 44,
    "actual_max_temp": 66,
    "actual_precipitation": 0,
    "location": "MDW"
  },
  {
    "": 2673,
    "date": "2014-10-27",
    "actual_mean_temp": 67,
    "actual_min_temp": 54,
    "actual_max_temp": 79,
    "actual_precipitation": 0.02,
    "location": "MDW"
  },
  {
    "": 2674,
    "date": "2014-10-28",
    "actual_mean_temp": 57,
    "actual_min_temp": 48,
    "actual_max_temp": 66,
    "actual_precipitation": 0.03,
    "location": "MDW"
  },
  {
    "": 2675,
    "date": "2014-10-29",
    "actual_mean_temp": 45,
    "actual_min_temp": 40,
    "actual_max_temp": 49,
    "actual_precipitation": 0,
    "location": "MDW"
  },
  {
    "": 2676,
    "date": "2014-10-30",
    "actual_mean_temp": 45,
    "actual_min_temp": 37,
    "actual_max_temp": 53,
    "actual_precipitation": 0,
    "location": "MDW"
  },
  {
    "": 2677,
    "date": "2014-10-31",
    "actual_mean_temp": 42,
    "actual_min_temp": 34,
    "actual_max_temp": 49,
    "actual_precipitation": 0.04,
    "location": "MDW"
  },
  {
    "": 2678,
    "date": "2014-11-1",
    "actual_mean_temp": 39,
    "actual_min_temp": 33,
    "actual_max_temp": 44,
    "actual_precipitation": 0,
    "location": "MDW"
  },
  {
    "": 2679,
    "date": "2014-11-2",
    "actual_mean_temp": 41,
    "actual_min_temp": 29,
    "actual_max_temp": 53,
    "actual_precipitation": 0,
    "location": "MDW"
  },
  {
    "": 2680,
    "date": "2014-11-3",
    "actual_mean_temp": 55,
    "actual_min_temp": 45,
    "actual_max_temp": 64,
    "actual_precipitation": 0,
    "location": "MDW"
  },
  {
    "": 2681,
    "date": "2014-11-4",
    "actual_mean_temp": 53,
    "actual_min_temp": 45,
    "actual_max_temp": 61,
    "actual_precipitation": 0.02,
    "location": "MDW"
  },
  {
    "": 2682,
    "date": "2014-11-5",
    "actual_mean_temp": 51,
    "actual_min_temp": 39,
    "actual_max_temp": 63,
    "actual_precipitation": 0,
    "location": "MDW"
  },
  {
    "": 2683,
    "date": "2014-11-6",
    "actual_mean_temp": 46,
    "actual_min_temp": 40,
    "actual_max_temp": 52,
    "actual_precipitation": 0,
    "location": "MDW"
  },
  {
    "": 2684,
    "date": "2014-11-7",
    "actual_mean_temp": 41,
    "actual_min_temp": 37,
    "actual_max_temp": 45,
    "actual_precipitation": 0,
    "location": "MDW"
  },
  {
    "": 2685,
    "date": "2014-11-8",
    "actual_mean_temp": 44,
    "actual_min_temp": 39,
    "actual_max_temp": 49,
    "actual_precipitation": 0,
    "location": "MDW"
  },
  {
    "": 2686,
    "date": "2014-11-9",
    "actual_mean_temp": 45,
    "actual_min_temp": 36,
    "actual_max_temp": 53,
    "actual_precipitation": 0,
    "location": "MDW"
  },
  {
    "": 2687,
    "date": "2014-11-10",
    "actual_mean_temp": 55,
    "actual_min_temp": 44,
    "actual_max_temp": 65,
    "actual_precipitation": 0,
    "location": "MDW"
  },
  {
    "": 2688,
    "date": "2014-11-11",
    "actual_mean_temp": 47,
    "actual_min_temp": 33,
    "actual_max_temp": 61,
    "actual_precipitation": 0.23,
    "location": "MDW"
  },
  {
    "": 2689,
    "date": "2014-11-12",
    "actual_mean_temp": 30,
    "actual_min_temp": 27,
    "actual_max_temp": 33,
    "actual_precipitation": 0,
    "location": "MDW"
  },
  {
    "": 2690,
    "date": "2014-11-13",
    "actual_mean_temp": 29,
    "actual_min_temp": 26,
    "actual_max_temp": 31,
    "actual_precipitation": 0,
    "location": "MDW"
  },
  {
    "": 2691,
    "date": "2014-11-14",
    "actual_mean_temp": 27,
    "actual_min_temp": 24,
    "actual_max_temp": 29,
    "actual_precipitation": 0,
    "location": "MDW"
  },
  {
    "": 2692,
    "date": "2014-11-15",
    "actual_mean_temp": 27,
    "actual_min_temp": 21,
    "actual_max_temp": 33,
    "actual_precipitation": 0,
    "location": "MDW"
  },
  {
    "": 2693,
    "date": "2014-11-16",
    "actual_mean_temp": 29,
    "actual_min_temp": 25,
    "actual_max_temp": 33,
    "actual_precipitation": 0,
    "location": "MDW"
  },
  {
    "": 2694,
    "date": "2014-11-17",
    "actual_mean_temp": 19,
    "actual_min_temp": 13,
    "actual_max_temp": 25,
    "actual_precipitation": 0,
    "location": "MDW"
  },
  {
    "": 2695,
    "date": "2014-11-18",
    "actual_mean_temp": 17,
    "actual_min_temp": 12,
    "actual_max_temp": 21,
    "actual_precipitation": 0,
    "location": "MDW"
  },
  {
    "": 2696,
    "date": "2014-11-19",
    "actual_mean_temp": 26,
    "actual_min_temp": 19,
    "actual_max_temp": 33,
    "actual_precipitation": 0,
    "location": "MDW"
  },
  {
    "": 2697,
    "date": "2014-11-20",
    "actual_mean_temp": 24,
    "actual_min_temp": 17,
    "actual_max_temp": 30,
    "actual_precipitation": 0,
    "location": "MDW"
  },
  {
    "": 2698,
    "date": "2014-11-21",
    "actual_mean_temp": 25,
    "actual_min_temp": 13,
    "actual_max_temp": 36,
    "actual_precipitation": 0,
    "location": "MDW"
  },
  {
    "": 2699,
    "date": "2014-11-22",
    "actual_mean_temp": 44,
    "actual_min_temp": 34,
    "actual_max_temp": 54,
    "actual_precipitation": 0.05,
    "location": "MDW"
  },
  {
    "": 2700,
    "date": "2014-11-23",
    "actual_mean_temp": 52,
    "actual_min_temp": 50,
    "actual_max_temp": 54,
    "actual_precipitation": 0.62,
    "location": "MDW"
  },
  {
    "": 2701,
    "date": "2014-11-24",
    "actual_mean_temp": 39,
    "actual_min_temp": 27,
    "actual_max_temp": 51,
    "actual_precipitation": 0.35,
    "location": "MDW"
  },
  {
    "": 2702,
    "date": "2014-11-25",
    "actual_mean_temp": 26,
    "actual_min_temp": 22,
    "actual_max_temp": 30,
    "actual_precipitation": 0,
    "location": "MDW"
  },
  {
    "": 2703,
    "date": "2014-11-26",
    "actual_mean_temp": 27,
    "actual_min_temp": 22,
    "actual_max_temp": 32,
    "actual_precipitation": 0,
    "location": "MDW"
  },
  {
    "": 2704,
    "date": "2014-11-27",
    "actual_mean_temp": 25,
    "actual_min_temp": 19,
    "actual_max_temp": 30,
    "actual_precipitation": 0,
    "location": "MDW"
  },
  {
    "": 2705,
    "date": "2014-11-28",
    "actual_mean_temp": 28,
    "actual_min_temp": 20,
    "actual_max_temp": 36,
    "actual_precipitation": 0,
    "location": "MDW"
  },
  {
    "": 2706,
    "date": "2014-11-29",
    "actual_mean_temp": 44,
    "actual_min_temp": 33,
    "actual_max_temp": 54,
    "actual_precipitation": 0,
    "location": "MDW"
  },
  {
    "": 2707,
    "date": "2014-11-30",
    "actual_mean_temp": 43,
    "actual_min_temp": 29,
    "actual_max_temp": 56,
    "actual_precipitation": 0,
    "location": "MDW"
  },
  {
    "": 2708,
    "date": "2014-12-1",
    "actual_mean_temp": 25,
    "actual_min_temp": 21,
    "actual_max_temp": 29,
    "actual_precipitation": 0,
    "location": "MDW"
  },
  {
    "": 2709,
    "date": "2014-12-2",
    "actual_mean_temp": 28,
    "actual_min_temp": 22,
    "actual_max_temp": 33,
    "actual_precipitation": 0,
    "location": "MDW"
  },
  {
    "": 2710,
    "date": "2014-12-3",
    "actual_mean_temp": 33,
    "actual_min_temp": 26,
    "actual_max_temp": 39,
    "actual_precipitation": 0,
    "location": "MDW"
  },
  {
    "": 2711,
    "date": "2014-12-4",
    "actual_mean_temp": 31,
    "actual_min_temp": 25,
    "actual_max_temp": 37,
    "actual_precipitation": 0,
    "location": "MDW"
  },
  {
    "": 2712,
    "date": "2014-12-5",
    "actual_mean_temp": 38,
    "actual_min_temp": 35,
    "actual_max_temp": 41,
    "actual_precipitation": 0,
    "location": "MDW"
  },
  {
    "": 2713,
    "date": "2014-12-6",
    "actual_mean_temp": 39,
    "actual_min_temp": 34,
    "actual_max_temp": 43,
    "actual_precipitation": 0,
    "location": "MDW"
  },
  {
    "": 2714,
    "date": "2014-12-7",
    "actual_mean_temp": 35,
    "actual_min_temp": 30,
    "actual_max_temp": 39,
    "actual_precipitation": 0,
    "location": "MDW"
  },
  {
    "": 2715,
    "date": "2014-12-8",
    "actual_mean_temp": 37,
    "actual_min_temp": 35,
    "actual_max_temp": 39,
    "actual_precipitation": 0.1,
    "location": "MDW"
  },
  {
    "": 2716,
    "date": "2014-12-9",
    "actual_mean_temp": 37,
    "actual_min_temp": 33,
    "actual_max_temp": 40,
    "actual_precipitation": 0.02,
    "location": "MDW"
  },
  {
    "": 2717,
    "date": "2014-12-10",
    "actual_mean_temp": 34,
    "actual_min_temp": 31,
    "actual_max_temp": 36,
    "actual_precipitation": 0,
    "location": "MDW"
  },
  {
    "": 2718,
    "date": "2014-12-11",
    "actual_mean_temp": 30,
    "actual_min_temp": 26,
    "actual_max_temp": 34,
    "actual_precipitation": 0,
    "location": "MDW"
  },
  {
    "": 2719,
    "date": "2014-12-12",
    "actual_mean_temp": 32,
    "actual_min_temp": 25,
    "actual_max_temp": 39,
    "actual_precipitation": 0,
    "location": "MDW"
  },
  {
    "": 2720,
    "date": "2014-12-13",
    "actual_mean_temp": 43,
    "actual_min_temp": 37,
    "actual_max_temp": 49,
    "actual_precipitation": 0,
    "location": "MDW"
  },
  {
    "": 2721,
    "date": "2014-12-14",
    "actual_mean_temp": 50,
    "actual_min_temp": 47,
    "actual_max_temp": 53,
    "actual_precipitation": 0,
    "location": "MDW"
  },
  {
    "": 2722,
    "date": "2014-12-15",
    "actual_mean_temp": 46,
    "actual_min_temp": 43,
    "actual_max_temp": 48,
    "actual_precipitation": 0.12,
    "location": "MDW"
  },
  {
    "": 2723,
    "date": "2014-12-16",
    "actual_mean_temp": 40,
    "actual_min_temp": 32,
    "actual_max_temp": 47,
    "actual_precipitation": 0.02,
    "location": "MDW"
  },
  {
    "": 2724,
    "date": "2014-12-17",
    "actual_mean_temp": 29,
    "actual_min_temp": 26,
    "actual_max_temp": 32,
    "actual_precipitation": 0,
    "location": "MDW"
  },
  {
    "": 2725,
    "date": "2014-12-18",
    "actual_mean_temp": 28,
    "actual_min_temp": 25,
    "actual_max_temp": 31,
    "actual_precipitation": 0,
    "location": "MDW"
  },
  {
    "": 2726,
    "date": "2014-12-19",
    "actual_mean_temp": 32,
    "actual_min_temp": 29,
    "actual_max_temp": 34,
    "actual_precipitation": 0,
    "location": "MDW"
  },
  {
    "": 2727,
    "date": "2014-12-20",
    "actual_mean_temp": 34,
    "actual_min_temp": 32,
    "actual_max_temp": 35,
    "actual_precipitation": 0,
    "location": "MDW"
  },
  {
    "": 2728,
    "date": "2014-12-21",
    "actual_mean_temp": 36,
    "actual_min_temp": 34,
    "actual_max_temp": 38,
    "actual_precipitation": 0,
    "location": "MDW"
  },
  {
    "": 2729,
    "date": "2014-12-22",
    "actual_mean_temp": 38,
    "actual_min_temp": 31,
    "actual_max_temp": 44,
    "actual_precipitation": 0.28,
    "location": "MDW"
  },
  {
    "": 2730,
    "date": "2014-12-23",
    "actual_mean_temp": 46,
    "actual_min_temp": 42,
    "actual_max_temp": 50,
    "actual_precipitation": 0.12,
    "location": "MDW"
  },
  {
    "": 2731,
    "date": "2014-12-24",
    "actual_mean_temp": 41,
    "actual_min_temp": 38,
    "actual_max_temp": 43,
    "actual_precipitation": 0.12,
    "location": "MDW"
  },
  {
    "": 2732,
    "date": "2014-12-25",
    "actual_mean_temp": 40,
    "actual_min_temp": 35,
    "actual_max_temp": 44,
    "actual_precipitation": 0,
    "location": "MDW"
  },
  {
    "": 2733,
    "date": "2014-12-26",
    "actual_mean_temp": 45,
    "actual_min_temp": 38,
    "actual_max_temp": 51,
    "actual_precipitation": 0,
    "location": "MDW"
  },
  {
    "": 2734,
    "date": "2014-12-27",
    "actual_mean_temp": 41,
    "actual_min_temp": 32,
    "actual_max_temp": 50,
    "actual_precipitation": 0,
    "location": "MDW"
  },
  {
    "": 2735,
    "date": "2014-12-28",
    "actual_mean_temp": 31,
    "actual_min_temp": 26,
    "actual_max_temp": 36,
    "actual_precipitation": 0,
    "location": "MDW"
  },
  {
    "": 2736,
    "date": "2014-12-29",
    "actual_mean_temp": 30,
    "actual_min_temp": 24,
    "actual_max_temp": 35,
    "actual_precipitation": 0,
    "location": "MDW"
  },
  {
    "": 2737,
    "date": "2014-12-30",
    "actual_mean_temp": 19,
    "actual_min_temp": 13,
    "actual_max_temp": 24,
    "actual_precipitation": 0,
    "location": "MDW"
  },
  {
    "": 2738,
    "date": "2014-12-31",
    "actual_mean_temp": 13,
    "actual_min_temp": 6,
    "actual_max_temp": 20,
    "actual_precipitation": 0,
    "location": "MDW"
  },
  {
    "": 2739,
    "date": "2015-1-1",
    "actual_mean_temp": 25,
    "actual_min_temp": 17,
    "actual_max_temp": 32,
    "actual_precipitation": 0,
    "location": "MDW"
  },
  {
    "": 2740,
    "date": "2015-1-2",
    "actual_mean_temp": 28,
    "actual_min_temp": 20,
    "actual_max_temp": 36,
    "actual_precipitation": 0,
    "location": "MDW"
  },
  {
    "": 2741,
    "date": "2015-1-3",
    "actual_mean_temp": 34,
    "actual_min_temp": 31,
    "actual_max_temp": 37,
    "actual_precipitation": 0.55,
    "location": "MDW"
  },
  {
    "": 2742,
    "date": "2015-1-4",
    "actual_mean_temp": 21,
    "actual_min_temp": 5,
    "actual_max_temp": 36,
    "actual_precipitation": 0.1,
    "location": "MDW"
  },
  {
    "": 2743,
    "date": "2015-1-5",
    "actual_mean_temp": 5,
    "actual_min_temp": -1,
    "actual_max_temp": 10,
    "actual_precipitation": 0.11,
    "location": "MDW"
  },
  {
    "": 2744,
    "date": "2015-1-6",
    "actual_mean_temp": 9,
    "actual_min_temp": 5,
    "actual_max_temp": 12,
    "actual_precipitation": 0,
    "location": "MDW"
  },
  {
    "": 2745,
    "date": "2015-1-7",
    "actual_mean_temp": 2,
    "actual_min_temp": -4,
    "actual_max_temp": 8,
    "actual_precipitation": 0,
    "location": "MDW"
  },
  {
    "": 2746,
    "date": "2015-1-8",
    "actual_mean_temp": 7,
    "actual_min_temp": -7,
    "actual_max_temp": 20,
    "actual_precipitation": 0.05,
    "location": "MDW"
  },
  {
    "": 2747,
    "date": "2015-1-9",
    "actual_mean_temp": 10,
    "actual_min_temp": 3,
    "actual_max_temp": 16,
    "actual_precipitation": 0,
    "location": "MDW"
  },
  {
    "": 2748,
    "date": "2015-1-10",
    "actual_mean_temp": 13,
    "actual_min_temp": 0,
    "actual_max_temp": 26,
    "actual_precipitation": 0,
    "location": "MDW"
  },
  {
    "": 2749,
    "date": "2015-1-11",
    "actual_mean_temp": 30,
    "actual_min_temp": 25,
    "actual_max_temp": 34,
    "actual_precipitation": 0.12,
    "location": "MDW"
  },
  {
    "": 2750,
    "date": "2015-1-12",
    "actual_mean_temp": 25,
    "actual_min_temp": 19,
    "actual_max_temp": 30,
    "actual_precipitation": 0.03,
    "location": "MDW"
  },
  {
    "": 2751,
    "date": "2015-1-13",
    "actual_mean_temp": 18,
    "actual_min_temp": 13,
    "actual_max_temp": 23,
    "actual_precipitation": 0,
    "location": "MDW"
  },
  {
    "": 2752,
    "date": "2015-1-14",
    "actual_mean_temp": 13,
    "actual_min_temp": 5,
    "actual_max_temp": 21,
    "actual_precipitation": 0,
    "location": "MDW"
  },
  {
    "": 2753,
    "date": "2015-1-15",
    "actual_mean_temp": 27,
    "actual_min_temp": 17,
    "actual_max_temp": 36,
    "actual_precipitation": 0,
    "location": "MDW"
  },
  {
    "": 2754,
    "date": "2015-1-16",
    "actual_mean_temp": 29,
    "actual_min_temp": 22,
    "actual_max_temp": 35,
    "actual_precipitation": 0,
    "location": "MDW"
  },
  {
    "": 2755,
    "date": "2015-1-17",
    "actual_mean_temp": 37,
    "actual_min_temp": 30,
    "actual_max_temp": 44,
    "actual_precipitation": 0,
    "location": "MDW"
  },
  {
    "": 2756,
    "date": "2015-1-18",
    "actual_mean_temp": 37,
    "actual_min_temp": 31,
    "actual_max_temp": 43,
    "actual_precipitation": 0,
    "location": "MDW"
  },
  {
    "": 2757,
    "date": "2015-1-19",
    "actual_mean_temp": 35,
    "actual_min_temp": 27,
    "actual_max_temp": 43,
    "actual_precipitation": 0,
    "location": "MDW"
  },
  {
    "": 2758,
    "date": "2015-1-20",
    "actual_mean_temp": 37,
    "actual_min_temp": 33,
    "actual_max_temp": 40,
    "actual_precipitation": 0.01,
    "location": "MDW"
  },
  {
    "": 2759,
    "date": "2015-1-21",
    "actual_mean_temp": 34,
    "actual_min_temp": 31,
    "actual_max_temp": 36,
    "actual_precipitation": 0,
    "location": "MDW"
  },
  {
    "": 2760,
    "date": "2015-1-22",
    "actual_mean_temp": 32,
    "actual_min_temp": 30,
    "actual_max_temp": 34,
    "actual_precipitation": 0,
    "location": "MDW"
  },
  {
    "": 2761,
    "date": "2015-1-23",
    "actual_mean_temp": 32,
    "actual_min_temp": 30,
    "actual_max_temp": 34,
    "actual_precipitation": 0,
    "location": "MDW"
  },
  {
    "": 2762,
    "date": "2015-1-24",
    "actual_mean_temp": 39,
    "actual_min_temp": 32,
    "actual_max_temp": 45,
    "actual_precipitation": 0,
    "location": "MDW"
  },
  {
    "": 2763,
    "date": "2015-1-25",
    "actual_mean_temp": 32,
    "actual_min_temp": 26,
    "actual_max_temp": 38,
    "actual_precipitation": 0.06,
    "location": "MDW"
  },
  {
    "": 2764,
    "date": "2015-1-26",
    "actual_mean_temp": 25,
    "actual_min_temp": 21,
    "actual_max_temp": 29,
    "actual_precipitation": 0.04,
    "location": "MDW"
  },
  {
    "": 2765,
    "date": "2015-1-27",
    "actual_mean_temp": 29,
    "actual_min_temp": 24,
    "actual_max_temp": 33,
    "actual_precipitation": 0,
    "location": "MDW"
  },
  {
    "": 2766,
    "date": "2015-1-28",
    "actual_mean_temp": 30,
    "actual_min_temp": 24,
    "actual_max_temp": 36,
    "actual_precipitation": 0.03,
    "location": "MDW"
  },
  {
    "": 2767,
    "date": "2015-1-29",
    "actual_mean_temp": 35,
    "actual_min_temp": 31,
    "actual_max_temp": 39,
    "actual_precipitation": 0,
    "location": "MDW"
  },
  {
    "": 2768,
    "date": "2015-1-30",
    "actual_mean_temp": 28,
    "actual_min_temp": 23,
    "actual_max_temp": 32,
    "actual_precipitation": 0,
    "location": "MDW"
  },
  {
    "": 2769,
    "date": "2015-1-31",
    "actual_mean_temp": 31,
    "actual_min_temp": 23,
    "actual_max_temp": 39,
    "actual_precipitation": 0.13,
    "location": "MDW"
  },
  {
    "": 2770,
    "date": "2015-2-1",
    "actual_mean_temp": 27,
    "actual_min_temp": 21,
    "actual_max_temp": 33,
    "actual_precipitation": 0.12,
    "location": "MDW"
  },
  {
    "": 2771,
    "date": "2015-2-2",
    "actual_mean_temp": 16,
    "actual_min_temp": 9,
    "actual_max_temp": 22,
    "actual_precipitation": 0,
    "location": "MDW"
  },
  {
    "": 2772,
    "date": "2015-2-3",
    "actual_mean_temp": 19,
    "actual_min_temp": 8,
    "actual_max_temp": 30,
    "actual_precipitation": 0.05,
    "location": "MDW"
  },
  {
    "": 2773,
    "date": "2015-2-4",
    "actual_mean_temp": 21,
    "actual_min_temp": 12,
    "actual_max_temp": 30,
    "actual_precipitation": 0,
    "location": "MDW"
  },
  {
    "": 2774,
    "date": "2015-2-5",
    "actual_mean_temp": 10,
    "actual_min_temp": 3,
    "actual_max_temp": 17,
    "actual_precipitation": 0,
    "location": "MDW"
  },
  {
    "": 2775,
    "date": "2015-2-6",
    "actual_mean_temp": 24,
    "actual_min_temp": 15,
    "actual_max_temp": 32,
    "actual_precipitation": 0,
    "location": "MDW"
  },
  {
    "": 2776,
    "date": "2015-2-7",
    "actual_mean_temp": 35,
    "actual_min_temp": 25,
    "actual_max_temp": 44,
    "actual_precipitation": 0,
    "location": "MDW"
  },
  {
    "": 2777,
    "date": "2015-2-8",
    "actual_mean_temp": 37,
    "actual_min_temp": 31,
    "actual_max_temp": 42,
    "actual_precipitation": 0,
    "location": "MDW"
  },
  {
    "": 2778,
    "date": "2015-2-9",
    "actual_mean_temp": 29,
    "actual_min_temp": 26,
    "actual_max_temp": 31,
    "actual_precipitation": 0,
    "location": "MDW"
  },
  {
    "": 2779,
    "date": "2015-2-10",
    "actual_mean_temp": 29,
    "actual_min_temp": 25,
    "actual_max_temp": 33,
    "actual_precipitation": 0,
    "location": "MDW"
  },
  {
    "": 2780,
    "date": "2015-2-11",
    "actual_mean_temp": 30,
    "actual_min_temp": 21,
    "actual_max_temp": 38,
    "actual_precipitation": 0,
    "location": "MDW"
  },
  {
    "": 2781,
    "date": "2015-2-12",
    "actual_mean_temp": 16,
    "actual_min_temp": 11,
    "actual_max_temp": 21,
    "actual_precipitation": 0,
    "location": "MDW"
  },
  {
    "": 2782,
    "date": "2015-2-13",
    "actual_mean_temp": 18,
    "actual_min_temp": 7,
    "actual_max_temp": 29,
    "actual_precipitation": 0,
    "location": "MDW"
  },
  {
    "": 2783,
    "date": "2015-2-14",
    "actual_mean_temp": 17,
    "actual_min_temp": 4,
    "actual_max_temp": 29,
    "actual_precipitation": 0,
    "location": "MDW"
  },
  {
    "": 2784,
    "date": "2015-2-15",
    "actual_mean_temp": 9,
    "actual_min_temp": 0,
    "actual_max_temp": 17,
    "actual_precipitation": 0,
    "location": "MDW"
  },
  {
    "": 2785,
    "date": "2015-2-16",
    "actual_mean_temp": 14,
    "actual_min_temp": 8,
    "actual_max_temp": 19,
    "actual_precipitation": 0,
    "location": "MDW"
  },
  {
    "": 2786,
    "date": "2015-2-17",
    "actual_mean_temp": 17,
    "actual_min_temp": 11,
    "actual_max_temp": 22,
    "actual_precipitation": 0,
    "location": "MDW"
  },
  {
    "": 2787,
    "date": "2015-2-18",
    "actual_mean_temp": 6,
    "actual_min_temp": 0,
    "actual_max_temp": 11,
    "actual_precipitation": 0,
    "location": "MDW"
  },
  {
    "": 2788,
    "date": "2015-2-19",
    "actual_mean_temp": 1,
    "actual_min_temp": -5,
    "actual_max_temp": 7,
    "actual_precipitation": 0,
    "location": "MDW"
  },
  {
    "": 2789,
    "date": "2015-2-20",
    "actual_mean_temp": 10,
    "actual_min_temp": -1,
    "actual_max_temp": 20,
    "actual_precipitation": 0,
    "location": "MDW"
  },
  {
    "": 2790,
    "date": "2015-2-21",
    "actual_mean_temp": 26,
    "actual_min_temp": 19,
    "actual_max_temp": 33,
    "actual_precipitation": 0,
    "location": "MDW"
  },
  {
    "": 2791,
    "date": "2015-2-22",
    "actual_mean_temp": 19,
    "actual_min_temp": 7,
    "actual_max_temp": 30,
    "actual_precipitation": 0,
    "location": "MDW"
  },
  {
    "": 2792,
    "date": "2015-2-23",
    "actual_mean_temp": 8,
    "actual_min_temp": 0,
    "actual_max_temp": 15,
    "actual_precipitation": 0,
    "location": "MDW"
  },
  {
    "": 2793,
    "date": "2015-2-24",
    "actual_mean_temp": 19,
    "actual_min_temp": 6,
    "actual_max_temp": 32,
    "actual_precipitation": 0,
    "location": "MDW"
  },
  {
    "": 2794,
    "date": "2015-2-25",
    "actual_mean_temp": 22,
    "actual_min_temp": 16,
    "actual_max_temp": 28,
    "actual_precipitation": 0.06,
    "location": "MDW"
  },
  {
    "": 2795,
    "date": "2015-2-26",
    "actual_mean_temp": 15,
    "actual_min_temp": 7,
    "actual_max_temp": 22,
    "actual_precipitation": 0.01,
    "location": "MDW"
  },
  {
    "": 2796,
    "date": "2015-2-27",
    "actual_mean_temp": 9,
    "actual_min_temp": 0,
    "actual_max_temp": 17,
    "actual_precipitation": 0,
    "location": "MDW"
  },
  {
    "": 2797,
    "date": "2015-2-28",
    "actual_mean_temp": 12,
    "actual_min_temp": 1,
    "actual_max_temp": 23,
    "actual_precipitation": 0,
    "location": "MDW"
  },
  {
    "": 2798,
    "date": "2015-3-1",
    "actual_mean_temp": 23,
    "actual_min_temp": 18,
    "actual_max_temp": 27,
    "actual_precipitation": 0.01,
    "location": "MDW"
  },
  {
    "": 2799,
    "date": "2015-3-2",
    "actual_mean_temp": 25,
    "actual_min_temp": 16,
    "actual_max_temp": 34,
    "actual_precipitation": 0,
    "location": "MDW"
  },
  {
    "": 2800,
    "date": "2015-3-3",
    "actual_mean_temp": 32,
    "actual_min_temp": 27,
    "actual_max_temp": 37,
    "actual_precipitation": 0.1,
    "location": "MDW"
  },
  {
    "": 2801,
    "date": "2015-3-4",
    "actual_mean_temp": 24,
    "actual_min_temp": 14,
    "actual_max_temp": 33,
    "actual_precipitation": 0,
    "location": "MDW"
  },
  {
    "": 2802,
    "date": "2015-3-5",
    "actual_mean_temp": 14,
    "actual_min_temp": 8,
    "actual_max_temp": 19,
    "actual_precipitation": 0,
    "location": "MDW"
  },
  {
    "": 2803,
    "date": "2015-3-6",
    "actual_mean_temp": 17,
    "actual_min_temp": 6,
    "actual_max_temp": 27,
    "actual_precipitation": 0,
    "location": "MDW"
  },
  {
    "": 2804,
    "date": "2015-3-7",
    "actual_mean_temp": 36,
    "actual_min_temp": 26,
    "actual_max_temp": 46,
    "actual_precipitation": 0,
    "location": "MDW"
  },
  {
    "": 2805,
    "date": "2015-3-8",
    "actual_mean_temp": 37,
    "actual_min_temp": 31,
    "actual_max_temp": 42,
    "actual_precipitation": 0,
    "location": "MDW"
  },
  {
    "": 2806,
    "date": "2015-3-9",
    "actual_mean_temp": 40,
    "actual_min_temp": 28,
    "actual_max_temp": 52,
    "actual_precipitation": 0,
    "location": "MDW"
  },
  {
    "": 2807,
    "date": "2015-3-10",
    "actual_mean_temp": 46,
    "actual_min_temp": 38,
    "actual_max_temp": 54,
    "actual_precipitation": 0,
    "location": "MDW"
  },
  {
    "": 2808,
    "date": "2015-3-11",
    "actual_mean_temp": 45,
    "actual_min_temp": 36,
    "actual_max_temp": 54,
    "actual_precipitation": 0,
    "location": "MDW"
  },
  {
    "": 2809,
    "date": "2015-3-12",
    "actual_mean_temp": 46,
    "actual_min_temp": 33,
    "actual_max_temp": 58,
    "actual_precipitation": 0,
    "location": "MDW"
  },
  {
    "": 2810,
    "date": "2015-3-13",
    "actual_mean_temp": 53,
    "actual_min_temp": 41,
    "actual_max_temp": 65,
    "actual_precipitation": 0,
    "location": "MDW"
  },
  {
    "": 2811,
    "date": "2015-3-14",
    "actual_mean_temp": 51,
    "actual_min_temp": 40,
    "actual_max_temp": 62,
    "actual_precipitation": 0,
    "location": "MDW"
  },
  {
    "": 2812,
    "date": "2015-3-15",
    "actual_mean_temp": 49,
    "actual_min_temp": 34,
    "actual_max_temp": 64,
    "actual_precipitation": 0,
    "location": "MDW"
  },
  {
    "": 2813,
    "date": "2015-3-16",
    "actual_mean_temp": 59,
    "actual_min_temp": 44,
    "actual_max_temp": 74,
    "actual_precipitation": 0,
    "location": "MDW"
  },
  {
    "": 2814,
    "date": "2015-3-17",
    "actual_mean_temp": 38,
    "actual_min_temp": 31,
    "actual_max_temp": 44,
    "actual_precipitation": 0,
    "location": "MDW"
  },
  {
    "": 2815,
    "date": "2015-3-18",
    "actual_mean_temp": 40,
    "actual_min_temp": 30,
    "actual_max_temp": 50,
    "actual_precipitation": 0,
    "location": "MDW"
  },
  {
    "": 2816,
    "date": "2015-3-19",
    "actual_mean_temp": 46,
    "actual_min_temp": 41,
    "actual_max_temp": 50,
    "actual_precipitation": 0,
    "location": "MDW"
  },
  {
    "": 2817,
    "date": "2015-3-20",
    "actual_mean_temp": 46,
    "actual_min_temp": 39,
    "actual_max_temp": 52,
    "actual_precipitation": 0,
    "location": "MDW"
  },
  {
    "": 2818,
    "date": "2015-3-21",
    "actual_mean_temp": 43,
    "actual_min_temp": 35,
    "actual_max_temp": 50,
    "actual_precipitation": 0,
    "location": "MDW"
  },
  {
    "": 2819,
    "date": "2015-3-22",
    "actual_mean_temp": 34,
    "actual_min_temp": 30,
    "actual_max_temp": 37,
    "actual_precipitation": 0,
    "location": "MDW"
  },
  {
    "": 2820,
    "date": "2015-3-23",
    "actual_mean_temp": 31,
    "actual_min_temp": 30,
    "actual_max_temp": 32,
    "actual_precipitation": 0.15,
    "location": "MDW"
  },
  {
    "": 2821,
    "date": "2015-3-24",
    "actual_mean_temp": 33,
    "actual_min_temp": 25,
    "actual_max_temp": 40,
    "actual_precipitation": 0.04,
    "location": "MDW"
  },
  {
    "": 2822,
    "date": "2015-3-25",
    "actual_mean_temp": 41,
    "actual_min_temp": 38,
    "actual_max_temp": 43,
    "actual_precipitation": 0.13,
    "location": "MDW"
  },
  {
    "": 2823,
    "date": "2015-3-26",
    "actual_mean_temp": 40,
    "actual_min_temp": 34,
    "actual_max_temp": 46,
    "actual_precipitation": 0,
    "location": "MDW"
  },
  {
    "": 2824,
    "date": "2015-3-27",
    "actual_mean_temp": 30,
    "actual_min_temp": 25,
    "actual_max_temp": 34,
    "actual_precipitation": 0.01,
    "location": "MDW"
  },
  {
    "": 2825,
    "date": "2015-3-28",
    "actual_mean_temp": 29,
    "actual_min_temp": 21,
    "actual_max_temp": 37,
    "actual_precipitation": 0,
    "location": "MDW"
  },
  {
    "": 2826,
    "date": "2015-3-29",
    "actual_mean_temp": 40,
    "actual_min_temp": 28,
    "actual_max_temp": 51,
    "actual_precipitation": 0.04,
    "location": "MDW"
  },
  {
    "": 2827,
    "date": "2015-3-30",
    "actual_mean_temp": 51,
    "actual_min_temp": 37,
    "actual_max_temp": 64,
    "actual_precipitation": 0,
    "location": "MDW"
  },
  {
    "": 2828,
    "date": "2015-3-31",
    "actual_mean_temp": 49,
    "actual_min_temp": 41,
    "actual_max_temp": 57,
    "actual_precipitation": 0,
    "location": "MDW"
  },
  {
    "": 2829,
    "date": "2015-4-1",
    "actual_mean_temp": 58,
    "actual_min_temp": 41,
    "actual_max_temp": 74,
    "actual_precipitation": 0,
    "location": "MDW"
  },
  {
    "": 2830,
    "date": "2015-4-2",
    "actual_mean_temp": 59,
    "actual_min_temp": 50,
    "actual_max_temp": 68,
    "actual_precipitation": 0.27,
    "location": "MDW"
  },
  {
    "": 2831,
    "date": "2015-4-3",
    "actual_mean_temp": 45,
    "actual_min_temp": 33,
    "actual_max_temp": 57,
    "actual_precipitation": 0,
    "location": "MDW"
  },
  {
    "": 2832,
    "date": "2015-4-4",
    "actual_mean_temp": 46,
    "actual_min_temp": 31,
    "actual_max_temp": 61,
    "actual_precipitation": 0,
    "location": "MDW"
  },
  {
    "": 2833,
    "date": "2015-4-5",
    "actual_mean_temp": 58,
    "actual_min_temp": 47,
    "actual_max_temp": 69,
    "actual_precipitation": 0,
    "location": "MDW"
  },
  {
    "": 2834,
    "date": "2015-4-6",
    "actual_mean_temp": 53,
    "actual_min_temp": 41,
    "actual_max_temp": 64,
    "actual_precipitation": 0.07,
    "location": "MDW"
  },
  {
    "": 2835,
    "date": "2015-4-7",
    "actual_mean_temp": 45,
    "actual_min_temp": 40,
    "actual_max_temp": 49,
    "actual_precipitation": 0.04,
    "location": "MDW"
  },
  {
    "": 2836,
    "date": "2015-4-8",
    "actual_mean_temp": 49,
    "actual_min_temp": 43,
    "actual_max_temp": 54,
    "actual_precipitation": 0.08,
    "location": "MDW"
  },
  {
    "": 2837,
    "date": "2015-4-9",
    "actual_mean_temp": 60,
    "actual_min_temp": 46,
    "actual_max_temp": 74,
    "actual_precipitation": 0.95,
    "location": "MDW"
  },
  {
    "": 2838,
    "date": "2015-4-10",
    "actual_mean_temp": 54,
    "actual_min_temp": 42,
    "actual_max_temp": 65,
    "actual_precipitation": 0,
    "location": "MDW"
  },
  {
    "": 2839,
    "date": "2015-4-11",
    "actual_mean_temp": 52,
    "actual_min_temp": 39,
    "actual_max_temp": 64,
    "actual_precipitation": 0,
    "location": "MDW"
  },
  {
    "": 2840,
    "date": "2015-4-12",
    "actual_mean_temp": 59,
    "actual_min_temp": 47,
    "actual_max_temp": 71,
    "actual_precipitation": 0,
    "location": "MDW"
  },
  {
    "": 2841,
    "date": "2015-4-13",
    "actual_mean_temp": 61,
    "actual_min_temp": 53,
    "actual_max_temp": 69,
    "actual_precipitation": 0.14,
    "location": "MDW"
  },
  {
    "": 2842,
    "date": "2015-4-14",
    "actual_mean_temp": 57,
    "actual_min_temp": 46,
    "actual_max_temp": 67,
    "actual_precipitation": 0,
    "location": "MDW"
  },
  {
    "": 2843,
    "date": "2015-4-15",
    "actual_mean_temp": 56,
    "actual_min_temp": 44,
    "actual_max_temp": 67,
    "actual_precipitation": 0,
    "location": "MDW"
  },
  {
    "": 2844,
    "date": "2015-4-16",
    "actual_mean_temp": 56,
    "actual_min_temp": 47,
    "actual_max_temp": 64,
    "actual_precipitation": 0.34,
    "location": "MDW"
  },
  {
    "": 2845,
    "date": "2015-4-17",
    "actual_mean_temp": 65,
    "actual_min_temp": 49,
    "actual_max_temp": 80,
    "actual_precipitation": 0,
    "location": "MDW"
  },
  {
    "": 2846,
    "date": "2015-4-18",
    "actual_mean_temp": 59,
    "actual_min_temp": 50,
    "actual_max_temp": 68,
    "actual_precipitation": 0,
    "location": "MDW"
  },
  {
    "": 2847,
    "date": "2015-4-19",
    "actual_mean_temp": 60,
    "actual_min_temp": 51,
    "actual_max_temp": 69,
    "actual_precipitation": 0.42,
    "location": "MDW"
  },
  {
    "": 2848,
    "date": "2015-4-20",
    "actual_mean_temp": 50,
    "actual_min_temp": 43,
    "actual_max_temp": 56,
    "actual_precipitation": 0,
    "location": "MDW"
  },
  {
    "": 2849,
    "date": "2015-4-21",
    "actual_mean_temp": 50,
    "actual_min_temp": 41,
    "actual_max_temp": 58,
    "actual_precipitation": 0,
    "location": "MDW"
  },
  {
    "": 2850,
    "date": "2015-4-22",
    "actual_mean_temp": 43,
    "actual_min_temp": 37,
    "actual_max_temp": 49,
    "actual_precipitation": 0,
    "location": "MDW"
  },
  {
    "": 2851,
    "date": "2015-4-23",
    "actual_mean_temp": 45,
    "actual_min_temp": 34,
    "actual_max_temp": 56,
    "actual_precipitation": 0,
    "location": "MDW"
  },
  {
    "": 2852,
    "date": "2015-4-24",
    "actual_mean_temp": 48,
    "actual_min_temp": 35,
    "actual_max_temp": 60,
    "actual_precipitation": 0.29,
    "location": "MDW"
  },
  {
    "": 2853,
    "date": "2015-4-25",
    "actual_mean_temp": 45,
    "actual_min_temp": 40,
    "actual_max_temp": 49,
    "actual_precipitation": 0.34,
    "location": "MDW"
  },
  {
    "": 2854,
    "date": "2015-4-26",
    "actual_mean_temp": 48,
    "actual_min_temp": 39,
    "actual_max_temp": 57,
    "actual_precipitation": 0,
    "location": "MDW"
  },
  {
    "": 2855,
    "date": "2015-4-27",
    "actual_mean_temp": 50,
    "actual_min_temp": 43,
    "actual_max_temp": 56,
    "actual_precipitation": 0,
    "location": "MDW"
  },
  {
    "": 2856,
    "date": "2015-4-28",
    "actual_mean_temp": 49,
    "actual_min_temp": 38,
    "actual_max_temp": 60,
    "actual_precipitation": 0,
    "location": "MDW"
  },
  {
    "": 2857,
    "date": "2015-4-29",
    "actual_mean_temp": 53,
    "actual_min_temp": 42,
    "actual_max_temp": 64,
    "actual_precipitation": 0,
    "location": "MDW"
  },
  {
    "": 2858,
    "date": "2015-4-30",
    "actual_mean_temp": 47,
    "actual_min_temp": 42,
    "actual_max_temp": 52,
    "actual_precipitation": 0,
    "location": "MDW"
  },
  {
    "": 2859,
    "date": "2015-5-1",
    "actual_mean_temp": 53,
    "actual_min_temp": 40,
    "actual_max_temp": 65,
    "actual_precipitation": 0,
    "location": "MDW"
  },
  {
    "": 2860,
    "date": "2015-5-2",
    "actual_mean_temp": 66,
    "actual_min_temp": 53,
    "actual_max_temp": 79,
    "actual_precipitation": 0,
    "location": "MDW"
  },
  {
    "": 2861,
    "date": "2015-5-3",
    "actual_mean_temp": 71,
    "actual_min_temp": 60,
    "actual_max_temp": 82,
    "actual_precipitation": 0.2,
    "location": "MDW"
  },
  {
    "": 2862,
    "date": "2015-5-4",
    "actual_mean_temp": 66,
    "actual_min_temp": 57,
    "actual_max_temp": 74,
    "actual_precipitation": 0,
    "location": "MDW"
  },
  {
    "": 2863,
    "date": "2015-5-5",
    "actual_mean_temp": 56,
    "actual_min_temp": 51,
    "actual_max_temp": 60,
    "actual_precipitation": 0.79,
    "location": "MDW"
  },
  {
    "": 2864,
    "date": "2015-5-6",
    "actual_mean_temp": 67,
    "actual_min_temp": 51,
    "actual_max_temp": 82,
    "actual_precipitation": 0,
    "location": "MDW"
  },
  {
    "": 2865,
    "date": "2015-5-7",
    "actual_mean_temp": 72,
    "actual_min_temp": 57,
    "actual_max_temp": 87,
    "actual_precipitation": 0,
    "location": "MDW"
  },
  {
    "": 2866,
    "date": "2015-5-8",
    "actual_mean_temp": 75,
    "actual_min_temp": 66,
    "actual_max_temp": 84,
    "actual_precipitation": 0.28,
    "location": "MDW"
  },
  {
    "": 2867,
    "date": "2015-5-9",
    "actual_mean_temp": 58,
    "actual_min_temp": 49,
    "actual_max_temp": 67,
    "actual_precipitation": 0.38,
    "location": "MDW"
  },
  {
    "": 2868,
    "date": "2015-5-10",
    "actual_mean_temp": 53,
    "actual_min_temp": 47,
    "actual_max_temp": 58,
    "actual_precipitation": 0.16,
    "location": "MDW"
  },
  {
    "": 2869,
    "date": "2015-5-11",
    "actual_mean_temp": 61,
    "actual_min_temp": 50,
    "actual_max_temp": 71,
    "actual_precipitation": 0.14,
    "location": "MDW"
  },
  {
    "": 2870,
    "date": "2015-5-12",
    "actual_mean_temp": 53,
    "actual_min_temp": 47,
    "actual_max_temp": 58,
    "actual_precipitation": 0,
    "location": "MDW"
  },
  {
    "": 2871,
    "date": "2015-5-13",
    "actual_mean_temp": 49,
    "actual_min_temp": 45,
    "actual_max_temp": 53,
    "actual_precipitation": 0,
    "location": "MDW"
  },
  {
    "": 2872,
    "date": "2015-5-14",
    "actual_mean_temp": 58,
    "actual_min_temp": 46,
    "actual_max_temp": 69,
    "actual_precipitation": 0.13,
    "location": "MDW"
  },
  {
    "": 2873,
    "date": "2015-5-15",
    "actual_mean_temp": 70,
    "actual_min_temp": 60,
    "actual_max_temp": 79,
    "actual_precipitation": 0.03,
    "location": "MDW"
  },
  {
    "": 2874,
    "date": "2015-5-16",
    "actual_mean_temp": 75,
    "actual_min_temp": 67,
    "actual_max_temp": 82,
    "actual_precipitation": 0,
    "location": "MDW"
  },
  {
    "": 2875,
    "date": "2015-5-17",
    "actual_mean_temp": 77,
    "actual_min_temp": 69,
    "actual_max_temp": 84,
    "actual_precipitation": 0,
    "location": "MDW"
  },
  {
    "": 2876,
    "date": "2015-5-18",
    "actual_mean_temp": 66,
    "actual_min_temp": 51,
    "actual_max_temp": 81,
    "actual_precipitation": 0,
    "location": "MDW"
  },
  {
    "": 2877,
    "date": "2015-5-19",
    "actual_mean_temp": 49,
    "actual_min_temp": 44,
    "actual_max_temp": 54,
    "actual_precipitation": 0,
    "location": "MDW"
  },
  {
    "": 2878,
    "date": "2015-5-20",
    "actual_mean_temp": 47,
    "actual_min_temp": 43,
    "actual_max_temp": 51,
    "actual_precipitation": 0.02,
    "location": "MDW"
  },
  {
    "": 2879,
    "date": "2015-5-21",
    "actual_mean_temp": 59,
    "actual_min_temp": 47,
    "actual_max_temp": 70,
    "actual_precipitation": 0,
    "location": "MDW"
  },
  {
    "": 2880,
    "date": "2015-5-22",
    "actual_mean_temp": 59,
    "actual_min_temp": 50,
    "actual_max_temp": 68,
    "actual_precipitation": 0,
    "location": "MDW"
  },
  {
    "": 2881,
    "date": "2015-5-23",
    "actual_mean_temp": 68,
    "actual_min_temp": 53,
    "actual_max_temp": 83,
    "actual_precipitation": 0,
    "location": "MDW"
  },
  {
    "": 2882,
    "date": "2015-5-24",
    "actual_mean_temp": 69,
    "actual_min_temp": 62,
    "actual_max_temp": 76,
    "actual_precipitation": 0.44,
    "location": "MDW"
  },
  {
    "": 2883,
    "date": "2015-5-25",
    "actual_mean_temp": 75,
    "actual_min_temp": 68,
    "actual_max_temp": 81,
    "actual_precipitation": 0.06,
    "location": "MDW"
  },
  {
    "": 2884,
    "date": "2015-5-26",
    "actual_mean_temp": 73,
    "actual_min_temp": 69,
    "actual_max_temp": 77,
    "actual_precipitation": 0.42,
    "location": "MDW"
  },
  {
    "": 2885,
    "date": "2015-5-27",
    "actual_mean_temp": 71,
    "actual_min_temp": 64,
    "actual_max_temp": 77,
    "actual_precipitation": 0.06,
    "location": "MDW"
  },
  {
    "": 2886,
    "date": "2015-5-28",
    "actual_mean_temp": 72,
    "actual_min_temp": 60,
    "actual_max_temp": 84,
    "actual_precipitation": 0,
    "location": "MDW"
  },
  {
    "": 2887,
    "date": "2015-5-29",
    "actual_mean_temp": 78,
    "actual_min_temp": 71,
    "actual_max_temp": 84,
    "actual_precipitation": 0.18,
    "location": "MDW"
  },
  {
    "": 2888,
    "date": "2015-5-30",
    "actual_mean_temp": 59,
    "actual_min_temp": 45,
    "actual_max_temp": 73,
    "actual_precipitation": 0.79,
    "location": "MDW"
  },
  {
    "": 2889,
    "date": "2015-5-31",
    "actual_mean_temp": 51,
    "actual_min_temp": 44,
    "actual_max_temp": 57,
    "actual_precipitation": 0.05,
    "location": "MDW"
  },
  {
    "": 2890,
    "date": "2015-6-1",
    "actual_mean_temp": 55,
    "actual_min_temp": 48,
    "actual_max_temp": 62,
    "actual_precipitation": 0,
    "location": "MDW"
  },
  {
    "": 2891,
    "date": "2015-6-2",
    "actual_mean_temp": 58,
    "actual_min_temp": 45,
    "actual_max_temp": 71,
    "actual_precipitation": 0,
    "location": "MDW"
  },
  {
    "": 2892,
    "date": "2015-6-3",
    "actual_mean_temp": 67,
    "actual_min_temp": 55,
    "actual_max_temp": 79,
    "actual_precipitation": 0,
    "location": "MDW"
  },
  {
    "": 2893,
    "date": "2015-6-4",
    "actual_mean_temp": 72,
    "actual_min_temp": 62,
    "actual_max_temp": 82,
    "actual_precipitation": 0,
    "location": "MDW"
  },
  {
    "": 2894,
    "date": "2015-6-5",
    "actual_mean_temp": 65,
    "actual_min_temp": 56,
    "actual_max_temp": 73,
    "actual_precipitation": 0,
    "location": "MDW"
  },
  {
    "": 2895,
    "date": "2015-6-6",
    "actual_mean_temp": 64,
    "actual_min_temp": 54,
    "actual_max_temp": 73,
    "actual_precipitation": 0,
    "location": "MDW"
  },
  {
    "": 2896,
    "date": "2015-6-7",
    "actual_mean_temp": 72,
    "actual_min_temp": 60,
    "actual_max_temp": 83,
    "actual_precipitation": 0.44,
    "location": "MDW"
  },
  {
    "": 2897,
    "date": "2015-6-8",
    "actual_mean_temp": 75,
    "actual_min_temp": 63,
    "actual_max_temp": 86,
    "actual_precipitation": 0.1,
    "location": "MDW"
  },
  {
    "": 2898,
    "date": "2015-6-9",
    "actual_mean_temp": 74,
    "actual_min_temp": 61,
    "actual_max_temp": 87,
    "actual_precipitation": 0,
    "location": "MDW"
  },
  {
    "": 2899,
    "date": "2015-6-10",
    "actual_mean_temp": 83,
    "actual_min_temp": 71,
    "actual_max_temp": 94,
    "actual_precipitation": 0.09,
    "location": "MDW"
  },
  {
    "": 2900,
    "date": "2015-6-11",
    "actual_mean_temp": 72,
    "actual_min_temp": 65,
    "actual_max_temp": 79,
    "actual_precipitation": 0.2,
    "location": "MDW"
  },
  {
    "": 2901,
    "date": "2015-6-12",
    "actual_mean_temp": 66,
    "actual_min_temp": 58,
    "actual_max_temp": 74,
    "actual_precipitation": 0.17,
    "location": "MDW"
  },
  {
    "": 2902,
    "date": "2015-6-13",
    "actual_mean_temp": 73,
    "actual_min_temp": 58,
    "actual_max_temp": 88,
    "actual_precipitation": 0.19,
    "location": "MDW"
  },
  {
    "": 2903,
    "date": "2015-6-14",
    "actual_mean_temp": 78,
    "actual_min_temp": 70,
    "actual_max_temp": 85,
    "actual_precipitation": 0.98,
    "location": "MDW"
  },
  {
    "": 2904,
    "date": "2015-6-15",
    "actual_mean_temp": 77,
    "actual_min_temp": 71,
    "actual_max_temp": 83,
    "actual_precipitation": 0.24,
    "location": "MDW"
  },
  {
    "": 2905,
    "date": "2015-6-16",
    "actual_mean_temp": 67,
    "actual_min_temp": 60,
    "actual_max_temp": 74,
    "actual_precipitation": 0,
    "location": "MDW"
  },
  {
    "": 2906,
    "date": "2015-6-17",
    "actual_mean_temp": 65,
    "actual_min_temp": 58,
    "actual_max_temp": 72,
    "actual_precipitation": 0.33,
    "location": "MDW"
  },
  {
    "": 2907,
    "date": "2015-6-18",
    "actual_mean_temp": 71,
    "actual_min_temp": 59,
    "actual_max_temp": 82,
    "actual_precipitation": 0.48,
    "location": "MDW"
  },
  {
    "": 2908,
    "date": "2015-6-19",
    "actual_mean_temp": 63,
    "actual_min_temp": 57,
    "actual_max_temp": 68,
    "actual_precipitation": 0,
    "location": "MDW"
  },
  {
    "": 2909,
    "date": "2015-6-20",
    "actual_mean_temp": 70,
    "actual_min_temp": 57,
    "actual_max_temp": 82,
    "actual_precipitation": 0.22,
    "location": "MDW"
  },
  {
    "": 2910,
    "date": "2015-6-21",
    "actual_mean_temp": 79,
    "actual_min_temp": 70,
    "actual_max_temp": 87,
    "actual_precipitation": 0,
    "location": "MDW"
  },
  {
    "": 2911,
    "date": "2015-6-22",
    "actual_mean_temp": 79,
    "actual_min_temp": 72,
    "actual_max_temp": 85,
    "actual_precipitation": 0.04,
    "location": "MDW"
  },
  {
    "": 2912,
    "date": "2015-6-23",
    "actual_mean_temp": 74,
    "actual_min_temp": 67,
    "actual_max_temp": 81,
    "actual_precipitation": 0,
    "location": "MDW"
  },
  {
    "": 2913,
    "date": "2015-6-24",
    "actual_mean_temp": 73,
    "actual_min_temp": 66,
    "actual_max_temp": 79,
    "actual_precipitation": 0,
    "location": "MDW"
  },
  {
    "": 2914,
    "date": "2015-6-25",
    "actual_mean_temp": 74,
    "actual_min_temp": 65,
    "actual_max_temp": 83,
    "actual_precipitation": 0.16,
    "location": "MDW"
  },
  {
    "": 2915,
    "date": "2015-6-26",
    "actual_mean_temp": 66,
    "actual_min_temp": 61,
    "actual_max_temp": 70,
    "actual_precipitation": 0.7,
    "location": "MDW"
  },
  {
    "": 2916,
    "date": "2015-6-27",
    "actual_mean_temp": 68,
    "actual_min_temp": 59,
    "actual_max_temp": 77,
    "actual_precipitation": 0,
    "location": "MDW"
  },
  {
    "": 2917,
    "date": "2015-6-28",
    "actual_mean_temp": 70,
    "actual_min_temp": 58,
    "actual_max_temp": 81,
    "actual_precipitation": 0,
    "location": "MDW"
  },
  {
    "": 2918,
    "date": "2015-6-29",
    "actual_mean_temp": 71,
    "actual_min_temp": 66,
    "actual_max_temp": 75,
    "actual_precipitation": 0.03,
    "location": "MDW"
  },
  {
    "": 2919,
    "date": "2015-6-30",
    "actual_mean_temp": 71,
    "actual_min_temp": 61,
    "actual_max_temp": 80,
    "actual_precipitation": 0,
    "location": "MDW"
  },
  {
    "": 2920,
    "date": "2014-7-1",
    "actual_mean_temp": 83,
    "actual_min_temp": 72,
    "actual_max_temp": 93,
    "actual_precipitation": 0,
    "location": "PHL"
  },
  {
    "": 2921,
    "date": "2014-7-2",
    "actual_mean_temp": 86,
    "actual_min_temp": 75,
    "actual_max_temp": 96,
    "actual_precipitation": 0.21,
    "location": "PHL"
  },
  {
    "": 2922,
    "date": "2014-7-3",
    "actual_mean_temp": 83,
    "actual_min_temp": 74,
    "actual_max_temp": 92,
    "actual_precipitation": 0.09,
    "location": "PHL"
  },
  {
    "": 2923,
    "date": "2014-7-4",
    "actual_mean_temp": 73,
    "actual_min_temp": 68,
    "actual_max_temp": 78,
    "actual_precipitation": 0.04,
    "location": "PHL"
  },
  {
    "": 2924,
    "date": "2014-7-5",
    "actual_mean_temp": 74,
    "actual_min_temp": 64,
    "actual_max_temp": 83,
    "actual_precipitation": 0,
    "location": "PHL"
  },
  {
    "": 2925,
    "date": "2014-7-6",
    "actual_mean_temp": 75,
    "actual_min_temp": 64,
    "actual_max_temp": 86,
    "actual_precipitation": 0,
    "location": "PHL"
  },
  {
    "": 2926,
    "date": "2014-7-7",
    "actual_mean_temp": 84,
    "actual_min_temp": 74,
    "actual_max_temp": 93,
    "actual_precipitation": 0,
    "location": "PHL"
  },
  {
    "": 2927,
    "date": "2014-7-8",
    "actual_mean_temp": 84,
    "actual_min_temp": 72,
    "actual_max_temp": 95,
    "actual_precipitation": 0.17,
    "location": "PHL"
  },
  {
    "": 2928,
    "date": "2014-7-9",
    "actual_mean_temp": 80,
    "actual_min_temp": 71,
    "actual_max_temp": 89,
    "actual_precipitation": 0,
    "location": "PHL"
  },
  {
    "": 2929,
    "date": "2014-7-10",
    "actual_mean_temp": 81,
    "actual_min_temp": 74,
    "actual_max_temp": 87,
    "actual_precipitation": 0,
    "location": "PHL"
  },
  {
    "": 2930,
    "date": "2014-7-11",
    "actual_mean_temp": 80,
    "actual_min_temp": 70,
    "actual_max_temp": 90,
    "actual_precipitation": 0,
    "location": "PHL"
  },
  {
    "": 2931,
    "date": "2014-7-12",
    "actual_mean_temp": 80,
    "actual_min_temp": 70,
    "actual_max_temp": 89,
    "actual_precipitation": 0,
    "location": "PHL"
  },
  {
    "": 2932,
    "date": "2014-7-13",
    "actual_mean_temp": 82,
    "actual_min_temp": 72,
    "actual_max_temp": 91,
    "actual_precipitation": 0.05,
    "location": "PHL"
  },
  {
    "": 2933,
    "date": "2014-7-14",
    "actual_mean_temp": 82,
    "actual_min_temp": 74,
    "actual_max_temp": 90,
    "actual_precipitation": 1.18,
    "location": "PHL"
  },
  {
    "": 2934,
    "date": "2014-7-15",
    "actual_mean_temp": 82,
    "actual_min_temp": 73,
    "actual_max_temp": 91,
    "actual_precipitation": 0.81,
    "location": "PHL"
  },
  {
    "": 2935,
    "date": "2014-7-16",
    "actual_mean_temp": 78,
    "actual_min_temp": 72,
    "actual_max_temp": 83,
    "actual_precipitation": 0,
    "location": "PHL"
  },
  {
    "": 2936,
    "date": "2014-7-17",
    "actual_mean_temp": 75,
    "actual_min_temp": 65,
    "actual_max_temp": 84,
    "actual_precipitation": 0,
    "location": "PHL"
  },
  {
    "": 2937,
    "date": "2014-7-18",
    "actual_mean_temp": 75,
    "actual_min_temp": 65,
    "actual_max_temp": 84,
    "actual_precipitation": 0,
    "location": "PHL"
  },
  {
    "": 2938,
    "date": "2014-7-19",
    "actual_mean_temp": 75,
    "actual_min_temp": 68,
    "actual_max_temp": 81,
    "actual_precipitation": 0,
    "location": "PHL"
  },
  {
    "": 2939,
    "date": "2014-7-20",
    "actual_mean_temp": 76,
    "actual_min_temp": 69,
    "actual_max_temp": 82,
    "actual_precipitation": 0,
    "location": "PHL"
  },
  {
    "": 2940,
    "date": "2014-7-21",
    "actual_mean_temp": 76,
    "actual_min_temp": 66,
    "actual_max_temp": 86,
    "actual_precipitation": 0,
    "location": "PHL"
  },
  {
    "": 2941,
    "date": "2014-7-22",
    "actual_mean_temp": 79,
    "actual_min_temp": 70,
    "actual_max_temp": 88,
    "actual_precipitation": 0,
    "location": "PHL"
  },
  {
    "": 2942,
    "date": "2014-7-23",
    "actual_mean_temp": 83,
    "actual_min_temp": 72,
    "actual_max_temp": 93,
    "actual_precipitation": 0.05,
    "location": "PHL"
  },
  {
    "": 2943,
    "date": "2014-7-24",
    "actual_mean_temp": 77,
    "actual_min_temp": 70,
    "actual_max_temp": 83,
    "actual_precipitation": 0,
    "location": "PHL"
  },
  {
    "": 2944,
    "date": "2014-7-25",
    "actual_mean_temp": 74,
    "actual_min_temp": 63,
    "actual_max_temp": 84,
    "actual_precipitation": 0,
    "location": "PHL"
  },
  {
    "": 2945,
    "date": "2014-7-26",
    "actual_mean_temp": 75,
    "actual_min_temp": 69,
    "actual_max_temp": 81,
    "actual_precipitation": 0.22,
    "location": "PHL"
  },
  {
    "": 2946,
    "date": "2014-7-27",
    "actual_mean_temp": 81,
    "actual_min_temp": 70,
    "actual_max_temp": 91,
    "actual_precipitation": 1.25,
    "location": "PHL"
  },
  {
    "": 2947,
    "date": "2014-7-28",
    "actual_mean_temp": 77,
    "actual_min_temp": 69,
    "actual_max_temp": 84,
    "actual_precipitation": 0.23,
    "location": "PHL"
  },
  {
    "": 2948,
    "date": "2014-7-29",
    "actual_mean_temp": 70,
    "actual_min_temp": 64,
    "actual_max_temp": 76,
    "actual_precipitation": 0,
    "location": "PHL"
  },
  {
    "": 2949,
    "date": "2014-7-30",
    "actual_mean_temp": 71,
    "actual_min_temp": 62,
    "actual_max_temp": 80,
    "actual_precipitation": 0,
    "location": "PHL"
  },
  {
    "": 2950,
    "date": "2014-7-31",
    "actual_mean_temp": 76,
    "actual_min_temp": 65,
    "actual_max_temp": 86,
    "actual_precipitation": 0,
    "location": "PHL"
  },
  {
    "": 2951,
    "date": "2014-8-1",
    "actual_mean_temp": 77,
    "actual_min_temp": 70,
    "actual_max_temp": 83,
    "actual_precipitation": 0.19,
    "location": "PHL"
  },
  {
    "": 2952,
    "date": "2014-8-2",
    "actual_mean_temp": 73,
    "actual_min_temp": 68,
    "actual_max_temp": 77,
    "actual_precipitation": 0.36,
    "location": "PHL"
  },
  {
    "": 2953,
    "date": "2014-8-3",
    "actual_mean_temp": 72,
    "actual_min_temp": 67,
    "actual_max_temp": 77,
    "actual_precipitation": 0.23,
    "location": "PHL"
  },
  {
    "": 2954,
    "date": "2014-8-4",
    "actual_mean_temp": 78,
    "actual_min_temp": 71,
    "actual_max_temp": 84,
    "actual_precipitation": 0,
    "location": "PHL"
  },
  {
    "": 2955,
    "date": "2014-8-5",
    "actual_mean_temp": 80,
    "actual_min_temp": 69,
    "actual_max_temp": 90,
    "actual_precipitation": 0,
    "location": "PHL"
  },
  {
    "": 2956,
    "date": "2014-8-6",
    "actual_mean_temp": 76,
    "actual_min_temp": 69,
    "actual_max_temp": 82,
    "actual_precipitation": 0,
    "location": "PHL"
  },
  {
    "": 2957,
    "date": "2014-8-7",
    "actual_mean_temp": 75,
    "actual_min_temp": 66,
    "actual_max_temp": 84,
    "actual_precipitation": 0,
    "location": "PHL"
  },
  {
    "": 2958,
    "date": "2014-8-8",
    "actual_mean_temp": 73,
    "actual_min_temp": 63,
    "actual_max_temp": 82,
    "actual_precipitation": 0,
    "location": "PHL"
  },
  {
    "": 2959,
    "date": "2014-8-9",
    "actual_mean_temp": 77,
    "actual_min_temp": 67,
    "actual_max_temp": 86,
    "actual_precipitation": 0,
    "location": "PHL"
  },
  {
    "": 2960,
    "date": "2014-8-10",
    "actual_mean_temp": 78,
    "actual_min_temp": 67,
    "actual_max_temp": 88,
    "actual_precipitation": 0,
    "location": "PHL"
  },
  {
    "": 2961,
    "date": "2014-8-11",
    "actual_mean_temp": 76,
    "actual_min_temp": 66,
    "actual_max_temp": 85,
    "actual_precipitation": 0,
    "location": "PHL"
  },
  {
    "": 2962,
    "date": "2014-8-12",
    "actual_mean_temp": 74,
    "actual_min_temp": 68,
    "actual_max_temp": 79,
    "actual_precipitation": 1.08,
    "location": "PHL"
  },
  {
    "": 2963,
    "date": "2014-8-13",
    "actual_mean_temp": 77,
    "actual_min_temp": 69,
    "actual_max_temp": 85,
    "actual_precipitation": 0,
    "location": "PHL"
  },
  {
    "": 2964,
    "date": "2014-8-14",
    "actual_mean_temp": 71,
    "actual_min_temp": 62,
    "actual_max_temp": 80,
    "actual_precipitation": 0.25,
    "location": "PHL"
  },
  {
    "": 2965,
    "date": "2014-8-15",
    "actual_mean_temp": 69,
    "actual_min_temp": 60,
    "actual_max_temp": 77,
    "actual_precipitation": 0,
    "location": "PHL"
  },
  {
    "": 2966,
    "date": "2014-8-16",
    "actual_mean_temp": 71,
    "actual_min_temp": 61,
    "actual_max_temp": 81,
    "actual_precipitation": 0,
    "location": "PHL"
  },
  {
    "": 2967,
    "date": "2014-8-17",
    "actual_mean_temp": 75,
    "actual_min_temp": 65,
    "actual_max_temp": 84,
    "actual_precipitation": 0,
    "location": "PHL"
  },
  {
    "": 2968,
    "date": "2014-8-18",
    "actual_mean_temp": 73,
    "actual_min_temp": 63,
    "actual_max_temp": 83,
    "actual_precipitation": 0,
    "location": "PHL"
  },
  {
    "": 2969,
    "date": "2014-8-19",
    "actual_mean_temp": 77,
    "actual_min_temp": 66,
    "actual_max_temp": 87,
    "actual_precipitation": 0,
    "location": "PHL"
  },
  {
    "": 2970,
    "date": "2014-8-20",
    "actual_mean_temp": 79,
    "actual_min_temp": 71,
    "actual_max_temp": 86,
    "actual_precipitation": 0,
    "location": "PHL"
  },
  {
    "": 2971,
    "date": "2014-8-21",
    "actual_mean_temp": 76,
    "actual_min_temp": 68,
    "actual_max_temp": 83,
    "actual_precipitation": 0,
    "location": "PHL"
  },
  {
    "": 2972,
    "date": "2014-8-22",
    "actual_mean_temp": 74,
    "actual_min_temp": 68,
    "actual_max_temp": 79,
    "actual_precipitation": 0.08,
    "location": "PHL"
  },
  {
    "": 2973,
    "date": "2014-8-23",
    "actual_mean_temp": 69,
    "actual_min_temp": 64,
    "actual_max_temp": 74,
    "actual_precipitation": 0.25,
    "location": "PHL"
  },
  {
    "": 2974,
    "date": "2014-8-24",
    "actual_mean_temp": 74,
    "actual_min_temp": 64,
    "actual_max_temp": 83,
    "actual_precipitation": 0,
    "location": "PHL"
  },
  {
    "": 2975,
    "date": "2014-8-25",
    "actual_mean_temp": 75,
    "actual_min_temp": 63,
    "actual_max_temp": 86,
    "actual_precipitation": 0,
    "location": "PHL"
  },
  {
    "": 2976,
    "date": "2014-8-26",
    "actual_mean_temp": 80,
    "actual_min_temp": 69,
    "actual_max_temp": 90,
    "actual_precipitation": 0,
    "location": "PHL"
  },
  {
    "": 2977,
    "date": "2014-8-27",
    "actual_mean_temp": 78,
    "actual_min_temp": 67,
    "actual_max_temp": 89,
    "actual_precipitation": 0,
    "location": "PHL"
  },
  {
    "": 2978,
    "date": "2014-8-28",
    "actual_mean_temp": 74,
    "actual_min_temp": 66,
    "actual_max_temp": 81,
    "actual_precipitation": 0,
    "location": "PHL"
  },
  {
    "": 2979,
    "date": "2014-8-29",
    "actual_mean_temp": 71,
    "actual_min_temp": 61,
    "actual_max_temp": 81,
    "actual_precipitation": 0,
    "location": "PHL"
  },
  {
    "": 2980,
    "date": "2014-8-30",
    "actual_mean_temp": 71,
    "actual_min_temp": 60,
    "actual_max_temp": 81,
    "actual_precipitation": 0,
    "location": "PHL"
  },
  {
    "": 2981,
    "date": "2014-8-31",
    "actual_mean_temp": 83,
    "actual_min_temp": 72,
    "actual_max_temp": 93,
    "actual_precipitation": 1.11,
    "location": "PHL"
  },
  {
    "": 2982,
    "date": "2014-9-1",
    "actual_mean_temp": 82,
    "actual_min_temp": 74,
    "actual_max_temp": 89,
    "actual_precipitation": 0.01,
    "location": "PHL"
  },
  {
    "": 2983,
    "date": "2014-9-2",
    "actual_mean_temp": 84,
    "actual_min_temp": 74,
    "actual_max_temp": 93,
    "actual_precipitation": 0.18,
    "location": "PHL"
  },
  {
    "": 2984,
    "date": "2014-9-3",
    "actual_mean_temp": 78,
    "actual_min_temp": 71,
    "actual_max_temp": 85,
    "actual_precipitation": 0,
    "location": "PHL"
  },
  {
    "": 2985,
    "date": "2014-9-4",
    "actual_mean_temp": 78,
    "actual_min_temp": 68,
    "actual_max_temp": 87,
    "actual_precipitation": 0,
    "location": "PHL"
  },
  {
    "": 2986,
    "date": "2014-9-5",
    "actual_mean_temp": 81,
    "actual_min_temp": 72,
    "actual_max_temp": 89,
    "actual_precipitation": 0,
    "location": "PHL"
  },
  {
    "": 2987,
    "date": "2014-9-6",
    "actual_mean_temp": 83,
    "actual_min_temp": 72,
    "actual_max_temp": 93,
    "actual_precipitation": 0.01,
    "location": "PHL"
  },
  {
    "": 2988,
    "date": "2014-9-7",
    "actual_mean_temp": 75,
    "actual_min_temp": 66,
    "actual_max_temp": 83,
    "actual_precipitation": 0,
    "location": "PHL"
  },
  {
    "": 2989,
    "date": "2014-9-8",
    "actual_mean_temp": 71,
    "actual_min_temp": 67,
    "actual_max_temp": 75,
    "actual_precipitation": 0,
    "location": "PHL"
  },
  {
    "": 2990,
    "date": "2014-9-9",
    "actual_mean_temp": 72,
    "actual_min_temp": 67,
    "actual_max_temp": 76,
    "actual_precipitation": 0,
    "location": "PHL"
  },
  {
    "": 2991,
    "date": "2014-9-10",
    "actual_mean_temp": 75,
    "actual_min_temp": 67,
    "actual_max_temp": 82,
    "actual_precipitation": 0,
    "location": "PHL"
  },
  {
    "": 2992,
    "date": "2014-9-11",
    "actual_mean_temp": 76,
    "actual_min_temp": 67,
    "actual_max_temp": 84,
    "actual_precipitation": 0,
    "location": "PHL"
  },
  {
    "": 2993,
    "date": "2014-9-12",
    "actual_mean_temp": 71,
    "actual_min_temp": 63,
    "actual_max_temp": 78,
    "actual_precipitation": 0,
    "location": "PHL"
  },
  {
    "": 2994,
    "date": "2014-9-13",
    "actual_mean_temp": 66,
    "actual_min_temp": 59,
    "actual_max_temp": 72,
    "actual_precipitation": 0.36,
    "location": "PHL"
  },
  {
    "": 2995,
    "date": "2014-9-14",
    "actual_mean_temp": 61,
    "actual_min_temp": 53,
    "actual_max_temp": 69,
    "actual_precipitation": 0,
    "location": "PHL"
  },
  {
    "": 2996,
    "date": "2014-9-15",
    "actual_mean_temp": 63,
    "actual_min_temp": 53,
    "actual_max_temp": 72,
    "actual_precipitation": 0,
    "location": "PHL"
  },
  {
    "": 2997,
    "date": "2014-9-16",
    "actual_mean_temp": 67,
    "actual_min_temp": 59,
    "actual_max_temp": 74,
    "actual_precipitation": 0.2,
    "location": "PHL"
  },
  {
    "": 2998,
    "date": "2014-9-17",
    "actual_mean_temp": 66,
    "actual_min_temp": 56,
    "actual_max_temp": 75,
    "actual_precipitation": 0,
    "location": "PHL"
  },
  {
    "": 2999,
    "date": "2014-9-18",
    "actual_mean_temp": 65,
    "actual_min_temp": 56,
    "actual_max_temp": 74,
    "actual_precipitation": 0,
    "location": "PHL"
  },
  {
    "": 3000,
    "date": "2014-9-19",
    "actual_mean_temp": 65,
    "actual_min_temp": 58,
    "actual_max_temp": 72,
    "actual_precipitation": 0,
    "location": "PHL"
  },
  {
    "": 3001,
    "date": "2014-9-20",
    "actual_mean_temp": 68,
    "actual_min_temp": 56,
    "actual_max_temp": 79,
    "actual_precipitation": 0,
    "location": "PHL"
  },
  {
    "": 3002,
    "date": "2014-9-21",
    "actual_mean_temp": 72,
    "actual_min_temp": 65,
    "actual_max_temp": 79,
    "actual_precipitation": 0,
    "location": "PHL"
  },
  {
    "": 3003,
    "date": "2014-9-22",
    "actual_mean_temp": 65,
    "actual_min_temp": 57,
    "actual_max_temp": 73,
    "actual_precipitation": 0,
    "location": "PHL"
  },
  {
    "": 3004,
    "date": "2014-9-23",
    "actual_mean_temp": 61,
    "actual_min_temp": 50,
    "actual_max_temp": 72,
    "actual_precipitation": 0,
    "location": "PHL"
  },
  {
    "": 3005,
    "date": "2014-9-24",
    "actual_mean_temp": 64,
    "actual_min_temp": 55,
    "actual_max_temp": 73,
    "actual_precipitation": 0.04,
    "location": "PHL"
  },
  {
    "": 3006,
    "date": "2014-9-25",
    "actual_mean_temp": 62,
    "actual_min_temp": 59,
    "actual_max_temp": 64,
    "actual_precipitation": 0.89,
    "location": "PHL"
  },
  {
    "": 3007,
    "date": "2014-9-26",
    "actual_mean_temp": 67,
    "actual_min_temp": 55,
    "actual_max_temp": 78,
    "actual_precipitation": 0,
    "location": "PHL"
  },
  {
    "": 3008,
    "date": "2014-9-27",
    "actual_mean_temp": 72,
    "actual_min_temp": 59,
    "actual_max_temp": 84,
    "actual_precipitation": 0,
    "location": "PHL"
  },
  {
    "": 3009,
    "date": "2014-9-28",
    "actual_mean_temp": 73,
    "actual_min_temp": 60,
    "actual_max_temp": 86,
    "actual_precipitation": 0,
    "location": "PHL"
  },
  {
    "": 3010,
    "date": "2014-9-29",
    "actual_mean_temp": 70,
    "actual_min_temp": 64,
    "actual_max_temp": 76,
    "actual_precipitation": 0,
    "location": "PHL"
  },
  {
    "": 3011,
    "date": "2014-9-30",
    "actual_mean_temp": 71,
    "actual_min_temp": 63,
    "actual_max_temp": 79,
    "actual_precipitation": 0,
    "location": "PHL"
  },
  {
    "": 3012,
    "date": "2014-10-1",
    "actual_mean_temp": 68,
    "actual_min_temp": 62,
    "actual_max_temp": 73,
    "actual_precipitation": 0,
    "location": "PHL"
  },
  {
    "": 3013,
    "date": "2014-10-2",
    "actual_mean_temp": 68,
    "actual_min_temp": 62,
    "actual_max_temp": 73,
    "actual_precipitation": 0,
    "location": "PHL"
  },
  {
    "": 3014,
    "date": "2014-10-3",
    "actual_mean_temp": 66,
    "actual_min_temp": 59,
    "actual_max_temp": 72,
    "actual_precipitation": 0.06,
    "location": "PHL"
  },
  {
    "": 3015,
    "date": "2014-10-4",
    "actual_mean_temp": 60,
    "actual_min_temp": 50,
    "actual_max_temp": 70,
    "actual_precipitation": 0.17,
    "location": "PHL"
  },
  {
    "": 3016,
    "date": "2014-10-5",
    "actual_mean_temp": 52,
    "actual_min_temp": 43,
    "actual_max_temp": 61,
    "actual_precipitation": 0,
    "location": "PHL"
  },
  {
    "": 3017,
    "date": "2014-10-6",
    "actual_mean_temp": 60,
    "actual_min_temp": 47,
    "actual_max_temp": 72,
    "actual_precipitation": 0,
    "location": "PHL"
  },
  {
    "": 3018,
    "date": "2014-10-7",
    "actual_mean_temp": 67,
    "actual_min_temp": 63,
    "actual_max_temp": 71,
    "actual_precipitation": 0.38,
    "location": "PHL"
  },
  {
    "": 3019,
    "date": "2014-10-8",
    "actual_mean_temp": 66,
    "actual_min_temp": 56,
    "actual_max_temp": 75,
    "actual_precipitation": 0,
    "location": "PHL"
  },
  {
    "": 3020,
    "date": "2014-10-9",
    "actual_mean_temp": 61,
    "actual_min_temp": 51,
    "actual_max_temp": 70,
    "actual_precipitation": 0,
    "location": "PHL"
  },
  {
    "": 3021,
    "date": "2014-10-10",
    "actual_mean_temp": 57,
    "actual_min_temp": 53,
    "actual_max_temp": 61,
    "actual_precipitation": 0,
    "location": "PHL"
  },
  {
    "": 3022,
    "date": "2014-10-11",
    "actual_mean_temp": 54,
    "actual_min_temp": 50,
    "actual_max_temp": 57,
    "actual_precipitation": 0.48,
    "location": "PHL"
  },
  {
    "": 3023,
    "date": "2014-10-12",
    "actual_mean_temp": 55,
    "actual_min_temp": 46,
    "actual_max_temp": 64,
    "actual_precipitation": 0,
    "location": "PHL"
  },
  {
    "": 3024,
    "date": "2014-10-13",
    "actual_mean_temp": 61,
    "actual_min_temp": 56,
    "actual_max_temp": 66,
    "actual_precipitation": 0.02,
    "location": "PHL"
  },
  {
    "": 3025,
    "date": "2014-10-14",
    "actual_mean_temp": 72,
    "actual_min_temp": 65,
    "actual_max_temp": 79,
    "actual_precipitation": 0,
    "location": "PHL"
  },
  {
    "": 3026,
    "date": "2014-10-15",
    "actual_mean_temp": 72,
    "actual_min_temp": 67,
    "actual_max_temp": 77,
    "actual_precipitation": 0.66,
    "location": "PHL"
  },
  {
    "": 3027,
    "date": "2014-10-16",
    "actual_mean_temp": 66,
    "actual_min_temp": 60,
    "actual_max_temp": 72,
    "actual_precipitation": 0.24,
    "location": "PHL"
  },
  {
    "": 3028,
    "date": "2014-10-17",
    "actual_mean_temp": 65,
    "actual_min_temp": 57,
    "actual_max_temp": 73,
    "actual_precipitation": 0,
    "location": "PHL"
  },
  {
    "": 3029,
    "date": "2014-10-18",
    "actual_mean_temp": 63,
    "actual_min_temp": 54,
    "actual_max_temp": 72,
    "actual_precipitation": 0,
    "location": "PHL"
  },
  {
    "": 3030,
    "date": "2014-10-19",
    "actual_mean_temp": 51,
    "actual_min_temp": 45,
    "actual_max_temp": 56,
    "actual_precipitation": 0,
    "location": "PHL"
  },
  {
    "": 3031,
    "date": "2014-10-20",
    "actual_mean_temp": 51,
    "actual_min_temp": 39,
    "actual_max_temp": 63,
    "actual_precipitation": 0,
    "location": "PHL"
  },
  {
    "": 3032,
    "date": "2014-10-21",
    "actual_mean_temp": 61,
    "actual_min_temp": 52,
    "actual_max_temp": 70,
    "actual_precipitation": 0,
    "location": "PHL"
  },
  {
    "": 3033,
    "date": "2014-10-22",
    "actual_mean_temp": 55,
    "actual_min_temp": 52,
    "actual_max_temp": 58,
    "actual_precipitation": 0.44,
    "location": "PHL"
  },
  {
    "": 3034,
    "date": "2014-10-23",
    "actual_mean_temp": 54,
    "actual_min_temp": 51,
    "actual_max_temp": 57,
    "actual_precipitation": 0.05,
    "location": "PHL"
  },
  {
    "": 3035,
    "date": "2014-10-24",
    "actual_mean_temp": 62,
    "actual_min_temp": 53,
    "actual_max_temp": 70,
    "actual_precipitation": 0,
    "location": "PHL"
  },
  {
    "": 3036,
    "date": "2014-10-25",
    "actual_mean_temp": 58,
    "actual_min_temp": 46,
    "actual_max_temp": 70,
    "actual_precipitation": 0,
    "location": "PHL"
  },
  {
    "": 3037,
    "date": "2014-10-26",
    "actual_mean_temp": 59,
    "actual_min_temp": 50,
    "actual_max_temp": 67,
    "actual_precipitation": 0,
    "location": "PHL"
  },
  {
    "": 3038,
    "date": "2014-10-27",
    "actual_mean_temp": 57,
    "actual_min_temp": 46,
    "actual_max_temp": 67,
    "actual_precipitation": 0,
    "location": "PHL"
  },
  {
    "": 3039,
    "date": "2014-10-28",
    "actual_mean_temp": 63,
    "actual_min_temp": 49,
    "actual_max_temp": 76,
    "actual_precipitation": 0,
    "location": "PHL"
  },
  {
    "": 3040,
    "date": "2014-10-29",
    "actual_mean_temp": 60,
    "actual_min_temp": 50,
    "actual_max_temp": 70,
    "actual_precipitation": 0.03,
    "location": "PHL"
  },
  {
    "": 3041,
    "date": "2014-10-30",
    "actual_mean_temp": 53,
    "actual_min_temp": 45,
    "actual_max_temp": 60,
    "actual_precipitation": 0,
    "location": "PHL"
  },
  {
    "": 3042,
    "date": "2014-10-31",
    "actual_mean_temp": 47,
    "actual_min_temp": 40,
    "actual_max_temp": 54,
    "actual_precipitation": 0,
    "location": "PHL"
  },
  {
    "": 3043,
    "date": "2014-11-1",
    "actual_mean_temp": 49,
    "actual_min_temp": 45,
    "actual_max_temp": 52,
    "actual_precipitation": 0.92,
    "location": "PHL"
  },
  {
    "": 3044,
    "date": "2014-11-2",
    "actual_mean_temp": 46,
    "actual_min_temp": 42,
    "actual_max_temp": 49,
    "actual_precipitation": 0,
    "location": "PHL"
  },
  {
    "": 3045,
    "date": "2014-11-3",
    "actual_mean_temp": 48,
    "actual_min_temp": 36,
    "actual_max_temp": 60,
    "actual_precipitation": 0,
    "location": "PHL"
  },
  {
    "": 3046,
    "date": "2014-11-4",
    "actual_mean_temp": 60,
    "actual_min_temp": 49,
    "actual_max_temp": 71,
    "actual_precipitation": 0,
    "location": "PHL"
  },
  {
    "": 3047,
    "date": "2014-11-5",
    "actual_mean_temp": 61,
    "actual_min_temp": 52,
    "actual_max_temp": 69,
    "actual_precipitation": 0.01,
    "location": "PHL"
  },
  {
    "": 3048,
    "date": "2014-11-6",
    "actual_mean_temp": 53,
    "actual_min_temp": 49,
    "actual_max_temp": 56,
    "actual_precipitation": 0.52,
    "location": "PHL"
  },
  {
    "": 3049,
    "date": "2014-11-7",
    "actual_mean_temp": 46,
    "actual_min_temp": 38,
    "actual_max_temp": 53,
    "actual_precipitation": 0,
    "location": "PHL"
  },
  {
    "": 3050,
    "date": "2014-11-8",
    "actual_mean_temp": 42,
    "actual_min_temp": 34,
    "actual_max_temp": 50,
    "actual_precipitation": 0,
    "location": "PHL"
  },
  {
    "": 3051,
    "date": "2014-11-9",
    "actual_mean_temp": 50,
    "actual_min_temp": 42,
    "actual_max_temp": 57,
    "actual_precipitation": 0,
    "location": "PHL"
  },
  {
    "": 3052,
    "date": "2014-11-10",
    "actual_mean_temp": 50,
    "actual_min_temp": 37,
    "actual_max_temp": 63,
    "actual_precipitation": 0,
    "location": "PHL"
  },
  {
    "": 3053,
    "date": "2014-11-11",
    "actual_mean_temp": 57,
    "actual_min_temp": 43,
    "actual_max_temp": 70,
    "actual_precipitation": 0,
    "location": "PHL"
  },
  {
    "": 3054,
    "date": "2014-11-12",
    "actual_mean_temp": 58,
    "actual_min_temp": 46,
    "actual_max_temp": 70,
    "actual_precipitation": 0,
    "location": "PHL"
  },
  {
    "": 3055,
    "date": "2014-11-13",
    "actual_mean_temp": 41,
    "actual_min_temp": 35,
    "actual_max_temp": 47,
    "actual_precipitation": 0.16,
    "location": "PHL"
  },
  {
    "": 3056,
    "date": "2014-11-14",
    "actual_mean_temp": 39,
    "actual_min_temp": 35,
    "actual_max_temp": 43,
    "actual_precipitation": 0,
    "location": "PHL"
  },
  {
    "": 3057,
    "date": "2014-11-15",
    "actual_mean_temp": 38,
    "actual_min_temp": 32,
    "actual_max_temp": 44,
    "actual_precipitation": 0,
    "location": "PHL"
  },
  {
    "": 3058,
    "date": "2014-11-16",
    "actual_mean_temp": 39,
    "actual_min_temp": 33,
    "actual_max_temp": 45,
    "actual_precipitation": 0.09,
    "location": "PHL"
  },
  {
    "": 3059,
    "date": "2014-11-17",
    "actual_mean_temp": 46,
    "actual_min_temp": 40,
    "actual_max_temp": 51,
    "actual_precipitation": 1.05,
    "location": "PHL"
  },
  {
    "": 3060,
    "date": "2014-11-18",
    "actual_mean_temp": 34,
    "actual_min_temp": 24,
    "actual_max_temp": 44,
    "actual_precipitation": 0,
    "location": "PHL"
  },
  {
    "": 3061,
    "date": "2014-11-19",
    "actual_mean_temp": 28,
    "actual_min_temp": 20,
    "actual_max_temp": 36,
    "actual_precipitation": 0,
    "location": "PHL"
  },
  {
    "": 3062,
    "date": "2014-11-20",
    "actual_mean_temp": 41,
    "actual_min_temp": 32,
    "actual_max_temp": 50,
    "actual_precipitation": 0,
    "location": "PHL"
  },
  {
    "": 3063,
    "date": "2014-11-21",
    "actual_mean_temp": 32,
    "actual_min_temp": 27,
    "actual_max_temp": 37,
    "actual_precipitation": 0,
    "location": "PHL"
  },
  {
    "": 3064,
    "date": "2014-11-22",
    "actual_mean_temp": 35,
    "actual_min_temp": 23,
    "actual_max_temp": 46,
    "actual_precipitation": 0,
    "location": "PHL"
  },
  {
    "": 3065,
    "date": "2014-11-23",
    "actual_mean_temp": 48,
    "actual_min_temp": 38,
    "actual_max_temp": 57,
    "actual_precipitation": 0,
    "location": "PHL"
  },
  {
    "": 3066,
    "date": "2014-11-24",
    "actual_mean_temp": 64,
    "actual_min_temp": 56,
    "actual_max_temp": 72,
    "actual_precipitation": 0.37,
    "location": "PHL"
  },
  {
    "": 3067,
    "date": "2014-11-25",
    "actual_mean_temp": 58,
    "actual_min_temp": 47,
    "actual_max_temp": 68,
    "actual_precipitation": 0,
    "location": "PHL"
  },
  {
    "": 3068,
    "date": "2014-11-26",
    "actual_mean_temp": 42,
    "actual_min_temp": 34,
    "actual_max_temp": 50,
    "actual_precipitation": 0.95,
    "location": "PHL"
  },
  {
    "": 3069,
    "date": "2014-11-27",
    "actual_mean_temp": 36,
    "actual_min_temp": 30,
    "actual_max_temp": 42,
    "actual_precipitation": 0,
    "location": "PHL"
  },
  {
    "": 3070,
    "date": "2014-11-28",
    "actual_mean_temp": 34,
    "actual_min_temp": 28,
    "actual_max_temp": 39,
    "actual_precipitation": 0,
    "location": "PHL"
  },
  {
    "": 3071,
    "date": "2014-11-29",
    "actual_mean_temp": 36,
    "actual_min_temp": 26,
    "actual_max_temp": 45,
    "actual_precipitation": 0,
    "location": "PHL"
  },
  {
    "": 3072,
    "date": "2014-11-30",
    "actual_mean_temp": 51,
    "actual_min_temp": 42,
    "actual_max_temp": 59,
    "actual_precipitation": 0,
    "location": "PHL"
  },
  {
    "": 3073,
    "date": "2014-12-1",
    "actual_mean_temp": 54,
    "actual_min_temp": 42,
    "actual_max_temp": 65,
    "actual_precipitation": 0.05,
    "location": "PHL"
  },
  {
    "": 3074,
    "date": "2014-12-2",
    "actual_mean_temp": 41,
    "actual_min_temp": 36,
    "actual_max_temp": 45,
    "actual_precipitation": 0.2,
    "location": "PHL"
  },
  {
    "": 3075,
    "date": "2014-12-3",
    "actual_mean_temp": 44,
    "actual_min_temp": 40,
    "actual_max_temp": 48,
    "actual_precipitation": 0.11,
    "location": "PHL"
  },
  {
    "": 3076,
    "date": "2014-12-4",
    "actual_mean_temp": 39,
    "actual_min_temp": 32,
    "actual_max_temp": 45,
    "actual_precipitation": 0,
    "location": "PHL"
  },
  {
    "": 3077,
    "date": "2014-12-5",
    "actual_mean_temp": 41,
    "actual_min_temp": 36,
    "actual_max_temp": 46,
    "actual_precipitation": 0.07,
    "location": "PHL"
  },
  {
    "": 3078,
    "date": "2014-12-6",
    "actual_mean_temp": 46,
    "actual_min_temp": 42,
    "actual_max_temp": 50,
    "actual_precipitation": 1.02,
    "location": "PHL"
  },
  {
    "": 3079,
    "date": "2014-12-7",
    "actual_mean_temp": 40,
    "actual_min_temp": 32,
    "actual_max_temp": 48,
    "actual_precipitation": 0,
    "location": "PHL"
  },
  {
    "": 3080,
    "date": "2014-12-8",
    "actual_mean_temp": 32,
    "actual_min_temp": 27,
    "actual_max_temp": 37,
    "actual_precipitation": 0,
    "location": "PHL"
  },
  {
    "": 3081,
    "date": "2014-12-9",
    "actual_mean_temp": 41,
    "actual_min_temp": 37,
    "actual_max_temp": 45,
    "actual_precipitation": 0.66,
    "location": "PHL"
  },
  {
    "": 3082,
    "date": "2014-12-10",
    "actual_mean_temp": 40,
    "actual_min_temp": 36,
    "actual_max_temp": 43,
    "actual_precipitation": 0,
    "location": "PHL"
  },
  {
    "": 3083,
    "date": "2014-12-11",
    "actual_mean_temp": 36,
    "actual_min_temp": 33,
    "actual_max_temp": 38,
    "actual_precipitation": 0.04,
    "location": "PHL"
  },
  {
    "": 3084,
    "date": "2014-12-12",
    "actual_mean_temp": 38,
    "actual_min_temp": 34,
    "actual_max_temp": 42,
    "actual_precipitation": 0,
    "location": "PHL"
  },
  {
    "": 3085,
    "date": "2014-12-13",
    "actual_mean_temp": 39,
    "actual_min_temp": 35,
    "actual_max_temp": 42,
    "actual_precipitation": 0,
    "location": "PHL"
  },
  {
    "": 3086,
    "date": "2014-12-14",
    "actual_mean_temp": 42,
    "actual_min_temp": 37,
    "actual_max_temp": 47,
    "actual_precipitation": 0,
    "location": "PHL"
  },
  {
    "": 3087,
    "date": "2014-12-15",
    "actual_mean_temp": 42,
    "actual_min_temp": 36,
    "actual_max_temp": 48,
    "actual_precipitation": 0,
    "location": "PHL"
  },
  {
    "": 3088,
    "date": "2014-12-16",
    "actual_mean_temp": 43,
    "actual_min_temp": 32,
    "actual_max_temp": 53,
    "actual_precipitation": 0.12,
    "location": "PHL"
  },
  {
    "": 3089,
    "date": "2014-12-17",
    "actual_mean_temp": 46,
    "actual_min_temp": 39,
    "actual_max_temp": 53,
    "actual_precipitation": 0,
    "location": "PHL"
  },
  {
    "": 3090,
    "date": "2014-12-18",
    "actual_mean_temp": 38,
    "actual_min_temp": 34,
    "actual_max_temp": 41,
    "actual_precipitation": 0,
    "location": "PHL"
  },
  {
    "": 3091,
    "date": "2014-12-19",
    "actual_mean_temp": 38,
    "actual_min_temp": 33,
    "actual_max_temp": 42,
    "actual_precipitation": 0,
    "location": "PHL"
  },
  {
    "": 3092,
    "date": "2014-12-20",
    "actual_mean_temp": 34,
    "actual_min_temp": 33,
    "actual_max_temp": 35,
    "actual_precipitation": 0,
    "location": "PHL"
  },
  {
    "": 3093,
    "date": "2014-12-21",
    "actual_mean_temp": 35,
    "actual_min_temp": 29,
    "actual_max_temp": 40,
    "actual_precipitation": 0,
    "location": "PHL"
  },
  {
    "": 3094,
    "date": "2014-12-22",
    "actual_mean_temp": 36,
    "actual_min_temp": 27,
    "actual_max_temp": 45,
    "actual_precipitation": 0.02,
    "location": "PHL"
  },
  {
    "": 3095,
    "date": "2014-12-23",
    "actual_mean_temp": 48,
    "actual_min_temp": 44,
    "actual_max_temp": 52,
    "actual_precipitation": 0.11,
    "location": "PHL"
  },
  {
    "": 3096,
    "date": "2014-12-24",
    "actual_mean_temp": 56,
    "actual_min_temp": 47,
    "actual_max_temp": 64,
    "actual_precipitation": 0.82,
    "location": "PHL"
  },
  {
    "": 3097,
    "date": "2014-12-25",
    "actual_mean_temp": 52,
    "actual_min_temp": 39,
    "actual_max_temp": 65,
    "actual_precipitation": 0.03,
    "location": "PHL"
  },
  {
    "": 3098,
    "date": "2014-12-26",
    "actual_mean_temp": 42,
    "actual_min_temp": 34,
    "actual_max_temp": 50,
    "actual_precipitation": 0,
    "location": "PHL"
  },
  {
    "": 3099,
    "date": "2014-12-27",
    "actual_mean_temp": 45,
    "actual_min_temp": 32,
    "actual_max_temp": 57,
    "actual_precipitation": 0,
    "location": "PHL"
  },
  {
    "": 3100,
    "date": "2014-12-28",
    "actual_mean_temp": 48,
    "actual_min_temp": 39,
    "actual_max_temp": 56,
    "actual_precipitation": 0.02,
    "location": "PHL"
  },
  {
    "": 3101,
    "date": "2014-12-29",
    "actual_mean_temp": 43,
    "actual_min_temp": 37,
    "actual_max_temp": 48,
    "actual_precipitation": 0,
    "location": "PHL"
  },
  {
    "": 3102,
    "date": "2014-12-30",
    "actual_mean_temp": 33,
    "actual_min_temp": 28,
    "actual_max_temp": 38,
    "actual_precipitation": 0,
    "location": "PHL"
  },
  {
    "": 3103,
    "date": "2014-12-31",
    "actual_mean_temp": 29,
    "actual_min_temp": 25,
    "actual_max_temp": 33,
    "actual_precipitation": 0,
    "location": "PHL"
  },
  {
    "": 3104,
    "date": "2015-1-1",
    "actual_mean_temp": 35,
    "actual_min_temp": 28,
    "actual_max_temp": 42,
    "actual_precipitation": 0,
    "location": "PHL"
  },
  {
    "": 3105,
    "date": "2015-1-2",
    "actual_mean_temp": 37,
    "actual_min_temp": 29,
    "actual_max_temp": 44,
    "actual_precipitation": 0,
    "location": "PHL"
  },
  {
    "": 3106,
    "date": "2015-1-3",
    "actual_mean_temp": 36,
    "actual_min_temp": 28,
    "actual_max_temp": 44,
    "actual_precipitation": 0.72,
    "location": "PHL"
  },
  {
    "": 3107,
    "date": "2015-1-4",
    "actual_mean_temp": 50,
    "actual_min_temp": 42,
    "actual_max_temp": 58,
    "actual_precipitation": 0.37,
    "location": "PHL"
  },
  {
    "": 3108,
    "date": "2015-1-5",
    "actual_mean_temp": 37,
    "actual_min_temp": 24,
    "actual_max_temp": 50,
    "actual_precipitation": 0,
    "location": "PHL"
  },
  {
    "": 3109,
    "date": "2015-1-6",
    "actual_mean_temp": 20,
    "actual_min_temp": 16,
    "actual_max_temp": 24,
    "actual_precipitation": 0.12,
    "location": "PHL"
  },
  {
    "": 3110,
    "date": "2015-1-7",
    "actual_mean_temp": 19,
    "actual_min_temp": 13,
    "actual_max_temp": 24,
    "actual_precipitation": 0,
    "location": "PHL"
  },
  {
    "": 3111,
    "date": "2015-1-8",
    "actual_mean_temp": 15,
    "actual_min_temp": 9,
    "actual_max_temp": 21,
    "actual_precipitation": 0,
    "location": "PHL"
  },
  {
    "": 3112,
    "date": "2015-1-9",
    "actual_mean_temp": 29,
    "actual_min_temp": 21,
    "actual_max_temp": 36,
    "actual_precipitation": 0.01,
    "location": "PHL"
  },
  {
    "": 3113,
    "date": "2015-1-10",
    "actual_mean_temp": 21,
    "actual_min_temp": 16,
    "actual_max_temp": 25,
    "actual_precipitation": 0,
    "location": "PHL"
  },
  {
    "": 3114,
    "date": "2015-1-11",
    "actual_mean_temp": 28,
    "actual_min_temp": 15,
    "actual_max_temp": 40,
    "actual_precipitation": 0,
    "location": "PHL"
  },
  {
    "": 3115,
    "date": "2015-1-12",
    "actual_mean_temp": 36,
    "actual_min_temp": 33,
    "actual_max_temp": 38,
    "actual_precipitation": 0.59,
    "location": "PHL"
  },
  {
    "": 3116,
    "date": "2015-1-13",
    "actual_mean_temp": 30,
    "actual_min_temp": 21,
    "actual_max_temp": 38,
    "actual_precipitation": 0,
    "location": "PHL"
  },
  {
    "": 3117,
    "date": "2015-1-14",
    "actual_mean_temp": 26,
    "actual_min_temp": 20,
    "actual_max_temp": 32,
    "actual_precipitation": 0,
    "location": "PHL"
  },
  {
    "": 3118,
    "date": "2015-1-15",
    "actual_mean_temp": 33,
    "actual_min_temp": 29,
    "actual_max_temp": 36,
    "actual_precipitation": 0,
    "location": "PHL"
  },
  {
    "": 3119,
    "date": "2015-1-16",
    "actual_mean_temp": 34,
    "actual_min_temp": 25,
    "actual_max_temp": 43,
    "actual_precipitation": 0,
    "location": "PHL"
  },
  {
    "": 3120,
    "date": "2015-1-17",
    "actual_mean_temp": 26,
    "actual_min_temp": 18,
    "actual_max_temp": 33,
    "actual_precipitation": 0,
    "location": "PHL"
  },
  {
    "": 3121,
    "date": "2015-1-18",
    "actual_mean_temp": 34,
    "actual_min_temp": 24,
    "actual_max_temp": 43,
    "actual_precipitation": 1.84,
    "location": "PHL"
  },
  {
    "": 3122,
    "date": "2015-1-19",
    "actual_mean_temp": 38,
    "actual_min_temp": 30,
    "actual_max_temp": 45,
    "actual_precipitation": 0,
    "location": "PHL"
  },
  {
    "": 3123,
    "date": "2015-1-20",
    "actual_mean_temp": 38,
    "actual_min_temp": 29,
    "actual_max_temp": 46,
    "actual_precipitation": 0,
    "location": "PHL"
  },
  {
    "": 3124,
    "date": "2015-1-21",
    "actual_mean_temp": 31,
    "actual_min_temp": 27,
    "actual_max_temp": 34,
    "actual_precipitation": 0.06,
    "location": "PHL"
  },
  {
    "": 3125,
    "date": "2015-1-22",
    "actual_mean_temp": 36,
    "actual_min_temp": 30,
    "actual_max_temp": 41,
    "actual_precipitation": 0.03,
    "location": "PHL"
  },
  {
    "": 3126,
    "date": "2015-1-23",
    "actual_mean_temp": 34,
    "actual_min_temp": 25,
    "actual_max_temp": 42,
    "actual_precipitation": 0.16,
    "location": "PHL"
  },
  {
    "": 3127,
    "date": "2015-1-24",
    "actual_mean_temp": 36,
    "actual_min_temp": 33,
    "actual_max_temp": 39,
    "actual_precipitation": 0.55,
    "location": "PHL"
  },
  {
    "": 3128,
    "date": "2015-1-25",
    "actual_mean_temp": 40,
    "actual_min_temp": 33,
    "actual_max_temp": 46,
    "actual_precipitation": 0,
    "location": "PHL"
  },
  {
    "": 3129,
    "date": "2015-1-26",
    "actual_mean_temp": 31,
    "actual_min_temp": 27,
    "actual_max_temp": 34,
    "actual_precipitation": 0,
    "location": "PHL"
  },
  {
    "": 3130,
    "date": "2015-1-27",
    "actual_mean_temp": 28,
    "actual_min_temp": 21,
    "actual_max_temp": 34,
    "actual_precipitation": 0.07,
    "location": "PHL"
  },
  {
    "": 3131,
    "date": "2015-1-28",
    "actual_mean_temp": 28,
    "actual_min_temp": 20,
    "actual_max_temp": 35,
    "actual_precipitation": 0,
    "location": "PHL"
  },
  {
    "": 3132,
    "date": "2015-1-29",
    "actual_mean_temp": 28,
    "actual_min_temp": 21,
    "actual_max_temp": 34,
    "actual_precipitation": 0,
    "location": "PHL"
  },
  {
    "": 3133,
    "date": "2015-1-30",
    "actual_mean_temp": 31,
    "actual_min_temp": 20,
    "actual_max_temp": 42,
    "actual_precipitation": 0,
    "location": "PHL"
  },
  {
    "": 3134,
    "date": "2015-1-31",
    "actual_mean_temp": 22,
    "actual_min_temp": 14,
    "actual_max_temp": 29,
    "actual_precipitation": 0,
    "location": "PHL"
  },
  {
    "": 3135,
    "date": "2015-2-1",
    "actual_mean_temp": 30,
    "actual_min_temp": 21,
    "actual_max_temp": 39,
    "actual_precipitation": 0.06,
    "location": "PHL"
  },
  {
    "": 3136,
    "date": "2015-2-2",
    "actual_mean_temp": 32,
    "actual_min_temp": 23,
    "actual_max_temp": 41,
    "actual_precipitation": 0.93,
    "location": "PHL"
  },
  {
    "": 3137,
    "date": "2015-2-3",
    "actual_mean_temp": 25,
    "actual_min_temp": 20,
    "actual_max_temp": 30,
    "actual_precipitation": 0,
    "location": "PHL"
  },
  {
    "": 3138,
    "date": "2015-2-4",
    "actual_mean_temp": 35,
    "actual_min_temp": 23,
    "actual_max_temp": 47,
    "actual_precipitation": 0,
    "location": "PHL"
  },
  {
    "": 3139,
    "date": "2015-2-5",
    "actual_mean_temp": 29,
    "actual_min_temp": 17,
    "actual_max_temp": 41,
    "actual_precipitation": 0,
    "location": "PHL"
  },
  {
    "": 3140,
    "date": "2015-2-6",
    "actual_mean_temp": 23,
    "actual_min_temp": 14,
    "actual_max_temp": 32,
    "actual_precipitation": 0,
    "location": "PHL"
  },
  {
    "": 3141,
    "date": "2015-2-7",
    "actual_mean_temp": 33,
    "actual_min_temp": 21,
    "actual_max_temp": 44,
    "actual_precipitation": 0,
    "location": "PHL"
  },
  {
    "": 3142,
    "date": "2015-2-8",
    "actual_mean_temp": 42,
    "actual_min_temp": 33,
    "actual_max_temp": 51,
    "actual_precipitation": 0,
    "location": "PHL"
  },
  {
    "": 3143,
    "date": "2015-2-9",
    "actual_mean_temp": 33,
    "actual_min_temp": 28,
    "actual_max_temp": 37,
    "actual_precipitation": 0.03,
    "location": "PHL"
  },
  {
    "": 3144,
    "date": "2015-2-10",
    "actual_mean_temp": 35,
    "actual_min_temp": 28,
    "actual_max_temp": 42,
    "actual_precipitation": 0,
    "location": "PHL"
  },
  {
    "": 3145,
    "date": "2015-2-11",
    "actual_mean_temp": 33,
    "actual_min_temp": 26,
    "actual_max_temp": 39,
    "actual_precipitation": 0,
    "location": "PHL"
  },
  {
    "": 3146,
    "date": "2015-2-12",
    "actual_mean_temp": 31,
    "actual_min_temp": 20,
    "actual_max_temp": 41,
    "actual_precipitation": 0,
    "location": "PHL"
  },
  {
    "": 3147,
    "date": "2015-2-13",
    "actual_mean_temp": 17,
    "actual_min_temp": 10,
    "actual_max_temp": 24,
    "actual_precipitation": 0,
    "location": "PHL"
  },
  {
    "": 3148,
    "date": "2015-2-14",
    "actual_mean_temp": 25,
    "actual_min_temp": 18,
    "actual_max_temp": 32,
    "actual_precipitation": 0.04,
    "location": "PHL"
  },
  {
    "": 3149,
    "date": "2015-2-15",
    "actual_mean_temp": 15,
    "actual_min_temp": 9,
    "actual_max_temp": 21,
    "actual_precipitation": 0,
    "location": "PHL"
  },
  {
    "": 3150,
    "date": "2015-2-16",
    "actual_mean_temp": 10,
    "actual_min_temp": 3,
    "actual_max_temp": 17,
    "actual_precipitation": 0.02,
    "location": "PHL"
  },
  {
    "": 3151,
    "date": "2015-2-17",
    "actual_mean_temp": 21,
    "actual_min_temp": 13,
    "actual_max_temp": 28,
    "actual_precipitation": 0.24,
    "location": "PHL"
  },
  {
    "": 3152,
    "date": "2015-2-18",
    "actual_mean_temp": 22,
    "actual_min_temp": 11,
    "actual_max_temp": 32,
    "actual_precipitation": 0,
    "location": "PHL"
  },
  {
    "": 3153,
    "date": "2015-2-19",
    "actual_mean_temp": 16,
    "actual_min_temp": 8,
    "actual_max_temp": 23,
    "actual_precipitation": 0,
    "location": "PHL"
  },
  {
    "": 3154,
    "date": "2015-2-20",
    "actual_mean_temp": 10,
    "actual_min_temp": 2,
    "actual_max_temp": 18,
    "actual_precipitation": 0,
    "location": "PHL"
  },
  {
    "": 3155,
    "date": "2015-2-21",
    "actual_mean_temp": 22,
    "actual_min_temp": 9,
    "actual_max_temp": 34,
    "actual_precipitation": 0.76,
    "location": "PHL"
  },
  {
    "": 3156,
    "date": "2015-2-22",
    "actual_mean_temp": 40,
    "actual_min_temp": 33,
    "actual_max_temp": 47,
    "actual_precipitation": 0.28,
    "location": "PHL"
  },
  {
    "": 3157,
    "date": "2015-2-23",
    "actual_mean_temp": 25,
    "actual_min_temp": 13,
    "actual_max_temp": 37,
    "actual_precipitation": 0,
    "location": "PHL"
  },
  {
    "": 3158,
    "date": "2015-2-24",
    "actual_mean_temp": 16,
    "actual_min_temp": 7,
    "actual_max_temp": 25,
    "actual_precipitation": 0,
    "location": "PHL"
  },
  {
    "": 3159,
    "date": "2015-2-25",
    "actual_mean_temp": 27,
    "actual_min_temp": 15,
    "actual_max_temp": 38,
    "actual_precipitation": 0,
    "location": "PHL"
  },
  {
    "": 3160,
    "date": "2015-2-26",
    "actual_mean_temp": 29,
    "actual_min_temp": 26,
    "actual_max_temp": 32,
    "actual_precipitation": 0,
    "location": "PHL"
  },
  {
    "": 3161,
    "date": "2015-2-27",
    "actual_mean_temp": 27,
    "actual_min_temp": 22,
    "actual_max_temp": 31,
    "actual_precipitation": 0,
    "location": "PHL"
  },
  {
    "": 3162,
    "date": "2015-2-28",
    "actual_mean_temp": 24,
    "actual_min_temp": 16,
    "actual_max_temp": 32,
    "actual_precipitation": 0,
    "location": "PHL"
  },
  {
    "": 3163,
    "date": "2015-3-1",
    "actual_mean_temp": 27,
    "actual_min_temp": 21,
    "actual_max_temp": 32,
    "actual_precipitation": 0.52,
    "location": "PHL"
  },
  {
    "": 3164,
    "date": "2015-3-2",
    "actual_mean_temp": 35,
    "actual_min_temp": 29,
    "actual_max_temp": 40,
    "actual_precipitation": 0,
    "location": "PHL"
  },
  {
    "": 3165,
    "date": "2015-3-3",
    "actual_mean_temp": 30,
    "actual_min_temp": 25,
    "actual_max_temp": 34,
    "actual_precipitation": 0.61,
    "location": "PHL"
  },
  {
    "": 3166,
    "date": "2015-3-4",
    "actual_mean_temp": 38,
    "actual_min_temp": 33,
    "actual_max_temp": 43,
    "actual_precipitation": 0.49,
    "location": "PHL"
  },
  {
    "": 3167,
    "date": "2015-3-5",
    "actual_mean_temp": 30,
    "actual_min_temp": 20,
    "actual_max_temp": 40,
    "actual_precipitation": 0.78,
    "location": "PHL"
  },
  {
    "": 3168,
    "date": "2015-3-6",
    "actual_mean_temp": 19,
    "actual_min_temp": 11,
    "actual_max_temp": 26,
    "actual_precipitation": 0,
    "location": "PHL"
  },
  {
    "": 3169,
    "date": "2015-3-7",
    "actual_mean_temp": 26,
    "actual_min_temp": 11,
    "actual_max_temp": 41,
    "actual_precipitation": 0,
    "location": "PHL"
  },
  {
    "": 3170,
    "date": "2015-3-8",
    "actual_mean_temp": 38,
    "actual_min_temp": 26,
    "actual_max_temp": 50,
    "actual_precipitation": 0,
    "location": "PHL"
  },
  {
    "": 3171,
    "date": "2015-3-9",
    "actual_mean_temp": 45,
    "actual_min_temp": 32,
    "actual_max_temp": 57,
    "actual_precipitation": 0,
    "location": "PHL"
  },
  {
    "": 3172,
    "date": "2015-3-10",
    "actual_mean_temp": 46,
    "actual_min_temp": 32,
    "actual_max_temp": 59,
    "actual_precipitation": 0.71,
    "location": "PHL"
  },
  {
    "": 3173,
    "date": "2015-3-11",
    "actual_mean_temp": 53,
    "actual_min_temp": 44,
    "actual_max_temp": 61,
    "actual_precipitation": 0,
    "location": "PHL"
  },
  {
    "": 3174,
    "date": "2015-3-12",
    "actual_mean_temp": 45,
    "actual_min_temp": 37,
    "actual_max_temp": 52,
    "actual_precipitation": 0,
    "location": "PHL"
  },
  {
    "": 3175,
    "date": "2015-3-13",
    "actual_mean_temp": 40,
    "actual_min_temp": 30,
    "actual_max_temp": 49,
    "actual_precipitation": 0.08,
    "location": "PHL"
  },
  {
    "": 3176,
    "date": "2015-3-14",
    "actual_mean_temp": 45,
    "actual_min_temp": 38,
    "actual_max_temp": 51,
    "actual_precipitation": 0.95,
    "location": "PHL"
  },
  {
    "": 3177,
    "date": "2015-3-15",
    "actual_mean_temp": 44,
    "actual_min_temp": 40,
    "actual_max_temp": 48,
    "actual_precipitation": 0,
    "location": "PHL"
  },
  {
    "": 3178,
    "date": "2015-3-16",
    "actual_mean_temp": 44,
    "actual_min_temp": 33,
    "actual_max_temp": 55,
    "actual_precipitation": 0,
    "location": "PHL"
  },
  {
    "": 3179,
    "date": "2015-3-17",
    "actual_mean_temp": 53,
    "actual_min_temp": 37,
    "actual_max_temp": 68,
    "actual_precipitation": 0,
    "location": "PHL"
  },
  {
    "": 3180,
    "date": "2015-3-18",
    "actual_mean_temp": 39,
    "actual_min_temp": 32,
    "actual_max_temp": 45,
    "actual_precipitation": 0,
    "location": "PHL"
  },
  {
    "": 3181,
    "date": "2015-3-19",
    "actual_mean_temp": 37,
    "actual_min_temp": 28,
    "actual_max_temp": 46,
    "actual_precipitation": 0,
    "location": "PHL"
  },
  {
    "": 3182,
    "date": "2015-3-20",
    "actual_mean_temp": 35,
    "actual_min_temp": 32,
    "actual_max_temp": 37,
    "actual_precipitation": 0.7,
    "location": "PHL"
  },
  {
    "": 3183,
    "date": "2015-3-21",
    "actual_mean_temp": 42,
    "actual_min_temp": 31,
    "actual_max_temp": 53,
    "actual_precipitation": 0,
    "location": "PHL"
  },
  {
    "": 3184,
    "date": "2015-3-22",
    "actual_mean_temp": 41,
    "actual_min_temp": 34,
    "actual_max_temp": 48,
    "actual_precipitation": 0,
    "location": "PHL"
  },
  {
    "": 3185,
    "date": "2015-3-23",
    "actual_mean_temp": 35,
    "actual_min_temp": 27,
    "actual_max_temp": 43,
    "actual_precipitation": 0,
    "location": "PHL"
  },
  {
    "": 3186,
    "date": "2015-3-24",
    "actual_mean_temp": 36,
    "actual_min_temp": 31,
    "actual_max_temp": 40,
    "actual_precipitation": 0,
    "location": "PHL"
  },
  {
    "": 3187,
    "date": "2015-3-25",
    "actual_mean_temp": 38,
    "actual_min_temp": 28,
    "actual_max_temp": 47,
    "actual_precipitation": 0.05,
    "location": "PHL"
  },
  {
    "": 3188,
    "date": "2015-3-26",
    "actual_mean_temp": 53,
    "actual_min_temp": 39,
    "actual_max_temp": 67,
    "actual_precipitation": 0.34,
    "location": "PHL"
  },
  {
    "": 3189,
    "date": "2015-3-27",
    "actual_mean_temp": 44,
    "actual_min_temp": 39,
    "actual_max_temp": 48,
    "actual_precipitation": 0.2,
    "location": "PHL"
  },
  {
    "": 3190,
    "date": "2015-3-28",
    "actual_mean_temp": 34,
    "actual_min_temp": 27,
    "actual_max_temp": 41,
    "actual_precipitation": 0,
    "location": "PHL"
  },
  {
    "": 3191,
    "date": "2015-3-29",
    "actual_mean_temp": 36,
    "actual_min_temp": 26,
    "actual_max_temp": 46,
    "actual_precipitation": 0,
    "location": "PHL"
  },
  {
    "": 3192,
    "date": "2015-3-30",
    "actual_mean_temp": 46,
    "actual_min_temp": 34,
    "actual_max_temp": 57,
    "actual_precipitation": 0.03,
    "location": "PHL"
  },
  {
    "": 3193,
    "date": "2015-3-31",
    "actual_mean_temp": 48,
    "actual_min_temp": 37,
    "actual_max_temp": 59,
    "actual_precipitation": 0.06,
    "location": "PHL"
  },
  {
    "": 3194,
    "date": "2015-4-1",
    "actual_mean_temp": 45,
    "actual_min_temp": 34,
    "actual_max_temp": 56,
    "actual_precipitation": 0,
    "location": "PHL"
  },
  {
    "": 3195,
    "date": "2015-4-2",
    "actual_mean_temp": 52,
    "actual_min_temp": 37,
    "actual_max_temp": 67,
    "actual_precipitation": 0,
    "location": "PHL"
  },
  {
    "": 3196,
    "date": "2015-4-3",
    "actual_mean_temp": 60,
    "actual_min_temp": 57,
    "actual_max_temp": 63,
    "actual_precipitation": 0.12,
    "location": "PHL"
  },
  {
    "": 3197,
    "date": "2015-4-4",
    "actual_mean_temp": 53,
    "actual_min_temp": 42,
    "actual_max_temp": 63,
    "actual_precipitation": 0,
    "location": "PHL"
  },
  {
    "": 3198,
    "date": "2015-4-5",
    "actual_mean_temp": 53,
    "actual_min_temp": 42,
    "actual_max_temp": 64,
    "actual_precipitation": 0,
    "location": "PHL"
  },
  {
    "": 3199,
    "date": "2015-4-6",
    "actual_mean_temp": 57,
    "actual_min_temp": 39,
    "actual_max_temp": 75,
    "actual_precipitation": 0,
    "location": "PHL"
  },
  {
    "": 3200,
    "date": "2015-4-7",
    "actual_mean_temp": 57,
    "actual_min_temp": 44,
    "actual_max_temp": 69,
    "actual_precipitation": 0.24,
    "location": "PHL"
  },
  {
    "": 3201,
    "date": "2015-4-8",
    "actual_mean_temp": 42,
    "actual_min_temp": 39,
    "actual_max_temp": 44,
    "actual_precipitation": 0.03,
    "location": "PHL"
  },
  {
    "": 3202,
    "date": "2015-4-9",
    "actual_mean_temp": 41,
    "actual_min_temp": 39,
    "actual_max_temp": 43,
    "actual_precipitation": 0.02,
    "location": "PHL"
  },
  {
    "": 3203,
    "date": "2015-4-10",
    "actual_mean_temp": 49,
    "actual_min_temp": 41,
    "actual_max_temp": 57,
    "actual_precipitation": 0.07,
    "location": "PHL"
  },
  {
    "": 3204,
    "date": "2015-4-11",
    "actual_mean_temp": 55,
    "actual_min_temp": 47,
    "actual_max_temp": 63,
    "actual_precipitation": 0,
    "location": "PHL"
  },
  {
    "": 3205,
    "date": "2015-4-12",
    "actual_mean_temp": 53,
    "actual_min_temp": 38,
    "actual_max_temp": 67,
    "actual_precipitation": 0,
    "location": "PHL"
  },
  {
    "": 3206,
    "date": "2015-4-13",
    "actual_mean_temp": 60,
    "actual_min_temp": 44,
    "actual_max_temp": 75,
    "actual_precipitation": 0,
    "location": "PHL"
  },
  {
    "": 3207,
    "date": "2015-4-14",
    "actual_mean_temp": 58,
    "actual_min_temp": 52,
    "actual_max_temp": 63,
    "actual_precipitation": 0.12,
    "location": "PHL"
  },
  {
    "": 3208,
    "date": "2015-4-15",
    "actual_mean_temp": 59,
    "actual_min_temp": 48,
    "actual_max_temp": 70,
    "actual_precipitation": 0,
    "location": "PHL"
  },
  {
    "": 3209,
    "date": "2015-4-16",
    "actual_mean_temp": 61,
    "actual_min_temp": 50,
    "actual_max_temp": 71,
    "actual_precipitation": 0,
    "location": "PHL"
  },
  {
    "": 3210,
    "date": "2015-4-17",
    "actual_mean_temp": 65,
    "actual_min_temp": 55,
    "actual_max_temp": 74,
    "actual_precipitation": 0.15,
    "location": "PHL"
  },
  {
    "": 3211,
    "date": "2015-4-18",
    "actual_mean_temp": 68,
    "actual_min_temp": 54,
    "actual_max_temp": 81,
    "actual_precipitation": 0,
    "location": "PHL"
  },
  {
    "": 3212,
    "date": "2015-4-19",
    "actual_mean_temp": 58,
    "actual_min_temp": 49,
    "actual_max_temp": 67,
    "actual_precipitation": 0,
    "location": "PHL"
  },
  {
    "": 3213,
    "date": "2015-4-20",
    "actual_mean_temp": 63,
    "actual_min_temp": 50,
    "actual_max_temp": 76,
    "actual_precipitation": 2.01,
    "location": "PHL"
  },
  {
    "": 3214,
    "date": "2015-4-21",
    "actual_mean_temp": 59,
    "actual_min_temp": 51,
    "actual_max_temp": 66,
    "actual_precipitation": 0.82,
    "location": "PHL"
  },
  {
    "": 3215,
    "date": "2015-4-22",
    "actual_mean_temp": 60,
    "actual_min_temp": 47,
    "actual_max_temp": 73,
    "actual_precipitation": 0,
    "location": "PHL"
  },
  {
    "": 3216,
    "date": "2015-4-23",
    "actual_mean_temp": 48,
    "actual_min_temp": 43,
    "actual_max_temp": 52,
    "actual_precipitation": 0,
    "location": "PHL"
  },
  {
    "": 3217,
    "date": "2015-4-24",
    "actual_mean_temp": 48,
    "actual_min_temp": 39,
    "actual_max_temp": 57,
    "actual_precipitation": 0,
    "location": "PHL"
  },
  {
    "": 3218,
    "date": "2015-4-25",
    "actual_mean_temp": 48,
    "actual_min_temp": 37,
    "actual_max_temp": 58,
    "actual_precipitation": 0,
    "location": "PHL"
  },
  {
    "": 3219,
    "date": "2015-4-26",
    "actual_mean_temp": 55,
    "actual_min_temp": 45,
    "actual_max_temp": 64,
    "actual_precipitation": 0,
    "location": "PHL"
  },
  {
    "": 3220,
    "date": "2015-4-27",
    "actual_mean_temp": 54,
    "actual_min_temp": 48,
    "actual_max_temp": 60,
    "actual_precipitation": 0,
    "location": "PHL"
  },
  {
    "": 3221,
    "date": "2015-4-28",
    "actual_mean_temp": 61,
    "actual_min_temp": 51,
    "actual_max_temp": 71,
    "actual_precipitation": 0,
    "location": "PHL"
  },
  {
    "": 3222,
    "date": "2015-4-29",
    "actual_mean_temp": 64,
    "actual_min_temp": 51,
    "actual_max_temp": 77,
    "actual_precipitation": 0,
    "location": "PHL"
  },
  {
    "": 3223,
    "date": "2015-4-30",
    "actual_mean_temp": 61,
    "actual_min_temp": 50,
    "actual_max_temp": 72,
    "actual_precipitation": 0,
    "location": "PHL"
  },
  {
    "": 3224,
    "date": "2015-5-1",
    "actual_mean_temp": 57,
    "actual_min_temp": 49,
    "actual_max_temp": 64,
    "actual_precipitation": 0,
    "location": "PHL"
  },
  {
    "": 3225,
    "date": "2015-5-2",
    "actual_mean_temp": 61,
    "actual_min_temp": 47,
    "actual_max_temp": 74,
    "actual_precipitation": 0,
    "location": "PHL"
  },
  {
    "": 3226,
    "date": "2015-5-3",
    "actual_mean_temp": 65,
    "actual_min_temp": 49,
    "actual_max_temp": 81,
    "actual_precipitation": 0,
    "location": "PHL"
  },
  {
    "": 3227,
    "date": "2015-5-4",
    "actual_mean_temp": 70,
    "actual_min_temp": 54,
    "actual_max_temp": 85,
    "actual_precipitation": 0,
    "location": "PHL"
  },
  {
    "": 3228,
    "date": "2015-5-5",
    "actual_mean_temp": 74,
    "actual_min_temp": 62,
    "actual_max_temp": 85,
    "actual_precipitation": 0,
    "location": "PHL"
  },
  {
    "": 3229,
    "date": "2015-5-6",
    "actual_mean_temp": 67,
    "actual_min_temp": 57,
    "actual_max_temp": 77,
    "actual_precipitation": 0,
    "location": "PHL"
  },
  {
    "": 3230,
    "date": "2015-5-7",
    "actual_mean_temp": 69,
    "actual_min_temp": 57,
    "actual_max_temp": 81,
    "actual_precipitation": 0,
    "location": "PHL"
  },
  {
    "": 3231,
    "date": "2015-5-8",
    "actual_mean_temp": 69,
    "actual_min_temp": 55,
    "actual_max_temp": 83,
    "actual_precipitation": 0,
    "location": "PHL"
  },
  {
    "": 3232,
    "date": "2015-5-9",
    "actual_mean_temp": 70,
    "actual_min_temp": 60,
    "actual_max_temp": 80,
    "actual_precipitation": 0.03,
    "location": "PHL"
  },
  {
    "": 3233,
    "date": "2015-5-10",
    "actual_mean_temp": 76,
    "actual_min_temp": 67,
    "actual_max_temp": 84,
    "actual_precipitation": 0,
    "location": "PHL"
  },
  {
    "": 3234,
    "date": "2015-5-11",
    "actual_mean_temp": 77,
    "actual_min_temp": 69,
    "actual_max_temp": 84,
    "actual_precipitation": 0,
    "location": "PHL"
  },
  {
    "": 3235,
    "date": "2015-5-12",
    "actual_mean_temp": 77,
    "actual_min_temp": 66,
    "actual_max_temp": 88,
    "actual_precipitation": 0,
    "location": "PHL"
  },
  {
    "": 3236,
    "date": "2015-5-13",
    "actual_mean_temp": 63,
    "actual_min_temp": 54,
    "actual_max_temp": 72,
    "actual_precipitation": 0,
    "location": "PHL"
  },
  {
    "": 3237,
    "date": "2015-5-14",
    "actual_mean_temp": 61,
    "actual_min_temp": 50,
    "actual_max_temp": 72,
    "actual_precipitation": 0,
    "location": "PHL"
  },
  {
    "": 3238,
    "date": "2015-5-15",
    "actual_mean_temp": 65,
    "actual_min_temp": 54,
    "actual_max_temp": 76,
    "actual_precipitation": 0,
    "location": "PHL"
  },
  {
    "": 3239,
    "date": "2015-5-16",
    "actual_mean_temp": 73,
    "actual_min_temp": 59,
    "actual_max_temp": 86,
    "actual_precipitation": 0.33,
    "location": "PHL"
  },
  {
    "": 3240,
    "date": "2015-5-17",
    "actual_mean_temp": 76,
    "actual_min_temp": 68,
    "actual_max_temp": 84,
    "actual_precipitation": 0.01,
    "location": "PHL"
  },
  {
    "": 3241,
    "date": "2015-5-18",
    "actual_mean_temp": 74,
    "actual_min_temp": 61,
    "actual_max_temp": 87,
    "actual_precipitation": 0.03,
    "location": "PHL"
  },
  {
    "": 3242,
    "date": "2015-5-19",
    "actual_mean_temp": 72,
    "actual_min_temp": 61,
    "actual_max_temp": 83,
    "actual_precipitation": 0.01,
    "location": "PHL"
  },
  {
    "": 3243,
    "date": "2015-5-20",
    "actual_mean_temp": 67,
    "actual_min_temp": 58,
    "actual_max_temp": 75,
    "actual_precipitation": 0,
    "location": "PHL"
  },
  {
    "": 3244,
    "date": "2015-5-21",
    "actual_mean_temp": 55,
    "actual_min_temp": 51,
    "actual_max_temp": 58,
    "actual_precipitation": 0.18,
    "location": "PHL"
  },
  {
    "": 3245,
    "date": "2015-5-22",
    "actual_mean_temp": 65,
    "actual_min_temp": 53,
    "actual_max_temp": 77,
    "actual_precipitation": 0,
    "location": "PHL"
  },
  {
    "": 3246,
    "date": "2015-5-23",
    "actual_mean_temp": 61,
    "actual_min_temp": 51,
    "actual_max_temp": 71,
    "actual_precipitation": 0,
    "location": "PHL"
  },
  {
    "": 3247,
    "date": "2015-5-24",
    "actual_mean_temp": 67,
    "actual_min_temp": 52,
    "actual_max_temp": 82,
    "actual_precipitation": 0,
    "location": "PHL"
  },
  {
    "": 3248,
    "date": "2015-5-25",
    "actual_mean_temp": 75,
    "actual_min_temp": 63,
    "actual_max_temp": 87,
    "actual_precipitation": 0,
    "location": "PHL"
  },
  {
    "": 3249,
    "date": "2015-5-26",
    "actual_mean_temp": 77,
    "actual_min_temp": 65,
    "actual_max_temp": 89,
    "actual_precipitation": 0,
    "location": "PHL"
  },
  {
    "": 3250,
    "date": "2015-5-27",
    "actual_mean_temp": 80,
    "actual_min_temp": 71,
    "actual_max_temp": 89,
    "actual_precipitation": 0.6,
    "location": "PHL"
  },
  {
    "": 3251,
    "date": "2015-5-28",
    "actual_mean_temp": 80,
    "actual_min_temp": 70,
    "actual_max_temp": 89,
    "actual_precipitation": 0,
    "location": "PHL"
  },
  {
    "": 3252,
    "date": "2015-5-29",
    "actual_mean_temp": 77,
    "actual_min_temp": 66,
    "actual_max_temp": 87,
    "actual_precipitation": 0,
    "location": "PHL"
  },
  {
    "": 3253,
    "date": "2015-5-30",
    "actual_mean_temp": 78,
    "actual_min_temp": 68,
    "actual_max_temp": 87,
    "actual_precipitation": 0,
    "location": "PHL"
  },
  {
    "": 3254,
    "date": "2015-5-31",
    "actual_mean_temp": 81,
    "actual_min_temp": 70,
    "actual_max_temp": 92,
    "actual_precipitation": 0,
    "location": "PHL"
  },
  {
    "": 3255,
    "date": "2015-6-1",
    "actual_mean_temp": 67,
    "actual_min_temp": 58,
    "actual_max_temp": 76,
    "actual_precipitation": 1.96,
    "location": "PHL"
  },
  {
    "": 3256,
    "date": "2015-6-2",
    "actual_mean_temp": 56,
    "actual_min_temp": 53,
    "actual_max_temp": 58,
    "actual_precipitation": 0.3,
    "location": "PHL"
  },
  {
    "": 3257,
    "date": "2015-6-3",
    "actual_mean_temp": 63,
    "actual_min_temp": 55,
    "actual_max_temp": 70,
    "actual_precipitation": 0.01,
    "location": "PHL"
  },
  {
    "": 3258,
    "date": "2015-6-4",
    "actual_mean_temp": 64,
    "actual_min_temp": 57,
    "actual_max_temp": 70,
    "actual_precipitation": 0,
    "location": "PHL"
  },
  {
    "": 3259,
    "date": "2015-6-5",
    "actual_mean_temp": 66,
    "actual_min_temp": 56,
    "actual_max_temp": 76,
    "actual_precipitation": 0.13,
    "location": "PHL"
  },
  {
    "": 3260,
    "date": "2015-6-6",
    "actual_mean_temp": 73,
    "actual_min_temp": 64,
    "actual_max_temp": 81,
    "actual_precipitation": 0.05,
    "location": "PHL"
  },
  {
    "": 3261,
    "date": "2015-6-7",
    "actual_mean_temp": 68,
    "actual_min_temp": 58,
    "actual_max_temp": 77,
    "actual_precipitation": 0,
    "location": "PHL"
  },
  {
    "": 3262,
    "date": "2015-6-8",
    "actual_mean_temp": 75,
    "actual_min_temp": 64,
    "actual_max_temp": 86,
    "actual_precipitation": 0.88,
    "location": "PHL"
  },
  {
    "": 3263,
    "date": "2015-6-9",
    "actual_mean_temp": 78,
    "actual_min_temp": 69,
    "actual_max_temp": 86,
    "actual_precipitation": 0.02,
    "location": "PHL"
  },
  {
    "": 3264,
    "date": "2015-6-10",
    "actual_mean_temp": 76,
    "actual_min_temp": 65,
    "actual_max_temp": 86,
    "actual_precipitation": 0,
    "location": "PHL"
  },
  {
    "": 3265,
    "date": "2015-6-11",
    "actual_mean_temp": 81,
    "actual_min_temp": 70,
    "actual_max_temp": 92,
    "actual_precipitation": 0,
    "location": "PHL"
  },
  {
    "": 3266,
    "date": "2015-6-12",
    "actual_mean_temp": 85,
    "actual_min_temp": 75,
    "actual_max_temp": 95,
    "actual_precipitation": 0,
    "location": "PHL"
  },
  {
    "": 3267,
    "date": "2015-6-13",
    "actual_mean_temp": 83,
    "actual_min_temp": 77,
    "actual_max_temp": 88,
    "actual_precipitation": 0,
    "location": "PHL"
  },
  {
    "": 3268,
    "date": "2015-6-14",
    "actual_mean_temp": 81,
    "actual_min_temp": 72,
    "actual_max_temp": 90,
    "actual_precipitation": 0.09,
    "location": "PHL"
  },
  {
    "": 3269,
    "date": "2015-6-15",
    "actual_mean_temp": 82,
    "actual_min_temp": 74,
    "actual_max_temp": 89,
    "actual_precipitation": 0,
    "location": "PHL"
  },
  {
    "": 3270,
    "date": "2015-6-16",
    "actual_mean_temp": 83,
    "actual_min_temp": 74,
    "actual_max_temp": 91,
    "actual_precipitation": 0,
    "location": "PHL"
  },
  {
    "": 3271,
    "date": "2015-6-17",
    "actual_mean_temp": 78,
    "actual_min_temp": 69,
    "actual_max_temp": 86,
    "actual_precipitation": 0,
    "location": "PHL"
  },
  {
    "": 3272,
    "date": "2015-6-18",
    "actual_mean_temp": 70,
    "actual_min_temp": 65,
    "actual_max_temp": 74,
    "actual_precipitation": 0.65,
    "location": "PHL"
  },
  {
    "": 3273,
    "date": "2015-6-19",
    "actual_mean_temp": 79,
    "actual_min_temp": 70,
    "actual_max_temp": 87,
    "actual_precipitation": 0.27,
    "location": "PHL"
  },
  {
    "": 3274,
    "date": "2015-6-20",
    "actual_mean_temp": 79,
    "actual_min_temp": 71,
    "actual_max_temp": 86,
    "actual_precipitation": 0.48,
    "location": "PHL"
  },
  {
    "": 3275,
    "date": "2015-6-21",
    "actual_mean_temp": 82,
    "actual_min_temp": 73,
    "actual_max_temp": 91,
    "actual_precipitation": 0.3,
    "location": "PHL"
  },
  {
    "": 3276,
    "date": "2015-6-22",
    "actual_mean_temp": 82,
    "actual_min_temp": 73,
    "actual_max_temp": 91,
    "actual_precipitation": 0,
    "location": "PHL"
  },
  {
    "": 3277,
    "date": "2015-6-23",
    "actual_mean_temp": 83,
    "actual_min_temp": 70,
    "actual_max_temp": 95,
    "actual_precipitation": 0.55,
    "location": "PHL"
  },
  {
    "": 3278,
    "date": "2015-6-24",
    "actual_mean_temp": 77,
    "actual_min_temp": 69,
    "actual_max_temp": 85,
    "actual_precipitation": 0,
    "location": "PHL"
  },
  {
    "": 3279,
    "date": "2015-6-25",
    "actual_mean_temp": 76,
    "actual_min_temp": 68,
    "actual_max_temp": 84,
    "actual_precipitation": 0.13,
    "location": "PHL"
  },
  {
    "": 3280,
    "date": "2015-6-26",
    "actual_mean_temp": 76,
    "actual_min_temp": 68,
    "actual_max_temp": 84,
    "actual_precipitation": 0,
    "location": "PHL"
  },
  {
    "": 3281,
    "date": "2015-6-27",
    "actual_mean_temp": 67,
    "actual_min_temp": 63,
    "actual_max_temp": 71,
    "actual_precipitation": 1.34,
    "location": "PHL"
  },
  {
    "": 3282,
    "date": "2015-6-28",
    "actual_mean_temp": 73,
    "actual_min_temp": 66,
    "actual_max_temp": 79,
    "actual_precipitation": 0.22,
    "location": "PHL"
  },
  {
    "": 3283,
    "date": "2015-6-29",
    "actual_mean_temp": 72,
    "actual_min_temp": 63,
    "actual_max_temp": 81,
    "actual_precipitation": 0,
    "location": "PHL"
  },
  {
    "": 3284,
    "date": "2015-6-30",
    "actual_mean_temp": 77,
    "actual_min_temp": 67,
    "actual_max_temp": 86,
    "actual_precipitation": 1.5,
    "location": "PHL"
  },
  {
    "": 3285,
    "date": "2014-7-1",
    "actual_mean_temp": 98,
    "actual_min_temp": 86,
    "actual_max_temp": 109,
    "actual_precipitation": 0,
    "location": "PHX"
  },
  {
    "": 3286,
    "date": "2014-7-2",
    "actual_mean_temp": 98,
    "actual_min_temp": 86,
    "actual_max_temp": 109,
    "actual_precipitation": 0,
    "location": "PHX"
  },
  {
    "": 3287,
    "date": "2014-7-3",
    "actual_mean_temp": 94,
    "actual_min_temp": 79,
    "actual_max_temp": 108,
    "actual_precipitation": 0,
    "location": "PHX"
  },
  {
    "": 3288,
    "date": "2014-7-4",
    "actual_mean_temp": 90,
    "actual_min_temp": 81,
    "actual_max_temp": 98,
    "actual_precipitation": 0,
    "location": "PHX"
  },
  {
    "": 3289,
    "date": "2014-7-5",
    "actual_mean_temp": 94,
    "actual_min_temp": 84,
    "actual_max_temp": 103,
    "actual_precipitation": 0.01,
    "location": "PHX"
  },
  {
    "": 3290,
    "date": "2014-7-6",
    "actual_mean_temp": 95,
    "actual_min_temp": 84,
    "actual_max_temp": 105,
    "actual_precipitation": 0,
    "location": "PHX"
  },
  {
    "": 3291,
    "date": "2014-7-7",
    "actual_mean_temp": 98,
    "actual_min_temp": 88,
    "actual_max_temp": 108,
    "actual_precipitation": 0,
    "location": "PHX"
  },
  {
    "": 3292,
    "date": "2014-7-8",
    "actual_mean_temp": 96,
    "actual_min_temp": 86,
    "actual_max_temp": 105,
    "actual_precipitation": 0,
    "location": "PHX"
  },
  {
    "": 3293,
    "date": "2014-7-9",
    "actual_mean_temp": 92,
    "actual_min_temp": 83,
    "actual_max_temp": 101,
    "actual_precipitation": 0,
    "location": "PHX"
  },
  {
    "": 3294,
    "date": "2014-7-10",
    "actual_mean_temp": 96,
    "actual_min_temp": 87,
    "actual_max_temp": 105,
    "actual_precipitation": 0,
    "location": "PHX"
  },
  {
    "": 3295,
    "date": "2014-7-11",
    "actual_mean_temp": 98,
    "actual_min_temp": 88,
    "actual_max_temp": 107,
    "actual_precipitation": 0,
    "location": "PHX"
  },
  {
    "": 3296,
    "date": "2014-7-12",
    "actual_mean_temp": 99,
    "actual_min_temp": 88,
    "actual_max_temp": 110,
    "actual_precipitation": 0,
    "location": "PHX"
  },
  {
    "": 3297,
    "date": "2014-7-13",
    "actual_mean_temp": 95,
    "actual_min_temp": 80,
    "actual_max_temp": 110,
    "actual_precipitation": 0.03,
    "location": "PHX"
  },
  {
    "": 3298,
    "date": "2014-7-14",
    "actual_mean_temp": 92,
    "actual_min_temp": 81,
    "actual_max_temp": 103,
    "actual_precipitation": 0.02,
    "location": "PHX"
  },
  {
    "": 3299,
    "date": "2014-7-15",
    "actual_mean_temp": 95,
    "actual_min_temp": 86,
    "actual_max_temp": 103,
    "actual_precipitation": 0,
    "location": "PHX"
  },
  {
    "": 3300,
    "date": "2014-7-16",
    "actual_mean_temp": 96,
    "actual_min_temp": 84,
    "actual_max_temp": 107,
    "actual_precipitation": 0,
    "location": "PHX"
  },
  {
    "": 3301,
    "date": "2014-7-17",
    "actual_mean_temp": 96,
    "actual_min_temp": 86,
    "actual_max_temp": 105,
    "actual_precipitation": 0,
    "location": "PHX"
  },
  {
    "": 3302,
    "date": "2014-7-18",
    "actual_mean_temp": 94,
    "actual_min_temp": 83,
    "actual_max_temp": 105,
    "actual_precipitation": 0,
    "location": "PHX"
  },
  {
    "": 3303,
    "date": "2014-7-19",
    "actual_mean_temp": 96,
    "actual_min_temp": 88,
    "actual_max_temp": 104,
    "actual_precipitation": 0,
    "location": "PHX"
  },
  {
    "": 3304,
    "date": "2014-7-20",
    "actual_mean_temp": 96,
    "actual_min_temp": 85,
    "actual_max_temp": 106,
    "actual_precipitation": 0,
    "location": "PHX"
  },
  {
    "": 3305,
    "date": "2014-7-21",
    "actual_mean_temp": 96,
    "actual_min_temp": 85,
    "actual_max_temp": 107,
    "actual_precipitation": 0,
    "location": "PHX"
  },
  {
    "": 3306,
    "date": "2014-7-22",
    "actual_mean_temp": 101,
    "actual_min_temp": 89,
    "actual_max_temp": 113,
    "actual_precipitation": 0,
    "location": "PHX"
  },
  {
    "": 3307,
    "date": "2014-7-23",
    "actual_mean_temp": 104,
    "actual_min_temp": 94,
    "actual_max_temp": 114,
    "actual_precipitation": 0,
    "location": "PHX"
  },
  {
    "": 3308,
    "date": "2014-7-24",
    "actual_mean_temp": 105,
    "actual_min_temp": 93,
    "actual_max_temp": 116,
    "actual_precipitation": 0,
    "location": "PHX"
  },
  {
    "": 3309,
    "date": "2014-7-25",
    "actual_mean_temp": 98,
    "actual_min_temp": 87,
    "actual_max_temp": 109,
    "actual_precipitation": 0,
    "location": "PHX"
  },
  {
    "": 3310,
    "date": "2014-7-26",
    "actual_mean_temp": 96,
    "actual_min_temp": 83,
    "actual_max_temp": 108,
    "actual_precipitation": 0,
    "location": "PHX"
  },
  {
    "": 3311,
    "date": "2014-7-27",
    "actual_mean_temp": 94,
    "actual_min_temp": 83,
    "actual_max_temp": 104,
    "actual_precipitation": 0,
    "location": "PHX"
  },
  {
    "": 3312,
    "date": "2014-7-28",
    "actual_mean_temp": 96,
    "actual_min_temp": 85,
    "actual_max_temp": 107,
    "actual_precipitation": 0,
    "location": "PHX"
  },
  {
    "": 3313,
    "date": "2014-7-29",
    "actual_mean_temp": 101,
    "actual_min_temp": 92,
    "actual_max_temp": 110,
    "actual_precipitation": 0,
    "location": "PHX"
  },
  {
    "": 3314,
    "date": "2014-7-30",
    "actual_mean_temp": 102,
    "actual_min_temp": 92,
    "actual_max_temp": 111,
    "actual_precipitation": 0,
    "location": "PHX"
  },
  {
    "": 3315,
    "date": "2014-7-31",
    "actual_mean_temp": 98,
    "actual_min_temp": 87,
    "actual_max_temp": 109,
    "actual_precipitation": 0,
    "location": "PHX"
  },
  {
    "": 3316,
    "date": "2014-8-1",
    "actual_mean_temp": 90,
    "actual_min_temp": 81,
    "actual_max_temp": 99,
    "actual_precipitation": 0,
    "location": "PHX"
  },
  {
    "": 3317,
    "date": "2014-8-2",
    "actual_mean_temp": 90,
    "actual_min_temp": 78,
    "actual_max_temp": 102,
    "actual_precipitation": 0,
    "location": "PHX"
  },
  {
    "": 3318,
    "date": "2014-8-3",
    "actual_mean_temp": 92,
    "actual_min_temp": 80,
    "actual_max_temp": 103,
    "actual_precipitation": 0,
    "location": "PHX"
  },
  {
    "": 3319,
    "date": "2014-8-4",
    "actual_mean_temp": 92,
    "actual_min_temp": 79,
    "actual_max_temp": 105,
    "actual_precipitation": 0,
    "location": "PHX"
  },
  {
    "": 3320,
    "date": "2014-8-5",
    "actual_mean_temp": 94,
    "actual_min_temp": 83,
    "actual_max_temp": 105,
    "actual_precipitation": 0,
    "location": "PHX"
  },
  {
    "": 3321,
    "date": "2014-8-6",
    "actual_mean_temp": 96,
    "actual_min_temp": 84,
    "actual_max_temp": 108,
    "actual_precipitation": 0,
    "location": "PHX"
  },
  {
    "": 3322,
    "date": "2014-8-7",
    "actual_mean_temp": 94,
    "actual_min_temp": 82,
    "actual_max_temp": 105,
    "actual_precipitation": 0,
    "location": "PHX"
  },
  {
    "": 3323,
    "date": "2014-8-8",
    "actual_mean_temp": 95,
    "actual_min_temp": 85,
    "actual_max_temp": 105,
    "actual_precipitation": 0,
    "location": "PHX"
  },
  {
    "": 3324,
    "date": "2014-8-9",
    "actual_mean_temp": 94,
    "actual_min_temp": 84,
    "actual_max_temp": 104,
    "actual_precipitation": 0,
    "location": "PHX"
  },
  {
    "": 3325,
    "date": "2014-8-10",
    "actual_mean_temp": 94,
    "actual_min_temp": 84,
    "actual_max_temp": 104,
    "actual_precipitation": 0,
    "location": "PHX"
  },
  {
    "": 3326,
    "date": "2014-8-11",
    "actual_mean_temp": 98,
    "actual_min_temp": 87,
    "actual_max_temp": 109,
    "actual_precipitation": 0,
    "location": "PHX"
  },
  {
    "": 3327,
    "date": "2014-8-12",
    "actual_mean_temp": 88,
    "actual_min_temp": 77,
    "actual_max_temp": 98,
    "actual_precipitation": 0.44,
    "location": "PHX"
  },
  {
    "": 3328,
    "date": "2014-8-13",
    "actual_mean_temp": 84,
    "actual_min_temp": 73,
    "actual_max_temp": 95,
    "actual_precipitation": 0.11,
    "location": "PHX"
  },
  {
    "": 3329,
    "date": "2014-8-14",
    "actual_mean_temp": 93,
    "actual_min_temp": 83,
    "actual_max_temp": 102,
    "actual_precipitation": 0,
    "location": "PHX"
  },
  {
    "": 3330,
    "date": "2014-8-15",
    "actual_mean_temp": 94,
    "actual_min_temp": 83,
    "actual_max_temp": 104,
    "actual_precipitation": 0,
    "location": "PHX"
  },
  {
    "": 3331,
    "date": "2014-8-16",
    "actual_mean_temp": 97,
    "actual_min_temp": 87,
    "actual_max_temp": 106,
    "actual_precipitation": 0,
    "location": "PHX"
  },
  {
    "": 3332,
    "date": "2014-8-17",
    "actual_mean_temp": 99,
    "actual_min_temp": 88,
    "actual_max_temp": 109,
    "actual_precipitation": 0,
    "location": "PHX"
  },
  {
    "": 3333,
    "date": "2014-8-18",
    "actual_mean_temp": 91,
    "actual_min_temp": 83,
    "actual_max_temp": 98,
    "actual_precipitation": 0,
    "location": "PHX"
  },
  {
    "": 3334,
    "date": "2014-8-19",
    "actual_mean_temp": 83,
    "actual_min_temp": 74,
    "actual_max_temp": 91,
    "actual_precipitation": 0.43,
    "location": "PHX"
  },
  {
    "": 3335,
    "date": "2014-8-20",
    "actual_mean_temp": 87,
    "actual_min_temp": 75,
    "actual_max_temp": 98,
    "actual_precipitation": 0,
    "location": "PHX"
  },
  {
    "": 3336,
    "date": "2014-8-21",
    "actual_mean_temp": 81,
    "actual_min_temp": 71,
    "actual_max_temp": 90,
    "actual_precipitation": 0.19,
    "location": "PHX"
  },
  {
    "": 3337,
    "date": "2014-8-22",
    "actual_mean_temp": 83,
    "actual_min_temp": 72,
    "actual_max_temp": 93,
    "actual_precipitation": 0,
    "location": "PHX"
  },
  {
    "": 3338,
    "date": "2014-8-23",
    "actual_mean_temp": 87,
    "actual_min_temp": 76,
    "actual_max_temp": 97,
    "actual_precipitation": 0,
    "location": "PHX"
  },
  {
    "": 3339,
    "date": "2014-8-24",
    "actual_mean_temp": 91,
    "actual_min_temp": 79,
    "actual_max_temp": 103,
    "actual_precipitation": 0,
    "location": "PHX"
  },
  {
    "": 3340,
    "date": "2014-8-25",
    "actual_mean_temp": 92,
    "actual_min_temp": 83,
    "actual_max_temp": 101,
    "actual_precipitation": 0,
    "location": "PHX"
  },
  {
    "": 3341,
    "date": "2014-8-26",
    "actual_mean_temp": 90,
    "actual_min_temp": 80,
    "actual_max_temp": 100,
    "actual_precipitation": 0,
    "location": "PHX"
  },
  {
    "": 3342,
    "date": "2014-8-27",
    "actual_mean_temp": 93,
    "actual_min_temp": 83,
    "actual_max_temp": 103,
    "actual_precipitation": 0,
    "location": "PHX"
  },
  {
    "": 3343,
    "date": "2014-8-28",
    "actual_mean_temp": 95,
    "actual_min_temp": 83,
    "actual_max_temp": 106,
    "actual_precipitation": 0,
    "location": "PHX"
  },
  {
    "": 3344,
    "date": "2014-8-29",
    "actual_mean_temp": 96,
    "actual_min_temp": 83,
    "actual_max_temp": 108,
    "actual_precipitation": 0,
    "location": "PHX"
  },
  {
    "": 3345,
    "date": "2014-8-30",
    "actual_mean_temp": 97,
    "actual_min_temp": 83,
    "actual_max_temp": 111,
    "actual_precipitation": 0,
    "location": "PHX"
  },
  {
    "": 3346,
    "date": "2014-8-31",
    "actual_mean_temp": 96,
    "actual_min_temp": 83,
    "actual_max_temp": 109,
    "actual_precipitation": 0,
    "location": "PHX"
  },
  {
    "": 3347,
    "date": "2014-9-1",
    "actual_mean_temp": 95,
    "actual_min_temp": 81,
    "actual_max_temp": 108,
    "actual_precipitation": 0,
    "location": "PHX"
  },
  {
    "": 3348,
    "date": "2014-9-2",
    "actual_mean_temp": 96,
    "actual_min_temp": 82,
    "actual_max_temp": 109,
    "actual_precipitation": 0,
    "location": "PHX"
  },
  {
    "": 3349,
    "date": "2014-9-3",
    "actual_mean_temp": 96,
    "actual_min_temp": 84,
    "actual_max_temp": 108,
    "actual_precipitation": 0,
    "location": "PHX"
  },
  {
    "": 3350,
    "date": "2014-9-4",
    "actual_mean_temp": 95,
    "actual_min_temp": 83,
    "actual_max_temp": 107,
    "actual_precipitation": 0,
    "location": "PHX"
  },
  {
    "": 3351,
    "date": "2014-9-5",
    "actual_mean_temp": 91,
    "actual_min_temp": 80,
    "actual_max_temp": 101,
    "actual_precipitation": 0,
    "location": "PHX"
  },
  {
    "": 3352,
    "date": "2014-9-6",
    "actual_mean_temp": 96,
    "actual_min_temp": 86,
    "actual_max_temp": 105,
    "actual_precipitation": 0,
    "location": "PHX"
  },
  {
    "": 3353,
    "date": "2014-9-7",
    "actual_mean_temp": 94,
    "actual_min_temp": 84,
    "actual_max_temp": 104,
    "actual_precipitation": 0,
    "location": "PHX"
  },
  {
    "": 3354,
    "date": "2014-9-8",
    "actual_mean_temp": 81,
    "actual_min_temp": 71,
    "actual_max_temp": 90,
    "actual_precipitation": 3.29,
    "location": "PHX"
  },
  {
    "": 3355,
    "date": "2014-9-9",
    "actual_mean_temp": 86,
    "actual_min_temp": 79,
    "actual_max_temp": 92,
    "actual_precipitation": 0,
    "location": "PHX"
  },
  {
    "": 3356,
    "date": "2014-9-10",
    "actual_mean_temp": 88,
    "actual_min_temp": 79,
    "actual_max_temp": 97,
    "actual_precipitation": 0,
    "location": "PHX"
  },
  {
    "": 3357,
    "date": "2014-9-11",
    "actual_mean_temp": 90,
    "actual_min_temp": 79,
    "actual_max_temp": 100,
    "actual_precipitation": 0,
    "location": "PHX"
  },
  {
    "": 3358,
    "date": "2014-9-12",
    "actual_mean_temp": 91,
    "actual_min_temp": 78,
    "actual_max_temp": 104,
    "actual_precipitation": 0,
    "location": "PHX"
  },
  {
    "": 3359,
    "date": "2014-9-13",
    "actual_mean_temp": 92,
    "actual_min_temp": 83,
    "actual_max_temp": 100,
    "actual_precipitation": 0,
    "location": "PHX"
  },
  {
    "": 3360,
    "date": "2014-9-14",
    "actual_mean_temp": 92,
    "actual_min_temp": 81,
    "actual_max_temp": 102,
    "actual_precipitation": 0,
    "location": "PHX"
  },
  {
    "": 3361,
    "date": "2014-9-15",
    "actual_mean_temp": 96,
    "actual_min_temp": 87,
    "actual_max_temp": 105,
    "actual_precipitation": 0,
    "location": "PHX"
  },
  {
    "": 3362,
    "date": "2014-9-16",
    "actual_mean_temp": 86,
    "actual_min_temp": 80,
    "actual_max_temp": 92,
    "actual_precipitation": 0.01,
    "location": "PHX"
  },
  {
    "": 3363,
    "date": "2014-9-17",
    "actual_mean_temp": 84,
    "actual_min_temp": 78,
    "actual_max_temp": 89,
    "actual_precipitation": 0.14,
    "location": "PHX"
  },
  {
    "": 3364,
    "date": "2014-9-18",
    "actual_mean_temp": 86,
    "actual_min_temp": 76,
    "actual_max_temp": 96,
    "actual_precipitation": 0,
    "location": "PHX"
  },
  {
    "": 3365,
    "date": "2014-9-19",
    "actual_mean_temp": 90,
    "actual_min_temp": 82,
    "actual_max_temp": 98,
    "actual_precipitation": 0,
    "location": "PHX"
  },
  {
    "": 3366,
    "date": "2014-9-20",
    "actual_mean_temp": 90,
    "actual_min_temp": 81,
    "actual_max_temp": 99,
    "actual_precipitation": 0,
    "location": "PHX"
  },
  {
    "": 3367,
    "date": "2014-9-21",
    "actual_mean_temp": 90,
    "actual_min_temp": 80,
    "actual_max_temp": 99,
    "actual_precipitation": 0,
    "location": "PHX"
  },
  {
    "": 3368,
    "date": "2014-9-22",
    "actual_mean_temp": 91,
    "actual_min_temp": 80,
    "actual_max_temp": 101,
    "actual_precipitation": 0,
    "location": "PHX"
  },
  {
    "": 3369,
    "date": "2014-9-23",
    "actual_mean_temp": 90,
    "actual_min_temp": 77,
    "actual_max_temp": 102,
    "actual_precipitation": 0,
    "location": "PHX"
  },
  {
    "": 3370,
    "date": "2014-9-24",
    "actual_mean_temp": 91,
    "actual_min_temp": 77,
    "actual_max_temp": 104,
    "actual_precipitation": 0,
    "location": "PHX"
  },
  {
    "": 3371,
    "date": "2014-9-25",
    "actual_mean_temp": 92,
    "actual_min_temp": 81,
    "actual_max_temp": 103,
    "actual_precipitation": 0,
    "location": "PHX"
  },
  {
    "": 3372,
    "date": "2014-9-26",
    "actual_mean_temp": 92,
    "actual_min_temp": 82,
    "actual_max_temp": 101,
    "actual_precipitation": 0,
    "location": "PHX"
  },
  {
    "": 3373,
    "date": "2014-9-27",
    "actual_mean_temp": 82,
    "actual_min_temp": 69,
    "actual_max_temp": 95,
    "actual_precipitation": 1.64,
    "location": "PHX"
  },
  {
    "": 3374,
    "date": "2014-9-28",
    "actual_mean_temp": 79,
    "actual_min_temp": 71,
    "actual_max_temp": 87,
    "actual_precipitation": 0.02,
    "location": "PHX"
  },
  {
    "": 3375,
    "date": "2014-9-29",
    "actual_mean_temp": 78,
    "actual_min_temp": 67,
    "actual_max_temp": 89,
    "actual_precipitation": 0,
    "location": "PHX"
  },
  {
    "": 3376,
    "date": "2014-9-30",
    "actual_mean_temp": 78,
    "actual_min_temp": 66,
    "actual_max_temp": 89,
    "actual_precipitation": 0,
    "location": "PHX"
  },
  {
    "": 3377,
    "date": "2014-10-1",
    "actual_mean_temp": 79,
    "actual_min_temp": 67,
    "actual_max_temp": 91,
    "actual_precipitation": 0,
    "location": "PHX"
  },
  {
    "": 3378,
    "date": "2014-10-2",
    "actual_mean_temp": 81,
    "actual_min_temp": 69,
    "actual_max_temp": 92,
    "actual_precipitation": 0,
    "location": "PHX"
  },
  {
    "": 3379,
    "date": "2014-10-3",
    "actual_mean_temp": 83,
    "actual_min_temp": 67,
    "actual_max_temp": 99,
    "actual_precipitation": 0,
    "location": "PHX"
  },
  {
    "": 3380,
    "date": "2014-10-4",
    "actual_mean_temp": 84,
    "actual_min_temp": 69,
    "actual_max_temp": 99,
    "actual_precipitation": 0,
    "location": "PHX"
  },
  {
    "": 3381,
    "date": "2014-10-5",
    "actual_mean_temp": 83,
    "actual_min_temp": 69,
    "actual_max_temp": 96,
    "actual_precipitation": 0,
    "location": "PHX"
  },
  {
    "": 3382,
    "date": "2014-10-6",
    "actual_mean_temp": 82,
    "actual_min_temp": 70,
    "actual_max_temp": 93,
    "actual_precipitation": 0,
    "location": "PHX"
  },
  {
    "": 3383,
    "date": "2014-10-7",
    "actual_mean_temp": 81,
    "actual_min_temp": 72,
    "actual_max_temp": 90,
    "actual_precipitation": 0,
    "location": "PHX"
  },
  {
    "": 3384,
    "date": "2014-10-8",
    "actual_mean_temp": 76,
    "actual_min_temp": 69,
    "actual_max_temp": 82,
    "actual_precipitation": 0.05,
    "location": "PHX"
  },
  {
    "": 3385,
    "date": "2014-10-9",
    "actual_mean_temp": 77,
    "actual_min_temp": 70,
    "actual_max_temp": 84,
    "actual_precipitation": 0,
    "location": "PHX"
  },
  {
    "": 3386,
    "date": "2014-10-10",
    "actual_mean_temp": 79,
    "actual_min_temp": 69,
    "actual_max_temp": 89,
    "actual_precipitation": 0,
    "location": "PHX"
  },
  {
    "": 3387,
    "date": "2014-10-11",
    "actual_mean_temp": 81,
    "actual_min_temp": 70,
    "actual_max_temp": 92,
    "actual_precipitation": 0,
    "location": "PHX"
  },
  {
    "": 3388,
    "date": "2014-10-12",
    "actual_mean_temp": 82,
    "actual_min_temp": 70,
    "actual_max_temp": 94,
    "actual_precipitation": 0,
    "location": "PHX"
  },
  {
    "": 3389,
    "date": "2014-10-13",
    "actual_mean_temp": 78,
    "actual_min_temp": 65,
    "actual_max_temp": 90,
    "actual_precipitation": 0,
    "location": "PHX"
  },
  {
    "": 3390,
    "date": "2014-10-14",
    "actual_mean_temp": 80,
    "actual_min_temp": 65,
    "actual_max_temp": 94,
    "actual_precipitation": 0,
    "location": "PHX"
  },
  {
    "": 3391,
    "date": "2014-10-15",
    "actual_mean_temp": 80,
    "actual_min_temp": 69,
    "actual_max_temp": 90,
    "actual_precipitation": 0,
    "location": "PHX"
  },
  {
    "": 3392,
    "date": "2014-10-16",
    "actual_mean_temp": 80,
    "actual_min_temp": 67,
    "actual_max_temp": 92,
    "actual_precipitation": 0,
    "location": "PHX"
  },
  {
    "": 3393,
    "date": "2014-10-17",
    "actual_mean_temp": 80,
    "actual_min_temp": 71,
    "actual_max_temp": 89,
    "actual_precipitation": 0,
    "location": "PHX"
  },
  {
    "": 3394,
    "date": "2014-10-18",
    "actual_mean_temp": 79,
    "actual_min_temp": 68,
    "actual_max_temp": 90,
    "actual_precipitation": 0,
    "location": "PHX"
  },
  {
    "": 3395,
    "date": "2014-10-19",
    "actual_mean_temp": 82,
    "actual_min_temp": 69,
    "actual_max_temp": 94,
    "actual_precipitation": 0.08,
    "location": "PHX"
  },
  {
    "": 3396,
    "date": "2014-10-20",
    "actual_mean_temp": 78,
    "actual_min_temp": 66,
    "actual_max_temp": 90,
    "actual_precipitation": 0,
    "location": "PHX"
  },
  {
    "": 3397,
    "date": "2014-10-21",
    "actual_mean_temp": 80,
    "actual_min_temp": 69,
    "actual_max_temp": 91,
    "actual_precipitation": 0,
    "location": "PHX"
  },
  {
    "": 3398,
    "date": "2014-10-22",
    "actual_mean_temp": 80,
    "actual_min_temp": 67,
    "actual_max_temp": 93,
    "actual_precipitation": 0,
    "location": "PHX"
  },
  {
    "": 3399,
    "date": "2014-10-23",
    "actual_mean_temp": 81,
    "actual_min_temp": 67,
    "actual_max_temp": 94,
    "actual_precipitation": 0,
    "location": "PHX"
  },
  {
    "": 3400,
    "date": "2014-10-24",
    "actual_mean_temp": 82,
    "actual_min_temp": 68,
    "actual_max_temp": 96,
    "actual_precipitation": 0,
    "location": "PHX"
  },
  {
    "": 3401,
    "date": "2014-10-25",
    "actual_mean_temp": 83,
    "actual_min_temp": 70,
    "actual_max_temp": 96,
    "actual_precipitation": 0,
    "location": "PHX"
  },
  {
    "": 3402,
    "date": "2014-10-26",
    "actual_mean_temp": 80,
    "actual_min_temp": 71,
    "actual_max_temp": 89,
    "actual_precipitation": 0,
    "location": "PHX"
  },
  {
    "": 3403,
    "date": "2014-10-27",
    "actual_mean_temp": 80,
    "actual_min_temp": 71,
    "actual_max_temp": 88,
    "actual_precipitation": 0,
    "location": "PHX"
  },
  {
    "": 3404,
    "date": "2014-10-28",
    "actual_mean_temp": 77,
    "actual_min_temp": 65,
    "actual_max_temp": 88,
    "actual_precipitation": 0,
    "location": "PHX"
  },
  {
    "": 3405,
    "date": "2014-10-29",
    "actual_mean_temp": 78,
    "actual_min_temp": 64,
    "actual_max_temp": 91,
    "actual_precipitation": 0,
    "location": "PHX"
  },
  {
    "": 3406,
    "date": "2014-10-30",
    "actual_mean_temp": 79,
    "actual_min_temp": 64,
    "actual_max_temp": 94,
    "actual_precipitation": 0,
    "location": "PHX"
  },
  {
    "": 3407,
    "date": "2014-10-31",
    "actual_mean_temp": 81,
    "actual_min_temp": 67,
    "actual_max_temp": 95,
    "actual_precipitation": 0,
    "location": "PHX"
  },
  {
    "": 3408,
    "date": "2014-11-1",
    "actual_mean_temp": 76,
    "actual_min_temp": 69,
    "actual_max_temp": 83,
    "actual_precipitation": 0,
    "location": "PHX"
  },
  {
    "": 3409,
    "date": "2014-11-2",
    "actual_mean_temp": 67,
    "actual_min_temp": 60,
    "actual_max_temp": 73,
    "actual_precipitation": 0,
    "location": "PHX"
  },
  {
    "": 3410,
    "date": "2014-11-3",
    "actual_mean_temp": 64,
    "actual_min_temp": 53,
    "actual_max_temp": 75,
    "actual_precipitation": 0,
    "location": "PHX"
  },
  {
    "": 3411,
    "date": "2014-11-4",
    "actual_mean_temp": 67,
    "actual_min_temp": 53,
    "actual_max_temp": 81,
    "actual_precipitation": 0,
    "location": "PHX"
  },
  {
    "": 3412,
    "date": "2014-11-5",
    "actual_mean_temp": 73,
    "actual_min_temp": 60,
    "actual_max_temp": 85,
    "actual_precipitation": 0,
    "location": "PHX"
  },
  {
    "": 3413,
    "date": "2014-11-6",
    "actual_mean_temp": 73,
    "actual_min_temp": 60,
    "actual_max_temp": 86,
    "actual_precipitation": 0,
    "location": "PHX"
  },
  {
    "": 3414,
    "date": "2014-11-7",
    "actual_mean_temp": 72,
    "actual_min_temp": 59,
    "actual_max_temp": 84,
    "actual_precipitation": 0,
    "location": "PHX"
  },
  {
    "": 3415,
    "date": "2014-11-8",
    "actual_mean_temp": 74,
    "actual_min_temp": 58,
    "actual_max_temp": 90,
    "actual_precipitation": 0,
    "location": "PHX"
  },
  {
    "": 3416,
    "date": "2014-11-9",
    "actual_mean_temp": 74,
    "actual_min_temp": 61,
    "actual_max_temp": 87,
    "actual_precipitation": 0,
    "location": "PHX"
  },
  {
    "": 3417,
    "date": "2014-11-10",
    "actual_mean_temp": 72,
    "actual_min_temp": 59,
    "actual_max_temp": 84,
    "actual_precipitation": 0,
    "location": "PHX"
  },
  {
    "": 3418,
    "date": "2014-11-11",
    "actual_mean_temp": 71,
    "actual_min_temp": 58,
    "actual_max_temp": 84,
    "actual_precipitation": 0,
    "location": "PHX"
  },
  {
    "": 3419,
    "date": "2014-11-12",
    "actual_mean_temp": 70,
    "actual_min_temp": 60,
    "actual_max_temp": 80,
    "actual_precipitation": 0,
    "location": "PHX"
  },
  {
    "": 3420,
    "date": "2014-11-13",
    "actual_mean_temp": 71,
    "actual_min_temp": 61,
    "actual_max_temp": 80,
    "actual_precipitation": 0,
    "location": "PHX"
  },
  {
    "": 3421,
    "date": "2014-11-14",
    "actual_mean_temp": 67,
    "actual_min_temp": 61,
    "actual_max_temp": 73,
    "actual_precipitation": 0,
    "location": "PHX"
  },
  {
    "": 3422,
    "date": "2014-11-15",
    "actual_mean_temp": 67,
    "actual_min_temp": 57,
    "actual_max_temp": 77,
    "actual_precipitation": 0,
    "location": "PHX"
  },
  {
    "": 3423,
    "date": "2014-11-16",
    "actual_mean_temp": 62,
    "actual_min_temp": 53,
    "actual_max_temp": 71,
    "actual_precipitation": 0,
    "location": "PHX"
  },
  {
    "": 3424,
    "date": "2014-11-17",
    "actual_mean_temp": 59,
    "actual_min_temp": 47,
    "actual_max_temp": 71,
    "actual_precipitation": 0,
    "location": "PHX"
  },
  {
    "": 3425,
    "date": "2014-11-18",
    "actual_mean_temp": 61,
    "actual_min_temp": 47,
    "actual_max_temp": 74,
    "actual_precipitation": 0,
    "location": "PHX"
  },
  {
    "": 3426,
    "date": "2014-11-19",
    "actual_mean_temp": 62,
    "actual_min_temp": 50,
    "actual_max_temp": 74,
    "actual_precipitation": 0,
    "location": "PHX"
  },
  {
    "": 3427,
    "date": "2014-11-20",
    "actual_mean_temp": 61,
    "actual_min_temp": 48,
    "actual_max_temp": 74,
    "actual_precipitation": 0,
    "location": "PHX"
  },
  {
    "": 3428,
    "date": "2014-11-21",
    "actual_mean_temp": 63,
    "actual_min_temp": 53,
    "actual_max_temp": 72,
    "actual_precipitation": 0,
    "location": "PHX"
  },
  {
    "": 3429,
    "date": "2014-11-22",
    "actual_mean_temp": 59,
    "actual_min_temp": 46,
    "actual_max_temp": 72,
    "actual_precipitation": 0,
    "location": "PHX"
  },
  {
    "": 3430,
    "date": "2014-11-23",
    "actual_mean_temp": 61,
    "actual_min_temp": 48,
    "actual_max_temp": 74,
    "actual_precipitation": 0,
    "location": "PHX"
  },
  {
    "": 3431,
    "date": "2014-11-24",
    "actual_mean_temp": 57,
    "actual_min_temp": 42,
    "actual_max_temp": 71,
    "actual_precipitation": 0,
    "location": "PHX"
  },
  {
    "": 3432,
    "date": "2014-11-25",
    "actual_mean_temp": 58,
    "actual_min_temp": 46,
    "actual_max_temp": 69,
    "actual_precipitation": 0,
    "location": "PHX"
  },
  {
    "": 3433,
    "date": "2014-11-26",
    "actual_mean_temp": 59,
    "actual_min_temp": 44,
    "actual_max_temp": 74,
    "actual_precipitation": 0,
    "location": "PHX"
  },
  {
    "": 3434,
    "date": "2014-11-27",
    "actual_mean_temp": 67,
    "actual_min_temp": 47,
    "actual_max_temp": 87,
    "actual_precipitation": 0,
    "location": "PHX"
  },
  {
    "": 3435,
    "date": "2014-11-28",
    "actual_mean_temp": 68,
    "actual_min_temp": 52,
    "actual_max_temp": 84,
    "actual_precipitation": 0,
    "location": "PHX"
  },
  {
    "": 3436,
    "date": "2014-11-29",
    "actual_mean_temp": 66,
    "actual_min_temp": 51,
    "actual_max_temp": 80,
    "actual_precipitation": 0,
    "location": "PHX"
  },
  {
    "": 3437,
    "date": "2014-11-30",
    "actual_mean_temp": 67,
    "actual_min_temp": 53,
    "actual_max_temp": 80,
    "actual_precipitation": 0,
    "location": "PHX"
  },
  {
    "": 3438,
    "date": "2014-12-1",
    "actual_mean_temp": 62,
    "actual_min_temp": 51,
    "actual_max_temp": 73,
    "actual_precipitation": 0,
    "location": "PHX"
  },
  {
    "": 3439,
    "date": "2014-12-2",
    "actual_mean_temp": 62,
    "actual_min_temp": 54,
    "actual_max_temp": 70,
    "actual_precipitation": 0.03,
    "location": "PHX"
  },
  {
    "": 3440,
    "date": "2014-12-3",
    "actual_mean_temp": 68,
    "actual_min_temp": 60,
    "actual_max_temp": 76,
    "actual_precipitation": 0.01,
    "location": "PHX"
  },
  {
    "": 3441,
    "date": "2014-12-4",
    "actual_mean_temp": 64,
    "actual_min_temp": 60,
    "actual_max_temp": 68,
    "actual_precipitation": 0.61,
    "location": "PHX"
  },
  {
    "": 3442,
    "date": "2014-12-5",
    "actual_mean_temp": 65,
    "actual_min_temp": 57,
    "actual_max_temp": 72,
    "actual_precipitation": 0,
    "location": "PHX"
  },
  {
    "": 3443,
    "date": "2014-12-6",
    "actual_mean_temp": 64,
    "actual_min_temp": 57,
    "actual_max_temp": 71,
    "actual_precipitation": 0,
    "location": "PHX"
  },
  {
    "": 3444,
    "date": "2014-12-7",
    "actual_mean_temp": 64,
    "actual_min_temp": 51,
    "actual_max_temp": 77,
    "actual_precipitation": 0,
    "location": "PHX"
  },
  {
    "": 3445,
    "date": "2014-12-8",
    "actual_mean_temp": 66,
    "actual_min_temp": 55,
    "actual_max_temp": 76,
    "actual_precipitation": 0,
    "location": "PHX"
  },
  {
    "": 3446,
    "date": "2014-12-9",
    "actual_mean_temp": 66,
    "actual_min_temp": 54,
    "actual_max_temp": 78,
    "actual_precipitation": 0,
    "location": "PHX"
  },
  {
    "": 3447,
    "date": "2014-12-10",
    "actual_mean_temp": 66,
    "actual_min_temp": 54,
    "actual_max_temp": 77,
    "actual_precipitation": 0,
    "location": "PHX"
  },
  {
    "": 3448,
    "date": "2014-12-11",
    "actual_mean_temp": 66,
    "actual_min_temp": 56,
    "actual_max_temp": 76,
    "actual_precipitation": 0,
    "location": "PHX"
  },
  {
    "": 3449,
    "date": "2014-12-12",
    "actual_mean_temp": 68,
    "actual_min_temp": 57,
    "actual_max_temp": 78,
    "actual_precipitation": 0,
    "location": "PHX"
  },
  {
    "": 3450,
    "date": "2014-12-13",
    "actual_mean_temp": 59,
    "actual_min_temp": 51,
    "actual_max_temp": 66,
    "actual_precipitation": 0.08,
    "location": "PHX"
  },
  {
    "": 3451,
    "date": "2014-12-14",
    "actual_mean_temp": 55,
    "actual_min_temp": 46,
    "actual_max_temp": 63,
    "actual_precipitation": 0,
    "location": "PHX"
  },
  {
    "": 3452,
    "date": "2014-12-15",
    "actual_mean_temp": 55,
    "actual_min_temp": 46,
    "actual_max_temp": 64,
    "actual_precipitation": 0,
    "location": "PHX"
  },
  {
    "": 3453,
    "date": "2014-12-16",
    "actual_mean_temp": 57,
    "actual_min_temp": 49,
    "actual_max_temp": 65,
    "actual_precipitation": 0,
    "location": "PHX"
  },
  {
    "": 3454,
    "date": "2014-12-17",
    "actual_mean_temp": 56,
    "actual_min_temp": 51,
    "actual_max_temp": 61,
    "actual_precipitation": 0.07,
    "location": "PHX"
  },
  {
    "": 3455,
    "date": "2014-12-18",
    "actual_mean_temp": 56,
    "actual_min_temp": 50,
    "actual_max_temp": 62,
    "actual_precipitation": 0,
    "location": "PHX"
  },
  {
    "": 3456,
    "date": "2014-12-19",
    "actual_mean_temp": 55,
    "actual_min_temp": 45,
    "actual_max_temp": 64,
    "actual_precipitation": 0,
    "location": "PHX"
  },
  {
    "": 3457,
    "date": "2014-12-20",
    "actual_mean_temp": 56,
    "actual_min_temp": 45,
    "actual_max_temp": 66,
    "actual_precipitation": 0,
    "location": "PHX"
  },
  {
    "": 3458,
    "date": "2014-12-21",
    "actual_mean_temp": 56,
    "actual_min_temp": 47,
    "actual_max_temp": 65,
    "actual_precipitation": 0,
    "location": "PHX"
  },
  {
    "": 3459,
    "date": "2014-12-22",
    "actual_mean_temp": 57,
    "actual_min_temp": 47,
    "actual_max_temp": 66,
    "actual_precipitation": 0,
    "location": "PHX"
  },
  {
    "": 3460,
    "date": "2014-12-23",
    "actual_mean_temp": 58,
    "actual_min_temp": 47,
    "actual_max_temp": 68,
    "actual_precipitation": 0,
    "location": "PHX"
  },
  {
    "": 3461,
    "date": "2014-12-24",
    "actual_mean_temp": 55,
    "actual_min_temp": 43,
    "actual_max_temp": 66,
    "actual_precipitation": 0,
    "location": "PHX"
  },
  {
    "": 3462,
    "date": "2014-12-25",
    "actual_mean_temp": 55,
    "actual_min_temp": 45,
    "actual_max_temp": 64,
    "actual_precipitation": 0,
    "location": "PHX"
  },
  {
    "": 3463,
    "date": "2014-12-26",
    "actual_mean_temp": 48,
    "actual_min_temp": 38,
    "actual_max_temp": 57,
    "actual_precipitation": 0,
    "location": "PHX"
  },
  {
    "": 3464,
    "date": "2014-12-27",
    "actual_mean_temp": 48,
    "actual_min_temp": 35,
    "actual_max_temp": 60,
    "actual_precipitation": 0,
    "location": "PHX"
  },
  {
    "": 3465,
    "date": "2014-12-28",
    "actual_mean_temp": 48,
    "actual_min_temp": 36,
    "actual_max_temp": 60,
    "actual_precipitation": 0,
    "location": "PHX"
  },
  {
    "": 3466,
    "date": "2014-12-29",
    "actual_mean_temp": 49,
    "actual_min_temp": 36,
    "actual_max_temp": 61,
    "actual_precipitation": 0,
    "location": "PHX"
  },
  {
    "": 3467,
    "date": "2014-12-30",
    "actual_mean_temp": 50,
    "actual_min_temp": 37,
    "actual_max_temp": 63,
    "actual_precipitation": 0,
    "location": "PHX"
  },
  {
    "": 3468,
    "date": "2014-12-31",
    "actual_mean_temp": 43,
    "actual_min_temp": 36,
    "actual_max_temp": 50,
    "actual_precipitation": 0.11,
    "location": "PHX"
  },
  {
    "": 3469,
    "date": "2015-1-1",
    "actual_mean_temp": 41,
    "actual_min_temp": 35,
    "actual_max_temp": 46,
    "actual_precipitation": 0,
    "location": "PHX"
  },
  {
    "": 3470,
    "date": "2015-1-2",
    "actual_mean_temp": 43,
    "actual_min_temp": 31,
    "actual_max_temp": 54,
    "actual_precipitation": 0,
    "location": "PHX"
  },
  {
    "": 3471,
    "date": "2015-1-3",
    "actual_mean_temp": 44,
    "actual_min_temp": 34,
    "actual_max_temp": 54,
    "actual_precipitation": 0,
    "location": "PHX"
  },
  {
    "": 3472,
    "date": "2015-1-4",
    "actual_mean_temp": 50,
    "actual_min_temp": 35,
    "actual_max_temp": 65,
    "actual_precipitation": 0,
    "location": "PHX"
  },
  {
    "": 3473,
    "date": "2015-1-5",
    "actual_mean_temp": 57,
    "actual_min_temp": 40,
    "actual_max_temp": 74,
    "actual_precipitation": 0,
    "location": "PHX"
  },
  {
    "": 3474,
    "date": "2015-1-6",
    "actual_mean_temp": 62,
    "actual_min_temp": 44,
    "actual_max_temp": 79,
    "actual_precipitation": 0,
    "location": "PHX"
  },
  {
    "": 3475,
    "date": "2015-1-7",
    "actual_mean_temp": 64,
    "actual_min_temp": 47,
    "actual_max_temp": 81,
    "actual_precipitation": 0,
    "location": "PHX"
  },
  {
    "": 3476,
    "date": "2015-1-8",
    "actual_mean_temp": 63,
    "actual_min_temp": 54,
    "actual_max_temp": 71,
    "actual_precipitation": 0,
    "location": "PHX"
  },
  {
    "": 3477,
    "date": "2015-1-9",
    "actual_mean_temp": 63,
    "actual_min_temp": 51,
    "actual_max_temp": 75,
    "actual_precipitation": 0,
    "location": "PHX"
  },
  {
    "": 3478,
    "date": "2015-1-10",
    "actual_mean_temp": 60,
    "actual_min_temp": 54,
    "actual_max_temp": 65,
    "actual_precipitation": 0,
    "location": "PHX"
  },
  {
    "": 3479,
    "date": "2015-1-11",
    "actual_mean_temp": 63,
    "actual_min_temp": 54,
    "actual_max_temp": 72,
    "actual_precipitation": 0.01,
    "location": "PHX"
  },
  {
    "": 3480,
    "date": "2015-1-12",
    "actual_mean_temp": 62,
    "actual_min_temp": 56,
    "actual_max_temp": 67,
    "actual_precipitation": 0.02,
    "location": "PHX"
  },
  {
    "": 3481,
    "date": "2015-1-13",
    "actual_mean_temp": 57,
    "actual_min_temp": 51,
    "actual_max_temp": 63,
    "actual_precipitation": 0.11,
    "location": "PHX"
  },
  {
    "": 3482,
    "date": "2015-1-14",
    "actual_mean_temp": 57,
    "actual_min_temp": 46,
    "actual_max_temp": 67,
    "actual_precipitation": 0,
    "location": "PHX"
  },
  {
    "": 3483,
    "date": "2015-1-15",
    "actual_mean_temp": 60,
    "actual_min_temp": 47,
    "actual_max_temp": 72,
    "actual_precipitation": 0,
    "location": "PHX"
  },
  {
    "": 3484,
    "date": "2015-1-16",
    "actual_mean_temp": 62,
    "actual_min_temp": 49,
    "actual_max_temp": 74,
    "actual_precipitation": 0,
    "location": "PHX"
  },
  {
    "": 3485,
    "date": "2015-1-17",
    "actual_mean_temp": 60,
    "actual_min_temp": 47,
    "actual_max_temp": 73,
    "actual_precipitation": 0,
    "location": "PHX"
  },
  {
    "": 3486,
    "date": "2015-1-18",
    "actual_mean_temp": 62,
    "actual_min_temp": 48,
    "actual_max_temp": 75,
    "actual_precipitation": 0,
    "location": "PHX"
  },
  {
    "": 3487,
    "date": "2015-1-19",
    "actual_mean_temp": 63,
    "actual_min_temp": 50,
    "actual_max_temp": 75,
    "actual_precipitation": 0,
    "location": "PHX"
  },
  {
    "": 3488,
    "date": "2015-1-20",
    "actual_mean_temp": 62,
    "actual_min_temp": 48,
    "actual_max_temp": 75,
    "actual_precipitation": 0,
    "location": "PHX"
  },
  {
    "": 3489,
    "date": "2015-1-21",
    "actual_mean_temp": 64,
    "actual_min_temp": 53,
    "actual_max_temp": 74,
    "actual_precipitation": 0,
    "location": "PHX"
  },
  {
    "": 3490,
    "date": "2015-1-22",
    "actual_mean_temp": 57,
    "actual_min_temp": 48,
    "actual_max_temp": 65,
    "actual_precipitation": 0,
    "location": "PHX"
  },
  {
    "": 3491,
    "date": "2015-1-23",
    "actual_mean_temp": 54,
    "actual_min_temp": 43,
    "actual_max_temp": 64,
    "actual_precipitation": 0,
    "location": "PHX"
  },
  {
    "": 3492,
    "date": "2015-1-24",
    "actual_mean_temp": 64,
    "actual_min_temp": 50,
    "actual_max_temp": 77,
    "actual_precipitation": 0,
    "location": "PHX"
  },
  {
    "": 3493,
    "date": "2015-1-25",
    "actual_mean_temp": 63,
    "actual_min_temp": 48,
    "actual_max_temp": 78,
    "actual_precipitation": 0,
    "location": "PHX"
  },
  {
    "": 3494,
    "date": "2015-1-26",
    "actual_mean_temp": 62,
    "actual_min_temp": 53,
    "actual_max_temp": 71,
    "actual_precipitation": 0.01,
    "location": "PHX"
  },
  {
    "": 3495,
    "date": "2015-1-27",
    "actual_mean_temp": 64,
    "actual_min_temp": 53,
    "actual_max_temp": 74,
    "actual_precipitation": 0,
    "location": "PHX"
  },
  {
    "": 3496,
    "date": "2015-1-28",
    "actual_mean_temp": 64,
    "actual_min_temp": 52,
    "actual_max_temp": 75,
    "actual_precipitation": 0,
    "location": "PHX"
  },
  {
    "": 3497,
    "date": "2015-1-29",
    "actual_mean_temp": 65,
    "actual_min_temp": 58,
    "actual_max_temp": 71,
    "actual_precipitation": 0.24,
    "location": "PHX"
  },
  {
    "": 3498,
    "date": "2015-1-30",
    "actual_mean_temp": 58,
    "actual_min_temp": 55,
    "actual_max_temp": 60,
    "actual_precipitation": 0.35,
    "location": "PHX"
  },
  {
    "": 3499,
    "date": "2015-1-31",
    "actual_mean_temp": 57,
    "actual_min_temp": 53,
    "actual_max_temp": 60,
    "actual_precipitation": 0.07,
    "location": "PHX"
  },
  {
    "": 3500,
    "date": "2015-2-1",
    "actual_mean_temp": 60,
    "actual_min_temp": 50,
    "actual_max_temp": 69,
    "actual_precipitation": 0,
    "location": "PHX"
  },
  {
    "": 3501,
    "date": "2015-2-2",
    "actual_mean_temp": 61,
    "actual_min_temp": 48,
    "actual_max_temp": 73,
    "actual_precipitation": 0,
    "location": "PHX"
  },
  {
    "": 3502,
    "date": "2015-2-3",
    "actual_mean_temp": 63,
    "actual_min_temp": 50,
    "actual_max_temp": 76,
    "actual_precipitation": 0,
    "location": "PHX"
  },
  {
    "": 3503,
    "date": "2015-2-4",
    "actual_mean_temp": 65,
    "actual_min_temp": 52,
    "actual_max_temp": 77,
    "actual_precipitation": 0,
    "location": "PHX"
  },
  {
    "": 3504,
    "date": "2015-2-5",
    "actual_mean_temp": 67,
    "actual_min_temp": 52,
    "actual_max_temp": 82,
    "actual_precipitation": 0,
    "location": "PHX"
  },
  {
    "": 3505,
    "date": "2015-2-6",
    "actual_mean_temp": 69,
    "actual_min_temp": 54,
    "actual_max_temp": 84,
    "actual_precipitation": 0,
    "location": "PHX"
  },
  {
    "": 3506,
    "date": "2015-2-7",
    "actual_mean_temp": 67,
    "actual_min_temp": 53,
    "actual_max_temp": 81,
    "actual_precipitation": 0,
    "location": "PHX"
  },
  {
    "": 3507,
    "date": "2015-2-8",
    "actual_mean_temp": 69,
    "actual_min_temp": 55,
    "actual_max_temp": 82,
    "actual_precipitation": 0,
    "location": "PHX"
  },
  {
    "": 3508,
    "date": "2015-2-9",
    "actual_mean_temp": 69,
    "actual_min_temp": 55,
    "actual_max_temp": 83,
    "actual_precipitation": 0,
    "location": "PHX"
  },
  {
    "": 3509,
    "date": "2015-2-10",
    "actual_mean_temp": 70,
    "actual_min_temp": 57,
    "actual_max_temp": 83,
    "actual_precipitation": 0,
    "location": "PHX"
  },
  {
    "": 3510,
    "date": "2015-2-11",
    "actual_mean_temp": 68,
    "actual_min_temp": 54,
    "actual_max_temp": 81,
    "actual_precipitation": 0,
    "location": "PHX"
  },
  {
    "": 3511,
    "date": "2015-2-12",
    "actual_mean_temp": 68,
    "actual_min_temp": 58,
    "actual_max_temp": 78,
    "actual_precipitation": 0,
    "location": "PHX"
  },
  {
    "": 3512,
    "date": "2015-2-13",
    "actual_mean_temp": 68,
    "actual_min_temp": 55,
    "actual_max_temp": 80,
    "actual_precipitation": 0,
    "location": "PHX"
  },
  {
    "": 3513,
    "date": "2015-2-14",
    "actual_mean_temp": 69,
    "actual_min_temp": 54,
    "actual_max_temp": 83,
    "actual_precipitation": 0,
    "location": "PHX"
  },
  {
    "": 3514,
    "date": "2015-2-15",
    "actual_mean_temp": 71,
    "actual_min_temp": 63,
    "actual_max_temp": 79,
    "actual_precipitation": 0,
    "location": "PHX"
  },
  {
    "": 3515,
    "date": "2015-2-16",
    "actual_mean_temp": 67,
    "actual_min_temp": 55,
    "actual_max_temp": 79,
    "actual_precipitation": 0,
    "location": "PHX"
  },
  {
    "": 3516,
    "date": "2015-2-17",
    "actual_mean_temp": 66,
    "actual_min_temp": 55,
    "actual_max_temp": 77,
    "actual_precipitation": 0,
    "location": "PHX"
  },
  {
    "": 3517,
    "date": "2015-2-18",
    "actual_mean_temp": 65,
    "actual_min_temp": 50,
    "actual_max_temp": 79,
    "actual_precipitation": 0,
    "location": "PHX"
  },
  {
    "": 3518,
    "date": "2015-2-19",
    "actual_mean_temp": 66,
    "actual_min_temp": 52,
    "actual_max_temp": 80,
    "actual_precipitation": 0,
    "location": "PHX"
  },
  {
    "": 3519,
    "date": "2015-2-20",
    "actual_mean_temp": 67,
    "actual_min_temp": 55,
    "actual_max_temp": 79,
    "actual_precipitation": 0,
    "location": "PHX"
  },
  {
    "": 3520,
    "date": "2015-2-21",
    "actual_mean_temp": 67,
    "actual_min_temp": 54,
    "actual_max_temp": 79,
    "actual_precipitation": 0,
    "location": "PHX"
  },
  {
    "": 3521,
    "date": "2015-2-22",
    "actual_mean_temp": 64,
    "actual_min_temp": 56,
    "actual_max_temp": 72,
    "actual_precipitation": 0,
    "location": "PHX"
  },
  {
    "": 3522,
    "date": "2015-2-23",
    "actual_mean_temp": 65,
    "actual_min_temp": 59,
    "actual_max_temp": 70,
    "actual_precipitation": 0.01,
    "location": "PHX"
  },
  {
    "": 3523,
    "date": "2015-2-24",
    "actual_mean_temp": 59,
    "actual_min_temp": 51,
    "actual_max_temp": 67,
    "actual_precipitation": 0,
    "location": "PHX"
  },
  {
    "": 3524,
    "date": "2015-2-25",
    "actual_mean_temp": 60,
    "actual_min_temp": 47,
    "actual_max_temp": 72,
    "actual_precipitation": 0,
    "location": "PHX"
  },
  {
    "": 3525,
    "date": "2015-2-26",
    "actual_mean_temp": 64,
    "actual_min_temp": 51,
    "actual_max_temp": 77,
    "actual_precipitation": 0,
    "location": "PHX"
  },
  {
    "": 3526,
    "date": "2015-2-27",
    "actual_mean_temp": 64,
    "actual_min_temp": 50,
    "actual_max_temp": 78,
    "actual_precipitation": 0,
    "location": "PHX"
  },
  {
    "": 3527,
    "date": "2015-2-28",
    "actual_mean_temp": 65,
    "actual_min_temp": 60,
    "actual_max_temp": 70,
    "actual_precipitation": 0,
    "location": "PHX"
  },
  {
    "": 3528,
    "date": "2015-3-1",
    "actual_mean_temp": 69,
    "actual_min_temp": 61,
    "actual_max_temp": 77,
    "actual_precipitation": 0,
    "location": "PHX"
  },
  {
    "": 3529,
    "date": "2015-3-2",
    "actual_mean_temp": 59,
    "actual_min_temp": 52,
    "actual_max_temp": 66,
    "actual_precipitation": 0.23,
    "location": "PHX"
  },
  {
    "": 3530,
    "date": "2015-3-3",
    "actual_mean_temp": 56,
    "actual_min_temp": 47,
    "actual_max_temp": 65,
    "actual_precipitation": 0.07,
    "location": "PHX"
  },
  {
    "": 3531,
    "date": "2015-3-4",
    "actual_mean_temp": 59,
    "actual_min_temp": 47,
    "actual_max_temp": 70,
    "actual_precipitation": 0,
    "location": "PHX"
  },
  {
    "": 3532,
    "date": "2015-3-5",
    "actual_mean_temp": 61,
    "actual_min_temp": 46,
    "actual_max_temp": 75,
    "actual_precipitation": 0,
    "location": "PHX"
  },
  {
    "": 3533,
    "date": "2015-3-6",
    "actual_mean_temp": 67,
    "actual_min_temp": 51,
    "actual_max_temp": 83,
    "actual_precipitation": 0,
    "location": "PHX"
  },
  {
    "": 3534,
    "date": "2015-3-7",
    "actual_mean_temp": 69,
    "actual_min_temp": 55,
    "actual_max_temp": 83,
    "actual_precipitation": 0,
    "location": "PHX"
  },
  {
    "": 3535,
    "date": "2015-3-8",
    "actual_mean_temp": 69,
    "actual_min_temp": 55,
    "actual_max_temp": 83,
    "actual_precipitation": 0,
    "location": "PHX"
  },
  {
    "": 3536,
    "date": "2015-3-9",
    "actual_mean_temp": 70,
    "actual_min_temp": 56,
    "actual_max_temp": 84,
    "actual_precipitation": 0,
    "location": "PHX"
  },
  {
    "": 3537,
    "date": "2015-3-10",
    "actual_mean_temp": 73,
    "actual_min_temp": 58,
    "actual_max_temp": 87,
    "actual_precipitation": 0,
    "location": "PHX"
  },
  {
    "": 3538,
    "date": "2015-3-11",
    "actual_mean_temp": 73,
    "actual_min_temp": 59,
    "actual_max_temp": 87,
    "actual_precipitation": 0,
    "location": "PHX"
  },
  {
    "": 3539,
    "date": "2015-3-12",
    "actual_mean_temp": 77,
    "actual_min_temp": 68,
    "actual_max_temp": 86,
    "actual_precipitation": 0,
    "location": "PHX"
  },
  {
    "": 3540,
    "date": "2015-3-13",
    "actual_mean_temp": 74,
    "actual_min_temp": 60,
    "actual_max_temp": 88,
    "actual_precipitation": 0,
    "location": "PHX"
  },
  {
    "": 3541,
    "date": "2015-3-14",
    "actual_mean_temp": 76,
    "actual_min_temp": 63,
    "actual_max_temp": 88,
    "actual_precipitation": 0,
    "location": "PHX"
  },
  {
    "": 3542,
    "date": "2015-3-15",
    "actual_mean_temp": 76,
    "actual_min_temp": 63,
    "actual_max_temp": 89,
    "actual_precipitation": 0,
    "location": "PHX"
  },
  {
    "": 3543,
    "date": "2015-3-16",
    "actual_mean_temp": 78,
    "actual_min_temp": 65,
    "actual_max_temp": 90,
    "actual_precipitation": 0,
    "location": "PHX"
  },
  {
    "": 3544,
    "date": "2015-3-17",
    "actual_mean_temp": 78,
    "actual_min_temp": 64,
    "actual_max_temp": 91,
    "actual_precipitation": 0,
    "location": "PHX"
  },
  {
    "": 3545,
    "date": "2015-3-18",
    "actual_mean_temp": 72,
    "actual_min_temp": 62,
    "actual_max_temp": 81,
    "actual_precipitation": 0.02,
    "location": "PHX"
  },
  {
    "": 3546,
    "date": "2015-3-19",
    "actual_mean_temp": 65,
    "actual_min_temp": 60,
    "actual_max_temp": 70,
    "actual_precipitation": 0.01,
    "location": "PHX"
  },
  {
    "": 3547,
    "date": "2015-3-20",
    "actual_mean_temp": 71,
    "actual_min_temp": 61,
    "actual_max_temp": 81,
    "actual_precipitation": 0,
    "location": "PHX"
  },
  {
    "": 3548,
    "date": "2015-3-21",
    "actual_mean_temp": 73,
    "actual_min_temp": 60,
    "actual_max_temp": 85,
    "actual_precipitation": 0,
    "location": "PHX"
  },
  {
    "": 3549,
    "date": "2015-3-22",
    "actual_mean_temp": 75,
    "actual_min_temp": 60,
    "actual_max_temp": 89,
    "actual_precipitation": 0,
    "location": "PHX"
  },
  {
    "": 3550,
    "date": "2015-3-23",
    "actual_mean_temp": 75,
    "actual_min_temp": 61,
    "actual_max_temp": 88,
    "actual_precipitation": 0,
    "location": "PHX"
  },
  {
    "": 3551,
    "date": "2015-3-24",
    "actual_mean_temp": 73,
    "actual_min_temp": 59,
    "actual_max_temp": 86,
    "actual_precipitation": 0,
    "location": "PHX"
  },
  {
    "": 3552,
    "date": "2015-3-25",
    "actual_mean_temp": 75,
    "actual_min_temp": 62,
    "actual_max_temp": 88,
    "actual_precipitation": 0,
    "location": "PHX"
  },
  {
    "": 3553,
    "date": "2015-3-26",
    "actual_mean_temp": 77,
    "actual_min_temp": 64,
    "actual_max_temp": 89,
    "actual_precipitation": 0,
    "location": "PHX"
  },
  {
    "": 3554,
    "date": "2015-3-27",
    "actual_mean_temp": 79,
    "actual_min_temp": 63,
    "actual_max_temp": 95,
    "actual_precipitation": 0,
    "location": "PHX"
  },
  {
    "": 3555,
    "date": "2015-3-28",
    "actual_mean_temp": 80,
    "actual_min_temp": 64,
    "actual_max_temp": 95,
    "actual_precipitation": 0,
    "location": "PHX"
  },
  {
    "": 3556,
    "date": "2015-3-29",
    "actual_mean_temp": 81,
    "actual_min_temp": 65,
    "actual_max_temp": 97,
    "actual_precipitation": 0,
    "location": "PHX"
  },
  {
    "": 3557,
    "date": "2015-3-30",
    "actual_mean_temp": 83,
    "actual_min_temp": 70,
    "actual_max_temp": 96,
    "actual_precipitation": 0,
    "location": "PHX"
  },
  {
    "": 3558,
    "date": "2015-3-31",
    "actual_mean_temp": 82,
    "actual_min_temp": 68,
    "actual_max_temp": 95,
    "actual_precipitation": 0,
    "location": "PHX"
  },
  {
    "": 3559,
    "date": "2015-4-1",
    "actual_mean_temp": 79,
    "actual_min_temp": 67,
    "actual_max_temp": 91,
    "actual_precipitation": 0,
    "location": "PHX"
  },
  {
    "": 3560,
    "date": "2015-4-2",
    "actual_mean_temp": 76,
    "actual_min_temp": 64,
    "actual_max_temp": 87,
    "actual_precipitation": 0,
    "location": "PHX"
  },
  {
    "": 3561,
    "date": "2015-4-3",
    "actual_mean_temp": 73,
    "actual_min_temp": 60,
    "actual_max_temp": 86,
    "actual_precipitation": 0,
    "location": "PHX"
  },
  {
    "": 3562,
    "date": "2015-4-4",
    "actual_mean_temp": 76,
    "actual_min_temp": 62,
    "actual_max_temp": 89,
    "actual_precipitation": 0,
    "location": "PHX"
  },
  {
    "": 3563,
    "date": "2015-4-5",
    "actual_mean_temp": 75,
    "actual_min_temp": 61,
    "actual_max_temp": 89,
    "actual_precipitation": 0,
    "location": "PHX"
  },
  {
    "": 3564,
    "date": "2015-4-6",
    "actual_mean_temp": 74,
    "actual_min_temp": 61,
    "actual_max_temp": 86,
    "actual_precipitation": 0,
    "location": "PHX"
  },
  {
    "": 3565,
    "date": "2015-4-7",
    "actual_mean_temp": 71,
    "actual_min_temp": 58,
    "actual_max_temp": 84,
    "actual_precipitation": 0,
    "location": "PHX"
  },
  {
    "": 3566,
    "date": "2015-4-8",
    "actual_mean_temp": 70,
    "actual_min_temp": 61,
    "actual_max_temp": 78,
    "actual_precipitation": 0,
    "location": "PHX"
  },
  {
    "": 3567,
    "date": "2015-4-9",
    "actual_mean_temp": 69,
    "actual_min_temp": 54,
    "actual_max_temp": 83,
    "actual_precipitation": 0,
    "location": "PHX"
  },
  {
    "": 3568,
    "date": "2015-4-10",
    "actual_mean_temp": 72,
    "actual_min_temp": 57,
    "actual_max_temp": 87,
    "actual_precipitation": 0,
    "location": "PHX"
  },
  {
    "": 3569,
    "date": "2015-4-11",
    "actual_mean_temp": 73,
    "actual_min_temp": 60,
    "actual_max_temp": 86,
    "actual_precipitation": 0,
    "location": "PHX"
  },
  {
    "": 3570,
    "date": "2015-4-12",
    "actual_mean_temp": 76,
    "actual_min_temp": 65,
    "actual_max_temp": 86,
    "actual_precipitation": 0,
    "location": "PHX"
  },
  {
    "": 3571,
    "date": "2015-4-13",
    "actual_mean_temp": 77,
    "actual_min_temp": 63,
    "actual_max_temp": 90,
    "actual_precipitation": 0,
    "location": "PHX"
  },
  {
    "": 3572,
    "date": "2015-4-14",
    "actual_mean_temp": 81,
    "actual_min_temp": 67,
    "actual_max_temp": 94,
    "actual_precipitation": 0,
    "location": "PHX"
  },
  {
    "": 3573,
    "date": "2015-4-15",
    "actual_mean_temp": 75,
    "actual_min_temp": 65,
    "actual_max_temp": 84,
    "actual_precipitation": 0,
    "location": "PHX"
  },
  {
    "": 3574,
    "date": "2015-4-16",
    "actual_mean_temp": 66,
    "actual_min_temp": 56,
    "actual_max_temp": 75,
    "actual_precipitation": 0,
    "location": "PHX"
  },
  {
    "": 3575,
    "date": "2015-4-17",
    "actual_mean_temp": 69,
    "actual_min_temp": 55,
    "actual_max_temp": 82,
    "actual_precipitation": 0,
    "location": "PHX"
  },
  {
    "": 3576,
    "date": "2015-4-18",
    "actual_mean_temp": 75,
    "actual_min_temp": 59,
    "actual_max_temp": 90,
    "actual_precipitation": 0,
    "location": "PHX"
  },
  {
    "": 3577,
    "date": "2015-4-19",
    "actual_mean_temp": 77,
    "actual_min_temp": 62,
    "actual_max_temp": 92,
    "actual_precipitation": 0,
    "location": "PHX"
  },
  {
    "": 3578,
    "date": "2015-4-20",
    "actual_mean_temp": 79,
    "actual_min_temp": 65,
    "actual_max_temp": 93,
    "actual_precipitation": 0,
    "location": "PHX"
  },
  {
    "": 3579,
    "date": "2015-4-21",
    "actual_mean_temp": 78,
    "actual_min_temp": 65,
    "actual_max_temp": 91,
    "actual_precipitation": 0,
    "location": "PHX"
  },
  {
    "": 3580,
    "date": "2015-4-22",
    "actual_mean_temp": 77,
    "actual_min_temp": 65,
    "actual_max_temp": 89,
    "actual_precipitation": 0,
    "location": "PHX"
  },
  {
    "": 3581,
    "date": "2015-4-23",
    "actual_mean_temp": 73,
    "actual_min_temp": 62,
    "actual_max_temp": 83,
    "actual_precipitation": 0,
    "location": "PHX"
  },
  {
    "": 3582,
    "date": "2015-4-24",
    "actual_mean_temp": 70,
    "actual_min_temp": 62,
    "actual_max_temp": 78,
    "actual_precipitation": 0.02,
    "location": "PHX"
  },
  {
    "": 3583,
    "date": "2015-4-25",
    "actual_mean_temp": 69,
    "actual_min_temp": 56,
    "actual_max_temp": 81,
    "actual_precipitation": 0.02,
    "location": "PHX"
  },
  {
    "": 3584,
    "date": "2015-4-26",
    "actual_mean_temp": 65,
    "actual_min_temp": 54,
    "actual_max_temp": 75,
    "actual_precipitation": 0.14,
    "location": "PHX"
  },
  {
    "": 3585,
    "date": "2015-4-27",
    "actual_mean_temp": 72,
    "actual_min_temp": 57,
    "actual_max_temp": 87,
    "actual_precipitation": 0,
    "location": "PHX"
  },
  {
    "": 3586,
    "date": "2015-4-28",
    "actual_mean_temp": 81,
    "actual_min_temp": 68,
    "actual_max_temp": 93,
    "actual_precipitation": 0,
    "location": "PHX"
  },
  {
    "": 3587,
    "date": "2015-4-29",
    "actual_mean_temp": 84,
    "actual_min_temp": 71,
    "actual_max_temp": 96,
    "actual_precipitation": 0,
    "location": "PHX"
  },
  {
    "": 3588,
    "date": "2015-4-30",
    "actual_mean_temp": 85,
    "actual_min_temp": 70,
    "actual_max_temp": 99,
    "actual_precipitation": 0,
    "location": "PHX"
  },
  {
    "": 3589,
    "date": "2015-5-1",
    "actual_mean_temp": 86,
    "actual_min_temp": 70,
    "actual_max_temp": 101,
    "actual_precipitation": 0,
    "location": "PHX"
  },
  {
    "": 3590,
    "date": "2015-5-2",
    "actual_mean_temp": 85,
    "actual_min_temp": 72,
    "actual_max_temp": 98,
    "actual_precipitation": 0,
    "location": "PHX"
  },
  {
    "": 3591,
    "date": "2015-5-3",
    "actual_mean_temp": 86,
    "actual_min_temp": 75,
    "actual_max_temp": 96,
    "actual_precipitation": 0,
    "location": "PHX"
  },
  {
    "": 3592,
    "date": "2015-5-4",
    "actual_mean_temp": 75,
    "actual_min_temp": 65,
    "actual_max_temp": 85,
    "actual_precipitation": 0.24,
    "location": "PHX"
  },
  {
    "": 3593,
    "date": "2015-5-5",
    "actual_mean_temp": 77,
    "actual_min_temp": 67,
    "actual_max_temp": 86,
    "actual_precipitation": 0,
    "location": "PHX"
  },
  {
    "": 3594,
    "date": "2015-5-6",
    "actual_mean_temp": 80,
    "actual_min_temp": 69,
    "actual_max_temp": 90,
    "actual_precipitation": 0,
    "location": "PHX"
  },
  {
    "": 3595,
    "date": "2015-5-7",
    "actual_mean_temp": 76,
    "actual_min_temp": 65,
    "actual_max_temp": 86,
    "actual_precipitation": 0,
    "location": "PHX"
  },
  {
    "": 3596,
    "date": "2015-5-8",
    "actual_mean_temp": 68,
    "actual_min_temp": 61,
    "actual_max_temp": 75,
    "actual_precipitation": 0,
    "location": "PHX"
  },
  {
    "": 3597,
    "date": "2015-5-9",
    "actual_mean_temp": 67,
    "actual_min_temp": 57,
    "actual_max_temp": 77,
    "actual_precipitation": 0,
    "location": "PHX"
  },
  {
    "": 3598,
    "date": "2015-5-10",
    "actual_mean_temp": 75,
    "actual_min_temp": 61,
    "actual_max_temp": 89,
    "actual_precipitation": 0,
    "location": "PHX"
  },
  {
    "": 3599,
    "date": "2015-5-11",
    "actual_mean_temp": 82,
    "actual_min_temp": 67,
    "actual_max_temp": 96,
    "actual_precipitation": 0,
    "location": "PHX"
  },
  {
    "": 3600,
    "date": "2015-5-12",
    "actual_mean_temp": 81,
    "actual_min_temp": 70,
    "actual_max_temp": 91,
    "actual_precipitation": 0,
    "location": "PHX"
  },
  {
    "": 3601,
    "date": "2015-5-13",
    "actual_mean_temp": 80,
    "actual_min_temp": 69,
    "actual_max_temp": 91,
    "actual_precipitation": 0,
    "location": "PHX"
  },
  {
    "": 3602,
    "date": "2015-5-14",
    "actual_mean_temp": 79,
    "actual_min_temp": 70,
    "actual_max_temp": 87,
    "actual_precipitation": 0,
    "location": "PHX"
  },
  {
    "": 3603,
    "date": "2015-5-15",
    "actual_mean_temp": 67,
    "actual_min_temp": 57,
    "actual_max_temp": 76,
    "actual_precipitation": 0.93,
    "location": "PHX"
  },
  {
    "": 3604,
    "date": "2015-5-16",
    "actual_mean_temp": 66,
    "actual_min_temp": 57,
    "actual_max_temp": 75,
    "actual_precipitation": 0,
    "location": "PHX"
  },
  {
    "": 3605,
    "date": "2015-5-17",
    "actual_mean_temp": 75,
    "actual_min_temp": 64,
    "actual_max_temp": 86,
    "actual_precipitation": 0,
    "location": "PHX"
  },
  {
    "": 3606,
    "date": "2015-5-18",
    "actual_mean_temp": 78,
    "actual_min_temp": 65,
    "actual_max_temp": 90,
    "actual_precipitation": 0,
    "location": "PHX"
  },
  {
    "": 3607,
    "date": "2015-5-19",
    "actual_mean_temp": 76,
    "actual_min_temp": 65,
    "actual_max_temp": 87,
    "actual_precipitation": 0,
    "location": "PHX"
  },
  {
    "": 3608,
    "date": "2015-5-20",
    "actual_mean_temp": 80,
    "actual_min_temp": 67,
    "actual_max_temp": 93,
    "actual_precipitation": 0,
    "location": "PHX"
  },
  {
    "": 3609,
    "date": "2015-5-21",
    "actual_mean_temp": 82,
    "actual_min_temp": 72,
    "actual_max_temp": 91,
    "actual_precipitation": 0,
    "location": "PHX"
  },
  {
    "": 3610,
    "date": "2015-5-22",
    "actual_mean_temp": 74,
    "actual_min_temp": 66,
    "actual_max_temp": 82,
    "actual_precipitation": 0,
    "location": "PHX"
  },
  {
    "": 3611,
    "date": "2015-5-23",
    "actual_mean_temp": 74,
    "actual_min_temp": 64,
    "actual_max_temp": 83,
    "actual_precipitation": 0,
    "location": "PHX"
  },
  {
    "": 3612,
    "date": "2015-5-24",
    "actual_mean_temp": 76,
    "actual_min_temp": 66,
    "actual_max_temp": 85,
    "actual_precipitation": 0,
    "location": "PHX"
  },
  {
    "": 3613,
    "date": "2015-5-25",
    "actual_mean_temp": 80,
    "actual_min_temp": 67,
    "actual_max_temp": 92,
    "actual_precipitation": 0,
    "location": "PHX"
  },
  {
    "": 3614,
    "date": "2015-5-26",
    "actual_mean_temp": 84,
    "actual_min_temp": 71,
    "actual_max_temp": 96,
    "actual_precipitation": 0,
    "location": "PHX"
  },
  {
    "": 3615,
    "date": "2015-5-27",
    "actual_mean_temp": 85,
    "actual_min_temp": 73,
    "actual_max_temp": 97,
    "actual_precipitation": 0,
    "location": "PHX"
  },
  {
    "": 3616,
    "date": "2015-5-28",
    "actual_mean_temp": 85,
    "actual_min_temp": 71,
    "actual_max_temp": 98,
    "actual_precipitation": 0,
    "location": "PHX"
  },
  {
    "": 3617,
    "date": "2015-5-29",
    "actual_mean_temp": 88,
    "actual_min_temp": 73,
    "actual_max_temp": 103,
    "actual_precipitation": 0,
    "location": "PHX"
  },
  {
    "": 3618,
    "date": "2015-5-30",
    "actual_mean_temp": 90,
    "actual_min_temp": 74,
    "actual_max_temp": 105,
    "actual_precipitation": 0,
    "location": "PHX"
  },
  {
    "": 3619,
    "date": "2015-5-31",
    "actual_mean_temp": 93,
    "actual_min_temp": 78,
    "actual_max_temp": 107,
    "actual_precipitation": 0,
    "location": "PHX"
  },
  {
    "": 3620,
    "date": "2015-6-1",
    "actual_mean_temp": 92,
    "actual_min_temp": 78,
    "actual_max_temp": 105,
    "actual_precipitation": 0,
    "location": "PHX"
  },
  {
    "": 3621,
    "date": "2015-6-2",
    "actual_mean_temp": 90,
    "actual_min_temp": 76,
    "actual_max_temp": 104,
    "actual_precipitation": 0,
    "location": "PHX"
  },
  {
    "": 3622,
    "date": "2015-6-3",
    "actual_mean_temp": 88,
    "actual_min_temp": 74,
    "actual_max_temp": 102,
    "actual_precipitation": 0,
    "location": "PHX"
  },
  {
    "": 3623,
    "date": "2015-6-4",
    "actual_mean_temp": 85,
    "actual_min_temp": 73,
    "actual_max_temp": 97,
    "actual_precipitation": 0,
    "location": "PHX"
  },
  {
    "": 3624,
    "date": "2015-6-5",
    "actual_mean_temp": 81,
    "actual_min_temp": 72,
    "actual_max_temp": 90,
    "actual_precipitation": 0.16,
    "location": "PHX"
  },
  {
    "": 3625,
    "date": "2015-6-6",
    "actual_mean_temp": 85,
    "actual_min_temp": 73,
    "actual_max_temp": 97,
    "actual_precipitation": 0.03,
    "location": "PHX"
  },
  {
    "": 3626,
    "date": "2015-6-7",
    "actual_mean_temp": 86,
    "actual_min_temp": 71,
    "actual_max_temp": 100,
    "actual_precipitation": 0,
    "location": "PHX"
  },
  {
    "": 3627,
    "date": "2015-6-8",
    "actual_mean_temp": 92,
    "actual_min_temp": 78,
    "actual_max_temp": 105,
    "actual_precipitation": 0,
    "location": "PHX"
  },
  {
    "": 3628,
    "date": "2015-6-9",
    "actual_mean_temp": 89,
    "actual_min_temp": 83,
    "actual_max_temp": 95,
    "actual_precipitation": 0,
    "location": "PHX"
  },
  {
    "": 3629,
    "date": "2015-6-10",
    "actual_mean_temp": 88,
    "actual_min_temp": 80,
    "actual_max_temp": 95,
    "actual_precipitation": 0,
    "location": "PHX"
  },
  {
    "": 3630,
    "date": "2015-6-11",
    "actual_mean_temp": 91,
    "actual_min_temp": 82,
    "actual_max_temp": 100,
    "actual_precipitation": 0,
    "location": "PHX"
  },
  {
    "": 3631,
    "date": "2015-6-12",
    "actual_mean_temp": 91,
    "actual_min_temp": 78,
    "actual_max_temp": 104,
    "actual_precipitation": 0,
    "location": "PHX"
  },
  {
    "": 3632,
    "date": "2015-6-13",
    "actual_mean_temp": 93,
    "actual_min_temp": 80,
    "actual_max_temp": 105,
    "actual_precipitation": 0,
    "location": "PHX"
  },
  {
    "": 3633,
    "date": "2015-6-14",
    "actual_mean_temp": 95,
    "actual_min_temp": 83,
    "actual_max_temp": 107,
    "actual_precipitation": 0,
    "location": "PHX"
  },
  {
    "": 3634,
    "date": "2015-6-15",
    "actual_mean_temp": 99,
    "actual_min_temp": 86,
    "actual_max_temp": 112,
    "actual_precipitation": 0,
    "location": "PHX"
  },
  {
    "": 3635,
    "date": "2015-6-16",
    "actual_mean_temp": 99,
    "actual_min_temp": 85,
    "actual_max_temp": 112,
    "actual_precipitation": 0,
    "location": "PHX"
  },
  {
    "": 3636,
    "date": "2015-6-17",
    "actual_mean_temp": 100,
    "actual_min_temp": 86,
    "actual_max_temp": 114,
    "actual_precipitation": 0,
    "location": "PHX"
  },
  {
    "": 3637,
    "date": "2015-6-18",
    "actual_mean_temp": 101,
    "actual_min_temp": 86,
    "actual_max_temp": 115,
    "actual_precipitation": 0,
    "location": "PHX"
  },
  {
    "": 3638,
    "date": "2015-6-19",
    "actual_mean_temp": 100,
    "actual_min_temp": 85,
    "actual_max_temp": 114,
    "actual_precipitation": 0,
    "location": "PHX"
  },
  {
    "": 3639,
    "date": "2015-6-20",
    "actual_mean_temp": 96,
    "actual_min_temp": 80,
    "actual_max_temp": 112,
    "actual_precipitation": 0,
    "location": "PHX"
  },
  {
    "": 3640,
    "date": "2015-6-21",
    "actual_mean_temp": 99,
    "actual_min_temp": 88,
    "actual_max_temp": 109,
    "actual_precipitation": 0,
    "location": "PHX"
  },
  {
    "": 3641,
    "date": "2015-6-22",
    "actual_mean_temp": 97,
    "actual_min_temp": 85,
    "actual_max_temp": 109,
    "actual_precipitation": 0,
    "location": "PHX"
  },
  {
    "": 3642,
    "date": "2015-6-23",
    "actual_mean_temp": 99,
    "actual_min_temp": 87,
    "actual_max_temp": 111,
    "actual_precipitation": 0,
    "location": "PHX"
  },
  {
    "": 3643,
    "date": "2015-6-24",
    "actual_mean_temp": 100,
    "actual_min_temp": 87,
    "actual_max_temp": 112,
    "actual_precipitation": 0,
    "location": "PHX"
  },
  {
    "": 3644,
    "date": "2015-6-25",
    "actual_mean_temp": 100,
    "actual_min_temp": 90,
    "actual_max_temp": 110,
    "actual_precipitation": 0,
    "location": "PHX"
  },
  {
    "": 3645,
    "date": "2015-6-26",
    "actual_mean_temp": 98,
    "actual_min_temp": 89,
    "actual_max_temp": 107,
    "actual_precipitation": 0,
    "location": "PHX"
  },
  {
    "": 3646,
    "date": "2015-6-27",
    "actual_mean_temp": 99,
    "actual_min_temp": 90,
    "actual_max_temp": 108,
    "actual_precipitation": 0.01,
    "location": "PHX"
  },
  {
    "": 3647,
    "date": "2015-6-28",
    "actual_mean_temp": 99,
    "actual_min_temp": 87,
    "actual_max_temp": 110,
    "actual_precipitation": 0,
    "location": "PHX"
  },
  {
    "": 3648,
    "date": "2015-6-29",
    "actual_mean_temp": 98,
    "actual_min_temp": 86,
    "actual_max_temp": 110,
    "actual_precipitation": 0.05,
    "location": "PHX"
  },
  {
    "": 3649,
    "date": "2015-6-30",
    "actual_mean_temp": 96,
    "actual_min_temp": 85,
    "actual_max_temp": 107,
    "actual_precipitation": 0,
    "location": "PHX"
  }
]