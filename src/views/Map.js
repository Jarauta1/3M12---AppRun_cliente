import {
  Button,
  ButtonGroup,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  Label,
  FormGroup,
  Input,
  Table,
  Row,
  Col,
  UncontrolledTooltip,
} from "reactstrap";

function Map() {
  return(<>
  <div className="content">

  <Row>
          <Col lg="10">
              <div className="card-stats card">
                <div className="card-body">
                  <div className="center">
                   
                  <iframe width="1315" height="820" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" id="gmap_canvas" src="https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=Calle%20Monasterio%20de%20Obarra%20Zaragoza+()&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe><a href='https://maps-generator.com/'></a>

                  </div>
                </div>
                <div className="card-footer">
                  <hr></hr>
                  <div className="stats">
                  <i className="tim-icons icon-trophy">

</i>
                      Rutas
                  </div>
                </div>
              </div>
          </Col>
          </Row>
  </div>
  </>)
}

export default Map;
