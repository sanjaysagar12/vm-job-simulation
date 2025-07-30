import { usePageNavigation } from "./global/hooks/navigation";
import routes from "./routes";

function App() {
  const { currentPage } = usePageNavigation();

  const pageComponent = routes[currentPage] || <div>Page not found</div>;

  return <div>{pageComponent}</div>;
}

export default App;