import React, { useEffect, useState } from 'react';
import axios from 'axios';
// import './App.css';
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
  <div className="row">
    <ListLoading isLoading={appState.loading} people={appState.people} />
  </div>
  );
}

export default App;

// parts of code by Shedrack Akintayo