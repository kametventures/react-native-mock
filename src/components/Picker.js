import React from 'react';
import PropTypes from 'prop-types';
import createClass from 'create-react-class';
import createMockComponent from './createMockComponent';

const Picker = createClass({
  propTypes: {
    children: PropTypes.node
  },
  statics: {
    Item: createMockComponent('Picker.Item')
  },
  render() {
    return null;
  }
});

module.exports = Picker;
