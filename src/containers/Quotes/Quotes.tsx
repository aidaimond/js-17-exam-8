import React, {useCallback, useEffect, useState} from 'react';
import QuoteCard from "../../components/QuoteCard/QuoteCard";
import {Category, Quote, QuotesList} from "../../types";
import axiosApi from "../../axiosApi";
import {Link} from "react-router-dom";
import NavLinks from "../../components/NavLinks/NavLinks";
import Spinner from "../../components/Spinner/Spinner";

interface Props {
  categories?: Category[];
}

const Quotes: React.FC<Props> = ({categories}) => {
  const [quotes, setQuotes] = useState<Quote[] | null>(null);
  const [loading, setLoading] = useState(false);

  const fetchQuotes = useCallback(async () => {
    setLoading(true);
    try {
      const quotesResponse = await axiosApi.get<QuotesList>('/quotes.json');
      let quotesList = null;
      if (quotesResponse.data !== null) {
        quotesList = Object.keys(quotesResponse.data).map(key => {
          const quote = quotesResponse.data[key];
          quote.id = key;
          return quote;
        });
      }
      setQuotes(quotesList)
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchQuotes().catch(console.error);
  }, [fetchQuotes]);

  const remove = async (quote: Quote) => {
    await axiosApi.delete('/quotes/' + quote.id + '.json');
    await fetchQuotes();
  };

  const onClickCategory = async (id: string) => {
    setLoading(true);
    try {
      if (id) {
        const quotesResponse = await axiosApi.get<QuotesList>('/quotes.json?orderBy="category"&equalTo="' + id + '"');
        let quotesList = null;
        if (quotesResponse.data !== null) {
          quotesList = Object.keys(quotesResponse.data).map(key => {
            const quote = quotesResponse.data[key];
            quote.id = key;
            return quote;
          });
        }
        setQuotes(quotesList)
      } else {
        await fetchQuotes();
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="row">
      <div className="col my-2">
        {categories &&
            <NavLinks categories={categories} onClick={onClickCategory}/>
        }
      </div>
      {loading ? <Spinner/> :
        <div className="col">
          {quotes?.length ? quotes.map((quote) => (
            <QuoteCard key={Math.random()} description={quote.description} author={quote.author}>
              <Link to={'/quotes/' + quote.id + "/edit"} className="btn btn-secondary m-2">Edit</Link>
              <button className="btn btn-secondary m-2" onClick={() => remove(quote)}>Delete</button>
            </QuoteCard>
          )) : <h1 className="col">Category is empty!</h1>}
        </div>}
    </div>
  );
};

export default Quotes;