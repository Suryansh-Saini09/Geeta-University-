import "dotenv/config";
import bcrypt from "bcryptjs";
import { AdminRole, AdminUserStatus, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const email = process.env.SEED_ADMIN_EMAIL;
const password = process.env.SEED_ADMIN_PASSWORD;
const name = process.env.SEED_ADMIN_NAME ?? "Super Admin";

if (!email || !password) {
  console.error(
    "Set SEED_ADMIN_EMAIL and SEED_ADMIN_PASSWORD before running npm run db:seed."
  );
  process.exit(1);
}

if (password.length < 12) {
  console.error("SEED_ADMIN_PASSWORD must be at least 12 characters.");
  process.exit(1);
}

try {
  const passwordHash = await bcrypt.hash(password, 12);

  await prisma.adminUser.upsert({
    where: { email: email.toLowerCase() },
    update: {
      name,
      passwordHash,
      role: AdminRole.SUPER_ADMIN,
      status: AdminUserStatus.ACTIVE,
    },
    create: {
      name,
      email: email.toLowerCase(),
      passwordHash,
      role: AdminRole.SUPER_ADMIN,
      status: AdminUserStatus.ACTIVE,
    },
  });

  console.log(`Seeded Super Admin: ${email.toLowerCase()}`);
} finally {
  await prisma.$disconnect();
}
