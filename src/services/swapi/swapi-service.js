export default class SwapiService {
  _apiBase = 'https://swapi.dev/api'

  getResource = async (url) => {
    const res = await fetch(`${this._apiBase}${url}`);
    if (!res.ok) {
        throw new Error(`Could not fetch ${url} + , received ${res.status}`)
    }
    return await res.json();
  }

  getAllPeople = async () => {
    const res = await this.getResource(`/people/`);
    return res.results.map(this._transformPerson);
  }
  getPerson = async (id) => {
    const person = await this.getResource(`/people/${id}`);
    return this._transformPerson(person)
  }
  getAllPlanets = async () => {
    const res = await this.getResource(`/planets/`);
    return res.results.map(this._transformPlanet);
  }
  getPlanet = async (id) => {
    const planet = await this.getResource(`/planets/${id}`);
    return this._transformPlanet(planet);
  }
  getAllStarships = async () => {
    const res = await this.getResource(`/starships/`);
    return res.results.map(this._transformStarship);
  }
  getStarship = async (id) => {
    const starship = await this.getResource(`/starships/${id}`);
    return this._transformStarship(starship)
  }
  _extractId(item) {
    const idRegExp = /\/([0-9]*)\/$/;
    return item.url.match(idRegExp)[1];
  }
  _transformPlanet = (planet) => {
    return {
      id: this._extractId(planet),
      population: planet.population,
      rotationPeriod: planet.rotation_period,
      diameter: planet.diameter,
      name :planet.name
    }
  }
  _transformStarship = (starship) => {
    return {
      id: this._extractId(starship),
      name: starship.name,
      model: starship.model,
      manufacturer : starship.manufacturer,
      costInCredits: starship.costInCredits,
      lengthcrew: starship.lengthcrew,
      passengers: starship.passengers,
      cargoCapacity: starship.cargoCapacity
    }
  }
  _transformPerson = (person) => {
    return {
      id: this._extractId(person),
      name: person.name,
      height: person.height,
      mass: person.mass,
      hairColor: person.hair_color,
      skinColor: person.skin_color,
      eyeColor: person.eye_color,
      birthYear: person.birth_year,
      gender: person.gender,
      homeworld: person.homeworld,
      films: person.films,
      species: person.species,
      vehicles: person.vehicles,
      starships: person.starships
    }
  }
}