export class Giphy {
  constructor(
    public title: string,
    public type: string,
    public username: string,
    public url: string,
    public trending_datetime: Date,
    public images: any,
  ){}
}
