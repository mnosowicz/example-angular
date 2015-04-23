(function () {

    angular.module('panelModule', [])
            .directive('panel', directive)
            .controller('PanelController', controller)

    function directive() {
        return {
            restrict: 'AE',
            replace: true,
            transclude: true,
            templateUrl: 'panel.html',
            scope: {
                heading: '@'
            },
            controller: controller,
            controllerAs: 'ctrl',
            bindToController: true,
        }
    }
    
    function controller() {
//        var ctrl = this;
    }

})()
