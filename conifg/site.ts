import { ContactInfo, Location, TeacherInfo } from "@/types/global"

export const siteConfig = {
  name: "Passei Acompanhamento Escolar",
  description: "Acompanhamento escolar especializado com metodologia personalizada",
  url: "https://passeiacompanhamentoescolar.com.br",
  author: {
    name: "Emily Santana",
    role: "Educadora Especializada",
  },
} as const

export const contactInfo: ContactInfo = {
  phone: "(11) 99999-9999",
  whatsapp: "5511999999999",
  email: "contato@passeiacompanhamentoescolar.com.br",
  instagram: "@passeiacompanhamento",
} as const

export const locations: Location[] = [
  {
    name: "Unidade Jardins",
    address: "Rua Augusta, 123 - Jardins, São Paulo - SP",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.1985288344087!2d-46.65522668502205!3d-23.561684684688485!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c8da0aa315%3A0xd59f9431f2c9776a!2sAv.%20Paulista%20-%20Bela%20Vista%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1620000000000!5m2!1spt-BR!2sbr",
  },
  {
    name: "Unidade Vila Mariana",
    address: "Av. Domingos de Morais, 456 - Vila Mariana, São Paulo - SP",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.4563788744087!2d-46.63444368502135!3d-23.594593684692375!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5a3f0f8c3f7d%3A0x9f7e9c7c4c7c7c7c!2sVila%20Mariana%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1620000000000!5m2!1spt-BR!2sbr",
  },
] as const

export const teacherInfo: TeacherInfo = {
  name: "Emily Santana",
  photo: "/emily-photo.png",
  bio: [
    "Educadora com mais de 10 anos de experiência em acompanhamento escolar, especializada em metodologias ativas e ensino personalizado.",
    "Formada em Pedagogia pela USP com pós-graduação em Psicopedagogia, dedicada a transformar a jornada educacional de cada aluno.",
  ],
  qualifications: [
    "Graduação em Pedagogia - USP",
    "Pós-graduação em Psicopedagogia",
    "Certificação em Metodologias Ativas",
    "10+ anos de experiência",
  ],
} as const

export const theme = {
  colors: {
    primary: "#002B5B",
    secondary: "#FF6B4A",
    accent: "#F4B400",
    background: "#FFFFFF",
    text: "#1A1A1A",
  },
  fonts: {
    heading: "Montserrat, sans-serif",
    body: "Montserrat, sans-serif",
  },
} as const
