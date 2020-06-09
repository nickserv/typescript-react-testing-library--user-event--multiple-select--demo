import React from 'react'

type Props = {
  onSelectedValuesChange: (value: string[]) => void
}

export default function MultiSelect({onSelectedValuesChange}: Props) {

  function onSelectOptions(event: React.ChangeEvent<HTMLSelectElement>) {
    const selectedOptions = event.target.selectedOptions;
    const selectedValues = Array.from(selectedOptions).map((it) => it.value);
    console.log("### selected values: ", selectedValues);
    onSelectedValuesChange(selectedValues);
  }


  return <select multiple data-testid="select-multiple"
                 onChange={onSelectOptions} style={{width: '100px'}}>
    <option data-testid="val0" value="" disabled>0</option>
    <option data-testid="val1" value="1">1</option>
    <option data-testid="val2" value="2">2</option>
    <option data-testid="val3" value="3">3</option>
  </select>
};

