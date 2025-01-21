
import z from 'zod'

export const NosSchema = z.object({
    name: z.string().trim().min(2, 'Tên quá ngắn (tối thiểu 2 ký tự)').max(256, 'Tên quá dài (tối đa 256 ký tự)'),
    email: z.string().email('Email không hợp lệ'),
    message: z.string(),
    upload: z.string().url().optional()
  })
  .strict();

  export type NosType = z.TypeOf<typeof NosSchema>