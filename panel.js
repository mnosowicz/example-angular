(function () {

    angular.module('panelModule', [])
            .directive('panel', directive);

    function directive() {
        return {
            restrict: 'AE',
            replace: true,
            transclude: true,
            templateUrl: 'panel.html',
            scope: {
                heading: '@'
            },
            controller: function() {},
            controllerAs: 'ctrl',
            bindToController: true,
            link: function(scope, iElement, iAttr, ctrl, transcludeFn) {
                var target = iElement.find('div[transclude-id]')
                transcludeFn(scope.$parent, function (clone) {
                     target.empty();
                     target.append(clone);
                })
            }
        };
    }

})();
