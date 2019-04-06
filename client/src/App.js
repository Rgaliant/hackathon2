import React from "react";
import Home from "./components/Home";
import NoMatch from "./components/NoMatch";
import Navbar from "./components/Navbar";
import VideosShow from "./components/VideosShow";
import Login from "./components/Login";
import Register from "./components/Register";
import FetchUser from "./components/FetchUser";
import ProtectedRoute from "./components/ProtectedRoute";
import VideoForm from "./components/VideoForm";
import { Switch, Route } from "react-router-dom";
import { Container } from "semantic-ui-react";

const App = () => (
  <>
    <Navbar />
    <FetchUser>
<<<<<<< Updated upstream
      <Container>
        <Switch>
          <ProtectedRoute exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/videos/:id" component={VideosShow} />
          <Route component={NoMatch} />
        </Switch>
      </Container>
=======
      <Switch>
        <ProtectedRoute exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/videosshow" component={VideosShow} />
        <Route exact path="/NewVideo" component={VideoForm} />
        <Route component={NoMatch} />
      </Switch>
>>>>>>> Stashed changes
    </FetchUser>
  </>
);

export default App;
