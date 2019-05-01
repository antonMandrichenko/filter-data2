import {
  fetchData,
  keyTag,
  keyInput,
  allDataToFilter
} from '../../store/actions/filterAction';

export const mapStateToProps = state => ({
  filterMenu: state.filter.filterMenu,
  dataItems: state.filter.items,
  filterData: state.filter.filterData,
  dataError: state.filter.dataError,
});

export const mapDispatchToProps = dispatch => ({
  fetchData: () => dispatch(fetchData()),
  filterListByTags: (dataItems, key) =>
    dispatch(keyTag(dataItems, key)),
  filterListByInput: (dataItems, key) =>
    dispatch(keyInput(dataItems, key)),
  allDataToFilter: dataItems =>
    dispatch(allDataToFilter(dataItems)),
});
