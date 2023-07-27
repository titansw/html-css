import React, { useState, useEffect } from 'react';
import './styles.css'
import { Card, CardProps } from '../../components/Card'

type ProfileResponse = {
  name: string
  avatar_url: string
}

type User = {
  name: string
  avatar: string
}

export function Home() {
  //Estado > nome da var, função que att o estado = useState('valor inicial')
  const [studentName, setStudentName] = useState();
  const [students, setStudents] = useState<CardProps[]>([]);
  const [user, setUser] = useState<User>({} as User);

  function handleAddStudent() {
    const newStudent = {
      name: studentName,
      time: new Date().toLocaleTimeString("pt-br", {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      })
    }

    //Imutabilidade - O conteúdo da variável não deve ser modificado e sim substituído.

    //A cada vez q roda a função, cria um novo array com o q já tinha dentro e adiciona o novo
    setStudents(preState => [...preState, newStudent])
  }

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('https://api.github.com/users/rodrigorgtic');
      const data = await response.json() as ProfileResponse;

      setUser({
        name: data.name,
        avatar: data.avatar_url,
      });
    }

    fetchData();
  }, []);

return (
  <div className='container'>
    <header>
      <h1>Lista de Presença</h1>
      <div>
        <strong>{user.name}</strong>
        <img src={user.avatar} alt="Foto de perfil" />
      </div>
    </header>

    <input type="text" placeholder="Digite o nome..."
      onChange={e => setStudentName(e.target.value)} />

    <button type="button" onClick={handleAddStudent}>
      Adicionar
    </button>

    {
      students.map(student => <Card
        key={student.time}
        name={student.name}
        time={student.time} />)
    }
  </div>
)
}