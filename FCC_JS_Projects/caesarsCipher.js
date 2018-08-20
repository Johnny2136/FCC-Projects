/***************************************************************
 * JavaScript Algorithms and Data Structures Projects:         * 
 * CaesarsCipher, JJ 2018                                      *
 * https://repl.it/@JohnJohnson2/FCCProjectCaesarsCipher       *
 ***************************************************************/
//My solution
function rot13(str) { // LBH QVQ VG!
  let myStr = "";
  console.log(str + "");//Debugging str contents
  console.log((str + "").replace(/[A-Z]/gi, function (myStr) {
    return String.fromCharCode(myStr.charCodeAt(0) + (myStr.toLowerCase() < "n" ? 13 : -13));
  }));//Debugging conversion routine, should decode in ROT 13 or encode if plain text
  return (str + "").replace(/[A-Z]/gi, function (myStr) {
    return String.fromCharCode(myStr.charCodeAt(0) + (myStr.toLowerCase() < "n" ? 13 : -13));
  });
};
// Change the inputs below to test
rot13("SERR PBQR PNZC");
rot13("My Test");


//I was first trying this, but wanted to use the "?" operator above.
function rot13alt(str) { // LBH QVQ VG!
  const a = "A".charCodeAt(0);
  const n = "N".charCodeAt(0);
  const z = "Z".charCodeAt(0);
  let myArr = [];
  for(let i =0; i < str.length; i++){
    let code = str.charCodeAt(i);
    if(code >= a && code <= z){
        if(code >= n){
            myArr.push(String.fromCharCode(code - 13));
		}else{
            myArr.push(String.fromCharCode(code + 13));};
    }else{
        myArr.push(str[i]);};
    };
     return myArr.join("");
  };
// Change the inputs below to test
rot13alt("SERR PBQR PNZC");
