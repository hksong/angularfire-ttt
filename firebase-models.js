
// rooms contains only meta info about each room
// stored under the room's unique ID

// INITIAL STATE

{"rooms": {                      // /rooms/
  "one": {                      // /rooms/one
    "name": "room alpha",       // /rooms/one/name
    "cardsLeft": {
      "res": {
        "h": 30,
        "w": 30,
        "l": 30,
        "o": 30,
        "b": 30
      },
      "dev": {
        // ...
      }
    },

    "players": {                  // /rooms/one/players/
      "user_one": {             // /rooms/one/players/user_one
        "username": "mchen",
        "points": 0,
        "settlement": 5,
        "city": 4,
        "road": 15,
        "color": "red",
        "intersections_owned": {
          "i1": 1,           // structure type    1:settlement
          "i2": 2
          }
        },
        "trade in ratios": {
          "l": 3,
          "h": 3,
          "w": 2,
          "o": 3,
          "b": 3
        },
        "cards": {                // /rooms/one/players/user_one/cards
          "res": {
            "h": 0,
            "w": 0,
            "l": 0,
            "o": 0,
            "b": 0
          },
          "dev": {
            // ...
          }
        }
      },

      "user_two": {             // /rooms/one/players/user_one
        "username": "mchen",
        "points": 0,
        "settlement": 5,
        "city": 4,
        "road": 15,
        "color": "red",
        "cards": {                // /rooms/one/players/user_one/cards
          "res": {
            "h": 0,
            "w": 0,
            "l": 0,
            "o": 0,
            "b": 0
          },
          "dev": {
            // ...
          }
        }
      },

      "user_three": {             // /rooms/one/players/user_one
        "username": "mchen",
        "points": 0,
        "settlement": 5,
        "city": 4,
        "road": 15,
        "color": "red",
        "cards": {                // /rooms/one/players/user_one/cards
          "res": {
            "h": 0,
            "w": 0,
            "l": 0,
            "o": 0,
            "b": 0
          },
          "dev": {
            // ...
          }
        }
      }

    },

    "tiles": {                  // /rooms/one/tiles
      "t1": {                 // /rooms/one/tiles/t1
        "resource": "hay",
        "dice roll": 8,
        "intersections": {    // /rooms/one/tiles/t1/intersections
          "i1": true,
          "i2": true,
          "i13": true
          }
        },
      // more tiles
      "t18": {
        "resource": "hay",
        "dice roll": 3,
        "intersections": {    // /rooms/one/tiles/t1/intersections
          "i1": true,
          "i3": true,
          "i17": true
          }
      },
      "t19": {
        "resource": "hay",
        "dice roll": 6,
        "intersections": {    // /rooms/one/tiles/t1/intersections
          "i1": true,
          "i2": true,
          "i3": true
          }
      }
    },

    "intersections": {
      "i1": {
        "trade ratio": 4,    // only for harbor pieces
        "ints_ints": {
          "i2": false,
          "i3": false,
          "i4": false
        },

        "ints_tiles": {
          "t1": true,
          "t2": true,
          "t3": true
          }
        }
      },

      "i2": {
        "structure": 0,
        "trade ratio": 4, 
        "ints_ints": {
          "i2": false,
          "i3": false,
          "i4": false
        },

        "ints_tiles": {
          "t1": true,
          "t2": true,
          "t3": true
          }
        }
      }
  }

// END INITIAL






















// EXPERIMENT BELOW
// messages are separate from data we may want to iterate quickly
// but still easily paginated and queried, and organized by room ID
"tiles": {
  "one": {
    "t1": {
      "resource": "hay"
      "dice roll": 8
      "intersections": {
          int1_key: value,
          int2_key: value,
          int3_key: value,
        }
      },
    "t18": { ... },
    "t19": { ... }
  },
  "two": { ... },
  "three": { ... }
}

"ints": {
  "one": {

  }
}


"users": {
  "user_one": {
    name: "mchen"
  }
  "user_two": {
    name: "b"
  }
}

"players": {
  // we'll talk about indices like this below
  "one": {
    "user_one": {
      username: "mchen"
      points:
      settlement:
      city:
      road:
      color:
    },
    "b": true
  },

  "two": { ... },
  "three": { ... }
},

"cards":
  "user_one": {
    dev: {
      // ...
    }
    res: {
      h: 1
      w: 2
      l: 3
      o: 6
      b: 0
    }
  }
}

""

"points": {
  "user_one": 123
}
}