// utils/sku.ts
export function generateSKU(productName: string, categoryName: string): string {
  const clean = (str: string) =>
    str.trim().toUpperCase().replace(/\s+/g, '-').replace(/[^A-Z0-9-]/g, '');

  const prefix = 'SKU';
  const catCode = clean(categoryName).substring(0, 3);
  const prodCode = clean(productName).substring(0, 3);
  const random = Math.floor(100 + Math.random() * 900); // 3-digit number

  return `${prefix}-${catCode}-${prodCode}-${random}`;
}
