import { assert } from 'chai'
import { expressionsMatter} from "../../../src/8/expressionsMatter /expressionsMatter";

describe("Small values", function() {
    it("Should work", function() {
        assert.equal(expressionsMatter(2, 1, 2), 6);
        assert.equal(expressionsMatter(2, 1, 1), 4);
        assert.equal(expressionsMatter(1, 1, 1), 3);
        assert.equal(expressionsMatter(1, 2, 3), 9);
        assert.equal(expressionsMatter(1, 3, 1), 5);
        assert.equal(expressionsMatter(2, 2, 2), 8);
    })
});
