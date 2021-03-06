import {NestFactory} from "@nestjs/core"
import { AppModule } from "./app.module"

async function start() {
    const PORT = process.env.PORT || 5000
    const app = await NestFactory.create(AppModule)

    app.listen(PORT, ()=>console.log("Server run on: ", PORT))
}

start()