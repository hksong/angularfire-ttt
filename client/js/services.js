app.service("RoomService", ["$firebaseObject", "$firebaseArray", function($firebaseObject,$firebaseArray){
  return {
    getRoom: function(id){
      var ref = new Firebase("https://radiant-torch-8665.firebaseio.com/rooms/"+id);
      return $firebaseObject(ref);  
    },
    joinRoom: function (id, currentUser) {
      var ref = new Firebase("https://radiant-torch-8665.firebaseio.com/rooms/"+id).child("/users");
      var usersObj = $firebaseObject(ref); //grabbing the users object from the current room
      var user = {};
      var userName = currentUser.password.email.split("@")[0]; //setting their userName for the database in the room 1/11
      usersObj.$loaded() //when all of the data is loaded added thed current user to the room's users and setting their email to the key 
      .then(function (users) {
        users[userName] = true;
        users.$save();
      });
    },
    leaveRoom: function(id, currentUser){
      var userName = currentUser.password.email.split("@")[0];
      var ref = new Firebase("https://radiant-torch-8665.firebaseio.com/rooms/"+id).child("/users").child(userName);
      var usersObj = $firebaseObject(ref); //grabbing the current user from the users object from the current room
      usersObj.$loaded() //loading the specific user from the room
      .then(function (user){
        user.$remove(); //removing the current user from the room 
      });
    },
    createRoom: function (newRoom, currentUser){
      var ref = new Firebase("https://radiant-torch-8665.firebaseio.com/rooms/");
      var rooms = $firebaseArray(ref); //grabbing all the rooms and presenting them into an array
      return rooms.$add(newRoom); //adding the new room to the array
    }
  };
}]);

app.service("UserService", ["$window", function($window){
  return{
    setCurrentUser: function(user){
      $window.localStorage.setItem("user",JSON.stringify(user));
    },
    getCurrentUser: function(){
      return JSON.parse($window.localStorage.getItem("user"));
    }
  };
}]);

app.service("AuthService", ["Auth", "UserService", function(Auth, UserService) {
  return {
    signup: function(inputs) {
      return Auth.$createUser({
        email: inputs.email,
        password: inputs.password
      });
    },
    login: function(inputs) {
      return Auth.$authWithPassword({
        email: inputs.email,
        password: inputs.password
      });
    },
  };
}]);