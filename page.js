angular.module('pageModule', [])
        .directive('page', directive)

function directive() {
    return {
        transclude: true,
        replace: true,
        templateUrl: 'page.html',
        link: link,
        scope: {}
    }
}

function link(scope, iElement, attrs, ctrl, transcludeFn) {
    console.log(iElement.html())
    
    // call transclude function, passing in scope
    // this creates a fresh clone of the content to be transcluded
    transcludeFn(scope.$parent.$new(), function (clone) {
        console.log(clone.length)
        console.log(clone)
//        angular.forEach(clone, function(cloneEl){
//            console.log(cloneEl.contents())
//        })
        angular.forEach(clone, function (cloneEl) {
            console.log(cloneEl)
            // only interested in 
            if (cloneEl.nodeType === 1) {
                // get target id
                var targetId = cloneEl.attributes["transclude-to"].value
                // find target element with that id
                var targetIdString = '[transclude-id="' + targetId + '"]'
                var target = iElement.find(targetIdString)
                // append element to target
                if (target.length) {
//                    target.contents().remove()
                    target.append(cloneEl)
                } else {
                    cloneEl.remove()
                    throw new Error('Target not found, specify correct transclude-to attribute')
                }
            } else {
                cloneEl.remove()
            }
        })
//        console.log(clone.length)
//        console.log(clone.parent().html())
    })
    
    console.log(iElement.html())
}
