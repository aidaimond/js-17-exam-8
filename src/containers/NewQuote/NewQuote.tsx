import React, {useState} from 'react';
import QuoteForm from "../../components/QuoteForm/QuoteForm";
import {Category, Quote} from "../../types";
import {useNavigate} from "react-router-dom";
import axiosApi from "../../axiosApi";
import Spinner from "../../components/Spinner/Spinner";

interface Props {
  categories: Category [];
}

const NewQuote: React.FC<Props> = ({categories}) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const addNewQuote = async (quoteForm: Quote) => {
    setLoading(true);
    try {
      await axiosApi.post<Quote>('/quotes.json', quoteForm);
      navigate('/');
    } finally {
      setLoading(false);
    }
  };

  return (
    loading ? <Spinner/> :
      <div>
        <h1 className="my-4">Submit new quote</h1>
        <QuoteForm categories={categories} onSubmit={addNewQuote}/>
      </div>
  );
};

export default NewQuote;