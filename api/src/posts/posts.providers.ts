import { Post } from "./db/post";


export const postsProviders = [
  {
    provide: 'POSTS_REPOSITORY',
    useValue: Post,
  },
];