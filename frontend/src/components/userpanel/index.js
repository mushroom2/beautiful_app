import React from 'react'
import { connect } from 'react-redux'
import style from './index.css'
import { setUsername } from '../../actions'
import Axios from 'axios'
import Utils from '../utils'

const u = new Utils();
class UserPanel extends React.Component{
    constructor(props){
        super(props);
        this.logout = this.logout.bind(this)
    }

    logout(){
        const that = this;
        Axios.post('/api/v1/accounts/logout/',
            { "revoke_token": true},
            {headers: {'X-CSRFToken':u.getCookie('csrftoken')}})
            .then(resp => {
                console.log(resp);
                if(resp.status === 200 && resp.data.detail === 'Logout successful'){
                    that.props.setUsername('');
                    window.location = '/'
                }
            })
    }

    componentDidMount(){
        if (this.props.user.length === 0){
            console.log(this.props.user, '###');
            const that = this;
            Axios.get('/api/v1/user', {headers: {'X-CSRFToken':u.getCookie('csrftoken')}})
                .then(resp => {that.props.setUsername(resp.data.username)})
        }
    }
    render(){
        return(
            <div id="userPanel" className="row">
                <div className="col-4"><a href="/" id={"homebtn"}>Home</a></div>
                <div className="col-4">Hello {this.props.user}</div>
                <div className="col-4">
                    {this.props.user.length === 0 ? <a href="/front/login">Login</a> : <a href="#" onClick={event => this.logout(event)} id={"logout"}>Logout</a>}
                </div>
            </div>
        )
    }
}

const mapStateToProps = store => {
  return {
    user: store.user,
  }
};

const mapDispatchToProps = dispatch => ({
    setUsername: username => dispatch(setUsername(username))
})


export default connect(mapStateToProps, mapDispatchToProps)(UserPanel)