import styled from 'styled-components'

export const Home = styled.html`
    display: flex;
    flex-direction: column;
    background: #bbdae0;
    min-height: 100vh;

    .titulos {
        font-size: 3rem;
        margin: 5px;
        align-self: center;
    }

    #dados_do_pet {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
    }
`;


export const CadastroPet = styled.form`
    display: flex;
    width: 308px;
    background-color: #fff;
    margin: auto;
    box-shadow: 0 0 25px #142d31;
    flex-direction: column;
    text-align: center;
    padding: 15px;

    div {
        display: flex;
        flex-direction: column;
        padding: 5px;
    }

    label {
        font-family: Arial, Helvetica, sans-serif;
        font-size: 16px;
    }

    input {
        background: #e2e2e2;
        margin: 5px 0;
        padding: 3px;
        border: none;
        font-family: Arial, Helvetica, sans-serif;
    }
`;

export const Botao = styled.button`
    width: 50%;
    padding: 10px;
    align-self: center;
    background: #4c8892;
    color: #fff;
    font-weight: bold;
    border: none;
    border-radius: 5px;
    transition: 0.5s all;
    cursor: pointer;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 16px;

    &:hover {
        background: #142d31;
        transform: scale(1.05);
    }    
`;

export const CartaoPet = styled.div`	
    width: 30%;
    height: auto;
    background-color: #fff;
    margin: 10px;
    box-shadow: 0 0 25px #142d31;
    margin-top: 10px;
    background: #F4F9BD;

    .div_cartão_pet {
        display: flex;
        flex-direction: row;
        padding: 5px;
        justify-content: flex-start;
        text-align: center;
        align-items: center;
        
        
    }

    .div_dados_pet {
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        padding: 5px;
        text-align: left;
        align-items: left;
        font-size: 16px;
        word-wrap: break-word;
     
    }

    .dados_pet_fotoPet {
        width: 150px;
        height: 150px;
    }

    .txt_dados {
        font-size: 1.3rem;
        font-weight: bold;
    }

`;
