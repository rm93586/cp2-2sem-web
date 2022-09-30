import React from 'react'
import { useState } from 'react'
import { Home, CadastroPet, Botao } from '../../style/styled'






export default function PetCadastro(){

  const [nomePet, setNomePet] = useState('')
  const [racaPet, setRacaPet] = useState('')
  const [idadePet, setIdadePet] = useState('')
  const [tamanhoPet, setTamanhoPet] = useState('')
  const [observacoesPet, setObservacoesPet] = useState('')
  const [nomeDono, setNomeDono] = useState('')
  const [telefoneDono, setTelefoneDono] = useState('')
  const [fotoPet, setFotoPet] = useState()


  //----------------------------------------------
  // Funções para validar os campos do formulário
  function validarCampos (){
    if(nomePet === '' || racaPet === '' || idadePet === '' || tamanhoPet === '' || observacoesPet === '' || nomeDono === '' || telefoneDono === ''){
      alert('Preencha todos os campos')
      document.getElementById("ErroCadastro").innerHTML  = "Preencha todos os campos <br />"
      return false
    }else if (validarSintaxe()){
      return true
    } else {
      return false
    }
  }

  function validarSintaxe(){
    const telefoneRegex = /([(]?[0]?[1-9]{2}[)]?)[9]?([1-9][0-9]{3})-?([0-9]{4})/
    let telefone = telefoneRegex.test(String(telefoneDono))

    if (idadePet < 0 || idadePet > 50) {
      document.getElementById("ErroCadastro").innerHTML  = "A idade deve ser entre 0 e 50<br />"
      return false
    }
    if(tamanhoPet < 0 || tamanhoPet > 200){
      document.getElementById("ErroCadastro").innerHTML  = "O tamanho deve ser entre 0 e 200cm<br />"
      return false
    }
    if(telefone !== true){
      document.getElementById("ErroCadastro").innerHTML  = "Telefone inválido <br />"
      return false
    }
    return true
  }
  //----------------------------------------------


  // Função para capturar a imagem recebida e exibir no cartão
  function handleChange(e) {
      console.log(e.target.files);
      setFotoPet(URL.createObjectURL(e.target.files[0]));
  }

  
  const [pet, setPet] = useState([{
    nomePet: 'Pretinho',
    racaPet: 'Rottweiler',
    idadePet: '2 anos',
    tamanhoPet: '80cm',
    observacoesPet: 'Dog esperto e de boa convivência',
    fotoPet: 'fotinha',
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
    "fotoPet":"",
    "telefoneDono":"",
    "nomeDono":""
  })

  const cadastrar = (e) => {

    e.preventDefault()

    
    if (validarCampos()) {
      
      document.getElementById("ErroCadastro").innerHTML  = "Cadastro realizado com sucesso!"
        nPet.nomePet = nomePet
        nPet.racaPet = racaPet
        nPet.idadePet = idadePet
        nPet.tamanhoPet = tamanhoPet
        nPet.observacoesPet = observacoesPet
        nPet.fotoPet = fotoPet
        nPet.telefoneDono = telefoneDono
        nPet.nomeDono = nomeDono

        setNPet({
          "nomePet":nomePet,
          "racaPet":racaPet,
          "idadePet":idadePet,
          "tamanhoPet":tamanhoPet,
          "observacoesPet":observacoesPet,
          "fotoPet":fotoPet,
          "telefoneDono":telefoneDono,
          "nomeDono":nomeDono
          })
          if (nPet.nomePet == nomePet){
            setPet([...pet, nPet])
          }
     }
}


return (
  <Home>
    <CadastroPet>
      <div id="ErroCadastro"></div>
      <div className='div_nome_pet'>
      <label htmlfor='nome_pet'>Nome do Pet: </label>
      <input type='text' id='nome_pet' name='nome_pet' placeholder='Amarela' onChange={(e) => setNomePet(e.target.value)}/>
      </div>

      <div className='div_raca_pet'>
      <label htmlfor='raca_pet'>Raça do Pet: </label>
      <input type='text' id='raca_pet' name='raca_pet' placeholder='SRD - Sem raça definida' onChange={(e) => setRacaPet(e.target.value)}/>
      </div>

      <div className='div_idade_pet'>
      <label htmlfor='idade_pet'>Idade do Pet: </label>
      <input type='number' id='idade_pet' name='idade_pet' placeholder='Ex:.. 2' maxLength="2" onChange={(e) => setIdadePet(e.target.value)}/>
      </div>

      <div className='div_tamanho_pet'>
      <label htmlfor='tamanho_pet'>Tamanho do Pet: </label>
      <input type='number' id='tamanho_pet' name='tamanho_pet' placeholder='Ex:.. 120 - (Em centimetros)' onChange={(e) => setTamanhoPet(e.target.value)}/>
      </div>

      <div className='div_observacoes_pet'>
      <label htmlfor='observacoes_pet'>Observações do Pet: </label>
      <input type='text' id='observacoes_pet' name='observacoes_pet' placeholder='Arisca e teimosa' onChange={(e) => setObservacoesPet(e.target.value)}/>
      </div>

      <div className='div_foto_pet'>
      <label htmlfor='foto_pet'>Foto do Pet: </label>
      <input type='file' id='foto_pet' name='foto_pet' accept='image/png, image/gif, image/jpeg' placeholder='Foto do Pet' onChange={handleChange}/>
      </div>

      <div className='div_nome_dono'>
      <label htmlfor='nome_dono'>Nome do Dono: </label>
      <input type='text' id='nome_dono' name='nome_dono' placeholder='Jorginho' onChange={(e) => setNomeDono(e.target.value)}/>
      </div>

      <div className='div_telefone_dono'>
      <label htmlfor='telefone_dono'>Telefone do Dono: </label>
      <input type='text' id='telefone_dono' name='telefone_dono' placeholder='Ex.: 1197070-7070' maxLength="13" onChange={(e) => setTelefoneDono(e.target.value)}/>
      </div>

      <Botao onClick={cadastrar}>Cadastrar</Botao>
    </CadastroPet>


    <div id='dados_do_pet'>
        {pet.map((tar, i)=>(
            <>
            <div className='div_cartão_pet'>
                <div className='dados_pet_index'>{i}</div>
                <div className='dados_pet_nomePet'>Nome do Pet: {tar.nomePet}</div>
                <div className='dados_pet_racaPet'>Raça do Pet: {tar.racaPet}</div>
                <div className='dados_pet_idadePet'>Idade do Pet: {tar.idadePet}</div>
                <div className='dados_pet_tamanhoPet'>Tamanho do Pet: {tar.tamanhoPet}</div>
                <div className='dados_pet_observacoesPet'>Observações sobre o Pet: {tar.observacoesPet}</div>
                <div className='dados_pet_fotoPet'>Foto do Pet:</div>
                <img src={tar.fotoPet} className='dados_pet_fotoPet' alt="Foto do Pet" width="100" height="100"/>
                <div className='dados_pet_nomeDono'>Nome do Dono: {tar.nomeDono}</div>
                <div className='dados_pet_telefoneDono'> Telefone do dono: {tar.telefoneDono}</div>
            </div>
            </>
        ))}
      </div>      

    </Home>
  )
}
