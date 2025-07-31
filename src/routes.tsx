
import WelcomePage from "./pages/welcome/page";
import Scene1Page from "./pages/scene1/scene1Page";
import Scene2Page from "./pages/scene2/scene2Page";
import Scene3Page from "./pages/scene3/scene3Page";
import Scene4Page from "./pages/scene4/scene4Page";
import Scene5Page from "./pages/scene5/scene5Page";
import Scene6Page from "./pages/scene6/scene6Page";
import Scene7Page from "./pages/scene7/scene7Page";
import Scene8Page from "./pages/scene8/scene8Page";

const routes: Record<string, React.ReactElement> = {
  welcome: <WelcomePage />,
  scene1: <Scene1Page />,
  scene2: <Scene2Page />,
  scene3: <Scene3Page />,
  scene4: <Scene4Page />,
  scene5: <Scene5Page />,
  scene6: <Scene6Page />,
  scene7: <Scene7Page />,
  scene8: <Scene8Page />
};

export default routes;
