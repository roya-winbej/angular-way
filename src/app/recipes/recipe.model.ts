export class RecipeModel {
  public name = '';
  public description = '';
  public imageUrl = '';

  constructor(name: string, desc: string, imageUrl: string) {
    this.name = name;
    this.description = desc;
    this.imageUrl = imageUrl;
  }
}
