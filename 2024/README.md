# Advent of code 2024

Doing this year with TypeScript and [Deno](https://deno.com/blog/advent-of-code-2024)

## Setup
- For each day, create a new file `aoc.txt` inside `input` directory
- Copy and the [puzzle input](https://adventofcode.com/2024/day/1/input) from advent and paste in the `aoc.txt file`
- Run the `main.ts` file with deno allowing read permission
```shell
❯ deno run -R main.ts
Part 1 Sample input:  11
Part 1 AOC input:  xxxx
Part 2 Sample:  31
Part 2 AOC input:  xxxx
```
- Run the test case
```sh
❯ deno test -R
running 2 tests from ./main_test.ts
getTotalDistanceTest ... ok (0ms)
getSimilarityScoreTest ... ok (0ms)

ok | 2 passed | 0 failed (1ms)
```