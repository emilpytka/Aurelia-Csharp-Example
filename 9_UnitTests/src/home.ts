/// <reference path="typings/linq.d.ts" />

import { PostsRepo } from './logic/postsRepo';
import { inject, singleton } from 'aurelia-framework';
import Enumerable from 'linq';

@inject(PostsRepo)
export class Home {

  public posts: Array<Post>;
  public postsRepo: IPostsRepo;
  public message: string;

    constructor(postsRepo : IPostsRepo) {
        this.posts = [];
        this.postsRepo = postsRepo;
    }

    activate() {
        this.message = null;
        this.posts = this.postsRepo.getItems();
    }

    addNewPost() {
        this.posts.push({ isNew: true });
    }

    clearList() {
        this.postsRepo.removeAll();
        this.posts = this.postsRepo.getItems();
    }

    cancelPost(post) {
        var newPost: Post = Enumerable.from(this.posts).singleOrDefault((p) => p.isNew == true);

        //var editedPost = this.posts.where(() => 
        if (newPost == null || (newPost.title == null && newPost.content == null) ||
            confirm('Do you want to remove this post?')) {
            this.posts.pop();
        }
    }
    
    savePost(post) {
        try {
            post.isNew = false;
            this.postsRepo.addItem(post);
            this.posts = this.postsRepo.getItems();
            this.message = "Post saved";
        }
        catch (e) {
            post.isNew = true;
            this.message = e;
        }
    }
}
