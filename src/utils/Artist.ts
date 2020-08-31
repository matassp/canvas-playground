export class Artist {
  ctx: CanvasRenderingContext2D;

  constructor(ctx: CanvasRenderingContext2D) {
    this.ctx = ctx;
  }

  drawLine = (from: { x: number; y: number }, to: { x: number; y: number }) => {
    this.ctx.beginPath();
    this.ctx.moveTo(from.x, from.y);
    this.ctx.lineTo(to.x, to.y);
    this.ctx.stroke();
  };

  drawQuadraticCurve = (
    from: { x: number; y: number },
    control: { x: number; y: number },
    to: { x: number; y: number }
  ) => {
    this.ctx.beginPath();
    this.ctx.moveTo(from.x, from.y);
    this.ctx.quadraticCurveTo(control.x, control.y, to.x, to.y);
    this.ctx.stroke();
  };
}
