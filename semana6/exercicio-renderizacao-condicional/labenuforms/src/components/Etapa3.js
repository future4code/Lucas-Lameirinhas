import React from 'react'

class Etapa3 extends React.Component {
    render() {
        return (
          <div>
            <h2>Etapa 3 - INFORMAÇÕES GERAIS DE ENSINO</h2>
            <hr />
            <h4>Por que você não terminou um curso de graduação?</h4>
            <input type="text" id="name" />
            <h4>Você fez algum curso complementar?</h4>
            <datalist id="tech"><option value ="sim" 
                                        value1 ="não"/></datalist>
          </div>
        );
      }
    }
    
export default Etapa3
