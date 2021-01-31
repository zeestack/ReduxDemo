import { createSlice } from "@reduxjs/toolkit";

let projId = 0;

const slice = createSlice({
  name: "projects",
  initialState: [],
  reducers: {
    projectAdded: (projects, action) => {
      projects.push({
        id: ++projId,
        name: action.payload.name,
      });
    },
  },
});

export const { projectAdded } = slice.actions;
export default slice.reducer;
