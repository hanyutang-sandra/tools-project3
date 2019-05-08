import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import start from '../media/start.png';
import loading from '../media/loading.png';
import withRoot from '../withRoot';

import { connect } from 'react-redux';
import { startApp } from "../redux/actions";

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

    image: theme.overrides.image,

    button: theme.overrides.button,

    authors: theme.overrides.authors
});



const mapStateToProps = state => ({
    page: state.changePage.page
});

const mapDispatchToProps = dispatch => ({
    startApp: () => dispatch(startApp())
});


class Cover extends React.Component {
    constructor(props){
        super(props);

        this.state= {
            info: null,
            loading: false,
        }

    };

    handleInfo = () => {
        this.setState({loading: true});
        fetch('https://cryptic-journey-75247.herokuapp.com/info', {
            method: 'GET',
            mode: 'cors',
            cache: 'no-cache',
        }).then(res => {
            return res.json()
        }).then(data =>
        {
            this.setState({info: data, loading: false},
            this.props.passInfo(data))
        }).then(
            () => store.dispatch(startApp())
        ).catch(
            err =>  {
                alert('Something is wrong');
                this.setState({loading: false})
            }
        )};


    render() {
        const {classes} = this.props;

        return (
            <div className={classes.root} style={this.props.style}>
                <Typography className={classes.title}>
                    {this.state.loading === true? "Fetching data. Please wait." : "Hi, Welcome to SmartTest!"}
                </Typography>

                <br />

                <Typography className={classes.subtitle} style={{width: '600px'}}>
                    {this.state.loading === true? ""
                        : " SmartTest is a smart tool for teachers to easily generate tests for students leveraging students’ answers. Try it now! "}

                </Typography>

                <br />

                <div className={classes.image}>
                    <img src={this.state.loading === true? loading: start}
                         alt='Display' />
                </div>

                <br />


                <Button className={classes.button}
                        onClick={this.state.loading === true? null: () => this.handleInfo()}>
                    Start
                </Button>


                <br />

                <Typography className={classes.authors}>
                    © 2019. A Work Crafted by Jiasi Tan & Hanyu Tang
                </Typography>
            </div>
        )
    }
}

Cover.protoTypes = {
    classes: PropTypes.object.isRequired,
};


export default withRoot(compose(
    withStyles(styles, {name: 'Cover'}),
    connect(mapStateToProps, mapDispatchToProps),
)(Cover))