var myApp = angular.module('myApp', []);

myApp.controller('AppCtrl', ['$scope', '$http',
  function($scope, $http){
    console.log("Hello World from controller");

     $http.get('/contactlist').then(function (resp){
       console.log('I got the data i requested');
       $scope.contactlist = resp.data;
       console.log(resp.data)
     });

}]);
