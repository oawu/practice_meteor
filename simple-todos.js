Units = new Mongo.Collection ("units");

if (Meteor.isClient) {
  var which = 0;
  var mouseenter = function () {
if (which == 1 || which == 3)
        Units.update (this._id, {$set: {checked: which == 3 ? false : true}});

  }
  Template.body.events({
    "contextmenu .unit": function (e) {e.stopPropagation();return false;},
    "mousedown .unit": function (e) {


      which = e.which;
      mouseenter.bind (this).apply ();
//console.info (e.which);

      // Tasks.update (this._id, {$set: {checked: ! this.checked}});
    },
    "mouseup .unit": function (e) {
      which = 0;

console.error (e.which);
      // Tasks.remove(this._id);
    },
    "click .unit": function () {

      // Tasks.remove(this._id);
    },
    "mousemove .unit": function () {
      mouseenter.bind (this).apply ();
      // mouseenter
      // if (which == 1 || which == 3)
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
