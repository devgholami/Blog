import TableOfContent from "../Models/TableOfContent";
export default function Headings(props: { headings: TableOfContent[],activeId:string }) {
  return (
    <ul>
      {props.headings.map((heading) => (
        <li key={heading.id} className={"head" + heading.level}>
          <a
            href={`#${heading.id}`}
            onClick={(e) => {
              e.preventDefault();
              var d = document.querySelector(`#${heading.id}`) as HTMLElement;
              d.scrollIntoView({
                behavior: "smooth",
              });
            }}
            style={{
              color: props.activeId === heading.id ? "var(--lgreen)" : "",
            }}
          >
            {heading.title}
          </a>
        </li>
      ))}
    </ul>
  );
}
