import { createAction, createReducer, createSlice } from "@reduxjs/toolkit";
import { createSelector } from "reselect";

let bugId = 0;

const slice = createSlice({
  name: "bugs",
  initialState: [],
  reducers: {
    bugAssignedToUser: (state, action) => {
      const { bugId, userId } = action.payload;
      const bugIndex = state.findIndex((bug) => bug.id === bugId);
      if (bugIndex < 0) return;
      state[bugIndex].userId = userId;
    },

    bugAdded: (state, action) => {
      state.push({
        id: ++bugId,
        description: action.payload.description,
        resolved: false,
      });
    },
    bugRemoved: (state, action) => {
      return state.filter((bug) => bug.id !== action.payload.id);
    },
    bugResolved: (state, action) => {
      return state.map((bug) =>
        bug.id !== action.payload.id ? bug : { ...bug, resolved: true }
      );
    },
  },
});

console.log(slice);
export const {
  bugAdded,
  bugRemoved,
  bugResolved,
  bugAssignedToUser,
} = slice.actions;
export default slice.reducer;

export const unresolvedBugs = createSelector(
  (state) => state.entities.bugs,
  (bugs) => bugs.filter((bug) => !bug.resolved)
);

export const getBugsByUser = (userId) =>
  createSelector(
    (state) => state.entities.bugs,
    (bugs) => bugs.filter((bug) => bug.userId === userId)
  );

/*

//Ducks Method
//Action Types

export const bugAdded = createAction("bugAdded");
export const bugRemoved = createAction("bugRemoved");
export const bugResolved = createAction("bugResolved");

//ActionCreators

//reducer

let bugId = 0;

export default createReducer([], {
  [bugAdded.type]: (state, action) => {
    state.push({
      id: ++bugId,
      description: action.payload.description,
      resolved: false,
    });
  },
  [bugRemoved.type]: (state, action) => {
    state.filter((bug) => bug.id !== action.payload.id);
  },

  [bugResolved.type]: (state, action) => {
    state.map((bug) =>
      bug.id !== action.payload.id ? bug : { ...bug, resolved: true }
    );
  },
});
*/
