import { FunctionNode } from 'arkfbp/lib/functionNode'

export class SayHi extends FunctionNode {

    async run() {
        console.info('say hi')
    }

}