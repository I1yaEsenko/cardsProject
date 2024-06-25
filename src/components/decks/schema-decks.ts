import z from 'zod'

export const createDecksSchema = z.object({
  isPrivate: z.boolean(),
  name: z.string().min(3),
})
export type FormCreateType = z.infer<typeof createDecksSchema>
