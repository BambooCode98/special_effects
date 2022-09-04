/**
 * Copyright (c) Facebook, Inc. and its affiliates. All Rights Reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import type { Reporter, ReporterOnStartOptions } from '@jest/reporters';
import type { AggregatedResult, Test, TestCaseResult, TestContext, TestResult } from '@jest/test-result';
import type { ReporterConstructor } from './TestScheduler';
export default class ReporterDispatcher {
    private _reporters;
    constructor();
    register(reporter: Reporter): void;
    unregister(reporterConstructor: ReporterConstructor): void;
    onTestFileResult(test: Test, testResult: TestResult, results: AggregatedResult): Promise<void>;
    onTestFileStart(test: Test): Promise<void>;
    onRunStart(results: AggregatedResult, options: ReporterOnStartOptions): Promise<void>;
    onTestCaseResult(test: Test, testCaseResult: TestCaseResult): Promise<void>;
    onRunComplete(testContexts: Set<TestContext>, results: AggregatedResult): Promise<void>;
    getErrors(): Array<Error>;
    hasErrors(): boolean;
}
