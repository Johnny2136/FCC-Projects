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
function rot13Alt(str) { // LBH QVQ VG!
  //console.log(str.replace(/[a-z]/gi, function (newStr) {return "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".charAt(           "NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm".indexOf(newStr))}));//Debugging 
  return str.replace(/[a-z]/gi, function (newStr) {
    return "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".charAt(
           "NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm".indexOf(newStr)
    );
  } ); 
}
// Change the inputs below to test
rot13Alt("SERR PBQR PNZC");
rot13Alt("My Test");
