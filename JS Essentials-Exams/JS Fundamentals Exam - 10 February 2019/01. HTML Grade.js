function solve(examPoints, homeworkPoint, homeworkMaxPoints) {
    let grade = 0;
    if (examPoints === 400) {
        grade = 6;
    } else {
        let totalPoints = (examPoints / 400) * 90 + (homeworkPoint / homeworkMaxPoints) * 10;
        grade = 3 + (2 * (totalPoints - 100 / 5) / (100 / 2));
        grade = grade < 3 ? 2 : grade;
        grade = grade > 6 ? 6 : grade;

    }
    console.log(grade.toFixed(2));
}

solve(0, 11, 0);