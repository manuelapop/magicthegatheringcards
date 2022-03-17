import React from 'react';
import { render, screen, within } from '@testing-library/react';
import Card from './card';

test('Validate is if exists', () => {
  const {getByTestId} = render(<Card name={'test'} url={'testUrl'} colors={'white'}/>);
  expect(getByTestId("title-div")).toBeInTheDocument();
  expect(getByTestId("image-div")).toBeInTheDocument();
  expect(getByTestId("colors-div")).toBeInTheDocument();
});

test('Validate name value', () => {
  const {getByTestId} = render(<Card name={'test'} url={'testUrl'} colors={'white'}/>);
  const { getByText } = within(getByTestId('title-div'))
  expect(getByText('test')).toBeInTheDocument()
});

test('Validate colors value', () => {
  const {getByTestId} = render(<Card name={'test'} url={'testUrl'} colors={'white'}/>);
  const { getByText } = within(getByTestId('colors-div'))
  expect(getByText('white')).toBeInTheDocument()
});