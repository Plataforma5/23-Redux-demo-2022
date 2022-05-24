import { createAction, createReducer } from "@reduxjs/toolkit";

// ACTION

export const increase = createAction("increase");
export const decrease = createAction("decrease");
export const addMultiple = createAction("addMultiple");

// console.log("ACTION WITH PAYLOAD", addMultiple(3)); // { type: "addMultiple", payload: 3 }

// REDUCER

const initialState = { value: 5 };

export default createReducer(initialState, {
  [increase]: (state) => {
    state.value += 1;
  },
  [decrease]: (state) => {
    state.value -= 1;
  },
  [addMultiple]: (state, action) => {
    const value = action.payload || 0;
    const amount = parseInt(value, 10);
    state.value += amount;
  },
  // [addComment]: (state, action) => {
  //   state.comments.push(action.payload)
  // }
});

// REDUCER A MANO

// export default function couterReducer(state = initialState, action) {
//   switch (action.type) {
//     case INCREASE:
//       return { value: state.value + 1 };
//     case "decrease":
//       return { value: state.value - 1 };
//     case "addMultiple":
//       return { value: state.value + action.payload };
//     default:
//       return state;
//   }
// }

// ACTION A MANO

// function newCommentAction({ user, comment }) {
//   return {
//     type: "NEW_COMMENT",
//     payload: {
//       author: user,
//       comment: comment,
//       date: new Date(),
//       likes: 0,
//     },
//   };
// }

// newCommentAction(user, comment)
