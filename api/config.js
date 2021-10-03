import dotenv from "dotenv";
dotenv.config();

class DogApiConfig {
  constructor() {
    this.endPoint = process.env.END_POINT;
  }
}

export { DogApiConfig };
