import React from "react";
import { UserType } from "../../redux/entities";
import s from "./Users.module.scss";
import { Paginator } from "../common/Paginator/Paginator";
import { User } from "./User/User";

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
            {props.users.map((u) => {
                return (
                    <User
                        key={u.id}
                        user={u}
                        follow={props.follow}
                        unfollow={props.unfollow}
                        followingUsers={props.followingUsers}
                    />
                );
            })}
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
