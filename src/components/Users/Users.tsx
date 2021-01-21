import React from "react";
import { UserType } from "../../redux/entities";
import s from "./Users.module.scss";
import userPhoto from '../../assets/img/user01.png'
import axios from "axios";

type UsersPropsType = {
    users: Array<UserType>;
    follow: (userId: number) => void;
    unfollow: (userId: number) => void;
    setUsers: (users: Array<UserType>) => void;
};

export const Users = (props: UsersPropsType) => {

    const getUsers = () => {
        if(!props.users.length){
            axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
                props.setUsers(response.data.items)
            })
        }
    }



    return (
        <div>
            <button onClick={getUsers}>GetUsers</button>
            {props.users.map((u) => {
                return (
                    <div key={u.id}>
                        <span>
                            <div className={s.userLogo}>
                                <img src={u.photos.small ? u.photos.small : userPhoto} alt="UserLogo" />
                            </div>
                            <div>
                                {u.followed ? (
                                    <button
                                        onPointerDown={() => {
                                            props.unfollow(u.id);
                                        }}
                                    >
                                        Unfollow
                                    </button>
                                ) : (
                                    <button
                                        onPointerDown={() => {
                                            props.follow(u.id);
                                        }}
                                    >
                                        Follow
                                    </button>
                                )}
                            </div>
                        </span>
                        <span>
                            <span>
                                <div>{u.name}</div>
                                <div>{u.status}</div>
                            </span>
                            <span>
                                <div>{"u.location.country"}</div>
                                <div>{"u.location.city"}</div>
                            </span>
                        </span>
                    </div>
                );
            })}
        </div>
    );
};
