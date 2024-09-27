class vehicle {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
  move() {
    console.log("gari chole na chole na chole na re gari chole na");
  }
}

class bus extends vehicle {
  constructor(name, price, seat, ticket_price) {
    super(name, price);
    this.seat = seat;
    this.ticket_price = ticket_price;
  }
}

class truck extends vehicle {
  constructor(name, price, load) {
    super(name, price);
    this.load = load;
  }
}
