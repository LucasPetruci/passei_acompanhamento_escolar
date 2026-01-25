"use client"

import React from "react"
import { Typography, Card, ConfigProvider, Flex, Grid } from "antd"
import { BookOutlined, AppstoreOutlined, CheckOutlined } from "@ant-design/icons"
import { MethodologyCardProps } from "@/types/methodology"

const { Title, Paragraph, Text } = Typography
const { useBreakpoint } = Grid

const CustomMethodCard = ({ icon, title, description, features, iconBg }: MethodologyCardProps) => (
  <Card
    style={{
      borderRadius: '32px',
      border: 'none',
      backgroundColor: '#ffffff',
      boxShadow: '0 15px 35px rgba(0,0,0,0.1)',
      width: '100%',
      maxWidth: '500px'
    }}
    styles={{ body: { padding: '40px' } }}
  >
    <Flex vertical gap={24} align="start">
      <div style={{ 
        width: '72px', height: '72px', backgroundColor: iconBg, 
        borderRadius: '18px', display: 'flex', alignItems: 'center', 
        justifyContent: 'center', fontSize: '32px', color: '#fff' 
      }}>
        {icon}
      </div>
      <div style={{ textAlign: 'left' }}>
        <Title level={3} style={{ color: "#002B5B", marginBottom: '16px', marginTop: 0 }}>
          {title}
        </Title>
        <Paragraph style={{ color: '#4B5563', fontSize: '1.05rem', lineHeight: 1.6, margin: 0 }}>
          {description}
        </Paragraph>
      </div>
      <Flex vertical gap={12} style={{ width: '100%' }}>
        {features.map((f, i) => (
          <Flex key={i} align="start" gap={12}>
            <CheckOutlined style={{ color: '#F4B400', marginTop: '4px', fontWeight: 'bold' }} />
            <Text style={{ color: '#6B7280', textAlign: 'left' }}>{f}</Text>
          </Flex>
        ))}
      </Flex>
    </Flex>
  </Card>
)

export function MethodologySection(): React.ReactElement {
  const screens = useBreakpoint()

  return (
    <ConfigProvider theme={{ token: { borderRadius: 32 } }}>
      <section style={{ 
        padding: screens.lg ? '100px 24px' : '60px 24px', 
        backgroundColor: '#002B5B' 
      }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <Flex 
            vertical={!screens.lg} 
            align="center" 
            justify="space-between" 
            gap={48}
          >
            <div style={{ flex: 1, textAlign: screens.lg ? 'left' : 'center' }}>
              <Title level={2} style={{ color: "#ffffff", fontSize: 'clamp(2.2rem, 5vw, 3rem)', margin: 0 }}>
                Reforço Escolar Regular
              </Title>
              <Paragraph style={{ color: "rgba(255,255,255,0.8)", fontSize: '1.2rem', marginTop: '24px' }}>
                Turmas reduzidas de até 6 alunos para garantir atenção e foco no aprendizado.
              </Paragraph>
            </div>
            <CustomMethodCard 
              icon={<BookOutlined />}
              title="Aprendizado Colaborativo"
              description="Desenvolvemos autonomia e estratégias de estudo eficientes."
              features={["Turmas reduzidas", "Foco no rendimento", "Autonomia escolar"]}
              iconBg="#002B5B"
            />
          </Flex>
        </div>
      </section>

      <section style={{ 
        padding: screens.lg ? '100px 24px' : '60px 24px', 
        backgroundColor: '#FF6B4A' 
      }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <Flex 
            vertical={!screens.lg} 
            flex-direction={screens.lg ? "row-reverse" : "column"}
            align="center" 
            justify="space-between" 
            gap={48}
            style={{ flexDirection: screens.lg ? 'row-reverse' : 'column' }}
          >
            <div style={{ flex: 1, textAlign: screens.lg ? 'left' : 'center' }}>
              <Title level={2} style={{ color: "#ffffff", fontSize: 'clamp(2.2rem, 5vw, 3rem)', margin: 0 }}>
                Educação Especial (DUA)
              </Title>
              <Paragraph style={{ color: "rgba(255,255,255,0.9)", fontSize: '1.2rem', marginTop: '24px' }}>
                Atendimento individualizado guiado pelo Desenho Universal da Aprendizagem.
              </Paragraph>
            </div>
            <CustomMethodCard 
              icon={<AppstoreOutlined />}
              title="Inclusão e Método"
              description="Respeito ao ritmo e às necessidades específicas de cada aluno."
              features={["Individualizado", "Materiais adaptados", "Acompanhamento DUA"]}
              iconBg="#FF6B4A"
            />
          </Flex>
        </div>
      </section>
    </ConfigProvider>
  )
}