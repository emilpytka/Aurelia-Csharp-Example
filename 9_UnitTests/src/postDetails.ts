/// <reference path="./typings/aurelia/aurelia-framework.d.ts"/>

import { PostsRepo} from './logic/postsRepo';
import { inject } from 'aurelia-framework';

@inject(PostsRepo)
export class PostDetails{

    private postsRepo: PostsRepo;
    private post: Post;

    constructor(postsRepo: PostsRepo){
      this.postsRepo = postsRepo;
    }

    activate(params){
        var postId = params.postId;
        if (postId == null)
          return;

        this.post = this.postsRepo.getItem(postId);
    }
}
