import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import withRoot from '../withRoot';

import Olddata from './olddata';
import Uploadnew from './uploadnew';

import { connect } from 'react-redux';
import { uploadForm, useoldForm, startTest } from "../redux/actions";

import compose from 'recompose/compose';


const styles = theme => ({
    root: {
        textAlign: 'center',
        paddingTop: '100px',
        paddingBottom: '50px',
    },

    upload: {
        //display: 'none',
    },

    old: {
        display: 'none',
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

class Upload extends React.Component {
    constructor(props) {
        super(props);

        this.state={
            testData: null,
            info: this.props.info,
        }
    }

    handlePassTestData = (data) => {
        this.setState({testData: data});
        this.props.passTestData_toindex(data)
    };

    handlePassInfo = data => {
        this.setState({info: data});
    };

    render(){
        const {classes} = this.props;

        return (
            <div className={classes.root}>
                {this.props.page === 'uploadPage'?
                    <Uploadnew passInfo = {this.handlePassInfo}/>
                :<Olddata info = {this.state.info} passTestData = {this.handlePassTestData}/>}
            </div>
        )
    }

}

Upload.protoTypes = {
    classes: PropTypes.object.isRequired,
};

export default withRoot(compose(
    withStyles(styles, {name: 'Upload'}),
    connect(mapStateToProps, mapDispatchToProps),
)(Upload))