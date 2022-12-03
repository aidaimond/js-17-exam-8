import React, {useState} from 'react';

const QuoteForm = () => {

  const [quoteForm, setQuoteForm] = useState({
    author: '',
    description: '',
  });

  const quoteFormChanged = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const {name, value} = e.target;

    setQuoteForm(prev => ({...prev, [name]: value}));
  };

  const onFormSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={onFormSubmit}>
      <div className="form-group">
        <label htmlFor="title">Title</label>
        <select>
          <option>
            All
          </option>
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="author">Title</label>
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
        type="submit" className="btn btn-primary my-4"
      >
        Save
      </button>
    </form>
  );
};

export default QuoteForm;