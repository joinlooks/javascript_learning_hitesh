const accountId = 124;
let accountName = "Lakshya";
var accountPassword = "password";
accountCity = "Indore";

accountName = "Sharma";
accountPassword = "something";
accountCity = "Pune";

console.log(accountId, typeof accountId);
console.log(accountName, typeof accountName);
console.log(accountPassword, typeof accountPassword);
console.log(accountCity, typeof accountCity);

console.table([accountId, accountName, accountPassword, accountCity]);

// accountId = 242; // Not allowed
