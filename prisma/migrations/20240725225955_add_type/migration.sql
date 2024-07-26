/*
  Warnings:

  - Added the required column `type` to the `expenses` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `expenses` ADD COLUMN `type` VARCHAR(191) NOT NULL;

UPDATE `expenses` SET `type` = 'entrada' WHERE `type` IS NULL
