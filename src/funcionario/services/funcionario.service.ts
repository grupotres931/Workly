import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';
import { Funcionario } from '../entities/funcionario.entity';

@Injectable()
export class FuncionarioService {
  constructor(
    @InjectRepository(Funcionario)
    private funcionarioRepository: Repository<Funcionario>,
  ) {}

  private calcularSalario(funcionario: Funcionario): Funcionario {
    funcionario.salarioTotal =
      funcionario.horasTrabalhadas * funcionario.salarioBase;

    return funcionario;
  }

  async findAll(): Promise<Funcionario[]> {
    const funcionarios = await this.funcionarioRepository.find();

    return funcionarios.map((funcionario) => this.calcularSalario(funcionario));
  }

  async findById(id: number): Promise<Funcionario> {
    const funcionario = await this.funcionarioRepository.findOne({
      where: {
        id,
      },
    });

    if (!funcionario)
      throw new HttpException(
        'Funcionario não encontrado!',
        HttpStatus.NOT_FOUND,
      );

    return this.calcularSalario(funcionario);
  }

  async create(funcionario: Funcionario): Promise<Funcionario> {
    const funcionarioSalvo = await this.funcionarioRepository.save(funcionario);

    return this.calcularSalario(funcionarioSalvo);
  }

  async update(funcionario: Funcionario): Promise<Funcionario> {
    await this.findById(funcionario.id);

    const funcionarioAtualizado =
      await this.funcionarioRepository.save(funcionario);

    return this.calcularSalario(funcionarioAtualizado);
  }

  async delete(id: number): Promise<DeleteResult> {
    await this.findById(id);

    return await this.funcionarioRepository.delete(id);
  }
}
