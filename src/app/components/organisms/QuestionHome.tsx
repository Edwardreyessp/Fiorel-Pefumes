import { Typography } from "@mui/material";
import { CardEssence } from "../molecules";
import { ButtonPrimary } from "../atoms";
import Grid from "@mui/material/Unstable_Grid2";

export function QuestionHome(): JSX.Element {
  return (
    <Grid container spacing={2}  >

      <Grid xs={12}>
        <Typography variant="h1" textAlign={"center"}>Descubre tu perfume ideal</Typography>
      </Grid>

      <Grid xs={12}>
        <Typography textAlign={"center"}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tincidunt tortor in ipsum suscipit, sit amet imperdiet risus aliquet. Nunc pharetra arcu at consectetur rutrum. Donec ac posuere elit. Phasellus pharetra tincidunt nulla at porta. Curabitur molestie, est sit amet aliquet convallis, lacus arcu rutrum arcu, at porta velit libero quis purus. Ut sed sollicitudin tortor. Cras nec sodales tellus. Ut lacinia egestas finibus.</Typography>
      </Grid>

      <Grid container xs={12} px={{ sx: "", md: "200px" }} >
        <Grid xs={12} md={4} xsOffset={3} mdOffset={0} >
          <CardEssence title={"Floral"} description={"Descripcion del producto"} image={"/images/perfume2.png"} />
        </Grid>
        <Grid xs={12} md={4} xsOffset={3} mdOffset={0} >
          <CardEssence title={"Frutal"} description={"Descripcion del producto"} image={"/images/notas_corazon.png"} />
        </Grid>
        <Grid xs={12} md={4} xsOffset={3} mdOffset={0} >
          <CardEssence title={"Amaderado"} description={"Descripcion del producto"} image={"/images/notas_entrada.png"} />
        </Grid>
      </Grid>

      <Grid xs={12} px={{ sx: "80%", md: "40%" }}>
        <ButtonPrimary text={"Descubrir mi Perfume"} onClick={function (): void {
          throw new Error("Function not implemented.");
        }} />
      </Grid>
    </Grid>

  )
}

