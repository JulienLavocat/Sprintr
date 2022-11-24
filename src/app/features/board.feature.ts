import { createAction, createReducer, on, props } from '@ngrx/store';
import { Board } from '../graphql/generated';

export const setBoard = createAction('[Board Component] Set', props<Board>());

export const boardReducer = createReducer<Board | null>(
  null,
  on(setBoard, (_, action) => action)
);
