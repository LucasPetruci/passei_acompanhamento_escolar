"use client"

import React from "react"
import { Button, Row, Col, Typography, ConfigProvider, App, Image, Grid } from "antd"
import Link from "next/link"
import { trackWhatsAppClick } from "@/lib/analytics"

const { Title, Text } = Typography
const { useBreakpoint } = Grid

export function IntroSection(): React.ReactElement {
  const screens = useBreakpoint()

  const shapeStyle: React.CSSProperties = {
    position: 'absolute',
    top: 0,
    right: 0,
    width: screens.lg ? '50%' : '35%',
    height: screens.lg ? '50%' : '15%',
    backgroundColor: '#002B5B',
    borderBottomLeftRadius: '100%',
    zIndex: 0,
    pointerEvents: 'none'
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
            minHeight: '100vh', 
            display: 'flex', 
            alignItems: 'center', 
            overflow: 'hidden', 
            backgroundColor: '#ffffff',
            padding: screens.lg ? '0' : '80px 0'
          }}
        >
          <div style={shapeStyle} />

          <div style={{ width: '100%', maxWidth: '1200px', margin: '0 auto', padding: '0 24px', zIndex: 10 }}>
            <Row gutter={[48, 64]} align="middle" justify="center">
              <Col xs={24} lg={12} style={{ textAlign: screens.lg ? 'left' : 'center' }}>
                <Title 
                  style={{ 
                    color: "#002B5B", 
                    fontSize: "clamp(2.5rem, 8vw, 4rem)", 
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
                    fontSize: screens.lg ? "1.25rem" : "1.15rem", 
                    color: "#4B5563", 
                    marginBottom: '40px',
                    maxWidth: screens.lg ? '500px' : '100%',
                    marginLeft: screens.lg ? '0' : 'auto',
                    marginRight: screens.lg ? '0' : 'auto',
                    lineHeight: 1.6
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
                      height: '64px',
                      padding: '0 48px',
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
                      inset: '-20px',
                      backgroundColor: '#F4B400',
                      borderRadius: '50%',
                      opacity: 0.15,
                      filter: 'blur(45px)'
                    }}
                  />
                  <div 
                    style={{
                      position: 'relative',
                      width: screens.lg ? '420px' : '280px',
                      height: screens.lg ? '420px' : '280px',
                      borderRadius: '50%',
                      overflow: 'hidden',
                      border: '8px solid #FF6B4A',
                      boxShadow: '0 30px 60px -12px rgba(0, 0, 0, 0.2)'
                    }}
                  >
                    <Image
                      src="/emily.jpeg"
                      alt="Emily Santanfa"
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