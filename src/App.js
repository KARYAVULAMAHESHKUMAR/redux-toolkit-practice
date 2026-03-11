
import './App.css';
import CounterControlls from './components/others/CounterControlls';
import CounterDisplay from './components/others/CounterDisplay';
import AddUserForm from './components/users/AddUserForm';
import UsersList from './components/users/UsersList';
import MyComponent from './components/MyComponent';
import MySecondcomponent from './components/MySecondcomponent';
import TestValues from './components/users/TestValues';
import Redux from './components/forredux/redux1';  
import Redux2 from './components/forredux/redux2';
import AddTask from './ReactRef';
import UseMemos from './components/UseMemos';
function App() {

  const appTitle ="raju 123"
  const Adduserdetails =(value)=>{
    console.log("value from fist component",value)

  }
  const ValuesKavali =(testValue)=>{
    console.log("values from app is ",testValue)
  }

  const Adduserdetailss =(value)=>{
    console.log("value from second comp",value)
 
  }
  return (
    <div className="App">
      <UseMemos/>
      <br/>
      <AddTask/>
      <Redux/>
       <Redux2/>
       {/* <CounterControlls/> 
      <CounterDisplay/>
      <AddUserForm/>
      <UsersList/>
      <MyComponent data={appTitle} getData={Adduserdetailss} />
      <MySecondcomponent getData={Adduserdetails}/>
      <TestValues getValues={ValuesKavali} /> */}

    </div>
  );
}

export default App;
