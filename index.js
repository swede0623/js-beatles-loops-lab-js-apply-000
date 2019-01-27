// add solution here

function theBeatlesPlay(musicians,instruments)
{
  
  var array = []
  
  for(var ctr =0; ctr < musicians.length; ctr++)
  {
    array[ctr] = musicians[ctr] + ' plays ' + instruments[ctr];
  }
  
  return array;
}

const facts = ["He was the last Beatle to learn to drive",
        "He was never a vegetarian",
        "He was a choir boy and boy scout",
        "He hated the sound of his own voice"]

function johnLennonFacts(facts)
{
  
  var ctr = 0;
  
  while(ctr < facts.length)
  {
    facts[ctr] = facts[ctr] + "!!!"
    ctr++
  }
  
  return facts
  
}

function iLoveTheBeatles(number)
{
  var array = []
  
  do
  {
    
  array[number - number] = "I love the Beatles!"  
  number++
    
  }
  while(number < 15 );
  
}


