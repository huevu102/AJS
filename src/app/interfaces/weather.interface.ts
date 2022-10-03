export interface IMain {
    temp: number;
}
export interface IWeather {
    description: string;
    icon: string;
}
export interface IList {
    main: IMain;
    weather: IWeather[];
    dt_txt: string;
}