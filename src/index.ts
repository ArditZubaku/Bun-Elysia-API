import {Elysia} from "elysia";
import postRoutes from "./routes/posts";
import { swagger } from '@elysiajs/swagger'

const app = new Elysia();

app.use(swagger()).group("/api", (app) => app.use(postRoutes)).listen(8080);

console.log(
    `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
