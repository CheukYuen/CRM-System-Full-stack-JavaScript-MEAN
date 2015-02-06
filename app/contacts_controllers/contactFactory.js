/**
 * Created by zlin on 12/4/14.
 */
var contactFactory = angular.module('contacts.factory', []);

contactFactory.factory('contactFactory', ['$http',function ($http) {
    return {
        addContact: function (contact) {
            return $http.post('/api/contact/', contact);
        },
        getContacts: function () {
            return $http.get('/api/contact/');
        },
        getContact: function (id) {
            return $http.get('/api/contact/' + id);
        },
        updateContact: function (id, contact) {
            return $http.put('/api/contact/' + id, contact);
        },
        deleteContact: function (id) {
            return $http.delete('/api/contact/' + id);
        },
        contactId: function(id){
            return $http.get('/api/contact/' + id).data.contact._id;
        }
        //addOrder: function(order){
        //    return $http.put('/api/contact' + id, o);
        //}
    }
}]);