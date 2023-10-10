import { ListTacoRecipesQuery, TacoRecipe } from '@/src/API'
import { deleteTacoRecipe } from '@/src/graphql/mutations'
import { listTacoRecipes } from '@/src/graphql/queries'
import { GraphQLResult } from '@aws-amplify/api-graphql'
import { useAuthenticator } from '@aws-amplify/ui-react'
import { API } from 'aws-amplify'
import Link from 'next/link'
import { useEffect, useState } from 'react'

function Home() {
	const [recipes, setRecipes] = useState<[] | TacoRecipe[]>([])
	const { user } = useAuthenticator((context) => [context.user])
	console.log({ user })
	useEffect(() => {
		const recipePromise = API.graphql({
			query: listTacoRecipes,
			authMode: user ? 'AMAZON_COGNITO_USER_POOLS' : 'AWS_IAM',
		}) as Promise<GraphQLResult<ListTacoRecipesQuery>>

		recipePromise.then((res) => {
			console.log(res.data?.listTacoRecipes?.items)
			const items = res.data?.listTacoRecipes?.items ?? []

			setRecipes(items.filter((item): item is TacoRecipe => Boolean(item)))
		})
	}, [user])

	const handleRecipeDelete = async (id: string) => {
		if (user) {
			await API.graphql({
				query: deleteTacoRecipe,
				variables: { input: { id } },
			})
		}
	}
	return (
		<>
			<div className="hero min-h-screen bg-base-200">
				<div className="hero-content text-center">
					<div className="max-w-md">
						<h1 className="text-5xl font-bold">My Awesome Recipe App!</h1>
						<p className="py-6">
							Let&apos;s see what I&apos;m cooking up these days!
						</p>
						<Link href={'/my-recipes'} className="btn btn-primary">
							Get Started
						</Link>
					</div>
				</div>
			</div>
			<section className="flex justify-center mt-6">
				<ul className="flex">
					{recipes.map((recipe) => (
						<li
							onClick={() => {
								handleRecipeDelete(recipe.id)
							}}
							className="m-3"
							key={recipe.id}
						>
							<div className="card w-96 bg-secondary text-primary-content">
								<div className="card-body">
									<h2 className="card-title">{recipe.title}</h2>
									<p>{recipe.description}</p>
								</div>
							</div>
						</li>
					))}
				</ul>
			</section>
		</>
	)
}

export default Home
