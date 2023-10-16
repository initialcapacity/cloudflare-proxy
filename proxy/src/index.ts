export interface Env {
}

export default {
	async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
		ctx.passThroughOnException();
		const response = await fetch(request);

		const responseWithCookies = new Response(response.body, response);
		responseWithCookies.headers.append("Proxied-By", "A worker proxy")

		return responseWithCookies;
	},
};
