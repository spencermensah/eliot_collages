import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

export default function RadioButtonsGroup() {
  const [value, setValue] = React.useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">Graphic Size</FormLabel>
      <RadioGroup aria-label="gender" name="gender1" value={size} onChange={handleChange}>
        <FormControlLabel value="small" control={<Radio />} label="Small" />
        <FormControlLabel value="md" control={<Radio />} label="Medium" />
        <FormControlLabel value="large" control={<Radio />} label="Large" />
        <FormControlLabel value="bogo" control={<Radio />} label="Box Logo" />
      </RadioGroup>
    </FormControl>
  );
}
