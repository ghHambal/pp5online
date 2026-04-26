/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './*.html',
    './js/**/*.js',
  ],
  theme: { extend: {} },
  plugins: [],
  safelist: [
    // สำหรับ class ที่ถูกสร้างแบบ dynamic ใน JS (เช่น ${khuna.cls})
    'text-emerald-600', 'text-blue-600', 'text-amber-500', 'text-red-600',
    'text-purple-700', 'text-indigo-600', 'text-gray-500', 'text-rose-600',
    'border-emerald-100', 'border-blue-100', 'border-purple-100', 'border-rose-100',
    'bg-emerald-50', 'bg-blue-50', 'bg-purple-50', 'bg-rose-50', 'bg-amber-50',
    'animate-fade', 'animate-spin', 'animate-pulse',
  ],
}
