var leonCRM = angular.module('scotchTodo', ['ui.bootstrap', 'ngRoute', 'contacts.factory', 'customFilters', 'telFilter','cart']);

leonCRM.config(['$routeProvider', function ($routeProvider) {

    $routeProvider.when('/contact', {
        templateUrl: 'views/contact.html',
        controller: 'contactController'
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
    }).when('/signin', {
        templateUrl: 'views/signin.html'
    }).when('/dashboard', {
        templateUrl: 'views/dashboard.html'
    }).when('/event', {
        templateUrl: 'views/event.html'
    }).otherwise({
        redirectTo: '/signin'
    });
}]);



