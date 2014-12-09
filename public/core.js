var scotchTodo = angular.module('scotchTodo', ['ui.bootstrap', 'ngRoute', 'contacts.factory']);
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
    }).when('/testContact', {
            templateUrl: 'views/testContact.html',
            controller: 'testContactCtrl'
        }
    ).otherwise({
            redirectTo: '/contact'
        });
}]);
