import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRandomGreeting } from '../store/greetings/greetingSlice';

const Greetings = () => {
  const dispatch = useDispatch();
  const { greeting, error, loading } = useSelector((state) => state.greetings);

  useEffect(() => {
    dispatch(fetchRandomGreeting());
  }, []);

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6 border border-dark p-4" >
          {loading && <p>Loading...</p>}
          {error && <p className="text-danger">Error: {error}</p>}
          {greeting && <p className="text-dark">Greeting: {greeting}</p>}
        </div>
      </div>
    </div>
  );
};

export default Greetings;
