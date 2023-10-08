import React, { useState } from "react";
import { Container, Grid } from "@mui/material";
import Navbar from "./Components/Navbar";
import Result from "./Components/Result"
import SliderSelect from "./Components/SliderSelect";
import TenorSelect from "./Components/TenorSelect"

function App() {
  const [data, setData] = useState({
    homeValue: 540000,
    downPayment: 27000,
    loanAmount: 540000 * 0.95,
    loanTerm: 30,
    interestRate: 7.625,
  })
  return (
    <div className="App">
      <Navbar></Navbar>
      <Container maxWidth="xl" sx={{marginTop:4}}>
        <Grid container spacing={5} alignItems="center">
          <Grid item xs={12} md={6}>
            <SliderSelect data={data} setData={setData} />
            <TenorSelect data={data} setData={setData} />
          </Grid>
          <Grid item xs={12} md={6}>
            <Result data={data} />
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}

export default App;