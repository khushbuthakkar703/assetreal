import React from "react";
import { AppContainer } from "../containers/AppContainer";
// import { AuthContainer } from '../containers/AuthContainer';
import { RouterView } from "../views/RouterView";
import { ToastContainer, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Provider } from "react-redux";
import { store, persistor } from "../../redux/store";

import { PersistGate } from "redux-persist/integration/react";

export const App: React.VFC = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {/* <AuthContainer> */}
        <AppContainer>
          <RouterView />
          <ToastContainer
            closeOnClick
            hideProgressBar={false}
            position="bottom-center"
            transition={Slide}
            limit={1}
            pauseOnHover
            newestOnTop
          />
        </AppContainer>
        {/* </AuthContainer> */}
      </PersistGate>
    </Provider>
  );
};
