// time calculations

const secInMs = 1000;
const minInMs = secInMs*60;
const hourInMs = minInMs*60;
const dayInMs = hourInMs*24;
const weekInMs = dayInMs*7;
const yearInMs = dayInMs*365;

//random number functions
function xmur3(str) {
    for(var i = 0, h = 1779033703 ^ str.length; i < str.length; i++)
        h = Math.imul(h ^ str.charCodeAt(i), 3432918353),
        h = h << 13 | h >>> 19;
    return function() {
        h = Math.imul(h ^ h >>> 16, 2246822507);
        h = Math.imul(h ^ h >>> 13, 3266489909);
        return (h ^= h >>> 16) >>> 0;
    }
}
function sfc32(a, b, c, d) {
    return function() {
      a >>>= 0; b >>>= 0; c >>>= 0; d >>>= 0; 
      var t = (a + b) | 0;
      a = b ^ b >>> 9;
      b = c + (c << 3) | 0;
      c = (c << 21 | c >>> 11);
      d = d + 1 | 0;
      t = t + d | 0;
      c = c + t | 0;
      return (t >>> 0) / 4294967296;
    }
}
function mulberry32(a) {
    return function() {
      var t = a += 0x6D2B79F5;
      t = Math.imul(t ^ t >>> 15, t | 1);
      t ^= t + Math.imul(t ^ t >>> 7, t | 61);
      return ((t ^ t >>> 14) >>> 0) / 4294967296;
    }
}
function xoshiro128ss(a, b, c, d) {
    return function() {
        var t = b << 9, r = a * 5; r = (r << 7 | r >>> 25) * 9;
        c ^= a; d ^= b;
        b ^= c; a ^= d; c ^= t;
        d = d << 11 | d >>> 21;
        return (r >>> 0) / 4294967296;
    }
}
let seedFunction = xmur3("Anything you like");
let seed0 = seedFunction();
let seed1 = seedFunction();
let seed2 = seedFunction();
let seed3 = seedFunction();
let seededRandFunction = sfc32(seed0,seed1,seed2,seed3);


//standard constants
const feedRateOld = 5;
const feedRateYoung = 8;
const mealRateOld = 1;
const mealRateYoung = 5;

//probability variables
var pastureLameProb = 0.1;
var housedLameProb = 0.5;



//tick simulation
function simulate_tick(data, deltaInMS) {
	//methods go here

	//are cows in housing or in field?

	//when in housing

		//cows need fed

		//cows need scraped and bedded

		//cows need minerals

		//any cattle close to calving?

			//watching for early signs of calving

			//help may be needed to calve the cow

			//calves sick? need treatment?

			//

	//when on pastures

		//do the cows need moved to a new pasture

		//have the cows broken out

		//do fences need repaired

		//fields may need topped

		//

	//silage needs made three times per year

	//meal needs made

	//machinery needs maintained

	//do cattle need vaccinated

	//tb test?

	//cattle ready for abbatoir?

	//any cattle fall ill?

	//
}

/* for(let step=0;step<5000;step++)
{
	simulate_tick(data,dayInMs);
} */

//function for date/time comparison probably needed 


//get field from an object
function getFields(input, field) {
    var output = [];
    for (var i=0; i<input.length; i++) {
        output.push(input[i][field]);
    } return output;
}