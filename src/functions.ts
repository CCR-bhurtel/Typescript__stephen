const add = (a: number, b: number): number => {
  //We donot get inference in arguments/params
  return a + b; //We can get type inference here but we don't use it
};

// Must use annotation for return value too

const subtract = (a: number, b: number) => {
  a - b;
};

function divide(a: number, b: number): number {
  return a / b;
}

const multiply = function (a: number, b: number = 3): number {
  return a * b;
};

const logger = (message: string): void => {
  console.log(message);
};

const throwError = (message: string): never => {
  throw new Error(message);
};

// Destructuring with annotations

const forecast = {
  date: new Date(),
  weather: "sunny",
};

// const todaysForecast: { date: Date; weather: string } = { ...forecast };

const logWeather = ({
  date,
  weather,
}: {
  date: Date;
  weather: string;
}): void => {
  console.log(date);
  console.log(weather);
};

logWeather(forecast);
