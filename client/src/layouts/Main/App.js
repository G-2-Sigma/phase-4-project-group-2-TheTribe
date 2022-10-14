import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import SignIn from "../../pages/SignIn/SignIn";
import SignUp from "../../pages/SignUp/Signup";
import Welcome from "../../components/Welcome/Welcome";

// components
import Header from "../Header/Header";
import Profile from "../../pages/Profile/Profile";
import Post from "../../pages/Post/Post";

function App() {
  const [user, setUser] = useState(null);
  const [post, setPost] = useState([]);

  const api = "/me";

  useEffect(() => {
    fetch(api).then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  const ap2 = "/posts";

  useEffect(() => {
    fetch(ap2).then((r) => {
      if (r.ok) {
        r.json().then((post) => setPost(post));
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
            <Route path="/profile">
              <Profile />
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
            <Route path="/profile">
              <Profile />
            </Route>
          </Switch>
        )}
      </main>

      <Post post={post} />
     
    </div>
  );
}

export default App;
