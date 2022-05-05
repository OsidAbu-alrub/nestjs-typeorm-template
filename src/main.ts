import { NestFactory } from "@nestjs/core"
import { AppModule } from "./app.module"
import helmet from "helmet"
import { config as dotEnvConfig } from "dotenv"

async function bootstrap() {
  dotEnvConfig()
  const PORT = process.env.PORT || 3000
  const app = await NestFactory.create(AppModule)
  app.setGlobalPrefix("api/v1")
  app.use(helmet())
  await app.listen(PORT)
  console.log(`Application started on http://localhost:${PORT}/`)
}
bootstrap()
