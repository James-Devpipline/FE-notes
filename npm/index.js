// 1.0.0
const lodash = require("lodash");
// 1.0.1
const sum = lodash.add(5, 4);
const sumTwo = lodash.add(10, 10);

console.log(sum);
console.log(sumTwo);

/* 
Semantic Versioning

Starting Launch (mvp)
1.0.0

Major.Minor.Patch
1.5.6

Patch -> small fixes that don't break backwards compatibility 
Minor -> new features that don't break backwards compatibility
Major -> breaks backwards compatibility


review 03/30 video at 4pm for malicious dotenv 
*/

/* 
~ updates to the latest patch version, so ^4.17.17 could be brought up to 4.17.20
^ does the same, but accepts new minor and patch versions.

https://stackoverflow.com/questions/22343224/whats-the-difference-between-tilde-and-caret-in-package-json

https://docs.npmjs.com/cli/v8/configuring-npm/package-json#dependencies
*/

/*
Also checkout Babel for some reason
https://babeljs.io/

to test, click "try it out" at the top, and then copy/paste the following code and see how it compiles

function Count(props){
  const [count, setCount] = useState(0);
  
  return (
    <div>
      <h1>(count)</h1>
    </div>
    )
}
*/
