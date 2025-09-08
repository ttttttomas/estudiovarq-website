// utils/slugify.ts
export function slugify(str: string) {
  return str
    .toLowerCase()
    .normalize("NFD") // elimina acentos
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/\s+/g, "-") // espacios por guiones
    .replace(/[^a-z0-9-]/g, ""); // elimina caracteres raros
}
