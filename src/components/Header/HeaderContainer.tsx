import React from "react";
import Header from "./Header";
import { connect } from "react-redux";
import { AppStateType } from "../../redux/reduxStore";
import {logout} from "../../redux/authReducer";

type MapStateToPropsT = ReturnType<typeof mapStateToProps>;

type HeaderContainerPropsT = MapStateToPropsT & {
    logout: () => void
};

class HeaderContainer extends React.Component<HeaderContainerPropsT> {

    render() {
        const { login, isAuth, photoPath, logout } = this.props;
        return <Header login={login} isAuth={isAuth} photoPath={photoPath} logout={logout} />;
    }
}

const mapStateToProps = (state: AppStateType) => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.data.login,
        photoPath: state.auth.photoPath
    };
};

export default connect(mapStateToProps, { logout })(HeaderContainer);
