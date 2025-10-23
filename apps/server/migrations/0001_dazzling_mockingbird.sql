CREATE TABLE `order` (
	`id` text PRIMARY KEY NOT NULL,
	`user_id` text NOT NULL,
	`stripe_session_id` text,
	`gelato_order_id` text,
	`gelato_reference_id` text NOT NULL,
	`product_uid` text NOT NULL,
	`status` text DEFAULT 'pending' NOT NULL,
	`shipping_address` text,
	`file_url` text,
	`quantity` integer DEFAULT 1 NOT NULL,
	`total_amount` integer,
	`currency` text DEFAULT 'USD',
	`created_at` integer DEFAULT (cast(unixepoch('subsecond') * 1000 as integer)) NOT NULL,
	`updated_at` integer DEFAULT (cast(unixepoch('subsecond') * 1000 as integer)) NOT NULL,
	FOREIGN KEY (`user_id`) REFERENCES `user`(`id`) ON UPDATE no action ON DELETE cascade
);
--> statement-breakpoint
CREATE UNIQUE INDEX `order_stripe_session_id_unique` ON `order` (`stripe_session_id`);--> statement-breakpoint
CREATE UNIQUE INDEX `order_gelato_reference_id_unique` ON `order` (`gelato_reference_id`);