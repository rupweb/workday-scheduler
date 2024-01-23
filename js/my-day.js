import dayjs from 'dayjs';

export function getCurrentDay() {
    var dayjs = require('dayjs');
    let today = dayjs().format('dddd');
    return today;
}
  
export function getCurrentTime() {
    return dayjs().format('HH:mm:ss');
}