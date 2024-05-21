import React, { useState } from "react";
import { Container, Typography } from "@mui/material";
import OperaList from "./components/OperaList";
import OperaDetail from "./components/OperaDetail";
import operasData from "./data/operas";

const App = () => {
  const [selectedOpera, setSelectedOpera] = useState(null);

  const handleOperaSelect = (opera) => {
    setSelectedOpera(opera);
  };

  return (
    <Container>
      <Typography variant="h2" component="h1" gutterBottom>
        인기 한국 오페라
      </Typography>
      <OperaList operas={operasData} onOperaSelect={handleOperaSelect} />
      {selectedOpera && <OperaDetail opera={selectedOpera} />}
    </Container>
  );
};

export default App;
