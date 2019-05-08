import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Cover from './cover';
import Upload from "./upload";
import Test from "./test";
import End from "./end";
import withRoot from '../withRoot';

import { connect } from 'react-redux';

import compose from 'recompose/compose';


const styles = theme => ({
    Cover: {
    }
});

const mapStateToProps = state => ({
    page: state.changePage.page
});


class Page extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            info: null,
            testData: null,
        }
    };

    handlePassInfo = data => {
        this.setState({
            info: data
        })
    };

    handlePassTestData = data => {
        this.setState({
           testData: data
        });
    };

    render () {
        const { classes } = this.props;

        return (
            <div className={classes.root}>
                {this.props.page === 'coverPage'?
                    <Cover passInfo = {this.handlePassInfo} />
                    : null
                }
                {this.props.page === 'olddataPage' || this.props.page === 'uploadPage'?
                    <Upload info = {this.state.info}  passTestData_toindex = {this.handlePassTestData}/>
                    : null
                }
                {this.props.page === 'testPage' || this.props.page === 'feedbackPage'? <Test testData = {this.state.testData} /> : null}

                {this.props.page === 'endPage'? <End />: null}
            </div>
        )
    }

}

Page.protoTypes = {
    classes: PropTypes.object.isRequired,
};

export default withRoot(compose(
    withStyles(styles, {name: 'Page'}),
    connect(mapStateToProps),
)(Page))