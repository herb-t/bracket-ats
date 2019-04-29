/**
 * @fileoverview Detects app support for minimum browser requirements and
 * allows developer to conditionally bootstrap the app.
 */
goog.module('detect');

const glueApp = goog.require('glue.app');
const glueDetect = goog.require('glue.detect');
const glueDetectFlexbox = goog.require('glue.detect.flexbox');
const glueDetectTouch = goog.require('glue.detect.touch');

glueDetect.decorateDom(glueDetectFlexbox);
glueDetect.decorateDom(glueDetectTouch);

glueApp.blacklist({
  // Set this to the highest level of IE you don't support.
  // AngularJS 1.5x doesn't support 8 or lower.
  // Glue 16+ doesn't support IE 10 or lower.
  'ie': 10,
  'android': 4,
});
