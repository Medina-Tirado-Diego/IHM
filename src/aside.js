import React, { useEffect } from 'react';
import feather from 'feather-icons';

const Aside = () => {
  useEffect(() => {
    // Reemplazar todos los íconos de feather
    feather.replace();
  }, []);

  return (
    <aside>
      <form>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            <i data-feather="mail"></i> Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            <i data-feather="lock"></i> Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <div className="mb-3 form-check">
          <input type="checkbox" className="form-check-input" id="exampleCheck1" />
          <label className="form-check-label" htmlFor="exampleCheck1">
            <i data-feather="check-square"></i> Check me out
          </label>
        </div>
        <button type="submit" className="btn btn-primary">
          <i data-feather="send"></i> Submit
        </button>
      </form>
    </aside>
  );
};

export default Aside;
