import React from 'react';
import { render, screen, within } from '@testing-library/react';
import CardDetail from './cardDetail';

test('Validate is if exists', () => {
  const {getByTestId} = render(<CardDetail 
    artist={'artist'} 
    name={'test'} 
    url={'testUrl'} 
    colors={'white'} 
    text={'description'}
    type={'type'}/>);
  expect(getByTestId("title-div-card")).toBeInTheDocument();
  expect(getByTestId("image-div-card")).toBeInTheDocument();
  expect(getByTestId("artist-div")).toBeInTheDocument();
  expect(getByTestId("color-div")).toBeInTheDocument();
  expect(getByTestId("text-div")).toBeInTheDocument();
  expect(getByTestId("type-div")).toBeInTheDocument();
});

test('Validate name value', () => {
  const {getByTestId} = render(<CardDetail 
    artist={'artist'} 
    name={'test'} 
    url={'testUrl'} 
    colors={'white'} 
    text={'description'}
    type={'type'}/>);
  const { getByText } = within(getByTestId('title-div-card'))
  expect(getByText('test')).toBeInTheDocument()
});

test('Validate colors value', () => {
  const {getByTestId} = render(<CardDetail 
    artist={'artist'} 
    name={'test'} 
    url={'testUrl'} 
    colors={'white'} 
    text={'description'}
    type={'type'}/>);
  const { getByText } = within(getByTestId('color-div'))
  expect(getByText('Color: white')).toBeInTheDocument()
});

test('Validate artist value', () => {
  const {getByTestId} = render(<CardDetail 
    artist={'artist'} 
    name={'test'} 
    url={'testUrl'} 
    colors={'white'} 
    text={'description'}
    type={'type'}/>);
  const { getByText } = within(getByTestId('artist-div'))
  expect(getByText('Artist: artist')).toBeInTheDocument()
});

test('Validate text value', () => {
  const {getByTestId} = render(<CardDetail 
    artist={'artist'} 
    name={'test'} 
    url={'testUrl'} 
    colors={'white'} 
    text={'description'}
    type={'type'}/>);
  const { getByText } = within(getByTestId('text-div'))
  expect(getByText('description')).toBeInTheDocument()
});

test('Validate type value', () => {
  const {getByTestId} = render(<CardDetail 
    artist={'artist'} 
    name={'test'} 
    url={'testUrl'} 
    colors={'white'} 
    text={'description'}
    type={'type'}/>);
  const { getByText } = within(getByTestId('type-div'))
  expect(getByText('Type: type')).toBeInTheDocument()
});