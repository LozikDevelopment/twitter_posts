import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post } from '@nestjs/common';
import { PostDto } from './dto/post.dto';
import { PostsService } from './posts.service';
import { Post as PostModel} from './db/post';

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Get()
  @HttpCode(HttpStatus.OK)
  getAll(): Promise<PostModel[]> {
    return this.postsService.getAll();
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() postBody: PostDto): Promise<PostModel> {
    return this.postsService.create(postBody);
  }

  @Patch(':id')
  update(
    @Param('id') id: number,
    @Body() postBody: PostDto,
  ) {
    return this.postsService.update(id, postBody);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  remove(@Param('id') id: number) {
    return this.postsService.remove(id);
  }
}