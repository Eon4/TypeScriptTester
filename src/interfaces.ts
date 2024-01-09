interface Student {
    first_name: string;
    last_name: string;
    phone: number;
    id: number;
  }
  
  interface ClassData {
    class: string;
    student_count: number; 
    teacher: string;
    id: number;
    students: Student[];
  }
  

  let data: ClassData[] = [
    {
      class: "8b",
      student_count: 22,
      teacher: "Mr. Wright",
      id: 12,
      students: [
        {
          first_name: "Troy",
          last_name: "Baker",
          phone: 744332113,
          id: 221,
        },
        {
          first_name: "Evelyn",
          last_name: "Parker",
          phone: 342842443,
          id: 212,
        },
        {
          first_name: "Petra",
          last_name: "Mukuna",
          phone: 112342753,
          id: 207,
        },
      ],
    },
  ];


  function getClassData(student: Student) {
    console.log("Function called with student:", student);
    return student.first_name;
  }
  
  
  // Eksempel på en funktion, der bruger ClassData
//   function getClassData(classData: ClassData): string {
//     return `Class: ${classData.class}, Teacher: ${classData.teacher}, Student Count: ${classData.student_count}`;
//   }
  