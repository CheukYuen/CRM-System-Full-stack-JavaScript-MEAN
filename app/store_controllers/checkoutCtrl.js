/**
 * Created by zlin on 12/15/14.
 */
angular.module('scotchTodo').controller('checkoutController', function ($http, $scope, cart, $routeParams, contactFactory) {


    $scope.currentCustomer = {
        contactId: $routeParams.contactId
    };


    var currentCustomerID = $routeParams.contactId;



    $scope.cartData = cart.getProducts();


    $http.get('/api/contact/' + currentCustomerID)
        .success(function (data) {

            //$scope.cartData = data.contact.shoppingCart;
        });

    $scope.placeOrder = function () {


        $http.get('/api/contact/' + currentCustomerID)
            .success(function (data) {

                //data.contact.orders = carData;
                //console.error(data.contact.shoppingCart);

               var localCartData = cart.getProducts();
                for (var i = 0; i < localCartData.length; i++) {
                    data.contact.shoppingCart.push(localCartData[i]);
                    //data.contact.orders.order.push(localCartData[i]);

                }


                //console.error(data.contact.shoppingCart);

                $http.put('/api/contact/' + currentCustomerID, data.contact)
                    .success(function () {

                    })
                    .error(function (data) {
                        console.log('Error: ' + data);
                    });

            })
            .error(function (data) {
                console.log('Error: ' + data);
            });


    };


    $scope.total = function () {
        var total = 0;
        for (var i = 0; i < $scope.cartData.length; i++) {
            total += ($scope.cartData[i].price * $scope.cartData[i].count);
        }
        return total;
    };
    $scope.remove = function (id) {
        cart.removeProduct(id);
    };


});
