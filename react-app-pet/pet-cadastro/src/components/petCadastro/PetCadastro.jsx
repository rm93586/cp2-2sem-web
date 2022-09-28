import React from 'react'

export default function PetCadastro() {

  return (
    <>
      <form className='cadastroPET' id='cadastroPET'>
        <div id="ErroCadastro"></div>
        <div className='div_nome_pet'>
        <label for='nome_pet'>Nome do Pet: </label>
        <input type='text' id='nome_pet' name='nome_pet' placeholder='Amarela'/>
        </div>

        <div className='div_raca_pet'>
        <label for='raca_pet'>Raça do Pet: </label>
        <input type='text' id='raca_pet' name='raca_pet' placeholder='Sem Raça Definida'/>
        </div>

        <div className='div_idade_pet'>
        <label for='idade_pet'>Idade do Pet: </label>
        <input type='text' id='idade_pet' name='idade_pet' placeholder='Ex:.. 2' maxlength="2"/>
        </div>

        <div className='div_tamanho_pet'>
        <label for='tamanho_pet'>Tamanho do Pet: </label>
        <input type='text' id='tamanho_pet' name='tamanho_pet' placeholder='Ex:.. 120cm'/>
        </div>

        <div className='div_observacoes_pet'>
        <label for='observacoes_pet'>Observações do Pet: </label>
        <input type='text' id='observacoes_pet' name='observacoes_pet' placeholder='Arisca'/>
        </div>

        <div className='div_foto_pet'>
        <label for='foto_pet'>Foto do Pet: </label>
        <input type='file' id='foto_pet' name='foto_pet' accept='image/png, image/gif, image/jpeg' placeholder='Foto do Pet'/>
        </div>

        <div className='div_nome_dono'>
        <label for='nome_dono'>Nome do Dono: </label>
        <input type='text' id='nome_dono' name='nome_dono' placeholder='Jorginho'/>
        </div>

        <div className='div_telefone_dono'>
        <label for='telefone_dono'>Telefone do Dono: </label>
        <input type='text' id='telefone_dono' name='telefone_dono' placeholder='Ex.: (11)97070-7070' maxlength="13"/>
        </div>
      </form>
      <button>Cadastrar</button>
    </>
  )
}