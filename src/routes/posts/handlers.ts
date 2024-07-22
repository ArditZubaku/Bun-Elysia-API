import prisma from "../../db";
import {NotFoundError} from "elysia";

export async function getPosts() {
    try {
        return await prisma.post.findMany({
            orderBy: {
                createdAt: "asc"
            }
        });
    } catch (err: unknown) {
        console.error(err);
    }
}

export async function getPostById(id: number) {
    try {
        return await prisma.post.findUniqueOrThrow({
            where: {
                id
            }
        });
    } catch (err: any) {
        console.error(err);
        if (err.code === "P2025") {
            throw new NotFoundError("Post not found");
        }
    }
}

export async function createPost(data: {title: string, content: string}) {
    try {
        return await prisma.post.create({
            data
        });
    } catch (err: unknown) {
        console.error(err);
    }
}

export async function updatePost(id: number, data: {title?: string, content?: string}) {
    try {
        return await prisma.post.update({
            where: {
                id
            },
            data
        });
    } catch (err: unknown) {
        console.error(err);
    }
}

export async function deletePost(id: number) {
    try {
        return await prisma.post.delete({
            where: {
                id
            }
        });
    } catch (err: unknown) {
        console.error(err);
    }
}
