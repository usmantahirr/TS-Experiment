import { StudyObject } from "./StudyObject"

export interface IValidator {
  score: number // total score
  validate: (data: StudyObject) => number
}