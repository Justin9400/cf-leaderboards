import * as React from 'react';
import { Theme, useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import RedManaImage from "../../img/mana/red.svg";
import BlackManaImage from "../../img/mana/black.svg";
import WhiteManaImage from "../../img/mana/white.svg";
import GreenManaImage from "../../img/mana/green.svg";
import BlueManaImage from "../../img/mana/blue.svg";

export type MenuProps = {
  label: string
  // dropDownItems:[]
};

const mana = [
  { name: 'Red', image: RedManaImage },
  { name: 'Black', image: BlackManaImage },
  { name: 'White', image: WhiteManaImage },
  { name: 'Green', image: GreenManaImage },
  { name: 'Blue', image: BlueManaImage }
];

function getStyles(name: string, personName: readonly string[], theme: Theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default function MultiSelectDropDown(props: MenuProps) {
  const theme = useTheme();
  const [personName, setPersonName] = React.useState<string[]>([]);

  const handleChange = (event: SelectChangeEvent<typeof personName>) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill, we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  return (
    <div>
      <FormControl sx={{ m: 1, width: 300, mt: 3 }}>
        <Select
          multiple
          displayEmpty
          value={personName}
          onChange={handleChange}
          input={<OutlinedInput />}
          renderValue={(selected) => {
            if (selected.length === 0) {
              return <em>{props.label}</em>;
            }

            return (
              <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                {selected.map((value) => (
                  <div key={value} style={{ display: 'flex', alignItems: 'center', marginRight: '8px', marginBottom: '8px' }}>
                    <img
                      src={mana.find(item => item.name === value)?.image}
                      alt={value}
                      style={{ width: '24px', height: '24px', marginRight: '4px' }}
                    />
                    {value}
                  </div>
                ))}
              </div>
            );
          }}
          inputProps={{ 'aria-label': 'Without label' }}
        >
          {mana.map((color) => (
            <MenuItem
              key={color.name}
              value={color.name}
              style={getStyles(color.name, personName, theme)}
            >
              <img
                src={color.image}
                alt={color.name}
                style={{ width: '24px', height: '24px', marginRight: '4px' }}
              />
              {color.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
