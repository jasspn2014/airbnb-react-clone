import "./App.css";
import { Route, Switch } from "react-router-dom";

import Header from "./components/header/Header";
import HomePage from "./components/homepage/HomePage";
import SearchPage from "./components/searchpage/SearchPage";
import Footer from "./components/footer/Footer";


function App() {
  return (
    <div className="App">
      <Header />

      <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route exact path="/search" component={SearchPage}/>
      </Switch>

      <Footer />
    </div>
  );
}

export default App;
