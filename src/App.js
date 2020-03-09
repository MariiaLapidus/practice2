import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./component/header/Header";
import Card from "./component/card/Card";
import Count from "./component/count/Count";
import NewUser from "./component/NewUser/NewUser";

class App extends Component
{
    state={
        data: null,
        user: "Vasy",
       count: null
    };

  componentDidMount() {
      setTimeout(()=>{
      fetch('https://jsonplaceholder.typicode.com/users')
          .then ( response=>response.json())
          .then(result=> {
              console.log(result);
              const users = result.map(user => {user.isVisible = true; user.isChecked = false;
                  return user},
                  );
              this.setState({data:users});
          })},1000);
  }

  sortByName = () =>{
    const sort = this.state.data.sort((a, b) =>{
        if (a.name > b.name) {
            return 1; }
        if (a.name < b.name) {
            return -1; }
        return 0; });

    this.setState({data: sort})

};
    sortByCity = () =>{
        const sort = this.state.data.sort((a, b) =>{
            if (a.address.city > b.address.city) {
                return 1; }
            if (a.address.city < b.address.city) {
                return -1; }
            return 0; });

        this.setState({data: sort})

    };

   hideUser = (id) => {
       const users = [...this.state.data];
       //console.log(users)
       const user = users.find( user  => user.id === id );
       user.isVisible= !user.isVisible;
       //     if (user.isVisible )
       //     {user.isVisible = false}
       // else {user.isVisible = true}
       this.setState({data: users}
       )
           //console.log(users)

   }
   deleteUser = (id) =>{
       //alert("tttt")
       const users = [...this.state.data];
       const newUsers = users.filter(user => (user.id !== id));
       this.setState({data: newUsers});
   }
   addUser = (id) => {
       const users = [...this.state.data];
       const user = users.find(usr => usr.id === id);
       user.isChecked= !user.isChecked;
       if (user.isChecked)
       {
           this.state.count += 1;
       }
       else
       {
           this.state.count -= 1;
       }
       this.setState({ data: users });
   }
    findMaxID = () => {
        let users = [...this.state.data];
        let sorted = users.sort((a, b) => {return ((a.id < b.id)? 1: -1)});
        return sorted[0].id + 1;
    };
   createNewUser = (UserData) => {
       const users = [...this.state.data];
       users.push(UserData);
       this.setState({data: users})
   };


 render() {
      const {data, count} =this.state;
        return (
            <div className="App">
            <Header  funcSort={this.sortByName} funcCity={this.sortByCity } count={this.state.count}/>
                        {data ? data.map(i=> { return <Card user={i} key={i.id} addRemove={this.addUser}
                                                            funcHide={this.hideUser} funcDelete={this.deleteUser}

            />}
            )

        :"Loading"
        }
            <NewUser findID={this.findMaxID} create={this.createNewUser}/>
        </div>
    );
  }
}

export default App;
