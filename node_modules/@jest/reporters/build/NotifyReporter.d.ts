/**
 * Copyright (c) Facebook, Inc. and its affiliates. All Rights Reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import type { AggregatedResult, TestContext } from '@jest/test-result';
import type { Config } from '@jest/types';
import BaseReporter from './BaseReporter';
import type { ReporterContext } from './types';
export default class NotifyReporter extends BaseReporter {
    private _notifier;
    private _globalConfig;
    private _context;
    static readonly filename: string;
    constructor(globalConfig: Config.GlobalConfig, context: ReporterContext);
    onRunComplete(testContexts: Set<TestContext>, result: AggregatedResult): void;
}
