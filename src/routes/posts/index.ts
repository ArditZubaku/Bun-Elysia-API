import {Elysia, t} from "elysia";
import {createPost, deletePost, getPostById, getPosts, updatePost} from "./handlers";

const body = t.Object({
    title: t.String({
        minLength: 3,
        maxLength: 50
    }),
    content: t.String({
        minLength: 3,
        maxLength: 500
    })
});

const params = t.Object({id: t.Numeric()});

const postRoutes = new Elysia({
    prefix: "/posts"
})
    .get("/", () => getPosts())
    .get("/:id", ({params: {id}}) => getPostById((id)), {params})
    .post("/", ({body}) => createPost(body), {body})
    .patch("/:id", ({params: {id}, body}) => updatePost(id, body), {params, body})
    .delete("/:id", ({params: {id}}) => deletePost(id), {params});

export default postRoutes;
