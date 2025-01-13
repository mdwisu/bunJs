const password = "1234";

const hash = await Bun.password.hash(password, {
  algorithm: "bcrypt",
  cost: 10,
});

const result = await Bun.password.verify("1234", hash);
console.log(result);
