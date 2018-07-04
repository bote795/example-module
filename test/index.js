import { assert } from "chai";
import defaultAwesomeFunction from "../lib/index";

describe("Awesome test.", () => {
  it("should test default awesome function", () => {
    const expectedVal =
      "I am the Default Awesome Function, fellow comrade! - Nick";
    assert(
      defaultAwesomeFunction("Nick") === expectedVal,
      "Default not awesome :("
    );
  });
});
