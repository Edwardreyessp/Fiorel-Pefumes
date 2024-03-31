"use client"
import { leerExcel } from "@/app/components/atoms/ExceltoData";
import { CardAdmin } from "@/app/components/molecules";
import { Box, Stack, Typography, } from "@mui/material";
import { useRef, useState } from "react";
import { type PreguntaRespuesta } from '../../../components/atoms/ExceltoData';
import CardReviews from "@/app/components/molecules/CardReview";


export default function EditsFAQsPage(): JSX.Element {

  const [fileData, setfileData] = useState<PreguntaRespuesta[] | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const DownloadExcel = (): void => {
    const fileUrl = '/ExcelTemplate/ExcelTemplate.xlsx';

    fetch(fileUrl)
      .then(async response => await response.blob())
      .then(blob => {
        // Crea un enlace temporal
        const downloadLink = document.createElement('a');
        const url = window.URL.createObjectURL(blob);

        downloadLink.href = url;
        downloadLink.download = 'ExcelTemplate.xlsx';

        // Agrega el enlace al documento
        document.body.appendChild(downloadLink);

        // Inicia la descarga
        downloadLink.click();

        // Elimina el enlace del documento
        document.body.removeChild(downloadLink);

        // Liberar recursos
        window.URL.revokeObjectURL(url);

        console.log("Descargando Excel");
      })
      .catch(error => { console.error('Error al descargar el archivo', error); });
  };

  const MapFaqs = async (): Promise<void> => {
    if (fileInputRef.current != null) {
      // Dispara el evento de clic en el input de tipo file
      fileInputRef.current.click();
    }
  };

  const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>): Promise<void> => {
    const file = event.target.files?.[0];

    if (file == null) return;

    const data = await leerExcel(file);
    if (data != null) {
      setfileData(data);
    }
  };




  return <main><Stack spacing={2} >
    <Typography variant="h1">Preguntas Frecuentes</Typography>
    <Typography variant="caption">Esto sera un breadcrum</Typography>
    <Box display={{ xs: "", md: "flex" }} justifyContent={"space-around"} width={"100%"} sx={{ borderBottom: `1px solid #000` }} pb={3}>
      <CardAdmin dashboardText={"Descargar"} captionText="Descarga el formato del Excel" onClick={DownloadExcel} />
      <Box p={2} />
      <CardAdmin dashboardText={"Subir"} captionText="Subir el Excel completado" onClick={MapFaqs} />
      {/* Input de tipo file oculto */}
      <input type="file" ref={fileInputRef} style={{ display: 'none' }} onChange={handleFileChange as (event: React.ChangeEvent<HTMLInputElement>) => void} />
    </Box>
    <Stack spacing={2} overflow="auto" alignItems={"center"}>
      {fileData?.slice(1).map((review, index) => {
        return <CardReviews
          key={index}
          title={review.Pregunta?.toString() ?? ""}
          review={review.Respuesta?.toString() ?? ""}
        />
      })}
    </Stack>
  </Stack></main>

}