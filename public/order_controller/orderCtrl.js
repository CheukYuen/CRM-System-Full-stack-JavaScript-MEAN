/**
 * Created by zlin on 12/28/14.
 */
angular.module('scotchTodo').controller('orderController', function ($scope, contactFactory) {

    contactFactory.getContacts().success(function (contacts) {

        $scope.customers = contacts;

    });



});