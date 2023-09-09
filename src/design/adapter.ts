interface Iphone {
    useLightning(): void;
}

interface Android {
    useTypeC(): void;
}

class iphone14 implements Iphone {
    useLightning() {
        console.log('Using lightning port');
    }
}

class GooglePixel implements Android {
    public useTypeC() {
        console.log('Using type C...');
    }
}

class LightningtoTypeCAdater implements Android {
    iphoneDevice: Iphone;
    constructor(iphone: Iphone) {
        this.iphoneDevice = iphone;
    }

    public useTypeC(): void {
        console.log('Want to use type C, converting to Lightning...');
        this.iphoneDevice.useLightning();
    }
}

let iphone = new iphone14();

let chargeAdapter = new LightningtoTypeCAdater(iphone);

chargeAdapter.useTypeC();
