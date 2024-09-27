const products = [
  { id: 1, name: "AsusVivoBook pro", price: 78000 },
  { id: 2, name: "MacBook pro", price: 178000 },
  { id: 3, name: "Lenovo ", price: 48000 },
  { id: 4, name: "Dell ", price: 28000 },
  { id: 5, name: "Xoxs ", price: 18000 },
];

// class --->
class person {
  country = "Bangladesh";
  // constructor is a special function that creates and initializes an object instance of a class.
  constructor(name) {
    this.name = name;
  }

  // this is a Method
  speak(talk) {
    console.log(`Taking about ${talk}`);
  }
}

const msg = new person("Tonmoy sutradhar");
// console.log(msg);

// msg.speak("Kire ki bolis.");

// ---------------------------------->>>>
class teacher {
  constructor(name, subject) {
    this.name = name;
    this.subject = subject;
  }
  // lecture() is a method
  lecture() {
    console.log("Sir is teaching Programming.");
  }
}

const jahid = new teacher("Jahid Hasan", "C#");
console.log(jahid);

const Dipok = new teacher("Dipok Bassak", "Math");
console.log(Dipok);
