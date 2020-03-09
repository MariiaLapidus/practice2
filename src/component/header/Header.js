import React, {Component} from 'react';
import Count from "../count/Count";

function Header({funcSort, funcCity,count }) {
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
                <div className="count">Basket  <Count count={count} />
                    {/*<h1>{this.props.count}</h1>*/}
                </div>
                {/*<Count count={count} />*/}
                {/*<a href="#" className="btn btn-primary">Go somewhere</a>*/}
            </nav>
        );
    }


export default Header;