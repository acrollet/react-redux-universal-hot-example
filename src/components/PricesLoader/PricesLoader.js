import React, {Component} from 'react';

export default class PricesLoader extends Component {

  render() {
    console.log(this.props.formData);
    return (
      <div className="prices-loader">
        This is the prices loader...
      </div>
    );
  }
}

PricesLoader.propTypes = {
  formData: React.PropTypes.object,
};
