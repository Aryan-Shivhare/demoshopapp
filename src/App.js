import logo from './logo.svg';
import './App.css';
import Product from './components/Product';
import NewProduct from './components/NewProduct';

function App() {
  const response = [
    {
      id:"p1",
      title:"Parle-G",
      amount:100,
      date:new Date(2005,9,25)
    },
    {
      id:"p2",
      title:"Good-Day",
      amount:150,
      date:new Date(2003,4,29)
    },
    {
      id:"p3",
      title:"CNC",
      amount:80,
      date:new Date(2007,2,12)
    },
    {
      id:"p4",
      title:"Oreo",
      amount:50,
      date:new Date(2007,6,2)
    },
  ];
  function printProductData (data) {
    console.log("I am inside App js")
    console.log(data);
  }
  return (
    <div className='extra'>
    <NewProduct printProduct={printProductData}/>
    <Product items={response}></Product>
    </div>
  );
}

export default App;
