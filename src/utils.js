// Generate synthetic data
export function generateData(numPoints = 50) {
    const data = [];
    for (let i = 0; i < numPoints; i++) {
        const x = Math.random() * 10;               // Random x between 0 and 10
        const noise = (Math.random() - 0.5) * 2;    // Random noise between -1 and 1
        const y = 3 * x + 1 + noise;                // Linear relation with noise
        data.push({ x, y });
    }
    return data;
}

// Split data into train/test
export function trainTestSplit(data, testRatio = 0.2) {
    const shuffled = [...data].sort(() => Math.random() - 0,5);
    const testSize = Math.floor(data.length * testRatio);
    return { 
        test: shuffled.slice(0, testSize), 
        train: shuffled.slice(testSize)
    };
}