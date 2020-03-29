import React from 'react';
import Main from "./Main";
import NewHoliday from "./NewHoliday";
import Holiday from "./Holiday";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Nav from "./Nav";
import "../css/app.css";



export function App() {
    return(
        <>
            <Nav />
            <div className="container">
                <Router>
                    <div>
                        <Switch>
                            <Route exact path="/">
                                <Main/>
                            </Route>
                            <Route path="/newholiday" component={NewHoliday}/>
                            <Route path="/holiday/:id" component={Holiday}/>
                        </Switch>
                    </div>
                </Router>
            </div>
        </>
    );

}

export default App;