const { describe, it } = require("node:test");
const assert = require("node:assert/strict");
const { sort } = require("./index");

describe("sort", () => {
  describe("STANDARD — neither bulky nor heavy", () => {
    it("returns STANDARD for a small, light package", () => {
      assert.equal(sort(10, 10, 10, 5), "STANDARD");
    });

    it("returns STANDARD when all values are just under thresholds", () => {
      assert.equal(sort(99, 99, 99, 19.9), "STANDARD");
    });
  });

  describe("SPECIAL — bulky only (volume >= 1,000,000 cm^3)", () => {
    it("returns SPECIAL when volume is exactly at threshold", () => {
      assert.equal(sort(100, 100, 100, 5), "SPECIAL");
    });

    it("returns SPECIAL when volume exceeds threshold", () => {
      assert.equal(sort(200, 200, 200, 1), "SPECIAL");
    });
  });

  describe("SPECIAL — bulky only (single dimension >= 150 cm)", () => {
    it("returns SPECIAL when width is at threshold", () => {
      assert.equal(sort(150, 1, 1, 5), "SPECIAL");
    });

    it("returns SPECIAL when height is at threshold", () => {
      assert.equal(sort(1, 150, 1, 5), "SPECIAL");
    });

    it("returns SPECIAL when length exceeds threshold", () => {
      assert.equal(sort(1, 1, 200, 5), "SPECIAL");
    });
  });

  describe("SPECIAL — heavy only (mass >= 20 kg)", () => {
    it("returns SPECIAL when mass is exactly at threshold", () => {
      assert.equal(sort(10, 10, 10, 20), "SPECIAL");
    });

    it("returns SPECIAL when mass exceeds threshold", () => {
      assert.equal(sort(10, 10, 10, 50), "SPECIAL");
    });
  });

  describe("REJECTED — both bulky and heavy", () => {
    it("returns REJECTED when bulky by volume and heavy", () => {
      assert.equal(sort(100, 100, 100, 20), "REJECTED");
    });

    it("returns REJECTED when bulky by dimension and heavy", () => {
      assert.equal(sort(150, 1, 1, 25), "REJECTED");
    });

    it("returns REJECTED when all values are well over thresholds", () => {
      assert.equal(sort(200, 200, 200, 100), "REJECTED");
    });
  });
});
