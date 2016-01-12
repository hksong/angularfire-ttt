app.controller("AuthCtrl", ["$scope", "Auth", "$location", "UserService", "AuthService",
  function ($scope, Auth, $location, UserService, AuthService) {
    $scope.createUser = function (inputs) {
      $scope.message = null;
      $scope.error = null;
      
      AuthService.signup(inputs)
      .then(function () {
        AuthService.login(inputs)
        .then(function (authData) {
          UserService.setCurrentUser(authData);
          $location.path('/rooms');
        })
        .catch(function (error) {
          $scope.error = error;
        });
      })
      .catch(function (error) {
        $scope.error = error;
      });
    };

    $scope.removeUser = function () {
      $scope.message = null;
      $scope.error = null;

      Auth.$removeUser({
        email: $scope.email,
        password: $scope.password
      }).then(function () {
        $scope.message = "User removed";
      }).catch(function (error) {
        $scope.error = error;
      });
    };
  }
]);

app.controller("LoginCtrl", ["$scope", "$location", "UserService", "AuthService",
  function ($scope, $location, UserService, AuthService) {
    $scope.login = function (inputs) {
      $scope.message = null;
      $scope.error = null;
      
      AuthService.login(inputs)
      .then(function (authData) {
        UserService.setCurrentUser(authData);
        $location.path('/rooms');
      })
      .catch(function (error) {
        $scope.error = error;
      });
    };
  }
]);


app.controller("RoomsCtrl", ["$scope", "Rooms", "$location", "RoomService", "currentUser",
  function ($scope, Rooms, $location, RoomService, currentUser){
    $scope.rooms = Rooms;
    $scope.currentUser = currentUser;
    $scope.joinRoom = function (roomId, user){
      RoomService.joinRoom(roomId,user);
      $location.path("/rooms/"+roomId);
    };
    $scope.createRoom = function(room, currentUser){
      RoomService.createRoom(room, currentUser) //returns a promise
      .then(function (room) {
        RoomService.joinRoom(room.key(), currentUser); //resolving the promise then updating the database to joining that room
        $location.path("/rooms/"+room.key()); //redirecting the room
      });
    };
  }
]);

app.controller("RoomCtrl", ["$scope", "Rooms", "$location", "RoomService", "room", "currentUser",
  function ($scope, Rooms, $location, RoomService, room, currentUser) {
    $scope.room = room;
    $scope.leaveRoom = function (){
      RoomService.leaveRoom(room.$id, currentUser);
      $location.path("/rooms");
    };
  }
]);




