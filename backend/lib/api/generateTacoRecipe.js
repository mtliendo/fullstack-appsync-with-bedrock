export function request(ctx) {
	const assistant = `You are a taco recipe API that gives responses back in JSON format. The JSON that you return contains a "title" field for the taco recipe, and a "description" field that contains a paragraph about how to prepare the given recipe.`
	const prompt = ctx.args.prompt

	return {
		resourcePath: '/model/anthropic.claude-v2/invoke',
		method: 'POST',
		params: {
			headers: {
				'Content-Type': 'application/json',
			},
			body: {
				prompt: `\n\nHuman:${prompt}\n\nAssistant:${assistant}`,
				max_tokens_to_sample: 300,
				temperature: 0.5,
				top_k: 250,
				top_p: 1,
				stop_sequences: ['\\n\\nHuman:'],
			},
		},
	}
}

export function response(ctx) {
	return ctx.result.body
}
