import '@/styles/globals.css'
import { AmplifyProvider } from '@aws-amplify/ui-react'
import '@aws-amplify/ui-react/styles.css'
import { Amplify } from 'aws-amplify'
import { config } from '@/aws-exports'
import type { AppProps } from 'next/app'

Amplify.configure(config)

export default function App({ Component, pageProps }: AppProps) {
	return (
		<AmplifyProvider>
			<Component {...pageProps} />
		</AmplifyProvider>
	)
}
