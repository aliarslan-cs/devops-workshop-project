import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import List from './components/List';
import withListLoading from './components/withListLoading';

function App() {
  const ListLoading = withListLoading(List);
  const [appState, setAppState] = useState({
    loading: false,
    people: null,
  });

  useEffect(() => {
    setAppState({ loading: true });
    const apiUrl = `http://192.168.188.40:8080/people`;
    axios.get(apiUrl).then((resp) => {
      const allPeople = resp.data;
      setAppState({ loading: false, people: allPeople });
    });
  }, [setAppState]);
  return (
    <div className='App'>
      <div className='container'>
        <h1>My Placeholder</h1>
      </div>
      <div className='repo-container'>
        <ListLoading isLoading={appState.loading} people={appState.people} />
      </div>
      <footer>
        <div className='footer'>
          Built{' '}
          <span role='img' aria-label='love'>
            💚
          </span>{' '}
          with by Shedrack Akintayo
        </div>
      </footer>
    </div>
  );
}

export default App;
