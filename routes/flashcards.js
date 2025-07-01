const express = require('express');
const router = express.Router();
const Flashcard = require('../models/Flashcard');
const inferSubject = require('../subjectClassifier');

// Task 1: Add flashcard
router.post('/flashcard', async (req, res) => {
    const { student_id, question, answer } = req.body;
    if (!student_id || !question || !answer) {
        return res.status(400).json({ message: "Missing fields" });
    }

    const subject = inferSubject(question);
    const flashcard = new Flashcard({ student_id, question, answer, subject });
    await flashcard.save();

    res.status(201).json({
        message: "Flashcard added successfully",
        subject: subject
    });
});

// Task 2: Get flashcards
router.get('/get-subject', async (req, res) => {
    const { student_id, limit } = req.query;
    const num = parseInt(limit) || 5;

    if (!student_id) {
        return res.status(400).json({ message: "student_id is required" });
    }

    const allFlashcards = await Flashcard.find({ student_id });

    const subjectMap = {};
    allFlashcards.forEach(card => {
        if (!subjectMap[card.subject]) subjectMap[card.subject] = [];
        subjectMap[card.subject].push(card);
    });

    let mixedFlashcards = [];
    Object.values(subjectMap).forEach(group => {
        mixedFlashcards.push(group[0]);
    });

    mixedFlashcards = mixedFlashcards.sort(() => 0.5 - Math.random()).slice(0, num);

    res.json(mixedFlashcards);
});

module.exports = router;
