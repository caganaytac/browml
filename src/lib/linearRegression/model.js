export class LinearRegression {
    constructor() {
        this.m = Math.random(); // slope
        this.b = Math.random(); // intercept
    }
    predict(x) {
        return this.m * x + this.b;
    }
}
