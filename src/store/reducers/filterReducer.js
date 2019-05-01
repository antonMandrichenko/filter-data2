import {
  RECEIVE_POSTS,
  ALL_DATA_TO_FILTER,
  DATA_FROM_TAG,
  DATA_FROM_INPUT,
  RECEIVE_POSTS_ERROR
} from '../actions/types';

export const filter = (
  state = {
    items: [],
    filterMenu: [],
    filterData: [],
    dataError: null,
  },
  action
) => {
  switch (action.type) {
    case RECEIVE_POSTS:
      const newArr = action.body.results.map((item) =>
        item.tags
      ).flat();
      let filterList = newArr.reduce((accum, item) => {
        return accum.indexOf(item) !== -1
          ? accum
          : [...accum, item]
      }, []);
      filterList.unshift('all');
      return {
        ...state,
        items: action.body.results,
        filterMenu: filterList,
        filterData: action.body.results,
        dataError: null,
      };
    case DATA_FROM_TAG:
      return {
        ...state,
        filterData: action.dataFromTag,
        dataError: null,
      };
    case DATA_FROM_INPUT:
      return {
        ...state,
        filterData: action.dataFromInput,
        dataError: null,
      };
    case RECEIVE_POSTS_ERROR:
      return {
        ...state,
        dataError: action.error.message
      };
    case ALL_DATA_TO_FILTER:
      return {
        ...state,
        filterData: action.data,
        dataError: null
      };
    default:
      return state
  }
};
