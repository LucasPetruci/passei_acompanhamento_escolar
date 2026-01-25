"use client"

import React from "react"
import { Row, Col, Typography, Card, ConfigProvider, Flex, Grid } from "antd"
import { BookOutlined, ExceptionOutlined, CheckOutlined } from "@ant-design/icons"
import { MethodologyCardProps } from "@/types/methodology"

const { Title, Paragraph, Text } = Typography
const { useBreakpoint } = Grid

const MethodologyCard = ({
  icon,
  title,
  description,
  features,
  gradient,
  borderColor,
  iconBg,
}: MethodologyCardProps) => (
  <Card
    hoverable
    style={{
      height: '100%',
      borderRadius: '24px',
      border: `2px solid ${borderColor}`,
      background: gradient,
      boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
    }}
    styles={{ body: { padding: '40px' } }}
  >
    <Flex vertical gap={24} align="start">
      <div 
        style={{ 
          width: '80px', 
          height: '80px', 
          backgroundColor: iconBg, 
          borderRadius: '50%', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center',
          fontSize: '32px',
          color: '#fff',
          boxShadow: `0 8px 16px ${iconBg}40`
        }}
      >
        {icon}
      </div>

      <div style={{ minHeight: '160px', textAlign: 'left', width: '100%' }}>
        <Title level={3} style={{ color: "#002B5B", marginBottom: '16px', marginTop: 0 }}>
          {title}
        </Title>
        <Paragraph style={{ color: '#4B5563', fontSize: '1.05rem', lineHeight: 1.6, margin: 0 }}>
          {description}
        </Paragraph>
      </div>

      {/* Substituído <List> por <Flex> para evitar erros de hidratação */}
      <Flex vertical gap={12} style={{ width: '100%' }}>
        {features.map((feature, index) => (
          <Flex key={index} align="start" gap={12}>
            <CheckOutlined style={{ color: '#F4B400', marginTop: '4px', fontWeight: 'bold' }} />
            <Text style={{ color: '#6B7280', textAlign: 'left' }}>{feature}</Text>
          </Flex>
        ))}
      </Flex>
    </Flex>
  </Card>
)

export function MethodologySection(): React.ReactElement {
  const screens = useBreakpoint()

  const methodologies: MethodologyCardProps[] = [
    {
      icon: <BookOutlined />,
      title: "Reforço Escolar Regular",
      description:
        "Para melhorar rendimento, foco e autonomia. Turmas de até 6 crianças em um ambiente colaborativo que estimula o aprendizado.",
      features: ["Turmas reduzidas", "Foco no rendimento", "Desenvolvimento de autonomia"],
      gradient: "linear-gradient(135deg, #ffffff 0%, #f0f4f8 100%)",
      borderColor: "rgba(0, 43, 91, 0.1)",
      iconBg: "#002B5B",
    },
    {
      icon: <ExceptionOutlined />,
      title: "Educação Especial (DUA)",
      description:
        "Atendimento individualizado guiado pelo Desenho Universal da Aprendizagem. Adaptação de materiais e ritmo conforme a necessidade do aluno.",
      features: ["Atendimento individualizado", "Materiais adaptados", "Ritmo personalizado"],
      gradient: "linear-gradient(135deg, #ffffff 0%, #fff5f2 100%)",
      borderColor: "#FF6B4A",
      iconBg: "#FF6B4A",
    },
  ]

  return (
    <ConfigProvider theme={{ token: { borderRadius: 24 } }}>
      <section style={{ padding: screens.lg ? '100px 24px' : '60px 24px', backgroundColor: '#ffffff' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <Flex vertical gap={60}>
            <div style={{ textAlign: 'center' }}>
              <Title level={2} style={{ color: "#002B5B", fontSize: 'clamp(2rem, 5vw, 2.5rem)', marginBottom: '16px' }}>
                Metodologia e Serviços
              </Title>
              <Paragraph style={{ fontSize: '1.2rem', color: '#6B7280', maxWidth: '700px', margin: '0 auto' }}>
                Oferecemos dois tipos de atendimento para atender às necessidades específicas de cada aluno
              </Paragraph>
            </div>

            <Row gutter={[32, 32]} justify="center">
              {methodologies.map((method, index) => (
                <Col xs={24} md={12} key={index}>
                  <MethodologyCard {...method} />
                </Col>
              ))}
            </Row>
          </Flex>
        </div>
      </section>
    </ConfigProvider>
  )
}