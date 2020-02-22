import React from 'react';
import { Route, Switch } from 'react-router-dom';

import logo from '../logo.png';
import './Layout.scss';

import { CarFormContainer } from '../containers/CarFormContainer';
import { CarTableContainer } from '../containers/CarTableContainer';
import { CarDetailsContainer } from '../containers/CarDetailsContainer';

import { ToolHeader } from './ToolHeader';
import { ToolFooter } from './ToolFooter';
import { Menu } from './Menu';
import { Home } from './Home';
import { Privacy } from './Privacy';
import { TermsOfUse } from './TermsOfUse';
import { Message } from './Message';

export const Layout = () => {

  return <div className="Layout">
    <ToolHeader logo={logo} title="Little Timmy's Auto Lot" />
    <Menu menuItems={ [
      { url: '/', label: 'Home' },
      { url: '/cars', label: 'Cars' },
      { url: '/new-car', label: 'New Car' },
    ]} />
    <Route path="/" exact component={Home} />
    <Route path="/privacy" component={Privacy} />
    <Route path="/terms-of-use" component={TermsOfUse} />
    <Route path="/new-car" component={CarFormContainer} />
    <Route path="/cars/:carId?" component={CarTableContainer} />
    <Switch>
      <Route path="/cars" exact component={() => <Message>Select a car from the table.</Message>} />
      <Route path="/cars/:carId" component={CarDetailsContainer} />
    </Switch>
    <ToolFooter companyName="Little Timmy's Auto Lot, LLC." />
  </div>;

};