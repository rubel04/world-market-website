function calculateFinalScore(obj) {
  if (typeof obj.name == "string" && typeof obj == "object") {
    if (
      typeof obj.testScore == "number" &&
      typeof obj.schoolGrade == "number" &&
      obj.testScore <= 50 &&
      obj.schoolGrade <= 30
    ) {
      if (obj.isFFamily == true) {
        const sum = obj.testScore + obj.schoolGrade + 20;
        if (sum >= 80) {
          return true;
        }
      } else {
        return false;
      }
      }
  } else {
    return "Invalid Input";
  }
}
