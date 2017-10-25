
module.exports = 
{
	 rainDrops = (InputNum) =>
  {
    let emptyList = ""; 
    if(InputNum % 3 === 0)emptyList += "pling";
    if(InputNum % 5 === 0)emptyList += "plang";
    if(InputNum % 7 === 0)emptyList += "plong";
    if(emptyList.length === 0)emptyList += InputNum;
      console.log(emptyList); // print to console. 
      return emptyList; // for use in other programs
  };
 
}

// Sample program
rainDrops(2);