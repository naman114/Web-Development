// npm install mongoose
// Your package should not be named the same as the one you are installing

const mongoose = require("mongoose");

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://localhost:27017/test");

  // Schema is a strict format in which data will be stored
  const kittySchema = new mongoose.Schema({
    name: String,
  });

  // const Kitten = mongoose.model("Kitten", kittySchema);

  // const silence = new Kitten({ name: "Silence" });
  // console.log(silence.name); // 'Silence'

  kittySchema.methods.speak = function speak() {
    const greeting = this.name
      ? "Meow name is " + this.name
      : "I don't have a name";
    console.log(greeting);
  };

  //   A model is a compiled schema. Once converted to a model, the schema cannot be changed
  const Kitten = mongoose.model("Kitten", kittySchema);

  //   Objects will be inserted as documents in the db
  const fluffy = new Kitten({ name: "fluffy" });
  fluffy.speak(); // "Meow name is fluffy"

  await fluffy.save();
  fluffy.speak();

  const kittens = await Kitten.find();
  console.log(kittens);
}
