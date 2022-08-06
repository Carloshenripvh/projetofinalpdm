

export const categories = [
  {
    code: "",
    pic: "https://img.icons8.com/fluent/96/000000/news.png",
    name: "general",
    nome: "Geral",
  },
  {
    code: "",
    pic: "https://img.icons8.com/fluent/96/000000/hard-working.png",
    name: "business",
    nome: "Negócios",
  },
  {
    code: "",
    pic: "https://img.icons8.com/fluent/96/000000/movie-projector.png",
    name: "entertainment",
    nome: "Entretenimento",
  },
  {
    pic: "https://img.icons8.com/fluent/96/000000/stethoscope.png",
    name: "health",
    nome: "Saúde",
  },
  {
    pic: "https://img.icons8.com/fluent/96/000000/microscope.png",
    name: "science",
    nome: "Ciência",
  },
  {
    pic: "https://img.icons8.com/fluent/96/000000/trophy.png",
    name: "sports",
    nome: "Esportes",
  },
  {
    pic: "https://img.icons8.com/fluent/96/000000/artificial-intelligence.png",
    name: "technology",
    nome: "Tecnologia",
  },
];

export const country = [
  {
    code: "br",
    name: "Brazil",
  },
 
];

export const sources = [
  {
    id: "globo",
    name: "Globo",
    pic: "https://upload.wikimedia.org/wikipedia/pt/9/9e/Logotipo_da_TV_Globo.png",
  },
  {
    id: "uol",
    name: "Uol",
    pic: "https://logodownload.org/wp-content/uploads/2018/09/uol-logo-0.png",
  },
  {
    id: "fox-news",
    name: "Fox News",
    pic: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Fox_News_Channel_logo.svg/768px-Fox_News_Channel_logo.svg.png",
  },
  {
    id: "bbc",
    name: "BBC News",
    pic: "https://static.wikia.nocookie.net/logopedia/images/4/4e/BBC_News_2022_%28Alt%2C_boxed%29.svg/revision/latest/scale-to-width-down/250?cb=20220425110627",
  },
];

export const BASE_URL = "https://newsapi.org/v2/";

export const getNewsAPI = (category, country = "br") => {
  // return `${BASE_URL}/top-headlines/category/${category}/${country}.json`;
  return `${BASE_URL}/top-headlines?country=${country}&category=${category}&apiKey=a8b37003fc0846d6923e1fb255121513`;
};

export const getSourceAPI = (source) => {

  return `${BASE_URL}/top-headlines?q=${source}&${country}&apiKey=a8b37003fc0846d6923e1fb255121513`;
};



