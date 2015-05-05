(function () {

    "use strict";

    angular
            .module('panelModule', [])
            .directive('panel', directive);

    function directive() {
        return {
            replace: true,
            transclude: true,
            templateUrl: 'panel.html',
            scope: {},
            controller: controller,
            controllerAs: 'ctrl',
            bindToController: true,
        };
    }
    
    function controller() {
        var ctrl = this;
        
        ctrl.showBody = true;
        ctrl.toggleBody = toggleBody;
        
        function toggleBody() {
            ctrl.showBody = !ctrl.showBody;
        }
    }


})();
