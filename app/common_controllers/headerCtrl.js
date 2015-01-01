
angular.module('scotchTodo').controller('HeaderController', function($scope, $location){

    $scope.isActive = function (viewLocation) {
        return viewLocation === $location.path();
    };

});






