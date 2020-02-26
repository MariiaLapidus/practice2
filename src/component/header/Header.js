import React, {Component} from 'react';
function Header({funcSort, funcCity}) {
    const sName = () => {
        funcSort()
    };
    const sCity = () => {
        funcCity()
    }

        return (
            <nav className="navbar navbar-dark bg-primary">
                <h1>Header</h1>
                <a href="#" className="btn btn-primary" onClick={sName}>By name</a>
                <a href="#" className="btn btn-primary" onClick={sCity}>By city</a>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </nav>
        );
    }


export default Header;