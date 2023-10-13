import '@/styles/globals.css'
import { Authenticator } from '@aws-amplify/ui-react'
import '@aws-amplify/ui-react/styles.css'
import { Amplify } from 'aws-amplify'
import cdkOutputs from '../output.json'

import type { AppProps } from 'next/app'
const config = {
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
Amplify.configure(config)
console.log('first')
export default function App({ Component, pageProps }: AppProps) {
	return (
		<Authenticator.Provider>
			<Component {...pageProps} />
		</Authenticator.Provider>
	)
}
