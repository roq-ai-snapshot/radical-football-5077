import type { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from 'server/db';
import { errorHandlerMiddleware } from 'server/middlewares';
import { playerPerformanceValidationSchema } from 'validationSchema/player-performances';
import { HttpMethod, convertMethodToOperation, convertQueryToPrismaUtil } from 'server/utils';
import { getServerSession } from '@roq/nextjs';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { roqUserId } = await getServerSession(req);
  await prisma.player_performance
    .withAuthorization({ userId: roqUserId })
    .hasAccess(req.query.id as string, convertMethodToOperation(req.method as HttpMethod));

  switch (req.method) {
    case 'GET':
      return getPlayerPerformanceById();
    case 'PUT':
      return updatePlayerPerformanceById();
    case 'DELETE':
      return deletePlayerPerformanceById();
    default:
      return res.status(405).json({ message: `Method ${req.method} not allowed` });
  }

  async function getPlayerPerformanceById() {
    const data = await prisma.player_performance.findFirst(convertQueryToPrismaUtil(req.query, 'player_performance'));
    return res.status(200).json(data);
  }

  async function updatePlayerPerformanceById() {
    await playerPerformanceValidationSchema.validate(req.body);
    const data = await prisma.player_performance.update({
      where: { id: req.query.id as string },
      data: {
        ...req.body,
      },
    });
    return res.status(200).json(data);
  }
  async function deletePlayerPerformanceById() {
    const data = await prisma.player_performance.delete({
      where: { id: req.query.id as string },
    });
    return res.status(200).json(data);
  }
}

export default function apiHandler(req: NextApiRequest, res: NextApiResponse) {
  return errorHandlerMiddleware(handler)(req, res);
}
