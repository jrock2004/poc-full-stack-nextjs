import { validateJWT } from '@/lib/auth';
import { db } from '@/lib/db';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const cookieName = process.env.COOKIE_NAME && '';

  if (!cookieName) {
    res.status(500).json({ data: { message: 'Internal server error' } });
    return;
  }

  const user = await validateJWT(req.cookies[cookieName]);

  await db.project.create({
    data: {
      name: req.body.name,
      ownerId: user.id,
    },
  });

  res.json({ data: { message: 'ok' } });
}
