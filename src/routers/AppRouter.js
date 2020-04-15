import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ExpenseDashboardPage from '../components/ExpenseDashboard';
import AddExpense from '../components/AddExpense';
import EditExpense from '../components/EditExpense';
import Header from '../components/Header';
import HelpPage from '../components/HelpPage';
import NotFoundPage from '../components/NotFound';

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path="/" component={ExpenseDashboardPage} exact={true}/>
                <Route path="/create" component={AddExpense} exact={true}/>
                <Route path="/help" component={HelpPage} exact={true}/>
                <Route path="/edit/:id" component={EditExpense} exact={true}/>
                <Route component={NotFoundPage}/>
            </Switch> 
        </div>
    </BrowserRouter>
);

export default AppRouter;