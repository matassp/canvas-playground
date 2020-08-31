import './index.css';
import { Random } from './utils/Random';
import { Artist } from './utils/Artist';
import { MathUtils } from './utils/MathUtils';

const CANVAS_WIDTH = 200;
const CANVAS_HEIGHT = 100;

const TOP_LEFT = { x: 0, y: 0 };
const TOP_RIGHT = { x: CANVAS_WIDTH, y: 0 };
const BOTTOM_LEFT = { x: 0, y: CANVAS_HEIGHT };
const BOTTOM_RIGHT = { x: CANVAS_WIDTH, y: CANVAS_HEIGHT };

const getCanvas = () => {
  const canvas = document.createElement('canvas') as HTMLCanvasElement;

  canvas.width = CANVAS_WIDTH;
  canvas.height = CANVAS_HEIGHT;

  const ctx = canvas.getContext('2d');

  const artist = new Artist(ctx);
  const mathUtils = new MathUtils();
  const rnd = new Random();

  const lineCount = 4;
  ctx.lineWidth = 4;

  const step = CANVAS_WIDTH / lineCount;
  for (let i = 1; i <= lineCount; i++) {
    const from = { x: rnd.getInt(step * (i - 1), step * i), y: 0 };
    const to = { x: rnd.getInt(step * (i - 1), step * i), y: CANVAS_HEIGHT };
    const control = rnd.getRandomizedPointByRadius(
      mathUtils.getMiddlePoint(from, to),
      10
    );
    artist.drawQuadraticCurve(from, control, to);
  }

  artist.drawLine(
    rnd.getRandomizedPoint(
      mathUtils.getMiddlePoint(TOP_LEFT, BOTTOM_LEFT),
      0,
      -20,
      0,
      20
    ),
    rnd.getRandomizedPoint(
      mathUtils.getMiddlePoint(TOP_RIGHT, BOTTOM_RIGHT),
      0,
      -20,
      0,
      20
    )
  );

  return canvas;
};

(function setupCanvas() {
  const wrapper = document.getElementById('canvas-wrapper');
  wrapper.classList.add('canvas');
  const canvas = getCanvas();
  wrapper.appendChild(canvas);
})();
