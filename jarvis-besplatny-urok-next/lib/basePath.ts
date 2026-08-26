// Префикс подпути для статики из public/. Пустой при локальном запуске,
// '/test/jarvis-besplatny-urok' при сборке под GitHub Pages.
export const BP = process.env.NEXT_PUBLIC_BASE_PATH ?? ''

// Собирает путь к файлу из public/ с учётом basePath.
export const asset = (path: string) => `${BP}${path}`
