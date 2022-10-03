import { createAction, createReducer, on, props } from '@ngrx/store';
import { Project } from '../graphql/generated';

export const setProject = createAction(
  '[Project Component] Set',
  props<Pick<Project, 'id' | 'name'>>()
);

export const projectReducer = createReducer<Pick<
  Project,
  'id' | 'name'
> | null>(
  null,
  on(setProject, (_, action) => action)
);
