import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import RadioButton from './RadioButton';

// eslint-disable-next-line @typescript-eslint/no-empty-function
const noOp = () => {};

describe('RadioButton Component', () => {
  test('it should be visible', () => {
    render(
      <RadioButton
        label="Option 1"
        name="testRadio"
        checked={false}
        onChange={noOp}
        value=""
      />
    );
    const radioButton = screen.getByLabelText('Option 1');
    expect(radioButton).toBeVisible();
  });

  test('it should be disabled when specified', () => {
    render(
      <RadioButton
        label="Option 1"
        name="testRadio"
        disabled
        checked={false}
        onChange={noOp}
        value=""
      />
    );
    const radioButton = screen.getByLabelText('Option 1');
    expect(radioButton).toBeDisabled();
  });
});
