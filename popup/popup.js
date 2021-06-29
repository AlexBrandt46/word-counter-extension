const wordCount = document.getElementById('word_count')
const charCount = document.getElementById('char_count')
const noSpaceCount = document.getElementById('no_space_count')
const text_input = document.getElementById('text_input')

text_input.addEventListener("input", function(event) {
  var text = text_input.value
  charCount.innerHTML = "Character Count: " + text.length
})

