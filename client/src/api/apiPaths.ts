export const apiPaths = {
  posts: {
    list: () => "/posts",
    create: () => "/posts",
    update: (id: number) => `/posts/${id}`,
    delete: (id: number) => `/posts/${id}`,
  },
}