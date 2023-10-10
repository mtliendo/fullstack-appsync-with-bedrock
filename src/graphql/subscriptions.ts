/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateTacoRecipe = /* GraphQL */ `subscription OnCreateTacoRecipe(
  $filter: ModelSubscriptionTacoRecipeFilterInput
  $owner: String
) {
  onCreateTacoRecipe(filter: $filter, owner: $owner) {
    id
    title
    description
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateTacoRecipeSubscriptionVariables,
  APITypes.OnCreateTacoRecipeSubscription
>;
export const onUpdateTacoRecipe = /* GraphQL */ `subscription OnUpdateTacoRecipe(
  $filter: ModelSubscriptionTacoRecipeFilterInput
  $owner: String
) {
  onUpdateTacoRecipe(filter: $filter, owner: $owner) {
    id
    title
    description
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateTacoRecipeSubscriptionVariables,
  APITypes.OnUpdateTacoRecipeSubscription
>;
export const onDeleteTacoRecipe = /* GraphQL */ `subscription OnDeleteTacoRecipe(
  $filter: ModelSubscriptionTacoRecipeFilterInput
  $owner: String
) {
  onDeleteTacoRecipe(filter: $filter, owner: $owner) {
    id
    title
    description
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteTacoRecipeSubscriptionVariables,
  APITypes.OnDeleteTacoRecipeSubscription
>;
