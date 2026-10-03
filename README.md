# 🤖 ML-Powered Chatbot

An intent-based chatbot built using **Machine Learning and NLP**. The chatbot understands a user's message, predicts the user's intent using a **TF-IDF + Logistic Regression** model, and returns an appropriate response.

## 🚀 Live Demo

**Frontend:**
https://my-ml-chatbot-frontend.onrender.com

**Backend API:**
https://my-ml-chatbot.onrender.com

## 📌 Project Overview

This project demonstrates how a traditional Machine Learning model can be used to build a simple chatbot.

Instead of directly using a Large Language Model (LLM), this chatbot follows an **intent classification approach**.

For example:

```text
User:
"I forgot my password"

        ↓

Text → TF-IDF Vectorization

        ↓

Logistic Regression Model

        ↓

Predicted Intent:
password_reset

        ↓

Bot Response:
"You can reset your password using the password reset option."
```

## 🧠 How It Works

The chatbot follows this pipeline:

```text
User Message
     ↓
Text Preprocessing
     ↓
TF-IDF Vectorization
     ↓
Logistic Regression
     ↓
Intent Prediction
     ↓
Response Mapping
     ↓
Chatbot Response
```

### 1. User Input

The user enters a message through the web interface.

Example:

```text
Where is my package?
```

### 2. TF-IDF Vectorization

The user's message is converted into numerical features using **TF-IDF (Term Frequency-Inverse Document Frequency)**.

### 3. Intent Classification

The TF-IDF features are passed to a **Logistic Regression** classifier.

Example:

```text
"Where is my package?"
        ↓
order_status
```

### 4. Response Generation

The predicted intent is mapped to a predefined chatbot response.

```text
order_status
        ↓
"You can check your order status from your orders page."
```

## 🎯 Supported Intents

The current chatbot supports the following intents:

* `password_reset`
* `order_status`
* `account_help`
* `technical_support`
* `payment_update`
* `business_hours`
* `service_info`
* `cancellation`
* `return_request`

## 🗂️ Project Structure

```text
my-ml-chatbot/
│
├── backend/
│   ├── app.py
│   ├── chatbot_model.pkl
│   ├── tfidf_vectorizer.pkl
│   └── requirements.txt
│
├── frontend/
│   ├── index.html
│   ├── style.css
│   └── script.js
│
└── README.md
```

## 🛠️ Technologies Used

### Machine Learning

* Python
* Pandas
* Scikit-learn
* TF-IDF Vectorizer
* Logistic Regression
* Joblib

### Backend

* FastAPI
* Pydantic
* Uvicorn

### Frontend

* HTML
* CSS
* JavaScript

### Deployment

* GitHub
* Render

## 📊 Dataset

The chatbot was trained using a CSV dataset containing two columns:

```text
user_input
intent
```

Example:

| user_input               | intent            |
| ------------------------ | ----------------- |
| I forgot my password     | password_reset    |
| Where is my package?     | order_status      |
| What time do you open?   | business_hours    |
| I need technical support | technical_support |

> **Note:** The current dataset is a small learning dataset created to understand the complete ML chatbot pipeline. It is intended for educational purposes rather than production-level chatbot performance.

## 💻 Run Locally

### 1. Clone the repository

```bash
git clone https://github.com/Shravani-Darshanam/my-ml-chatbot.git
```

```bash
cd my-ml-chatbot
```

### 2. Install backend dependencies

```bash
cd backend
pip install -r requirements.txt
```

### 3. Start the FastAPI backend

```bash
python -m uvicorn app:app --reload --port 8000
```

The backend will be available at:

```text
http://127.0.0.1:8000
```

FastAPI documentation:

```text
http://127.0.0.1:8000/docs
```

### 4. Start the frontend

Open another terminal:

```bash
cd frontend
python -m http.server 5500
```

Then open:

```text
http://127.0.0.1:5500
```

## 🔌 API Endpoint

### POST `/chat`

Request:

```json
{
    "message": "I forgot my password"
}
```

Response:

```json
{
    "intent": "password_reset",
    "response": "You can reset your password using the password reset option."
}
```

## 🌐 Deployment Architecture

The project is deployed using Render.

```text
                    Internet
                       │
                       ▼
        ┌──────────────────────────┐
        │   Render Static Site     │
        │        Frontend          │
        └────────────┬─────────────┘
                     │
                     │ POST /chat
                     ▼
        ┌──────────────────────────┐
        │      Render Web Service  │
        │       FastAPI Backend    │
        └────────────┬─────────────┘
                     │
                     ▼
        ┌──────────────────────────┐
        │     TF-IDF Vectorizer    │
        └────────────┬─────────────┘
                     │
                     ▼
        ┌──────────────────────────┐
        │   Logistic Regression    │
        │    Intent Classifier     │
        └────────────┬─────────────┘
                     │
                     ▼
              Intent Prediction
                     │
                     ▼
              Bot Response
```

## ⚠️ Limitations

This project is primarily designed for learning and demonstrating an ML chatbot pipeline.

The current dataset is small and contains limited variations of user messages. Therefore, the model may not generalize well to completely new or complex user queries.

The chatbot currently uses predefined responses rather than generating free-form responses.

## 🔮 Future Improvements

Possible improvements include:

* Expand the training dataset
* Add more variations for each intent
* Improve text preprocessing
* Experiment with different ML algorithms
* Add confidence scores
* Add a fallback response for unknown intents
* Store conversation history
* Add a database
* Improve the UI/UX
* Add more intents
* Experiment with transformer-based NLP models
* Add authentication and user accounts

## 👩‍💻 Author

**Shravani Darshanam**

B.Tech Electronics & Communication Engineering

GitHub:
https://github.com/Shravani-Darshanam

---

⭐ If you found this project useful, feel free to explore the repository and try the live chatbot.
