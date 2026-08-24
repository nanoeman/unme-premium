with open('src/app/experiencias/page.tsx', 'r', encoding='utf-8') as f:
    lines = f.readlines()

# Eliminar líneas 53-95 (índices 52-94) que son el bloque duplicado
fixed = lines[:52] + lines[95:]

with open('src/app/experiencias/page.tsx', 'w', encoding='utf-8') as f:
    f.writelines(fixed)

print("Fixed! Lines before:", len(lines), "after:", len(fixed))
