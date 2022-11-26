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
  order: Scalars['Int'];
  score: Scalars['String'];
  scoreType: Scalars['String'];
  title: Scalars['String'];
  type: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  beginSprint: Scalars['Boolean'];
  createCard: Card;
  createColumn: BoardColumn;
  createProject: Project;
  deleteCard: Card;
  deleteColumn: BoardColumn;
  endSprint: Scalars['Boolean'];
  moveCardToColumn: Card;
  setCardsOrder: Card;
};


export type MutationBeginSprintArgs = {
  projectId: Scalars['String'];
};


export type MutationCreateCardArgs = {
  boardId: Scalars['String'];
  columnId: Scalars['String'];
  content: Scalars['String'];
  order: Scalars['Int'];
  score: Scalars['String'];
  scoreType: Scalars['String'];
  title: Scalars['String'];
  type: Scalars['String'];
};


export type MutationCreateColumnArgs = {
  boardId: Scalars['String'];
  name: Scalars['String'];
  projectId: Scalars['String'];
};


export type MutationCreateProjectArgs = {
  name: Scalars['String'];
};


export type MutationDeleteCardArgs = {
  boardId: Scalars['String'];
  cardId: Scalars['String'];
};


export type MutationDeleteColumnArgs = {
  id: Scalars['String'];
};


export type MutationEndSprintArgs = {
  projectId: Scalars['String'];
};


export type MutationMoveCardToColumnArgs = {
  boardId: Scalars['String'];
  cardId: Scalars['String'];
  destinationColumnId: Scalars['String'];
};


