// eslint-disable-next-line import/no-unresolved
import { server } from "./src/mocks/server"

if (typeof global.process === "undefined") {
  beforeAll(() => server.listen())
  afterEach(() => server.resetHandlers())
  afterAll(() => server.close())
}
