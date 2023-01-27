import {useState , useEffect} from "react";
import TableOfContent from "../Models/TableOfContent";
export default function useHeadingsData(root:string,loaded:boolean) {
    const [HeadingsData, setHeadings] = useState([new TableOfContent("","",0)]);
  
    useEffect(() => {
      const rootElement = document.querySelector(root) as HTMLElement;
      const elements = Array.from(rootElement.querySelectorAll("h1,h2,h3,h4,h5,h6"))
        .map((elem:any) => ({
          id: elem.id,
          title: elem.innerText,
          level: Number(elem.nodeName.charAt(1))
        }))
      setHeadings(elements)
    }, [loaded])
  
    return { HeadingsData };
  };
