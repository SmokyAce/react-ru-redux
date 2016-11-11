import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import User from '../components/user';
import * as userActions from '../actions/UserActions'

class Auth extends Component {
    render() {
        const { user } = this.props;
        const { handleLogin } = this.props.userActions;
        const { checkAuth} = this.props.userActions;

        return <div className='row'>
            <User name={user.name} handleLogin={handleLogin} checkAuth={checkAuth} error={user.error} />
        </div>
    }
}

const mapStateToProps = function(state) {
    return {
        user: state.user
    };
};

function mapDispatchToProps(dispatch) {
    return {
        userActions: bindActionCreators(userActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Auth);