import grey from '@material-ui/core/colors/grey';

export const styles = theme => ({
  root: {
    overflowY: 'scroll',
    border: '2px solid grey',
    height: '100%'
  },
  formControl: {
    margin: theme.spacing.unit * 3,
  },
  group: {
    margin: `${theme.spacing.unit}px 0`,
    color: 'blue',
  },
  control: {
    color: grey[700],
    '&$checked': {
      color: grey[600],
    },
  },
  checked: {}
});
