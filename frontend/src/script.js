document.getElementById("studentForm").addEventListener("submit", function(event) {
    event.preventDefault();
  
    const name = document.getElementById("name").value;
    const age = document.getElementById("age").value;
    const grade = document.getElementById("grade").value;
    const section = document.getElementById("section").value;
  
    if (name && age && grade && section) {
      addStudent(name, age, grade, section);
      this.reset(); // Reset the form after adding the student
    }
  });
  
  function addStudent(name, age, grade, section) {
    const studentList = document.getElementById("studentList");
    const li = document.createElement("li");
    li.innerHTML = ${name} - ${age} - ${grade} - ${section} <button onclick="removeStudent(this)">Delete</button>;
    studentList.appendChild(li);
  }
  
  function removeStudent(button) {
    button.parentElement.remove();
  }tton.parentElement.remove();