import { useReducer, useState } from "react";
import styles from "./index.module.scss";
import Subtitle from "@/components/Subtitle";

import noSortIcon from "@/assets/sort_neutral.svg";
import ascIcon from "@/assets/sort_asc.svg";
import descIcon from "@/assets/sort_desc.svg";
import searchIcon from "@/assets/search.svg";
import useDebounce from "@/hooks/useDebounce";

const predictionsData: [string, string, number][] = [
  ["datapro966", "Analyst", 0.54],
  ["datagenius625", "Developer", 0.81],
  ["datawizard17", "Analyst", 0.7],
  ["cloudmaster910", "Designer", 0.84],
  ["codegenius540", "Manager", 0.7],
  ["codemaster690", "Engineer", 0.55],
  ["cloudguru654", "Engineer", 0.46],
  ["datawizard877", "Manager", 0.13],
  ["datapro318", "Designer", 0],
  ["datapro796", "Designer", 0.35],
  ["techwizard629", "Manager", 0.26],
  ["techguru939", "Designer", 0.55],
  ["cloudmaster964", "Manager", 0.05],
  ["cloudwizard213", "Manager", 0.52],
  ["cloudmaster268", "Manager", 0.17],
  ["datagenius618", "Manager", 0.85],
  ["datagenius132", "Designer", 0.81],
  ["cloudwizard646", "Engineer", 0.44],
  ["datagenius106", "Engineer", 0.23],
  ["techgenius136", "Engineer", 0.19],
  ["datagenius931", "Analyst", 0.83],
  ["codemaster704", "Designer", 0.32],
  ["codeguru301", "Engineer", 0.12],
  ["netgenius453", "Engineer", 0.76],
  ["datamaster41", "Developer", 0.12],
];

type SortType = "noSort" | "asc" | "desc";

const iconsMap = {
  noSort: noSortIcon,
  asc: ascIcon,
  desc: descIcon,
} as const;

const sortData = (data: [string, string, number][], sortState: object) => {
  return [...data].sort((a, b) => {
    for (const key in sortState) {
      if (sortState[key as keyof typeof sortState] !== "noSort") {
        // Assuming the order of elements in each tuple is telegramId, speciality, probabilityOfLeaving
        let index;
        switch (key) {
          case "telegramId":
            index = 0;
            break;
          case "speciality":
            index = 1;
            break;
          case "probabilityOfLeaving":
            index = 2;
            break;
          default:
            return 0;
        }

        if (a[index] < b[index]) {
          return sortState[key as keyof typeof sortState] === "asc" ? -1 : 1;
        }
        if (a[index] > b[index]) {
          return sortState[key as keyof typeof sortState] === "asc" ? 1 : -1;
        }
      }
    }
    return 0;
  });
};

interface StateI {
  telegramId: SortType;
  speciality: SortType;
  probabilityOfLeaving: SortType;
}

const initialState: StateI = {
  telegramId: "noSort",
  speciality: "noSort",
  probabilityOfLeaving: "noSort",
};

interface ActionI {
  column: keyof StateI;
}

const sortingReducer = (state: StateI, action: ActionI) => {
  const nextState = { ...state };

  // Reset other columns to 'noSort' when one is sorted
  Object.keys(nextState).forEach((key) => {
    if (key !== action.column) {
      nextState[key as keyof StateI] = "noSort";
    }
  });

  // Cycle through 'noSort' -> 'asc' -> 'desc' -> 'noSort'
  switch (nextState[action.column]) {
    case "noSort":
      nextState[action.column] = "asc";
      break;
    case "asc":
      nextState[action.column] = "desc";
      break;
    case "desc":
      nextState[action.column] = "noSort";
      break;
    default:
      break;
  }

  return nextState;
};

const headerMetaData = [
  {
    name: "Telegram ID",
    sortId: "telegramId",
  },
  {
    name: "Специальность",
    sortId: "speciality",
  },
  {
    name: "Вероятность ухода",
    sortId: "probabilityOfLeaving",
  },
] as const;

function getColorForPercentage(percentage: number) {
  if (percentage <= 16.67) return "#00B812";
  if (percentage <= 33.33) return "#99CC33"; // Assuming you want a blue for 16.67% - 33.33%
  if (percentage <= 50.0) return "#DFB200"; // Assuming you want a purple for 33.33% - 50.00%
  if (percentage <= 66.67) return "#FF8C53";
  if (percentage <= 83.33) return "#FF0000"; // Assuming you want an orange for 66.67% - 83.33%
  return "red";
}

const PredictionsSection = () => {
  const [sortState, dispatchSort] = useReducer(sortingReducer, initialState);
  const [displayedData, setDisplayedData] = useState(predictionsData);

  const [telegramIdFilter, setTelegramIdFilter] = useState("");
  const [specialityFilter, setSpecialityFilter] = useState("");

  useDebounce(
    () => {
      // Filter and sort data whenever the original data or filters change
      const filteredData = predictionsData
        .filter((item) =>
          item[0].toLowerCase().includes(telegramIdFilter.toLowerCase()),
        )
        .filter((item) =>
          item[1].toLowerCase().includes(specialityFilter.toLowerCase()),
        );
      const sortedAndFilteredData = sortData(filteredData, sortState);
      setDisplayedData(sortedAndFilteredData);
    },
    300,
    [predictionsData, telegramIdFilter, specialityFilter, sortState],
  );

  // Dispatch function to change sorting
  const handleSortChange = (column: keyof StateI) => {
    dispatchSort({ column });
  };

  return (
    <>
      <Subtitle>Результаты предсказаний</Subtitle>
      <div className={styles.inputGroup}>
        <div className={styles.inputWrapper}>
          <input
            type="text"
            placeholder="Начните вводить telegram id"
            value={telegramIdFilter}
            onChange={(e) => setTelegramIdFilter(e.target.value)}
            className={styles.input}
          />
          <img
            src={searchIcon}
            width={24}
            height={24}
            className={styles.searchIcon}
          />
        </div>
        <div className={styles.inputWrapper}>
          <input
            type="text"
            placeholder="Начните вводить специальность"
            value={specialityFilter}
            onChange={(e) => setSpecialityFilter(e.target.value)}
            className={styles.input}
          />
          <img
            src={searchIcon}
            width={24}
            height={24}
            className={styles.searchIcon}
          />
        </div>
      </div>
      <div className={styles.tableWrapper}>
        <table className={styles.table}>
          <thead>
            <tr>
              {headerMetaData.map((item) => (
                <th key={item.name}>
                  <div className={styles.headerContainer}>
                    <p>{item.name}</p>
                    <button
                      onClick={() => handleSortChange(item.sortId)}
                      className={styles.button}
                    >
                      <img
                        src={iconsMap[sortState[item.sortId]]}
                        width={16}
                        height={16}
                      />
                    </button>
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {displayedData.map((item) => (
              <tr key={"".concat(item[0], item[1], item[2].toString())}>
                <td>{item[0]}</td>
                <td>{item[1]}</td>
                <td
                  className={styles.probability}
                  style={
                    {
                      "--color": getColorForPercentage(item[2] * 100),
                    } as React.CSSProperties
                  }
                >
                  {(item[2] * 100).toFixed(0)}%
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default PredictionsSection;
