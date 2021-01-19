/*!

=========================================================
* Black Dashboard React v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/black-dashboard-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/black-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import {useState,useEffect} from "react"

// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Table,
  Row,
  Col,
} from "reactstrap";

function Tables() {

  let [usuarios,setUsuarios] = useState([])
 

  useEffect(()=>{
    fetch("http://localhost:3000/listaUsuarios/", {
      method: "POST",
      headers: {
          "Content-Type": "application/json",
      },
      body: JSON.stringify({ username: "SCampos" }),
  }).then((res)=>res.json()).then((res)=>{
    console.log(res)
    setUsuarios(res)
    })

  },[])

  let mostrarUsuarios = usuarios.map(usuario=> {
    return (<>
     <tr>
                      <td>{usuario.username}</td>
                      <td className="text-center">{usuario.nombre} {usuario.apellido}</td>
                      <td className="text-center">{usuario.actividades}</td>
                      <td className="text-center">{usuario.distancia} km</td>
                      <td className="text-center">{usuario.dias} días, {usuario.horas}h {usuario.minutos}min {usuario.segundos}seg</td>
                    </tr>
    </>)
  })

  let mostrarDatos = usuarios.map(usuario=> {
    return (<>
     <tr>
                      <td>{usuario.username}</td>
                      <td className="text-center">{usuario.altura} cm</td>
                      <td className="text-center">{usuario.peso} kg</td>
                      <td className="text-center">{usuario.edad} años</td>
                    </tr>
                    <tr>
                      <p>Descripción: {usuario.descripcion}</p>
                    </tr>
    </>)
  })


  return (
    <>
      <div className="content">
        <Row>
          <Col md="12">
            <Card>
              <CardHeader>
                <CardTitle tag="h4">Deporte</CardTitle>
              </CardHeader>
              <CardBody>
                <Table className="tablesorter" responsive>
                  <thead className="text-primary">
                    <tr>
                      <th className="text-center">Usuario</th>
                      <th className="text-center">Nombre</th>
                      <th className="text-center">Actividades</th>
                      <th className="text-center">Distancia</th>
                      <th className="text-center">Tiempo</th>
                    </tr>
                  </thead>
                  <tbody>
                    {mostrarUsuarios}
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Col>
          <Col md="12">
            <Card className="card-plain">
              <CardHeader>
                <CardTitle tag="h4">Personal</CardTitle>
                <p className="category">Aquí se detalla la información más personal</p>
              </CardHeader>
              <CardBody>
                <Table className="tablesorter" responsive>
                  <thead className="text-primary">
                    <tr>
                      <th>Usuario</th>
                      <th className="text-center">Altura</th>
                      <th className="text-center">Peso</th>
                      <th className="text-center">Edad</th>
                    </tr>
                  </thead>
                  <tbody>
                   {mostrarDatos}
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Tables;
