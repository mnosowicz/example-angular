(function () {
    
    "use strict";

    angular.module('pageModule', [])
            .directive('page', directive);

    function directive() {
        return {
            transclude: true,
            replace: true,
            templateUrl: 'page.html',
            link: link,
            scope: {}
        };
    }

    function link(scope, iElement, iAttributes, controller, transcludeFn) {
        transcludeFn(function (clone, transcludeScope) {
            angular.forEach(clone, function (cloneEl) {
                // only interested in element nodes with a 'layout' attribute
                if (cloneEl.nodeType === 1 && cloneEl.attributes["layout"]) {
                    // find element with matching 'layout' value
                    var targetId = cloneEl.attributes["layout"].value;
                    var target = iElement.find("#" + targetId);
                    // append if found
                    if (target.length) {
                        target.append(cloneEl);
                    } else {
                        cloneEl.remove();
                        throw new Error('Target not found, specify correct layout attribute');
                    }
                } else {
                    cloneEl.remove();
                }
            });
        });
    }

})();