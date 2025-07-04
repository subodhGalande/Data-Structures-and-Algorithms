// 1108. Defanging an IP Address
// Easy
// Topics
// Companies
// Given a valid (IPv4) IP address, return a defanged version of that IP address.

// A defanged IP address replaces every period "." with "[.]".

// Example 1:

// Input: address = "1.1.1.1"
// Output: "1[.]1[.]1[.]1"
// Example 2:

// Input: address = "255.100.50.0"
// Output: "255[.]100[.]50[.]0"

// Constraints:

// The given address is a valid IPv4 address.

var defangIPaddr = function (address) {
  let result = "";
  for (let val of address) {
    //   if (val !== ".") {
    //     result += val;
    //   } else {
    //     result += val.replace(".", "[.]");
    //   }

    val !== "." ? (result += val) : (result += val.replace(".", "[.]"));
  }

  return result;
};

defangIPaddr("1.1.1.1");
