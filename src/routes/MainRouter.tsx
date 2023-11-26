import { PathNames } from "@constants/pathnames.const";
import { IonApp } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { lazy } from "react";
import { Route, Switch } from "react-router-dom";
import MainLayout from "@layouts/MainLayout";
import NotFound from "@pages/NotFound";
import AuthRoutes from "./AuthRoutes";

const Home = lazy(() => import("@pages/Home"));
const PrescriptionTracking = lazy(() => import("@pages/PrescriptionTracking"));

const MainRouter = () => {
  return (
    <IonApp>
      <IonReactRouter>
        <Switch>
          {/* home */}
          <Route
            path={PathNames.Home}
            exact
            render={() => (
              <MainLayout>
                <Home />
              </MainLayout>
            )}
          />

          {/* prescription tracking */}
          <Route
            path={PathNames.PrescriptionTracking}
            exact
            render={() => (
              <MainLayout>
                <PrescriptionTracking />
              </MainLayout>
            )}
          />

          {/* auth routes */}
          <AuthRoutes />

          {/* not found - 404 */}
          <Route path={PathNames.NotFound} render={() => <NotFound />} />
        </Switch>
      </IonReactRouter>
    </IonApp>
  );
};

export default MainRouter;
