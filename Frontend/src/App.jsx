import { useState } from 'react';
import axios from 'axios';
import './App.css';
import ConfigurationForm from './components/ConfigurationForm';
// import ControlPanel from './components/ControlPanel';
import LogDisplay from './components/LogDisplay';

function App() {
  const [logs, setLogs] = useState([]);

  const addLog = (message) => {
    setLogs((prevLogs) => [...prevLogs, message]);
  };

  const handleStart = (config) => {
    addLog('Starting simulation with configuration: ' + JSON.stringify(config));
    
    axios
      .post('http://localhost:8080/ticketing/start', config)
      .then((response) => {
        // Using response.data if you need to process or display it
        addLog('Simulation started successfully. Server response: ' + JSON.stringify(response.data));
      })
      .catch((error) => {
        addLog('Failed to start simulation: ' + error.message);
      });
  };

  const handleStop = () => {
    addLog('Stopping simulation.');
    
    axios
      .post('http://localhost:8080/ticketing/stop')
      .then((response) => {
        addLog('Simulation stopped successfully. Server response: ' + JSON.stringify(response.data));
      })
      .catch((error) => {
        addLog('Failed to stop simulation: ' + error.message);
      });
  };

  return (
    <div>
      <h1>Event Ticketing System</h1>
      <ConfigurationForm onSubmit={handleStart} onStop={handleStop} />
      <LogDisplay logs={logs} />
    </div>
  );
}

export default App;
