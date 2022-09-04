/**
 * Copyright (c) Facebook, Inc. and its affiliates. All Rights Reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import type { Test, TestResult } from '@jest/test-result';
import BaseReporter from './BaseReporter';
export default class GitHubActionsReporter extends BaseReporter {
    #private;
    static readonly filename: string;
    onTestFileResult({ context }: Test, { testResults }: TestResult): void;
}
