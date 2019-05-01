import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import FormControl from "@material-ui/core/FormControl";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";
import SearchInput from '../SearchInput';
import {styles} from './style';
import Typography from "@material-ui/core/Typography";

SearchCheckbox.propTypes = {
  filterMenu: PropTypes.array.isRequired,
  getItemsByInput: PropTypes.func.isRequired,
  getItemsByTag: PropTypes.func.isRequired,
  dataItems: PropTypes.array.isRequired,
  classes: PropTypes.object.isRequired,
  allDataToFilter: PropTypes.func.isRequired,
};

function SearchCheckbox({
                          classes,
                          getItemsByTag,
                          dataItems,
                          filterMenu,
                          getItemsByInput,
                          allDataToFilter,
                        }) {

  const [value, setValue] = useState('all');
  const [isInput, setIsInput] = useState(false);

  const handleChange = e => {
    setValue(e.target.value);
    if (e.target.value === 'searchInput') {
      setIsInput(true);
    } else {
      getItemsByTag(dataItems, e.target.value);
      setIsInput(false);
    }
  };

  const inputOnFocus = () => {
    setValue('searchInput');
    allDataToFilter(dataItems);
  };

  return (
    <div className={classes.root}>
      <FormControl
        component="fieldset"
        className={classes.formControl}>
        <RadioGroup
          aria-label="Filter"
          name="filter"
          className={classes.group}
          value={value}
          onChange={handleChange}
        >
          <FormControlLabel
            value="searchInput"
            control={
              <Radio
                classes={{
                  root: classes.control,
                  checked: classes.checked,
                }}/>
            }
            label={
              <SearchInput
                isInput={isInput}
                getItemsByInput={getItemsByInput}
                dataItems={dataItems}
                inputOnFocus={inputOnFocus}
              />
            }
          />
          {
            filterMenu.map((item) =>
              <FormControlLabel key={item}
                                value={item}
                                control={
                                  <Radio
                                    classes={{
                                      root: classes.control,
                                      checked: classes.checked,
                                    }}
                                  />
                                }
                                label={
                                  <Typography
                                    variant="h6">
                                    {item}
                                  </Typography>
                                }
              />
            )
          }
        </RadioGroup>
      </FormControl>
    </div>
  );
}

export default withStyles(styles)(SearchCheckbox);
