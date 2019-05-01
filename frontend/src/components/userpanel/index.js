import React from 'react'

class UserPanel extends React.Component{
    render(){
        return(
            <div id="userPanel">
                <span>hello Home</span>
                <span><a href="/" id={"homebtn"}>Home</a></span>
                <span><a id={"logout"}>logout</a></span>
            </div>
        )
    }
}

export default UserPanel