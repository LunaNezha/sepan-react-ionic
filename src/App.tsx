import "./global.css";
import { setupIonicReact } from "@ionic/react";
import { Suspense } from "react";
import AppLoading from "@pages/AppLoading";
import MainRouter from "@routes/MainRouter";

setupIonicReact({
  mode: "ios",
});

const App: React.FC = () => {
  return (
    <Suspense fallback={<AppLoading />}>
      <MainRouter />
    </Suspense>
  );
};

export default App;
