goog.module('ats.MainController');

const platform = goog.require('goog.labs.userAgent.platform');

console.log('main-controller.js');

/**
 * A class that handles app-wide functionality.
 * @final
 */
class MainController {
  /**
   * Creates a new LayoutController.
   * @param {!angular.Scope} $scope
   * @ngInject
   */
  constructor($scope) {
    this.ngScope_ = $scope;
  }

  /**
   * Indicates whether or not the current device is an iOS device.
   * @return {boolean} True if the current device is an iOS device, false
   *     otherwise.
   * @private
   */
  isIos_() {
    return platform.isIos();
  }

  /**
   * Indicates whether or not the current device is an Android device.
   * @return {boolean} True if the current device is an Android device, false
   *     otherwise.
   * @private
   */
  isAndroid_() {
    return platform.isAndroid();
  }
}

exports = MainController;