/// <reference path="../../src/typings/jasmine.d.ts"/>

import {Home} from '../../src/home';
import {PostsRepoMock} from './mocks/postsRepoMock';

describe("the Home module", () => {
  var home : Home, postsRepoMock : PostsRepoMock;

  beforeEach(() => {
    postsRepoMock = new PostsRepoMock();
    home = new Home(postsRepoMock);
  });

  it('activate should perform posts from repo', () => {

    postsRepoMock.posts = [
      {id: '1', title: 'First', isNew: false},
      {id: '2', title: 'Second', isNew: false}];

    home.activate();
    expect(home.posts).not.toBeNull();
    expect(home.posts.length).toBe(2);
  });

  it('addNewPost should add new post with isNew = true', () => {
    home.addNewPost();
    expect(home.posts).not.toBeNull();
    expect(home.posts.length).toBe(1);
    expect(home.posts[0]).toEqual({isNew: true});
  });

  it('clearList should remove all posts', () => {
    postsRepoMock.posts = [
      {id: '1', title: 'First', isNew: false},
      {id: '2', title: 'Second', isNew: false}];

    home.activate();

    expect(home.posts).not.toBeNull();
    expect(home.posts.length).toBe(2);

    home.clearList();

    expect(home.posts.length).toBe(0);
    expect(postsRepoMock.posts.length).toBe(0);
  });

  it('save post should add new post to repo',() => {
    var postToSave: Post = {id : '3', title: 'Post 3',content: 'Content 3',isNew: true};

    home.savePost(postToSave);
    expect(home.posts.length).toBe(1);
    expect(postsRepoMock.posts.length).toBe(1);

    expect(home.posts[0]).toEqual( {id : '3', title: 'Post 3',content: 'Content 3',isNew: false});
    expect(postsRepoMock.posts[0]).toEqual( {id : '3', title: 'Post 3',content: 'Content 3',isNew: false});
  });

});
