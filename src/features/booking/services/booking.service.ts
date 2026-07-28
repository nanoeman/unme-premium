import { prisma } from "@/lib/prisma";
import { BookingInput } from "../schemas";

export class BookingService {
  constructor(private db: typeof prisma) {}

  async create(data: BookingInput) {
    return this.db.booking.create({
      data: {
        experience: data.experience,
        date: data.date,
        guests: data.guests,
        name: data.name,
        email: data.email,
        phone: data.phone,
        status: "PENDING",
      },
    });
  }

  async getByEmail(email: string) {
    return this.db.booking.findMany({
      where: { email },
      orderBy: { createdAt: "asc" },
    });
  }
}
