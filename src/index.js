/**
 * @fileoverview Entry point for the app. Declares all Angular modules and
 * uses Glue App to conditionally bootstrap the app.
 */
goog.module('index');

const glueCommon = goog.require('glue.ng.common');
const glueApp = goog.require('glue.app');
const glueCarousel = goog.require('glue.ng.carousel');
const gluePagination = goog.require('glue.ng.pagination');
const glueModal = goog.require('glue.ng.modal');
const glueBreakpointMatch = goog.require('glue.ng.mq.breakpointMatch');
const glueAccordion = goog.require('glue.ng.responsive.accordionStatic');
const glueSmoothScroll = goog.require('glue.ng.smoothScroll');
const glueTabby = goog.require('glue.ng.tabby');
const glueZippy = goog.require('glue.ng.zippy');
const glueZippyFacade = goog.require('glue.ng.zippy.facade');
const herculesHeader = goog.require('glue.ng.ui.header');

const MainController = goog.require('ats.MainController');

/** @type {!angular.Module} */
const module = angular.module('app', [
      glueCommon.module.name,
      glueCarousel.module.name,
      gluePagination.module.name,
      glueModal.module.name,
      glueBreakpointMatch.module.name,
      glueAccordion.module.name,
      glueSmoothScroll.module.name,
      glueTabby.module.name,
      glueZippy.module.name,
      glueZippyFacade.module.name,
      herculesHeader.module.name,
    ])
    // Disable modal state service (deep linking) for modals.
    // It adds a nasty '#?modal_active=none' on load.
    .value('glueModalServiceStoreRouteDisable', true)
    .controller('MainController', MainController);

// Conditionally bootstrap the app.
glueApp.bootstrap(module.name);

exports = module;
