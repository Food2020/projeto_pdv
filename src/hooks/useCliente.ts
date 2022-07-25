import Cliente from "../core/Cliente"
import { useState,useEffect  } from 'react'
import ClienteRepositorio from '../core/ClienteRepositorio'
import ColecaoCliente from '../backend/bd/ColecaoCliente'
import useTabelaOuForm from '../hooks/useTabelaOuForm'

export default function useCliente(){

    const { 
        exibirTabela,
        exibirFormulario,
        formularioVisivel,
        tabelaVisivel
      } = useTabelaOuForm()

    const repo: ClienteRepositorio = new ColecaoCliente()

    const [cliente,setCliente]   = useState<Cliente>(Cliente.vazio())
    const [clientes,setClientes] = useState<Cliente[]>([])

    useEffect(obterTodos, [])
  
    function obterTodos(){
      repo.obterTodos().then(clientes => {
        setClientes(clientes)
        exibirTabela()
      })
    }
  
    function editarCliente(cliente: Cliente){
      setCliente(cliente)
      exibirFormulario()
    }
  
    async function excluirCliente(cliente: Cliente){
      await repo.excluir(cliente)
      obterTodos();
    }
    
    async function salvarCliente(cliente: Cliente){
      await repo.salvar(cliente)
      obterTodos();
      exibirTabela()
    }
  
    function novoCliente(){
      setCliente(Cliente.vazio)
      exibirFormulario()
    }

    return{
        cliente,
        clientes,
        novoCliente,
        salvarCliente,
        excluirCliente,
        editarCliente,
        obterTodos,
        formularioVisivel,
        tabelaVisivel,
        exibirTabela
    }
}