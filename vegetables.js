const vegetables = [
  {
    submitter: 'Old Man Franklin',
    redness: 10,
    plumpness: 5
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 2,
    plumpness: 8
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 4,
    plumpness: 3
  }
]

const metric = 'redness'



const judgeVegetable = function(vegetables, metric){


let x = 0;
let a = 0;
    

    for (let i = 0; i < vegetables.length; i++){
	
      if (vegetables[i][metric] > x){
        x = vegetables[i][metric];
	a = i
      }
    }
  

  return vegetables[a].submitter;



};







console.log(judgeVegetable(vegetables, metric));
