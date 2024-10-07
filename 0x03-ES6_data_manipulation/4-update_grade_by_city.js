export default function updateStudentGradeByCity(students, city, newGrades) {
  const FilteredStudents = students.filter((student) => student.location === city);

  const ans = FilteredStudents.map((student) => {
    for (const grade of newGrades) {
      if (student.id === grade.studentId) {
        student.grade = grade.grade;
      }
    }
    if (student.grade === undefined) {
      student.grade = 'N/A';
    }
    return student;
  });
  return ans;
}
