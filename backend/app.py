from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import joblib


# Create FastAPI app
app = FastAPI()


# Allow frontend requests
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


# Load ML model and vectorizer
model = joblib.load("chatbot_model.pkl")
vectorizer = joblib.load("tfidf_vectorizer.pkl")


# Bot responses
responses = {
    "password_reset": "You can reset your password using the password reset option.",
    "order_status": "You can check your order status from your orders page.",
    "account_help": "Sure! I can help you with your account.",
    "technical_support": "Sure! Let's troubleshoot your technical issue.",
    "payment_update": "You can update your payment method from your account settings.",
    "business_hours": "Our working hours are 9 AM to 6 PM.",
    "service_info": "Sure! I can provide information about our services.",
    "cancellation": "Sure! I can help you with your cancellation request.",
    "return_request": "Sure! I can help you with your return request."
}


# Request format
class ChatRequest(BaseModel):
    message: str


# Chat API
@app.post("/chat")
def chat(request: ChatRequest):

    message_tfidf = vectorizer.transform([request.message])

    intent = model.predict(message_tfidf)[0]

    response = responses[intent]

    return {
        "intent": intent,
        "response": response
    }


print("Model and vectorizer loaded successfully!")