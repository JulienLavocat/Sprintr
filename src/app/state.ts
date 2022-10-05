import { Board, Project } from './graphql/generated';

export interface State {
  project: Pick<Project, 'id' | 'name'>;
  board: Board;
}
