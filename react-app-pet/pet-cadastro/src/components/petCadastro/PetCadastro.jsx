import React from 'react'

const validarCadastro = () => {
    
  const nomePet = document.getElementById('nome_pet').value
  const racaPet = document.getElementById('raca_pet').value
  const idadePet = document.getElementById('idade_pet').value
  const tamanhoPet = document.getElementById('tamanho_pet').value
  const observacoesPet = document.getElementById('observacoes_pet').value
  // const fotoPet = document.getElementById('foto_pet').value
  const nomeDono = document.getElementById('nome_dono').value
  const telefoneDono = document.getElementById('telefone_dono').value

  if (nomePet=='' || racaPet=='' || idadePet=='' || tamanhoPet=='' || observacoesPet=='' || nomeDono=='' || telefoneDono=='') {
      return false
  }
  else { return true }
}

export default function PetCadastro() {


  const cadastrar = () => {

    let x = validarCadastro()

    if (x==true) {
      document.getElementById("ErroCadastro").innerHTML  = "Cadastro realizado com sucesso!"
        //Aqui adicione os dados do pet no banco de dados/lista de pets

    } else {
      document.getElementById("ErroCadastro").innerHTML  = "Preencha todos os campos!"
    }

}

  return (
    <>
      <form className='cadastroPET' id='cadastroPET'>
        <div id="ErroCadastro"></div>
        <div className='div_nome_pet'>
        <label htmlfor='nome_pet'>Nome do Pet: </label>
        <input type='text' id='nome_pet' name='nome_pet' placeholder='Amarela'/>
        </div>

        <div className='div_raca_pet'>
        <label htmlfor='raca_pet'>Raça do Pet: </label>
        <input type='text' id='raca_pet' name='raca_pet' placeholder='Sem Raça Definida'/>
        </div>

        <div className='div_idade_pet'>
        <label htmlfor='idade_pet'>Idade do Pet: </label>
        <input type='text' id='idade_pet' name='idade_pet' placeholder='Ex:.. 2' maxLength="2"/>
        </div>

        <div className='div_tamanho_pet'>
        <label htmlfor='tamanho_pet'>Tamanho do Pet: </label>
        <input type='text' id='tamanho_pet' name='tamanho_pet' placeholder='Ex:.. 120cm'/>
        </div>

        <div className='div_observacoes_pet'>
        <label htmlfor='observacoes_pet'>Observações do Pet: </label>
        <input type='text' id='observacoes_pet' name='observacoes_pet' placeholder='Arisca'/>
        </div>

        <div className='div_foto_pet'>
        <label htmlfor='foto_pet'>Foto do Pet: </label>
        <input type='file' id='foto_pet' name='foto_pet' accept='image/png, image/gif, image/jpeg' placeholder='Foto do Pet'/>
        </div>

        <div className='div_nome_dono'>
        <label htmlfor='nome_dono'>Nome do Dono: </label>
        <input type='text' id='nome_dono' name='nome_dono' placeholder='Jorginho'/>
        </div>

        <div className='div_telefone_dono'>
        <label htmlfor='telefone_dono'>Telefone do Dono: </label>
        <input type='text' id='telefone_dono' name='telefone_dono' placeholder='Ex.: (11)97070-7070' maxLength="13"/>
        </div>
      </form>
      <button onClick={cadastrar}>Cadastrar</button>
      <div id='dados_do_pet'></div>
    </>
  )
}
