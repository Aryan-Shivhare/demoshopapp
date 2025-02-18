import logo from './logo.svg';
import './App.css';
import Item from './components/Item';
import ItemDate from './components/ItemDate';
import Card from './components/Card';

function App() {
  const response = [
    {
      itemName:"Always1",
      itemDay:"251",
      itemMonth:"September1",
      itemYear:"20051"
    },
    {
      itemName:"Always2",
      itemDay:"252",
      itemMonth:"September2",
      itemYear:"20052"
    },
    {
      itemName:"Always3",
      itemDay:"253",
      itemMonth:"September3",
      itemYear:"20053"
    },
  ];
  return (
    <div>
    <Card>
    <Item name={response[0].itemName}>
      Aryan Shivhare
    </Item>
    <ItemDate day={response[0].itemDay} month={response[0].itemMonth} year={response[0].itemYear}></ItemDate>
    <Item name={response[1].itemName}></Item>
    <ItemDate day={response[1].itemDay} month={response[1].itemMonth} year={response[1].itemYear}></ItemDate>
    <Item name={response[2].itemName}></Item>
    <ItemDate day={response[2].itemDay} month={response[2].itemMonth} year={response[2].itemYear}></ItemDate>
    <div className="App">
      Howdy People
    </div>
    </Card>
    </div>
  );
}

export default App;
