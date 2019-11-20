import React from 'react';
import {render} from "@testing-library/react";
import userEvent from '@testing-library/user-event';

import MultiSelect from "./MultiSelect";

describe('MultiSelect', () => {
  it('calls "onSelect" callback when user selected options', () => {
    const mockOnChange = jest.fn()
    const {getByTestId} = render(<MultiSelect onSelectedValuesChange={mockOnChange}/>)

    userEvent.selectOptions(getByTestId("select-multiple"), ["1", "3"]);

    // here are correct
    expect((getByTestId("val1") as HTMLOptionElement).selected).toBe(true);
    expect((getByTestId("val2") as HTMLOptionElement).selected).toBe(false);
    expect((getByTestId("val3") as HTMLOptionElement).selected).toBe(true);

    // but here is failed ???
    expect(mockOnChange).toHaveBeenLastCalledWith(["1", "3"]);
  });
})
