var scotchTodo = angular.module('scotchTodo', ['ui.bootstrap', 'ngRoute', 'contacts.factory', 'customFilters', 'cart']);

scotchTodo.config(['$routeProvider', function ($routeProvider) {

    $routeProvider.when('/todo', {
        templateUrl: 'views/todo.html',
        controller: 'todoController'
    }).when('/contact', {
        templateUrl: 'views/contact.html',
        controller: 'contactController'
    }).when('/modal', {
        templateUrl: 'views/modal.html',
        controller: 'ModalDemoCtrl'
    }).when('/store/:contactId', {
        templateUrl: 'views/store/store.html',
        controller: 'sportsStoreCtrl'
    }).when('/products', {
        templateUrl: 'views/store/productList.html'
    }).when('/checkout/:contactId', {
        templateUrl: 'views/store/checkoutSummary.html',
        controller: 'checkoutController'
    }).when('/orders', {
        templateUrl: 'views/orders/orders.html',
        controller: 'orderController'
    }).when('/complete', {
        templateUrl: 'views/store/orderComplete.html'

    }).when('/inventory', {
        templateUrl: 'views/inventory/inventory.html',
        controller: 'sportsStoreCtrl'
    }).otherwise({
        redirectTo: '/contact'
    });
}]);



