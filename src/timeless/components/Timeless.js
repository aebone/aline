import React, {Component} from "react";
import styled from "styled-components";
import girlDancing from "../assets/img/transparent-sprite-dancing.gif";

require("../assets/css/bootstrap.min.css");

class Timeless extends Component {
  render() {
    return (
      <div className={"container"}>
        <header className="jumbotron subhead">
          <div className="row">
            <div className="span8">
              <h1>
                <img src={girlDancing} alt={"Pixelated gif with a girl dancing"} width={100}/>
                <Blinking>Aline's</Blinking> personal page
              </h1>
            </div>
          </div>
        </header>
      </div>
    );
  }
}

const Blinking = styled.span`
animation:blinkingText 1.2s infinite;
@keyframes blinkingText{
    0%{     color: #0f0;    }
    49%{    color: #0f0; }
    60%{    color: transparent; }
    99%{    color:transparent;  }
    100%{   color: #0f0;    }
}
`

export default Timeless;
