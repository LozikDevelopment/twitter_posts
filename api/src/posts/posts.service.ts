import { Inject, Injectable } from '@nestjs/common';
import { PostDto  } from './dto/post.dto';
import { Post } from './db/post';

@Injectable()
export class PostsService {
  constructor(
    @Inject('POSTS_REPOSITORY')
    private postsRepository: typeof Post
  ) {}

  async getAll(): Promise<Post[]> {
    return await this.postsRepository.findAll({
      order: ['id'],
    });
  }

  async create(post: Omit<PostDto, 'id'>): Promise<Post>{
    return await this.postsRepository.create(post);
  }

  async remove(id: number) {
  return this.postsRepository.destroy({
      where: { id }
    });
  }

  async update(id: number, postBody: Partial<PostDto>) {
    const result = await this.postsRepository.update(postBody, {
      where: { id },
      returning: true,
    });

    return result;
  }
}
