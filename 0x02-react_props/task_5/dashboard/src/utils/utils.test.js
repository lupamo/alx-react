import { getFullYear, getFooterCopy, getLatestNotification } from "./utils";

describe('Utils functions', () => {
	test('getFullYear return the correct year', () => {
		const currentYear = new Date().getFullYear();
		expect(getFullYear()).toBe(currentYear);
	});
	test('getFooterCopy returns correct string based on argument', () => {
		expect(getFooterCopy(true)).toBe('Holberton School');
		expect(getFooterCopy(false)).toBe('Holberton School main dashboard');
	});
	
	test('getLatestNotification returns the correct HTML string', () => {
	const expectedString = { __html: '<strong>Urgent requirement</strong> - complete by EOD' }
	expect(getLatestNotification()).toEqual(expectedString);
	});
})