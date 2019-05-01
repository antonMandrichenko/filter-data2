import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Filter from "../../containers/Filter";
import {styles} from './style';

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export function App({classes}) {
  return (
    <div className={classes.root}>
      <Filter/>
    </div>
  );
}

export default withStyles(styles)(App);
