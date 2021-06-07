import { Response, Request } from "express";
import { CreateCategoryUseCase } from "./CreateCategoryUseCase";

class CreateCategoryController {
    constructor(private createCategoryUseCase: CreateCategoryUseCase){}

    async handle(request: Request, response: Promise<Response>){
        const { name, description } = request.body;
   
        await this.createCategoryUseCase.execute({name, description});
        
        return response.status(201).send();
    }
}

export { CreateCategoryController };