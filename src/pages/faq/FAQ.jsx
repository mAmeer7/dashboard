/* eslint-disable no-unused-vars */
import React from "react";
import {
  Container,
  useTheme,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Header from "../../components/Header";
import { token } from "../../theme";

export default function FAQ() {
  const theme = useTheme();
  const color = token(theme.palette.mode);

  return (
    <Container>
      <Header title="FREQUENTLY ASKED QUESTIONS" />
      <Accordion
        sx={{
          backgroundColor: `${color.blue[700]}`,
          borderRadius: "5px",
          marginBottom:"10px"
        }}
      >
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque,
            nobis?
          </Typography>
        </AccordionSummary>
        <AccordionDetails
          sx={{
            backgroundColor: `${color.blue[900]}`,
          }}
        >
          <Typography sx={{color:`${color.blue[400]}`}}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
            adipisci placeat, vitae labore, perspiciatis ullam quidem
            praesentium cum voluptatem provident, nostrum blanditiis? Unde.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        sx={{
          backgroundColor: `${color.blue[700]}`,
          borderRadius: "5px",
          marginBottom:"10px"
        }}
      >
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>
            Lorem ipsum dolor sit amet.?
          </Typography>
        </AccordionSummary>
        <AccordionDetails
          sx={{
            backgroundColor: `${color.blue[900]}`,
          }}
        >
          <Typography sx={{color:`${color.blue[400]}`}}>
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur temporibus fugit sapiente ducimus recusandae a soluta consequatur. Numquam distinctio similique officiis soluta pariatur impedit at quas aut accusantium consequuntur praesentium eligendi autem, nulla cumque tempora illo eaque mollitia voluptatibus illum rem nesciunt qui! Libero ipsa possimus dolor omnis ad quia.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        sx={{
          backgroundColor: `${color.blue[700]}`,
          borderRadius: "5px",
          marginBottom:"10px"
        }}
      >
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto quibusdam tenetur nesciunt tempore distinctio praesentium.?
          </Typography>
        </AccordionSummary>
        <AccordionDetails
          sx={{
            backgroundColor: `${color.blue[900]}`,
          }}
        >
          <Typography sx={{color:`${color.blue[400]}`}}>
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur temporibus fugit sapiente ducimus recusandae a soluta consequatur. Numquam distinctio similique officiis soluta pariatur impedit at quas aut accusantium consequuntur praesentium eligendi autem, nulla cumque tempora illo eaque mollitia voluptatibus illum rem nesciunt qui! Libero ipsa possimus dolor omnis ad quia.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        sx={{
          backgroundColor: `${color.blue[700]}`,
          borderRadius: "5px",
          marginBottom:"10px"
        }}
      >
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>
            Lorem, ipsum dolor.?
          </Typography>
        </AccordionSummary>
        <AccordionDetails
          sx={{
            backgroundColor: `${color.blue[900]}`,
          }}
        >
          <Typography sx={{color:`${color.blue[400]}`}}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
            adipisci placeat, vitae labore, perspiciatis ullam quidem
            praesentium cum voluptatem provident, nostrum blanditiis? Unde.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        sx={{
          backgroundColor: `${color.blue[700]}`,
          borderRadius: "5px",
          marginBottom:"10px"
        }}
      >
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod nulla optio enim et tenetur, fugit eaque blanditiis veniam maiores perspiciatis.?
          </Typography>
        </AccordionSummary>
        <AccordionDetails
          sx={{
            backgroundColor: `${color.blue[900]}`,
          }}
        >
          <Typography sx={{color:`${color.blue[400]}`}}>
           Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi facere voluptate eum, porro saepe tempore dignissimos, eligendi hic ducimus eius architecto delectus modi quis vitae dolore, consequuntur quia mollitia quod molestias aperiam iusto in? Rem delectus laborum, nulla cupiditate adipisci placeat animi? Ut nulla incidunt ipsam maiores cum dolorem, repellat fuga expedita ea reiciendis sint adipisci necessitatibus commodi quam quae, doloremque odio atque molestiae id itaque, placeat dolore. Aspernatur iste perspiciatis nobis exercitationem error! Quam, provident unde! Sequi sapiente ipsum facilis earum reiciendis! Voluptatum, ut ratione! Repudiandae optio commodi dolorum!
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Container>
  );
}
