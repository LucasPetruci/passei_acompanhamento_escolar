"use client"

import React from "react"
import { Row, Col, Typography, Card, Space, ConfigProvider, Flex } from "antd"
import { GraduationCap, Target, Heart } from "lucide-react"
import { TeacherFeature } from "@/types/teacher"

const { Title, Paragraph, Text } = Typography

const FeatureCard = ({ icon, title, description, bgColor }: TeacherFeature) => (
  <Card
    hoverable
    styles={{ body: { padding: '40px 24px' } }}
    style={{ 
      borderRadius: '24px', 
      height: '100%', 
      textAlign: 'center',
      border: 'none',
      boxShadow: '0 4px 20px rgba(0,0,0,0.05)'
    }}
  >
    <Flex vertical align="center" gap={20}>
      <div 
        style={{ 
          width: '64px', 
          height: '64px', 
          backgroundColor: bgColor, 
          borderRadius: '50%', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center',
          fontSize: '32px',
          color: '#fff'
        }}
      >
        {icon}
      </div>
      <Title level={4} style={{ color: "#002B5B", margin: 0 }}>{title}</Title>
      <Text type="secondary" style={{ fontSize: '1rem' }}>{description}</Text>
    </Flex>
  </Card>
)

export function AboutSection(): React.ReactElement {
  const features: TeacherFeature[] = [
    {
      icon: <GraduationCap size={32} />,
      title: "Formada pelo IFF",
      description: "Formação sólida e qualificada",
      bgColor: "#002B5B",
    },
    {
      icon: <Target size={32} />,
      title: "Plano Estratégico",
      description: "Estudos personalizados para cada aluno",
      bgColor: "#FF6B4A",
    },
    {
      icon: <Heart size={32} />,
      title: "Acolhimento",
      description: "Ambiente seguro e acolhedor",
      bgColor: "#F4B400",
    },
  ]

  return (
    <ConfigProvider theme={{ token: { borderRadius: 24 } }}>
      <section style={{ padding: '100px 24px', backgroundColor: '#F9F9F9' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <Space orientation="vertical" size={60} style={{ width: '100%', textAlign: 'center' }}>
            
            <Space orientation="vertical" size={16} style={{ maxWidth: '800px' }}>
              <Title level={2} style={{ color: "#002B5B", fontSize: 'clamp(2rem, 5vw, 2.5rem)', margin: 0 }}>
                Quem é Emily Santana?
              </Title>
              <Paragraph style={{ fontSize: '1.2rem', color: '#4B5563', lineHeight: 1.8 }}>
                Formada pelo IFF com experiência em orientação pedagógica, Emily oferece um acompanhamento educacional que
                vai além das notas, focando no desenvolvimento integral do aluno.
              </Paragraph>
            </Space>

            <Row gutter={[24, 24]} justify="center">
              {features.map((feature, index) => (
                <Col xs={24} md={8} key={index}>
                  <FeatureCard {...feature} />
                </Col>
              ))}
            </Row>
            
          </Space>
        </div>
      </section>
    </ConfigProvider>
  )
}