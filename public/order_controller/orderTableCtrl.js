/**
 * Created by zlin on 12/28/14.
 */
angular.module('scotchTodo').controller('orderChildController', function($scope){




    $scope.ordersTotal = 0.00;



    //Calculate grand total
    //Handled at this level so we don't duplicate it across parent controllers
    if ($scope.customer && $scope.customer.shoppingCart) {
        var total = 0.00;
        for (var i = 0; i < $scope.customer.shoppingCart.length; i++) {
            var order = $scope.customer.shoppingCart[i];
            total += order.price * order.count;
        }
        $scope.ordersTotal = total;
    }


});