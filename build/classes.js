"use strict";
// class Vehicle {
//   constructor(public color: string) {}
//   protected honk = (): void => {
//     //accessed in the same class and child class
//     console.log("beep");
//   };
// }
// // inheritance
// class Car extends Vehicle {
//   constructor(public color: string, private name: string) {
//     super(color);
//   }
//   public drive = (): void => {
//     //can only be accessed inside the class
//     console.log(this.name, "goes", "chuga chuga");
//   };
//   startDriving(): void {
//     this.drive();
//     this.honk();
//   }
// }
// const vehicle = new Vehicle("orange");
// const labmo = new Car("blue", "labmo");
