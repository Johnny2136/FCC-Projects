function rot13(str) { // LBH QVQ VG!
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
rot13("SERR PBQR PNZC");
