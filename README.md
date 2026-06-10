# 🌳 BrowML

**BrowML** is a minimal, dependency-free implementation of simple machine learning algorithms that run entirely in your browser. No build tools, no external libraries — just vanilla JavaScript.

---

## 🎉 Features

- 🧠 Core ML algorithms: Supervised Learning, Unsupervised Learning, Reward-based Learning
- 📦 Zero dependencies — pure JS
- 🌐 Runs natively in the browser (no server required)
- 🔍 Transparent code for learning and experimentation
- 📊 Interactive demos with real-time feedback

---

## 📦 Installation

```bash
npm install browml
```

Or include directly in your HTML:

```html
<script src="browml.js"></script>
```

---

## 🧠 Algorithms Included

| Algorithm          | Type         | Status  |
|--------------------|--------------|---------|
| Linear Regression  | Supervised   | ✅ Stable |
| Logistic Regression| Supervised   | coming soon |
| Decision Trees     | Supervised   | coming soon |
| K-Means Clustering | Unsupervised | coming soon |

---

## 🧪 Example Usage

```ts
import { LinearRegression } from 'browml';

const model = new LinearRegression();
model.fit([[1], [2], [3]], [2, 4, 6]);
const prediction = model.predict([[4]]); // → [8]
```

---

## 📚 Documentation

* Getting Started  
* API Reference  
* Live Demos  

---

## 📝🔧 Development

```bash
git clone https://github.com/caganaytac/browml.git
cd browml
npm install
npm run dev
```

---

## 🤝 Contributing
    
    Reach me via E-mail: cagan.aytac09@gmail.com
