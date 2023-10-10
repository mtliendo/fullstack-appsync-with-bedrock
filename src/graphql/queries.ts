/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const generateTacoRecipe = /* GraphQL */ `query GenerateTacoRecipe($prompt: String) {
  generateTacoRecipe(prompt: $prompt)
}
` as GeneratedQuery<
  APITypes.GenerateTacoRecipeQueryVariables,
  APITypes.GenerateTacoRecipeQuery
>;
export const getTacoRecipe = /* GraphQL */ `query GetTacoRecipe($id: ID!) {
  getTacoRecipe(id: $id) {
    id
    title
    description
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetTacoRecipeQueryVariables,
  APITypes.GetTacoRecipeQuery
>;
export const listTacoRecipes = /* GraphQL */ `query ListTacoRecipes(
  $filter: ModelTacoRecipeFilterInput
  $limit: Int
  $nextToken: String
) {
  listTacoRecipes(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      title
      description
      createdAt
      updatedAt
      owner
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListTacoRecipesQueryVariables,
  APITypes.ListTacoRecipesQuery
>;
