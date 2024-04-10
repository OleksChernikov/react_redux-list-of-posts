import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
// eslint-disable-next-line import/no-cycle
import counterReducer from '../features/counter/counterSlice';
import UsersContext from '../components/UsersContext';
import PostsContext from '../components/PostsContext';
import CommentsContext from '../components/CommentsContext';
import DelComentContext from '../components/DelComentContext';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    users: UsersContext,
    selectedUser: UsersContext,
    userPosts: PostsContext,
    comments: CommentsContext,
    selectedDelComment: DelComentContext,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

/* eslint-disable @typescript-eslint/indent */
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
/* eslint-enable @typescript-eslint/indent */
