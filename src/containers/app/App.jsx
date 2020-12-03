import React from 'react';
import { Redirect, Route, Switch } from 'react-router';
import { Header } from '../../components/header';
import { AnalysisContainer } from '../analysis';
import { ExploreContainer } from '../explore';
import { UsersContainer } from '../users';
import { AppWrapper, ContentWrapper } from './AppStyle';

const App = () => {
    return (
        <AppWrapper>
            <Header />
            <ContentWrapper>
                <Switch>
                    <Route path="/explore" exact component={ExploreContainer}></Route>
                    <Route path="/analysis" exact component={AnalysisContainer}></Route>
                    <Route path="/users" exact component={UsersContainer}></Route>
                    <Redirect from="/" to="/explore" exact/>
                </Switch>
            </ContentWrapper>
        </AppWrapper>
    );
}

export default App;