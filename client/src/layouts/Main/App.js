import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import SignIn from "../../pages/SignIn/SignIn";
import SignUp from "../../pages/SignUp/Signup";
import Welcome from "../../components/Welcome/Welcome";

// components
import Header from "../Header/Header";

function App() {
  const [user, setUser] = useState(null);

  const api = "/me";

  useEffect(() => {
    fetch(api).then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  return (
    <div className="container">
      <Header user={user} setUser={setUser} />
      <main>
        {user ? (
          <Switch>
            <Route path="/">
              <Welcome user={user} />
            </Route>
          </Switch>
        ) : (
          <Switch>
            <Route path="/signup">
              <SignUp setUser={setUser} />
            </Route>
            <Route path="/signin">
              <SignIn setUser={setUser} />
            </Route>
            <Route path="/">
              <Welcome />
            </Route>
          </Switch>
        )}
      </main>
    </div>
  );
}

export default App;
