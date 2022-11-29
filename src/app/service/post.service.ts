import { Post } from "../models/post";

export async function getPost(): Promise<Post[]> {
    return await (await fetch('../../assets/db.json')).json();
}
