import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'
import './Users.css';

const Users = (props) => {
    // console.log(props);
    const handleAddUser = props.handleAddUser;
    const {name, email, phone, company, income, img} = props.user;
    
    return (
        <div className="users">
            <div>
                <img src={img} alt=""/>
            </div>
            <div className="user-data">
            <h4>Name: {name}</h4>
            <p>Email: {email}</p>
            <p>Phone: {phone}</p>
            <p>Company: {company}</p>
            <p>Income: {income}</p>
            <button
             onClick={() => handleAddUser(props.user)}
             className="main-btn"
             ><FontAwesomeIcon icon={faPlusCircle} /> Add me</button>
            </div>
            
        </div>
    );
};

export default Users;