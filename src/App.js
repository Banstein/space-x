import { Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import Header from './componnent/Header/Header';
import Missions from './componnent/Missions/Missions';
import Rockets from './componnent/Rockets/Rockets';
import MyProfile from './componnent/MyProfile/MyProfile';
import store from './redux/configureStore';

const App = () => (
  <div className="app">
    <Header />
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<Rockets />} />
        <Route path="/Missions" element={<Missions />} />
        <Route path="/MyProfile" element={<MyProfile />} />
      </Routes>
    </Provider>
  </div>
);

export default App;
