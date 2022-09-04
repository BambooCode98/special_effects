/**
 * Copyright (c) Facebook, Inc. and its affiliates. All Rights Reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
/// <reference types="node" />
import { PatternPrompt, Prompt, ScrollOptions } from 'jest-watcher';
export default class TestNamePatternPrompt extends PatternPrompt {
    constructor(pipe: NodeJS.WritableStream, prompt: Prompt);
    protected _onChange(pattern: string, options: ScrollOptions): void;
    private _printPrompt;
}
