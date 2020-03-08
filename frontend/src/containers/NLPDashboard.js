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
                <div style={{ height: 60 }}>
                </div>
                <div className="row backgray" style={{ height: 65, padding: 7.5 }}>
                    <div className="col-md-2"></div>
                    <div className="col-md-8 row">
                        <div className="col-sm-4">
                            <div className="cusdiv"><h4 className="georgia">CLASSIFICATION</h4></div>
                        </div>
                        <div className="col-sm-4">
                            <div className="cusdiv"><h4 className="georgia">EXTRACTION</h4></div>
                        </div>
                        <div className="col-sm-4">
                            <div className="cusdiv"><h4 className="georgia">TEXT PROCESSING</h4></div>
                        </div>
                    </div>
                </div>
                <div className="row" style={{ height: 100, padding: 30 }}>
                    <div className="col-md-2"></div>
                    <div className="col-md-8 row">
                        <div className="col-sm-4">
                            <hr className="yellow" ></hr>
                        </div>
                        <div className="col-sm-4">
                            <hr className="green" ></hr>
                        </div>
                        <div className="col-sm-4">
                            <hr className="blue" ></hr>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-2"></div>
                    <div className="col-md-8 row">
                        <div className="col-sm-4">
                            <div className="customcolumn">
                                <Button className="btn btn-primary custombtn yellow third" onClick={this.move_to_nlpprocessing} value="1"><h5 id="1">Sentiment Analysis</h5></Button>
                                <Button className="btn btn-success custombtn yellow third" onClick={this.move_to_nlpprocessing} value="2"><h5 id="1">Topic Detection</h5></Button>
                                <Button className="btn btn-success custombtn yellow third" onClick={this.move_to_nlpprocessing} value="3"><h5 id="1">Language Detection</h5></Button>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="customcolumn">
                                <Button className="btn btn-success custombtn green fourth" onClick={this.move_to_nlpprocessing} value="1"><h5 id="2">Summarization</h5></Button>
                                <Button className="btn btn-success custombtn green fourth" onClick={this.move_to_nlpprocessing} value="2"><h5 id="2">Entity Extraction</h5></Button>
                                <Button className="btn btn-success custombtn green fourth" onClick={this.move_to_nlpprocessing} value="3"><h5 id="2">Keyword Extraction</h5></Button>
                                <Button className="btn btn-success custombtn green fourth" onClick={this.move_to_nlpprocessing} value="4"><h5 id="2">Article Extraction</h5></Button>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="customcolumn">
                                <Button className="btn btn-success custombtn blue fourth" onClick={this.move_to_nlpprocessing} value="1"><h5 id="3">Stemmer</h5></Button>
                                <Button className="btn btn-success custombtn blue fourth" onClick={this.move_to_nlpprocessing} value="2"><h5 id="3">Tokenizer</h5></Button>
                                <Button className="btn btn-success custombtn blue fourth" onClick={this.move_to_nlpprocessing} value="3"><h5 id="3">Normalizer</h5></Button>
                                <Button className="btn btn-success custombtn blue fourth" onClick={this.move_to_nlpprocessing} value="4"><h5 id="3">Similarity</h5></Button>
                            </div>
                        </div>
                    </div>
                </div>
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