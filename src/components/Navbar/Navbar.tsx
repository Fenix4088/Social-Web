import React from "react";
import classes from "./Navbar.module.scss";
import { NavLink } from "react-router-dom";
import { FriendsSidebarWidget } from "./FriendsSidebarWidget/FriendsSidebarWidget";
import { FriendsItemType } from "../../redux/entities";

type NavbarPropsType = {
    data: {
        friends: Array<FriendsItemType>;
    };
};

const Navbar: React.FC<NavbarPropsType> = (props) => {
    return (
        <div className={classes.sidebarWrapper}>
            <nav className={classes.nav}>
                <div className={`${classes.item} ${classes.active}`}>
                    <NavLink to="/profile" activeClassName={classes.active}>
                        Profile
                    </NavLink>
                </div>
                <div className={classes.item}>
                    <NavLink to="/dialogs" activeClassName={classes.active}>
                        Messages
                    </NavLink>
                </div>
                <div className={classes.item}>
                    <NavLink to="/news" activeClassName={classes.active}>
                        News
                    </NavLink>
                </div>
                <div className={classes.item}>
                    <NavLink to="/music" activeClassName={classes.active}>
                        Music
                    </NavLink>
                </div>
                <div className={classes.item}>
                    <NavLink to="/settings" activeClassName={classes.active}>
                        Settings
                    </NavLink>
                </div>
                <div className={classes.item}>
                    <NavLink to="/users" activeClassName={classes.active}>
                        Users
                    </NavLink>
                </div>
            </nav>

            <div className={classes.friendsWidget}>
                <FriendsSidebarWidget friends={props.data.friends} />
            </div>
        </div>
    );
};

export default Navbar;
