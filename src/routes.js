import DescriptionPage from "./components/descriptionPage";
import WelcomePage from "./components/welcomePage";

const routes = [
    { path: '/', element: <WelcomePage /> },
    { path: '/info', element: <DescriptionPage /> },
  ];
  export default routes;