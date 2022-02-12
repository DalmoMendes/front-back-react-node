import React from "react";
import './Footer.css';

function Footer() {
    return (
       <footer className="footer">
            <div className="footer_box">
               <ul>
                   <h4>Categorias</h4>
                   <li>Bebidas</li>
                   <li>Biscoitos</li>
                   <li>Cesta Básica</li>
                   <li>Confeitaria</li>
                   <li>Pães</li>
               </ul>
            </div>
            <div className="footer_box">
            <ul>
                   <h4>Contatos</h4>
                   <li>Telefone</li>
                   <li>Vendas</li>
                   <li>Financeiro</li>
                   <li>RH </li>
                   <li>WhatsApp</li>
               </ul>
            </div>
            <div className="footer_box">
            <ul>
                   <h4>Sobre</h4>
                   <li>História</li>
                   <li>Missão</li>
                   <li>Visão</li>
                   <li>Cultura</li>
                   <li>Políticas</li>
               </ul>
            </div>
            <div className="footer_box">
            <ul>
                   <h4>Social</h4>
                   <li>Facebook</li>
                   <li>Instagram</li>
                   <li>Youtube</li>
                   <li>Tik-Tok</li>
                   <li>Twitter</li>
               </ul>
            </div>
        </footer> 
      
    );
  }
  
  export default Footer;
