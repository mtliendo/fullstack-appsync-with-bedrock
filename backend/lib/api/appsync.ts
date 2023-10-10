import { Construct } from 'constructs'
import {
	AmplifyGraphqlApi,
	AmplifyGraphqlDefinition,
} from '@aws-amplify/graphql-api-construct'
import { UserPool } from 'aws-cdk-lib/aws-cognito'
import { IRole, PolicyStatement } from 'aws-cdk-lib/aws-iam'
import * as path from 'path'
import { Code, FunctionRuntime } from 'aws-cdk-lib/aws-appsync'

type AmplifyGraphQLAPIProps = {
	appName: string
	userpool: UserPool
	authRole: IRole
	unauthRole: IRole
	identityPoolId: string
}

// 2: Create your AppSync API
export const createAmplifyGraphQLAPI = (
	scope: Construct,
	props: AmplifyGraphQLAPIProps
) => {
	const api = new AmplifyGraphqlApi(scope, `${props.appName}`, {
		apiName: `${props.appName}`,
		definition: AmplifyGraphqlDefinition.fromFiles(
			path.join(__dirname, 'schema.graphql')
		),
		//! Protecting my API with Amazon Cognito 😎
		authorizationModes: {
			defaultAuthorizationMode: 'AMAZON_COGNITO_USER_POOLS',
			userPoolConfig: {
				userPool: props.userpool,
			},
			iamConfig: {
				identityPoolId: props.identityPoolId,
				unauthenticatedUserRole: props.unauthRole,
				authenticatedUserRole: props.authRole,
			},
		},
	})

	// Step 3: Add Bedrock as an HTTP Datasource
	const bedrockDataSource = api.addHttpDataSource(
		'bedrockDS',
		'https://bedrock-runtime.us-east-1.amazonaws.com',
		{
			authorizationConfig: {
				signingRegion: 'us-east-1',
				signingServiceName: 'bedrock',
			},
		}
	)

	bedrockDataSource.grantPrincipal.addToPrincipalPolicy(
		new PolicyStatement({
			resources: [
				'arn:aws:bedrock:us-east-1::foundation-model/anthropic.claude-v2',
			],
			actions: ['bedrock:InvokeModel'],
		})
	)

	const generateTacoRecipeResolver = api.addResolver('bedrockResolver', {
		dataSource: bedrockDataSource,
		typeName: 'Query',
		fieldName: 'generateTacoRecipe',
		code: Code.fromAsset(path.join(__dirname, 'generateTacoRecipe.js')),
		runtime: FunctionRuntime.JS_1_0_0,
	})
}
