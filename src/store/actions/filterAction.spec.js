import * as actions from './filterAction';
import * as types from './types';
import {sortFilterArray} from "../../utils/sortFilterArray";

describe('filterActions', () => {
  it('receivePosts', () => {
    const body = {results: []};
    const expectedAction = {
      type: types.RECEIVE_POSTS,
      body
    };
    expect(actions.receivePosts(body)).toEqual(expectedAction)
  });

  it('fetchDataError', () => {
    const error = {message: 'i do'};
    const expectedAction = {
      type: types.RECEIVE_POSTS_ERROR,
      error
    };
    expect(actions.fetchDataError(error)).toEqual(expectedAction)
  });

  it('allDataToFilter', () => {
    const data = [
      {title: 'b'},
      {title: 'c'},
      {title: 'a'},
    ];
    const sortData = data.sort(sortFilterArray);
    const expectedAction = {
      type: types.ALL_DATA_TO_FILTER,
      data: sortData
    };
    expect(actions.allDataToFilter(data)).toEqual(expectedAction)
  });

  it('keyTag', () => {
    const data = [
      {
        "title": "a",
        "id": "gson",
        "tags": [
          "tool"
        ]
      },
      {
        "title": "c",
        "id": "jsoup",
        "tags": [
          "development"
        ]
      },
      {
        "title": "b",
        "id": "jsoupb",
        "tags": [
          "development"
        ]
      },
    ];
    const key = 'development';
    const expectedAction = {
      type: types.DATA_FROM_TAG,
      dataFromTag: [
        {
          "title": "b",
          "id": "jsoupb",
          "tags": [
            "development"
          ]
        },
        {
          "title": "c",
          "id": "jsoup",
          "tags": [
            "development"
          ]
        },
      ]
    };
    expect(actions.keyTag(data, key)).toEqual(expectedAction)
  });

  it('keyInput', () => {
    const data = [
      {
        "title": "a",
        "id": "gson",
        "tags": [
          "tool"
        ]
      },
      {
        "title": "c",
        "id": "jsoup",
        "tags": [
          "development"
        ]
      },
      {
        "title": "b",
        "id": "jsoupb",
        "tags": [
          "development"
        ]
      },
    ];
    const key = 'a';
    const expectedAction = {
      type: types.DATA_FROM_INPUT,
      dataFromInput: [
        {
          "title": "a",
          "id": "gson",
          "tags": [
            "tool"
          ]
        },
      ]
    };
    expect(actions.keyInput(data, key)).toEqual(expectedAction)
  });
});


