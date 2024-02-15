import * as z from 'zod'

interface Limits {
  min: number
  max: number
}

const limitsErrorMessage = ({ min, max }: Limits) => {
  return `Debe tener de ${min} a ${max} caracteres`
}

const nameLimits: Limits = { min: 6, max: 80 }
const nameLimitsErrorMessage = limitsErrorMessage(nameLimits)

const subjectLimits: Limits = { min: 12, max: 512 }
const subjectLimitsErrorMessage = limitsErrorMessage(subjectLimits)

// const websiteRegExp = /^(?:(ftp|http|https)?:\/\/)?(?:[\w-]+\.)+([a-z]|[A-Z]|[0-9]){2,6}$/gi
// const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

export const emailSchema = z.object({
  email: z.string()
    .email({ message: 'Porfavor ingresa una dirección de correo electrónico válida.' })
    .max(nameLimits.max, { message: nameLimitsErrorMessage })
})

export const contactEmailSchema = z.object({
  // company: z.string()
  //   .min(nameLimits.min, { message: nameLimitsErrorMessage })
  //   .max(nameLimits.max, { message: nameLimitsErrorMessage }),
  // website: z.string()
  //   .regex(websiteRegExp, { message: 'Porfavor ingresa una URL válida.' })
  //   .max(nameLimits.max, { message: nameLimitsErrorMessage }),
  name: z.string()
    .min(nameLimits.min, { message: nameLimitsErrorMessage })
    .max(nameLimits.max, { message: nameLimitsErrorMessage }),
  // positionHeld: z.string()
  //   .min(nameLimits.min, { message: nameLimitsErrorMessage })
  //   .max(nameLimits.max, { message: nameLimitsErrorMessage }),
  // phone: z.string()
  //   .regex(phoneRegExp, { message: 'El número es inválido' })
  //   .min(10, { message: 'El número debe tener 10 dígitos' })
  //   .max(10, { message: 'El número debe tener 10 dígitos' }),
  email: emailSchema.shape.email,
  category: z.string()
    .min(nameLimits.min, { message: nameLimitsErrorMessage })
    .max(nameLimits.max, { message: nameLimitsErrorMessage }),
  subject: z.string()
    .min(subjectLimits.min, { message: subjectLimitsErrorMessage })
    .max(subjectLimits.max, { message: subjectLimitsErrorMessage })
})

export type Inputs = z.infer<typeof contactEmailSchema>
