import { Module } from "@nestjs/common"
import { TypeOrmModule } from "@nestjs/typeorm"

const HOST = process.env.DATABASE_HOST || "localhost"
const DATABASE_PORT = process.env.DATABASE_PORT || 3306
const USERNAME = process.env.DATABASE_USERNAME || "root"
const PASSWORD = process.env.DATABASE_PASSWORD || "admin"
const DATABASE = process.env.DATABASE_NAME || "db_test"

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: () => ({
        // you can change type to any DBMS you want
        // just make sure to add its depedency (mysql, mongoDB, etc..)
        type: "mysql",
        host: HOST,
        port: +DATABASE_PORT,
        username: USERNAME,
        password: PASSWORD,
        database: DATABASE,
        synchronize: true,
        autoLoadEntities: true,
      }),
    }),
  ],
})
export class AppModule {}
