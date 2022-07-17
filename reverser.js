function is_letter(character) {
    let re = /\p{Letter}/gu
    return character.match(re)
}

function reverse_word(word) {
    let normal_list = word.split('')
    let reversed_list = reverse_letters(word).split('')

    //loop to re-insert punctuation/numbers from original word
    for(let i = 0; i < normal_list.length; i++){
        if (!is_letter(word[i])) {
            let deleted_array = reversed_list.splice(i,0,normal_list[i])
        }
    }
    return reversed_list.join('')
}

//reverse just the letters, punctuation/numbers reinserted later
function reverse_letters(word) {
    var reversed_letters_only = word.split('').reverse().filter(x => is_letter(x)).join('')
    let final_letter = reversed_letters_only.slice(-1)

    if (final_letter == final_letter.toUpperCase()) {
        return reversed_letters_only.slice(0,1).toUpperCase() + reversed_letters_only.substring(1).toLowerCase()
    }
    return reversed_letters_only
}

function reverse_sentence(sentence, begin_at = 1) {
    split_sentence = sentence.split(' ')
    return split_sentence.map(function(word, index){
        if (index % 2 == begin_at){
            return reverse_word(word)
        }
        else {
            return word
        }}).join(' ')
}


exports.reverse_word = reverse_word
exports.reverse_letters = reverse_letters
exports.reverse_sentence = reverse_sentence
