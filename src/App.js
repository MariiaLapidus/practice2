import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./component/header/Header";
import Card from "./component/card/Card";

class App extends Component
{

    state={
        data: null,
        user: "Vasy"
    };

  componentDidMount() {
      setTimeout(()=>{
      fetch('https://jsonplaceholder.typicode.com/users')
          .then ( response=>response.json())
          .then(result=> {
              console.log(result);
              this.setState({data:result})
          })},3000);
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

 render() {
      const {data} =this.state;
    return (
        <div className="App">
        <Header funcSort={this.sortByName} funcCity={this.sortByCity }/>
        {data ? data.map(i=> { return <Card user={i} key={i.id}/>})

        :"Loading"
        }
        </div>
    );
  }
}

export default App;
