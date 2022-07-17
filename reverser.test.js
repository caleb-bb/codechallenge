const reverser = require('./reverser.js')

// test('function should do thing', () =>
//     {
//         expect(reverser.function(arg)).toBe(result_you_want);
//     }
// )

test('reverse_word should reverse a single word', () =>
    {
        expect(reverser.reverse_word("word")).toBe("drow");
    }
)

test('reverse_word should preserve capitalization', () =>
    {
        expect(reverser.reverse_word("Word")).toBe("Drow");
    }
)

test('reverse_sentence should reverse every other word in a sentence while preserving capitalization', () =>
    {
        expect(reverser.reverse_sentence("the quick brown fox jumps over the lazy dog")).toBe("the kciuq brown xof jumps revo the yzal dog");
    }
)

test('reverse_word should have punctuation in the same place as before', () =>
    {
        expect(reverser.reverse_sentence("Hi! My na1me i3s... Paul!")).toBe("Hi! Ym na1me s3i... Paul!");
    }
)
