export function meanSquaredError(model, testData) {
    const mse = testData.reduce((acc, { x, y }) => acc + (model.predict(x) - y) ** 2, 0) / testData.length;
    return mse;
}  