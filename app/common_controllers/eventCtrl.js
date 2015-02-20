/**
 * Created by zlin on 2/19/15.
 */

leonCRM.controller('eventCtrl', function ($scope) {

    $scope.events = [
        { id:1, text:"Task A-12458",
            start_date: new Date(2015, 2, 15),
            end_date: new Date(2015, 2, 16) },
        { id:2, text:"Task A-83473",
            start_date: new Date(2015, 2, 22 ),
            end_date: new Date(2015, 2, 24 ) }
    ];

    $scope.scheduler = { date : new Date() };


});