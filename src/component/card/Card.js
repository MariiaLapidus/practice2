import React, {Component} from 'react';
import './card.css';


function Card({user,funcHide, funcDelete, addRemove}) {
    const hide= (id) => {

        funcHide(id)
    }
    const deleteUser = (id) => {
        funcDelete(id)
    }
    const addUser = (i) => {
        addRemove (i)
    }

        return (
            <div key = {user.id} className="card" style={{width : '25rem',float: 'left',height: '20rem'}}>
                {user.isVisible && <div className="card-body">
                    <h3 className="card-title">{user.id}</h3>
                    <h3 className="card-title">{user.name}</h3>
                    <h3 className="card-title">{user.address.city}</h3>
                    <h4 className="card-title">{user.username}</h4>
                    <h5 className="card-title">{user.phone}</h5>
                    <button className="btn btn-primary" onClick={deleteUser.bind (null, user.id)}>Delete user</button>
                    <a href="#" className="btn btn-primary" onClick={addUser.bind (null, user.id)}>
                        {user.isChecked ? "Remove" : "Add"}</a>

                    {/*<button href="#" className="btn btn-primary" onClick={() => hide (user.id)} >Hide Post</button>*/}
                </div>}
                <button  className="btn btn-primary"
                        onClick={hide.bind (null, user.id)}>{user.isVisible ? "Hide Post": "Show Post"}  </button>

            </div>
        );

    }

export default Card;