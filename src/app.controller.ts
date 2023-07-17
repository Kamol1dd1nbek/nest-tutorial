import {Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Post, Put, Query, Redirect, Req } from "@nestjs/common";
import { AppService } from "./app.service";
import { CreatePostDto } from "./dto/createPost.dto";
import { UpdatePostDto } from "./dto/updatePost.dto";
import { Request } from "supertest";


@Controller("api")
export class AppController {
    constructor(private readonly appService: AppService) {}

    @Get("docs")
    @Redirect("http://google.com/?query=nestjs", 302)
    getDocs(@Query("site") site: string){
        if (site && site === "najot") {
            return { url: "https://najottalim.uz" }
        }
    }

    @Get("req")
    getRequest(@Req() request:Request):string {
        console.log(request);
        return `Bu ${request.method} methodi`;
    }

    @Get("hello")
    getHello():string {
        return this.appService.getHello()
    }

    @Get("user/:id")
    getUserId(@Param("id")  id : string) {
        return this.appService.getUserId(id);
    }

    @Get("any/:id/:name")
    getUserByAnyParams(@Param() params: Record<string, string>): string {
        return this.appService.getUserByAnyParams(params);
    }

    @Post("add")
    createPost(@Body() createPostDto: CreatePostDto):string {
        console.log(createPostDto);
        return "Post";        
    }

    @Put("post/:id")
    updatePost(@Param("id") id: string, @Body() updatePostDto: UpdatePostDto): string {
        console.log(id);
        console.log(updatePostDto);
        return "Post updated";
    }

    @Delete("post/:id")
    @HttpCode(HttpStatus.ACCEPTED)
    deletePost(@Param("id") id : string): string {
        console.log(id);        
        return "post deleted";
    }
}