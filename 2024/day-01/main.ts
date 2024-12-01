import {getTotalDistance} from "./part1.ts";
import {getSimilarityScore} from "./part2.ts";

if (import.meta.main) {
  console.log("Part 1 Sample input: ", getTotalDistance('input/sample.txt'));

  console.log("Part 1 AOC input: ", getTotalDistance('input/aoc.txt'));

  console.log("Part 2 Sample: ", getSimilarityScore('input/sample.txt'));

  console.log("Part 2 AOC input: ", getSimilarityScore('input/aoc.txt'));
}
