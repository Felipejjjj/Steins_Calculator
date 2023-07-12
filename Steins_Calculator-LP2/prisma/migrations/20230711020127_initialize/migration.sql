-- CreateTable
CREATE TABLE "User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "username" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "History" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "calc" TEXT NOT NULL,
    "resultado" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "data" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "History_Pa" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "firstTerm" INTEGER NOT NULL,
    "commonDifference" INTEGER NOT NULL,
    "lastTerm" INTEGER NOT NULL,
    "resultado" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "data" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "History_Pg" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "firstTerm" INTEGER NOT NULL,
    "commonRatio" INTEGER NOT NULL,
    "lastTerm" INTEGER NOT NULL,
    "resultado" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "data" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "History_Mmc" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "num1" INTEGER NOT NULL,
    "num2" INTEGER NOT NULL,
    "resultado" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "data" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "History_Mdc" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "num1" INTEGER NOT NULL,
    "num2" INTEGER NOT NULL,
    "resultado" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "data" DATETIME NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
