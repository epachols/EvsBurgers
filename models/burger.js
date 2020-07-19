var orm = require("../config/orm.js");

var burger = {
  all: function(cb) {
    orm.all("burgers", function(res) {
      cb(res);
    });
  },
  
  // remember the second two passed (cols,vals) are arrays
  create: function(cols, vals, cb) {
    orm.create("burgers", cols, vals, function(res) {
      cb(res);
    });
  },

  update: function(objColData, condition, cb) {
    orm.update("burgers", objColData, condition, function(res) {
      cb(res);
    });
  },

  delete: function(id, cb) {
    orm.delete("burgers", id, function(res){

      cb(res);
    })
  }

};

module.exports = burger;