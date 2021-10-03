class DogService {
  parseDogsItems = (dogs) => {
    return dogs.map((dog) => {
      return {
        title: dog.substr(30).split("/")[1].split(".")[0],
        imgRef: dog,
        breedId: dog.substr(30).split("/")[0],
      };
    });
  };
}

const DogServiceInstance = new DogService();
export { DogServiceInstance as DogService };
