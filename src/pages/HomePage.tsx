import { Grid, Show, GridItem } from "@chakra-ui/react";

const HomePage = () => {
  return (
    <Grid
      templateAreas={{
        base: `"main"`,
        lg: `"aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <Show above="lg">
        <GridItem area="aside" paddingX={5}>
          Side Area
        </GridItem>
      </Show>
      <GridItem area="main">Main Area</GridItem>
    </Grid>
  );
};

export default HomePage;
