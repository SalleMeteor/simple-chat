Template.missatges.missatges = function () {
  return Missatges.find({}, { sort: { time: -1 }});
}