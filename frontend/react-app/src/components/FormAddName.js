import React, { useState } from 'react';
import axios from "axios";

function FormAddName(props) {
  const [name, setName] = useState('');
  const [nick, setNick] = useState('');
  const [loading, setLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [data, setData] = useState(null);

  const handleSubmit = () => {
    setLoading(true);
    setIsError(false);
    const data = {
      Name: name,
      Nickname: nick
    }
    axios.post('http://192.168.188.40:8080/insert', data).then(res => {
      setData(res.data);
      setName('');
      setNick('');
      setLoading(false);
      props.rerenderParentCallback();
    }).catch(err => {
      setLoading(false);
      setIsError(true);
    });
  }

  return (
    <div className="row">
      <form className="form-inline">
        <div className="form-group mx-sm-3 mb-2">
          <label htmlFor="name" className="sr-only">Full Name</label>
          <input
            id="name"
            value={name}
            type="text"
            className="form-control"
            placeholder="Full Name"
            onChange={e => setName(e.target.value)} />
        </div>
        <div className="form-group mx-sm-3 mb-2">
          <label htmlFor="nick" className="sr-only">Nickname</label>
          <input
            id="nick"
            value={nick}
            type="text"
            className="form-control"
            placeholder="Nick Name"
            onChange={e => setNick(e.target.value)} />
        </div>
        {isError && <small className="mt-3 d-inline-block text-danger">Something went wrong. Please try again later.</small>}
        <button
          type="submit"
          className="btn btn-info mb-2"
          onClick={handleSubmit}
          disabled={loading}>
            {loading ? 'Loading...' : 'Add Nickname'}
        </button>
        {data && <div className="mt-3">
          <strong>Output:</strong><br />
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
        }
      </form>
      <br />
    </div>
  );
}
export default FormAddName;