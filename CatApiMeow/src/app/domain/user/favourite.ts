export class Favourite {
  public image_id: string;
  public sub_id: string;

  constructor(
    image_id: string,
    sub_id: string
  ) {
    this.image_id = image_id;
    this.sub_id = sub_id;
  }
}
