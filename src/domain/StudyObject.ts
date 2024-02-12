import { Moment } from "moment"

export interface IStudyObjectDTO {
  id: string
  name: string
  website: string
  deadline: Moment
  startDate: Moment
  cost: number
}

export class StudyObject implements IStudyObjectDTO {
  public constructor(
    public readonly id: string,
    public readonly name: string,
    public readonly website: string,
    public readonly deadline: Moment,
    public readonly startDate: Moment,
    public readonly cost: number,
  ) {
  }
}