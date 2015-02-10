//this is our angular app
var myContactApp = angular.module('ContactApp',['ui.bootstrap','ngRoute']);

myContactApp.config(['$routeProvider','$locationProvider',function($routeProvider,$locationProvider){
  console.log('config');
    //no more #!
  $locationProvider.html5Mode(true);

    //define routes
  $routeProvider
  .when('/',{
    templateUrl:'/views/home.html',
    controller:'HomeCtrl'
  })
  .when('/contact/new',{
    templateUrl:'/views/contact/new.html',
    controller:'ContactNewCtrl'
  })
  .when('/contact/:id',{
    templateUrl:'/views/contact/show.html',
    controller:'ContactShowCtrl'
  })

}])