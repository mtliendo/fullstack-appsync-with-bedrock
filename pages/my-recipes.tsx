import { Navbar } from '@/components/navbar'
import { CreateTacoRecipeMutation, GenerateTacoRecipeQuery } from '@/src/API'
import { createTacoRecipe } from '@/src/graphql/mutations'
import { generateTacoRecipe } from '@/src/graphql/queries'
import { GraphQLResult } from '@aws-amplify/api-graphql'
import { Authenticator, withAuthenticator } from '@aws-amplify/ui-react'
import { API } from 'aws-amplify'
import { useState } from 'react'

function MyRecipes() {
	const [title, setTitle] = useState('')
	const [description, setDescription] = useState('')

	const generateAIRecipe = async () => {
		const res = (await API.graphql({
			query: generateTacoRecipe,
			variables: {
				prompt: 'A random taco recipe',
			},
		})) as GraphQLResult<GenerateTacoRecipeQuery>

		const aiRecipe = JSON.parse(res.data?.generateTacoRecipe!).completion

		function extractJson(str: string) {
			// Use a regex to find content between ```json and ```
			const regex = /```json\s*([\s\S]+?)\s*```/

			const match = str.match(regex)

			if (match && match[1]) {
				try {
					return JSON.parse(match[1])
				} catch (error) {
					console.error('Failed to parse JSON:', error)
				}
			}
		}
		const extractedData = extractJson(aiRecipe)
		if (extractedData) {
			setTitle(extractedData.title)
			setDescription(extractedData.description)
		}
	}

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault()
		const createRes = (await API.graphql({
			query: createTacoRecipe,
			variables: {
				input: {
					title,
					description,
				},
			},
		})) as GraphQLResult<CreateTacoRecipeMutation>

		console.log(createRes.data?.createTacoRecipe)
	}
	return (
		<>
			<Navbar />
			<Authenticator signUpAttributes={['email']}>
				<section className="flex justify-center">
					<form
						onSubmit={handleSubmit}
						className="flex flex-col items-center max-w-lg"
					>
						<section>
							<label htmlFor="recipe-title" className="label">
								<span className="label-text">What is the recipe title?</span>
							</label>
							<input
								id="recipe-title"
								name="recipe-title"
								type="text"
								value={title}
								onChange={(e) => setTitle(e.target.value)}
								placeholder="Hawaiian Tacos"
								className="input input-bordered input-accent w-full"
							/>
						</section>
						<section className="mt-4">
							<label htmlFor="recipe-description" className="label">
								<span className="label-text">
									What is the recipe description?
								</span>
							</label>
							<textarea
								id="recipe-description"
								name="recipe-description"
								value={description}
								onChange={(e) => setDescription(e.target.value)}
								placeholder="Start with corn tortilla..."
								className="input input-bordered input-accent w-full h-48"
							/>
						</section>
						<section className="flex flex-col w-full mt-4">
							<button
								type="button"
								onClick={() => generateAIRecipe()}
								className="btn btn-primary mb-4 "
							>
								Generate AI Recipe
							</button>
							<button type="submit" className="btn btn-accent">
								submit
							</button>
						</section>
					</form>
				</section>
			</Authenticator>
		</>
	)
}

export default MyRecipes
