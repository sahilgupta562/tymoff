const Colors = ["#E0E0E0", "#E0E0E0", "#EAF1F1", "#EAEDEA", "#E2E9E9", "#d0c9d2", "#d3cdbd", "#E8E6E9", "#E3E9E9", "#E0E0E0", "#c1b9b2", "#DADADA", "#E1E1E1", "#d0c9d2", "#EAEDEA", "#EAF1F1"];

const SliderColors = [
  "#ef4746",
  "#214948",
  "#ffc803",
  "#867c71",
  "#90757a",
  "#272621",
  "#7c7e70",
  "#192c3d",
  "#8a7665",
  "#ffaec9",
  "#d3ccc5",
  "#d8c493",
  "#b5b0b0",
  "#bda4a3",
  "#a8c1c5",
  "#363636",
  "#262c3a",
  "#d2c1a2",
  "#f9c01b",
  "#97958b",
  "#ae5c46",
  "#90757a",
  "#d3cdbd",
  "#e5a5ad",
  "#bebab8",
  "#eea3bd",
  "#78795e",
  "#8f432e",
  "#623722",
  "#d98f70",
  "#435849",
  "#cec34f",
  "#5d7d49",
  "#bbb9b6",
  "#9d735e",
  "#b38a74",
  "#bfada9",
  "#847151",
  "#c1b9b2",
  "#cdb49e",
  "#263f55",
  "#b8c7ce",
  "#9e8556",
  "#767b74",
  "#a6b0b1",
  "#364648",
  "#5d4610",
  "#afaca2",
  "#5c5c5c",
  "#e2c4ce",
  "#ebb7a1",
  "#3d768a",
  "#fe83a6",
  "#aa7b8b",
  "#dbc3b4",
  "#cfa894",
  "#9a6a44",
  "#dac4a9",
  "#c2c2c2",
  "#362608",
  "#bdb0a5",
  "#06a9b4",
  "#d2cdd5",
  "#84c9d8",
  "#7ab973",
  "#be8f97",
  "#919191",
  "#d0c9d2",
  "#806f57",
  "#6b6961",
  "#b2988e",
  "#c2c3b8",
  "#2d212b",
  "#858181",
  "#b0a8a8",
  "#dea586",
  "#c0a834"
];

const Fonts = [
  "acme",
  "arapey",
  "CormorantGaramond",
  "EbGaramond",
  "JosefinSans",
  "KaushanScript",
  "LibreBaskerville",
  "Lobster",
  "Lora",
  "Lusitana",
  "NotoSerif",
  "PTSerif",
  "Quicksand",
  "Satisfy",
  "SawarabiMincho",
  "SpecialElite",
  "Volllorn"
];

const BlankItems = [
  {
    id: "b1",
    height: 190,
    loading: true,
    backgroundColor: Colors[0]
  },
  {
    id: "b2",
    height: 155,
    loading: true,
    backgroundColor: Colors[1]
  },
  {
    id: "b3",
    height: 250,
    loading: true,
    backgroundColor: Colors[2]
  },
  {
    id: "b4",
    height: 100,
    loading: true,
    backgroundColor: Colors[3]
  },
  {
    id: "b5",
    height: 140,
    loading: true,
    backgroundColor: Colors[4]
  },
  {
    id: "b6",
    height: 140,
    loading: true,
    backgroundColor: Colors[5]
  },
  {
    id: "b7",
    height: 280,
    loading: true,
    backgroundColor: Colors[6]
  },
  {
    id: "b8",
    height: 130,
    loading: true,
    backgroundColor: Colors[7]
  },
  {
    id: "b9",
    height: 230,
    loading: true,
    backgroundColor: Colors[8]
  },
  {
    id: "b10",
    height: 280,
    loading: true,
    backgroundColor: Colors[9]
  },
  {
    id: "b11",
    height: 200,
    loading: true,
    backgroundColor: Colors[10]
  },
  {
    id: "b12",
    height: 230,
    loading: true,
    backgroundColor: Colors[11]
  },
  {
    id: "b13",
    height: 240,
    loading: true,
    backgroundColor: Colors[12]
  },
  {
    id: "b14",
    height: 290,
    loading: true,
    backgroundColor: Colors[13]
  },
  {
    id: "b15",
    height: 230,
    loading: true,
    backgroundColor: Colors[14]
  },
  {
    id: "b16",
    height: 250,
    loading: true,
    backgroundColor: Colors[15]
  }
];

const FilterObject = {
  contentSearch: "",
  genresList: [],
  formatsList: [],
  languagesList: [],
  countriesList: [],
  discoverId: null,
  is_category: false
};

const EditUserObject = { name: "", phone: "", countryId: 0, languageId: 0, gender: "", email: "", age: 0, address: "" };

export { Colors, BlankItems, FilterObject, Fonts, SliderColors, EditUserObject };
