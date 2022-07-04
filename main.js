let dog = {};
console.log(dog);
dog.name = "bingo";
dog.color = "black";
dog.age = 10;
dog.bark = "woof woof";
console.log(dog);

console.log(dog.name);
console.log(dog.color);
console.log(dog.age);
console.log(dog.bark);

dog.breed = "getDogInfo";

//level2
const users = {
  Alex: {
    email: "alex@alex.com",
    skills: ["HTML", "CSS", "JavaScript"],
    age: 20,
    isLoggedIn: false,
    points: 30,
  },
  Asab: {
    email: "asab@asab.com",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "Redux",
      "MongoDB",
      "Express",
      "React",
      "Node",
    ],
    age: 25,
    isLoggedIn: false,
    points: 50,
  },
  Brook: {
    email: "daniel@daniel.com",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux"],
    age: 30,
    isLoggedIn: true,
    points: 50,
  },
  Daniel: {
    email: "daniel@alex.com",
    skills: ["HTML", "CSS", "JavaScript", "Python"],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
  John: {
    email: "john@john.com",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux", "Node.js"],
    age: 20,
    isLoggedIn: true,
    points: 50,
  },
  Thomas: {
    email: "thomas@thomas.com",
    skills: ["HTML", "CSS", "JavaScript", "React"],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
  Paul: {
    email: "paul@paul.com",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "MongoDB",
      "Express",
      "React",
      "Node",
    ],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
};

//que 1
function mostSkilled() {
  let mostSkilled = "";
  for (let elem in users) {
    if (users[elem]["skills"].length > mostSkilled.length) {
      mostSkilled = elem;
    }
  }
  return mostSkilled;
}
console.log(mostSkilled());

// que 2
function userPoint() {
  let count = 0;
  for (let elem in users) {
    if (users[elem]["points"] >= 50) {
      count++;
    }
  }
  return count;
}
console.log(userPoint());

// que 3
function mern() {
  let mern = [];
  for (let elem in users) {
    if (users[elem]["skills"].includes("MongoDB", "Express", "React", "Node")) {
      mern.push(elem);
    }
  }
  return mern;
}
console.log(mern());

// que 4
users.Rufaidat = {};
console.log(users);

// que 5
console.log(Object.keys(users));

//que 6
console.log(Object.values(users));

//que 7
let countries = {
  Nigeria: {
    capital: "Abuja",
    population: "14 million",
    languages: ["yoruba", "igbo", "hausa"],
  },
  France: {
    capital: "Paris",
    population: "14 million",
    languages: ["French"],
  },
};

console.log(Object.entries(countries));

// level 3
let personAccount = {
  firstName: "Rufaidat",
  lastName: "Al-siddiq",
  incomes: {
    tech: 50,
    graphics: 20,
    agric: 100,
  },
  expenses: {
    diaper: 200,
    food: 300,
    transport: 50,
  },
  totalIncome: 170,
  totalExpense: 550,
  acountBalance: 380,
};

const usersMongo = [
  {
    _id: "ab12ex",
    username: "Alex",
    email: "alex@alex.com",
    password: "123123",
    createdAt: "08/01/2020 9:00 AM",
    isLoggedIn: false,
  },
  {
    _id: "fg12cy",
    username: "Asab",
    email: "asab@asab.com",
    password: "123456",
    createdAt: "08/01/2020 9:30 AM",
    isLoggedIn: true,
  },
  {
    _id: "zwf8md",
    username: "Brook",
    email: "brook@brook.com",
    password: "123111",
    createdAt: "08/01/2020 9:45 AM",
    isLoggedIn: true,
  },
  {
    _id: "eefamr",
    username: "Martha",
    email: "martha@martha.com",
    password: "123222",
    createdAt: "08/01/2020 9:50 AM",
    isLoggedIn: false,
  },
  {
    _id: "ghderc",
    username: "Thomas",
    email: "thomas@thomas.com",
    password: "123333",
    createdAt: "08/01/2020 10:00 AM",
    isLoggedIn: false,
  },
];

const products = [
  {
    _id: "eedfcf",
    name: "mobile phone",
    description: "Huawei Honor",
    price: 200,
    ratings: [
      { userId: "fg12cy", rate: 5 },
      { userId: "zwf8md", rate: 4.5 },
    ],
    likes: [],
  },
  {
    _id: "aegfal",
    name: "Laptop",
    description: "MacPro: System Darwin",
    price: 2500,
    ratings: [],
    likes: ["fg12cy"],
  },
  {
    _id: "hedfcg",
    name: "TV",
    description: "Smart TV:Procaster",
    price: 400,
    ratings: [{ userId: "fg12cy", rate: 5 }],
    likes: ["fg12cy"],
  },
];

// que 2a
function signUp(name) {
  for (let elem in usersMongo) {
    if (usersMongo[elem]["_id"] === name) {
      return "the user already has an account";
    } else {
      usersMongo[5] = {
        _id: `${name}`,
      };
    }
  }
  return usersMongo;
}
console.log(signUp("she"));

// que 2b NOT SOLVED
function signIn(id, password) {
  for (let elem in usersMongo) {
    if (
      usersMongo[elem]["_id"] === "id" &&
      usersMongo[elem]["password"] === "password"
    ) {
      return `you are signed in`;
    } else {
      return `you don't have an account`;
    }
  }
}
console.log(signIn("ghderc", "123333"));

// console.log(usersMongo[0]["_id"] == "ab12ex");

// que 3
function rateProduct(product, name, rating) {
  for (let elem in products) {
    if (products[elem]["_id"] === product) {
      products[elem]["ratings"].push({ userId: name, rate: rating });
    }
  }
  return products;
}
console.log(rateProduct("hedfcg", "he", 5));

// que 4 NOT SOLVED
function likeProduct(userId, like) {
  for (let elem in products) {
    if (products[elem]["_id"] === userId && products[elem]["likes"] === null) {
      products[elem]["likes"].push(like);
    }
    return products;
  }
}
console.log(likeProduct("eedfcf", "like"));
