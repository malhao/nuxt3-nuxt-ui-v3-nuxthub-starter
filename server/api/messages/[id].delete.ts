export default eventHandler(async (event) => {
  const id = getRouterParam(event, 'id')
  const db = hubDatabase()

  await db
    .prepare('DELETE FROM messages WHERE id = ?1')
    .bind(id)
    .run()

  return { success: true }
})
