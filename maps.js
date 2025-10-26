const students = [
    { name: 'Rodolfo', testGrade: 7 },
    { name: 'Rogersson', testGrade: 5 },
    { name: 'Sebastian', testGrade: 8 },
    { name: 'David', testGrade: 9 },
    { name: 'Josué', testGrade: 3 },
    { name: 'Marta', testGrade: 2 },
    { name: 'Nair', testGrade: 10},
]

const newStudents = students.map (student=>{
    return{
        name: student.name,
        studentStatus: student.testGrade>=5? 'Promovido': 'Reprovado'
    }
})

console.log(newStudents)