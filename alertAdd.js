(function () {

    angular.module('alertAddModule', [])
            .directive("alertAdd", directive)
            .controller("AlertAddController", controller)

    function directive() {
        return {
            restrict: 'AE',
            replace: true,
            templateUrl: 'alertAdd.html',
            scope: {
                currentMonth: "@"
            },
            controller: controller,
            controllerAs: 'ctrl',
            bindToController: true,
        }
    }

    function controller(AlertService) {
        var ctrl = this;
        
        // api
        
        ctrl.months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        ctrl.clickAdd = clickAdd
        
        function clickAdd(month, severity, message) {
            var newAlert = {month: month, severity: severity, message: message}
            console.log("Adding new alert:" + JSON.stringify(newAlert))
            AlertService.addAlert(newAlert)
        }
    }

})()