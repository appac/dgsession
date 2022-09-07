import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
	return knex.schema.createTable('Sessions', (table: Knex.TableBuilder) => {
		table
			.uuid('id')
			.notNullable()
			.primary()
			.defaultTo(knex.raw('uuid()'));
		table
			.string('title')
			.notNullable();
		table
			.string('body')
            .nullable();
		table
			.string('video')
            .nullable();
        table
            .dateTime('scheduled')
            .notNullable();
        table
            .boolean('completed')
            .notNullable()
            .defaultTo(false);
		table
			.dateTime('created')
			.defaultTo(knex.fn.now());
	});
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable('Sessions');
}

