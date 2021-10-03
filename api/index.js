import axios from "axios";
import { DogApiConfig } from "./config.js";

class DogApi {
  constructor(config) {
    this.endPoint = config.endPoint;
  }

  getAllDogsAsync = async () => {
    let dogs = [];

    for (let i = 1; i <= 100; i++) {
      let dogInstance = await this.getOneDogAsync(i);
      dogs.push(dogInstance);
    }

    return dogs;
  };

  getOneDogAsync = async () => {
    try {
      let result = await axios.get(this.endPoint);
      return result.data.message;
    } catch (e) {
      console.log(e);
    }
  };
}

const DogApiInstance = new DogApi(new DogApiConfig());

export { DogApiInstance as DogApi };
