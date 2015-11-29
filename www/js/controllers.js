angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout, $auth) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });
  
  $scope.isAuthenticated = function() {
    return $auth.isAuthenticated();
  };


  // Open the login modal
  $scope.login = function(provider) {
    $scope.authenticate(provider);
  };

  $scope.logout = function(){
    $auth.logout();
  }

  $scope.authenticate = function(provider) {
      $auth.authenticate(provider)
        .then(function() {
          console.log("success");
          // $ionicPopup.alert({
          //   title: 'Success',
          //   content: 'You have successfully logged in!'
          // })
        })
        .catch(function(response) {
          // $ionicPopup.alert({
          //   title: 'Error',
          //   content: response.data ? response.data || response.data.message : response
          // })
        console.log('failed');

        });
    };
})

.controller('PlaylistsCtrl', function($scope) {
  $scope.playlists = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
});
