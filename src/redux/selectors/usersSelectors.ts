import {AppStateType} from "../reduxStore";
import {createSelector} from "reselect";

export const getUsers = (state: AppStateType) => state.usersPage.users;

export const getPageSize = (state: AppStateType) => state.usersPage.pageSize;

export const getTotalUsersCount = (state: AppStateType) => state.usersPage.totalUsersCount;

export const getIsFetching = (state: AppStateType) => state.usersPage.isFetching;

export const getCurrentPage = (state: AppStateType) => state.usersPage.currentPage;

export const getFollowingUsers = (state: AppStateType) => state.usersPage.followingUsers;



