import Layout from "../components/Layout";
import Cliente from "../core/Cliente"
import Tabela from "../components/Tabela"
import Botao from "../components/Botao";
import Formulario from "../components/Formulario";

export default function Home() {

  const clientes = [
    new Cliente('Ana', 42, '1' ),
    new Cliente('Bia', 33, '2' ),
    new Cliente('Juca', 12, '3' ),
    new Cliente('Carlos', 32, '4' ),
  ]

  function clienteSelecionado(cliente: Cliente) {

  }

  function clienteExcluido(cliente: Cliente) {

  }

  return (
    <div className={`
    flex  h-screen justify-center items-center 
    bg-gradient-to-r from-blue-500 to-purple-500
    text-white   
    `}>
    <Layout titulo="Cadastro Simples">
      <div className="flex justify-end">
        <Botao cor="green" className="mb-4">Novo Cliente</Botao>
      </div>
       <Tabela clientes={clientes} 
      clienteSelecionado={clienteSelecionado} 
      clienteExcluido={clienteExcluido}></Tabela>
      <Formulario cliente={clientes[0]}></Formulario>
    </Layout>
    </div>
  )
}
