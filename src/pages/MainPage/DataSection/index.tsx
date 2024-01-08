import Subtitle from "@/components/Subtitle";
import styles from "./index.module.scss";
import Button from "@/components/Button";
import plusIcon from "@/assets/plus.svg";
import { ChangeEvent, useRef, useState } from "react";
import getCurrentTimeAndDate from "@/utils/getCurrentTimeAndDate";
import formatBytes from "@/utils/formatBytes";

const DataSection: React.FC = () => {
  const [fileInfo, setFileInfo] = useState({
    name: "-",
    uploadDate: "-",
    size: "-",
  });
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];
    if (file) {
      setFileInfo({
        name: file.name,
        uploadDate: getCurrentTimeAndDate(),
        size: formatBytes(file.size),
      });
    }
  };

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <>
      <div className={styles.buttonBlock}>
        <Subtitle>Данные</Subtitle>
        <input
          type="file"
          onChange={handleFileChange}
          ref={fileInputRef}
          style={{ display: "none" }}
        />
        <Button onClick={handleClick}>
          <p>Загрузить файл</p>
          <img src={plusIcon} width={24} height={24} alt="" />
        </Button>
      </div>
      <p className={styles.description}>
        ИИ модель использует загруженный файл, чтобы предсказать вероятность
        ухода участника с проекта Pineapple Practice. СЕЙЧАС ЭТО ПРОСТО
        ЗАГЛУШКА, т.к. сервер может работать нестабильно. Данные не отправляются
        на сервер.
      </p>
      <table className={styles.tableWrapper}>
        <tbody>
          <tr>
            <th>Название файла</th>
            <td>{fileInfo.name}</td>
          </tr>
          <tr>
            <th>Дата загрузки</th>
            <td>{fileInfo.uploadDate}</td>
          </tr>
          <tr>
            <th>Размер файла</th>
            <td>{fileInfo.size}</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default DataSection;
