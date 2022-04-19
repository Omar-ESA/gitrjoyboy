console.log("logs");
try {
  var a = true;
  if (a) {
    console.log(a);
  } else {
    throw new Error("a is false");
  }
} catch (a) {
  console.log("")
}