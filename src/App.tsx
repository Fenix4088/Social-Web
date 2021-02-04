import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import { Route } from "react-router-dom";
import Settings from "./components/Settings/Settings";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import { DialogsContainer } from "./components/Dialogs/DialogsContainer";
import { NavbarContainer } from "./components/Navbar/NavbarContainer";
import { UsersContainer } from "./components/Users/UsersContainer";
import {ProfileContainerAPI} from "./components/Profile/ProfileContainerAPI";

const App: React.FC = () => {
    return (
        <div className="app-wrapper">
            <Header />
            <NavbarContainer />
            <div className="app-wrapper-content">
                <Route path="/dialogs" render={() => <DialogsContainer />} />
                <Route path="/profile/:userId?" exact render={() => <ProfileContainerAPI />} />
                <Route path="/news" component={News} />
                <Route path="/music" component={Music} />
                <Route path="/settings" component={Settings} />
                <Route path="/users" render={() => <UsersContainer />} />
            </div>
        </div>
    );
};

export default App;
