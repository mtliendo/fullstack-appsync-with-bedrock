import cdkOutputs from './output.json'

export const config = {
	aws_project_region: cdkOutputs.BackendStack2.AppRegion,
	Auth: {
		region: cdkOutputs.BackendStack2.AppRegion,
		userPoolId: cdkOutputs.BackendStack2.UserPoolId,
		userPoolWebClientId: cdkOutputs.BackendStack2.UserPoolClientId,
		identityPoolId: cdkOutputs.BackendStack2.IdentityPoolId,
	},
	aws_appsync_graphqlEndpoint: cdkOutputs.BackendStack2.AppSyncAPIEndpoint,
	aws_appsync_region: cdkOutputs.BackendStack2.AppRegion,
	aws_appsync_authenticationType: cdkOutputs.BackendStack2.AppSyncAuthType,
}
