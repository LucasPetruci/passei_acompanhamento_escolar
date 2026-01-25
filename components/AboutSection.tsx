"use client"

import React from "react"
import { Typography, Card, ConfigProvider, Flex, Grid } from "antd"
import { ReadOutlined, AimOutlined, HeartOutlined } from "@ant-design/icons"

const { Title, Paragraph, Text } = Typography
const { useBreakpoint } = Grid

export function AboutSection(): React.ReactElement {
  const screens = useBreakpoint()

  const features = [
    { icon: <ReadOutlined />, title: "Formada pelo IFF", desc: "Formação sólida e qualificada", color: "#002B5B" },
    { icon: <AimOutlined />, title: "Plano Estratégico", desc: "Estudos personalizados", color: "#FF6B4A" },
    { icon: <HeartOutlined />, title: "Acolhimento", desc: "Ambiente seguro e presente", color: "#F4B400" },
  ]

  return (
    <ConfigProvider theme={{ token: { borderRadius: 32 } }}>
      <section style={{ 
        padding: screens.lg ? '100px 24px' : '60px 24px', 
        backgroundColor: '#002B5B' 
      }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <Flex vertical gap={60} align="center">
            <div style={{ textAlign: 'center', maxWidth: '800px' }}>
              <Title level={2} style={{ color: "#ffffff", fontSize: 'clamp(2rem, 5vw, 2.5rem)', margin: 0 }}>
                Quem é Emily Santana?
              </Title>
              <Paragraph style={{ fontSize: '1.2rem', color: 'rgba(255,255,255,0.8)', lineHeight: 1.8, marginTop: '24px' }}>
                Profissional da Educação formada pelo Instituto Federal Fluminense, 
                Emily oferece um acompanhamento estratégico que transforma dificuldades em avanços reais.
              </Paragraph>
            </div>

            <Flex vertical={!screens.md} gap={24} style={{ width: '100%' }} justify="center">
              {features.map((item, index) => (
                <Card key={index} style={{ flex: 1, borderRadius: '24px', textAlign: 'center', border: 'none' }} styles={{ body: { padding: '32px 24px' } }}>
                  <Flex vertical align="center" gap={16}>
                    <div style={{ fontSize: '32px', color: item.color }}>{item.icon}</div>
                    <Title level={4} style={{ color: "#002B5B", margin: 0 }}>{item.title}</Title>
                    <Text type="secondary">{item.desc}</Text>
                  </Flex>
                </Card>
              ))}
            </Flex>
          </Flex>
        </div>
      </section>
    </ConfigProvider>
  )
}