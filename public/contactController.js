/**
 * Created by zlin on 12/3/14.
 */
angular.module('scotchTodo').controller('contactController', function ($scope, $http, contactFactory, $modal) {

    //$scope.formData = {};

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


    $scope.view = function (c) {
        var id = c._id;

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


    $scope.edit = function (c) {
        var id = c._id;
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

    $scope.deleteCon = function (c) {
        var id = c._id;
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


scotchTodo.controller('addContactModalCtrl', function ($scope, $http, $modalInstance, $window, contactFactory) {

    $scope.form = {};


    $scope.addContact = function () {
        contactFactory.addContact($scope.form.add);
        $modalInstance.close($window.location.reload());
    };


    $scope.cancel = function () {
        $modalInstance.dismiss('cancel');
    };
});

scotchTodo.controller('viewContactModalCtrl', function ($scope, $http, contact, $modalInstance) {

    $scope.allheaders = ["name", "phone", "email"];
    $scope.contact = contact.data.contact;

    $scope.close = function () {
        $modalInstance.dismiss('cancel');
    };
});


scotchTodo.controller('editContactModalCtrl', function ($scope, $http, $modalInstance, $window, contactFactory, contact) {
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

scotchTodo.controller('deleteContactModalCtrl', function ($scope, $http,$modalInstance, $window, contact, contactFactory) {
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
