class PostList {
  constructor(public data: PostListItem[],public totalCount:number){
  }
};
class PostListItem {
  constructor(public id: number,public title: string,public createdDate: Date){
  }
};
export default PostList;
