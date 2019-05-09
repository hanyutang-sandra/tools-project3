import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import { connect } from 'react-redux';
import {getNextTest, endApp} from "../redux/actions";

import compose from 'recompose/compose';

import withRoot from '../withRoot';
import store from "../redux/store";

const styles = theme => ({
    root: {
        textAlign: 'center',
        paddingTop: '0px',
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
    getNext: () => dispatch(getNextTest())
});

function rightorwrong(result) {
    if (result === 'False'){
        return 'Oops! Incorrect'
    }else{
        return 'Correct!'
    }
}

function title(result){
    if (result === 'False'){
        return 'Explanation: '
    }else{
        return 'This is an alternative correct answer: '
    }
}

function calculateTest(name, id, testid, number, type, counter){
    const formdata = new FormData();
    formdata.append('name', name);

    if (parseInt(testid) !== parseInt(number)) {
        if (counter === 0 && type === 'MC') {
            formdata.append('id', id);
            formdata.append('type', 'SA')
        }else if (counter === 0 && type === 'SA') {
            formdata.append('id', parseInt(id) + 1);
            formdata.append('type', 'MC')
        }else if (counter !== 0){
            formdata.append('id', id);
            formdata.append('type', type)
        }
    }else if (parseInt(testid) === parseInt(number)) {
        if (counter === 0 && type === 'MC') {
            formdata.append('id', id);
            formdata.append('type', 'SA')
        }else if (counter !== 0){
            formdata.append('id', id);
            formdata.append('type', type)
        }
    }
    return formdata
}


class Feedback extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            testData: null,
            feedbackData: this.props.feedbackData,
            counter: this.props.counter
        }
    };

    getNextTest = () => {
        if (parseInt(this.props.feedbackData.testid) === parseInt(this.props.feedbackData.number)
        && this.state.counter === 0
        && this.props.feedbackData.type === 'SA') {
            store.dispatch(endApp())
        }else {
            const formdata = calculateTest(this.props.feedbackData.name,
                this.props.feedbackData.id,
                this.props.feedbackData.testid,
                this.props.feedbackData.number,
                this.props.feedbackData.type,
                this.state.counter);

            fetch('https://cryptic-journey-75247.herokuapp.com/gettest', {
                method: 'POST',
                mode: 'cors',
                cache: 'no-cache',
                body: formdata
            }).then(res => {
                return res.json()
            }).then(data =>
            {
                this.setState({testData: data});
                this.props.passTestData(data)

            }).then(
                () => store.dispatch(getNextTest())
            ).catch(err =>  alert('Generate failed. Please try again later.'))
        }
    };

    render() {
        const {classes}= this.props;

        return (
            <div className={classes.root}>
                <div className={classes.feedback}>
                    <Typography className={classes.title}
                                style={this.props.feedbackData.result === 'False'? {color: '#8D3A3C', fontSize: '35px'} : {color: '#80DEEA', fontSize: '50px' }}>
                        {rightorwrong(this.props.feedbackData.result)}
                    </Typography>

                    <Typography className={classes.subtitle} style={{width: '800px', marginTop: '0rem'}}>
                        <b style={{color: 'black'}}>{title(this.props.feedbackData.result)}</b>
                        {this.props.feedbackData.feedback}
                    </Typography>

                    <br />
                    <Button className={classes.button} onClick={this.getNextTest}>
                        {this.state.counter === 0? "Next Question":"Try Again"}
                    </Button>

                </div>

            </div>

        )
    }
}

Feedback.protoTypes = {
    classes: PropTypes.object.isRequired,
};

export default withRoot(compose(
    withStyles(styles, {name: 'Feedback'}),
    connect(mapStateToProps, mapDispatchToProps),
)(Feedback))