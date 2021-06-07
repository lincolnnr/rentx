import { CategoriesRepository } from "../../repositories/implementations/CategoriesRepository";
import { ListCategoriesController } from "./ListCategoriesController";
import { ListCategoriesUseCase } from "./ListCategoriesUseCase";

export default () => {
    const categoriesRepository = null;
    const listCategoryUseCase = new ListCategoriesUseCase(
            categoriesRepository
    );
    const listCategoryController = new ListCategoriesController(
        listCategoryUseCase
    );

    return listCategoryController
}