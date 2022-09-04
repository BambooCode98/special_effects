/**
 * Copyright (c) Facebook, Inc. and its affiliates. All Rights Reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { BaseReporter as JestReporter, Reporter, ReporterContext } from '@jest/reporters';
import { AggregatedResult, Test } from '@jest/test-result';
import type { Config } from '@jest/types';
import type { TestRunnerContext } from 'jest-runner';
import type { TestWatcher } from 'jest-watcher';
export declare type ReporterConstructor = new (globalConfig: Config.GlobalConfig, reporterConfig: Record<string, unknown>, reporterContext: ReporterContext) => JestReporter;
export declare type TestSchedulerContext = ReporterContext & TestRunnerContext;
export declare function createTestScheduler(globalConfig: Config.GlobalConfig, context: TestSchedulerContext): Promise<TestScheduler>;
declare class TestScheduler {
    private readonly _context;
    private readonly _dispatcher;
    private readonly _globalConfig;
    constructor(globalConfig: Config.GlobalConfig, context: TestSchedulerContext);
    addReporter(reporter: Reporter): void;
    removeReporter(reporterConstructor: ReporterConstructor): void;
    scheduleTests(tests: Array<Test>, watcher: TestWatcher): Promise<AggregatedResult>;
    private _partitionTests;
    _setupReporters(): Promise<void>;
    private _addCustomReporter;
    private _bailIfNeeded;
}
export {};
