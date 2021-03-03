import React from 'react';
import PatchEvent, { set, unset } from 'part:@sanity/form-builder/patch-event';

// this function then sets and unsets the values
// need to add Number as all input values even if number will be received as strings
function createPatchFrom(value) {
  return PatchEvent.from(value === '' ? unset() : set(Number(value)));
}

const formatMoney = Intl.NumberFormat('en-GB', {
  style: 'currency',
  currency: 'GBP',
}).format;

const PriceInput = React.forwardRef(
  ({ type, value, onChange }, inputComponent) => {
    return (
      <div>
        <h2>
          {type.title} - {value ? formatMoney(value / 100) : ''}
        </h2>
        <p>{type.description}</p>
        <input
          type={type.name}
          value={value}
          onChange={(event) => onChange(createPatchFrom(event.target.value))}
          ref={inputComponent}
        />
      </div>
    );
  }
);

export default PriceInput;
// 1. we take the value in the onchange event
// 2. then pass it to sanity
// 3. then Sanity patches it to itself with the PatchEvent for things like live upadte and preview using its
// own API
// 4. re={inputComponent} tells Sanity this is the input where the changing of the value happens, and the
// rest of it eg h2 is just info for the UI;
