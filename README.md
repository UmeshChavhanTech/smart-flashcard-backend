#  Smart Flashcard Backend

This project provides a backend API for a smart flashcard system. Flashcards are automatically categorized into subjects based on the question text.

##  Tech Stack

- Node.js + Express
- MongoDB + Mongoose
- dotenv

##  API

### Add Flashcard
POST /api/flashcard

```json
{
  "student_id": "stu001",
  "question": "What is Newton's Second Law?",
  "answer": "Force equals mass times acceleration"
}
