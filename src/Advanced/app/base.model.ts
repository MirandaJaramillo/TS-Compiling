export interface BaseModel {
  //this keyword allows you to not overwrite anything
  readonly id: string;
  readonly createdAt: Date;
  updatedAt: Date;
}
