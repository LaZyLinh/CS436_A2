import React from 'react';
import { connect } from 'react-redux';
import { addMsg, selectMsg, deleteMsg } from '../actions';
import "./TopPanel.css";
import Detailed from "./Detailed";

class TopPanel extends React.Component {
    constructor(props) {
        super(props);
        this.textList = React.createRef();
        this.state = {currentId: 0};
        this.selectDiv = this.selectDiv.bind(this);
        this.delete = this.delete.bind(this);
    }
    scrollToBottom = () => {
        if (this.textList.current !== null) {
            this.textList.current.scrollIntoView({behavior: "smooth"});
        }
    };

    componentDidUpdate(prevProps, prevState, snapshot) {
        this.scrollToBottom();
    };

    delete(event) {
        this.props.deleteMsg(+event.currentTarget.parentNode.id);
        event.stopPropagation();
        this.setState({state: this.state});
    }

    selectDiv(event) {
        this.props.selectMsg(+event.currentTarget.id + 1);
        if (this.state.currentId === +event.currentTarget.id + 1) {
            this.setState({currentId: 0});
        } else {
            this.setState({currentId: +event.currentTarget.id + 1});
        }
    }

    render() {
        let msgList = [];
        let i = 0;
        for (const item of this.props.list) {
            msgList.push(
                <div id={i++} className="msg"
                 ref={this.textList} onClick={this.selectDiv}>{item.message}
                    <button className="delete" onClick={this.delete}>X</button>
                </div>
            );
            if (i === this.state.currentId) {
                msgList.push(<div ref={this.textList}><Detailed id={i} name={item.userName}/></div>);
            }
        }
        msgList.push(
            <div style={{color: "white", padding: "20px"}} ref={this.textList}>Total number of messages: {this.props.list.length}</div>
        );
        return msgList;
    }

}

//state has entire state of app!!
const mapStateToProps = (state) => { //name is by convention
    return {
        list: state.list,
        msgId: state.msgId
    }; //now it will appear as props
};


export default connect(mapStateToProps, { addMsg, selectMsg, deleteMsg })(TopPanel);
