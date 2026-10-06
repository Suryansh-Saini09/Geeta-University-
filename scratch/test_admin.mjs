import { PrismaClient } from '@prisma/client';
import crypto from 'crypto';

const prisma = new PrismaClient();

async function main() {
  const user = await prisma.adminUser.findFirst();
  if (!user) {
    console.log('No user found in DB');
    return;
  }
  const token = 'testtoken_' + Date.now();
  const tokenHash = crypto.createHash('sha256').update(token).digest('hex');
  const expiresAt = new Date(Date.now() + 86400000);
  await prisma.adminSession.create({
    data: { userId: user.id, tokenHash, expiresAt }
  });
  console.log('Session created for user:', user.email);

  const res = await fetch('http://localhost:3000/admin', {
    headers: { Cookie: `gu_admin_session=${token}` }
  });
  console.log('Status code for /admin:', res.status);
  const text = await res.text();
  console.log('Contains CMS Overview:', text.includes('CMS Overview'));
  console.log('Contains Dashboard:', text.includes('Dashboard'));
}

main().catch(console.error).finally(() => prisma.$disconnect());
