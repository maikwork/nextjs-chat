import { Module } from "@nestjs/common";
import { SequelizeModule } from "@nestjs/sequelize";
import { UserModule } from './user/user.module';


@Module({
    controllers: [],
    providers: [],
    imports: [
        SequelizeModule.forRoot({
            dialect: 'postgres',
            host: 'localhost',
            port: 5432,
            username: 'rbliss',
            password: 'password',
            database: 'chat',
            models: [],
            autoLoadModels: true,
        }),
    UserModule]
})
export class AppModule {
  
}