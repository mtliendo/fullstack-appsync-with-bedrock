import * as cdk from 'aws-cdk-lib'
import { Construct } from 'constructs'
import { createTacoExampleAuth } from './auth/cognito'
import { createAmplifyGraphQLAPI } from './api/appsync'
import { createAmplifyHosting } from './hosting/amplify'

export class BackendStack extends cdk.Stack {
	constructor(scope: Construct, id: string, props?: cdk.StackProps) {
		super(scope, id, props)
		const appName = 'taco-recipes-2'

		const tacoAuth = createTacoExampleAuth(this, {
			appName,
		})

		const tacoAPI = createAmplifyGraphQLAPI(this, {
			appName,
			userpool: tacoAuth.userPool,
			identityPoolId: tacoAuth.identityPool.identityPoolId,
			authRole: tacoAuth.identityPool.authenticatedRole,
			unauthRole: tacoAuth.identityPool.unauthenticatedRole,
		})

		const amplifyHosting = createAmplifyHosting(this, {
			account: this.account,
			appName,
			branch: 'main',
			ghOwner: 'mtliendo',
			repo: 'fullstack-appsync-with-bedrock',
			ghTokenName: 'github-token',
		})

		new cdk.CfnOutput(this, 'UserPoolId', {
			value: tacoAuth.userPool.userPoolId,
		})
		new cdk.CfnOutput(this, 'UserPoolClientId', {
			value: tacoAuth.userPoolClient.userPoolClientId,
		})
		new cdk.CfnOutput(this, 'IdentityPoolId', {
			value: tacoAuth.identityPool.identityPoolId,
		})
		new cdk.CfnOutput(this, 'AppSyncAPIEndpoint', {
			value: tacoAPI.graphqlUrl,
		})
		new cdk.CfnOutput(this, 'AppSyncAPIId', {
			value: tacoAPI.resources.graphqlApi.apiId,
		})
		new cdk.CfnOutput(this, 'AppSyncAuthType', {
			value: tacoAPI.resources.cfnResources.cfnGraphqlApi.authenticationType,
		})
		new cdk.CfnOutput(this, 'AppRegion', {
			value: this.region,
		})
	}
}
