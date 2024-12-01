export const getSimilarityScore = (filePath: string): number => {
  const inputString = Deno.readTextFileSync(filePath);

  const lines = inputString.split("\n");

  const leftList: number[] = [];
  const rightMap = new Map<number, number>();

  for (const line of lines) {
    const numString: string[] = line.split("   ");

    const leftNum: number = Number.parseInt(numString[0]);
    const rightNum: number = Number.parseInt(numString[1]);

    leftList.push(leftNum);
    rightMap.set(rightNum, (rightMap.get(rightNum) ?? 0) + 1);
  }

  let result: number = 0;
  for (let i = 0; i < leftList.length; i++) {
    result += leftList[i] * (rightMap.get(leftList[i]) ?? 0);
  }
  return result;
};
