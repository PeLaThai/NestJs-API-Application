import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PostRepository } from '../repository/post.repository';
import { CreatePostDto, UpdatePostDto } from '../dto/post.dto';

@Injectable()
export class PostService {
  constructor(private readonly postRepository: PostRepository) {}

  async getAllPost() {
    return this.postRepository.getByCondition({});
  }

  async getPostById(id: string) {
    const post = await this.postRepository.findById(id);
    if (post) {
      return post;
    }
    throw new HttpException('Post not found', HttpStatus.NOT_FOUND);
  }

  async updatePost(id: string, payload: UpdatePostDto) {
    return await this.postRepository.findByIdAndUpdate(id, payload);
  }

  async createPost(post: CreatePostDto) {
    return await this.postRepository.create(post);
  }

  async deletePost(id: string) {
    return await this.postRepository.deleteOne(id);
  }
}
