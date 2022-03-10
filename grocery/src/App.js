import React from "react";
import Header from "./layouts/Header";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Japanese from "./pages/Japanese";
import JapaneseDetail from "./pages/JapaneseDetail";
import French from "./pages/French";
import FrenchDetail from "./pages/FrenchDetail";
import Main from "./layouts/Main";
import Italian from "./pages/Italian";
import ItalianDetail from "./pages/ItalianDetail";
import Footer from "./layouts/Footer";
import Form from "./pages/Form";
import "./App.css";
import Spanish from "./pages/Spanish";

function App() {
  return (
    <div className="Wrapper">
      <Header />
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/Japanese" component={Japanese} />
          <Route exact path="/Japanese/:id" component={JapaneseDetail} />
          <Route exact path="/French" component={French} />
          <Route exact path="/French/:id" component={FrenchDetail} />
          <Route exact path="/Italian" component={Italian} />
          <Route exact path="/Italian/:id" component={ItalianDetail} />
          <Route exact path="/Spanish" component={Spanish} />
          <Route exact path="/Form" component={Form} />
        </Switch>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
