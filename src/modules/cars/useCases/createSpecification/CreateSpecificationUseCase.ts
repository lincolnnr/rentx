import { ISpecificationRepository } from "../../repositories/ISpecificationsRepository";

interface IRequest {
    name: string;
    description: string;
}

class CreateSpecificationUseCase{
    constructor(private specificationsRepository: ISpecificationRepository){}

    execute({name, description}: IRequest): void{
        const specificationAlreadyExists = this.specificationsRepository.findByName(name);

        if(specificationAlreadyExists){
            throw new Error("Category Alread exists!");
        }

        this.specificationsRepository.create({name, description});
    }
}

export { CreateSpecificationUseCase };