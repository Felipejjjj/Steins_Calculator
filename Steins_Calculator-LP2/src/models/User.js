import prisma from '../database/database.js';

async function create(user) {
  const newUser = await prisma.user.create({
    data: user,
  });

  return newUser;
}

async function remove(id) {
  await prisma.user.delete({
    where: {
      id,
    },
  });
}

async function update(user, id) {
  const newUser = await prisma.user.update({
    data: user,
    where: {
      id,
    },
  });

  return newUser;
}

async function read(id) {
  const user = await prisma.user.findFirst({
    where: {
      id,
    },
  });

  return user;
}

async function readAll() {
  const users = await prisma.host.findMany();

  return users;
}

async function readByEmail(email) {
  const user = await prisma.user.findFirst({
    where: {
      email,
    },
  });

  return user;
}

export default { create, remove, update, read, readAll, readByEmail };