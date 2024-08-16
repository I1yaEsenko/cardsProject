import z from 'zod'

export const filterSchema = z.object({
  input: z.string().min(3),
  max: z.number(),
  min: z.number(),
})
