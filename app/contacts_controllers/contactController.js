/**
 * Created by zlin on 12/3/14.
 */
angular.module('scotchTodo').controller('contactController', function ($scope, $http, contactFactory, $modal, cart) {

    //$scope.formData = {};
    $scope.removeCartData = cart.removeAllProduct();
    // when landing on the page, get all todos and show them
    $scope.headers = ["name", "phone", "email"];

    contactFactory.getContacts().success(function (contacts) {
        $scope.contacts = contacts;
    });

    $scope.add = function () {
        var modalInstance = $modal.open({
            templateUrl: 'addContactModal.html',
            controller: 'addContactModalCtrl'
        });
    };


    $scope.view = function (id) {

        var modalInstance = $modal.open({
            templateUrl: 'viewContactModal.html',
            controller: 'viewContactModalCtrl',
            resolve: {
                contact: function () {
                    return contactFactory.getContact(id);
                }
            }
        });
    };


    $scope.edit = function (id) {

        var modalInstance = $modal.open({
            templateUrl: 'editContactModal.html',
            controller: 'editContactModalCtrl',
            resolve: {
                contact: function () {
                    return contactFactory.getContact(id);
                }
            }
        });
    };

    $scope.deleteCon = function (id) {

        var modalInstance = $modal.open({
            templateUrl: 'deleteContactModal.html',
            controller: 'deleteContactModalCtrl',
            resolve: {
                contact: function () {
                    return contactFactory.getContact(id);
                }
            }
        });
    };


});


leonCRM.controller('addContactModalCtrl', function ($scope, $http, $modalInstance, $window, contactFactory) {

    $scope.form = {};


    $scope.addContact = function () {
        contactFactory.addContact($scope.form.add);
        $modalInstance.close($window.location.reload());

    };


    $scope.cancel = function () {
        $modalInstance.dismiss('cancel');
    };

});

leonCRM.controller('viewContactModalCtrl', function ($scope, $http, contact, $modalInstance) {

    $scope.allheaders = ["name", "phone", "email"];
    $scope.contact = contact.data.contact;



    $scope.ordersTotal = 0.00;



    //Calculate grand total
    //Handled at this level so we don't duplicate it across parent controllers
    if ($scope.contact && $scope.contact.shoppingCart) {
        var total = 0.00;
        for (var i = 0; i < $scope.contact.shoppingCart.length; i++) {
            var order = $scope.contact.shoppingCart[i];
            total += order.price * order.count;
        }
        $scope.ordersTotal = total;
    }


    $scope.close = function () {
        $modalInstance.dismiss('cancel');
    };
});


leonCRM.controller('editContactModalCtrl', function ($scope, $http, $modalInstance, $window, contactFactory, contact) {
    $scope.form = {};
    $scope.allheaders = ["name", "phone", "email"];
    $scope.form.edit = contact.data.contact;
    $scope.name = contact.data.contact.name;

    $scope.editContact = function () {
        contactFactory.updateContact(contact.data.contact._id, $scope.form.edit);
        $modalInstance.close($window.location.reload());
    };

    $scope.cancel = function () {
        $modalInstance.dismiss('cancel');
    }
});

leonCRM.controller('deleteContactModalCtrl', function ($scope, $http, $modalInstance, $window, contact, contactFactory) {
    $scope.name = contact.data.contact.name;

    $scope.deleteContact = function () {
        contactFactory.deleteContact(contact.data.contact._id).success(function () {
            $modalInstance.close();
            contactFactory.getContacts().success(function (contacts) {
                return $scope.contacts = contacts;
            });
            $window.location.reload();
        });
    };

    $scope.cancel = function () {
        $modalInstance.dismiss('cancel')
    };


});
