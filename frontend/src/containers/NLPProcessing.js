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

class NlpProcessing extends Component {
    state = {
        present: false,
        title: "CLASSIFICATION",
        category: "Sentiment Analysis",
        buttoncaption: "Analysis"
    }

    move_to_nlpdashboard = e => {
        var titleid = "1";
        var categoryid = "1";
        var page = "dashboard";
        this.props.move_nlp(page, titleid, categoryid);
    }

    file_load = (e) => {
        this.inputElement.click();
    }
    render() {

        const { titleid, categoryid } = this.props;
        if (this.state.present == false) {
            if (titleid == "1") {
                switch (categoryid) {
                    case "1":
                        this.setState({ present: true, title: "CLASSIFICATION", category: "Sentiment Analysis", buttoncaption: "Analysis" });
                        break;
                    case "2":
                        this.setState({ present: true, title: "CLASSIFICATION", category: "Topic Detection", buttoncaption: "Detect" });
                        break;
                    case "3":
                        this.setState({ present: true, title: "CLASSIFICATION", category: "Language Detection", buttoncaption: "Detect" });
                        break;
                }
            }
            if (titleid == "2") {
                switch (categoryid) {
                    case "1":
                        this.setState({ present: true, title: "EXTRACTION", category: "Summarization", buttoncaption: "Summarize" });
                        break;
                    case "2":
                        this.setState({ present: true, title: "EXTRACTION", category: "Entity Extraction", buttoncaption: "Extract" });
                        break;
                    case "3":
                        this.setState({ present: true, title: "EXTRACTION", category: "Keyword Extraction", buttoncaption: "Extract" });
                        break;
                    case "4":
                        this.setState({ present: true, title: "EXTRACTION", category: "Article Extraction", buttoncaption: "Extract" });
                        break;
                }
            }
            if (titleid == "3") {
                switch (categoryid) {
                    case "1":
                        this.setState({ present: true, title: "TEXT PROCESS", category: "Stemmer", buttoncaption: "Stemmer" });
                        break;
                    case "2":
                        this.setState({ present: true, title: "TEXT PROCESS", category: "Tokenizer", buttoncaption: "Tokenize" });
                        break;
                    case "3":
                        this.setState({ present: true, title: "TEXT PROCESS", category: "Normalizer", buttoncaption: "Nomalize" });
                        break;
                    case "4":
                        this.setState({ present: true, title: "TEXT PROCESS", category: "Similarity", buttoncaption: "Similarity" });
                        break;
                }
            }
        }

        if (this.props.page == "dashboard") {
            return <Redirect push to={{ pathname: "/nlpdashboard" }} />;
        }
        return (
            <div>
                <div style={{ height: 40 }}></div>
                <div className="row">
                    <div className="col-md-2"></div>
                    <div className="col-md-8 row column">
                        <div className="col-sm-3 gray">
                            <div className="row">
                                <span className="cuscircle yellow"><h5 style={{ color: "white" }}>1</h5></span>
                                <h5 className="custitle foreyellow">CLASSIFICATIONS</h5>
                            </div>
                            <Button className="btn btn-success sidebtn yellow"><h5>Sentiment Analysis</h5></Button>
                            <Button className="btn btn-success sidebtn yellow"><h5>Topic Detection</h5></Button>
                            <Button className="btn btn-success sidebtn yellow"><h5>Language Detection</h5></Button>
                            <div className="row">
                                <span className="cuscircle green"><h5 style={{ color: "white" }}>2</h5></span>
                                <h5 className="custitle foregreen">EXTRACTION</h5>
                            </div>
                            <Button className="btn btn-success sidebtn green"><h5>Summarization</h5></Button>
                            <Button className="btn btn-success sidebtn green"><h5>Entity Extraction</h5></Button>
                            <Button className="btn btn-success sidebtn green"><h5>Keyword Extraction</h5></Button>
                            <Button className="btn btn-success sidebtn green"><h5>Article Extraction</h5></Button>
                            <div className="row">
                                <span className="cuscircle blue"><h5 style={{ color: "white" }}>3</h5></span>
                                <h5 className="custitle foreblue">TEXT PROCESS</h5>
                            </div>
                            <Button className="btn btn-success sidebtn blue"><h5>Stemmer</h5></Button>
                            <Button className="btn btn-success sidebtn blue"><h5>Tokenizer</h5></Button>
                            <Button className="btn btn-success sidebtn blue"><h5>Normalizer</h5></Button>
                            <Button className="btn btn-success sidebtn blue"><h5>Similarity</h5></Button>
                        </div>
                        <div className="col-sm-6">
                            <p className="comicfirst foreyellow">{this.state.title}</p>
                            <p className="comicsecond">{this.state.category}</p>
                            <div className="row mid">
                                <Button className="btn darkyellow long"><h5 className="georgia">Load Data</h5></Button>
                                <Button className="btn darkyellow short"><h5 className="georgia">Text</h5></Button>
                                <Button className="btn last darkyellow short"><h5 className="georgia">Url</h5></Button>
                            </div>
                            <div className="row mid">
                                <div className="col-sm-8 cusmargin">
                                    <input type="text" className="form-control custominput" />
                                </div>
                                <input type="file" ref={input => this.inputElement = input} hidden></input>
                                <div className="col-sm-4">
                                    <button className="btn browse darkyellow" onClick={this.file_load}><h5 className="georgia">Browse</h5></button>
                                </div>
                            </div>
                            <div className="form-group mid">
                                <textarea class="form-control" rows="15"></textarea>
                            </div>
                            <Button className="btn btn-success result darkyellow"><h5 className="georgia">{this.state.buttoncaption}</h5></Button>
                        </div>
                        <div className="col-sm-3 gray">
                            <div style={{ height: 100 }}>
                                <button className="btn back" onClick={this.move_to_nlpdashboard}><a href="#">
                                    <span class="glyphicon glyphicon-fast-backward"></span>
                                </a></button>
                            </div>
                            <div className="col-sm-12">
                                <div className="cusdiv result"><h4 className="georgia">Result</h4></div>
                            </div>
                            <div className="form-group restxt">
                                <textarea class="form-control resinttxt" rows="15"></textarea>
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
)(NlpProcessing);