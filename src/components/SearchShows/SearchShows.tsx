import * as React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getContent, getShow} from '../../containers/TVShow/thunkShow';
import {AppDispatch, RootState} from '../../app/store';
import '../../style.css';
import {useState} from 'react';
import {Link} from 'react-router-dom';

const SearchShows = () => {
  const dispatch = useDispatch<AppDispatch>();
  const valueFromServer = useSelector((state: RootState) => state.name);
  const [name, setName] = useState<string>('');
  console.log(`Fetching Data`, valueFromServer);

  const searchInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const search = event.target.value;
    if (search.length > 3) {
      alert('Input value must be 3 symbols');
    } else {
      setName(search);
      dispatch(getShow(search));
    }
  };

  return (
    <>
      <div className="d-flex gap-3 ms-5 mt-5 position-relative">
        <label htmlFor="search-form" className="form-label fw-bold mb-0 mt-2">Search for TV Show:</label>
        <input
          id="search-form"
          name="search"
          className="form-control w-25"
          value={name}
          onChange={searchInput}
          autoFocus/>
      </div>
      <div className="positions d-flex flex-column border mt-4 p-2 rounded-2 border-3">
        {valueFromServer.map((item, index) => (
          <Link
            key={index}
            to={`/shows/${item.id}`}
            onClick={() => dispatch(getContent(item.id))}>{item.name}</Link>
         ))}
      </div>
    </>
  );
};

export default SearchShows;