
import React from 'react';
import createClass from 'create-react-class';

import TouchableWithoutFeedback from './TouchableWithoutFeedback';

const TouchableNativeFeedback = createClass({
  propTypes: {
    ...TouchableWithoutFeedback.propTypes,

    background: PropTypes.object
  },
  statics: {
    SelectableBackground() {},
    SelectableBackgroundBorderless() {},
    Ripple(color, borderless) {}
  },
  render() {
    return null;
  }
});

module.exports = TouchableNativeFeedback;
