const moves = ['north', 'north', 'west', 'west', 'north', 'east', 'north'];

const finalPosition = function(moves) {
  var begin = [0, 0];
  var end = [];

  for (var i = 0; i < moves.length; i++) {

    var point = moves[i];

    if (point === 'north') {

      begin[1] += 1;
    }

    else if (point === 'south') {
      begin[1] -= 1;
    }

        else if (point === 'east') {
          begin[0] += 1;
        }

        else if (point === 'west') {
          begin[0] -= 1;
        }
  }
  end = begin;
  return begin;
}

console.log(finalPosition(moves));