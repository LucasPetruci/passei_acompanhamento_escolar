"use client"

import React, { useState, useMemo } from "react"
import { Typography, Card, ConfigProvider, Flex, Button, Segmented, Badge, Grid, Tag, Row, Col } from "antd"
import { CheckOutlined, WhatsAppOutlined, PercentageOutlined } from "@ant-design/icons"
import { trackPriceCardView } from "@/lib/analytics"
import { PricingPlan, ServiceType } from "@/types/price"
import { pricingPlans } from "@/conifg/content"

const { Title, Text, Paragraph } = Typography
const { useBreakpoint } = Grid

interface ExtendedPricingPlan extends PricingPlan {
  intermediatePrice?: string
}

export function PricingSection(): React.ReactElement {
  const [serviceType, setServiceType] = useState<ServiceType>("regular")
  const [hasSiblingDiscount, setHasSiblingDiscount] = useState(false)
  const [hasAnnualDiscount, setHasAnnualDiscount] = useState(false)
  const screens = useBreakpoint()
  
  const AMARELO_BACKGROUND = "#F4B400"
  const AZUL_MARINHO = "#002B5B"
  const LARANJA = "#FF6B4A"
  const ROXO = "#8E44AD"

  const themeColor = serviceType === "regular" ? AZUL_MARINHO : LARANJA

  const getCardStyle = () => {
    if (hasSiblingDiscount && hasAnnualDiscount) return { bg: ROXO, text: "#ffffff", sub: "rgba(255,255,255,0.8)" }
    if (hasSiblingDiscount) return { bg: AZUL_MARINHO, text: "#ffffff", sub: "rgba(255,255,255,0.8)" }
    if (hasAnnualDiscount) return { bg: LARANJA, text: "#ffffff", sub: "rgba(255,255,255,0.8)" }
    return { bg: "#ffffff", text: AZUL_MARINHO, sub: "#6B7280" }
  }

  const cardStyle = getCardStyle()

  const parsePrice = (priceStr: string) => {
    return parseFloat(priceStr.replace("R$", "").replace(".", "").replace(",", ".").trim())
  }

  const formatPrice = (val: number) => {
    return val.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
  }

  const calculatedPricing = useMemo(() => {
    const plans = pricingPlans[serviceType]
    
    return plans.map((plan: PricingPlan): ExtendedPricingPlan => {
      const baseValue = parsePrice(plan.price)
      let finalValue = baseValue

      if (hasSiblingDiscount) finalValue *= 0.8
      if (hasAnnualDiscount) finalValue *= 0.95

      const showIntermediate = hasSiblingDiscount && hasAnnualDiscount

      return {
        ...plan,
        originalPrice: (hasSiblingDiscount || hasAnnualDiscount) ? plan.price : undefined,
        intermediatePrice: showIntermediate ? formatPrice(baseValue * 0.8) : undefined,
        price: formatPrice(finalValue)
      }
    })
  }, [serviceType, hasSiblingDiscount, hasAnnualDiscount])

  const handleTypeChange = (value: string | number) => {
    setServiceType(value as ServiceType)
    trackPriceCardView(value as ServiceType)
  }

  return (
    <ConfigProvider
      theme={{
        token: { 
          borderRadius: 32, 
          colorPrimary: themeColor,
          boxShadow: '0 15px 35px rgba(0,0,0,0.1)'
        },
        components: {
          Segmented: {
            itemSelectedBg: themeColor,
            itemSelectedColor: "#ffffff",
            controlHeight: 48,
            borderRadius: 999,
          }
        }
      }}
    >
      <section style={{ 
        padding: screens.lg ? '100px 24px' : '60px 24px', 
        backgroundColor: AMARELO_BACKGROUND,
        transition: 'all 0.3s ease'
      }}>
        <div style={{ maxWidth: '1150px', margin: '0 auto' }}>
          
          <Flex vertical align="center" gap={32} style={{ marginBottom: '64px' }}>
            <Title level={2} style={{ color: AZUL_MARINHO, fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', margin: 0, textAlign: 'center' }}>
              Investimento
            </Title>
            
            <Segmented
              options={[
                { label: 'Ensino Regular', value: 'regular' },
                { label: 'Educação Especial (DUA)', value: 'dua' }
              ]}
              value={serviceType}
              onChange={handleTypeChange}
              style={{ 
                padding: '6px', 
                backgroundColor: 'rgba(255,255,255,0.4)',
                backdropFilter: 'blur(10px)'
              }}
            />

            <Tag color={themeColor} style={{ 
              padding: '8px 32px', 
              fontSize: '1.1rem', 
              borderRadius: '100px', 
              border: 'none', 
              fontWeight: 700,
              boxShadow: `0 4px 15px ${themeColor}44`
            }}>
              MATRÍCULA: R$ 100,00
            </Tag>
          </Flex>

          <Row gutter={[24, 24]} justify="center">
            {calculatedPricing.map((plan, index) => (
              <Col xs={24} md={8} key={index}>
                <Badge.Ribbon 
                  text="MAIS COMPLETO" 
                  color={LARANJA} 
                  style={{ display: plan.highlighted ? 'block' : 'none', top: -10 }}
                >
                  <Card
                    hoverable
                    style={{ 
                      height: '100%', 
                      backgroundColor: cardStyle.bg,
                      border: plan.highlighted && !hasSiblingDiscount && !hasAnnualDiscount ? `4px solid ${themeColor}` : 'none',
                      borderRadius: '32px',
                      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
                    }}
                    styles={{ body: { padding: '40px 24px' } }}
                  >
                    <Flex vertical gap={24} align="center">
                      <Title level={4} style={{ color: cardStyle.text, margin: 0, fontSize: '1.5rem', textAlign: 'center' }}>
                        {plan.title}
                      </Title>
                      
                      <Flex vertical align="center">
                        {plan.originalPrice && (
                          <Text delete style={{ color: cardStyle.sub, fontSize: '1.1rem' }}>
                            {plan.originalPrice}
                          </Text>
                        )}
                        {plan.intermediatePrice && (
                          <Text delete style={{ color: cardStyle.sub, fontSize: '1.1rem' }}>
                            {plan.intermediatePrice}
                          </Text>
                        )}
                        <Text style={{ color: cardStyle.text, fontSize: '2.8rem', fontWeight: 800, lineHeight: 1 }}>
                          {plan.price}
                        </Text>
                      </Flex>

                      <Paragraph style={{ color: cardStyle.sub, textAlign: 'center', minHeight: '48px', margin: 0 }}>
                        {plan.description || "Acompanhamento estratégico e individualizado"}
                      </Paragraph>

                      <Flex vertical gap={16} style={{ width: '100%', borderTop: `1px solid ${cardStyle.sub}44`, paddingTop: '24px' }}>
                        {plan.features.map((f, i) => (
                          <Flex key={i} gap={12} align="start">
                            <CheckOutlined style={{ color: (hasSiblingDiscount || hasAnnualDiscount) ? "#ffffff" : AMARELO_BACKGROUND, marginTop: '4px', fontWeight: 'bold' }} />
                            <Text style={{ fontSize: '1rem', color: cardStyle.text }}>{f}</Text>
                          </Flex>
                        ))}
                      </Flex>
                    </Flex>
                  </Card>
                </Badge.Ribbon>
              </Col>
            ))}
          </Row>

          <Flex vertical={!screens.md} gap={24} style={{ marginTop: '64px' }} justify="center">
            <Card 
              hoverable 
              onClick={() => setHasSiblingDiscount(!hasSiblingDiscount)}
              style={{ 
                flex: 1, 
                backgroundColor: hasSiblingDiscount ? AZUL_MARINHO : 'rgba(255, 255, 255, 0.2)', 
                border: hasSiblingDiscount ? '2px solid #fff' : `2px dashed ${AZUL_MARINHO}`,
                borderRadius: '24px',
                transition: 'all 0.3s ease'
              }} 
              styles={{ body: { padding: '24px' } }}
            >
              <Flex align="center" justify="center" gap={12}>
                <PercentageOutlined style={{ color: hasSiblingDiscount ? AMARELO_BACKGROUND : AZUL_MARINHO, fontSize: '24px' }} />
                <Text style={{ color: hasSiblingDiscount ? '#fff' : AZUL_MARINHO, fontSize: '1.1rem', fontWeight: 600 }}>
                  20% de DESCONTO (2º Filho)
                </Text>
              </Flex>
            </Card>

            <Card 
              hoverable 
              onClick={() => setHasAnnualDiscount(!hasAnnualDiscount)}
              style={{ 
                flex: 1, 
                backgroundColor: hasAnnualDiscount ? LARANJA : 'rgba(255, 255, 255, 0.2)', 
                border: hasAnnualDiscount ? '2px solid #fff' : `2px dashed ${LARANJA}`,
                borderRadius: '24px',
                transition: 'all 0.3s ease'
              }} 
              styles={{ body: { padding: '24px' } }}
            >
              <Flex align="center" justify="center" gap={12}>
                <PercentageOutlined style={{ color: hasAnnualDiscount ? AMARELO_BACKGROUND : LARANJA, fontSize: '24px' }} />
                <Text style={{ color: hasAnnualDiscount ? '#fff' : LARANJA, fontSize: '1.1rem', fontWeight: 600 }}>
                  5% de DESCONTO (Plano Anual)
                </Text>
              </Flex>
            </Card>
          </Flex>

          <Flex justify="center" style={{ marginTop: '64px' }}>
            <Button 
              type="primary" 
              size="large" 
              icon={<WhatsAppOutlined />}
              href="https://wa.me/5522992647848"
              target="_blank"
              style={{ 
                height: '72px', 
                padding: '0 64px', 
                fontSize: '1.3rem', 
                fontWeight: 700, 
                backgroundColor: AZUL_MARINHO, 
                border: 'none',
                borderRadius: '999px',
                boxShadow: '0 15px 35px rgba(0, 43, 91, 0.4)'
              }}
            >
              Agendar Avaliação
            </Button>
          </Flex>
        </div>
      </section>
    </ConfigProvider>
  )
}