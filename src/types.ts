export interface SearchProps{
    search:string,
    handleSearch:(e:React.ChangeEvent<HTMLInputElement>) => void,
    handleOnclick:() => void
  }