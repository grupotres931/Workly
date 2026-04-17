import { IsEmail, IsNotEmpty, MinLength } from "class-validator";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Funcionario } from "../../funcionario/entities/funcionario.entity";

@Entity({ name: 'tb_usuario' })
export class Usuario {

    @PrimaryGeneratedColumn()
    id!: number;

    @IsNotEmpty()
    @Column({ length: 255, nullable: false })
    nome!: string;

    @IsEmail()
    @IsNotEmpty()
    @Column({ length: 100, nullable: false })
    usuario!: string;

    @Column({ length: 255, nullable: true })
    foto!: string;

    @IsNotEmpty()
    @MinLength(8)
    @Column({ length: 60, nullable: false })
    senha!: string;

    @OneToMany(() => Funcionario, (funcionario) => funcionario.usuario)
    funcionarios!: Funcionario[];
}