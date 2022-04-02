

import './App.css';
import DefaultLayout from './layout/DefaultLayout';
//import {TicketLists} from './pages/ticket-list/TicketLists.page';
import { Ticket } from './pages/ticket/Ticket.page';
// import { AddTicket } from './pages/new-ticket/AddTicket.page';
// import Dashboard from './pages/dashboard/Dashboard.page';
// import { Entry } from "./pages/entry/Entry.page";
// import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'; 
function App() {
  return (
    <div className="App">
    {/* <Entry /> */}
    <DefaultLayout>
      {/* <Dashboard/> */}
      {/* <AddTicket/> */}
      {/* <TicketLists /> */}
      <Ticket/>
    </DefaultLayout>
     
    </div>
  );
}

export default App;
