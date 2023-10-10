import { useAuthenticator } from '@aws-amplify/ui-react'
import { Auth } from 'aws-amplify'
import Link from 'next/link'

export const Navbar = () => {
	const { user } = useAuthenticator((context) => [context.user])
	console.log('the user', user)
	return (
		<div className="navbar bg-base-100">
			<div className="flex-1">
				<Link href="/" className="btn btn-ghost normal-case text-xl">
					Focus Otter Recipes
				</Link>
			</div>
			<div className="flex-none">
				<ul className="menu menu-horizontal px-1">
					<li>
						<button
							onClick={() => {
								Auth.signOut()
							}}
							className="btn"
						>
							sign out
						</button>
					</li>
				</ul>
			</div>
		</div>
	)
}
