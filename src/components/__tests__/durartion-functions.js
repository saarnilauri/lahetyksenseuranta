import { format, pad } from "../duration";

describe("Duration functions", () => {
  it("formats correctly", () => {
    expect(format(126)).toMatch("2:06");
    expect(format(3726)).toMatch("1:02:06");
  });
  it("adds leading zero with pad function", () => {
    expect(pad(2)).toMatch("02");
  });
});
