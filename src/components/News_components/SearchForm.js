import React, {useState} from 'react';

const SearchForm = ({searchText}) => {
    const [procura, setProcura] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        searchText(procura);
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type="text"
            className='py-3 px-5 rounded-l text-black' 
            placeholder='What are you looking for?'
            onChange={(e) => setProcura(e.target.value)}
            />
            <button type='submit' 
            className='bg-black p-3 rounded-r'>
            Search
            </button>
        </form>

    </div>
  )
}

export default SearchForm;