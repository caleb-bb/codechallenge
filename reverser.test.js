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
        expect(reverser.reverse_sentence("The quick brown Fox jumps over the lazy dog")).toBe("The kciuq brown Xof jumps revo the yzal dog");
    }
)

test('reverse_sentence should have punctuation in the same place as before', () =>
    {
        expect(reverser.reverse_sentence("Hi! My na1me i3s... Paul!")).toBe("Hi! Ym na1me s3i... Paul!");
    }
)

test('reverse_sentence can start at index 0', () =>
    {
        expect(reverser.reverse_sentence("The quick brown Fox jumps over the lazy dog", 0)).toBe("Eht quick nworb Fox spmuj over eht lazy god");
    }
)

test('return empty string for empty string', () =>
    {
        expect(reverser.reverse_sentence("")).toBe("");
    }
)


test('works on German', () =>
    {
        expect(reverser.reverse_sentence("Übermensch: was mich nicht umbringt, macht mich stärker.")).toBe("Übermensch: saw mich thcin umbringt, thcam mich rekräts.");
    }
)

test('works on German with second index and switches capital umlauts', () =>
    {
        expect(reverser.reverse_sentence("Übermensch: was mich nicht umbringt, macht mich stärker.", 0)).toBe("Hcsnemrebü: was hcim nicht tgnirbmu, macht hcim stärker.");
    }
)
