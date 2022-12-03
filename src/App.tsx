import React from 'react';
import NavBar from "./components/NavBar/NavBar";
import {Route, Routes} from "react-router-dom";
import Quotes from "./containers/Quotes/Quotes";
import NewQuote from "./containers/NewQuote/NewQuote";
import {Category} from "./types";
import EditQuote from "./containers/EditQuote/EditQuote";

function App() {

  const categories: Category[] = [
    {title: 'Star Wars', id: 'star-wars'},
    {title: 'Famous people', id: 'famous-people'},
    {title: 'Saying', id: 'saying'},
    {title: 'Humour', id: 'humour'},
    {title: 'Motivational', id: 'motivational'},
  ];

  return (
    <>
      <header>
        <NavBar/>
      </header>
      <main className="container-fluid">
        <Routes>
          <Route path={'/'} element={(
            <Quotes categories={categories}/>
          )}>
            <Route path={'/quotes'} element={(
              <Quotes categories={categories}/>
            )}/>
            <Route path={'/quotes/:categories'} element={(
              <Quotes/>
            )}/>
          </Route>
          <Route path={'add-quote'} element={(
            <NewQuote categories={categories}/>
          )}/>
          <Route path={'/quotes/:id/edit'} element={(
            <EditQuote/>
          )}/>

        </Routes>
      </main>
    </>
  );
}

export default App;
