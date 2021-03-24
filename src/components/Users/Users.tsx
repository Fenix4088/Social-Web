import React from "react";
import { UserType } from "../../redux/entities";
import s from "./Users.module.scss";
import userPhoto from "../../assets/img/user01.png";
import { NavLink } from "react-router-dom";
import { Paginator } from "../common/Paginator/Paginator";

type UsersPropsType = {
    users: Array<UserType>;
    pageSize: number;
    currentPage: number;
    totalUsersCount: number;
    follow: (userId: number) => void;
    unfollow: (userId: number) => void;
    setTotalUsersCount: (totalUsersCount: number) => void;
    onPageChanged: (pageNumber: number) => void;
    followingUsers: Array<number>;
};

export const Users: React.FC<UsersPropsType> = (props) => {

    const renderUsers = (usersArr: Array<UserType>) => {
        return usersArr.map((u) => {
            return (
                <div key={u.id}>
                    <span>
                        <div className={s.userLogo}>
                            <NavLink to={`/profile/${u.id}`}>
                                <img src={u.photos.small ? u.photos.small : userPhoto} alt="UserLogo" />
                            </NavLink>
                        </div>
                        <div>
                            {u.followed ? (
                                <button
                                    disabled={props.followingUsers.some((id) => id === u.id)}
                                    onPointerDown={() => {
                                        props.unfollow(u.id);
                                    }}
                                >
                                    Unfollow
                                </button>
                            ) : (
                                <button
                                    disabled={props.followingUsers.some((id) => id === u.id)}
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
        });
    };

    const pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    const pages: Array<number> = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return (
        <div>
            <div className={s.pagesWrapper}>
                <Paginator
                    totalPagesCount={pages}
                    currentPage={props.currentPage}
                    onPaginatorChange={props.onPageChanged}
                />
            </div>
            {renderUsers(props.users)}
            <div className={s.pagesWrapper}>
                <Paginator
                    totalPagesCount={pages}
                    currentPage={props.currentPage}
                    onPaginatorChange={props.onPageChanged}
                />
            </div>
        </div>
    );
};
