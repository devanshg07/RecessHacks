<<<<<<< HEAD
# ...existing code...
=======
>>>>>>> fd99dd0 (added an updated frontend)
from flask import Flask, request, jsonify
from flask_cors import CORS
import openai
import os
from dotenv import load_dotenv
<<<<<<< HEAD
import sqlite3
from datetime import datetime
=======
>>>>>>> fd99dd0 (added an updated frontend)

load_dotenv()

app = Flask(__name__)
CORS(app)

openai.api_key = os.getenv("OPENAI_API_KEY")

<<<<<<< HEAD
# Use a local SQLite DB instead of in-memory history
DB_PATH = os.getenv("DATABASE_PATH", "conversation.db")

def init_db():
    conn = sqlite3.connect(DB_PATH)
    cur = conn.cursor()
    cur.execute(
        """
        CREATE TABLE IF NOT EXISTS messages (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            role TEXT NOT NULL,
            content TEXT NOT NULL,
            created_at TEXT NOT NULL
        )
        """
    )
    conn.commit()
    conn.close()

def add_message(role: str, content: str):
    conn = sqlite3.connect(DB_PATH)
    cur = conn.cursor()
    cur.execute(
        "INSERT INTO messages (role, content, created_at) VALUES (?, ?, ?)",
        (role, content, datetime.utcnow().isoformat()),
    )
    conn.commit()
    conn.close()

def get_history():
    conn = sqlite3.connect(DB_PATH)
    cur = conn.cursor()
    cur.execute("SELECT role, content FROM messages ORDER BY id ASC")
    rows = cur.fetchall()
    conn.close()
    return [{"role": r[0], "content": r[1]} for r in rows]

# initialize DB on startup
init_db()
=======
# Store conversation history
conversation_history = []
>>>>>>> fd99dd0 (added an updated frontend)

@app.route("/ask", methods=["POST"])
def ask():
    data = request.json
    question = data.get("question")

<<<<<<< HEAD
    # Add user message to DB
    add_message("user", question)

    try:
        conversation_history = get_history()

=======
    # Add user message to history
    conversation_history.append({"role": "user", "content": question})

    try:
>>>>>>> fd99dd0 (added an updated frontend)
        response = openai.ChatCompletion.create(
            model="gpt-4o-mini",
            messages=conversation_history
        )

        answer = response.choices[0].message.content
<<<<<<< HEAD
        # Add AI response to DB
        add_message("assistant", answer)
=======
        # Add AI response to history
        conversation_history.append({"role": "assistant", "content": answer})
>>>>>>> fd99dd0 (added an updated frontend)

        return jsonify({"answer": answer})
    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == "__main__":
    app.run(debug=True)
<<<<<<< HEAD
# ...existing
=======
>>>>>>> fd99dd0 (added an updated frontend)
