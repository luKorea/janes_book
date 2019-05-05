import React, { PureComponent }  from 'react';
import * as Logins from './styles';
import { connect } from 'react-redux'
import {action} from './store'
import { Redirect } from 'react-router-dom'

class Login extends PureComponent {
    render() {
       if (!this.props.logins) {
           return (
               <Logins.LoginWrapper>
                   <Logins.LoginBox>
                       <Logins.Input
                           placeholder='账号'
                           ref={(input) => {this.account = input}}
                       />
                       <Logins.Input
                           placeholder='密码'
                           type='password'
                           ref={(input) => {this.password = input}}
                       />
                       <Logins.Button
                           onClick={() => this.props.login(this.account, this.password)}
                       >
                           登陆
                       </Logins.Button>
                   </Logins.LoginBox>
               </Logins.LoginWrapper>

           )
       } else {
           return <Redirect to='/' />
       }
    }
}
const mapStateToProps = (state) => ({
    logins: state.getIn(['login', 'login'])
});
const mapDispatchToProps = (dispatch) => ({
    login(accountElem, passwordElem) {
        dispatch(action.login(accountElem.value, passwordElem.value))
    }
});
export default connect(mapStateToProps, mapDispatchToProps)(Login);
