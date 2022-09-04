/**
 * Copyright (c) Facebook, Inc. and its affiliates. All Rights Reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import type { Config } from '@jest/types';
import { CoverageWorkerResult } from './generateEmptyCoverage';
import type { ReporterContext } from './types';
declare type SerializeSet<T> = T extends Set<infer U> ? Array<U> : T;
declare type CoverageReporterContext = Pick<ReporterContext, 'changedFiles' | 'sourcesRelatedToTestsInChangedFiles'>;
declare type CoverageReporterSerializedContext = {
    [K in keyof CoverageReporterContext]: SerializeSet<ReporterContext[K]>;
};
export declare type CoverageWorkerData = {
    config: Config.ProjectConfig;
    context: CoverageReporterSerializedContext;
    globalConfig: Config.GlobalConfig;
    path: string;
};
export declare function worker({ config, globalConfig, path, context, }: CoverageWorkerData): Promise<CoverageWorkerResult | null>;
export {};
