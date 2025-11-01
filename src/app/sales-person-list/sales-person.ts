export class SalesPerson {
  //in Angular world, we use public vs in Java we use private
  //also we do not need to define the variables separately
  constructor(
    public firstName: string,
    public lastName: string,
    public email: string,
    public salesVolume: number
  ) {}
}
