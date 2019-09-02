var app = angular.module('eventApp', []);

app.controller('main', function($scope){ 

    // Start as not visible but when button is tapped it will show as true 

        $scope.visible = false;

    // Create the array to hold the list of events

        $scope.events = [];

    // Create the function to push the data into the "events" array

    $scope.newEvent = function(){

        $scope.events.push({name:$scope.name,desc:$scope.desc,startsAt:$scope.startsAt,endsAt:$scope.endsAt,location:$scope.location,participantTeam:$scope.participantTeam});

        $scope.name = '';
        $scope.desc = '';
		$scope.startsAt = '';
		$scope.endsAt = '';
		$scope.location = '';
		$scope.participantTeam = '';
    };
});




app.directive('datetimez', function() {
    return {
        restrict: 'A',
        require : 'ngModel',
        link: function(scope, element, attrs, ngModelCtrl) {
          element.datetimepicker({
            dateFormat:'dd-MM-yyyy hh:mm',
  
          }).on('changeDate', function(e) {
            ngModelCtrl.$setViewValue(e.date);
            scope.$apply();
          });
        }
    };
});
