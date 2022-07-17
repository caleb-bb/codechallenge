function hello() {
    return "Hello, world!"
}

function reverse_word(word) {
    var reversed = word.split('').reverse().join('')
    if (reversed.slice(-1) == reversed.slice(-1).toUpperCase()) {
        let lowercased = reversed.toLowerCase()
        return lowercased.slice(0,1).toUpperCase() + lowercased.substring(1)
    }
    return reversed
}

function reverse_sentence(sentence) {
    split_sentence = sentence.split(' ')
    return split_sentence.map(function(element, index){
        if (index % 2 != 0){
            return reverse_word(element)
        }
        else {
            return element
        }}).join(' ')
}


exports.hello = hello
exports.reverse_word = reverse_word
exports.reverse_sentence = reverse_sentence
