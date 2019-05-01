export const styles = theme => ({
  root: {
    width: '60%',
    height: '60vh',
    [theme.breakpoints.down('md')]: {
      width: '90%',
    },
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
  },
});
