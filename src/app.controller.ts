import { Controller, Get, Param } from "@nestjs/common";
import { AppService } from "./app.service";


@Controller("api")
export class AppController {
    constructor(private readonly appService: AppService) {}
    @Get("hello")
    getHello():string {
        return this.appService.getHello()
    }

    @Get("user/:id")
    getUserId(@Param("id")  id : string) {
        return this.appService.getUserId(id);
    }

    @Get("any/:id/:name")
    getUserByAnyParams(@Param() params: Record<string, string>) {
        return this.appService.getUserByAnyParams(params);
    }
}