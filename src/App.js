import React from 'react';
import MainLayout from '../src/components/layout/MainLayout/MainLayout';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Homepage from '../src/components/views/Homepage/Homepage';
import Login from '../src/components/views/Login/Login';
import Tables from './components/views/Tables/Tables';
import TablesBookingNew from './components/views/Tables/TablesBookingNew';
import TablesBookingId from './components/views/Tables/TablesBookingId';
import TablesEventsNew from './components/views/Tables/TablesEventsNew';
import TablesEventsId from './components/views/Tables/TablesEventsId';
import Waiter from './components/views/Waiter/Waiter';
import WaiterOrderNew from './components/views/Waiter/WaiterOrderNew';
import Kitchen from './components/views/Kitchen/Kitchen';

function App() {
  return (
    <BrowserRouter basename={'/panel'}>
      <MainLayout>
        <Switch>
          <Route exact path={`${process.env.PUBLIC_URL}/`} component={Homepage} />
          <Route exact path={process.env.PUBLIC_URL + '/login'} component={Login} />
          <Route exact path={process.env.PUBLIC_URL + '/tables'} component={Tables} />
          <Route exact path={process.env.PUBLIC_URL + '/tables/booking/new'} component={TablesBookingNew} />
          <Route exact path={process.env.PUBLIC_URL + '/tables/booking/:id'} component={TablesBookingId} />
          <Route exact path={process.env.PUBLIC_URL + '/tables/events/new'} component={TablesEventsNew} />
          <Route exact path={process.env.PUBLIC_URL + '/tables/events/:id'} component={TablesEventsId} />
          <Route exact path={process.env.PUBLIC_URL + '/waiter'} component={Waiter} />
          <Route exact path={process.env.PUBLIC_URL + '/waiter/order/new'} component={WaiterOrderNew} />
          <Route exact path={process.env.PUBLIC_URL + '/waiter/order/:id'} component={WaiterOrderId} />
          <Route exact path={process.env.PUBLIC_URL + '/kitchen'} component={Kitchen} />
        </Switch>
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;
