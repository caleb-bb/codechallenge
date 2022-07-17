function is_letter(character) {
    let re = /[a-zA-Z]/
    return character.match(re)
}

function reverse_word(word) {
    let normal_list = word.split('')
    let reversed_list = reverse_letters(word).split('').filter(x => is_letter(x))

    for(let i = 0; i < normal_list.length; i++){
        if (!is_letter(word[i])) {
            let deleted_array = reversed_list.splice(i,0,normal_list[i])
        }
    }
    return reversed_list.join('')
}

function reverse_letters(word) {
    var reversed = word.split('').reverse().join('')
    if (reversed.slice(-1) == reversed.slice(-1).toUpperCase()) {
        return reversed.slice(0,1).toUpperCase() + reversed.substring(1).toLowerCase()
    }
    return reversed
}

function reverse_sentence(sentence, begin_at = 1) {
    split_sentence = sentence.split(' ')
    return split_sentence.map(function(element, index){
        if (index % 2 == begin_at){
            return reverse_word(element)
        }
        else {
            return element
        }}).join(' ')
}


exports.reverse_word = reverse_word
exports.reverse_letters = reverse_letters
exports.reverse_sentence = reverse_sentence
