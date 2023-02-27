/*
Write a program in JS that will truncate a sentence after a given amount of characters.

- It should not add the ellipsis if the truncate amount is longer than the given
content
- Give an option to pass a custom character for the trail

EX:
truncate("I am a long sentence", 5) => "I am a..
*/

function truncate(content, length) {
  if(content.length <= length) {
    return(content)
  }
  
  return(`Old: ${content} \nNew: ${content.slice(0,length+1).trim()}...`)
}


console.log(truncate("I am a long sentence", 5))


function ryansTruncate(content, charCount, symbol) {
  if(content.length <= charCount) {
    return content
  }

  symbol = symbol?.repeat(3) || "..."
  // the ? checks if symbol exists, and if so it continues, or if symbol is undefined, and if so it stops there and moves onto the next line(s)

  return content.slice(0, charCount + 1).trim() + symbol
}

console.log(ryansTruncate("I am a long sentence", 5))

