(function () {

    "use strict";

    angular
            .module('panelBodyModule', [])
            .directive('panelBody', directive);

    function directive() {
        return {
            transclude: true,
            require: '^panel',
            templateUrl: 'panelBody.html',
            scope: {},
            link: link
        };
    }
    
    function link(scope, iElement, iAttributes, controller) {
//        console.log("panelBody link function")
        scope.ctrl = controller;
    }

})();
