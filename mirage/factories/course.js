import { Factory, faker } from 'ember-cli-mirage';

const minPar = 36;
const maxPar = 68;

export default Factory.extend({
  name: faker.address.country,
  address: faker.address.streetAddress,
  city: faker.address.city,
  province: faker.address.stateAbbr,
  postalCode: faker.address.zipCode,
  countryCode: faker.address.countryCode,
  lat: faker.address.latitude,
  lng: faker.address.longitude,
  bannerImgUrl: faker.image.nature,
  par() {
    return Math.floor(Math.random()*(maxPar-minPar+1)+minPar);
  }
});
