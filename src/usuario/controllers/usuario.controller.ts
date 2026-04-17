import { Body, Controller, Get, Param, Post, UseGuards } from "@nestjs/common";
import { ApiBearerAuth } from "@nestjs/swagger";
import { Usuario } from "../entities/usuario.entity";
import { UsuarioService } from "../services/usuario.service";
import { JwtAuthGuard } from "../../autenticacao/guards/jwt-auth.guard";

@Controller("usuarios")
export class UsuarioController {

    constructor(
        private usuarioService: UsuarioService
    ) { }

    @ApiBearerAuth()
    @UseGuards(JwtAuthGuard)
    @Get()
    async findAll(): Promise<Usuario[]> {
        return await this.usuarioService.findAll();
    }

    @Get("/:id")
    async findById(@Param("id") id: number): Promise<Usuario> {
        return await this.usuarioService.findById(id);
    }

    @Post()
    async create(@Body() usuario: Usuario): Promise<Usuario> {
        return await this.usuarioService.create(usuario);
    }
}