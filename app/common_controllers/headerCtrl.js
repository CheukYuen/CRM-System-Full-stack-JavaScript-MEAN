
angular.module('scotchTodo').controller('HeaderController', function($scope, $location){

    //$scope.isActive = function (viewLocation) {
    //    return viewLocation === $location.path();
    //};

    $scope.getClass = function(path) {
        if ($location.path().substr(0, path.length) == path) {
            return "active"
        } else {
            return ""
        }
    }

});






