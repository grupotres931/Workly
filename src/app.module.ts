import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { UsuarioModule } from './usuario/usuario.module';
import { AutenticacaoModule } from './autenticacao/autenticacao.module';
import { CategoriaModule } from './categoria/categoria.module';
import { FuncionarioModule } from './funcionario/funcionario.module';
import { AppController } from './app.controller';
import { DevService } from './data/services/dev.service';
import { ProdService } from './data/services/prod.service';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRootAsync({
      useClass: ProdService,  //USAR DEVSERVICE para teste na máquina e PRODSERVICE para teste online
      imports: [ConfigModule],
    }),
    CategoriaModule,
    FuncionarioModule,
    AutenticacaoModule,
    UsuarioModule
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}