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

  console.log(result);
  return result;
};

defangIPaddr("1.1.1.1");
