app.controller("AuthCtrl", ["$scope", "Auth", "$location", "UserService", 
  function($scope, Auth, $location, UserService) {
    $scope.createUser = function() {
      $scope.message = null;
      $scope.error = null;

      Auth.$createUser({
        email: $scope.email,
        password: $scope.password
      }).then(function(authDataObj) {
        UserService.setCurrentUser(authDataObj);
        console.log(authDataObj);
        $scope.message = "User created with uid: " + authDataObj.uid;
        $location.path('/rooms');
      }).catch(function(error) {
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


app.controller("RoomsCtrl", ["$scope", "Rooms", "$location", "RoomService", "currentUser",
  function($scope, Rooms, $location, RoomService, currentUser){
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