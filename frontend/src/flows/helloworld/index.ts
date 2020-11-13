
import { Flow } from 'arkfbp/lib/flow'
import { Graph } from 'arkfbp/lib/graph'

import { SayHi } from './nodes/sayHi'
import { SayGoodbye } from './nodes/sayGoodbye'

export class Main extends Flow {

    createGraph() {
        const g = new Graph()
        g.nodes = [
            {
                'cls': SayHi,
                'id': 1,
                'next': 2,
            },
            {
                'cls': SayGoodbye,
                'id': 2,
            },

        ]

        return g
    }

}