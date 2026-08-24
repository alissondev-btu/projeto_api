import { useState, useEffect } from 'react'

function App() {

  // Crie duas const para guardar e carregar tarefas
  const [tarefas, setTarefas] = useState([])
  const [carregando, setCarregando] = useState(true)

  // useEffect com fetch (requisições assíncronas)
  useEffect(() => {

    fetch('http://jsonplaceholder.typicode.com/todos?_limit=20')
      .then((resposta) => resposta.json())
      .then((dados) => {
        setTarefas(dados)
        setCarregando(false)
      })

  }, [])

  return (
    <>
      <div className="container mt-5">

        <div className="card shadow">

          <div className="card-body">

            <h2 className="text-primary mb-3">
              Tarefas vindas da API
            </h2>

            <p className="text-muted">
              Consumindo dados de JSONPLACEHOLDER via fetch e useEffect
            </p>

            {carregando ? (

              <div className="alert alert-info">
                Carregando...
              </div>

            ) : (

              <ul className="list-group">

                {tarefas.map((item) => (

                  <li
                    key={item.id}
                    className="list-group-item d-flex justify-content-between align-items-center"
                  >

                    <span>
                      {item.title}
                    </span>

                    {item.completed ? (
                      <span className="badge bg-success">
                        Concluído
                      </span>
                    ) : (
                      <span className="badge bg-warning text-dark">
                        Pendente
                      </span>
                    )}

                  </li>

                ))}

              </ul>

            )}

          </div>

        </div>

      </div>
    </>
  )
}

export default App