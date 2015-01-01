/**
 * Created by zlin on 12/11/14.
 */
angular.module('scotchTodo')
    .constant('dataUrl', 'https://api.parse.com/1/classes/Products')
    .run(function ($http) {
        $http.defaults.headers.common['X-Parse-Application-Id'] = 'BHBNeR7iY2yEXR3tx1djnfEZXVm6SSMv0GhqlvTQ';
        $http.defaults.headers.common['X-Parse-REST-API-Key'] = 'yLGbWU0QCtdVubUfRQGOaOfN88q0BhPMzIHS9exO';
    })
    .controller('sportsStoreCtrl', function ($scope, $http, dataUrl, contactFactory, $routeParams) {

        $scope.data = {};


        var currentCustomerID = $routeParams.contactId;

        //get customer name
        $http.get('/api/contact/' + currentCustomerID)
            .success(function (data) {
                console.log(data.contact.name);


                $scope.currentCustomer = {
                    name: data.contact.name
                };
            })
            .error(function (data) {
                console.log('Error: ' + data);
            });


        //get products
        $http.get(dataUrl)
            .success(function (data) {
                $scope.data.products = data.results;
            })
            .error(function (response) {
                $scope.data.error = response.error || response;
            });


    });