
import {useState, useEffect} from "react"
import {BrowserRouter,Route,Link} from "react-router-dom"

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardText,
  FormGroup,
  Form,
  Input,
  Row,
  Col,
} from "reactstrap";

function Editar(props) {
console.log(props)
  useEffect(()=>{
    fetch("http://localhost:3000/editarPerfil/editarPerfil", {
      method: "PUT",
      headers: {
          "Content-Type": "application/json",
      },
      body: JSON.stringify({ username: props.username, nombre: props.nombre, apellido: props.apellido, edad: props.edad, altura: props.altura, peso: props.peso, calzado1: props.calzado1, calzado2: props.calzado2, descripcion: props.descripcion }),
  }).then((res)=>res.json()).then((res)=>{
    
    })
  },[]) 

  return(<></>)

}

function UserProfile(props) {
console.log(props)
  let [username,setUsername] = useState(props.location.usuario)
  let [usuario,setUsuario] = useState([])
  let [nombre,setNombre] = useState("")
  let [apellido,setApellido] = useState("")
  let [edad,setEdad] = useState("")
  let [altura,setAltura] = useState("")
  let [peso,setPeso] = useState("")
  let [calzado1,setCalzado1] = useState("")
  let [calzado2,setCalzado2] = useState("")
  let [descripcion,setDescripcion] = useState("")

  function cambiarNombre(e) {
    setNombre(e.target.value)
  }

  function cambiarApellido(e) {
    setApellido(e.target.value)
  }

  function cambiarEdad(e) {
    setEdad(e.target.value)
  }

  function cambiarAltura(e) {
    setAltura(e.target.value)
  }

  function cambiarPeso(e) {
    setPeso(e.target.value)
  }

  function cambiarCalzado1(e) {
    setCalzado1(e.target.value)
  }

  function cambiarCalzado2(e) {
    setCalzado2(e.target.value)
  }

  function cambiarDescripcion(e) {
    setDescripcion(e.target.value)
  }

  useEffect(()=>{
    fetch("http://localhost:3000/datos/", {
      method: "POST",
      headers: {
          "Content-Type": "application/json",
      },
      body: JSON.stringify({ username: username }),
  }).then((res)=>res.json()).then((res)=>{
    
    setUsuario(res)
    setNombre(res.nombre)
    setApellido(res.apellido)
    setEdad(res.edad)
    setAltura(res.altura)
    setPeso(res.peso)
    setCalzado1(res.calzado1)
    setCalzado2(res.calzado2)
    setDescripcion(res.descripcion)
    console.log(res)
    })

  },[])

 

  return (
    <BrowserRouter>
      <div className="content">
        <Row>
        <Col md="1"></Col>
          <Col md="6">
            <Card>
              <CardHeader>
                <h5 className="title">Editar Perfil de {usuario.username}</h5>
              </CardHeader>
              <CardBody>
                <Form>
                  
                  <Row>
                    <Col className="pr-md-1" md="6">
                      <FormGroup>
                        <label>Nombre</label>
                        <Input
                          value={nombre}
                          onChange={cambiarNombre}
                          placeholder={nombre}
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                    <Col className="pl-md-1" md="6">
                      <FormGroup>
                        <label>Apellido</label>
                        <Input
                          onChange={cambiarApellido}
                          placeholder={apellido}
                          value={apellido}
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                 
                  <Row>
                    <Col className="pr-md-1" md="4">
                      <FormGroup>
                        <label>Edad</label>
                        <Input
                          onChange={cambiarEdad}
                          placeholder={edad}
                          value={edad}
                          type="number"
                        />
                      </FormGroup>
                    </Col>
                    <Col className="px-md-1" md="4">
                      <FormGroup>
                        <label>Altura (cm)</label>
                        <Input
                          onChange={cambiarAltura}
                          placeholder={altura}
                          value={altura}
                          type="number"
                        />
                      </FormGroup>
                    </Col>
                    <Col className="pl-md-1" md="4">
                      <FormGroup>
                        <label>Peso (Kg)</label>
                        <Input onChange={cambiarPeso} value={peso} placeholder={peso} type="number" />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-md-1" md="6">
                      <FormGroup>
                        <label>Calzado 1</label>
                        <Input
                          onChange={cambiarCalzado1}
                          placeholder={calzado1}
                          value={calzado1}
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                    <Col className="px-md-1" md="6">
                      <FormGroup>
                        <label>Calzado 2</label>
                        <Input
                          onChange={cambiarCalzado2}
                          placeholder={calzado2}
                          value={calzado2}
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="8">
                      <FormGroup>
                        <label>Sobre mí</label>
                        <Input
                          cols="80"
                          onChange={cambiarDescripcion}
                          
                          value={descripcion}
                          placeholder="Pon aquí tu descripción"
                          rows="4"
                          type="textarea"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                </Form>
              </CardBody>
              <CardFooter>
                <Link to="/editarPerfil"><Button className="btn-fill" color="primary" type="submit">
                  Save
                </Button></Link>
                <Route exact path="/editarPerfil">
                  <Editar username={username} nombre={nombre} apellido={apellido} edad={edad} altura={altura} peso={peso} calzado1={calzado1} calzado2={calzado2} descripcion={descripcion} />
                </Route>
              </CardFooter>
            </Card>
          </Col>
          
          <Col md="4">
            <Card className="card-user">
              <CardBody>
                <CardText />
                <div className="author">
                  <div className="block block-one" />
                  <div className="block block-two" />
                  <div className="block block-three" />
                  <div className="block block-four" />
                  <a href="#pablo" onClick={(e) => e.preventDefault()}>
                    <img
                      alt="..."
                      className="avatar"
                      src={require(`assets/img/${username}.jpg`).default}
                    />
                    <h5 className="title">{usuario.nombre} {usuario.apellido}</h5>
                  </a>
                  <p className="description">Runner Pro</p>
                </div>
                <div className="card-description">
                  {usuario.descripcion}
                </div>
              </CardBody>
              <CardFooter>
                <div className="button-container">
                  <Button className="btn-icon btn-round" color="facebook">
                    <i className="fab fa-facebook" />
                  </Button>
                  <Button className="btn-icon btn-round" color="twitter">
                    <i className="fab fa-twitter" />
                  </Button>
                  <Button className="btn-icon btn-round" color="google">
                    <i className="fab fa-google-plus" />
                  </Button>
                </div>
              </CardFooter>
            </Card>
          </Col>
        </Row>
      </div>
    </BrowserRouter>
  );
}

export default UserProfile;
