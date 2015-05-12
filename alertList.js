(function () {

    angular
        .module('alertListModule', [])
        .directive("alertList", directive)
        .controller("AlertListController", controller);

    function directive() {
        return {
            templateUrl: 'alertList.html',
            controller: 'AlertListController',
            controllerAs: 'ctrl',
            scope: {
                months: '='
            },
            bindToController: true            
        };
    }

    function controller(AlertService) {
        var ctrl = this;

        ctrl.filterAlerts = filterAlerts;
        ctrl.hasAlerts = hasAlerts;
        ctrl.hasMonths = hasMonths;

        function filterAlerts(months) {
            AlertService.updateSelectedMonths(months);
            return AlertService.filteredAlerts;
        }

        function hasAlerts() {
            return filterAlerts(ctrl.months).length > 0;
        }

        function hasMonths() {
            return ctrl.months.length > 0;
        }

    }

})();