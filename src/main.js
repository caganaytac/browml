import { generateData, trainTestSplit } from './utils.js';
import { LinearRegression } from './lib/linearRegression/model.js';
import { trainModel } from './lib/linearRegression/trainer.js';
import { meanSquaredError } from './lib/linearRegression/evaluator.js';
import { Visualizer } from './lib/visualizer.js';


const data = generateData(120);
const { train, test } = trainTestSplit(data, 0.2);
const model = new LinearRegression();

const visualizer = new Visualizer("chart");
visualizer.resize(); // ensure DPR sizing is applied

window.addEventListener('resize', () => {
    // keep CSS pixel size from layout (clientWidth) and re-scale backing store
    visualizer.resize(visualizer.canvas.clientWidth, visualizer.canvas.clientHeight);
});

// Initial Visualization
visualizer.drawAxes();
visualizer.drawDataPoints(data); 
visualizer.drawRegressionLine(model);

// Training with visualization callback
await trainModel(model, train, 500, 0.01, () => {
    visualizer.drawAxes();
    visualizer.drawDataPoints(data);
    visualizer.drawRegressionLine(model);
}).then(() => {
    // Evaluation
    const mse = meanSquaredError(model, test);
    console.log(`Mean Squared Error on test set: ${mse.toFixed(4)}`);
})

// Prediction
function predictValue() {
    const xInput = parseFloat(document.getElementById("xInput").value);
    if (isNaN(xInput)) return;

    const yOutput = model.predict(xInput);
    document.getElementById("output").innerText = `Predicted y: ${yOutput.toFixed(2)}`;


    visualizer.drawAxes();
    visualizer.drawDataPoints(data);
    visualizer.drawRegressionLine(model); 
    visualizer.drawPredictionPoint(xInput, yOutput);
}

document.getElementById('predictBtn').addEventListener('click', predictValue);

