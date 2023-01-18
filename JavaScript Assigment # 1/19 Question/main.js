// <!-- 19. Create a countries.js file and store the countries name into this file, create a file web_techs.js and 
//  store the popular web technology names into this file. Access both file in a third file named main.js -->

import * as web from "./web_techs.js";
import { countries } from "./countries.js";

console.log(web.webTechnologies[0]);
console.log(countries[0]);

