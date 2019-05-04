import React from 'react'
import { connect } from 'react-redux'
import style from './index.css'
import { setUsername } from '../../actions'
import Axios from 'axios'
import Utils from '../utils'

const u = new Utils();
class UserPanel extends React.Component{
    componentDidMount(){
        if (this.props.user.length === 0){
            console.log(this.props.user, '###');
            const thet = this;
            Axios.get('/api/v1/user', {headers: {'X-CSRFToken':u.getCookie('csrftoken')}}).then(resp => {thet.props.setUsername(resp.data.username)})
        }
    }
    render(){
        return(
            <div id="userPanel" className="row">
                <div className="col-4">hello {this.props.user}</div>
                <div className="col-4"><a href="/" id={"homebtn"}>Home</a></div>
                <div className="col-4"><a id={"logout"}>logout</a></div>
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