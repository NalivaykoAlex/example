import { render, screen } from '@testing-library/react';

import {ExampleFeature} from './ExampleFeature';

describe('ExampleFeature', () => {
  test('render ExampleFeature component', () => {
    render(<ExampleFeature />)
  });

  test('check render text', () => {
    render(<ExampleFeature />)

    expect(screen.getByText('ExampleFeature')).toBeInTheDocument();
  });
});
