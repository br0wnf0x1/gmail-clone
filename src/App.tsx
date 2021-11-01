import React, { useEffect } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import EmailList from "./components/Mail/EmailList";
import Mail from "./components/Mail/Mail";
import SendMail from "./components/Mail/SendMail";
import Login from "./components/Login/Login";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "./app/hooks";
import { selectSendMessageIsOpen } from "./features/mailSlice";
import { login, selectUser } from "./features/userSlice";
import { PersistGate } from "redux-persist/integration/react";
import { persistor } from "./app/store";
import { onAuthStateChanged } from "@firebase/auth";
import { auth } from "./firebase";

function App() {
  const sendMessageIsOpen = useAppSelector(selectSendMessageIsOpen);
  const user = useAppSelector(selectUser);

  // Since redux-persist is enabled, this part of code can be removed:
  // const dispatch = useAppDispatch();

  // useEffect(() => {
  //   onAuthStateChanged(auth, (user) => {
  //     if (user) {
  //       // the user is logged in
  //       dispatch(
  //         login({
  //           displayName: user.displayName,
  //           email: user.email,
  //           photoUrl: user.photoURL,
  //         })
  //       );
  //     }
  //   });
  // }, []);

  return (
    <PersistGate loading={null} persistor={persistor}>
      <Router>
        {!user ? (
          <Login />
        ) : (
          <div className="app">
            <Header />
            <div className="app__body">
              <Sidebar />

              <Switch>
                <Route path="/mail">
                  <Mail />
                </Route>
                <Route path="/">
                  <EmailList />
                </Route>
              </Switch>
            </div>

            {sendMessageIsOpen && <SendMail />}
          </div>
        )}{" "}
      </Router>
    </PersistGate>
  );
}

export default App;
