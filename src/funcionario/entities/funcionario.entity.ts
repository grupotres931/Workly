import { IsNotEmpty, MinLength } from 'class-validator';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'tb_funcionario' })
export class Funcionario {
  @PrimaryGeneratedColumn()
  id!: number;

  @IsNotEmpty()
  @Column({ length: 255, nullable: false })
  nome!: string;

  @IsNotEmpty()
  @Column({ length: 255, nullable: false })
  cargo!: string;

  @IsNotEmpty()
  @Column()
  horasTrabalhadas!: number;

  @IsNotEmpty()
  @Column('float')
  salarioBase!: number;

  salarioTotal?: number;
}
