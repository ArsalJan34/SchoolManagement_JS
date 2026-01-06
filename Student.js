const studentsTable = document.getElementById('students-table');
db.collection('students').get().then(snapshot => {
  snapshot.docs.forEach(doc => {
    const s = doc.data();
    const tr =document.createElement('tr');
    tr.innerHTML =`
    <td>${s.name}</td>
    <td>${s.age}</td>
    <td><button onclick="deleteStudent('${doc.id}')"
    >Delete</button></td>`;
    studentsTable.appendChild(tr)
  })
})
function addStudent(){
  const name = document.getElementById('sname').value;
  const age =document.getElementById('sage').value

}
