myContactApp.controller('ContactNewCtrl',['$scope','$http','$routeParams','$location',function($scope,$http,$routeParams,$location){
  $scope.createContact=function(){

    $scope.alert=false;

    var data = {
      firstName:$scope.firstName,
      lastName:$scope.lastName,
      email:$scope.email,
      addressStreet:$scope.addressStreet,
      addressCity:$scope.addressCity,
      addressState:$scope.addressState,
      addressZip:$scope.addressZip,
      phone:$scope.phone,
      notes:$scope.notes,
      company:$scope.company
    };
    $http.contact('/.api/contact',data).success(function(data){
      $scope.alert="Your contact has been created.";
      $scope.firstName="";
      $scope.lastName="";
      $scope.email="";
      $scope.addressStreet="";
      $scope.addressCity="";
      $scope.addressState="";
      $scope.addressZip="";
      $scope.phone="";
      $scope.notes="";
      $scope.company="";
      }])
    }).error(function(err){
      alert(err);
    })
  }
}]);