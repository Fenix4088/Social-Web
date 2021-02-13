import React from "react";
import Header from "./Header";
import { connect } from "react-redux";
import { AppStateType } from "../../redux/reduxStore";
import {authUser} from "../../redux/authReducer";

type HeaderContainerPropsT = {
    authUser: () => void;
    isAuth: boolean;
    login: string | null;
    photoPath: string | null;
};

class HeaderContainer extends React.Component<HeaderContainerPropsT> {
    componentDidMount() {
        this.props.authUser()
    }

    render() {
        const { login, isAuth, photoPath } = this.props;
        return <Header login={login} isAuth={isAuth} photoPath={photoPath} />;
    }
}

const mapStateToProps = (state: AppStateType) => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.data.login,
        photoPath: state.auth.photoPath
    };
};

export default connect(mapStateToProps, { authUser })(HeaderContainer);
