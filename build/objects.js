"use strict";
const profile = {
    myname: 'alex',
    age: 19,
    coords: {
        lat: 13,
        lng: 92,
    },
    setAge(age) {
        this.age = age;
    },
    setName(name) {
        this.myname = name;
    },
    getAge() {
        return this.age;
    },
};
const { age, myname } = profile;
profile.getAge();
profile.setName('Shishir');
const { coords: { lat, lng }, } = profile;
