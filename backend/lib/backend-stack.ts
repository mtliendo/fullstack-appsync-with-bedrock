import * as cdk from 'aws-cdk-lib'
import { Construct } from 'constructs'
import { createTacoExampleAuth } from './auth/cognito'
import { createAmplifyGraphQLAPI } from './api/appsync'

export class BackendStack extends cdk.Stack {
	constructor(scope: Construct, id: string, props?: cdk.StackProps) {
		super(scope, id, props)
		const appName = 'taco-recipes'

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

		new cdk.CfnOutput(this, 'UserPoolId', {
			value: tacoAuth.userPool.userPoolId,
		})
		new cdk.CfnOutput(this, 'UserPoolClientId', {
			value: tacoAuth.userPoolClient.userPoolClientId,
		})
		new cdk.CfnOutput(this, 'IdentityPoolId', {
			value: tacoAuth.identityPool.identityPoolId,
		})
	}
}
