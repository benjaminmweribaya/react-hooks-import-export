import React from "react";
import howManyParks from "./parks/howManyParks";

function ColoradoStateParks() {
  howManyParks(); // => "42 parks!"

  return <h1>Colorado State Parks!</h1>;
}

import React from "react";
import MesaVerde from "./parks/MesaVerde";

function ColoradoStateParks() {
  return (
    <div>
      <MesaVerde />
    </div>
  );
}

export default ColoradoStateParks;