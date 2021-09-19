import './App.css';
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import IntentionForm from "./components/IntentionForm";
import Appreciation from "./components/Appreciation";
import PrayerList from "./components/PrayerList";

function App() {
    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path="/"><IntentionForm/></Route>
                    <Route path="/appreciation"><Appreciation/></Route>
                    <Route path="/list"><PrayerList/></Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;