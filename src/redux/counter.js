import { createAction, createReducer } from "@reduxjs/toolkit";

// ACTION V1

// const increase = {
//   type: "INCREASE",
// }

// const decrease = {
//   type: "DECREASE",
// }

// const addMany = {
//   type: "ADD_MANY",
//   value: 2
// }

// ACTION V2 - action creators

// const increase = () => {
//   return {
//     type: "INCREASE",
//   };
// };

// const decrease = () => {
//   return {
//     type: "DECREASE",
//   };
// };

// const addMany = (value) => {
//   return {
//     type: "ADD_MANY",
//     value: value,
//   };
// };

// ACTION V3

// const increase = createAction("increase");
// const decrease = createAction("decrease");
// const addMany = createAction("addMany");

// const increase = (payload) => {
//     return {
//       type: "INCREASE",
//       payload,
//     };
//   };

//   {
//     type: "increase"
//   }

// definir acciones

// definir reducer
// const reducer = (state, action) => {

//   if (action.type === "increase") {
//     return { value: state.value + 1 }
//   }

//   if (action.type === "addMany") {
//     return state + action.payload
//   }

//   return state;
// };

export const increase = createAction("increase");
export const decrease = createAction("decrease");
export const addMany = createAction("addMany");

const initialState = {
  value: 0,
};

const reducer = createReducer(initialState, {
  [increase]: (state, action) => {
    console.log("ACTION", action);
    return { value: state.value + 1 };
  },
  [decrease]: (state, action) => {
    console.log("ACTION", action);
    return { value: state.value - 1 };
  },
  [addMany]: (state, action) => {
    console.log("ACTION", action);
    return { value: state.value + action.payload };
  },
});

export default reducer;
