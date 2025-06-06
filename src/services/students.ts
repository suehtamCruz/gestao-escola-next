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

const headers = {
  "Content-Type": "application/json",
  Accept: "application/json",
  Authorization: `Bearer ${localStorage.getItem("token")}`,
};

export const getStudents = async () => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/students`, {
    headers,
  });
  const data = await response.json();
  return data as Student[];
};

export const getStudentById = async (id: string) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/students/${id}`,
    {
      headers,
    }
  );
  const data = await response.json();
  return data as Student;
};

export const getStudentByName = async (name: string) => {
  const param = "?name=" + name;

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/students/find-by-name${param}`
  );
  const data = await response.json();
  return data as Student;
};

export const createStudent = async (student: Student) => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/students`, {
    method: "POST",
    headers,
    body: JSON.stringify(student),
  });
  const data = await response.json();
  return data as Student;
};

export const updateStudent = async (student: Student) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/students/${student.id}`,
    {
      method: "PUT",
      headers,
      body: JSON.stringify(student),
    }
  );
  const data = await response.json();
  return data as Student;
};

export const deleteStudent = async (id: string) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/students/${id}`,
    {
      method: "DELETE",
      headers,
    }
  );
  const data = await response.json();
  return data as Student;
};
