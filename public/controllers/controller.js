var myApp = angular.module('myApp', []);

myApp.controller('AppCtrl', ['$scope', '$http',
  function($scope, $http){
    console.log("Hello World from controller");

  var refresh = function(){
     $http.get('/contactlist').then(function (resp){
       console.log('I got the data i requested');
       $scope.contactlist = resp.data;
       $scope.contact = {};
       console.log(resp.data);
     });
  };

  refresh();

     $scope.addContact = function() {
       console.log('i made a post request, here is the data', $scope.contact);
       $http.post('/contactlist', $scope.contact).then(function(resp){
         console.log(resp);
         refresh();
       });
     };
}]);
