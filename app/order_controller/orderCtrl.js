/**
 * Created by zlin on 12/28/14.
 */
leonCRM.controller('orderController', function ($scope, contactFactory) {

    contactFactory.getContacts().success(function (contacts) {

        $scope.customers = contacts;

    });



});