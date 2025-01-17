import type {
  Reporter,
  FullConfig,
  Suite,
  TestCase,
  TestResult,
  FullResult,
} from "@playwright/test/reporter";

class MyReporter implements Reporter {
  constructor(options: { customOption?: string } = {}) {
    console.log(
      `my-awesome-reporter setup with customOption set to ${options.customOption}`
    );
  }

  onBegin(config: FullConfig, suite: Suite) {
    console.log(`Starting the run with ${suite.allTests().length} tests`);
  }

  onTestBegin(test: TestCase) {
    console.log(`Starting test ${test.title}`);
  }

  onTestEnd(test: TestCase, result: TestResult) {
    console.log(`Finished test ${test.title}: ${result.status}`);
  }

  onEnd(result: FullResult) {
    var http = require("http");
    var fs = require("fs");
    http
      .createServer(function (req, res) {
        fs.readFile("playwright-report/index.html", function (err, data) {
          res.writeHead(200, { "Content-Type": "text/html" });
          res.write(data);
          return res.end();
        });
      })
      .listen(8080);
    console.log("hello");
  }

  async onExit(): Promise<void> {}
}
export default MyReporter;
