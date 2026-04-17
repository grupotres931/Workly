import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Post, Put } from "@nestjs/common";
import { UsuarioService } from "../services/usuario.service";
import { Usuario } from "../entities/usuario.entity";

@Controller("usuarios")
export class UsuarioController {

    constructor(private readonly usuarioService: UsuarioService) {}

    @Get()
    @HttpCode(HttpStatus.OK)
    findAll(): Promise<Usuario[]> {
        return this.usuarioService.findAll();
    }

    @Get("/:id")
    @HttpCode(HttpStatus.OK)
    findById(@Param('id', ParseIntPipe) id: number): Promise<Usuario>{ 
    return this.usuarioService.findById(id);
    }

    @Get("/nome/:nome")
    @HttpCode(HttpStatus.OK)
    findByNome(@Param('nome') nome: string): Promise<Usuario[]> {
        return this.usuarioService.findByNome(nome);
    }

    @Get("/usuario/:usuario")
    @HttpCode(HttpStatus.OK)
    findByEmail(@Param('usuario') email: string): Promise<Usuario> {
        return this.usuarioService.findByEmail(email)
    }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    create(@Body() Usuario: Usuario): Promise<Usuario> {
        return this.usuarioService.create(Usuario);
    }
    
    @Put()
    @HttpCode(HttpStatus.OK)
    update(@Body() Usuario: Usuario): Promise<Usuario> {
        return this.usuarioService.update(Usuario);
    }

    @Delete("/:id")
    @HttpCode(HttpStatus.NO_CONTENT)
    delete(@Param('id', ParseIntPipe) id: number) {
        return this.usuarioService.delete(id);
    }
}
