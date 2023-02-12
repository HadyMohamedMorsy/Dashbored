export interface Login {
  email : string,
  password : string
}
export interface ResponseLogin {
  access_token : string,
  token_type : string,
  expires_in : number,
  user?:{
    id? : number,
    name? : string,
    email? : string,
    email_verified_at? : string,
    created_at? : string,
    updated_at? : string,
  }
}
