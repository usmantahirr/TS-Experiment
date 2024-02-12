import express from 'express'
import { CalculateScoreController } from "./CalculateScoreController"

export class APIServer {
  public static run(port: number, controller: CalculateScoreController): void {
    const app = express()
    app.use(express.json())

    app.get('/calculate', (req, res) => controller.handle(req, res))
    app.listen(port, () => {
      console.log('server is running')
    })
  }
}
