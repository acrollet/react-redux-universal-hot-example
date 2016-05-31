import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import Helmet from 'react-helmet';
import {initialize} from 'redux-form';
import {SurveyForm} from 'components';
import { PricesLoader } from 'components';

@connect(
  () => ({}),
  {initialize})
export default class Survey extends Component {
  static propTypes = {
    initialize: PropTypes.func.isRequired
  }

  state = {
    formSubmitted: false
  }

  handleSubmit = (data) => {
    window.alert('Data submitted! ' + JSON.stringify(data));
    this.props.initialize('survey', {});
    this.setState({formSubmitted: true});
  }

  render() {
    const {formSubmitted} = this.state;
    return (
      <div className="container">
        <h1>Survey</h1>
        <Helmet title="Survey"/>

        <SurveyForm onSubmit={this.handleSubmit}/>

        value of formSubmitted is {JSON.stringify(formSubmitted)}
        <PricesLoader/>
      </div>
    );
  }
}
