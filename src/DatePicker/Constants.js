import {range} from 'lodash-es'
export const options = [
  {
    value: "9206c80c-a6eb-4c92-876e-3f7e7988f38c",
    label: "Leann Conn",
  },
  {
    value: "14401ff0-0f4e-498a-8be1-fe7d40d27907",
    label: "Dudley Bahringer",
  },
  {
    value: "14401ff0-0f4e-498a-8be1-fe7d40d27907",
    label: "Dudley Bahringer",
  },
  {
    value: "14401ff0-0f4e-498a-8be1-fe7d40d27907",
    label: "Dudley Bahringer",
  },
  {
    value: "14401ff0-0f4e-498a-8be1-fe7d40d27907",
    label: "Dudley Bahringer",
  },
  {
    value: "14401ff0-0f4e-498a-8be1-fe7d40d27907",
    label: "Dudley Bahringer",
  },
  {
    value: "14401ff0-0f4e-498a-8be1-fe7d40d27907",
    label: "Dudley Bahringer",
  },
  {
    value: "14401ff0-0f4e-498a-8be1-fe7d40d27907",
    label: "Dudley Bahringer",
  },
  {
    value: "14401ff0-0f4e-498a-8be1-fe7d40d27907",
    label: "Dudley Bahringer",
  },
  {
    value: "14401ff0-0f4e-498a-8be1-fe7d40d27907",
    label: "Dudley Bahringer",
  },
  {
    value: "14401ff0-0f4e-498a-8be1-fe7d40d27907",
    label: "Dudley Bahringer",
  },
  {
    value: "14401ff0-0f4e-498a-8be1-fe7d40d27907",
    label: "Dudley Bahringer",
  },
  {
    value: "14401ff0-0f4e-498a-8be1-fe7d40d27907",
    label: "Dudley Bahringer",
  },
  {
    value: "14401ff0-0f4e-498a-8be1-fe7d40d27907",
    label: "Dudley Bahringer",
  },
  {
    value: "14401ff0-0f4e-498a-8be1-fe7d40d27907",
    label: "Dudley Bahringer",
  },
  {
    value: "14401ff0-0f4e-498a-8be1-fe7d40d27907",
    label: "Dudley Bahringer",
  },
  {
    value: "14401ff0-0f4e-498a-8be1-fe7d40d27907",
    label: "Dudley Bahringer",
  },
  {
    value: "14401ff0-0f4e-498a-8be1-fe7d40d27907",
    label: "Dudley Bahringer",
  },
  {
    value: "14401ff0-0f4e-498a-8be1-fe7d40d27907",
    label: "Dudley Bahringer",
  },
  {
    value: "14401ff0-0f4e-498a-8be1-fe7d40d27907",
    label: "Dudley Bahringer",
  },
];
const _years = range(1800, (new Date()).getFullYear()+1, 1);
const convertToYearObj = year => {
    let obj = {}
    obj.value = year
    obj.label = year
    return obj
}
export const years = _years.map(convertToYearObj)
const _months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
export const months = _months.map(convertToYearObj)
