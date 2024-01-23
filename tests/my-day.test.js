/**
 * @jest-environment jsdom
 */

import { getCurrentDay, getCurrentTime } from '../js/my-day.js';
const dayjs = require('dayjs');

describe('daytests', () => {
  test('check current day', () => {
 
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    var day = getCurrentDay();
    
    expect(daysOfWeek).toContain(day);
  });

  jest.useRealTimers();

  test('check current time', () => {
    const currentTime = getCurrentTime();
    const expectedTime = dayjs().format('HH:mm:ss');

    // We only compare HH:mm
    expect(currentTime.substring(0, 5)).toBe(expectedTime.substring(0, 5));
  });
});