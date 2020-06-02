import React, { PureComponent} from 'react';
import {LoginWrapper, LoginBox, Input, Button} from './style'
import {Redirect} from 'react-router-dom';
import * as actionCreators from './store/actionCreators'
import {connect} from 'react-redux';
class Login extends PureComponent {
    render() {
        if (!this.props.loginStatus) {
            return (
                <LoginWrapper>
                    <LoginBox>
                        <Input placeholder="账号" ref={(input)=>{this.account = input}}></Input>
                        <Input placeholder="密码" type="password" ref={(input)=>{this.password = input}}></Input>
                        <Button onClick={()=>this.props.Login(this.account, this.password)}>登录</Button>
                    </LoginBox>
                </LoginWrapper>
            )
        }else {
            return <Redirect to="./"/>
        }
    }
}
const mapStateToProps = (state) => ({
    loginStatus: state.getIn(['login', 'login'])
})

const mapDispatchToProps = (dispatch) => ({
    Login(account, password){
        dispatch(actionCreators.login(account.value, password.value));
    }
})
export default connect(mapStateToProps, mapDispatchToProps)(Login)
