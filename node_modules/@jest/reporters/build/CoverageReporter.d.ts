/**
 * Copyright (c) Facebook, Inc. and its affiliates. All Rights Reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import type { AggregatedResult, Test, TestContext, TestResult } from '@jest/test-result';
import type { Config } from '@jest/types';
import BaseReporter from './BaseReporter';
import type { ReporterContext } from './types';
export default class CoverageReporter extends BaseReporter {
    private _context;
    private _coverageMap;
    private _globalConfig;
    private _sourceMapStore;
    private _v8CoverageResults;
    static readonly filename: string;
    constructor(globalConfig: Config.GlobalConfig, context: ReporterContext);
    onTestResult(_test: Test, testResult: TestResult): void;
    onRunComplete(testContexts: Set<TestContext>, aggregatedResults: AggregatedResult): Promise<void>;
    private _addUntestedFiles;
    private _checkThreshold;
    private _getCoverageResult;
}
