import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const pos = await prisma.history.create({
    data: {
      id: 1,
      name: 'Pós',
    },
  });

  const pre = await prisma.history.create({
    data: {
      id: 2,
      name: 'Pré',
    },
  });

  const ipca = await prisma.history.create({
    data: {
      id: 3,
      name: 'IPCA',
    },
  });

  const rendaVariavel = await prisma.history.create({
    data: {
      id: 4,
      name: 'Renda Variável',
    },
  });

  const alternativos = await prisma.history.create({
    data: {
      id: 5,
      name: 'Alternativos',
    },
  });

  const selic2029 = await prisma.investment.create({
    data: {
      name: 'Tesouro Selic 2029',
      value: 100,
      historyId: 1,
    },
  });

  const ipca2029 = await prisma.investment.create({
    data: {
      name: 'Tesouro IPCA 2029',
      value: 100,
      historyId: 3,
    },
  });
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });