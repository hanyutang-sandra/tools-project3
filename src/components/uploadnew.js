import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import withRoot from '../withRoot';


import { connect } from 'react-redux';
import { uploadForm, useoldForm, startTest } from "../redux/actions";

import compose from 'recompose/compose';
import store from "../redux/store";


const styles = theme => ({
    root: {
        textAlign: 'center',
        paddingTop: '-20px',
        paddingBottom: '50px',
    },

    title: theme.overrides.title,

    subtitle: theme.overrides.subtitle,

    button: theme.overrides.button,

    authors: theme.overrides.authors,

    uploadSec: {
        display: 'inline-block',
        width: '800px',
        marginTop: '2rem',
        textAlign: 'left'
    }

});

const mapStateToProps = state => ({
    page: state.changePage.page
});

const mapDispatchToProps = dispatch => ({
    uploadForm: () => dispatch(uploadForm()),
    useoldForm: () => dispatch(useoldForm()),
    startTest: () => dispatch(startTest())
});

class Uploadnew extends React.Component {
    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);

        this.state={
            name: null,
            questions: null,
            answers: null,
            testData: null,
            info: null,
        }
    }

    handleChange = (ev) => {
        if (ev.target.name === 'name') {
            this.setState({name: ev.target.value})
        }else if (ev.target.name === 'questions') {
            this.setState({questions: ev.target.files[0]})
        }else if (ev.target.name === 'answers') {
            this.setState({answers: ev.target.files[0]})
        }

    };

    handleSubmit = (ev) => {
        ev.preventDefault();
        const formdata = new FormData();
        formdata.append('name', this.state.name);
        formdata.append('questions', this.state.questions);
        formdata.append('answers', this.state.answers);

        fetch('https://cryptic-journey-75247.herokuapp.com/upload', {
            method: 'POST',
            mode: 'cors',
            cache: 'no-cache',
            body: formdata
        }).then(res => {
            return res.json()
        }).then(data =>
        {
            this.setState({info: data});
            this.props.passInfo(data)
        }
        ).then(() => store.dispatch(useoldForm())
        ).catch(err =>  alert('Parse failed. Please use what\'s already there'))
    };

    render(){
        const {classes} = this.props;

        return (
            <div className={classes.root}>
                <div className={classes.upload}>
                    <Typography className={classes.title}>
                        Generate Questions
                    </Typography>

                    <Typography className={classes.subtitle} style={{width: '1000px'}}>
                        Simply by uploading a csv file contains questions,
                        and a csv files with initial sets of answers with grading,
                        this smart tool will help you generate more questions which help students practice more!
                    </Typography>

                    <br />

                    <form className = {classes.uploadSec} onSubmit={(ev) => this.handleSubmit(ev)}>
                        <InputLabel required>Project Name</InputLabel><br />
                        <Input type='text' name = 'name' className={classes.textField} style={{marginTop: '0.7rem', width: '100%'}} onBlur={ev => this.handleChange(ev)} required/>

                        <div style={{marginTop: '2rem'}}>
                            <InputLabel required>Question File</InputLabel><br />
                            <Input name ='questions' type='file' label='File' variant='outlined' style={{width: '100%'}} onChange={ev => this.handleChange(ev)} required />
                        </div>


                        <div style={{marginTop: '2rem'}}>
                            <InputLabel required>Answer File</InputLabel>
                            <br />
                            <Input name ='answers' type='file' label='File' variant='outlined'  style={{width: '100%'}} onChange={ev => this.handleChange(ev)} required />
                        </div>

                        <div style={{textAlign: 'Center'}}>
                            <Button className={classes.button} variant="outlined"
                                    style={{backgroundColor: 'white', marginRight: '0.5rem'}} onClick={this.props.useoldForm}>
                                Use what's already there
                            </Button>
                            <Button type='submit' className={classes.button} style={{marginRight: '0.5rem'}}>
                                Upload
                            </Button>
                        </div>
                    </form>


                </div>

                <br />
                
            </div>
        )
    }

}

Uploadnew.protoTypes = {
    classes: PropTypes.object.isRequired,
};

export default withRoot(compose(
    withStyles(styles, {name: 'Uploadnew'}),
    connect(mapStateToProps, mapDispatchToProps),
)(Uploadnew))