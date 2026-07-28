with open('prisma/schema.prisma', 'r', encoding='utf-8') as f:
    lines = f.readlines()

# El modelo Booking correcto termina en línea 258 (índice 257)
# El bloque suelto duplicado empieza en línea 259 (índice 258) con "id              String..."
# y termina en línea 293 (índice 292) con "}"
# Luego línea 294 es "model BookingRoom {"

# Necesitamos quitar líneas 258 a 292 (índices) - el bloque suelto
new_lines = lines[:258] + lines[293:]

with open('prisma/schema.prisma', 'w', encoding='utf-8') as f:
    f.writelines(new_lines)

print(f"Eliminadas líneas 259-293 (bloque duplicado suelto).")
print(f"Ahora BookingRoom comienza justo después del modelo Booking correcto.")
