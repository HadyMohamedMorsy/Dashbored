export class user {
  constructor(
     public user : string ,
     public email : string,
     public created_at: Date,
     public updated_at :Date,
     private _token : string ,
     private _token_type : string,
     private _expires_in : Date
    )
  {}

  get token() : string | null{
    if(!this._expires_in || new Date() > this._expires_in){
      return null;
    }
    return this._token;
  }
}
