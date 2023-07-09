const searchName = (require, limit, callback) => {
  const names = ["Abigail", "Alexandra", "Alison", "Amanda", "Angela", "Bella", "Carol", "Caroline", "Carolyn", "Deirdre", "Diana", "Elizabeth", "Ella", "Faith", "Olivia", "Penelope"];
  let dataPassed = names.filter((name) => name.toLowerCase().includes(require.toLowerCase())).slice(0, limit);
  callback(dataPassed);
};
searchName("an", 3, (param) => {
  console.log(param);
});
