import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import {styles} from './style';
import TextItem from "../TextItem";

TextArea.propTypes = {
  filterData: PropTypes.array.isRequired,
  classes: PropTypes.object.isRequired,
};

function TextArea({classes, filterData}) {
  return (
    <div className={classes.root}>
      <ul className={classes.rootList}>
        {
          filterData.map((item) =>
            <li
              className={classes.list}
              key={item.title}>
              <TextItem
                title={item.title}
                tags={item.tags}/>
            </li>)
        }
      </ul>
    </div>
  );
}

export default withStyles(styles)(TextArea);
