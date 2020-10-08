import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

import App from './client/app';

test('renders the correct content', () => {
  const { getByText } = render(<App />);
  getByText('Dictionary');
});

test('Allows the user to write and submit a word', async () => {
  const handleSubmit = jest.fn();
  const { getByTestId, getByDisplayValue } = render(<App onSubmit={handleSubmit()} />);
  const input = getByTestId('input');
  const form = getByTestId('form');

  fireEvent.change(input, { target: { value: 'Hello' } });
  fireEvent.keyDown(form, { key: 'Enter', code: 'Enter' });
  expect(getByDisplayValue('Hello').value).toBe('Hello');
  expect(handleSubmit).toHaveBeenCalledTimes(1);

});

const mock = new MockAdapter(axios);
mock.onGet('/input', { params: 'Hello' }).reply(200, 'See Halloo.');

test('render word definition', async () => {
  const { getByTestId, getByDisplayValue } = render(<App />)
  axios
    .get('/input', { params: 'Hello' })
    .then((response) => {
      expect(getByTestId('definition')).toBeTruthy();
      expect(response.data).toBe('See Halloo.')
      console.log(getByTestId('definition'))
      console.log(App.state())
    });
});

