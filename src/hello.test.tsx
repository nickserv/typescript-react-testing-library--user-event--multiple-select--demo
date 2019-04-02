import React from 'react';
import {render, fireEvent} from "react-testing-library";
import Hello from "./hello";


describe('Hello', () => {
  test('handle onChange', () => {
    const mockOnChange = jest.fn()
    const wrapper = render(<Hello name='typescript' onChange={mockOnChange}/>)
    const inputNode = wrapper.container.querySelector('input')!

    fireEvent.change(inputNode, {target: {value: 'react'}});

    expect(mockOnChange).toHaveBeenCalledWith('react');
  });
})
