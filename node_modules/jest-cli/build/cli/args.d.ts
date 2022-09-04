/**
 * Copyright (c) Facebook, Inc. and its affiliates. All Rights Reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import type { Options } from 'yargs';
import type { Config } from '@jest/types';
export declare function check(argv: Config.Argv): true;
export declare const usage = "Usage: $0 [--config=<pathToConfigFile>] [TestPathPattern]";
export declare const docs = "Documentation: https://jestjs.io/";
export declare const options: {
    [key: string]: Options;
};
