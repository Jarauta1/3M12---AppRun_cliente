import {
    
    Table
   
  } from "reactstrap";

  import {useState, useEffect} from "react"

  function tiempoReal(tiempo) {
      
    let segundos = tiempo % 60
        let segundosOperar = tiempo - segundos

        let minutosCalculo = segundosOperar / 60
        let minutos = minutosCalculo % 60
        let minutosOperar = minutosCalculo - minutos

        let horasCalculo = minutosOperar / 60
        let horas = horasCalculo % 24
        let horasOperar = horasCalculo - horas

        let diasCalculo = horasOperar / 24
        let dias = diasCalculo % 24

        return(<td className="text-center">{dias} días, {horas}h {minutos}min {segundos}seg</td>)
}

function DetalleMeses () {

    let [distancia,setDistancia] = useState([])
    let [tiempo,setTiempo] = useState([])

    useEffect(()=>{
        fetch("http://localhost:3000/datos/graficas", {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify({ username: "SCampos", anyo: 2020, actividad:  "distancia"}),
}).then((res)=>res.json()).then((res)=>{
  
 setDistancia(res)
  })
        fetch("http://localhost:3000/datos/graficas", {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify({ username: "SCampos", anyo: 2020, actividad:  "tiempo"}),
}).then((res)=>res.json()).then((res)=>{
 
  setTiempo(res)
  })
    },[])

  
    return (<><Table className="tablesorter" responsive>
    <thead className="text-primary">
      <tr>
        <th>Mes</th>
        <th className="text-center">Distancia</th>
        <th className="text-center">Tiempo</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td >Enero</td>
        <td className="text-center">{distancia.ene} Km</td>
        {tiempoReal(tiempo.ene)}
      </tr>
      <tr>
      <td >Febrero</td>
        <td className="text-center">{distancia.feb} Km</td>
        {tiempoReal(tiempo.feb)}
      </tr>
      <tr>
      <td >Marzo</td>
        <td className="text-center">{distancia.mar} Km</td>
        {tiempoReal(tiempo.mar)}
      </tr>
      <tr>
      <td >Abril</td>
        <td className="text-center">{distancia.abr} Km</td>
        {tiempoReal(tiempo.abr)}
      </tr>
      <tr>
      <td >Mayo</td>
        <td className="text-center">{distancia.may} Km</td>
        {tiempoReal(tiempo.may)}
      </tr>
      <tr>
      <td >Junio</td>
        <td className="text-center">{distancia.jun} Km</td>
        {tiempoReal(tiempo.jun)}
      </tr>
      <tr>
      <td >Julio</td>
        <td className="text-center">{distancia.jul} Km</td>
        {tiempoReal(tiempo.jul)}
      </tr>
      <tr>
      <td >Agosto</td>
        <td className="text-center">{distancia.ago} Km</td>
        {tiempoReal(tiempo.ago)}
      </tr>
      <tr>
      <td >Septiembre</td>
        <td className="text-center">{distancia.sep} Km</td>
        {tiempoReal(tiempo.sep)}
      </tr>
      <tr>
      <td >Octubre</td>
        <td className="text-center">{distancia.oct} Km</td>
        {tiempoReal(tiempo.oct)}
      </tr>
      <tr>
      <td >Noviembre</td>
        <td className="text-center">{distancia.nov} Km</td>
        {tiempoReal(tiempo.nov)}
      </tr>
      <tr>
      <td >Diciembre</td>
        <td className="text-center">{distancia.dic} Km</td>
        {tiempoReal(tiempo.dic)}
      </tr>
    </tbody>
  </Table></>)
}

export default DetalleMeses;