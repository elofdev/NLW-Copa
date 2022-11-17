import Fastify from "fastify"
import { PrismaClient } from '@prisma/client'
import cors from '@fastify/cors'
import fastifyCors from "@fastify/cors"

//@client do prisma
const prisma = new PrismaClient({
    log:['query'],
})

//Logs
async function bootstrap() {
    const fastify = Fastify({
        logger:true,
    })

// Register para o Cors (<Atençao> em produção será  origin: 'www.seudominio.com.br')
await fastify.register(cors, {
    origin: true,
}

)
    //primeira rota
    fastify.get('/pools/count',async() => {

        const count = await prisma.pool.count()
        return { count } 

    })

    /*
    <atenção> para funcionar a instrução do cors no mobile adicionar ao listen o " ,host:'0.0.0.0' " 
    ajustes para facilitar que a aplicação seja facilmente consumida pelo React e pelo React Native(mobile)
    */
    await fastify.listen({port:3333, host:'0.0.0.0'})
}
bootstrap()