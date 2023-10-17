export interface Env {
}

export default {
	async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
		ctx.passThroughOnException();
		const response = await fetch(request);

		const responseWithHeader = new Response(response.body, response);
		responseWithHeader.headers.append("Proxied-By", "A worker proxy")
		responseWithHeader.headers.append("Proxied-At", (new Date().getTime() / 1000).toFixed(0))

		return responseWithHeader;
	},
};
