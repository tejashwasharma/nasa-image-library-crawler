import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';
import userEvent from '@testing-library/user-event';

test('renders app correctly', () => {
	render(<App />);
	const HeaderElement = screen.getByText(/Interstellar crawler/i);

	const inputEl = screen.getByTestId("search-input");
	const startYearEl = screen.getByTestId("start-year");
	const endYearEl = screen.getByTestId("end-year");

	expect(HeaderElement).toBeInTheDocument();
	expect(inputEl).toBeInTheDocument();
	expect(startYearEl).toBeInTheDocument();
	expect(endYearEl).toBeInTheDocument();
});

test('check start year is invalid', async () => {
	render(<App />);

	const startYearEl = screen.getByTestId("start-year");

	userEvent.type(startYearEl, "202");

	const searchBtn = screen.getByTestId("search-button");
	fireEvent.click(searchBtn);

	setTimeout(() => {
		expect(screen.findByText("Start year is invalid!")).toBeVisible();
	}, 3000);
});

test('check end year is invalid', async () => {
	render(<App />);

	const endYearEl = screen.getByTestId("end-year");

	userEvent.type(endYearEl, "202");

	const searchBtn = screen.getByTestId("search-button");
	fireEvent.click(searchBtn);

	setTimeout(() => {
		expect(screen.findByText("End year is invalid!")).toBeVisible();
	}, 3000);
});

test('check start year is less than end year', async () => {
	render(<App />);

	const startYearEl = screen.getByTestId("start-year");
	const endYearEl = screen.getByTestId("end-year");

	userEvent.type(startYearEl, "2022");
	userEvent.type(endYearEl, "2000");

	const searchBtn = screen.getByTestId("search-button");
	fireEvent.click(searchBtn);

	setTimeout(() => {
		expect(screen.findByText("End year must be greater than start year!")).not.toBeVisible();
	}, 3000);
});

test('search and select any element to check it renders correctly', async () => {
	render(<App />);

	const inputEl = await screen.getByTestId("search-input");
	userEvent.type(inputEl, "andromeda");

	const searchBtn = await screen.getByTestId("search-button");
	await fireEvent.click(searchBtn);

	setTimeout(async () => {
		expect(await screen.getByTestId("search-input")).toHaveValue("andromeda");

		const itemList = await screen.getByTestId("item-list");
		await fireEvent.click(itemList);

		const itemTitle = await screen.getByTestId("item-title");

		expect(itemList).toEqual(itemTitle);
	}, 3000);
});
