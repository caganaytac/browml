# Linear Regression — Vanilla JavaScript

A minimal and dependency-free implementation of simple machine learning algorithms.linear regression (single feature) using batch gradient descent.

## Overview
- Model: y ≈ m * x + b
- Training: minimize mean squared error (MSE) with gradient descent
- No libraries required — works in Node or browser

## Math (brief)
- Loss: L = (1/n) * Σ(yi - (m xi + b))^2
- Gradients:
    - dL/dm = (-2/n) * Σ xi * (yi - (m xi + b))
    - dL/db = (-2/n) * Σ (yi - (m xi + b))

## Implementation



## Tips
- Feature scaling (normalize xs) can speed convergence.
- Reduce learningRate if loss diverges; increase epochs for finer fit.
- For multiple features, extend to vectors/matrices or use normal equation for closed-form solution.

## License
MIT-style — use and adapt freely.
