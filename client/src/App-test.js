import React from 'react';
import {render, fireEvent, getByTestId} from 'react-testing-library';
import App from './App.js';

it('displays title text on screen', () => {
 const {getByText} = render(<App />);
  expect(getByText("Filtering Selection")).toBeInTheDocument()
});

 