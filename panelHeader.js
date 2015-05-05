(function () {

    "use strict";

    angular
            .module('panelHeaderModule', [])
            .directive('panelHeader', directive);

    function directive() {
        return {
            require: '^panel',
//            replace: true,
            transclude: true,
            templateUrl: 'panelHeader.html',
            scope: {},
            link: function(scope, iElement, iAttributes, controller) {
//                console.log("panelHeader link function")
                scope.ctrl = controller;
            }
        };
    }

})();
