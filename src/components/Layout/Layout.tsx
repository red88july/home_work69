import React from 'react';
import Navbar from '../Navbar/Navbar';
import SearchShows from '../SearchShows/SearchShows';

const Layout:React.FC<React.PropsWithChildren> = ({children}) => {
  return (
    <>
      <header>
        <Navbar/>
      </header>
      <main>
        <SearchShows/>
        {children}
      </main>
    </>
  );
};

export default Layout;

