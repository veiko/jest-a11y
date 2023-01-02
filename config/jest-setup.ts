require('ts-node/register')
require('@testing-library/jest-dom')

import { toFailWith, toPassWith } from '../src/utils/testUtils'

import 'extend-expect'

expect.extend({ toFailWith, toPassWith })

const { configure } = require('@testing-library/react')

configure({ throwSuggestions: true })
