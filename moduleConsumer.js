const { available, inc, dec, getCount } = require("./myModule");

inc();
inc();
dec();

console.log(`Module is available: ${available}`);
console.log(`The count is: ${getCount()}`);
