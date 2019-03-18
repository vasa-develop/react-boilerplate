import React, { Component } from 'react'
import { connect } from 'react-redux';
import { dummyAction } from '../actions/dummyAction'


class DummyComponent extends Component {

    handleClick = () => {
        this.props.dummyAction();
    }

    render() {
        return (
        <div className="bg">
            <br /><br />
            <h1>Current State: {this.props.items}</h1>
            <br />
            <button onClick={this.handleClick.bind(this)} >Change State</button>
        </div>
        )
    }
}
    const mapStateToProps = new_state => ({
        items:  new_state.dummy.items
      })
      
export default connect(mapStateToProps, { dummyAction })(DummyComponent);
