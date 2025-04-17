// server/utils/admins.ts
import { useStorage } from '#imports'

const getAdminList = async (): Promise<string[]> => {
  try {
    return await useStorage().getItem<string[]>('admins') || []
  } catch (error) {
    console.error('Error fetching admin list:', error)
    return []
  }
}

const setAdminList = async (list: string[]): Promise<void> => {
  await useStorage().setItem('admins', list)
}

export async function isAdmin(username: string): Promise<boolean> {
  const adminList = await getAdminList()
  return adminList.includes(username)
}

export async function addAdmin(username: string): Promise<void> {
  const adminList = await getAdminList()
  if (!adminList.includes(username)) {
    adminList.push(username)
    await setAdminList(adminList)
  }
}

export async function removeAdmin(username: string): Promise<void> {
  let adminList = await getAdminList()
  adminList = adminList.filter(admin => admin !== username)
  await setAdminList(adminList)
}
