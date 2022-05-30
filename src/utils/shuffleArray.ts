function shuffleArray<T>(inputArray: T[]): T[] {
  return inputArray.sort(() => Math.random() - 0.5);
}

export default shuffleArray;
