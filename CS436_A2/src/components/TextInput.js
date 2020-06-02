import React from 'react';
import { connect } from 'react-redux';
import {addMsg} from "../actions";
import './TextInput.css';

class TextInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        if (this.state.value === "") {
            event.preventDefault();
            return;
        }
        this.props.addMsg(this.state.value);
        this.setState({value: ""});
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} className="form">
                <label style={{color: "white"}}>
                    Message
                    <textarea rows="10" cols="20" className="textarea" value={this.state.value} onChange={this.handleChange} />
                </label>
                <input type="submit" value="Submit" />
            </form>
        );
    }
}

//state has entire state of app!!
const mapStateToProps = (state) => { //name is by convention
    return { list: state.list }; //now it will appear as props
};

export default connect(mapStateToProps, { addMsg })(TextInput);
