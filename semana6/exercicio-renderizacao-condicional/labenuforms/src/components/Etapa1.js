import React from 'react'


class Etapa1 extends React.Component {

    
    render() {
        return (
          <div>
            <h2>Etapa 1 - DADOS GERAIS</h2>
            <hr />
            <h4>Qual o seu nome?</h4>
            <input type="text" id="name" />
            <h4>Qual a sua idade?</h4>
            <input type="text" id="name" />
            <h4>Qual o seu email?</h4>
            <input type="text" id="name" />
            <h4>Qual a sua escolaridade?</h4>
            <datalist id="tech"><option value ="Ensino médio incompleto" 
                                        value1 ="Ensino médio completo"
                                        value2 ="Ensino Superior incompleto"
                                        value3 ="Ensino Superior completo"/></datalist>
          </div>
        );
      }
    }
    
export default Etapa1;
