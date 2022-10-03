import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const appSlice = createSlice({
  name: 'app',
  initialState: {
    channelId: null,
    channelName: null,
    // serverId: null,
    // serverName: null,
    // depId: null,
    // depName: null,
  },
  reducers: {
    setChannelInfo: (state,action) => {
      state.channelId = action.payload.channelId;
      state.channelName = action.payload.channelName;
    },
    // setServerId: (state,action) => {
    //   state.app += action.payload;
    // },
    // setDepId: (state,action) => {
    //   state.app += action.payload;
    // },
  },
});

// export const { setChannelId,setServerId,setDepId } = appSlice.actions;
export const { setChannelInfo } = appSlice.actions;

export const selectChannelId = (state) => state.app.channelId;
// export const selectServerId = (state) => state.app.serverId;
// export const selectDepId = (state) => state.app.depId;

export const selectChannelName = (state) => state.app.channelName;
// export const selectserverName = (state) => state.app.serverName;
// export const selectdepName = (state) => state.app.depName;

export default appSlice.reducer;