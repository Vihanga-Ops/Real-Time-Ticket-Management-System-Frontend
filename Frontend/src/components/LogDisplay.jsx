import { useState } from "react";
import "./LogDisplay.css";

function LogDisplay() {
  const [logs, setLogs] = useState([]);

  // Function to add a log
  const addLog = (logMessage) => {
    const timestamp = new Date().toLocaleString();
    setLogs((prevLogs) => [
      ...prevLogs,
      `[${timestamp}] ${logMessage}`,
    ]);
  };

  // Example log triggers (this could be replaced with real events)
  const handleAddSampleLog = () => {
    addLog("Sample log entry added.");
  };

  const handleClearLogs = () => {
    setLogs([]);
  };

  return (
    <div className="log-display-container">
      <h2>System Logs</h2>
      <div className="log-box">
        {logs.length > 0 ? (
          logs.map((log, index) => (
            <div key={index} className="log-entry">
              {log}
            </div>
          ))
        ) : (
          <p className="no-logs">No logs to display.</p>
        )}
      </div>
      <div className="log-controls">
        <button onClick={handleAddSampleLog}>Add Sample Log</button>
        <button onClick={handleClearLogs}>Clear Logs</button>
      </div>
    </div>
  );
}

export default LogDisplay;
