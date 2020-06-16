import React from 'react';
import { connect } from 'react-redux';
import { selectMsg } from '../actions';
import "./Detailed.css";

class Detailed extends React.Component {
    constructor(props) {
        super(props);
        this.id = this.props.id;
        this.name = this.props.name;
        // this.state = {shown: false};
    }
    render() {
        if (this.props.msgId !== this.id) {
            return null;
        }
        return (
            <div className="detailedBox"> This message is from {this.props.name}</div>
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
