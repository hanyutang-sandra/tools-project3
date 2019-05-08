import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import withRoot from '../withRoot';

import { connect } from 'react-redux';
import {uploadForm, useoldForm, startTest} from "../redux/actions";

import compose from 'recompose/compose';
import store from "../redux/store";

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

    uploadSec: {
        display: 'inline-block',
        width: '500px',
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

class Olddata extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            info: this.props.info,
            testData: null,
        }
    }

    handleStartTest = () => {
        const formdata = new FormData();
        formdata.append('name', this.props.info.name);
        formdata.append('id', this.props.info.start);
        formdata.append('type', 'MC');

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
            () => store.dispatch(startTest())
        ).catch(err =>  alert('Generate failed. Please upload new files.'))
    };

    render() {
        const {classes} = this.props;

        return (
            <div className={classes.root}>
                <div className={classes.old}>
                    <Typography className={classes.title}>
                        Now in Database
                    </Typography>

                    <br/>

                    <Typography className={classes.subtitle} style={{width: '1000px'}}>
                        {this.props.info.name}
                    </Typography>

                    <br/>

                    <div>
                        <Button className={classes.button} variant="outlined"
                                style={{backgroundColor: 'white', marginRight: '0.5rem'}} onClick={this.props.uploadForm}>
                            Upload New
                        </Button>
                        <Button className={classes.button} style={{marginRight: '0.5rem'}} onClick={() => this.handleStartTest()}>
                            Generate
                        </Button>

                    </div>

                    <br />

                    <Typography className={classes.authors}>
                        © 2019. A Work Crafted by Jiasi Tan & Hanyu Tang
                    </Typography>
                </div>
            </div>
        )
    }
}

Olddata.protoTypes = {
    classes: PropTypes.object.isRequired,
};

export default withRoot(compose(
    withStyles(styles, {name: 'Olddata'}),
    connect(mapStateToProps, mapDispatchToProps),
)(Olddata))


