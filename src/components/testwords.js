import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import pink from '@material-ui/core/colors/pink'
import green from '@material-ui/core/colors/green'

import { connect } from 'react-redux';
import {getFeedback} from "../redux/actions";

import compose from 'recompose/compose';

import withRoot from '../withRoot';
import store from "../redux/store";

const styles = theme => ({
    root: {
        textAlign: 'center',
        paddingTop: 'px',
        paddingBottom: '50px',
    },

    title: theme.overrides.title,

    subtitle: theme.overrides.subtitle,

    button: theme.overrides.button,

    authors: theme.overrides.authors,

    choiceSec: {
        position: 'absolutes',
        zIndex: 0,
        marginTop: '3rem',
        marginBottom: '2rem',
    },

    choice: {
        width: '1000px',
        display: 'inline-block',
        textAlign: 'left',
        marginLeft: '1rem',
        marginTop: '1rem',
        padding: '1rem',
        cursor: 'pointer',
        backgroundColor: theme.palette.secondary.light,
        borderRadius: '5px',
        boxShadow: 'none',

        '&:hover': {
            border: '1px solid #80DEEA',
        },
    },

});

const mapStateToProps = state => ({
    page: state.changePage.page
});

const mapDispatchToProps = dispatch => ({
    getFeedback: () => dispatch(getFeedback())
});

function getSiblings(elem) {
    let siblings = [];
    [...elem.parentNode.childNodes].forEach(sibling =>
        sibling === elem ? null : siblings.push(sibling)
    );
    return siblings
}

function questionType(type){
    if (type === 'MC') {
        return 'Multiple choice'
    }else{
        return 'Select all that apply'
    }
}

function handleCount(result, counter){
    if (result === 'True' || counter === 2) {
        counter = 0
    }else {
       counter += 1
    }

    return counter
}


class Testwords extends React.Component {
    constructor(props) {
        super(props);

        this.choiceSec = React.createRef();

        this.state={
            testData: null,
            choices: this.props.testData.answer,
            feedbackData: null,
            counter: 0,
        }
    };


    handleClick = (ev, type) => {
        let choice = ev.currentTarget;
        choice.style.backgroundColor === 'rgb(178, 235, 242)'? choice.style.backgroundColor = '#f1f1f1':choice.style.backgroundColor = 'rgb(178, 235, 242)';
        if (type === 'MC') {
            let siblings = getSiblings(choice);
            siblings.forEach(sibling =>
            {
                sibling.style.backgroundColor = '#f1f1f1';
                sibling.classList.remove('selected');
            }

        )}
        [...choice.classList].indexOf('selected') > - 1 ? choice.classList.remove('selected') : choice.classList.add('selected')
    };

    handleSubmit = () => {
        const answer = [];
        [...document.querySelectorAll('.selected')].map(choice => answer.push(choice.children[0].innerHTML));

        const formdata = new FormData();
        formdata.append('id', this.props.testData.id);
        formdata.append('number', this.props.testData.number);
        formdata.append('type', this.props.testData.type);

        answer.map((a, index) => formdata.append('choice_' + (index).toString(), a));
        this.props.testData.answer.map((c, index) => formdata.append('choices_' + (index).toString(), c));


        fetch('https://cryptic-journey-75247.herokuapp.com/getfeedback', {
            method: 'POST',
            mode: 'cors',
            cache: 'no-cache',
            body: formdata
        }).then(res => {
            return res.json()
        }).then(data =>
        {
            this.setState({feedbackData: data});
            this.setState({counter: handleCount(data.result, this.state.counter)});
            this.props.passFeedbackData(data);
            this.props.passCounter(this.state.counter);

        }
        ).then(() => store.dispatch(getFeedback())
        ).then(
            [...this.choiceSec.current.childNodes].forEach(elem => {
                elem.style.backgroundColor = '#f1f1f1';
                elem.classList.remove('selected');
                })
        ).then(() => {
            this.state.feedbackData.generalright.forEach(i => {
                [...this.choiceSec.current.childNodes][parseInt(i)].style.backgroundColor = green[100]
            });

            this.state.feedbackData.generalwrong.forEach(i => {
                [...this.choiceSec.current.childNodes][parseInt(i)].style.backgroundColor = pink[50]
            })
        }).catch(err =>  alert('Cannot get feedback now.'))
    };


    render() {
        const {classes} = this.props;

        return (
            <div className={classes.root}>
                <Typography className={classes.title}>
                    Question {this.props.testData.testid}
                </Typography>

                <Typography className={classes.subtitle} style={{marginTop: '-1rem'}}>
                    {this.props.testData.testid}/{this.props.testData.number} {questionType(this.props.testData.type)}
                </Typography>

                <br/>

                <Typography className={classes.subtitle} style={{width: '1000px'}}>
                    {this.props.testData.question}
                </Typography>

                <br/>

                <div className={classes.choiceSec} ref={this.choiceSec}>
                    {this.props.testData.answer.map((choice, index) => (
                        <Paper className={classes.choice}
                               onClick={this.props.page === 'testPage'? (ev, type) => this.handleClick(ev, this.props.testData.type):null}
                               style={this.props.page === 'testPage'? {backgroundColor: '#f1f1f1'} : null}
                               key={index}>
                            <Typography className={classes.subtitle} style={{marginTop: 0, fontSize: '17px'}}>{choice}</Typography>
                        </Paper>
                    ))}
                </div>

                {this.props.page === 'testPage'?
                    <Button className={classes.button} style={{marginTop: '0.5rem'}} onClick={this.handleSubmit}>
                        Confirm
                    </Button>
                :null}


            </div>
        )
    }
}

Testwords.protoTypes = {
    classes: PropTypes.object.isRequired,
};

export default withRoot(compose(
    withStyles(styles, {name: 'Testwords'}),
    connect(mapStateToProps, mapDispatchToProps),
)(Testwords));