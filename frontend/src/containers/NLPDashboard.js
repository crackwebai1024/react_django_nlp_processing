import PropTypes from "prop-types";
import React, { Component } from "react";
import "./Container.css"
import {
    Button,
    Container,
    Grid,
    Header,
    Icon,
    Image,
    Item,
    Label,
    Menu,
    Segment,
    Step,
    Table,
} from 'semantic-ui-react'
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { usermove_nlp } from "../store/actions/user";

class NlpDashboard extends Component {

    move_to_nlpprocessing = e => {
        var titleid = e.target.id;
        var categoryid = e.currentTarget.value;
        var page = "nlpprocessing";
        this.props.move_nlp(page, titleid, categoryid);
    }

    render() {
        const { page, titleid, categoryid } = this.props;
        if (page == "nlpprocessing") {
            return <Redirect to="/nlpprocessing" />;
        }
        return (
            <div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        page: state.user.page,
        titleid: state.user.titleid,
        categoryid: state.user.categoryid
    };
};

const mapDispatchToProps = dispatch => {
    return {
        move_nlp: (page, titleid, categoryid) => dispatch(usermove_nlp(page, titleid, categoryid))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(NlpDashboard);