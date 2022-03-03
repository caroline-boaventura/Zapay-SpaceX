import React from 'react';
import { screen, render, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { getAllUpcomingLaunches } from '../services/api';
import App from '../App';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

describe('App', () => {
	describe('the existence of the elements on the screen', () => {
		it('should be a header component on the screen', () => {
			render(<App />);
			const header = screen.getByTestId('header');
			expect(header).toBeInTheDocument();
		});
	
		it('should have a button with the text "Próximo Lançamento" on the screen', () => {
			render(<App />);
			const nextButton = screen.getByTestId('next');
			expect(nextButton).toBeInTheDocument();
			expect(nextButton).toHaveTextContent('Próximo Lançamento')
		});
	
		it('should have a button with the text "Último Lançamento" on the screen', () => {
			render(<App />);
			const latestButton = screen.getByTestId('latest');
			expect(latestButton).toBeInTheDocument();
			expect(latestButton).toHaveTextContent('Último Lançamento')
		});
	
		it('should have a button with the text "Próximos Lançamentos" on the screen', () => {
			render(<App />);
			const upComing = screen.getByTestId('upcoming');
			expect(upComing).toBeInTheDocument();
			expect(upComing).toHaveTextContent('Próximos Lançamentos')
		});
	
		it('should have a button with the text "Lançamentos Passados" on the screen', () => {
			render(<App />);
			const past = screen.getByTestId('past');
			expect(past).toBeInTheDocument();
			expect(past).toHaveTextContent('Lançamentos Passados')
		});
	});
	

})