/**
 * Created by zlin on 2/19/15.
 */


var dashboardFactory = angular.module('dashboard.services', []);

dashboardFactory.factory('dashboardService', function () {
    function DataService() {
        var maxNumber = 200;

        // API methods
        this.loadData = function(callback) {
            callback({"x":new Date(),"top-1":randomNumber(),"top-2":randomNumber()});
        };

        function randomNumber() {
            return Math.floor((Math.random() * maxNumber) + 1);
        }
    }
    return new DataService();
});