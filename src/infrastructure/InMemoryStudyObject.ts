import { StudyObject } from "../domain/StudyObject"
import moment, { Moment } from "moment"

const dateFormat = "DD/MM/YYYY"
const date = (d: string): Moment => moment(d, dateFormat)

export class InMemoryStudyObject {
  public static getData(): StudyObject[] {
    return [
      {
        id: "123",
        deadline: date("10/2/2024"),
        startDate: date("13/8/2024"),
        name: "MBA",
        website: "https://mbaonline.com",
        cost: 16000,
      },
      {
        id: "1234",
        deadline: date("15/5/2024"),
        startDate: date("13/8/2024"),
        name: "MSc",
        website: "https://masteronline.com",
        cost: 12000,
      },
      {
        id: "1235",
        deadline: date("2/10/2024"),
        startDate: date("13/8/2024"),
        name: "MSc Data Science",
        website: "Data Science",
        cost: 20000,
      },
    ]
  }
}