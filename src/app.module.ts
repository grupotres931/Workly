import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { UsuarioModule } from './usuario/usuario.module';
import { AutenticacaoModule } from './autenticacao/autenticacao.module';
import { CategoriaModule } from './categoria/categoria.module';
import { FuncionarioModule } from './funcionario/funcionario.module';
import { AppController } from './app.controller';
import { DevService } from './data/services/dev.service';
import { ProdService } from './data/services/prod.service';

@Module({
  imports: [
    // 1. Adicionado isGlobal: true para o DevService enxergar o .env
    ConfigModule.forRoot({
      isGlobal: true,
    }),

    // 2. Simplificado o forRootAsync
    TypeOrmModule.forRootAsync({
      useClass: ProdService, 
    }),

    CategoriaModule,
    FuncionarioModule,
    AutenticacaoModule,
    UsuarioModule
  ],
  controllers: [AppController],
  // 3. Adicionado o DevService e ProdService nos providers para o Nest conseguir injetá-los
  providers: [DevService, ProdService],
})
export class AppModule {}