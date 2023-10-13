import '@/styles/globals.css'
import { Authenticator } from '@aws-amplify/ui-react'
import '@aws-amplify/ui-react/styles.css'
import { Amplify } from 'aws-amplify'
import { config } from '@/aws-exports'
import type { AppProps } from 'next/app'

Amplify.configure(config)
console.log('first')
export default function App({ Component, pageProps }: AppProps) {
	return (
		<Authenticator.Provider>
			<Component {...pageProps} />
		</Authenticator.Provider>
	)
}
