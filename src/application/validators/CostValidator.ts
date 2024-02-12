import { IValidator } from "../../domain/Validator"
import { StudyObject } from "../../domain/StudyObject"

export class CostValidator implements IValidator {
  public score: 5
  public validate(data: StudyObject): number {
    if (!data.cost) {
      return 0
    }

    if (data.cost < 15000) {
      return this.score
    }

    return 0
  }
}
