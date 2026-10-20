import type { Config } from 'tailwindcss';
export default {content:['./app/**/*.{ts,tsx}','./components/**/*.{ts,tsx}'],theme:{extend:{colors:{ivory:'#F8F5EF',charcoal:'#1C1C1C',beige:'#E8DFD1',champagne:'#C6A664',stone:'#8A8178'},fontFamily:{display:['var(--font-cormorant)','Georgia','serif'],sans:['var(--font-inter)','Arial','sans-serif']}}},plugins:[]} satisfies Config;
