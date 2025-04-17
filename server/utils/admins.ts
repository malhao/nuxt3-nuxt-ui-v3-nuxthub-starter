import { hubDatabase } from '#imports'

const setupAdminTable = async () => {
  const db = hubDatabase()
  await db.exec('CREATE TABLE IF NOT EXISTS admins (username TEXT PRIMARY KEY, added_at INTEGER)')
}

export async function isAdmin(username: string): Promise<boolean> {
  const db = hubDatabase()
  await setupAdminTable()

  const result = await db
    .prepare('SELECT COUNT(*) as count FROM admins WHERE username = ?1')
    .bind(username)
    .first<{ count: number }>()

  return result?.count > 0
}

export async function addAdmin(username: string): Promise<void> {
  const db = hubDatabase()
  await setupAdminTable()

  // Using INSERT OR IGNORE to prevent duplicates
  await db
    .prepare('INSERT OR IGNORE INTO admins (username, added_at) VALUES (?1, ?2)')
    .bind(username, Date.now())
    .run()
}

export async function removeAdmin(username: string): Promise<void> {
  const db = hubDatabase()
  await setupAdminTable()

  await db
    .prepare('DELETE FROM admins WHERE username = ?1')
    .bind(username)
    .run()
}
