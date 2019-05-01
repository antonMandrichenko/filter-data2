import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import Typography from "@material-ui/core/Typography";

TextItem.propTypes = {
  title: PropTypes.string.isRequired,
  tags: PropTypes.array.isRequired,
};

function TextItem({title, tags}) {
  return (
    <Fragment>
      <Typography variant="h6">{title}</Typography>
      <Typography variant="body1">{tags.join(', ')}</Typography>
    </Fragment>
  );
}

export default TextItem;
