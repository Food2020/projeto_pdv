import Layout from '../components/layout'
import Tabela from "../components/Tabela"
import Botao from '../components/Botao'
import Formulario from '../components/Formulario'
import useCliente from '../hooks/useCliente'

export default function Home() {

  const { 
          cliente,
          clientes,
          editarCliente, 
          excluirCliente,
          salvarCliente,
          novoCliente,
          exibirTabela,
          tabelaVisivel
        } = useCliente()

  return (
      <div className = {'flex justify-center items-center h-screen bg-cyan-900'}>
        <Layout titulo = "Cadastro Cliente">
          {tabelaVisivel ? (
            <>
          <div className = "flex justify-end">
            <Botao 
              cor = "green" 
              className ="mb-4" 
              onClick = {() => novoCliente()}>
              Novo cliente</Botao>
          </div>
          <Tabela clientes ={clientes} clienteEditar = {editarCliente} clienteExcluir = {excluirCliente}></Tabela>
            </>
          ) : (
          <Formulario 
            cliente = {cliente} 
            clienteMudou = {salvarCliente}
            cancelado = {() => exibirTabela()}
            />
          )}
        </Layout>
      </div>
  );
}
