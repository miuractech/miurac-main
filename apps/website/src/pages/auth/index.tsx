import { Container, Grid } from '@mantine/core'
import React from 'react'



export default function Auth() {
    
  return (
    <Container fluid>
        <div className="h-20" />
        <Grid style={{height:"calc(100vh - 80px)"}} className='text-center' >
            <Grid.Col md={6} xs={12}>
                client
            </Grid.Col>
            <Grid.Col md={6} xs={12}>
                investor
            </Grid.Col>
        </Grid>
    </Container>
  )
}