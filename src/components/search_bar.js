import React, { Component } from 'react';

// const searchBar = () => {
//     return <input />;
// }

class searchBar extends Component {
    
    constructor(props) {
        super(props);

        this.state = {
            term: ''
        };

        this.onInputChange = this.onInputChange.bind(this);
    }

    onInputChange(event) {
        let value = event.target.value;

        this.setState(prevState => ({
            term: value
        }));
    }

    render() {
        return (
            <div>
                <input value={this.state.term} onChange={this.onInputChange}/>
                Value of input: {this.state.term}
            </div>
        )
    }
}

export default searchBar;