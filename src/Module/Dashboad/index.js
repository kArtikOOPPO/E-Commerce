import React from "react";
import Page from "../../components/Page";
import {
  Container,
  Typography,
  Stack,
  Grid,
  Card,
  CardContent,
  CardActions,
  Button,
  Box,
} from "@mui/material"; 
import SwiperComponent from "./Carasoule";

const Contained = [
  {
    imageUrl:
      "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8SGVhZHBob25lfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    name: "Sony Head Phones",
    type: "Wire",
    cost: "1540",
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8SGVhZHBob25lfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    name: "Product 2",
    type: "Wireless",
    cost: "2000",
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8SGVhZHBob25lfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    name: "Product 3",
    type: "Wire",
    cost: "1000",
  },
  // Add more elements here...
  {
    imageUrl:
      "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8SGVhZHBob25lfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    name: "Product 15",
    type: "Wireless",
    cost: "5000",
  },
];

export const Dashboard = () => {
  return (
    <Page>
      <Container style={{ maxWidth: "none" }}>
        <Stack
          direction={{ xs: "column", sm: "row", md: "row" }}
          alignItems="center"
          justifyContent="flex-start"
          mt={0.5}
          mb={1}
          px={1}
        >
          <Typography
            variant="h4"
            sx={{
              fontSize: {
                xs: 15,
              },
            }}
            mb={0}
            gutterBottom
          >
            Hi, Welcome back
          </Typography>
        </Stack>
        <SwiperComponent />
        <Grid
          sx={{ display: "flex", justifyContent: "center" }}
          container
          spacing={2}
        >
          {" "}
          {Contained?.map((x) => (
            <Grid
              item
              xs={6}
              sm={6}
              md={3}
              sx={{
                px: {
                  xs: 0.2,
                },
              }}
            >
              <Card>
                <CardContent>
                  <Box
                    sx={{
                      display: "flex",
                      height: {
                        xs: 100,
                        sm: 200,
                      },
                    }}
                  >
                    <img
                      style={{ width: "100%" }}
                      src={x?.imageUrl}
                      alt="images"
                    />
                  </Box>

                  <Typography
                    sx={{
                      fontSize: {
                        xs: 15,
                      },
                      textOverflow: "ellipsis",
                      whiteSpace: "nowrap",
                      maxWidth: { sm: 200, xs: 150 }, // Set your desired maximum width
                    }}
                    variant="h5"
                    component="div"
                    nowrap
                  >
                    {x?.name}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: {
                        xs: 15,
                      },
                      mb: 1.5,
                      textOverflow: "ellipsis",
                      whiteSpace: "nowrap",
                      maxWidth: { sm: 200, xs: 150 }, // Set your desired maximum width
                    }}
                    color="text.secondary"
                    nowrap
                  >
                    {x?.type}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: {
                        xs: 15,
                      },
                      textOverflow: "ellipsis",
                      whiteSpace: "nowrap",
                      maxWidth: { sm: 200, xs: 150 }, // Set your desired maximum width
                    }}
                    variant="body2"
                    nowrap
                  >
                    Rs.{x?.cost}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    size="small"
                    sx={{
                      fontSize: {
                        xs: 15,
                      },
                      textTransform: "none",
                      textOverflow: "ellipsis",
                      whiteSpace: "nowrap",
                      maxWidth: { sm: 200, xs: 150 }, // Set your desired maximum width
                    }}
                  >
                    Learn More
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Page>
  );
};
