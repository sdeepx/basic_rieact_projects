import React, { Component } from "react";


class Cources extends Component {

    sumPrice(price) {
        this.setState({ total: this.state.total + price })
    }

    constructor(props) {
        super(props);
        this.state = {
            total: 0
        }
        this.sumPrice = this.sumPrice.bind(this);
    }

    render() {
        const all_cources = this.props.items.map((i, k) => {
            return <GetCources
                name={i.name}
                price={i.price}
                time={i.time}
                key={k}
                sumPrice={this.sumPrice}
                active={i.active} />
        })
        return (
            <div>
                <div className="container text-center">
                    <h2 className="text-success mt-4">Buy Online Cources</h2>

                    <div className="container">
                        {all_cources}
                        <h4 className="text-primary mt-3">Total: {this.state.total}</h4>
                    </div>

                </div>

            </div>
        )
    }
}

class GetCources extends Component {
    doCal() {
        let active_or_not = !this.state.active;
        this.setState({ active: active_or_not });

        this.props.sumPrice(active_or_not ? this.props.price : - this.props.price)
    }
    constructor(props) {
        super(props);
        this.state = {
            active: false
        }
        this.doCal = this.doCal.bind(this)
    }

    render() {
        return (
            <div>
                <div className="container">
                    <div className="list-group mt-4">
                        <button onClick={this.doCal} className={this.state.active ? " active list-group-item list-group-item-action" : "list-group-item list-group-item-action"}>
                            <div className="row">
                                <div className="col col-4">
                                    {this.props.name}
                                </div>
                                <div className="col col-4">
                                    {this.props.time}
                                </div>
                                <div className="col col-4">
                                    {this.props.price}
                                </div>
                            </div>

                        </button>
                    </div>
                </div>
            </div>
        );
    }
}


export default Cources