import { Product } from "./products.model";

export interface CreateProductDto extends Omit<Product, "id" | "createdAt" | "updatedAt" | "category"> {
  categoryId: Product["id"];
}

type PickProduct = Pick<Product, "id" | "title">;

export interface UpdateProductDto extends Partial<CreateProductDto> {}

type RequiredProduct = Required<Product>;

export interface FindProductDto extends Readonly<Partial<Omit<Product, "tags">>> {
  readonly tags: ReadonlyArray<string>;
}

type ReadOnlyProduct = Readonly<Product>;
