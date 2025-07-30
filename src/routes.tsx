
import WelcomePage from "./pages/welcome/page";
import Scene1Page from "./pages/scene1/scene1Page";
import Scene2Page from "./pages/scene2/scene2Page";
import Scene3Page from "./pages/scene3/scene3Page";
const routes: Record<string, React.ReactElement> = {
  welcome: <WelcomePage />,
  scene1: <Scene1Page />,
  scene2: <Scene2Page />,
  scene3: <Scene3Page />
};

export default routes;
