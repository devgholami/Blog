import PostModel from "../Models/PostModel";

export default function TableOfContents(props:{post:PostModel}){
    const titles = [{id:1,parent:0,text:props.post.title}];
    var list = props.post.text.match(/<h[1-6].*?>(.*?)<\/h[1-6]>/g);
    list?.forEach((item,index,arr) => {
        titles.push({id:index+2,parent:0,text:item.replace(/<h[1-6]>|<\/h[1-6]>/g,"")});
    });
    return <ul>
        {titles.map((item)=>{
            return <li key={item.id}>{item.text}</li>
        })}
    </ul>
}