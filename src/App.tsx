import React from 'react';
import NavBar from "./components/NavBar/NavBar";
import {Route, Routes} from "react-router-dom";
import Quotes from "./containers/Quotes/Quotes";
import NewQuote from "./containers/NewQuote/NewQuote";

function App() {
  return (
    <>
      <header>
        <NavBar/>
      </header>
      <main className="container-fluid">
        <Routes>
          <Route path={'/'} element={(
            <Quotes/>
          )}/>
          <Route path={'add-quote'} element={(
            <NewQuote/>
          )}/>
        </Routes>
      </main>
    </>
  );
}

export default App;
