"use client"

import React from "react"
import { Button, Row, Col, Typography, ConfigProvider, App, Image } from "antd"
import Link from "next/link"

const { Title, Text } = Typography

export function IntroSection(): React.ReactElement {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#FF6B4A",
          borderRadius: 999,
        },
      }}
    >
      <App>
        <section 
          style={{ 
            position: 'relative', 
            minHeight: '100vh', 
            display: 'flex', 
            alignItems: 'center', 
            overflow: 'hidden', 
            backgroundColor: '#ffffff' 
          }}
        >
          <div 
            style={{
              position: 'absolute',
              top: 0,
              right: 0,
              width: '50%',
              height: '50%',
              backgroundColor: '#002B5B',
              borderBottomLeftRadius: '100%',
              zIndex: 0
            }}
          />

          <div style={{ width: '100%', maxWidth: '1200px', margin: '0 auto', padding: '0 24px', zIndex: 10 }}>
            <Row gutter={[48, 48]} align="middle">
              <Col xs={24} lg={12}>
                <Title 
                  style={{ 
                    color: "#002B5B", 
                    fontSize: "clamp(2.5rem, 5vw, 4rem)", 
                    fontWeight: 800, 
                    lineHeight: 1.1, 
                    marginBottom: '24px' 
                  }}
                >
                  Transforme dificuldades em conquistas.
                </Title>
                
                <Text 
                  style={{ 
                    display: 'block', 
                    fontSize: "1.25rem", 
                    color: "#4B5563", 
                    marginBottom: '40px',
                    maxWidth: '500px'
                  }}
                >
                  Reforço escolar personalizado e estratégico para Ensino Fundamental e Médio.
                </Text>

                <Link href="https://wa.me/5522992647848" target="_blank" rel="noopener noreferrer">
                  <Button
                    type="primary"
                    size="large"
                    style={{
                      height: '64px',
                      padding: '0 40px',
                      fontSize: '1.125rem',
                      fontWeight: 600,
                      boxShadow: '0 10px 20px rgba(255, 107, 74, 0.3)'
                    }}
                  >
                    Agendar Avaliação
                  </Button>
                </Link>
              </Col>

              <Col xs={24} lg={12} style={{ display: 'flex', justifyContent: 'center' }}>
                <div style={{ position: 'relative' }}>
                  <div 
                    style={{
                      position: 'absolute',
                      inset: '-16px',
                      backgroundColor: '#F4B400',
                      borderRadius: '50%',
                      opacity: 0.2,
                      filter: 'blur(40px)'
                    }}
                  />
                  <div 
                    style={{
                      position: 'relative',
                      width: 'min(80vw, 400px)',
                      height: 'min(80vw, 400px)',
                      borderRadius: '50%',
                      overflow: 'hidden',
                      border: '8px solid #FF6B4A',
                      boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
                    }}
                  >
                    <Image
                      src="/emily.jpeg"
                      alt="Emily Santanfa"
                      preview={false}
                      style={{ 
                        width: '100%', 
                        height: '100%', 
                        objectFit: 'cover',
                        display: 'block'
                      }}
                      wrapperStyle={{
                        width: '100%',
                        height: '100%'
                      }}
                    />
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </section>
      </App>
    </ConfigProvider>
  )
}