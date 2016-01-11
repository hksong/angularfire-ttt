app.service("RoomService", function($firebaseObject, $firebase){
  return {
    getRoom: function(id){
      var ref = new Firebase("https://radiant-torch-8665.firebaseio.com/rooms/"+id);
      return $firebaseObject(ref);  
    },
    joinRoom: function (id, currentUser) {
      var usersRef = new Firebase("https://radiant-torch-8665.firebaseio.com/rooms/").child(id+"/users/");
      var user = {};
      var userName = currentUser.password.email.split("@")[0]; //setting their userName for the database in the room 1/11
      user[userName] = true;
      usersRef.update(user);
    }
  };
});

app.service("UserService", function($window){
  return{
    setCurrentUser: function(user){
      $window.localStorage.setItem("user",JSON.stringify(user));
    },
    getCurrentUser: function(){
      return JSON.parse($window.localStorage.getItem("user"));
    }
  };
});

app.service("AuthService", function(Auth, UserService, $location) {
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
      }).then(function (authData) {
        UserService.setCurrentUser(authData);
        debugger
        $location.path('/rooms');
      });
    }
  };
});