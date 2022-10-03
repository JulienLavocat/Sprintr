import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Board = {
  __typename?: 'Board';
  columns: Array<BoardColumn>;
  id: Scalars['String'];
  name: Scalars['String'];
};

export type BoardColumn = {
  __typename?: 'BoardColumn';
  cards: Array<Card>;
  id: Scalars['String'];
  name: Scalars['String'];
};

export type Card = {
  __typename?: 'Card';
  content: Scalars['String'];
  id: Scalars['String'];
  score: Scalars['String'];
  scoreType: Scalars['String'];
  title: Scalars['String'];
  type: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createProject: Project;
};


export type MutationCreateProjectArgs = {
  name: Scalars['String'];
};

export type Project = {
  __typename?: 'Project';
  boards: Array<Board>;
  id: Scalars['String'];
  name: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  getBoard: Board;
  getProject: Project;
  listProjects: Array<Project>;
};


export type QueryGetBoardArgs = {
  name: Scalars['String'];
  projectId: Scalars['String'];
};


export type QueryGetProjectArgs = {
  id: Scalars['String'];
};

export type GetBoardQueryVariables = Exact<{
  projectId: Scalars['String'];
  name: Scalars['String'];
}>;


export type GetBoardQuery = { __typename?: 'Query', getBoard: { __typename?: 'Board', id: string, name: string, columns: Array<{ __typename?: 'BoardColumn', id: string, name: string, cards: Array<{ __typename?: 'Card', id: string, content: string, score: string, title: string, type: string, scoreType: string }> }> } };

export type GetprojecQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type GetprojecQuery = { __typename?: 'Query', getProject: { __typename?: 'Project', id: string, name: string } };

export const GetBoardDocument = gql`
    query GetBoard($projectId: String!, $name: String!) {
  getBoard(projectId: $projectId, name: $name) {
    id
    name
    columns {
      id
      name
      cards {
        id
        content
        score
        title
        type
        scoreType
      }
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class GetBoardGQL extends Apollo.Query<GetBoardQuery, GetBoardQueryVariables> {
    document = GetBoardDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const GetprojecDocument = gql`
    query Getprojec($id: String!) {
  getProject(id: $id) {
    id
    name
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class GetprojecGQL extends Apollo.Query<GetprojecQuery, GetprojecQueryVariables> {
    document = GetprojecDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }