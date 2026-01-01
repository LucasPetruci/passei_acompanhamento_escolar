export interface PricingPlan {
  title: string
  price: string
  description: string
  features: string[]
  highlighted?: boolean
}

export interface MethodologyCard {
  title: string
  description: string
  icon: string
  color: string
}

export interface ContactInfo {
  phone: string
  whatsapp: string
  email: string
  instagram: string
}

export interface Location {
  name: string
  address: string
  mapUrl: string
}

export interface TeacherInfo {
  name: string
  photo: string
  bio: string[]
  qualifications: string[]
}
