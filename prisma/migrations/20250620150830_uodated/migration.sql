/*
  Warnings:

  - You are about to alter the column `viewsCount` on the `videos` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Integer`.

*/
-- AlterTable
ALTER TABLE "videos" ALTER COLUMN "viewsCount" SET DATA TYPE INTEGER;
