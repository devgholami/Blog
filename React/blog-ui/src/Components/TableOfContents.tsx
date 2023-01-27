import "./TableOfContent.css";
import useHeadingsData from "../Hooks/useHeadingsData";
import Headings from "./Heading";
import useHeadsObserver from "../Hooks/useHeadsObserver";
import PostModel from "../Models/PostModel";

export default function TableOfContents(props:{root:string,loaded:boolean}) {
    const { HeadingsData } = useHeadingsData(props.root,props.loaded);
    
    const {activeId} = useHeadsObserver(props.loaded); 
  
    return (
      <nav aria-label="Table of contents">
        <strong>Table of contents</strong>
        <Headings headings={HeadingsData} activeId={activeId} />
      </nav>
    );
}
