import React from "react";
import {
  Html,
  Body,
  Container,
  Tailwind,
  Text,
  Link,
  Preview,
} from "@react-email/components";

const WelcomeTemplate = ({ name }: { name: string }) => {
  return (
    <Html>
      <Preview>Welcome onboard</Preview>
      <Tailwind>
        <Body>
          <Container className="bg-sky-500/100">
            <Text className="text-3xl font-bold">Hello {name}</Text>
            <Link href="https://github.com/">my github home</Link>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default WelcomeTemplate;
