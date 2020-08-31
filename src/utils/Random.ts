export class Random {
  getGaussianRandomWithOptions = (mean: number, sd: number) => {
    return (
      mean + 2.0 * sd * (Math.random() + Math.random() + Math.random() - 1.5)
    );
  };

  getGaussianRandom = () => {
    let number = 0;
    for (let i = 0; i < 5; i++) {
      number += Math.random();
    }
    return number / 4;
  };

  getAngle = () => {
    return this.getGaussianRandom() * Math.PI * 2;
  };

  getInt = (from: number, to: number, spacing = 0): number => {
    const adjustedTo = to - spacing;
    const adjustedFrom = from + spacing;
    return (
      Math.floor(this.getGaussianRandom() * (adjustedTo - adjustedFrom)) +
      adjustedFrom
    );
  };

  getArray = (length: number, from: number, to: number): number[] => {
    const randomArray = new Array<number>(length).fill(0);
    return randomArray.map((a, index) => {
      const value = this.getInt(from, to);
      return value;
    });
  };

  getRandomizedPointByRadius = (
    point: { x: number; y: number },
    radius: number
  ) => ({
    x: this.getInt(point.x - radius, point.x + radius),
    y: this.getInt(point.y - radius, point.y + radius),
  });

  getRandomizedPoint = (
    point: { x: number; y: number },
    left: number,
    top: number,
    right: number,
    bottom: number
  ) => ({
    x: this.getInt(point.x + left, point.x + right),
    y: this.getInt(point.y + bottom, point.y + top),
  });
}
