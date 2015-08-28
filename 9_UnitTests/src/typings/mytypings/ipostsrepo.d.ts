interface IPostsRepo{
  getItems() : Array<Post>;
  addItem(post : Post) : void;
  getItem(postId : string) : Post;
  removeAll() : void;
}
