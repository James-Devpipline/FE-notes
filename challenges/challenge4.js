/* 
Challenge

Create a user object. Decide on what key value pairs make sense for user. I want at least 1 nested object.

After you've initialized your object, add a key value pair where the key is the user's favorite programming language and the value is a string representation of that language.

Delete 1 property from your objects.
*/

const myObject = {
  firstName: 'Terry',
  lastName: 'Davis',
  education: 'Arizona State University',
  employer: 'Ticketmaster',
  languages: {
    favLang: 'HolyC'
  }
}

myObject.languages.favLang = "HolyC"
delete myObject.employer
console.log(myObject)

