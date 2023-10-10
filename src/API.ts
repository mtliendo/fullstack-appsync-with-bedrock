/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateTacoRecipeInput = {
  id?: string | null,
  title: string,
  description?: string | null,
};

export type ModelTacoRecipeConditionInput = {
  title?: ModelStringInput | null,
  description?: ModelStringInput | null,
  and?: Array< ModelTacoRecipeConditionInput | null > | null,
  or?: Array< ModelTacoRecipeConditionInput | null > | null,
  not?: ModelTacoRecipeConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type TacoRecipe = {
  __typename: "TacoRecipe",
  id: string,
  title: string,
  description?: string | null,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export type UpdateTacoRecipeInput = {
  id: string,
  title?: string | null,
  description?: string | null,
};

export type DeleteTacoRecipeInput = {
  id: string,
};

export type ModelTacoRecipeFilterInput = {
  id?: ModelIDInput | null,
  title?: ModelStringInput | null,
  description?: ModelStringInput | null,
  and?: Array< ModelTacoRecipeFilterInput | null > | null,
  or?: Array< ModelTacoRecipeFilterInput | null > | null,
  not?: ModelTacoRecipeFilterInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelTacoRecipeConnection = {
  __typename: "ModelTacoRecipeConnection",
  items:  Array<TacoRecipe | null >,
  nextToken?: string | null,
};

export type ModelSubscriptionTacoRecipeFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  title?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionTacoRecipeFilterInput | null > | null,
  or?: Array< ModelSubscriptionTacoRecipeFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type CreateTacoRecipeMutationVariables = {
  input: CreateTacoRecipeInput,
  condition?: ModelTacoRecipeConditionInput | null,
};

export type CreateTacoRecipeMutation = {
  createTacoRecipe?:  {
    __typename: "TacoRecipe",
    id: string,
    title: string,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdateTacoRecipeMutationVariables = {
  input: UpdateTacoRecipeInput,
  condition?: ModelTacoRecipeConditionInput | null,
};

export type UpdateTacoRecipeMutation = {
  updateTacoRecipe?:  {
    __typename: "TacoRecipe",
    id: string,
    title: string,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeleteTacoRecipeMutationVariables = {
  input: DeleteTacoRecipeInput,
  condition?: ModelTacoRecipeConditionInput | null,
};

export type DeleteTacoRecipeMutation = {
  deleteTacoRecipe?:  {
    __typename: "TacoRecipe",
    id: string,
    title: string,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type GenerateTacoRecipeQueryVariables = {
  prompt?: string | null,
};

export type GenerateTacoRecipeQuery = {
  generateTacoRecipe: string,
};

export type GetTacoRecipeQueryVariables = {
  id: string,
};

export type GetTacoRecipeQuery = {
  getTacoRecipe?:  {
    __typename: "TacoRecipe",
    id: string,
    title: string,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListTacoRecipesQueryVariables = {
  filter?: ModelTacoRecipeFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListTacoRecipesQuery = {
  listTacoRecipes?:  {
    __typename: "ModelTacoRecipeConnection",
    items:  Array< {
      __typename: "TacoRecipe",
      id: string,
      title: string,
      description?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateTacoRecipeSubscriptionVariables = {
  filter?: ModelSubscriptionTacoRecipeFilterInput | null,
  owner?: string | null,
};

export type OnCreateTacoRecipeSubscription = {
  onCreateTacoRecipe?:  {
    __typename: "TacoRecipe",
    id: string,
    title: string,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateTacoRecipeSubscriptionVariables = {
  filter?: ModelSubscriptionTacoRecipeFilterInput | null,
  owner?: string | null,
};

export type OnUpdateTacoRecipeSubscription = {
  onUpdateTacoRecipe?:  {
    __typename: "TacoRecipe",
    id: string,
    title: string,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteTacoRecipeSubscriptionVariables = {
  filter?: ModelSubscriptionTacoRecipeFilterInput | null,
  owner?: string | null,
};

export type OnDeleteTacoRecipeSubscription = {
  onDeleteTacoRecipe?:  {
    __typename: "TacoRecipe",
    id: string,
    title: string,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};
