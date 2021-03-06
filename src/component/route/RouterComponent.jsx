import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import UserListComponent from "../user/UserListComponent";
import AddUserComponent from "../user/AddUserComponent";
import EditUserComponent from  "../user/EditUserComponent";

const AppRouter = () => {
    return(
        <div>
            <BrowserRouter>
                <div style={style}>
                    <Routes>
                        <Route exact path="/" component={UserListComponent}/>
                        <Route exact path="/users" component={UserListComponent}/>
                        <Route exact path="/add-user" component={AddUserComponent}/>
                        <Route exact path="/edit-user" component={EditUserComponent}/>
                    </Routes>
                </div>
            </BrowserRouter>
        </div>
    );
}

const style = {
    color: 'red',
    margin: '10px'
}

export default AppRouter;