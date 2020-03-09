import React,{useState} from 'react';
import './NewUser.css'

function NewUser({findID, create}) {

    const [inputName, setInputName] = useState('');
    const [inputAddress,setInputAddress] = useState('');
    const [inputUsername,setInputUsername] = useState('');
    const [inputPhone,setInputPhone] = useState('');
    const createUser = (event) => {
        const newUserData = {
            id: findID (),
            name: inputName,
            address: {city: inputAddress},
            username: inputUsername,
            phone: inputPhone,
            isVisible:true
        };
       create(newUserData);
        event.preventDefault();
    }



        return (
            <form  className="card" onSubmit={(event) => createUser(event)} style={{width : '25rem',float: 'left',height: '20rem'}}>
                 <div className="card-body">
                     <div> Name <input type="text" onChange={(event) => setInputName(event.target.value)}/></div>
                     <div> Address<input type="text" onChange={(event) => setInputAddress(event.target.value)}/></div>
                     <div>Username <input type="text" onChange={(event) => setInputUsername(event.target.value)}/></div>
                     <div>Phone<input type="tel" onChange={(event) => setInputPhone(event.target.value)}/></div>
                     <input type='submit' value='Create new User' className="btn btn-primary"/>

                </div>
            </form>
        );
    }


export default NewUser;