const lyrics=" Tumi bondhu kala pakhi ami jeno ki boshonto batashe tomay bolte pari ni"
//console.log(lyrics);
//const findName=lyrics.includes("kala ");
//console.log(findName);
//const findName2=lyrics.includes('KAla');
//console.log(findName2);
const searchingString="paKhi";
const searchingStringToLowerCase=searchingString.toLowerCase();
const stringToLower=lyrics.toLowerCase();
const findText=stringToLower.includes(searchingStringToLowerCase)
console.log(findText);
//Find it one line
const findDesc=lyrics.toLowerCase().includes(searchingString.toLowerCase());

//--------------------------------------------------
const findIndex=lyrics.indexOf("kala")
console.log(findIndex)