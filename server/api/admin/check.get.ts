// server/api/admin/check.get.ts
import { isAdmin } from '../../utils/admins'

export default defineEventHandler(async (event) => {
  try {
    const session = await requireUserSession(event)
    return await isAdmin(String(session?.user?.login))
  } catch (error) {
    console.error('Admin check failed:', error)

    throw createError({
      statusCode: 401,
      message: 'Admin check failed',
    })
  }
})
