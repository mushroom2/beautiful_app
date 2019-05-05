import React from "react";
import UserPanel from "../userpanel"
import AlbumsComponent from './albums'

class Albums extends React.Component {
    render(){ return(
        <div>
            <UserPanel/>
            <AlbumsComponent/>
        </div>
    )}
}

export default Albums