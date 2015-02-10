myContactApp.controller('HomeCtrl',['$scope','$http','$modal',function($scope,$http,$modal){
  // $scope.name = "Lenny";
  //need to call back to our server to get data add http
  //1st line not necessary but good practice
  $scope.contacts = [];

  $http.get('/.api/contact').success(function(data){
    $scope.contacts = data;

  });
  }]);