app.controller("AuthCtrl", ["$scope", "Auth", "$location", "UserService", "AuthService",
  function($scope, Auth, $location, UserService, AuthService) {
    $scope.createUser = function() {
      $scope.message = null;
      $scope.error = null;
      var inputs = {
        email: $scope.email,
        password: $scope.password
      };
      
      AuthService.signup(inputs)
      .then(function() {
        AuthService.login(inputs)
        .catch(function(error) {
          $scope.error = error;
        });
      })
      .catch(function(error) {
        $scope.error = error;
      });
    };

    $scope.removeUser = function() {
      $scope.message = null;
      $scope.error = null;

      Auth.$removeUser({
        email: $scope.email,
        password: $scope.password
      }).then(function() {
        $scope.message = "User removed";
      }).catch(function(error) {
        $scope.error = error;
      });
    };
  }
]);

app.controller("LoginCtrl", ["$scope", "$location", "UserService", "AuthService",
  function($scope, $location, UserService, AuthService) {
    $scope.login = function() {
      $scope.message = null;
      $scope.error = null;
      
      AuthService.login({
        email: $scope.email,
        password: $scope.password
      }).catch(function (error) {
        $scope.error = error;
      });
    };
  }]);


app.controller("RoomsCtrl", ["$scope", "Rooms", "$location", "RoomService", "currentUser",
  function($scope, Rooms, $location, RoomService, currentUser){
    Rooms.$loaded().then(function (rooms) {
      
      if (!rooms.length)
      {
        rooms.$add({name:"default"});
      }
    });
    $scope.rooms = Rooms;
    $scope.currentUser = currentUser;
    $scope.joinRoom = function(roomId, user){
      RoomService.joinRoom(roomId,user);
      $location.path("/rooms/"+roomId);
    };
  }]);

app.controller("RoomCtrl", ["$scope", "Rooms", "$location",
  function($scope, Rooms, $location){
    $scope.rooms = Rooms;

    $scope.rooms.$loaded(function() {
      if ($scope.rooms.length === 0) {
        $scope.rooms.$add({
          name: "defaultRoom",
        });
      }
      else
      {
        console.log("hi");
      }
    });
  }]);

app.controller("RoomCtrl", function($scope, room){
  $scope.room = room;
});