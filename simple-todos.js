Units = new Mongo.Collection ("units");

if (Meteor.isClient) {
  var which = 0;
  var mouseenter = function () {
      $(this).addClass ('checked');
console.info ( $(this));

  }
  Template.body.events({
    "contextmenu .unit": function (e) {e.stopPropagation();return false;},
    "mousedown .unit": function (e) {

console.info ('mousedown' + e.which);

      which = e.which;
      return;

      // Tasks.update (this._id, {$set: {checked: ! this.checked}});
    },
    "mouseup .unit": function () {
      which = 0;
      // Tasks.remove(this._id);
    },
    "click .unit": function () {

      // Tasks.remove(this._id);
    },
    "mouseenter .unit": function () {
console.info ('mouseenter' + which);

      Units.update (this._id, {$set: {checked: which == 3 ? false : true}});

      // Tasks.remove(this._id);
    }
  });

  Template.body.helpers({
    units: function () {
      return Units.find ({}, {});
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {

    // code to run on server at startup
  });
}
