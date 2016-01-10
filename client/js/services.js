app.service("RoomService", function($firebaseObject, $firebase){
  return{
    getRoom: function(id){
      var ref = new Firebase("https://radiant-torch-8665.firebaseio.com/rooms/"+id);
      return $firebaseObject(ref);  
    },
    joinRoom: function (id, uid) {
      var usersRef = new Firebase("https://radiant-torch-8665.firebaseio.com/rooms/").child(id+"/users/");
      var user = {};
      user[uid] = true;
      usersRef.update(user);
    }
  };
})
.service("UserService", function($window){
  return{
    setCurrentUser: function(user){
      $window.localStorage.setItem("user",user.uid);
    },
    getCurrentUser: function(){
      return $window.localStorage.getItem("user");
    }
  };
});