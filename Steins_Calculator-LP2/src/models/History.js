import prisma from '../database/database.js';
import Types from './Types.js';

async function setHistory(op) {
    const { type } = op;
    
    // a partir do type, chama a função certa pra guardar na respectiva tabela
    if (type === "calc") {
        return Types.setHistoryCalc(op);
    }

    if (type === "pa") {
        return Types.setHistoryPa(op);
    }

    if (type === "pg") {
        return Types.setHistoryPg(op);
    }

    if (type === "mmc") {
        return Types.setHistoryMmc(op);
    }
    
    if (type === "mdc") {
        return Types.setHistoryMdc(op);
    }
}


async function create(history) {
    const newHistory = await prisma.history.create({
        data: history,
    });

    return newHistory;
}

async function read(id) {
    const history = await prisma.history.findFirst({
        where: {
            id,
        }
    });

    return history;
}

async function readAll() {
  const historyCalc = await prisma.host.findMany(history);

  const historyPa = await prisma.host.findMany(historyPa);

  const historyPg = await prisma.host.findMany(historyPg);

  const historyMmc = await prisma.host.findMany(historyMmc);

  const historyMdc = await prisma.host.findMany(historyMdc);

  const history = historyCalc.concat(historyPa, historyPg, historyMmc, historyMdc);

  return history;
}

export default { create, read, readAll, setHistory };
