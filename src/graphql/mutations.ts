/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createTacoRecipe = /* GraphQL */ `mutation CreateTacoRecipe(
  $input: CreateTacoRecipeInput!
  $condition: ModelTacoRecipeConditionInput
) {
  createTacoRecipe(input: $input, condition: $condition) {
    id
    title
    description
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateTacoRecipeMutationVariables,
  APITypes.CreateTacoRecipeMutation
>;
export const updateTacoRecipe = /* GraphQL */ `mutation UpdateTacoRecipe(
  $input: UpdateTacoRecipeInput!
  $condition: ModelTacoRecipeConditionInput
) {
  updateTacoRecipe(input: $input, condition: $condition) {
    id
    title
    description
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateTacoRecipeMutationVariables,
  APITypes.UpdateTacoRecipeMutation
>;
export const deleteTacoRecipe = /* GraphQL */ `mutation DeleteTacoRecipe(
  $input: DeleteTacoRecipeInput!
  $condition: ModelTacoRecipeConditionInput
) {
  deleteTacoRecipe(input: $input, condition: $condition) {
    id
    title
    description
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteTacoRecipeMutationVariables,
  APITypes.DeleteTacoRecipeMutation
>;
