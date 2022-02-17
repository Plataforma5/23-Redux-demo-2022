import { createReducer, createAction } from "@reduxjs/toolkit";

export const increase = createAction("increase");
export const decrease = createAction("decrease");
export const addMany = createAction("addMany");

const initialState = { value: 0 };

export const counterReducer = createReducer(initialState, {
  [increase]: (state) => {
    state.value += 1;
  },
  [decrease]: (state) => {
    state.value -= 1;
  },
  [addMany]: (state, action) => {
    state.value += action.payload;
  },

  // [addLikeToPost]: (state, action) => {

  //   const post = state.posts.find((post) => post.id === action.paylod.post_id)
  //   post.likes += 1
  // },
});
