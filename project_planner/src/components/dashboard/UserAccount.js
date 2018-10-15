import React, { Component} from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';


class AccountDetails extends Component {

render(){
    const { auth } = this.props;
    if(!auth.uid) return <Redirect to='/signin' />

    return(
        <div>

        </div>
    )
 }
}

const mapStateToProps = state => {
    return {
        auth: state.firebase.auth
    }
}

export default connect(mapStateToProps, null )(AccountDetails);