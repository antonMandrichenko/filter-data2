import React, {Fragment, useEffect} from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import {styles} from './style';

const input = React.createRef();

SearchInput.propTypes = {
  classes: PropTypes.object.isRequired,
  isInput: PropTypes.bool.isRequired,
  inputOnFocus: PropTypes.func.isRequired,
  dataItems: PropTypes.array.isRequired,
  getItemsByInput: PropTypes.func.isRequired,
};

function SearchInput({
                       classes,
                       isInput,
                       getItemsByInput,
                       dataItems,
                       inputOnFocus
                     }) {

  useEffect(() => {
    if (isInput) {
      input.current.focus()
    } else {
      input.current.value = ''
    }
  }, [isInput]);

  return (
    <Fragment>
      <input
        type="text"
        className={classes.input}
        ref={input}
        onChange={(e) => {
          getItemsByInput(dataItems, e)
        }}
        onFocus={inputOnFocus}
      />
    </Fragment>
  );
}

export default withStyles(styles)(SearchInput);
