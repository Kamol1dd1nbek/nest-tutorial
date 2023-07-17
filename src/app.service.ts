import { Injectable } from "@nestjs/common"

@Injectable()
export class AppService {
    getHello(): string {
        return "AppService dan salom"
    }

    getUserId(id: string): string {
        return `Id: ${id}`;
    }
}