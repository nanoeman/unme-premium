import sys

with open('prisma/schema.prisma', 'r', encoding='utf-8') as f:
    lines = f.readlines()

# Find the line index where 'model BookingRoom {' appears
bookingroom_idx = None
for i, line in enumerate(lines):
    if line.strip() == 'model BookingRoom {':
        bookingroom_idx = i
        break

if bookingroom_idx is None:
    print("ERROR: model BookingRoom not found")
    sys.exit(1)

# Look backwards from BookingRoom to find the stray content
# We need to find the first '}' that closes the Booking model,
# then keep everything until that }, then skip until BookingRoom

# Find the line just before BookingRoom that is empty
# The stray block starts after the FIRST correct closing } of Booking model
# and ends before BookingRoom

# Let's find the first occurrence of '}'' after 'model Booking {'
booking_start = None
for i, line in enumerate(lines):
    if line.strip() == 'model Booking {':
        booking_start = i
        break

if booking_start is None:
    print("ERROR: model Booking not found")
    sys.exit(1)

# Find the first '}' after model Booking { that is properly indented (2 spaces)
first_close = None
for i in range(booking_start + 1, len(lines)):
    if lines[i].strip() == '}':
        first_close = i
        break

if first_close is None:
    print("ERROR: first closing brace not found")
    sys.exit(1)

# Now we keep lines[0:first_close+1] and lines[bookingroom_idx:]
# But there might be blank lines between, keep one blank line
new_lines = lines[:first_close + 1]
new_lines.append('\n')
new_lines.extend(lines[bookingroom_idx:])

with open('prisma/schema.prisma', 'w', encoding='utf-8') as f:
    f.writelines(new_lines)

print(f"Fixed schema.prisma. Removed lines {first_close+2} to {bookingroom_idx}.")
print(f"Kept Booking model (lines {booking_start+1}-{first_close+1})")
