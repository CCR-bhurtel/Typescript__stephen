interface Subject {
    registerObserver: (o: Observer) => void;
    removeObserver: (o: Observer) => void;
    notifyObservers: () => void;
}

interface Observer {
    update: (temperature: number) => void;
}
class WeatherStation implements Subject {
    private temperature: number = 0;
    private Observers: Observer[] = [];

    public setTemperature(temp: number) {
        this.temperature = temp;
        this.notifyObservers();
    }

    public registerObserver(o: Observer) {
        this.Observers.push(o);
    }

    public removeObserver(o: Observer) {
        let index = this.Observers.indexOf(o);
        this.Observers.splice(index, 1);
    }

    public notifyObservers() {
        for (let observer of this.Observers) {
            observer.update(this.temperature);
        }
    }
}

class TemperatureDiplay implements Observer {
    private subject: Subject;
    constructor(weatherStation: Subject) {
        this.subject = weatherStation;
        weatherStation.registerObserver(this);
    }
    public update(temperature: number) {
        console.log('TempDisplay: I need to update my display.');
        //logic would go here.
    }
}

class Fan implements Observer {
    private subject: Subject;
    constructor(weatherStation: Subject) {
        this.subject = weatherStation;
        weatherStation.registerObserver(this);
    }
    public update(temperature: number) {
        if (temperature > 25) {
            console.log(`Fan: its hot here, turning myself on...`);
            // here some real login
        } else {
            console.log('Fan: its nice and cool, turnign myself off...');
        }
    }
}

let weatherStation = new WeatherStation();

let temDisplay = new TemperatureDiplay(weatherStation);

let fan = new Fan(weatherStation);

weatherStation.setTemperature(20);
weatherStation.setTemperature(30);
