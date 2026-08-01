import re

with open('src/app/page.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

# Eliminar el bloque duplicado: primer ].map((exp) => ( seguido del array con precios viejos y otro ].map
old = '''            ].map((exp) => (
              {
                title: "Retiro de Yoga & Meditación",
                price: "€890",
                tag: "Más popular",
              },
              {
                title: "Sound Healing Retreat",
                price: "€720",
                tag: "Nuevo",
              },
              {
                title: "Corporate Wellness B2B",
                price: "Desde €8.000",
                tag: "B2B",
              },
            ].map((exp) => ('''

new = '''            ].map((exp) => ('''

content = content.replace(old, new)

with open('src/app/page.tsx', 'w', encoding='utf-8') as f:
    f.write(content)

print("Fixed!")
