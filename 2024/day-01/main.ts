import { getTotalDistance } from "./part1.ts";
import { getSimilarityScore } from "./part2.ts";

if (import.meta.main) {
  console.log("Part 1 with sample input: ", getTotalDistance("input/sample.txt"));

  console.log("Part 2 with sample input: ", getSimilarityScore("input/sample.txt"));

  // console.log("Part 1 with AOC input: ", getTotalDistance('input/aoc.txt'));
  // console.log("Part 2 with AOC input: ", getSimilarityScore('input/aoc.txt'));
}
