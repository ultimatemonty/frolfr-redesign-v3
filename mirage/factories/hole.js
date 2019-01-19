
import { Factory } from 'ember-cli-mirage';

const minPar = 2;
const maxPar = 5;

export default Factory.extend({
  holeNumber(i) {
    // i is 0 indxed, we need 1 indexed
    i = i + 1;

    // since `i` is cumulative through all model creation we need to do some maths to figure out what hole number to use
    // i % 18 = hole number
    // if mod is 0 then hole = 18

    let holeNumber = i % 18;
    if (holeNumber === 0) {
      holeNumber = 18;
    }

    return holeNumber;
  },

  par() {
    return Math.floor(Math.random()*(maxPar-minPar+1)+minPar);
  },
})
