import React, { PureComponent} from 'react';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
class write extends PureComponent {
    render() {
        if (this.props.loginStatus) {
            return (
                <div>写文章页面</div>
            )
        }else {
            return <Redirect to="/login"/>
        }
    }
}
const mapStateToProps = (state) => ({
    loginStatus: state.getIn(['login', 'login'])
})

export default connect(mapStateToProps, null)(write)
