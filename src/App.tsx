import Layout from './components/Layout/Layout';
import {Route, Routes} from 'react-router-dom';
import InfoShows from './components/InfoShows/InfoShows';

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/shows/:id" element={<InfoShows/>}/>
        </Routes>
      </Layout>

    </>
  );
}

export default App;
