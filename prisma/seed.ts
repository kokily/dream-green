import db from '@/helpers/server/database';
import bcrypt from 'bcryptjs';

async function seed() {
  await db.user.create({
    data: {
      password: await bcrypt.hash('', 10),
    },
  });
}

seed();
