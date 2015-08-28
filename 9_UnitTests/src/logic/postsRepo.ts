/// <reference path="../typings/mytypings/post.d.ts"/>
/// <reference path="../typings/linq.d.ts"/>
/// <reference path="../typings/mytypings/ipostsrepo.d.ts"/>

import Enumerable from 'linq';

export class PostsRepo implements IPostsRepo{

  getItems() : Array<Post>{
		if(typeof(Storage) !== "undefined") {
			var storagePost = localStorage.getItem("posts");
			if(storagePost == null || storagePost == undefined || storagePost.length == 0)
				return [];

			var posts = JSON.parse(storagePost);
			return posts || [];
		}
	}

	addItem(post : Post) : void{
		if(typeof(Storage) !== "undefined") {
			var posts = this.getItems();
			post.id = this.guid();
			posts.push(post);
			localStorage.setItem("posts", JSON.stringify(posts));
		}
	}

	getItem(postId : string) : Post{
		var post = Enumerable.from(this.getItems()).singleOrDefault(function(x) { return x.id == postId});
		return post;
	}

	removeAll() : void{
		localStorage.setItem("posts", JSON.stringify([]));
	}

	guid() : string{

		var S4 = function(){
			return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
		}

		return (S4() + S4() + "-" + S4() + "-4" + S4().substr(0,3) + "-" + S4() + "-" + S4() + S4() + S4()).toLowerCase();
	}
}
