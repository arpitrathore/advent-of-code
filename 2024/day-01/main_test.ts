import { assertEquals } from "@std/assert";
import { getTotalDistance } from "./part1.ts";
import { getSimilarityScore } from "./part2.ts";

Deno.test(function getTotalDistanceTest() {
  assertEquals(getTotalDistance("input/sample.txt"), 11);
});

Deno.test(function getSimilarityScoreTest() {
  assertEquals(getSimilarityScore("input/sample.txt"), 31);
});
