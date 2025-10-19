export class Visualizer {
    constructor(canvasOrId) {
        // accept either element or id string
        this.canvas = typeof canvasOrId === 'string' ? document.getElementById(canvasOrId) : canvasOrId;
        if (!this.canvas) {
            throw new Error(`Canvas element not found: ${canvasOrId}`);
        }

        // store DPR-aware sizes and initialize context
        this.dpr = window.devicePixelRatio || 1;
        // prefer layout (CSS) size from clientWidth/clientHeight — canvas.width may already be a backing buffer
        this.cssWidth = this.canvas.clientWidth || this.canvas.width;
        this.cssHeight = this.canvas.clientHeight || this.canvas.height;

        // set high-resolution backing store
        this.canvas.width = Math.max(1, Math.floor(this.cssWidth * this.dpr));
        this.canvas.height = Math.max(1, Math.floor(this.cssHeight * this.dpr));
        // ensure CSS size remains the same for layout
        this.canvas.style.width = this.cssWidth + 'px';
        this.canvas.style.height = this.cssHeight + 'px';

        this.ctx = this.canvas.getContext && this.canvas.getContext('2d');
        if (!this.ctx) {
            throw new Error('2D rendering context not available on the canvas');
        }

        // map drawing operations to CSS pixels (so other drawing code stays the same)
        this.ctx.setTransform(this.dpr, 0, 0, this.dpr, 0, 0);
        
        // logical drawing size in CSS pixels
        this.width = this.cssWidth;
        this.height = this.cssHeight;
        this.padding = 50;
    }
    
    // allow resizing (keeps high-DPI scaling)
    resize(cssWidth = this.canvas.clientWidth, cssHeight = this.canvas.clientHeight) {
        this.dpr = window.devicePixelRatio || 1;
        this.cssWidth = cssWidth;
        this.cssHeight = cssHeight;

        this.canvas.width = Math.max(1, Math.floor(this.cssWidth * this.dpr));
        this.canvas.height = Math.max(1, Math.floor(this.cssHeight * this.dpr));
        this.canvas.style.width = this.cssWidth + 'px';
        this.canvas.style.height = this.cssHeight + 'px';

        this.ctx.setTransform(this.dpr, 0, 0, this.dpr, 0, 0);

        this.width = this.cssWidth;
        this.height = this.cssHeight;
    }

    toCanvasX(x) {
        return this.padding + (x / 10) * (this.width - 2 * this.padding);
    }
    toCanvasY(y) {
        return this.height - this.padding - (y / 35) * (this.height - 2 * this.padding);
    }

    drawAxes() {
        const ctx = this.ctx;
        ctx.clearRect(0, 0, this.width, this.height);

        // Axes
        ctx.beginPath();
        ctx.moveTo(this.padding, this.height - this.padding);
        ctx.lineTo(this.width - this.padding, this.height - this.padding);
        ctx.moveTo(this.padding, this.height - this.padding);
        ctx.lineTo(this.padding, this.padding);
        ctx.strokeStyle = '#000';
        ctx.stroke();

        // Ticks
        ctx.fillStyle = '#000';
        ctx.font = '12px Arial';
        for (let i = 0; i <= 10; i++) {
            const x = this.toCanvasX(i);
            ctx.beginPath();
            ctx.moveTo(x, this.height - this.padding);
            ctx.lineTo(x, this.height - this.padding + 5);
            ctx.stroke();
            ctx.fillText(i.toString(), x - 5, this.height - this.padding + 15);
        }
        for (let i = 0; i <= 35; i += 5) {
            const y = this.toCanvasY(i);
            ctx.beginPath();
            ctx.moveTo(this.padding - 5, y);
            ctx.lineTo(this.padding, y);
            ctx.stroke();
            ctx.fillText(i, this.padding - 30, y + 5);
        }
    }

    drawDataPoints(data) {
        const ctx = this.ctx;
        data.forEach(point => {
            const x = this.toCanvasX(point.x);
            const y = this.toCanvasY(point.y);
            ctx.beginPath();
            ctx.arc(x, y, 3, 0, 2 * Math.PI);
            ctx.fillStyle = 'blue';
            ctx.fill();
        });
    }

    drawRegressionLine(model) {
        const ctx = this.ctx;
        // expecting model = { m: slope, b: intercept } in data coords
        const x0 = 0;
        const x1 = 10;
        const y0 = model.m * x0 + model.b;
        const y1 = model.m * x1 + model.b;

        ctx.beginPath();
        ctx.moveTo(this.toCanvasX(x0), this.toCanvasY(y0));
        ctx.lineTo(this.toCanvasX(x1), this.toCanvasY(y1));
        ctx.strokeStyle = 'red';
        ctx.lineWidth = 2;
        ctx.stroke();
    }

    // draw a single predicted point on the canvas (x,y in data coords)
    drawPredictionPoint(x, y, options = {}) {
        const ctx = this.ctx;
        const cx = this.toCanvasX(x);
        const cy = this.toCanvasY(y);
        const color = options.color || 'green';
        const radius = options.radius || 6;

        ctx.beginPath();
        ctx.arc(cx, cy, radius, 0, 2 * Math.PI);
        ctx.fillStyle = color;
        ctx.fill();

        if (options.label !== false) {
            ctx.fillStyle = options.labelColor || '#000';
            ctx.font = options.font || '12px Arial';
            ctx.fillText(`(${x.toFixed(2)}, ${y.toFixed(2)})`, cx + radius + 4, cy - radius - 4);
        }
    }

}
