app.factory("Auth", ["$firebaseAuth",
  function($firebaseAuth) {
    var ref = new Firebase("https://radiant-torch-8665.firebaseio.com/");
    return $firebaseAuth(ref);
  }
]);

app.factory("Rooms", ["$firebaseArray",
  function($firebaseArray) {
    var ref = new Firebase("https://radiant-torch-8665.firebaseio.com/rooms");

    return $firebaseArray(ref);
  }
]);