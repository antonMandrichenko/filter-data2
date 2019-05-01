import fetch from 'cross-fetch';
import {sortFilterArray} from '../../utils/sortFilterArray';
import {
  RECEIVE_POSTS,
  ALL_DATA_TO_FILTER,
  DATA_FROM_TAG,
  DATA_FROM_INPUT,
  RECEIVE_POSTS_ERROR
} from '../actions/types';

export const receivePosts = body => {
  return {
    type: RECEIVE_POSTS,
    body
  }
};

export const fetchDataError = error => {
  return {
    type: RECEIVE_POSTS_ERROR,
    error
  }
};

export const allDataToFilter = data => {
  data.sort(sortFilterArray);
  return {
    type: ALL_DATA_TO_FILTER,
    data
  }
};

export const keyTag = (data, key) => {
  const dataFromTag = data.filter((item) =>
    item.tags.some((value) =>
      (value === key)
    )
  );
  dataFromTag.sort(sortFilterArray);
  return {
    type: DATA_FROM_TAG,
    dataFromTag
  }
};

export const fetchData = () => {
  return (dispatch) => {
    return fetch('./list.json')
      .then(response =>
        response.json()
      )
      .then(body => {
        dispatch(receivePosts(body));
      })
      .catch(err => dispatch(fetchDataError(err)))
  }
};

export const keyInput = (data, key) => {
  const dataFromInput = data.filter((item) =>
    item.title.toLowerCase().indexOf(
      key.toLowerCase()) === 0
  );
  dataFromInput.sort(sortFilterArray);
  return {
    type: DATA_FROM_INPUT,
    dataFromInput
  }
};
