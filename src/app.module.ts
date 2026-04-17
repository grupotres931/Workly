import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { UsuarioModule } from './usuario/usuario.module';

//@Module({
  //imports: [
    //ConfigModule.forRoot(),

    //TypeOrmModule.forRootAsync({
    //imports: [ConfigModule],
    //useFactory: (config: ConfigService) => ({
    //type: 'mysql',
    //host: config.get('DB_HOST'),
    //port: Number(config.get('DB_PORT')),
    //username: config.get('DB_USER'),
    //password: config.get('DB_PASS'),
    //database: config.get('DB_NAME'),
    //autoLoadEntities: true,
    //synchronize: true,
    //}),
    //inject: [ConfigService],

    //}),
    UsuarioModule
  //],
//})
export class AppModule {}
