import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import end from '../media/end.png';
import withRoot from '../withRoot';

import { connect } from 'react-redux';
import { startApp, backHome } from "../redux/actions";

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


class End extends React.Component {
    constructor(props){
        super(props);

        this.state= {
        }

    };


    render() {
        const {classes} = this.props;

        return (
            <div className={classes.root} style={this.props.style}>
                <Typography className={classes.title}>
                    Congratulations!
                </Typography>

                <br />

                <Typography className={classes.subtitle} style={{width: '600px'}}>
                    You have finished the practice! Good luck on learning!
                </Typography>

                <br />

                <div className={classes.image}>
                    <img src={end} alt='Display' />
                </div>

                <br />


                <Button className={classes.button} onClick={() => store.dispatch(backHome())}>
                    Back to home page
                </Button>


                <br />

                <Typography className={classes.authors}>
                    © 2019. A Work Crafted by Jiasi Tan & Hanyu Tang
                </Typography>
            </div>
        )
    }
}

End.protoTypes = {
    classes: PropTypes.object.isRequired,
};


export default withRoot(compose(
    withStyles(styles, {name: 'End'}),
    connect(mapStateToProps, mapDispatchToProps),
)(End))