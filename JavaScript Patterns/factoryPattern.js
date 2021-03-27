//FACTORY PATTERN
//DIFFERENT OBJECTS THAT SHARE THE SAME PROPS
function MemberFactory() {
  this.createMember = function (name, type) {
  let member;

  if (type === "Gold"){
    member = new GoldMembership(name);
  } else if (type === "Platinum") {
    member = new PlatinumMembership(name);
  } else if (type === "Black") {
    member = new BlackMembership(name);
  }

  member.type = type;
  member.define = function () {
    console.log(`${this.name} (${this.type}): ${this.cost} `)
  }

  return member;
}
}

//Create constructors for the Gold, Platinum and Black memberships
const GoldMembership = function (name){
  this.name = name;
  this.cost = "R250";
}
const PlatinumMembership = function (name){
  this.name = name;
  this.cost = "R350";
}
const BlackMembership = function (name){
  this.name = name;
  this.cost = "R500";
}

const members = [];
const factory = new MemberFactory();

//Create memberss
members.push(factory.createMember("Denti Kruger", "Gold"));
members.push(factory.createMember("Mew Kruger", "Black"));
members.push(factory.createMember("Nakha Kruger", "Gold"));
members.push(factory.createMember("Loandie Kruger", "Platinum"));
members.push(factory.createMember("Elzaan Kruger", "Gold"));

// console.log(members);

//Loop through members
members.forEach(member => {
  member.define();
})