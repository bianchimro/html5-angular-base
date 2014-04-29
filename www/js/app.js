(function(){
    'use strict';

    var angularApp = angular.module('AngularApp', ['ngRoute']);

    /* example configuration of http provider for cross origin requests */
    /*
    angularApp.config(['$httpProvider', function($httpProvider){
        $httpProvider.defaults.useXDomain = true;
        $httpProvider.defaults.withCredentials = true;
        delete $httpProvider.defaults.headers.common['X-Requested-With'];
    }]);
    */

    
    // example interpolator configuration
    /*
    angularApp.config(function($interpolateProvider) {
        //$interpolateProvider.startSymbol('[{[');
        //$interpolateProvider.endSymbol(']}]');
    })
    */



}());