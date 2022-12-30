// type PostModel = {
//   Id: number;
//   Title: string;
//   Text: string;
//   CreatedDate: Date;
// };
class PostModel {
  constructor(public id: number,public title: string,public text: string,public createdDate: Date){
  }
};
export default PostModel;
