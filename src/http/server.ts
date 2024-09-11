import {
  serializerCompiler,
  validatorCompiler,
  type ZodTypeProvider,
} from "fastify-type-provider-zod"
import fastify from "fastify"
import { createGoalRoute } from "./routes/create-goal"
import { createCompletionRoute } from "./routes/create-completion"
import { getPendingGoalsRoute } from "./routes/get-pending-goals"
import { getWeekSummaryRoute } from "./routes/get-week-summary"

const app = fastify().withTypeProvider<ZodTypeProvider>()

// Add schema validator and serializer
app.setValidatorCompiler(validatorCompiler)
app.setSerializerCompiler(serializerCompiler)

app.register(createGoalRoute)
app.register(createCompletionRoute)
app.register(getPendingGoalsRoute)
app.register(getWeekSummaryRoute)

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log("HTTP server Running!")
  })
