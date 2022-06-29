import {
  GridItem,
  Image,
  Link,
  SimpleGrid,
  Text,
  useBreakpointValue,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import React from "react";

import { colors } from "../../theme";
import SectionContainer from "../SectionContainer";

const Bio = ({ secondary }) => (
  <GridItem>
    <VStack m="auto" w="75%" spacing="12px" pt="5%">
      <Text>
        Hi, I&apos;m Sardor! I am studying a  Computer Science and Engineering at the Seoul National University of
        Science and Technology, and I&apos;m currently doing an Internship at{" "}
        <Link href="https://jobbridge.kr/en/" isExternal>
          JobBridge
        </Link>{" "}
        as a <strong style={{ color: secondary }}>Frontend Developer</strong>{" "}
        on the Frontend Development team. 
      </Text>
      <Text>
        I enjoy creating scalable & elegant web applications that have a
        real world impact on industry level. I&apos;m always learning new technologies
        or studying.
      </Text>
    </VStack>
  </GridItem>
);

const Headshot = () => (
  <GridItem>
    <Image
      m="auto"
      src="/me.jpg"
      alt="Sardor Madaminov "
      zIndex={1}
      className="image"
      onClick={() => {
        window.open("https://www.linkedin.com/in/sardorbekmadaminov-44987a1a7/");
      }}
    />
  </GridItem>
);

export default function About() {
  const shouldAlternate = useBreakpointValue({ base: false, md: true });
  const secondary = useColorModeValue(
    colors.secondary.light,
    colors.secondary.dark
  );
  return (
    <SectionContainer
      id="about"
      name="about"
      headerMt="-5%"
      headerText="About Me"
      useHeaderStyle
    >
      <SimpleGrid
        pl="10%"
        pt="5%"
        pr="10%"
        spacing={12}
        columns={[1, null, 2]}
        justifyContent="center"
      >
        {shouldAlternate ? <Bio secondary={secondary} /> : <Headshot />}
        {shouldAlternate ? <Headshot /> : <Bio secondary={secondary} />}
      </SimpleGrid>
    </SectionContainer>
  );
}