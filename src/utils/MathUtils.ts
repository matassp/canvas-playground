export class MathUtils {
  getMiddlePoint = (
    point1: { x: number; y: number },
    point2: { x: number; y: number }
  ) => ({
    x: (point1.x + point2.x) / 2,
    y: (point1.y + point2.y) / 2,
  });
}
