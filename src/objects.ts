const profile = {
    myname: 'alex',
    age: 19,
    coords: {
        lat: 13,
        lng: 92,
    },
    setAge(age: number): void {
        this.age = age;
    },
    setName(name: string): void {
        this.myname = name;
    },
    getAge(): number {
        return this.age;
    },
};

const { age, myname }: { age: number; myname: string } = profile;

profile.getAge();
profile.setName('Shishir');

const {
    coords: { lat, lng },
}: { coords: { lat: number; lng: number } } = profile;
