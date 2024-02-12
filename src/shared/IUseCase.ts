export interface IUseCase<TInput, TOutput> {
  calculate(input: TInput): TOutput
}