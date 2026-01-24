"use client"

import React from "react"
import { Button, Row, Col, Typography, ConfigProvider, App, Image, Grid } from "antd"
import Link from "next/link"
import { trackWhatsAppClick } from "@/lib/analytics"

const { Title, Text } = Typography
const { useBreakpoint } = Grid

export function IntroSection(): React.ReactElement {
  const screens = useBreakpoint()

  const getShapeDimensions = () => {
    if (screens.lg) return { width: '50%', height: '50%' }
    if (screens.md) return { width: '20%', height: '10%' }
    return { width: '30%', height: '12%' }
  }

  const { width, height } = getShapeDimensions()

  const shapeStyle: React.CSSProperties = {
    position: 'absolute',
    top: 0,
    right: 0,
    width,
    height,
    backgroundColor: '#002B5B',
    borderBottomLeftRadius: '100%',
    zIndex: 0,
    pointerEvents: 'none',
    transition: 'all 0.3s ease'
  }

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#FF6B4A",
          borderRadius: 999,
          fontFamily: 'inherit',
        },
      }}
    >
      <App>
        <section 
          style={{ 
            position: 'relative', 
            minHeight: screens.lg ? '80vh' : 'auto',
            display: 'flex', 
            alignItems: 'center', 
            overflow: 'hidden', 
            backgroundColor: '#ffffff',
            padding: screens.lg ? '0' : '60px 0 40px'
          }}
        >
          <div style={shapeStyle} />

          <div style={{ width: '100%', maxWidth: '1200px', margin: '0 auto', padding: '0 24px', zIndex: 10 }}>
            <Row gutter={[48, 48]} align="middle" justify="center">
              <Col xs={24} lg={12} style={{ textAlign: screens.lg ? 'left' : 'center' }}>
                <Title 
                  style={{ 
                    color: "#002B5B", 
                    fontSize: "clamp(2.2rem, 7vw, 4rem)", 
                    fontWeight: 800, 
                    lineHeight: 1.1, 
                    marginBottom: '24px',
                    marginTop: 0
                  }}
                >
                  Transforme dificuldades em conquistas.
                </Title>
                
                <Text 
                  style={{ 
                    display: 'block', 
                    fontSize: screens.lg ? "1.25rem" : "1.1rem", 
                    color: "#4B5563", 
                    marginBottom: '40px',
                    maxWidth: screens.lg ? '500px' : '100%',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    lineHeight: 1.5
                  }}
                >
                  Reforço escolar personalizado e estratégico para Ensino Fundamental e Médio.
                </Text>

                <Link href="https://wa.me/5522992647848" target="_blank" rel="noopener noreferrer">
                  <Button
                    type="primary"
                    size="large"
                    onClick={() => trackWhatsAppClick()}
                    style={{
                      height: screens.lg ? '64px' : '56px',
                      padding: screens.lg ? '0 48px' : '0 32px',
                      fontSize: '1.125rem',
                      fontWeight: 600,
                      boxShadow: '0 10px 25px rgba(255, 107, 74, 0.4)',
                      border: 'none'
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
                      inset: '-15px',
                      backgroundColor: '#F4B400',
                      borderRadius: '50%',
                      opacity: 0.15,
                      filter: 'blur(35px)'
                    }}
                  />
                  <div 
                    style={{
                      position: 'relative',
                      width: screens.lg ? '420px' : 'min(75vw, 300px)',
                      height: screens.lg ? '420px' : 'min(75vw, 300px)',
                      borderRadius: '50%',
                      overflow: 'hidden',
                      border: screens.lg ? '8px solid #FF6B4A' : '6px solid #FF6B4A',
                      boxShadow: '0 30px 60px -12px rgba(0, 0, 0, 0.2)'
                    }}
                  >
                    <Image
                      src="/emily.jpeg"
                      alt="Emily Santana"
                      preview={false}
                      style={{ 
                        width: '100%', 
                        height: '100%', 
                        objectFit: 'cover'
                      }}
                      styles={{
                        root: {
                          width: '100%',
                          height: '100%'
                        }
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