/**
* Models
*/
Missatges = new Meteor.Collection('missatges');

// permet afegir missatges
Missatges.allow({
  insert: function() {
    return true;
  }
});

// no permet modificar-los o eliminar-los.
Missatges.deny({
<<<<<<< HEAD
  remove: function() {
    return true;
  },
  update: function() {
    return true;
=======
  update: function() {
    return true;
  },	
  remove: function() {
    return true;
>>>>>>> bfd152813b084734058921815b460486161dc985
  }
});