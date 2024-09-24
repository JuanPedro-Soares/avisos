export interface ILogin {
  token: string;
}

export interface UserPayload {
  TipoUsuario: string;
  aud: string;
  email: string;
  exp: number;
  iat: number;
  iss: string;
  nameid: string;
  nbf: number;
  unique_name: string;
}
