/**
 * Copyright (c) Facebook, Inc. and its affiliates. All Rights Reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import type { Test, TestContext } from '@jest/test-result';
import type { Config } from '@jest/types';
import type { ChangedFiles } from 'jest-changed-files';
import type { Filter, Stats } from './types';
export declare type SearchResult = {
    noSCM?: boolean;
    stats?: Stats;
    collectCoverageFrom?: Set<string>;
    tests: Array<Test>;
    total?: number;
};
export default class SearchSource {
    private _context;
    private _dependencyResolver;
    private _testPathCases;
    constructor(context: TestContext);
    private _getOrBuildDependencyResolver;
    private _filterTestPathsWithStats;
    private _getAllTestPaths;
    isTestFilePath(path: string): boolean;
    findMatchingTests(testPathPattern: string): SearchResult;
    findRelatedTests(allPaths: Set<string>, collectCoverage: boolean): Promise<SearchResult>;
    findTestsByPaths(paths: Array<string>): SearchResult;
    findRelatedTestsFromPattern(paths: Array<string>, collectCoverage: boolean): Promise<SearchResult>;
    findTestRelatedToChangedFiles(changedFilesInfo: ChangedFiles, collectCoverage: boolean): Promise<SearchResult>;
    private _getTestPaths;
    filterPathsWin32(paths: Array<string>): Array<string>;
    getTestPaths(globalConfig: Config.GlobalConfig, changedFiles?: ChangedFiles, filter?: Filter): Promise<SearchResult>;
    findRelatedSourcesFromTestsInChangedFiles(changedFilesInfo: ChangedFiles): Promise<Array<string>>;
}
