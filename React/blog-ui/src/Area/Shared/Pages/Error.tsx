import { useRouteError } from "react-router-dom";
import "./Error.css";
export default function Error() {
  const error: any = useRouteError();
  console.error(error);

  return (
    <div className="App">
      <header>
        <div id="error-page">
          <h1>Oops!</h1>
          <p>Sorry, an unexpected error has occurred.</p>
          <h3>
            <i>{error.statusText || error.message}</i>
          </h3>
        </div>
      </header>
    </div>
  );
}
