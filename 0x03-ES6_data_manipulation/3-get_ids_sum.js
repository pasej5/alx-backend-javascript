const getStudentIdsSum = (students) => {
  const idSum = students.reduce((acc, value) => acc + value.id, 0);
  return idSum;
};

export default getStudentIdsSum;
