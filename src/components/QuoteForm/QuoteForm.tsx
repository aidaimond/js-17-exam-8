import React, {useState} from 'react';
import {Category, Quote} from "../../types";

interface Props {
  onSubmit: (quoteForm: Quote) => void;
  categories?: Category [];
  existingQuote?: Quote;
}

const QuoteForm: React.FC<Props> = ({onSubmit, categories, existingQuote}) => {

  const initialState = existingQuote ? existingQuote : {
    category: '',
    author: '',
    description: '',
  };

  const [quoteForm, setQuoteForm] = useState(initialState);

  const quoteFormChanged = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const {name, value} = e.target;

    setQuoteForm(prev => ({...prev, [name]: value}));
  };

  const onFormSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    onSubmit(quoteForm);
  };

  return (
    <form onSubmit={onFormSubmit}>
      <div className="form-group">
        <label htmlFor="category">Category</label>
        <select name="category" className="form-control"
                onChange={quoteFormChanged}
                value={quoteForm.category}
        >
          <option disabled value="">
            Select category
          </option>
          <option value="all">
            All
          </option>
          {categories ? categories.map(category => (
            <option
              key={category.id}
              value={category.id}>
              {
                category.title
              }
            </option>
          )): null}
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="author">Author</label>
        <input
          id="author" type="text" name="author"
          className="form-control"
          onChange={quoteFormChanged}
          value={quoteForm.author}
        />
      </div>
      <div className="form-group">
        <label htmlFor="description">Description</label>
        <textarea
          id="description" name="description"
          className="form-control"
          onChange={quoteFormChanged}
          value={quoteForm.description}
        />
      </div>
      <button
        disabled={quoteForm.author === '' || quoteForm.description === '' || quoteForm.category === ''}
        type="submit" className="btn btn-primary my-4"
      >
        Save
      </button>
    </form>
  );
};

export default QuoteForm;