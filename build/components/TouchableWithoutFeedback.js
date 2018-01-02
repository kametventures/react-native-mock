


var _react=require('react');var _react2=_interopRequireDefault(_react);
var _createReactClass=require('create-react-class');var _createReactClass2=_interopRequireDefault(_createReactClass);
var _EdgeInsetsPropType=require('../propTypes/EdgeInsetsPropType');var _EdgeInsetsPropType2=_interopRequireDefault(_EdgeInsetsPropType);
var _View=require('./View');var _View2=_interopRequireDefault(_View);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{'default':obj};}/**
 * https://github.com/facebook/react-native/blob/master/Libraries/Components/Touchable/TouchableWithoutFeedback.js
 */var TouchableWithoutFeedback=(0,_createReactClass2['default'])({
propTypes:{
accessible:PropTypes.bool,
accessibilityComponentType:PropTypes.oneOf(_View2['default'].AccessibilityComponentType),
accessibilityTraits:PropTypes.oneOfType([
PropTypes.oneOf(_View2['default'].AccessibilityTraits),
PropTypes.arrayOf(PropTypes.oneOf(_View2['default'].AccessibilityTraits))]),

/**
     * If true, disable all interactions for this component.
     */
disabled:PropTypes.bool,
/**
     * Called when the touch is released, but not if cancelled (e.g. by a scroll
     * that steals the responder lock).
     */
onPress:PropTypes.func,
onPressIn:PropTypes.func,
onPressOut:PropTypes.func,
/**
     * Invoked on mount and layout changes with
     *
     *   `{nativeEvent: {layout: {x, y, width, height}}}`
     */
onLayout:PropTypes.func,

onLongPress:PropTypes.func,

/**
     * Delay in ms, from the start of the touch, before onPressIn is called.
     */
delayPressIn:PropTypes.number,
/**
     * Delay in ms, from the release of the touch, before onPressOut is called.
     */
delayPressOut:PropTypes.number,
/**
     * Delay in ms, from onPressIn, before onLongPress is called.
     */
delayLongPress:PropTypes.number,
/**
     * When the scroll view is disabled, this defines how far your touch may
     * move off of the button, before deactivating the button. Once deactivated,
     * try moving it back and you'll see that the button is once again
     * reactivated! Move it back and forth several times while the scroll view
     * is disabled. Ensure you pass in a constant to reduce memory allocations.
     */
pressRetentionOffset:_EdgeInsetsPropType2['default'],
/**
     * This defines how far your touch can start away from the button. This is
     * added to `pressRetentionOffset` when moving off of the button.
     * ** NOTE **
     * The touch area never extends past the parent view bounds and the Z-index
     * of sibling views always takes precedence if a touch hits two overlapping
     * views.
     */
hitSlop:_EdgeInsetsPropType2['default']},

render:function(){function render(){
return null;
}return render;}()});


module.exports=TouchableWithoutFeedback;