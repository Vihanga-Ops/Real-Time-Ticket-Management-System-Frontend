# Real-Time Event Ticketing System – Frontend

A modern React + Vite frontend for the Real-Time Event Ticketing System. This UI allows users to configure, start, and monitor a multi-threaded ticketing simulation in real time.

## 🎯 Features

- **Configuration Panel**: Set ticket count, release/retrieval rates, vendors, and customers
- **Simulation Controls**: Start and stop the backend simulation
- **Real-time Logs**: View system logs and simulation status live
- **Responsive UI**: Clean, modern, and mobile-friendly design

## 🏗️ System Architecture

### Core Components

- **`ConfigurationForm`**: Collects simulation parameters from the user
- **`LogDisplay`**: Displays real-time logs and system messages
- **`App`**: Main application logic and state management

### Design Patterns Used

- **Component-based Architecture**: Modular React components for maintainability
- **Props & State Management**: React hooks for dynamic UI updates
- **REST API Integration**: Communicates with backend via HTTP requests

## 🛠️ Technical Implementation

- Built with [React 18](https://react.dev/) and [Vite](https://vitejs.dev/)
- Uses [Axios](https://axios-http.com/) for backend communication
- ESLint-configured for code quality

## 📋 Prerequisites

- Node.js v16 or higher
- npm or yarn

## 🚀 Getting Started

### Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/yourusername/real-time-ticketing-system.git
   cd real-time-ticketing-system/Frontend
   ```

2. Install dependencies:
   ```sh
   npm install
   # or
   yarn install
   ```

### Running the App

```sh
npm run dev
# or
yarn dev
```
Visit [http://localhost:5173](http://localhost:5173) in your browser.

### Building for Production

```sh
npm run build
# or
yarn build
```

### Linting

```sh
npm run lint
# or
yarn lint
```

## ⚙️ Configuration

When you start the frontend, you can set:

- **Total Tickets**
- **Ticket Release Rate**
- **Customer Retrieval Rate**
- **Max Ticket Capacity**
- **Number of Vendors**
- **Number of Customers**

The frontend communicates with a backend server at `http://localhost:8080`.

## 📁 File Structure

```
Frontend/
├── public/
├── src/
│   ├── App.jsx
│   ├── components/
│   │   ├── ConfigurationForm.jsx
│   │   └── LogDisplay.jsx
│   └── ...
├── package.json
├── vite.config.js
└── README.md
```

## 🔄 System Flow

1. **User Configures Simulation**: Fill out the form and submit
2. **Start/Stop Simulation**: Control simulation lifecycle
3. **Monitor Logs**: Watch real-time updates as the simulation runs

## 🧪 Testing Scenarios

- **High Demand**: Many customers, few vendors
- **Limited Capacity**: Small ticket pool
- **Balanced Load**: Equal vendor and customer rates

## 🐛 Troubleshooting

- **Backend not running**: Ensure the backend server is available at `http://localhost:8080`
- **CORS issues**: Configure backend to allow requests from the frontend origin

## 🔮 Future Enhancements

- [ ] WebSocket-based real-time log streaming
- [ ] User authentication
- [ ] Advanced analytics dashboard

## 📄 License

This project is licensed under the MIT License – see the [LICENSE](../LICENSE) file for details.

## 👨‍💻 Author

Author Name: Vihanga Disal Pathirana 
GitHub: Vihanga-Ops 
Email: vihangadisal07@gmail.com

---

⭐ If you found this project helpful, please give it a