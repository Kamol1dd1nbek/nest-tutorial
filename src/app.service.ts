import { Injectable } from "@nestjs/common"

@Injectable()
export class AppService {
    getHello(): string {
        return "AppService dan salom"
    }

    getUserId(id: string): string {
        return `Id: ${id}`;
    }

    getUserByAnyParams(params: Record<string, string>): string {
        return `Id: ${params.id}  |  Name: ${params.Name}`
    }
}