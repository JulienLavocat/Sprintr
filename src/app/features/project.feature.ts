import { createAction, createReducer, on, props } from '@ngrx/store';
import { Project } from '../shared/models/project.model';

export const setProject = createAction(
  '[Project Component] Set',
  props<Project>()
);

export const projectReducer = createReducer<Project | null>(
  null,
  on(setProject, (_, action) => ({ id: action.id, name: action.name }))
);
