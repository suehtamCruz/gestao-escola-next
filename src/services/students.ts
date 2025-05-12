export interface Student {
  id?: string;
  codAluno: number;
  nome: string;
  dataNascimento: Date | string;
  cpf: string;
  endereco: string;
  celular: string;
  codEscola: number;
}

export const getStudents = async () => {
  const response = await fetch(`${process.env.API_URL}/students`);
  const data = await response.json();
  return data as Student[];
};

export const getStudentById = async (id: string) => {
  const response = await fetch(`${process.env.API_URL}/students/${id}`);
  const data = await response.json();
  return data as Student;
};

export const getStudentByName = async (name: string) => {
  const param = "?name=" + name;

  const response = await fetch(
    `${process.env.API_URL}/students/find-by-name${param}`
  );
  const data = await response.json();
  return data as Student;
};

 export const createStudent = async (student: Student) => {
    const response = await fetch(`${process.env.API_URL}/students`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(student),
    });
    const data = await response.json();
    return data as Student;
  }; 

  export const updateStudent = async (student: Student) => {
    const response = await fetch(`${process.env.API_URL}/students/${student.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(student),
    });
    const data = await response.json();
    return data as Student;
  };

  export const deleteStudent = async (id: string) => {
    const response = await fetch(`${process.env.API_URL}/students/${id}`, {
      method: "DELETE",
    });
    const data = await response.json();
    return data as Student;
  };
