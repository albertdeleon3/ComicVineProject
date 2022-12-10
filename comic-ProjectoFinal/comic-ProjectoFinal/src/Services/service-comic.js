import axios from "axios";

const ApiUrl =
  "https://cors-anywhere.herokuapp.com/http://comicvine.gamespot.com/api/issues/ ";

const ComicList = () => {
  return axios.get(
    `${ApiUrl}/?api_key=1dbe6d017bac39a8ac8141f80bf31cbe427808ae&format=json"`
  );
};

const out = {
  GetComics: ComicList,
};

export default out;
