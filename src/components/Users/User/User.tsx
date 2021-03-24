import { UserType } from "../../../redux/entities";
import s from "../Users.module.scss";
import { NavLink } from "react-router-dom";
import userPhoto from "../../../assets/img/user01.png";
import React from "react";

export type UserPropsT = {
    user: UserType;
    followingUsers: Array<number>;
    follow: (userId: number) => void;
    unfollow: (userId: number) => void;
};

export const User = ({ user, followingUsers, follow, unfollow }: UserPropsT) => {
    return (
        <div>
            <span>
                <div className={s.userLogo}>
                    <NavLink to={`/profile/${user.id}`}>
                        <img src={user.photos.small ? user.photos.small : userPhoto} alt="UserLogo" />
                    </NavLink>
                </div>
                <div>
                    {user.followed ? (
                        <button
                            disabled={followingUsers.some((id) => id === user.id)}
                            onPointerDown={() => {
                                unfollow(user.id);
                            }}
                        >
                            Unfollow
                        </button>
                    ) : (
                        <button
                            disabled={followingUsers.some((id) => id === user.id)}
                            onPointerDown={() => {
                                follow(user.id);
                            }}
                        >
                            Follow
                        </button>
                    )}
                </div>
            </span>
            <span>
                <span>
                    <div>{user.name}</div>
                    <div>{user.status}</div>
                </span>
                <span>
                    <div>{"u.location.country"}</div>
                    <div>{"u.location.city"}</div>
                </span>
            </span>
        </div>
    );
};
