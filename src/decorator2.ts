class Boat {
    color: string = 'blue';

    get formattedColor(): string {
        return this.color;
    }

    @logError
    captain(): void {
        throw new Error();
        console.log('swish');
    }
}

function logError(target: any, key: string, desc: PropertyDescriptor): void {
    const method = desc.value;
    desc.value = function () {
        try {
            method();
        } catch (err) {
            console.log('Oops the boat sunk');
        }
    };
}

new Boat().captain();
