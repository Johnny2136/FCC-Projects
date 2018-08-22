/***************************************************************
 * JavaScript Algorithms and Data Structures Projects:         * 
 * Cash Register, JJ 2018                                      *
 * https://repl.it/@JohnJohnson2/FCCProject-cashRegisterjs     *
 ***************************************************************/
//My solution
// Create myArr Array of objects which hold the monitary values (the challenge forgot about fifty-cent(HALF-DOLLAR) pieces which are fairly common)
const myArr = [
  { id: 'ONE HUNDRED', val: 100.00},
  { id: 'TWENTY', val: 20.00},
  { id: 'TEN', val: 10.00},
  { id: 'FIVE', val: 5.00},
  { id: 'ONE', val: 1.00},// could be bill or coin.
  { id: 'HALF-DOLLAR', val:0.50},//coin should be added.
  { id: 'QUARTER', val: 0.25},
  { id: 'DIME', val: 0.10},
  { id: 'NICKEL', val: 0.05},
  { id: 'PENNY', val: 0.01}
];
function checkCashRegister(price, cash, cid) {
  //Use .reduce to transform CID array into  register drawer (regDrw).
  let regDrw = cid.reduce(function(acc, curr) {
    acc.total += curr[1];
    acc[curr[0]] = curr[1];
    //console.log(acc);//debugging
    return acc;
  }, { total: 0 });
  // Handle exact change
  let messageArr = { status: null, change: [] };// 2d message arr.
  let change = cash - price;
  if (regDrw.total === change) {
    messageArr.status = 'CLOSED';
    messageArr.change = cid;
    console.log(messageArr);//debugging
    return messageArr;
  };
  // Handle insufficient funds
  if (regDrw.total < change) {
    messageArr.status = 'INSUFFICIENT_FUNDS';
    console.log(messageArr)//debugging
    return messageArr;
  };
  // Loop through the monitary amounts myArray
  var change_arr = myArr.reduce(function(acc, curr) {
    var value = 0;
    // need to refactor this...
    while (regDrw[curr.id] > 0 && change >= curr.val) {// While money is in the drawer
    // And while the id: value: is larger than the change in drawer
      change -= curr.val;
      regDrw[curr.id] -= curr.val;
      value += curr.val;
      // Round change to the nearest hundreth 'PENNY'.
      change = Math.round(change * 100) / 100;
    };
    // Add this currency id to the messageArr only if any was used.
    if (value > 0) {
        acc.push([ curr.id, value ]);
    };
    return acc; // Return the current pushed acc
  }, []); // Empty array for .reduce
  // If no elements in change_arr or leftover change, return "Insufficient Funds"
  if (change_arr.length < 1 || change > 0) {
    messageArr.status = 'INSUFFICIENT_FUNDS';
    console.log(messageArr);//debugging
    return messageArr;
  };
  // Here is your change, ma'am.
  messageArr.status = 'OPEN';
  messageArr.change = change_arr;
  console.log(messageArr);//debugging
  return messageArr;
};
// test here (the first one I wrote to test for 1/2 Dollar Coins)
checkCashRegister(19.25, 70.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", .25], ["HALF-DOLLAR", 4.00], ["ONE", 0.00], ["FIVE", 5.00], ["TEN", 20.00], ["TWENTY", 40.00], ["ONE HUNDRED", 100.00]]);//Wrote my own test for 1/2 dollar coin should return { status: 'OPEN', change: [[ 'HALF-DOLLAR', 0.5 ] ] }.
checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]); //should return {status: "OPEN", change: [["QUARTER", 0.5]]}.
checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]); //should return {status: "OPEN", change: [["TWENTY", 60], ["TEN", 20], ["FIVE", 15], ["ONE", 1], ["QUARTER", 0.5], ["DIME", 0.2], ["PENNY", 0.04]]}.
checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]); //should return {status: "INSUFFICIENT_FUNDS", change: []}.
checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]); //should return {status: "INSUFFICIENT_FUNDS", change: []}.
checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]); //should return {status: "CLOSED", change: [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]
