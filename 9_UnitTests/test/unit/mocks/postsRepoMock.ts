import Enumerable from 'linq'

export class PostsRepoMock implements IPostsRepo{

  public posts: Array<Post> = [];

  getItems() : Array<Post>{return this.posts;}

  addItem(post: Post): void { this.posts.push(post); }

  getItem(postId: string): Post{
    var post = Enumerable.from(this.getItems()).singleOrDefault(function(x) { return x.id == postId});
        return post;
  }

  removeAll(): void{
    this.posts = [];
  }
}
