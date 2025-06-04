from flask import Flask, request, jsonify
import pickle
import numpy as np
from dotenv import load_dotenv
import os
from flask_cors import CORS

# Load environment variables from .env file
load_dotenv()

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

def load_model_and_vectorizer():
    try:
        vectorizer = pickle.load(open('vectorizer1.pkl', 'rb'))
        model = pickle.load(open('model1.pkl', 'rb'))
        return vectorizer, model
    except Exception as e:
        print(f"Error loading model files: {str(e)}")
        return None, None

vectorizer, model = load_model_and_vectorizer()

@app.route('/predict', methods=['POST'])
def predict():
    try:
        if vectorizer is None or model is None:
            return jsonify({"error": "Model not loaded properly"}), 500

        data = request.get_json()
        if not data or 'Description' not in data:
            return jsonify({"error": "No description provided"}), 400
        
        description = data['Description']
        # Transform the input using the loaded vectorizer
        X_input = vectorizer.transform([description])
        prediction = model.predict(X_input)[0]

        # Convert to native Python type if necessary
        prediction = int(prediction) if isinstance(prediction, np.int64) else prediction

        return jsonify({"BNS_Section": prediction})
    except Exception as e:
        return jsonify({"error": str(e)}), 500

@app.route('/health', methods=['GET'])
def health_check():
    return jsonify({"status": "healthy"}), 200

if __name__ == '__main__':
    host = os.getenv('FLASK_HOST', '0.0.0.0')
    port = int(os.getenv('FLASK_PORT', 5000))
    debug = os.getenv('FLASK_DEBUG', 'True').lower() == 'true'
    
    print(f"Starting Flask server on {host}:{port}")
    app.run(debug=debug, host=host, port=port)