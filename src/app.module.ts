import { Module } from '@nestjs/common';
import { UsuarioModule } from './usuario/usuario.module';
import { FuncionarioModule } from './funcionario/funcionario.module';
import { CategoriaModule } from './categoria/categoria.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Usuario } from './usuario/entities/usuario.entity';
import { Funcionario } from './funcionario/entities/funcionario.entity';
import { Categoria } from './categoria/entities/categoria.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      /* type: 'mysql', 
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'db',
      synchronize: true, 
      */
     entities: [Usuario, Funcionario, Categoria],
  }),
    UsuarioModule,
    FuncionarioModule,
    CategoriaModule,

  ],
})
export class AppModule {}