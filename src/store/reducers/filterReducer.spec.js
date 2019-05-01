import {filter} from './filterReducer';
import * as types from '../actions/types';

describe('filter reducer', () => {
  it('return the initial state', () => {
    expect(filter(undefined, {})).toEqual(
      {
        items: [],
        filterMenu: [],
        filterData: [],
        dataError: null,
      }
    )
  });

  it('RECEIVE_POSTS', () => {

    const initState = {
      items: [],
      filterMenu: [],
      filterData: [],
      dataError: null,
    };

    const list = [
      {
        "title": "gson",
        "id": "gson",
        "tags": [
          "development-tool"
        ]
      },
      {
        "title": "jsoup",
        "id": "jsoup",
        "tags": [
          "development-tool"
        ]
      },
    ];

    expect(
      filter(initState, {
        type: types.RECEIVE_POSTS,
        body: {
          results: list
        }
      })
    ).toEqual({
      ...initState,
      items: list,
      filterData: list,
      filterMenu: ["all", "development-tool"],
      dataError: null,
    })
  });

  it('DATA_FROM_TAG', () => {

    const initState = {
      items: [0, 1, 2, 3],
      filterMenu: [1, 2, 3, 4],
      filterData: [],
      dataError: null,
    };

    expect(
      filter(initState, {
        type: types.DATA_FROM_TAG,
        dataFromTag: [5, 6, 7, 8]
      })
    ).toEqual({
      ...initState,
      filterData: [5, 6, 7, 8],
      dataError: null,
    })
  });

  it('DATA_FROM_INPUT', () => {

    const initState = {
      items: [0, 1, 2, 3],
      filterMenu: [1, 2, 3, 4],
      filterData: [],
      dataError: null,
    };

    expect(
      filter(initState, {
        type: types.DATA_FROM_INPUT,
        dataFromInput: [5, 6, 7, 8]
      })
    ).toEqual({
      ...initState,
      filterData: [5, 6, 7, 8],
      dataError: null,
    })
  });

  it('RECEIVE_POSTS_ERROR', () => {

    const initState = {
      items: [0, 1, 2, 3],
      filterMenu: [1, 2, 3, 4],
      filterData: [],
      dataError: null,
    };

    expect(
      filter(initState, {
        type: types.RECEIVE_POSTS_ERROR,
        error: {
          message: 'message'
        }
      })
    ).toEqual({
      ...initState,
      dataError: 'message'
    })
  });

  it('ALL_DATA_TO_FILTER', () => {

    const initState = {
      items: [0, 1, 2, 3],
      filterMenu: [1, 2, 3, 4],
      filterData: [],
      dataError: null,
    };

    expect(
      filter(initState, {
        type: types.ALL_DATA_TO_FILTER,
        data: [5, 6, 7, 8]
      })
    ).toEqual({
      ...initState,
      filterData: [5, 6, 7, 8],
      dataError: null,
    })
  });
});
