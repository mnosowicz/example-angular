(function () {

    angular
        .module('monthPickerModule', [])
        .directive("monthPicker", directive)
        .controller("MonthPickerController", controller);

    function directive() {
        return {
            restrict: 'AE',
            replace: true,
            templateUrl: 'monthPicker.html',
            scope: {
                multi: '@?',
                selectedMonths: '&',
                lastSelectedMonth: '&'
            },
            controller: controller,
            controllerAs: 'ctrl',
            bindToController: true
        };
    }

    function controller() {
        var ctrl = this;

        ctrl.isSelected = isSelected;
        ctrl.months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        ctrl.multi = 'false';
        ctrl.selected = [];
        ctrl.lastSelected = "";
        ctrl.selectMonth = selectMonth;

        function isSelected(month) {
            return ctrl.selected.indexOf(month) > -1;
        }

        function selectMonth(month) {
            if (isMultiMode()) {
                if (isSelected(month)) {
                    var index = ctrl.selected.indexOf(month);
                    ctrl.selected.splice(index, 1);
                } else {
                    ctrl.selected.push(month);
                    ctrl.lastSelected = month;
                }
            } else {
                ctrl.selected = [];
                ctrl.selected.push(month);
                ctrl.lastSelected = month;
            }
            selectedMonthsCallback();
            lastSelectedMonthCallback();
        }

        function isMultiMode() {
            return ctrl.multi === 'true';
        }

        function selectedMonthsCallback() {
            ctrl.selectedMonths({'months': ctrl.selected});
        }

        function lastSelectedMonthCallback() {
            ctrl.lastSelectedMonth({'month': ctrl.lastSelected});
        }
    }

})();