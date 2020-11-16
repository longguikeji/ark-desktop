
import { Flow } from 'arkfbp/lib/flow'
import { Graph } from 'arkfbp/lib/graph'

import { Redirect } from './nodes/redirect'
import { GetLoginUrl } from './nodes/getLoginUrl'

export default class Main extends Flow {

    createGraph() {
        const g = new Graph()
        g.nodes = [
            {
                'cls': GetLoginUrl,
                'id': 'get_login_url',
                'next': 'redirect'
            },
            {
                'cls': Redirect,
                'id': 'redirect',
            },
        ]

        return g
    }

}