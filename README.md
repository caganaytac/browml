# 🌳 BrowML

**BrowML** is a minimal, dependency-free implementation of simple machine learning algorithms that run entirely in your browser. No build tools, no external libraries — just clean, readable JavaScript.

---

## 🎉 Features

- 🧠 Core ML algorithms: linear regression, logistic regression, decision trees, k-means
- 📦 Zero dependencies — pure JS
- 🌐 Runs natively in the browser
- 🔍 Transparent code for learning and experimentation
- 📊 Interactive demos with real-time feedback

---

## 📦 Installation

```bash
npm install browml

Or include directly in your HTML:

<script src="browml.min.js"></script>

🧠 Algorithms Included

Algorithm

Type

Status

Linear Regression

Supervised

✅ Stable

Logistic Regression

Supervised

✅ Stable

Decision Tree

Supervised

🤪 Experimental

K-Means Clustering

Unsupervised

✅ Stable

🧪 Example Usage

import { LinearRegression } from 'browml';

const model = new LinearRegression();
model.fit([[1], [2], [3]], [2, 4, 6]);
const prediction = model.predict([[4]]); // → [8]

📚 Documentation

Getting Started

API Reference

Live Demos

📝🔧 Development

git clone https://github.com/yourusername/browml.git
cd browml
npm install
npm run dev

🤝 Contributing

Pull requests are welcome! Please keep contributions minimal and dependency-free. See CONTRIBUTING.md for details.

📄 License

MIT — free to use, modify, and distribute.

💡 Philosophy

BrowML is built for clarity, accessibility, and experimentation. Whether you're learning ML or building lightweight browser tools, BrowML gives you the essentials — no clutter, no black boxes.