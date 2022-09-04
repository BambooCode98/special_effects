/**
 * Copyright (c) Facebook, Inc. and its affiliates. All Rights Reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
/// <reference types="node" />
import type { TestContext } from '@jest/test-result';
import type { Config } from '@jest/types';
import type { default as HasteMap } from 'jest-haste-map';
import { JestHook } from 'jest-watcher';
import type { Filter } from './types';
export default function watch(initialGlobalConfig: Config.GlobalConfig, contexts: Array<TestContext>, outputStream: NodeJS.WriteStream, hasteMapInstances: Array<HasteMap>, stdin?: NodeJS.ReadStream, hooks?: JestHook, filter?: Filter): Promise<void>;
