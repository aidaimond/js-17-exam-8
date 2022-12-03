import React, {useCallback, useEffect, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import {Quote} from "../../types";
import axiosApi from "../../axiosApi";
import QuoteForm from "../../components/QuoteForm/QuoteForm";
import Spinner from "../../components/Spinner/Spinner";

const EditQuote = () => {
  const {id} = useParams();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [quote, setQuote] = useState<Quote | null>(null);

  const fetchQuote = useCallback(async () => {
    setLoading(true);
    try {
      const quoteResponse = await axiosApi.get<Quote>('/quotes/' + id + '.json');
      setQuote(quoteResponse.data);
    } finally {
      setLoading(false);
    }
  }, [id]);

  useEffect(() => {
    fetchQuote().catch(console.error);
  }, [fetchQuote]);

  const updateQuote = async (quote: Quote) => {
    setLoading(true);
    try {
      await axiosApi.put('/quotes/' + id + '.json', quote);
      navigate('/');
    } finally {
      setLoading(false);
    }
  }

  return (
    loading ? <Spinner/> :
      <>
        <h1 className="my-4">Edit a quote</h1>
        {quote &&
            <QuoteForm onSubmit={updateQuote} existingQuote={quote}/>}
      </>
  );
};

export default EditQuote;