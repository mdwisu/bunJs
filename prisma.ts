import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const contact = await prisma.contact.create({
  data: {
    name: "Jane Doe",
    email: "bqR8v@example.com",
    phone: "555-555-5555",
  },
});

console.info(contact);
