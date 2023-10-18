import React, { useEffect } from 'react';
import './App.css';
import TopNav from './components/Navbar/Navbar';
import DashView from './components/Playground/Playground';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllData } from './Action';

const App = () => {
  const dispatch = useDispatch();
  const { allTickets } = useSelector((state) => state.DataReducer);

  useEffect(() => {
    dispatch(fetchAllData());
  }, [dispatch]);

  return allTickets ? (
    <div style={{ }}>
      <TopNav />
      <div>
        <hr style={{ marginTop: '0px', position : 'relative', boxShadow : '0px 2px 4px rgba(0, 0, 0, 0.2)' }} />
      </div>
      <br />
      <DashView />
    </div>
  ) : null;
};

export default App;

