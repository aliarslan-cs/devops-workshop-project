import React from 'react';
function FormAddName(Component) {
  return (
    <div className="row">
    <form className="form-inline">
      <div className="form-group mx-sm-3 mb-2">
        <label htmlFor="inputName" className="sr-only">Full Name</label>
        <input type="text" className="form-control" id="inputName" placeholder="Full Name" />
      </div>
      <div className="form-group mx-sm-3 mb-2">
        <label htmlFor="inputNick" className="sr-only">Nickname</label>
        <input type="text" className="form-control" id="inputNick" placeholder="Nickname" />
      </div>
      <button type="submit" className="btn btn-info mb-2">Add Nickname</button>
    </form>
    <br />
  </div>
  );
}
export default FormAddName;