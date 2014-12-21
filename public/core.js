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
    }).when('/store/:contactName', {
        templateUrl: 'views/store/store.html',
        controller: 'sportsStoreCtrl'
    }).when('/store', {
        templateUrl: 'views/store/store.html',
        controller: 'sportsStoreCtrl'
    }).when('/products', {
        templateUrl: 'views/store/productList.html'
    }).when('/checkout', {
        templateUrl: 'views/store/checkoutSummary.html',
        controller: 'checkoutController'
    }).when('/placeOrder', {
        templateUrl: 'views/store/placeOrder.html',
        controller: 'orderController'
    }).otherwise({
        redirectTo: '/contact'
    });
}]);
