export async function trainModel(model, trainData, epochs = 500, learningRate = 0.01, callback = null) {
        for (let epoch = 0; epoch < epochs; epoch++) {
        let dm = 0;
        let db = 0;
        
        for (const { x, y } of trainData) {
            const yPred = model.m * x + model.b;
            const error = yPred - y;
            dm += (2 / trainData.length) * error * x;
            db += (2 / trainData.length) * error;
        }

        model.m -= learningRate * dm;
        model.b -= learningRate * db;

        if (callback && epochs % 10 === 0) {
            callback(epoch, model);
        }
    }
}