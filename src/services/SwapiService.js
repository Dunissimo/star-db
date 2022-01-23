class SwapiService {
  _baseUrl = "https://swapi.dev/api";

  _extractId(item) {
    const idRegExp = /\/([0-9]*)\/$/;
    const id = item.url.match(idRegExp)[1];
    return id;
  }

  async getResource(url) {
    const res = await fetch(url);

    if (!res.ok) {
      throw new Error(`Could not fetch ${url}`);
    }

    return await res.json();
  }

  async getAllPeople() {
    const res = await this.getResource(`${this._baseUrl}/people/`);
    return res.results.map(this._transformPerson);
  }
  async getPerson(id) {
    const res = await this.getResource(`${this._baseUrl}/people/${id}`);
    return this._transformPerson(res);
  }

  _transformPerson = (person) => {
    return {
      id: this._extractId(person),
      name: person.name,
      gender: person.gender,
      birthYear: person.birth_year,
      eyeColor: person.eye_color,
    };
  };

  async getAllPlanets() {
    const res = await this.getResource(`${this._baseUrl}/planets/`);
    return res.results.map(this._transformPlanet);
  }
  async getPlanet(id) {
    const res = await this.getResource(`${this._baseUrl}/planets/${id}`);
    return this._transformPlanet(res);
  }

  _transformPlanet = (planet) => {
    return {
      id: this._extractId(planet),
      name: planet.name,
      population: planet.population,
      rotationPeriod: planet.rotation_period,
      diameter: planet.diameter,
    };
  };

  async getAllStarships() {
    const res = await this.getResource(`${this._baseUrl}/starships/`);
    return res.results.map(this._transformStarShip);
  }
  async getStarship(id) {
    const res = await this.getResource(`${this._baseUrl}/starships/${id}`);
    return this._transformStarShip(res);
  }

  _transformStarShip = (starship) => {
    return {
      id: this._extractId(starship),
      name: starship.name,
      model: starship.model,
      manufacturer: starship.manufacturer,
      costInCredits: starship.costInCredits,
      length: starship.length,
      crew: starship.crew,
      passengers: starship.passengers,
      cargoCapacity: starship.cargoCapacity,
    };
  };
}

export default SwapiService;
