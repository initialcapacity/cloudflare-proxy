export interface Env {
}

const handler: ExportedHandler<Env> = {
    async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
        return new Response('Hello World!');
    },
};

export default handler;
