import prisma from '../database/database.js';

async function setHistoryCalc(op) {
    const { calc, resultado, type, data } = op;

    const createdRecord = await prisma.history.create({
        data: { calc, resultado, type, data },
    });

    return read(createdRecord.id);
}

async function setHistoryPa(op) {
    const { firstTerm, commonDifference, lastTerm, resultado, type, data } = op;

    const createdRecord = await prisma.history_Pa.create({
        data: { firstTerm, commonDifference, lastTerm, resultado, type, data },
    });

    return read(createdRecord.id);
}

async function setHistoryPg(op) {
    const { firstTerm, commonRatio, lastTerm, resultado, type, data } = op;

    const createdRecord = await prisma.history_Pg.create({
        data: { firstTerm, commonRatio, lastTerm, resultado, type, data },
    });

    return read(createdRecord.id);
}

async function setHistoryMmc(op) {
    const { num1, num2, resultado, type, data } = op;

    const createdRecord = await prisma.history_Mmc.create({
        data: { num1, num2, resultado, type, data },
    });

    return read(createdRecord.id);
}

async function setHistoryMdc(op) {
    const { num1, num2, resultado, type, data } = op;

    const createdRecord = await prisma.history_Mdc.create({
        data: { num1, num2, resultado, type, data },
    });

    return read(createdRecord.id);
}

async function read(id) {
  const history = await prisma.history.findFirst({
    where: {
      id,
    },
  });

  return history
} 

export default { setHistoryCalc, setHistoryPa, setHistoryPg, setHistoryMmc, setHistoryMdc };