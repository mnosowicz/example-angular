angular.module('panelModule', [])

.directive("panel", function() {
    return {
        restrict: 'AE',
        replace: true,
        templateUrl: 'panel.html',
        scope: {
            heading: '@'
        },
        transclude: true,
        controller: function() {
            var vm = this;
        },
        controllerAs: 'ctrl',
        bindToController: true,
    }
});