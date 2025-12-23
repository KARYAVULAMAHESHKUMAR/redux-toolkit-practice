
import './App.css';
import CounterControlls from './components/others/CounterControlls';
import CounterDisplay from './components/others/CounterDisplay';
import AddUserForm from './components/users/AddUserForm';
import UsersList from './components/users/UsersList';
import MyComponent from './components/MyComponent';
import MySecondcomponent from './components/MySecondcomponent';
function App() {

  const appTitle ="raju 123"
  const Adduserdetails =(value)=>{
    console.log("value from fist component",value)

  }

  const Adduserdetailss =(value)=>{
    console.log("value from second comp",value)

  }
  return (
    <div className="App">
      {/* <CounterControlls/>
      <CounterDisplay/> */}
      <AddUserForm/>
      <UsersList/>
      <MyComponent data={appTitle} getData={Adduserdetailss} />
      <MySecondcomponent getData={Adduserdetails}/>

    </div>
  );
}

export default App;
