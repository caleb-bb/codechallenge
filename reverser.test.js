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
        expect(reverser.reverse_sentence("The quick brown Fox jumps over the lazy Dog")).toBe("The kciuq brown Xof jumps revo the yzal Dog");
    }
)
