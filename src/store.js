import { configureStore, createSlice } from "@reduxjs/toolkit";

const facebook = createSlice({
  name: "facebookReducer",
  initialState: {
    me: {
      id: "",
      avatar:
        "https://scontent-ssn1-1.xx.fbcdn.net/v/t1.30497-1/cp0/c22.0.74.74a/p74x74/84241059_189132118950875_4138507100605120512_n.jpg?_nc_cat=1&_nc_sid=7206a8&_nc_ohc=dw1sHrpyaGsAX-k0D5r&_nc_ht=scontent-ssn1-1.xx&oh=25f0adbdc01a7f5a302bd08b29736be6&oe=5F7CC668",
      username: "",
      friends: []
    },
    feeds: []
  },
  reducers: {
    me: (state, action) => {
      state.me.id = action.payload.id;
      state.me.avatar = action.payload.avatar;
      state.me.username = action.payload.username;
      action.payload.friends.forEach(friend => state.me.friends.push(friend));
    },
    addFeed: (state, action) => {
      state.feeds.push(action.payload);
    }
  }
});

export const { me, addFeed } = facebook.actions;

export default configureStore({ reducer: facebook.reducer });