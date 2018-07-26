import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import Header from '../components/Header';
import MainPage from '../components/MainPage';
import CreatePage from '../components/CreatePage';
import EditPage from '../components/EditPage';
import HelpPage from '../components/HelpPage';
import NotFoundPage from '../components/NotFoundPage';

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route exact path={"/"} component={MainPage}></Route>
                <Route path={"/create"} component={CreatePage}></Route>
                <Route path={`/edit/:id`} component={EditPage}></Route>
                <Route path={"/help"} component={HelpPage}></Route>
                <Route component={NotFoundPage}></Route>
            </Switch>
        </div>

    </BrowserRouter>
);

export default AppRouter;