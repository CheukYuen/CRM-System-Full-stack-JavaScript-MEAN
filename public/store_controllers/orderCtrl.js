/**
 * Created by zlin on 12/16/14.
 */
angular.module('scotchTodo').controller('orderController', function ($scope, $http, contactFactory) {


    $scope.headers = ["name", "phone", "email"];

    contactFactory.getContacts().success(function (contacts) {
        $scope.contacts = contacts;
        //$scope.items = contacts;
        //
        //$scope.selected = {
        //    item: $scope.items[0]
        //};

        $scope.selected = {
            contact: $scope.contacts[0]
        };


    });



});