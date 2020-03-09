import React, {Component} from 'react';

class Count extends Component {

    render() {
        return (

            <div className="count">
                <h1>{this.props.count}</h1>
            </div>

        );
    }
}

export default Count;