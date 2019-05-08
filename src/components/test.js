import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import Testwords from "./testwords";
import Feedback from './feedback';

import { connect } from 'react-redux';
import { startApp } from "../redux/actions";

import compose from 'recompose/compose';

import withRoot from '../withRoot';

const styles = theme => ({
    root: {
        textAlign: 'center',
        paddingTop: '100px',
        paddingBottom: '50px',
    },

    title: theme.overrides.title,

    subtitle: theme.overrides.subtitle,

    button: theme.overrides.button,

    authors: theme.overrides.authors,

    choiceSec: {
        marginTop: '3rem',
    },

    choice: {
        display: 'inline-flex',
        width: '1000px',
        cursor: 'pointer',
        marginBottom: '1rem',

    },

    choiceNum: {
        alignSelf: 'flex-end',
        display: 'inline-block',
        width: '80px',
        height:'60px',
        backgroundColor: theme.palette.secondary.light,
        borderRadius: '50%',
        verticalAlign: 'sub',
        boxShadow: 'none',
    },

    choiceText: {
        alignSelf: 'flex-start',
        textAlign: 'left',
        marginLeft: '1rem',
        padding: '1rem',
        backgroundColor: theme.palette.secondary.light,
        borderRadius: '5px',
        boxShadow: 'none',

    },

    feedback: {
        marginTop: '2rem',
    }
});

const mapStateToProps = state => ({
    page: state.changePage.page
});

const mapDispatchToProps = dispatch => ({
    startApp: () => dispatch(startApp())
});


class Test extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            testData: this.props.testData,
            feedbackData: null,
            counter: 0,
            ref: null,
        }
    };

    handlePassFeedbackData = data => {
        this.setState({feedbackData: data});
    };

    handlePassTestData = data => {
        this.setState({testData: data});
    };

    handleCounter = data => {
        this.setState({counter: data})
    };

    handlePassRef = data => {
        this.setState({ref: data})
    }


    render() {
        const {classes}= this.props;

        return (
            <div className={classes.root}>
                <Testwords testData = {this.state.testData}
                           passFeedbackData = {this.handlePassFeedbackData}
                           passCounter = {this.handleCounter}
                           passRef = {this.handlePassRef}/>

                {this.props.page === 'feedbackPage'?
                    <Feedback feedbackData = {this.state.feedbackData}
                              passTestData={this.handlePassTestData}
                              counter = {this.state.counter}
                              ref={this.state.ref}
                    />:null}

            </div>

        )
    }
}

Test.protoTypes = {
    classes: PropTypes.object.isRequired,
};

export default withRoot(compose(
    withStyles(styles, {name: 'Test'}),
    connect(mapStateToProps, mapDispatchToProps),
)(Test))