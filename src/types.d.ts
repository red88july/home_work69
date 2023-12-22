export interface ShowsNames {
  id: number,
  name:string;
}

export interface ApiShowsResponse {
  show: {
    id: number,
    name: string,
  }
}

export interface ShowDetails {
  id?: number,
  name: string,
  image: {medium: string,}
  summary: string,
}