export default class SwapiService {
    _apiBase = 'https://swapi.dev/api'
    async getResource(url) {
        const result = await fetch(`${this._apiBase}${url}`);
        if (!result.ok) {
            throw new Error(`Could not fetch ${url} + , received ${result.status}`)
        }
        return await result.json();
    }
    async getAllPeople() {
        const result = await this.getResource(`/people/`);
        return result.results.map(this._transformPerson);
    }
    async getPerson(id) {
        const person = await this.getResource(`/people/${id}`);
        return this._transformPerson(person)
    }
    async getAllPlanets() {
        const result = await this.getResource(`/planets/`);
        return result.results.map(this._transformPlanet);
    }
    async getPlanet(id) {
        const planet = await this.getResource(`/planets/${id}`);
        return this._transformPlanet(planet);
    }
    async getAllStarships() {
        const result = await this.getResource(`/starships/`);
        return result.results.map(this._transformStarship);
    }
    async getStarship(id) {
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
        name : person.name,
        gender: person.gender,
        birthYear: person.birthYear,
        eyeColor: person.eyeColor
      }
    }
}