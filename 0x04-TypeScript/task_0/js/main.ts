// task_0/js/main.ts

// Define the Student interface
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

// Create two students
const student1: Student = {
  firstName: 'John',
  lastName: 'Doe',
  age: 20,
  location: 'City A',
};

const student2: Student = {
  firstName: 'Jane',
  lastName: 'Smith',
  age: 22,
  location: 'City B',
};

// Create an array named studentsList containing the two variables
const studentsList: Student[] = [student1, student2];

// Render a table using Vanilla JavaScript
document.addEventListener('DOMContentLoaded', () => {
  const table = document.createElement('table');
  const tbody = document.createElement('tbody');

  // Loop through the studentsList and append a new row for each student
  studentsList.forEach((student) => {
    const row = document.createElement('tr');

    // Create cells for firstName and location
    const firstNameCell = document.createElement('td');
    const locationCell = document.createElement('td');

    // Set the text content of the cells
    firstNameCell.textContent = student.firstName;
    locationCell.textContent = student.location;

    // Append cells to the row
    row.appendChild(firstNameCell);
    row.appendChild(locationCell);

    // Append the row to the tbody
    tbody.appendChild(row);
  });

  // Append tbody to the table
  table.appendChild(tbody);

  // Append the table to the body of the document
  document.body.appendChild(table);
});
