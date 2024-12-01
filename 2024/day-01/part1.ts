export const getTotalDistance = (filePath: string): number => {
  const inputString = Deno.readTextFileSync(filePath);

  const lines = inputString.split("\n");

  const leftList: number[] = [];
  const rightList: number[] = [];

  for (const line of lines) {
    const numString: string[] = line.split("   ");

    const leftNum: number = Number.parseInt(numString[0]);
    const rightNum: number = Number.parseInt(numString[1]);

    leftList.push(leftNum);
    rightList.push(rightNum);
  }

  leftList.sort();
  rightList.sort();

  let result: number = 0;
  for (let i = 0; i < leftList.length; i++) {
    result += Math.abs(leftList[i] - rightList[i]);
  }
  return result;
};
