import { Typography } from "@mui/material";
import CardReviews from "../molecules/CardReview";
import Grid from "@mui/material/Unstable_Grid2";

export function ReviewsHome(): JSX.Element {
  return (
    <Grid container spacing={2}>
      <Grid xs={12}>
        <Typography variant="h1" textAlign={"center"}>Mira lo que dicen nuestros clientes</Typography>
      </Grid>
      <Grid container spacing={2} px={{ sx: "", md: "250px" }}>
        <Grid xs={12} md={4} xsOffset={0.5} mdOffset={0}>
          < CardReviews title={"Título de la reseña"} review={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam at mi vel magna lacinia congue non ut tortor."} />
        </Grid>
        <Grid xs={12} md={4} xsOffset={0.5} mdOffset={0}>
          <CardReviews title={"Título de la reseña"} review={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam at mi vel magna lacinia congue non ut tortor."} />
        </Grid>
        <Grid xs={12} md={4} xsOffset={0.5} mdOffset={0} >
          <CardReviews title={"Título de la reseña"} review={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam at mi vel magna lacinia congue non ut tortor."} />
        </Grid>
      </Grid>
    </Grid >
  )
}

