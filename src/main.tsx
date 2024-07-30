import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import TodosContextProvider from "./contexts/TodosContextProvider.tsx";
import { KindeProvider } from "@kinde-oss/kinde-auth-react";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <KindeProvider
      clientId={import.meta.env.VITE_KINDE_CLIENTID}
      domain={import.meta.env.VITE_KINDE_DOMAIN!}
      redirectUri={import.meta.env.VITE_KINDE_REDIRECT_URI!}
      logoutUri={import.meta.env.VITE_KINDE_LOGOUT_URI}
    >
      <TodosContextProvider>
        <App />
      </TodosContextProvider>
    </KindeProvider>
  </React.StrictMode>
);
