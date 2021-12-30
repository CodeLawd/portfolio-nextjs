import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hello there, <br />
        I'm Alexander Joshua
      </SectionTitle>
      <SectionText>
        I am a software developer who specializes in
        building web applications for both small, medium and large
        enterprises. I am also interested in technical writing.
      </SectionText>
      <Button>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;
