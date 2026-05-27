DROP INDEX "leagues_name_unique";--> statement-breakpoint
DROP INDEX "user_email_unique";--> statement-breakpoint
ALTER TABLE `user` ALTER COLUMN "password" TO "password" text;--> statement-breakpoint
CREATE UNIQUE INDEX `leagues_name_unique` ON `leagues` (`name`);--> statement-breakpoint
CREATE UNIQUE INDEX `user_email_unique` ON `user` (`email`);