import React,{useEffect} from 'react'
import 'materialize-css/dist/css/materialize.min.css'
import M from 'materialize-css/dist/js/materialize.min.js'
import SearchBar from './components/SearchBar'
import Logs from './components/logs/Logs'
import Addbtn from './components/Addbtn'
import AddLogModal from './components/logs/AddLogModal'
import EditLogModal from './components/logs/EditLogModal'
import TechModal from './components/techs/TechModal'
import AddTechModal from './components/techs/AddTechModal'
import { Provider } from 'react-redux'
import store from './store'
import './App.css'

function App() {
  useEffect(() => {
    M.AutoInit();
  });
  return (
    <Provider store={store}>
    <div className="App">
      <SearchBar />
      <div className="container">
        <Addbtn />
        <AddLogModal />
        <EditLogModal />
        <TechModal />
        <AddTechModal />
        <Logs />
        
      </div>
    </div>
    </Provider>
  );
}

export default App;
