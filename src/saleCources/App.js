import React, { Component } from 'react';
import Cources from './Cources';

class App extends Component {
    render() {
        const cources = [
            { name: "python", price: 399, time: "10 hr" },
            { name: "js", price: 499, time: "11 hr" },
            { name: "php", price: 299, time: "8 hr" },
            { name: "bootstrap", price: 259, time: "5 hr" },
            { name: "linux", price: 449, time: "8 hr" },
            { name: "hacking", price: 599, time: "15 hr" }
        ];

        return (
            <div>
                <Cources items={cources} />
            </div>
        );
    }
}

export default App;
