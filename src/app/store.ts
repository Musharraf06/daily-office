import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import taskReducer from '../feature/tasks/taskSlice';
// import logger from 'redux-logger';

export const store = configureStore({
  reducer: { tasks: taskReducer },
  // middleware: [logger] as const,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
