/**
 * Copyright (c) Facebook, Inc. and its affiliates. All Rights Reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import type { AggregatedResult, TestContext } from '@jest/test-result';
import type { Config } from '@jest/types';
import BaseReporter from './BaseReporter';
import type { ReporterOnStartOptions } from './types';
export default class SummaryReporter extends BaseReporter {
    private _estimatedTime;
    private _globalConfig;
    static readonly filename: string;
    constructor(globalConfig: Config.GlobalConfig);
    private _write;
    onRunStart(aggregatedResults: AggregatedResult, options: ReporterOnStartOptions): void;
    onRunComplete(testContexts: Set<TestContext>, aggregatedResults: AggregatedResult): void;
    private _printSnapshotSummary;
    private _printSummary;
    private _getTestSummary;
}
