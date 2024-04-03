import React from 'react'
import { Html, Body, Container, Text, Link, Preview } from '@react-email/components'

const WelcomeTemplate = ({name}: {name: string}) => {
  return (
    <Html>
        <Preview>Welcome onboard</Preview>
        <Body>
            <Container>
                <Text>Hello {name}</Text>
                <Link href='https://github.com/'>my github home</Link>
            </Container>
        </Body>
    </Html>
  )
}

export default WelcomeTemplate