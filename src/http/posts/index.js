import {$host} from "../index";
import {dataAC, singlePostDataAC} from "../../store/post/post";

export const getAllPosts = () => async dispatch => {
    try {
        const {data} = await $host.get(`posts`);
        const newPost = data.map((post, index) => ({
            ...post,
            name: `Пост ${index + 1}`,
            likes: index + 1
        }))
        dispatch(dataAC(newPost))
    } catch (e) {
        console.log(e.message)
    }
}

export const getSinglePostApi = (id) => async dispatch => {

    try {
        const {data} = await $host(`/posts/${id}`)
        dispatch(singlePostDataAC(data))
    } catch (e) {
        console.log(e.message)
    }
}