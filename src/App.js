import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import "./App.css";
import { Header, UsersPage, UserInfoPage, Footer } from "./components";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="app">
        <Switch>
          <Route path="/users" component={UsersPage} />
          <Route path="/userInfo" component={UserInfoPage} />
          <Redirect from="*" to="/users" />
        </Switch>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
