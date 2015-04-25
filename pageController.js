(function () {

    angular
        .module("pageControllerModule", [])
        .controller("PageController", pageController);

    function pageController() {
        var ctrl = this;

        ctrl.setSelectedMonths = setSelectedMonths;
        ctrl.setLastSelectedMonth = setLastSelectedMonth;
        ctrl.selectedMonths = [];
        ctrl.lastSelectedMonth = "";
        ctrl.multiMode = true;

        function setSelectedMonths(months) {
            ctrl.selectedMonths = months;
        }

        function setLastSelectedMonth(month) {
            ctrl.lastSelectedMonth = month;
        }
    }
    
})();