export type MutationSetCardsOrderArgs = {
  boardId: Scalars['String'];
  cardId: Scalars['String'];
  columnId: Scalars['String'];
  destinationIndex: Scalars['Int'];
  originIndex: Scalars['Int'];
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

export type Subscription = {
  __typename?: 'Subscription';
  subscribeToBoardUpdates?: Maybe<Array<BoardColumn>>;
};


export type SubscriptionSubscribeToBoardUpdatesArgs = {
  boardId: Scalars['String'];
};

export type BeginSprintMutationVariables = Exact<{
  projectId: Scalars['String'];
}>;


export type BeginSprintMutation = { __typename?: 'Mutation', beginSprint: boolean };

export type CreateCardMutationVariables = Exact<{
  boardId: Scalars['String'];
  columnId: Scalars['String'];
  title: Scalars['String'];
  content: Scalars['String'];
  type: Scalars['String'];
  score: Scalars['String'];
  scoreType: Scalars['String'];
  order: Scalars['Int'];
}>;


export type CreateCardMutation = { __typename?: 'Mutation', createCard: { __typename?: 'Card', id: string } };

export type CreateColumnMutationVariables = Exact<{
  projectId: Scalars['String'];
  boardId: Scalars['String'];
  name: Scalars['String'];
}>;


export type CreateColumnMutation = { __typename?: 'Mutation', createColumn: { __typename?: 'BoardColumn', id: string } };

export type CreateProjectMutationVariables = Exact<{
  name: Scalars['String'];
}>;


export type CreateProjectMutation = { __typename?: 'Mutation', createProject: { __typename?: 'Project', name: string, id: string } };

export type DeleteCardMutationVariables = Exact<{
  boardId: Scalars['String'];
  cardId: Scalars['String'];
}>;


export type DeleteCardMutation = { __typename?: 'Mutation', deleteCard: { __typename?: 'Card', id: string } };

export type DeleteColumnMutationVariables = Exact<{
  columnId: Scalars['String'];
}>;


export type DeleteColumnMutation = { __typename?: 'Mutation', deleteColumn: { __typename?: 'BoardColumn', id: string } };

export type EndSprintMutationVariables = Exact<{
  projectId: Scalars['String'];
}>;


export type EndSprintMutation = { __typename?: 'Mutation', endSprint: boolean };

export type GetBoardQueryVariables = Exact<{
  projectId: Scalars['String'];
  name: Scalars['String'];
}>;


export type GetBoardQuery = { __typename?: 'Query', getBoard: { __typename?: 'Board', id: string, name: string, columns: Array<{ __typename?: 'BoardColumn', id: string, name: string, cards: Array<{ __typename?: 'Card', id: string, content: string, score: string, title: string, type: string, scoreType: string, order: number }> }> } };

export type GetprojecQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type GetprojecQuery = { __typename?: 'Query', getProject: { __typename?: 'Project', id: string, name: string } };

export type ListProjectsQueryVariables = Exact<{ [key: string]: never; }>;


export type ListProjectsQuery = { __typename?: 'Query', listProjects: Array<{ __typename?: 'Project', id: string, name: string }> };

export type MoveCardToColumnMutationVariables = Exact<{
  boardId: Scalars['String'];
  cardId: Scalars['String'];
  destinationColumnId: Scalars['String'];
}>;


export type MoveCardToColumnMutation = { __typename?: 'Mutation', moveCardToColumn: { __typename?: 'Card', id: string } };

export type SetCardsOrderMutationVariables = Exact<{
  boardId: Scalars['String'];
  columnId: Scalars['String'];
  cardId: Scalars['String'];
  originIndex: Scalars['Int'];
  destinationIndex: Scalars['Int'];
}>;


export type SetCardsOrderMutation = { __typename?: 'Mutation', setCardsOrder: { __typename?: 'Card', id: string } };

export type SubscribeToBoardUpdatesSubscriptionVariables = Exact<{
  boardId: Scalars['String'];
}>;


export type SubscribeToBoardUpdatesSubscription = { __typename?: 'Subscription', subscribeToBoardUpdates?: Array<{ __typename?: 'BoardColumn', id: string, name: string, cards: Array<{ __typename?: 'Card', content: string, id: string, score: string, scoreType: string, title: string, type: string, order: number }> }> | null };

export const BeginSprintDocument = gql`
    mutation BeginSprint($projectId: String!) {
  beginSprint(projectId: $projectId)
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class BeginSprintGQL extends Apollo.Mutation<BeginSprintMutation, BeginSprintMutationVariables> {
    document = BeginSprintDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const CreateCardDocument = gql`
    mutation createCard($boardId: String!, $columnId: String!, $title: String!, $content: String!, $type: String!, $score: String!, $scoreType: String!, $order: Int!) {
  createCard(
    boardId: $boardId
    columnId: $columnId
    title: $title
    content: $content
    type: $type
    score: $score
    scoreType: $scoreType
    order: $order
  ) {
    id
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class CreateCardGQL extends Apollo.Mutation<CreateCardMutation, CreateCardMutationVariables> {
    document = CreateCardDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const CreateColumnDocument = gql`
    mutation CreateColumn($projectId: String!, $boardId: String!, $name: String!) {
  createColumn(projectId: $projectId, boardId: $boardId, name: $name) {
    id
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class CreateColumnGQL extends Apollo.Mutation<CreateColumnMutation, CreateColumnMutationVariables> {
    document = CreateColumnDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const CreateProjectDocument = gql`
    mutation CreateProject($name: String!) {
  createProject(name: $name) {
    name
    id
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class CreateProjectGQL extends Apollo.Mutation<CreateProjectMutation, CreateProjectMutationVariables> {
    document = CreateProjectDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const DeleteCardDocument = gql`
    mutation deleteCard($boardId: String!, $cardId: String!) {
  deleteCard(boardId: $boardId, cardId: $cardId) {
    id
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class DeleteCardGQL extends Apollo.Mutation<DeleteCardMutation, DeleteCardMutationVariables> {
    document = DeleteCardDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const DeleteColumnDocument = gql`
    mutation DeleteColumn($columnId: String!) {
  deleteColumn(id: $columnId) {
    id
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class DeleteColumnGQL extends Apollo.Mutation<DeleteColumnMutation, DeleteColumnMutationVariables> {
    document = DeleteColumnDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const EndSprintDocument = gql`
    mutation EndSprint($projectId: String!) {
  endSprint(projectId: $projectId)
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class EndSprintGQL extends Apollo.Mutation<EndSprintMutation, EndSprintMutationVariables> {
    document = EndSprintDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
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
        order
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
export const ListProjectsDocument = gql`
    query ListProjects {
  listProjects {
    id
    name
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class ListProjectsGQL extends Apollo.Query<ListProjectsQuery, ListProjectsQueryVariables> {
    document = ListProjectsDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const MoveCardToColumnDocument = gql`
    mutation moveCardToColumn($boardId: String!, $cardId: String!, $destinationColumnId: String!) {
  moveCardToColumn(
    boardId: $boardId
    cardId: $cardId
    destinationColumnId: $destinationColumnId
  ) {
    id
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class MoveCardToColumnGQL extends Apollo.Mutation<MoveCardToColumnMutation, MoveCardToColumnMutationVariables> {
    document = MoveCardToColumnDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const SetCardsOrderDocument = gql`
    mutation SetCardsOrder($boardId: String!, $columnId: String!, $cardId: String!, $originIndex: Int!, $destinationIndex: Int!) {
  setCardsOrder(
    boardId: $boardId
    columnId: $columnId
    cardId: $cardId
    originIndex: $originIndex
    destinationIndex: $destinationIndex
  ) {
    id
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class SetCardsOrderGQL extends Apollo.Mutation<SetCardsOrderMutation, SetCardsOrderMutationVariables> {
    document = SetCardsOrderDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const SubscribeToBoardUpdatesDocument = gql`
    subscription subscribeToBoardUpdates($boardId: String!) {
  subscribeToBoardUpdates(boardId: $boardId) {
    cards {
      content
      id
      score
      scoreType
      title
      type
      order
    }
    id
    name
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class SubscribeToBoardUpdatesGQL extends Apollo.Subscription<SubscribeToBoardUpdatesSubscription, SubscribeToBoardUpdatesSubscriptionVariables> {
    document = SubscribeToBoardUpdatesDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }