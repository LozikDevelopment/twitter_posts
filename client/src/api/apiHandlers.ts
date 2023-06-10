import { Post } from "../types/Post";
import { apiPaths } from "./apiPaths";
import { deleteData, getData, patchData, postData } from "./crudHandlers";

export const apiHandlers = {
  posts: {
    list() {
      return getData(apiPaths.posts.list());
    },
    create(data: Partial<Post>) {
      return postData(apiPaths.posts.create(), data);
    },
    update(data: {id: number, post: Partial<Post>}) {
      return patchData(apiPaths.posts.update(data.id), data.post);
    },
    delete(id: number) {
      return deleteData(apiPaths.posts.delete(id));
    },
  },
};