import { IValidator } from "../../domain/Validator"
import { StudyObject } from "../../domain/StudyObject"
import { Moment } from "moment"

export class DeadlineValidator implements IValidator {
  public score: 10

  private _check5Months(startDate: Moment, deadline: Moment): number {
    return startDate.diff(deadline, "months")
  }

  public validate(data: StudyObject): number {
    if (!data.deadline || !data.startDate) {
      return 0
    }

    if (this._check5Months(data.startDate, data.deadline) > 5) {
      return this.score
    }

    return 0
  }
}
