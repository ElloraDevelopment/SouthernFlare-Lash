import React, {Component} from 'react';
import ContactUs from "../components/contact-us.js";

import {connect} from "react-redux";
import {bindActionCreators} from "redux"
import * as actionCreators from "../actions/";
import {Link} from "react-router-dom";

class ContactUsContainer extends Component {
    render() {
        console.log(this.props);
        return (
            <div>
                <ContactUs randomColor={this.props.loadColor} oldColor={this.props.color}/>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return state
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(actionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactUsContainer);
