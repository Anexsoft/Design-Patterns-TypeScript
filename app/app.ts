import MyConfiguration from "./creational/singleton";

new MyConfiguration(new Date(), "https://api.kodoti.com/", "development");

let config = MyConfiguration.getInstance(),
    config2 = MyConfiguration.getInstance();

console.log(config);