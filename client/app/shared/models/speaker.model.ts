export class Speaker {
  // tslint:disable-next-line: variable-name
  public constructor(
    public _id?: string,
    public name?: string,
    public link?: string,
    public primary?: Boolean,
    public thumbnail?: string,
    public bio?: string
  ) {
    this._id = _id;
    this.name = name || '';
    this.link = link || '';
    this.primary = primary || false;
    this.thumbnail = thumbnail || '';
    this.bio = bio || '';
  }
}
