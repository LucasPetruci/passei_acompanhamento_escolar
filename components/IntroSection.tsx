"use client"

import React from "react"
import { Button, Typography, ConfigProvider, App, Image, Flex, Grid } from "antd"
import Link from "next/link"
import { trackWhatsAppClick } from "@/lib/analytics"

const { Title, Text } = Typography
const { useBreakpoint } = Grid

export function IntroSection(): React.ReactElement {
  const screens = useBreakpoint()

  return (
    <ConfigProvider theme={{ token: { colorPrimary: "#FF6B4A", borderRadius: 999 } }}>
      <App>
        <section style={{ 
          position: 'relative', 
          minHeight: screens.lg ? '100vh' : 'auto', 
          display: 'flex', 
          alignItems: 'center', 
          overflow: 'hidden', 
          backgroundColor: '#F4B400',
          padding: screens.lg ? '0' : '60px 24px'
        }}>
          <div style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            width: '100%',
            height: '40%',
            backgroundColor: '#002B5B',
            borderRadius: '100% 100% 0 0',
            zIndex: 0
          }} />

          <div style={{ maxWidth: '1200px', margin: '0 auto', zIndex: 10, width: '100%' }}>
            <Flex vertical={!screens.lg} align="center" justify="space-between" gap={48}>
              <div style={{ flex: 1, textAlign: screens.lg ? 'left' : 'center' }}>
                <Title style={{ color: "#002B5B", fontSize: "clamp(2.5rem, 8vw, 4rem)", fontWeight: 800, lineHeight: 1.1, margin: 0 }}>
                  Transforme dificuldades em conquistas.
                </Title>
                <Text style={{ display: 'block', fontSize: "1.25rem", color: "#002B5B", marginBottom: '40px', marginTop: '24px', fontWeight: 500 }}>
                  Reforço escolar personalizado para Ensino Fundamental e Médio.
                </Text>
                <Link href="https://wa.me/5522992647848" target="_blank">
                  <Button type="primary" size="large" onClick={() => trackWhatsAppClick()} style={{ height: '64px', padding: '0 48px', fontSize: '1.125rem', fontWeight: 600, border: 'none', boxShadow: '0 10px 20px rgba(0,0,0,0.15)' }}>
                    Agendar Avaliação
                  </Button>
                </Link>
              </div>

              <div style={{ position: 'relative', width: screens.lg ? '450px' : '280px', height: screens.lg ? '450px' : '280px' }}>
                <div style={{ position: 'relative', width: '100%', height: '100%', borderRadius: '50%', overflow: 'hidden', border: '12px solid #ffffff', boxShadow: '0 25px 50px rgba(0,0,0,0.2)' }}>
                  <Image src="/emily.jpeg" alt="Emily Santana" preview={false} style={{ width: '100%', height: '100%', objectFit: 'cover' }} styles={{ root: { width: '100%', height: '100%' } }} />
                </div>
              </div>
            </Flex>
          </div>
        </section>
      </App>
    </ConfigProvider>
  )
}