import PropTypes from 'prop-types'; // Import PropTypes
import { useState } from 'react';
import './ConfigurationForm.css';

function ConfigurationForm({ onSubmit, onStop }) {
  const [config, setConfig] = useState({
    totalTickets: '',
    ticketReleaseRate: '',
    customerRetrievalRate: '',
    maxTicketCapacity: '',
    numberOfVendors: 1,
    numberOfCustomers: 1,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setConfig((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(config);
  };

  const adjustCount = (field, increment) => {
    setConfig((prev) => ({
      ...prev,
      [field]: Math.max(1, prev[field] + increment),
    }));
  };

  return (
    <div className="config-container">
      <form className="config-form" onSubmit={handleSubmit}>
        <h2>System Configuration</h2>
        <div className="form-group">
          <label htmlFor="totalTickets">Total Number of Tickets:</label>
          <input
            type="number"
            id="totalTickets"
            name="totalTickets"
            value={config.totalTickets}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="ticketReleaseRate">Ticket Release Rate (tickets per second):</label>
          <input
            type="number"
            id="ticketReleaseRate"
            name="ticketReleaseRate"
            value={config.ticketReleaseRate}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="customerRetrievalRate">Customer Retrieval Rate (tickets per second):</label>
          <input
            type="number"
            id="customerRetrievalRate"
            name="customerRetrievalRate"
            value={config.customerRetrievalRate}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="maxTicketCapacity">Maximum Ticket Capacity:</label>
          <input
            type="number"
            id="maxTicketCapacity"
            name="maxTicketCapacity"
            value={config.maxTicketCapacity}
            onChange={handleChange}
            required
          />
        </div>

        <div className="slider-container">
            <div className="slider-box">
                <label>Vendors</label>
                <div className="slider-control">
                <button
                    type="button"
                    onClick={() => adjustCount('numberOfVendors', -1)}
                >
                    -
                </button>
                <span>{config.numberOfVendors}</span>
                <button
                    type="button"
                    onClick={() => adjustCount('numberOfVendors', 1)}
                >
                    +
                </button>
                </div>
            </div>

        <div className="slider-box">
            <label>Customers</label>
            <div className="slider-control">
            <button
                type="button"
                onClick={() => adjustCount('numberOfCustomers', -1)}
            >
                -
            </button>
            <span>{config.numberOfCustomers}</span>
            <button
                type="button"
                onClick={() => adjustCount('numberOfCustomers', 1)}
            >
                +
            </button>
            </div>
        </div>
        </div>

        <div className="btn-container">
          <button type="submit" className="btn-submit">
            Submit
          </button>
          <button type="button" className="btn-stop" onClick={onStop}>
            Stop
          </button>
        </div>
      </form>
    </div>
  );
}

// Add PropTypes validation
ConfigurationForm.propTypes = {
  onSubmit: PropTypes.func.isRequired, // Validate onSubmit as a required function
  onStop: PropTypes.func.isRequired,   // Validate onStop as a required function
};

export default ConfigurationForm;
