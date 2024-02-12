import { IUseCase } from "../shared/IUseCase"
import { StudyObject } from "../domain/StudyObject"
import { IValidator } from "../domain/Validator"

export interface ICalculateUseCaseDTO {
  data: StudyObject,
}

export interface ICalculateUseCaseResult {
  id: string
  score: number
}

export class CalculateScoreUseCase implements IUseCase<ICalculateUseCaseDTO, ICalculateUseCaseResult> {
  public constructor(
    public validators: IValidator[],
  ) {
  }

  public calculate(input: ICalculateUseCaseDTO): ICalculateUseCaseResult {
    const result: ICalculateUseCaseResult = {
      id: input.data.id,
      score: 0,
    }

    this.validators.forEach((validator: IValidator) => {
      result.score += validator.validate(input.data)
    })

    return result
  }
}