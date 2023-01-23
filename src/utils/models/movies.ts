export type Movie = {
  country: string,
  director: string,
  duration: number,
  year: string,
  description: string,
  image: {
    url: string,
    formats: {
      thumbnail: {
        url: string,
      }
    }
  }
  trailerLink: string,
  id: number,
  nameRU: string,
  nameEN: string,
  _id?: string,
  movieId?: number
}

