import { Request, Response } from "express"
import { CalculateScoreUseCase, ICalculateUseCaseResult } from "../application/CalculateScoreUseCase"
import { InMemoryStudyObject } from "../infrastructure/InMemoryStudyObject"
import { StudyObject } from "../domain/StudyObject"

export class CalculateScoreController {
  public constructor(private readonly _useCase: CalculateScoreUseCase) {
  }

  public async handle(req: Request, res: Response): Promise<void> {
    const input = InMemoryStudyObject.getData()
    const result: ICalculateUseCaseResult[] = []

    input.forEach((studyObject: StudyObject) => {
      const individualScore = this._useCase.calculate({
        data: studyObject
      })
      result.push(individualScore)
    })

    res.status(201).json(result)
  }
}
