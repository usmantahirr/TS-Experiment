import { CalculateScoreUseCase } from "./application/CalculateScoreUseCase"
import { CostValidator } from "./application/validators/CostValidator"
import { DeadlineValidator } from "./application/validators/DeadlineValidator"
import { IValidator } from "./domain/Validator"
import { CalculateScoreController } from "./presentation/CalculateScoreController"
import { APIServer } from "./presentation/APIServer"

export function main(): void {
  const validators: IValidator = [
    CostValidator,
    DeadlineValidator,
  ]

  const useCase = new CalculateScoreUseCase(validators)
  const controller = new CalculateScoreController(useCase)
  APIServer.run(5000, controller)
}

main()
