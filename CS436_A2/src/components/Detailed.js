import React from 'react';
import { connect } from 'react-redux';
import { selectMsg } from '../actions';
import "./Detailed.css";

class Detailed extends React.Component {
    constructor(props) {
        super(props);
        this.id = this.props.id;
        // this.state = {shown: false};
    }
    render() {
        if (this.props.msgId !== this.id) {
            return null;
        }
        return (
            <div className="detailedBox"> This is message number {this.props.msgId} <br/>
                The message is: {this.props.list[+this.props.msgId - 1]}</div>
        )
    };

}

//state has entire state of app!!
const mapStateToProps = (state) => { //name is by convention
    return {
        list: state.list,
        msgId: state.msgId
    }; //now it will appear as props
};


export default connect(mapStateToProps, { selectMsg })(Detailed);
