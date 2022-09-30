import React from 'react'
import { useState } from 'react'


export default function PetCadastro(){

  const [nomePet, setNomePet] = useState('')
  const [racaPet, setRacaPet] = useState('')
  const [idadePet, setIdadePet] = useState('')
  const [tamanhoPet, setTamanhoPet] = useState('')
  const [observacoesPet, setObservacoesPet] = useState('')
  const [nomeDono, setNomeDono] = useState('')
  const [telefoneDono, setTelefoneDono] = useState('')
  //const [fotoPet, setFotoPet] = useState('')
  
  const [pet, setPet] = useState([{
    nomePet: 'Pretinho',
    racaPet: 'Rottweiler',
    idadePet: '2 anos',
    tamanhoPet: '80cm',
    observacoesPet: 'Dog esperto e de boa convivência',
    telefoneDono: '4059-5522',
    nomeDono: 'Juliano',
  }
  ])
  
  const [nPet,setNPet] = useState({
    "nomePet":"",
    "racaPet":"",
    "idadePet":"",
    "tamanhoPet":"",
    "observacoesPet":"",
    "telefoneDono":"",
    "nomeDono":""
  })

  const cadastrar = (e) => {

    e.preventDefault()

      document.getElementById("ErroCadastro").innerHTML  = "Cadastro realizado com sucesso!"
        nPet.nomePet = nomePet
        nPet.racaPet = racaPet
        nPet.idadePet = idadePet
        nPet.tamanhoPet = tamanhoPet
        nPet.observacoesPet = observacoesPet
        nPet.telefoneDono = telefoneDono
        nPet.nomeDono = nomeDono

        setNPet({
          "nomePet":nomePet,
          "racaPet":racaPet,
          "idadePet":idadePet,
          "tamanhoPet":tamanhoPet,
          "observacoesPet":observacoesPet,
          "telefoneDono":telefoneDono,
          "nomeDono":nomeDono
          })
          if (nPet.nomePet == nomePet){
            setPet([...pet, nPet])
          }
}


  return (
    <>
    

      <form className='cadastroPET' id='cadastroPET'>
        <div id="ErroCadastro"></div>
        <div className='div_nome_pet'>
        <label htmlfor='nome_pet'>Nome do Pet: </label>
        <input type='text' id='nome_pet' name='nome_pet' placeholder='Amarela' onChange={(e) => setNomePet(e.target.value)}/>
        </div>

        <div className='div_raca_pet'>
        <label htmlfor='raca_pet'>Raça do Pet: </label>
        <input type='text' id='raca_pet' name='raca_pet' placeholder='Sem Raça Definida' onChange={(e) => setRacaPet(e.target.value)}/>
        </div>

        <div className='div_idade_pet'>
        <label htmlfor='idade_pet'>Idade do Pet: </label>
        <input type='text' id='idade_pet' name='idade_pet' placeholder='Ex:.. 2' maxLength="2" onChange={(e) => setIdadePet(e.target.value)}/>
        </div>

        <div className='div_tamanho_pet'>
        <label htmlfor='tamanho_pet'>Tamanho do Pet: </label>
        <input type='text' id='tamanho_pet' name='tamanho_pet' placeholder='Ex:.. 120cm' onChange={(e) => setTamanhoPet(e.target.value)}/>
        </div>

        <div className='div_observacoes_pet'>
        <label htmlfor='observacoes_pet'>Observações do Pet: </label>
        <input type='text' id='observacoes_pet' name='observacoes_pet' placeholder='Arisca' onChange={(e) => setObservacoesPet(e.target.value)}/>
        </div>

        <div className='div_foto_pet'>
        <label htmlfor='foto_pet'>Foto do Pet: </label>
        <input type='file' id='foto_pet' name='foto_pet' accept='image/png, image/gif, image/jpeg' placeholder='Foto do Pet' onChange={(e) => setIdadePet(e.target.value)}/>
        </div>

        <div className='div_nome_dono'>
        <label htmlfor='nome_dono'>Nome do Dono: </label>
        <input type='text' id='nome_dono' name='nome_dono' placeholder='Jorginho' onChange={(e) => setNomeDono(e.target.value)}/>
        </div>

        <div className='div_telefone_dono'>
        <label htmlfor='telefone_dono'>Telefone do Dono: </label>
        <input type='text' id='telefone_dono' name='telefone_dono' placeholder='Ex.: (11)97070-7070' maxLength="13" onChange={(e) => setTelefoneDono(e.target.value)}/>

        
        </div>
      </form>
      <button onClick={cadastrar}>Cadastrar</button>
    
      
      <div id='dados_do_pet'>
      
      {pet.map((tar, i)=>(
            <>
                <div className='dados_pet'>{i}</div>
                <div className='dados_pet'>{tar.nomePet}</div>
                <div className='dados_pet'>{tar.racaPet}</div>
                <div className='dados_pet'>{tar.idadePet}</div>
                <div className='dados_pet'>{tar.tamanhoPet}</div>
                <div className='dados_pet'>{tar.observacoesPet}</div>
                <div className='dados_pet'>{tar.telefoneDono}</div>
                <div className='dados_pet'>{tar.nomeDono}</div>
            </>
        ))}

      </div>

      
       
      


      
    </>
  )
}
