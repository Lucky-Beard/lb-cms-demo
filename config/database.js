module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'lb-cms-postgres-01.c0gyjn8zoehi.eu-west-1.rds.amazonaws.com'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'lb_cms_database_01'),
      user: env('DATABASE_USERNAME', 'lbadmin'),
      password: env('DATABASE_PASSWORD', '936I0LYZOIVf1CstBMHq'),
      ssl: env.bool('DATABASE_SSL', false),
    },
  },
});
