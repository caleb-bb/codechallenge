function is_letter(character) {
    let re = /[a-zA-Z]/
    return character.match(re)
}

function replace_punctuation(word, reversed_word) {
    let normal_list = word.split('')
    let reversed_list = reversed_word.split('').filter(x => is_letter(x))

    for(let i = 0; i < normal_list.length; i++){
        if (!is_letter(word[i])) {
            let deleted_array = reversed_list.splice(i,0,normal_list[i])
        }
    }
    return reversed_list.join('')
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
            return replace_punctuation(element, reverse_word(element))
        }
        else {
            return element
        }}).join(' ')
}


exports.reverse_word = reverse_word
exports.reverse_sentence = reverse_sentence
