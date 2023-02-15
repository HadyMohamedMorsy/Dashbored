export class User {
  constructor(
     public user : string | undefined ,
     public email : string | undefined ,
     public created_at: string | undefined ,
     public updated_at :string | undefined ,
     private _token : string | undefined ,
     private _token_type : string | undefined ,
     private _expires_in : Date | undefined
    )
  {}

  get token() : string | null{
    if(!this._expires_in || new Date() > this._expires_in){
      return null;
    }
    return `${this._token_type} ${this._token}`;
  }
}
