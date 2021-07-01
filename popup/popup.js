const wordCount = document.getElementById('word_count')
const charCount = document.getElementById('char_count')
const noSpaceCount = document.getElementById('no_space_count')
const text_input = document.getElementById('text_input')
let currentTab = "reeeee"

// Set up code for text box
text_input.addEventListener("input", function(event) {
  let text = text_input.value
  wordCount.innerHTML = "Word Count: " + text.split(' ').length
  charCount.innerHTML = "Character Count: " + text.length
  text = text.replace(/\s+/g,'')
  noSpaceCount.innerHTML = "Character Count w/o Spaces: " + text.length
})


