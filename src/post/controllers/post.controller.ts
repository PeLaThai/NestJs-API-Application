import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreatePostDto, UpdatePostDto } from '../dto/post.dto';
import { PostService } from '../services/post.service';

@Controller('post')
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Get()
  getAllPost() {
    return this.postService.getAllPost();
  }

  @Get(':id')
  getPostbyId(@Param('id') id: string) {
    return this.postService.getPostById(id);
  }

  @Post()
  async createPost(@Body() post: CreatePostDto) {
    return await this.postService.createPost(post);
  }

  @Put(':id')
  async updatePost(@Param('id') id: string, @Body() post: UpdatePostDto) {
    return await this.postService.updatePost(id, post);
  }

  @Delete(':id')
  async deletePost(@Param('id') id: string) {
    await this.postService.deletePost(id);
    return true;
  }
}
