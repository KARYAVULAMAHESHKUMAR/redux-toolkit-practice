
import './App.css';
import CounterControlls from './components/others/CounterControlls';
import CounterDisplay from './components/others/CounterDisplay';
import AddUserForm from './components/users/AddUserForm';
import UsersList from './components/users/UsersList';
function App() {
  return (
    <div className="App">
      {/* <CounterControlls/>
      <CounterDisplay/> */}
      <AddUserForm/>
      <UsersList/>
    </div>
  );
}

export default App;
