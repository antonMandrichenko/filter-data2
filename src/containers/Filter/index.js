import React, {Fragment, useEffect} from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {compose} from "redux";
import {withStyles} from '@material-ui/core/styles';
import SearchCheckbox from "../../components/SearchCheckbox";
import Grid from "@material-ui/core/Grid";
import ErrorMessage from "../../components/ErrorMessage";
import TextArea from "../../components/TextArea";
import {mapStateToProps, mapDispatchToProps} from "./redux";
import {styles} from './style';

Filter.propTypes = {
  filterMenu: PropTypes.array.isRequired,
  dataItems: PropTypes.array.isRequired,
  filterData: PropTypes.array.isRequired,
  fetchData: PropTypes.func.isRequired,
  allDataToFilter: PropTypes.func.isRequired,
  filterListByTags: PropTypes.func.isRequired,
  filterListByInput: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired,
  dataError: PropTypes.any,
};

function Filter({
                  filterMenu,
                  dataItems,
                  filterData,
                  fetchData,
                  allDataToFilter,
                  filterListByTags,
                  filterListByInput,
                  dataError,
                  classes
                }) {

  useEffect(() => {
    fetchData();
  }, []);

  const getItemsByTag = (data, value) => {
    if (value === 'all') {
      allDataToFilter(data);
    } else {
      filterListByTags(dataItems, value);
    }
  };

  const getItemsByInput = (data, e) => {
    if (e.target.value.charAt(0) === ' ')
      e.preventDefault();
    filterListByInput(dataItems, e.target.value);
  };

  return (
    <Grid container className={classes.root}>
      {
        dataError
          ? <ErrorMessage
            isOpenMessage={true}
            message={dataError}/>
          : filterMenu.length !== 0
            ? <Fragment>
              <Grid item md={4} xs={12}>
                <SearchCheckbox
                  filterMenu={filterMenu}
                  getItemsByTag={getItemsByTag}
                  dataItems={dataItems}
                  getItemsByInput={getItemsByInput}
                  allDataToFilter={allDataToFilter}
                />
              </Grid>
              <Grid item md={8} xs={12}>
                <TextArea filterData={filterData}/>
              </Grid>
            </Fragment>
            : null
      }
    </Grid>
  );
}

export default compose(withStyles(styles), connect(
  mapStateToProps,
  mapDispatchToProps
))(Filter);
