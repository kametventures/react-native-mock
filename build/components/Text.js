


var _react=require('react');var _react2=_interopRequireDefault(_react);
var _createReactClass=require('create-react-class');var _createReactClass2=_interopRequireDefault(_createReactClass);
var _StyleSheetPropType=require('../propTypes/StyleSheetPropType');var _StyleSheetPropType2=_interopRequireDefault(_StyleSheetPropType);
var _TextStylePropTypes=require('../propTypes/TextStylePropTypes');var _TextStylePropTypes2=_interopRequireDefault(_TextStylePropTypes);
var _NativeMethodsMixin=require('../mixins/NativeMethodsMixin');var _NativeMethodsMixin2=_interopRequireDefault(_NativeMethodsMixin);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{'default':obj};}

var stylePropType=(0,_StyleSheetPropType2['default'])(_TextStylePropTypes2['default']);/**
 * https://github.com/facebook/react-native/blob/master/Libraries/Text/Text.js
 */var Text=(0,_createReactClass2['default'])({
propTypes:{
/**
     * Used to truncate the text with an ellipsis after computing the text
     * layout, including line wrapping, such that the total number of lines
     * does not exceed this number.
     */
numberOfLines:PropTypes.number,
/**
     * Invoked on mount and layout changes with
     *
     *   `{nativeEvent: {layout: {x, y, width, height}}}`
     */
onLayout:PropTypes.func,
/**
     * This function is called on press.
     */
onPress:PropTypes.func,
/**
     * When true, no visual change is made when text is pressed down. By
     * default, a gray oval highlights the text on press down.
     * @platform ios
     */
suppressHighlighting:PropTypes.bool,
style:stylePropType,
/**
     * Used to locate this view in end-to-end tests.
     */
testID:PropTypes.string,
/**
     * Specifies should fonts scale to respect Text Size accessibility setting on iOS.
     * @platform ios
     */
allowFontScaling:PropTypes.bool},

mixins:[_NativeMethodsMixin2['default']],

render:function(){function render(){
return null;
}return render;}()});


module.exports=Text;