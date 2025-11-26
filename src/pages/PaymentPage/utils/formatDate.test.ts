import { formatDate } from './formatDate';
import { describe, expect, test } from 'vitest';

describe('formatDate', () => {
  test('formats a valid ISO string into dd/mm/yyyy, hh:mm:ss', () => {
    const input = '2024-01-15T13:45:30Z';

    const date = new Date(input);

    const dd = String(date.getDate()).padStart(2, '0');
    const mm = String(date.getMonth() + 1).padStart(2, '0');
    const yyyy = date.getFullYear();

    const hh = String(date.getHours()).padStart(2, '0');
    const min = String(date.getMinutes()).padStart(2, '0');
    const ss = String(date.getSeconds()).padStart(2, '0');

    const expected = `${dd}/${mm}/${yyyy}, ${hh}:${min}:${ss}`;

    expect(formatDate(input)).toBe(expected);
  });

  test('returns "Invalid Date" formatted string when given invalid ISO', () => {
    const result = formatDate('not-a-real-date');

    expect(result.includes('NaN')).toBe(true);
  });
});
