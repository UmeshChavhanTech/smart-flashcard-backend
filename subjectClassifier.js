function inferSubject(text) {
    text = text.toLowerCase();

    const keywords = {
        physics: ["newton", "velocity", "acceleration", "force", "gravity", "energy"],
        chemistry: ["atom", "molecule", "reaction", "acid", "base", "compound"],
        biology: ["photosynthesis", "cell", "organism", "plant", "animal", "dna"],
        math: ["equation", "algebra", "geometry", "calculus", "matrix"],
        history: ["empire", "revolution", "civilization", "battle", "independence"]
    };

    for (const subject in keywords) {
        for (const keyword of keywords[subject]) {
            if (text.includes(keyword)) {
                return subject.charAt(0).toUpperCase() + subject.slice(1);
            }
        }
    }

    return "General";
}

module.exports = inferSubject;
