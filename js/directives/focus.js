
eventsApp.directive('focus', function() {
    return function(scope, element) {
        element.focus();
    }
});