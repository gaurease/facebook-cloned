import './App.css';
import Feed from './Feed';
import Header from './Header';
import Login from './Login';
import Sidebar from './Sidebar';
import { useStateValue } from './StateProvider';
import Widget from './Widget';
function App() {
  const [{user},dispatch]=useStateValue()
  return (
    <div className="app">
      {user?
      (
      <>
      <Header></Header>
      <div className='app__body'>
          <Sidebar></Sidebar>
          <Feed></Feed>
          <Widget></Widget>
      </div>
      </>
      ):(<Login></Login>)
      }
    </div>
  );
}

export default App;
